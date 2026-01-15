import React, { useState, useRef, useEffect } from 'react'

const airports = [
  { code: 'CMB', name: 'Colombo (CMB)', city: 'Colombo', country: 'Sri Lanka' },
  { code: 'DXB', name: 'Dubai (DXB)', city: 'Dubai', country: 'UAE' },
  { code: 'SIN', name: 'Singapore (SIN)', city: 'Singapore', country: 'Singapore' },
  { code: 'BKK', name: 'Bangkok (BKK)', city: 'Bangkok', country: 'Thailand' },
  { code: 'KUL', name: 'Kuala Lumpur (KUL)', city: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'DOH', name: 'Doha (DOH)', city: 'Doha', country: 'Qatar' },
  { code: 'AUH', name: 'Abu Dhabi (AUH)', city: 'Abu Dhabi', country: 'UAE' },
  { code: 'LHR', name: 'London Heathrow (LHR)', city: 'London', country: 'UK' },
  { code: 'CDG', name: 'Paris (CDG)', city: 'Paris', country: 'France' },
  { code: 'FRA', name: 'Frankfurt (FRA)', city: 'Frankfurt', country: 'Germany' },
  { code: 'JFK', name: 'New York (JFK)', city: 'New York', country: 'USA' },
  { code: 'LAX', name: 'Los Angeles (LAX)', city: 'Los Angeles', country: 'USA' },
  { code: 'SYD', name: 'Sydney (SYD)', city: 'Sydney', country: 'Australia' },
  { code: 'MEL', name: 'Melbourne (MEL)', city: 'Melbourne', country: 'Australia' },
  { code: 'DEL', name: 'Delhi (DEL)', city: 'Delhi', country: 'India' },
  { code: 'BOM', name: 'Mumbai (BOM)', city: 'Mumbai', country: 'India' },
  { code: 'MLE', name: 'Malé (MLE)', city: 'Malé', country: 'Maldives' },
  { code: 'BIA', name: 'Bandaranaike (BIA)', city: 'Colombo', country: 'Sri Lanka' },
]

