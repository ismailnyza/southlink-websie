import React, { useState, useEffect } from 'react'
import AirportAutocomplete from './AirportAutocomplete'
import ContactStep from './ContactStep'

const FlightPlanner = ({ settings }) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [tripType, setTripType] = useState('return')
  
  // Set default departure date to today
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  
  const [departureDate, setDepartureDate] = useState(getTodayDate())
  const [returnDate, setReturnDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [cabinClass, setCabinClass] = useState('economy')
  const [showPassengers, setShowPassengers] = useState(false)
  const [showContactStep, setShowContactStep] = useState(false)

  const cabinOptions = [
    { value: 'economy', label: 'Economy' },
    { value: 'premium-economy', label: 'Premium Economy' },
    { value: 'business', label: 'Business' },
    { value: 'first', label: 'First' },
  ]

  const isFormValid = () => {
    // Check required fields
    if (!from || !from.trim()) return false
    if (!to || !to.trim()) return false
    if (!departureDate || !departureDate.trim()) return false
    
    // If return trip, return date is required
    if (tripType === 'return' && (!returnDate || !returnDate.trim())) return false
    
    // From and To cannot be the same
    if (from.trim().toLowerCase() === to.trim().toLowerCase()) return false
    
    return true
  }

  const getFlightData = () => {
    return {
      origin: from,
      destination: to,
      departure_date: departureDate || undefined,
      return_date: tripType === 'return' ? (returnDate || undefined) : undefined,
      passengers: {
        adults,
        children,
        infants,
      },
      cabin_class: cabinClass,
    }
  }

  const passengerSummary = () => {
    const parts = []
    if (adults > 0) parts.push(`${adults} ${adults === 1 ? 'Adult' : 'Adults'}`)
    if (children > 0) parts.push(`${children} ${children === 1 ? 'Child' : 'Children'}`)
    if (infants > 0) parts.push(`${infants} ${infants === 1 ? 'Infant' : 'Infants'}`)
    return parts.join(', ') || '1 Adult'
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        {/* Trip Type */}
        <div className="flex gap-2">
          <button
            onClick={() => setTripType('one-way')}
            className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors ${
              tripType === 'one-way'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            One-way
          </button>
          <button
            onClick={() => setTripType('return')}
            className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors ${
              tripType === 'return'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Return
          </button>
        </div>

        {/* From */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <AirportAutocomplete
            value={from}
            onChange={(value) => {
              setFrom(value)
              if (value && value.trim().toLowerCase() === to.trim().toLowerCase()) {
                setTo('')
              }
            }}
            placeholder="Departure city"
            defaultCode="CMB"
            excludeValue={to}
          />
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <AirportAutocomplete
            value={to}
            onChange={(value) => {
              setTo(value)
              if (value && value.trim().toLowerCase() === from.trim().toLowerCase()) {
                setFrom('')
              }
            }}
            placeholder="Destination city"
            defaultCode={null}
            excludeValue={from}
          />
        </div>

        {/* Dates */}
        <div className={tripType === 'return' ? 'grid grid-cols-2 gap-4' : ''}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Departure
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={getTodayDate()}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {tripType === 'return' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Return
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departureDate || getTodayDate()}
                placeholder="Select date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passengers
          </label>
          <button
            onClick={() => setShowPassengers(!showPassengers)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-left text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {passengerSummary()}
          </button>
          
          {showPassengers && (
            <div className="mt-2 rounded-xl border border-gray-200 bg-white p-4 space-y-3">
              {[
                { label: 'Adults', value: adults, set: setAdults, min: 1 },
                { label: 'Children', value: children, set: setChildren, min: 0 },
                { label: 'Infants', value: infants, set: setInfants, min: 0 },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{row.label}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => row.set(Math.max(row.min, row.value - 1))}
                      className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      disabled={row.value <= row.min}
                    >
                      <span className="text-sm">−</span>
                    </button>
                    <span className="w-6 text-center text-sm font-medium text-gray-900">
                      {row.value}
                    </span>
                    <button
                      onClick={() => row.set(row.value + 1)}
                      className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm">+</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cabin Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cabin class
          </label>
          <div className="grid grid-cols-2 gap-2">
            {cabinOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setCabinClass(option.value)}
                className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                  cabinClass === option.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button
            onClick={() => {
              if (isFormValid()) {
                setShowContactStep(true)
              }
            }}
             disabled={!isFormValid()}
             className={`w-full inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full transition-all ${
               isFormValid()
                 ? 'bg-green-600 hover:bg-green-700 text-white shadow-sm cursor-pointer'
                 : 'bg-gray-200 text-gray-500 cursor-not-allowed border-2 border-gray-300 border-dashed'
             }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Get flight options</span>
          </button>
        </div>
      </div>

      {showContactStep && (
        <ContactStep
          flightData={getFlightData()}
          settings={settings}
          onClose={() => setShowContactStep(false)}
        />
      )}
    </div>
  )
}

export default FlightPlanner
