import React, { useState, useEffect } from 'react'
import { sendFlightRequestToWhatsApp } from '../utils/whatsapp-webhook'
import SuccessState from './SuccessState'

const ContactStep = ({ flightData, settings, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      setIsOpen(true)
    })
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setIsOpen(false)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  const validatePhone = (phone) => {
    // Remove all non-digit characters except + for validation
    const cleaned = phone.replace(/[^\d+]/g, '')
    
    // Check if empty
    if (!cleaned || cleaned.length === 0) {
      return { valid: false, error: '' }
    }

    // Check for Sri Lankan phone numbers (10 digits starting with 0, or 9 digits without 0)
    // Format: 0XX XXX XXXX or +94 XX XXX XXXX or 94 XX XXX XXXX
    const sriLankanPattern = /^(\+?94|0)?[1-9]\d{8}$/
    
    // Check for international phone numbers (7-15 digits with optional country code)
    const internationalPattern = /^(\+?\d{1,4})?\s?\d{6,14}$/
    
    // Remove + and spaces for pattern matching
    const digitsOnly = cleaned.replace(/\+/g, '').replace(/\s/g, '')
    
    if (sriLankanPattern.test(digitsOnly) || internationalPattern.test(digitsOnly)) {
      return { valid: true, error: '' }
    }
    
    // Check minimum length
    if (digitsOnly.length < 7) {
      return { valid: false, error: 'Phone number is too short' }
    }
    
    // Check maximum length
    if (digitsOnly.length > 15) {
      return { valid: false, error: 'Phone number is too long' }
    }
    
    return { valid: false, error: 'Please enter a valid phone number' }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    
    // Only allow digits, +, spaces, dashes, and parentheses
    const filtered = value.replace(/[^\d+\s\-()]/g, '')
    
    // Limit length to prevent extremely long inputs
    const limited = filtered.slice(0, 20)
    
    setPhoneNumber(limited)
    
    // Validate only if user has entered something
    if (limited.length > 0) {
      const validation = validatePhone(limited)
      setPhoneError(validation.error)
    } else {
      setPhoneError('')
    }
  }

  const handlePhoneBlur = () => {
    if (phoneNumber.trim()) {
      const validation = validatePhone(phoneNumber)
      setPhoneError(validation.error)
    }
  }

  const isPhoneValid = () => {
    if (!phoneNumber.trim()) return false
    return validatePhone(phoneNumber).valid
  }

  const getDataWithContact = () => {
    return {
      ...flightData,
      phone: phoneNumber.trim(),
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={handleClose}
    >
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />
      <div 
        className={`relative bg-white rounded-t-3xl md:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen && !isClosing ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Almost there</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="relative min-h-[200px]">
          {showSuccess ? (
            <div className={`px-6 py-6 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <SuccessState onClose={handleClose} />
            </div>
          ) : (
            <div className={`px-6 py-6 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-gray-600 mb-6">
              Where should we send your flight options?
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  placeholder="+94 77 123 4567"
                  maxLength={20}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:outline-none focus:ring-2 transition-colors ${
                    phoneError
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-primary focus:border-transparent'
                  }`}
                />
                {phoneError ? (
                  <p className="text-xs text-red-600 mt-2">
                    {phoneError}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-2">
                    We'll only use this to confirm routes and fares with you.
                  </p>
                )}
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={async () => {
                    if (isPhoneValid() && !isSubmitting) {
                      setIsSubmitting(true)
                      setSubmitError('')

                      try {
                        const dataWithContact = getDataWithContact()
                        
                        // Send to WhatsApp webhook
                        const whatsappConfig = {
                          whatsapp_api_url: settings?.whatsapp_api_url || (typeof window !== 'undefined' && window.GATSBY_WHATSAPP_API_URL),
                          whatsapp_api_key: settings?.whatsapp_api_key || (typeof window !== 'undefined' && window.GATSBY_WHATSAPP_API_KEY),
                          recipient_number: settings?.whatsapp_recipient_number || (typeof window !== 'undefined' && window.GATSBY_WHATSAPP_RECIPIENT_NUMBER),
                        }
                        
                        if (whatsappConfig.whatsapp_api_url) {
                          const result = await sendFlightRequestToWhatsApp(dataWithContact, whatsappConfig)
                          if (!result.success) {
                            setSubmitError('Failed to submit request. Please try again.')
                            setIsSubmitting(false)
                            return
                          }
                        }

                        // Show success state
                        setIsSubmitting(false)
                        setIsTransitioning(true)
                        setTimeout(() => {
                          setShowSuccess(true)
                          setIsTransitioning(false)
                        }, 300)
                      } catch (error) {
                        console.error('Error submitting:', error)
                        setSubmitError('An error occurred. Please try again.')
                        setIsSubmitting(false)
                      }
                    }
                  }}
                  disabled={!isPhoneValid() || isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-primary hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 h-11 rounded-full shadow-sm transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Continue'}
                </button>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactStep
