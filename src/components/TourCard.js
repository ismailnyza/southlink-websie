import React from 'react'
import LazyImage from './LazyImage'

const TourCard = ({ tour, badge, onClick }) => {
  if (!tour || !tour.visibility) return null

  const imageUrl = tour.images && tour.images.length > 0 
    ? tour.images[0] 
    : '/images/placeholder.jpg'

  const tagsText = tour.tags && tour.tags.length > 0 
    ? tour.tags.slice(0, 2).join(' · ')
    : tour.destination || ''

  const locationText = tour.map_location || tour.destination || 'Sri Lanka'

  return (
    <button
      onClick={() => onClick && onClick(tour)}
      className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.98] active:bg-gray-50 active:shadow-md transition-all duration-150 h-full flex flex-col"
      style={{ height: '320px' }}
    >
      <div className="relative flex-shrink-0">
        <div className="bg-gray-200" style={{ height: '180px' }}>
          <LazyImage
            src={imageUrl}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
        </div>
        {badge && (
          <div className="absolute top-2 right-2">
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full shadow-sm">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1 min-h-[2.5rem]">
          <h3 className="text-base font-bold text-gray-900 leading-tight flex-1 line-clamp-2">
            {tour.title}
          </h3>
          <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {tagsText && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-1 flex-shrink-0">
            {tagsText}
          </p>
        )}
        <div className="flex items-center gap-1.5 mb-2 flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-gray-500 line-clamp-1">{locationText}</span>
        </div>
        <p className="text-xs text-gray-400 mt-auto">
          View details
        </p>
      </div>
    </button>
  )
}

export default TourCard
