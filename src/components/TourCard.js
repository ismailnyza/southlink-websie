import React from 'react'
import { Link } from 'gatsby'
import TourImage from './TourImage'

export default function TourCard({ tour }) {
  if (!tour || tour.visibility === false) return null
  const slug = tour.slug || tour.fields?.slug
  const detail = `/tours/${slug}`
  return (
    <article className="journey-card">
      <Link
        className="journey-photo"
        to={detail}
        aria-label={`Explore ${tour.title}`}
      >
        {tour.images?.length ? (
          <TourImage
            tour={tour}
            sizes="(min-width: 1200px) 380px, (min-width: 900px) 31vw, (min-width: 600px) 46vw, 92vw"
            className="journey-image"
          />
        ) : (
          <div className="destination-placeholder">
            <span aria-hidden="true">↗</span>
            <span>{tour.destination || 'A new journey'}</span>
          </div>
        )}
        <span className="journey-label">{tour.tags?.[0] || 'Tailor-made'}</span>
      </Link>
      <div className="journey-copy">
        <p className="eyebrow">
          {tour.duration || 'Flexible duration'}{' '}
          <span aria-hidden="true">·</span> {tour.destination}
        </p>
        <h3>
          <Link to={detail}>{tour.title}</Link>
        </h3>
        {tour.description && (
          <p className="journey-description">{tour.description}</p>
        )}
        {tour.itinerary?.length > 0 && (
          <>
            <p className="highlights-label">A taste of your journey</p>
            <ul className="journey-highlights">
              {tour.itinerary.slice(0, 3).map((item, i) => (
                <li key={i}>{item.title}</li>
              ))}
            </ul>
          </>
        )}
        <div className="journey-actions">
          <Link
            to={`/plan-your-trip?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.destination || '')}`}
            className="text-link"
          >
            Customise this trip <span aria-hidden="true">↗</span>
          </Link>
          <Link to={detail} className="details-link">
            Itinerary
          </Link>
        </div>
      </div>
    </article>
  )
}
