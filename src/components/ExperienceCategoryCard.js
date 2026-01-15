import React from 'react'

const ExperienceCategoryCard = ({ title, description, experiences, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:shadow-md active:bg-gray-50 transition-all duration-75"
    >
      <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500">{experiences}</p>
      </div>
    </button>
  )
}

export default ExperienceCategoryCard
