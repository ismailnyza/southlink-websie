import React from 'react'

const getEmotionalSubtitle = (destination, tags) => {
  if (tags && tags.length > 0) {
    const tagMap = {
      'luxury': 'City of Gold',
      'adventure': 'Adventure Awaits',
      'heritage': 'Historic Journey',
      'culture': 'Cultural Escape',
      'beach': 'Island Escape',
    }
    for (const tag of tags) {
      if (tagMap[tag.toLowerCase()]) {
        return tagMap[tag.toLowerCase()]
      }
    }
  }
  
  const destinationMap = {
    'Dubai': 'City of Gold',
    'Galle': 'Historic Fort City',
    'Singapore': 'Urban Paradise',
    'Maldives': 'Island Escape',
  }
  
  return destinationMap[destination] || 'Discover More'
}

const TrendingDestinationCard = ({ tour, onClick }) => {
  if (!tour || !tour.visibility) return null

  const imageUrl = tour.images && tour.images.length > 0 ? tour.images[0] : '/images/placeholder.jpg'
  const emotionalSubtitle = getEmotionalSubtitle(tour.destination, tour.tags)

  return (
    <button
      onClick={() => onClick && onClick(tour)}
      className="flex-shrink-0 w-48 block bg-white rounded-2xl overflow-hidden shadow-md active:shadow-lg active:scale-[0.98] active:bg-gray-50 transition-all duration-150 text-left"
    >
      <div className="relative h-64 bg-gray-200">
        <img
          src={imageUrl}
          alt={tour.destination || tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg mb-1">
            {tour.destination || tour.title}
          </h3>
          <p className="text-sm text-white/90 mb-2">
            {emotionalSubtitle}
          </p>
          <p className="text-xs text-white/80">
            {tour.price ? `From LKR ${tour.price.toLocaleString()}` : 'Contact for price'}
          </p>
        </div>
      </div>
    </button>
  )
}

export default TrendingDestinationCard
