import React from 'react'

export default function LazyImage({
  src,
  alt,
  className,
  placeholder = '/images/placeholder.jpg',
}) {
  return (
    <img
      src={src || placeholder}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = placeholder
      }}
    />
  )
}
