import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import TourCard from './TourCard'
import { getTourSlug } from '../utils/tours'

const categories = [
  ['all', 'All journeys'],
  ['culture', 'Culture & heritage'],
  ['beach', 'Coast & islands'],
  ['wildlife', 'Wildlife'],
  ['adventure', 'Hills & adventure'],
]

export default function TourCollection({ tours = [], title, description }) {
  const [search, setSearch] = useState('')
  const [style, setStyle] = useState('all')
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('style')
    if (categories.some(([key]) => key === value)) setStyle(value)
  }, [])
  const filtered = tours.filter((t) => {
    if (!t || t.visibility === false) return false
    const text = [t.title, t.destination, t.description, ...(t.tags || [])]
      .join(' ')
      .toLowerCase()
    return (
      text.includes(search.toLowerCase()) &&
      (style === 'all' ||
        t.tags?.some((tag) => tag.toLowerCase().includes(style)))
    )
  })
  return (
    <>
      <section className="collection-intro cream-section">
        <div className="site-shell">
          <p className="eyebrow">YOUR JOURNEY, YOUR WAY</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <section className="section-space site-shell">
        <div className="collection-tools">
          <div>
            <label htmlFor="tour-search">Find your next adventure</label>
            <input
              id="tour-search"
              type="search"
              placeholder="Try Sigiriya, beach or culture…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <p>
            Every itinerary can be tailored to your dates, interests and pace.
          </p>
        </div>
        <div className="filter-list" aria-label="Filter by travel style">
          {categories.map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={style === value}
              onClick={() => setStyle(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="results-count" role="status">
          {filtered.length} {filtered.length === 1 ? 'journey' : 'journeys'} to
          make your own
        </p>
        <div className="journey-grid">
          {filtered.map((t) => (
            <TourCard key={getTourSlug(t) || t.id || t.title} tour={t} />
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <h2>No journeys match just yet.</h2>
            <p>Try a destination or another travel style.</p>
            <button
              className="button button-red"
              onClick={() => {
                setSearch('')
                setStyle('all')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      <section className="section-space cream-section trip-invitation">
        <div className="site-shell">
          <p className="eyebrow">SOMETHING A LITTLE DIFFERENT?</p>
          <h2>
            Your ideas.
            <br />
            <em>Our local know-how.</em>
          </h2>
          <p>Let’s build a journey around the things you love.</p>
          <Link className="button button-red" to="/plan-your-trip">
            Customise your trip <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}