const AirportAutocomplete = ({ value, onChange, placeholder, defaultCode = 'CMB', excludeValue = '' }) => {
  const getInitialValue = () => {
    if (value) return value
    if (defaultCode) {
      const defaultAirport = airports.find(a => a.code === defaultCode)
      return defaultAirport?.name || ''
    }
    return ''
  }
  
  const [inputValue, setInputValue] = useState(getInitialValue())
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredAirports, setFilteredAirports] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)
  const wrapperRef = useRef(null)

  // Only set default value on initial mount, not when value becomes empty
  useEffect(() => {
    if (!isInitialized) {
      if (value) {
        setInputValue(value)
      } else if (defaultCode && !value) {
        const defaultAirport = airports.find(a => a.code === defaultCode)
        if (defaultAirport) {
          setInputValue(defaultAirport.name)
          onChange(defaultAirport.name)
        } else {
          setInputValue('')
          onChange('')
        }
      } else {
        setInputValue('')
        onChange('')
      }
      setIsInitialized(true)
    } else if (value !== undefined && value !== inputValue) {
      // Only update if value prop changes externally
      setInputValue(value || '')
    }
  }, [value, defaultCode, onChange, isInitialized, inputValue])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const query = e.target.value
    setInputValue(query)
    
    // Update parent component immediately
    onChange(query)

    if (query.length > 0) {
      const queryLower = query.toLowerCase()
      
      // Filter airports using regex-like matching (case-insensitive)
      const filtered = airports.filter(
        airport => {
          // Exclude airport if it matches the excludeValue
          if (excludeValue && airport.name.toLowerCase() === excludeValue.toLowerCase()) {
            return false
          }
          
          const nameMatch = airport.name.toLowerCase().includes(queryLower)
          const cityMatch = airport.city.toLowerCase().includes(queryLower)
          const codeMatch = airport.code.toLowerCase().includes(queryLower)
          const countryMatch = airport.country.toLowerCase().includes(queryLower)
          
          // Also check if query matches the beginning of any part
          const nameStartsWith = airport.name.toLowerCase().startsWith(queryLower)
          const cityStartsWith = airport.city.toLowerCase().startsWith(queryLower)
          const codeStartsWith = airport.code.toLowerCase().startsWith(queryLower)
          
          return nameMatch || cityMatch || codeMatch || countryMatch || nameStartsWith || cityStartsWith || codeStartsWith
        }
      )
      
      // Sort: exact matches first, then starts with, then contains
      const sorted = filtered.sort((a, b) => {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        const aCity = a.city.toLowerCase()
        const bCity = b.city.toLowerCase()
        const aCode = a.code.toLowerCase()
        const bCode = b.code.toLowerCase()
        
        // Exact match gets highest priority
        if (aName === queryLower || aCity === queryLower || aCode === queryLower) return -1
        if (bName === queryLower || bCity === queryLower || bCode === queryLower) return 1
        
        // Starts with gets second priority
        if (aName.startsWith(queryLower) || aCity.startsWith(queryLower) || aCode.startsWith(queryLower)) return -1
        if (bName.startsWith(queryLower) || bCity.startsWith(queryLower) || bCode.startsWith(queryLower)) return 1
        
        return 0
      })
      
      setFilteredAirports(sorted.slice(0, 8))
      setShowSuggestions(true)
    } else {
      setFilteredAirports([])
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e) => {
    // If backspace is pressed and a complete airport name is selected, clear it entirely
    if (e.key === 'Backspace' && inputValue.length > 0) {
      // Check if the current value matches a complete airport name (not partial typing)
      const isCompleteAirportName = airports.some(airport => airport.name === inputValue)
      
      // If it's a complete airport name or cursor is at the end, clear entirely
      if (isCompleteAirportName || e.target.selectionStart === inputValue.length) {
        setInputValue('')
        onChange('') // Set to empty string, not null, but empty
        setFilteredAirports([])
        setShowSuggestions(false)
        e.preventDefault()
      }
    }
  }

  const handleSelect = (airport) => {
    setInputValue(airport.name)
    onChange(airport.name)
    setShowSuggestions(false)
  }

  const handleFocus = () => {
    if (inputValue.length > 0) {
      const queryLower = inputValue.toLowerCase()
      const filtered = airports.filter(
        airport => {
          // Exclude airport if it matches the excludeValue
          if (excludeValue && airport.name.toLowerCase() === excludeValue.toLowerCase()) {
            return false
          }
          
          const nameMatch = airport.name.toLowerCase().includes(queryLower)
          const cityMatch = airport.city.toLowerCase().includes(queryLower)
          const codeMatch = airport.code.toLowerCase().includes(queryLower)
          const countryMatch = airport.country.toLowerCase().includes(queryLower)
          
          return nameMatch || cityMatch || codeMatch || countryMatch
        }
      )
      
      // Sort by relevance
      const sorted = filtered.sort((a, b) => {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        const aCity = a.city.toLowerCase()
        const bCity = b.city.toLowerCase()
        const aCode = a.code.toLowerCase()
        const bCode = b.code.toLowerCase()
        
        if (aName === queryLower || aCity === queryLower || aCode === queryLower) return -1
        if (bName === queryLower || bCity === queryLower || bCode === queryLower) return 1
        
        if (aName.startsWith(queryLower) || aCity.startsWith(queryLower) || aCode.startsWith(queryLower)) return -1
        if (bName.startsWith(queryLower) || bCity.startsWith(queryLower) || bCode.startsWith(queryLower)) return 1
        
        return 0
      })
      
      setFilteredAirports(sorted.slice(0, 8))
      setShowSuggestions(true)
    } else {
      // Show all airports when focused but empty (excluding excludeValue)
      const availableAirports = excludeValue 
        ? airports.filter(airport => airport.name.toLowerCase() !== excludeValue.toLowerCase())
        : airports
      setFilteredAirports(availableAirports.slice(0, 8))
      setShowSuggestions(true)
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      {showSuggestions && filteredAirports.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
          {filteredAirports.map((airport) => (
            <button
              key={airport.code}
              type="button"
              onClick={() => handleSelect(airport)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-gray-900">{airport.name}</div>
              <div className="text-xs text-gray-500">{airport.city}, {airport.country}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AirportAutocomplete
