import React from 'react'
import { Link } from 'gatsby'

const ServiceCard = ({ icon: Icon, title, subtitle, link }) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm active:shadow-[0_2px_4px_rgba(0,0,0,0.08)] active:bg-gray-50 md:hover:shadow-md transition-all duration-75 border border-gray-100"
    >
      <div className="mb-3 text-gray-700">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{subtitle}</p>
    </Link>
  )
}

export default ServiceCard
