import React, { useEffect, useState } from 'react'
import LazyImage from './LazyImage'
import WhatsAppButton from './WhatsAppButton'

const TourDetailModal = ({ tour, settings, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

  if (!tour) return null

  const mainImage = tour.images && tour.images.length > 0 ? tour.images[0] : '/images/placeholder.jpg'
  const tagsText = tour.tags && tour.tags.length > 0 
    ? tour.tags.join(' · ')
    : tour.destination || ''

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-end justify-center"
      onClick={handleClose}
    >
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />
      <div 
        className={`relative bg-white rounded-t-3xl w-full max-w-md h-screen overflow-y-auto shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen && !isClosing ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center z-10">
          <button
            onClick={handleClose}
            className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-lg font-bold text-gray-900 flex-1">{tour.title}</h2>
        </div>

        <div className="relative">
          <div className="w-full h-72 bg-gray-200">
            <LazyImage
              src={mainImage}
              alt={tour.title}
              className="w-full h-72 object-cover rounded-b-3xl"
            />
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {tour.title}
            </h1>
            {tagsText && (
              <p className="text-lg text-gray-600 mb-4">
                {tagsText}
              </p>
            )}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full">
              <span className="text-xs font-medium text-primary">
                Designed by our local team
              </span>
            </div>
          </div>

          {tour.duration && (
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Quick facts
              </h2>
              <div className="space-y-3">
                {tour.duration && (
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 w-24">Duration</span>
                    <span className="text-gray-900">{tour.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-24">Pace</span>
                  <span className="text-gray-900">Relaxed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-24">Best time</span>
                  <span className="text-gray-900">Year-round</span>
                </div>
              </div>
            </div>
          )}

          {tour.description && (
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About this experience
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {tour.description}
              </p>
            </div>
          )}

          {tour.itinerary && tour.itinerary.length > 0 && (
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What you'll experience
              </h2>
              <ul className="space-y-3">
                {tour.itinerary.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="text-gray-400 mr-2">•</span>
                    {item.title || item.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How we handle this for you
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Planned by a dedicated agent</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Customizable itinerary</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Based in Galle</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <WhatsAppButton
              context="tour"
              data={tour}
              settings={settings}
              className="w-full justify-center"
              variant="premium"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              No booking required. We'll tailor it to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetailModal
