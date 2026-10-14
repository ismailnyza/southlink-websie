import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LazyImage from './LazyImage'

export default function TourImage({ tour, className, sizes }) {
  const image = getImage(tour.coverImage)
  return image ? (
    <GatsbyImage
      image={image}
      alt={tour.title}
      className={className}
      sizes={sizes}
      imgStyle={image.height > image.width ? { objectPosition: 'center top' } : undefined}
    />
  ) : (
    <LazyImage src={tour.images[0]} alt={tour.title} className={className} />
  )
}

export const coverFragment = graphql`
  fragment TourCover on File {
    childImageSharp {
      gatsbyImageData(
        width: 1200
        layout: CONSTRAINED
        formats: [AUTO, WEBP]
        placeholder: BLURRED
        quality: 78
      )
    }
  }
`
