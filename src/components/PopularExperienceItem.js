import React from 'react'

const PopularExperienceItem = ({ experience, onClick }) => {
  if (!experience || !experience.visibility) return null

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl p-4 border border-gray-100 active:bg-gray-50 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{experience.title}</h3>
          {experience.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{experience.description}</p>
          )}
          {experience.duration && (
            <p className="text-xs text-gray-500 mt-2">{experience.duration}</p>
          )}
        </div>
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}

export default PopularExperienceItem
