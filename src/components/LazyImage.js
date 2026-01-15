import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ src, alt, className, placeholder = '/images/placeholder.jpg' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image()
            img.src = src
            img.onload = () => {
              setImageSrc(src)
              setIsLoaded(true)
            }
            img.onerror = () => {
              setImageSrc(placeholder)
              setIsLoaded(true)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '400px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src, placeholder])

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-50' : 'opacity-100 transition-opacity duration-300'}`}
    />
  )
}

export default LazyImage
