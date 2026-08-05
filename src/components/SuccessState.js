import React from 'react'

const SuccessState = ({ onClose, isCorporate = false, isTransfer = false }) => {
  return (
    <div className="px-6 py-6">
      <div className="text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          WhatsApp opened
        </h2>

        {/* Body Copy */}
        {isCorporate ? (
          <>
            <p className="text-gray-600 mb-2 leading-relaxed">
              We've opened WhatsApp with your consultation request ready to go — just hit send to reach a corporate travel specialist.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We typically respond within one business day.
            </p>
          </>
        ) : isTransfer ? (
          <>
            <p className="text-gray-600 mb-2 leading-relaxed">
              We've opened WhatsApp with your transfer request ready to go — just hit send and we'll confirm your exact pickup point.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Most requests are answered within a few minutes.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-2 leading-relaxed">
              We've opened WhatsApp with your flight details ready to go — just hit send to reach your personal agent.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You'll hear back shortly with available options.
            </p>
            <p className="text-xs text-gray-500 mb-8">
              Most requests are answered within a few minutes.
            </p>
          </>
        )}

        {/* Primary Button */}
        <button
          onClick={onClose}
          className="w-full inline-flex items-center justify-center bg-primary hover:bg-red-600 text-white px-5 h-11 rounded-full shadow-sm transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default SuccessState
