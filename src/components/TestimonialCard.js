import React from 'react'

const TestimonialCard = ({ rating, text, author, location }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">"{text}"</p>
      <div className="text-sm">
        <p className="font-medium text-gray-900">— {author}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
