import React, { useState, useEffect } from 'react'
import { buildWhatsAppLink, isMobileDevice } from '../utils/whatsapp'
import SuccessState from './SuccessState'

const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const AirportTransferStep = ({ settings, onClose, initialDirection = 'dropoff' }) => {
  const [direction, setDirection] = useState(initialDirection)
  const [date, setDate] = useState(getTodayDate())
  const [area, setArea] = useState('')
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
    const cleaned = phone.replace(/[^\d+]/g, '')

    if (!cleaned || cleaned.length === 0) {
      return { valid: false, error: '' }
    }

    const phonePattern = /^(\+?\d{1,4})?\d{7,14}$/
    const digitsOnly = cleaned.replace(/\+/g, '').replace(/\s/g, '')

    if (phonePattern.test(digitsOnly)) {
      return { valid: true, error: '' }
    }

    if (digitsOnly.length < 7) {
      return { valid: false, error: 'Phone number is too short' }
    }

    if (digitsOnly.length > 15) {
      return { valid: false, error: 'Phone number is too long' }
    }

    return { valid: false, error: 'Please enter a valid phone number' }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    const filtered = value.replace(/[^\d+\s\-()]/g, '')
    const limited = filtered.slice(0, 20)

    setPhoneNumber(limited)

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

  const isFormValid = () => {
    return date.trim().length > 0 && phoneNumber.trim().length > 0 && validatePhone(phoneNumber).valid
  }

  const dropoffPrice = settings?.airport_transfer_price_dropoff_usd
  const pickupPrice = settings?.airport_transfer_price_pickup_usd
  const price = direction === 'pickup' ? pickupPrice : dropoffPrice
  const areaLabel = direction === 'pickup' ? 'Drop-off area' : 'Pickup area'

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
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Book airport transfer</h2>
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

        <div className="relative min-h-[200px]">
          {showSuccess ? (
            <div className={`px-6 py-6 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <SuccessState onClose={handleClose} isTransfer={true} />
            </div>
          ) : (
            <div className={`px-6 py-6 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-gray-600 mb-6">
                Tell us the date and roughly where you'll be - we'll confirm your exact pickup point on WhatsApp.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDirection('dropoff')}
                      className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                        direction === 'dropoff'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Drop-off{dropoffPrice ? ` · $${dropoffPrice}` : ''}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDirection('pickup')}
                      className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                        direction === 'pickup'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Pickup{pickupPrice ? ` · $${pickupPrice}` : ''}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {direction === 'pickup' ? 'Arrival date' : 'Drop-off date'}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={getTodayDate()}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {areaLabel} <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. Galle Fort, hotel name"
                    maxLength={150}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

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
                      We'll confirm your exact pickup point on WhatsApp.
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
                    onClick={() => {
                      if (isFormValid() && !isSubmitting) {
                        setIsSubmitting(true)
                        setSubmitError('')

                        try {
                          const whatsappLink = buildWhatsAppLink('transfer', {
                            direction,
                            date,
                            area: area.trim(),
                            price,
                            phone: phoneNumber.trim(),
                          }, settings)

                          if (isMobileDevice()) {
                            window.location.href = whatsappLink
                          } else {
                            window.open(whatsappLink, '_blank', 'noopener,noreferrer')
                          }

                          setIsSubmitting(false)
                          setIsTransitioning(true)
                          setTimeout(() => {
                            setShowSuccess(true)
                            setIsTransitioning(false)
                          }, 300)
                        } catch (error) {
                          console.error('Error opening WhatsApp:', error)
                          setSubmitError('Could not open WhatsApp. Please try again.')
                          setIsSubmitting(false)
                        }
                      }
                    }}
                    disabled={!isFormValid() || isSubmitting}
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 h-11 rounded-full shadow-sm transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send booking request'}
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

export default AirportTransferStep
