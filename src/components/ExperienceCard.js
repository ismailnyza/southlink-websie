import React from 'react'
import LazyImage from './LazyImage'

const ExperienceCard = ({ experience }) => {
  if (!experience || !experience.visibility) return null

  const imageUrl = experience.images && experience.images.length > 0 
    ? experience.images[0] 
    : '/images/placeholder.jpg'

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="aspect-w-16 aspect-h-10 bg-gray-200">
        <LazyImage
          src={imageUrl}
          alt={experience.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {experience.title}
        </h3>
        {experience.description ? (
          <p className="text-sm text-gray-600 leading-relaxed">
            {experience.description}
          </p>
        ) : experience.destination && !experience.map_location ? (
          <p className="text-sm text-gray-600 leading-relaxed">
            {experience.destination}
          </p>
        ) : null}
        {experience.duration && (
          <p className="text-xs text-gray-500 mt-2">{experience.duration}</p>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
