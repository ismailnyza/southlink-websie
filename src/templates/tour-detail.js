import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import TourImage from '../components/TourImage'
import Seo, { buildTourJsonLd } from '../components/Seo'

export const query = graphql`
  query JourneyDetail($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    inbound: allInboundJson(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        fields {
          slug
        }
        title
        images
        coverImage {
          ...TourCover
        }
        destination
        duration
        tags
        description
        itinerary {
          day
          title
          description
        }
      }
    }
    outbound: allOutboundJson(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        fields {
          slug
        }
        title
        images
        coverImage {
          ...TourCover
        }
        destination
        duration
        tags
        description
        itinerary {
          day
          title
          description
        }
      }
    }
  }
`
export default function JourneyDetail({ data }) {
  const tour = data.inbound.nodes[0] || data.outbound.nodes[0]
  const inbound = data.inbound.nodes.length > 0
  return (
    <Layout>
      <section className="collection-intro cream-section">
        <div className="site-shell">
          <Link
            className="detail-back"
            to={inbound ? '/tours/inbound' : '/tours/outbound'}
          >
            ← Back to {inbound ? 'Sri Lanka journeys' : 'world travel'}
          </Link>
          <p className="eyebrow">
            {tour.duration} · {tour.destination}
          </p>
          <h1>{tour.title}</h1>
          <p>{tour.description}</p>
        </div>
      </section>
      <section className="section-space site-shell detail-layout">
        <div>
          {tour.images?.[0] && (
            <TourImage
              className="detail-image"
              tour={tour}
              sizes="(min-width: 1200px) 740px, (min-width: 900px) 60vw, 92vw"
            />
          )}
          <p className="eyebrow">A STARTING POINT FOR YOUR ADVENTURE</p>
          <h2>Your journey, day by day.</h2>
          <p>
            Use this itinerary as inspiration. Your agent will help you tailor
            the route, accommodation and activities to your dates and interests.
          </p>
          <ol className="itinerary-list">
            {tour.itinerary?.map((day, i) => (
              <li key={i}>
                <span>Day {day.day || i + 1}</span>
                <div>
                  <h3>{day.title}</h3>
                  <p>{day.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="trip-sidebar">
          <p className="eyebrow">MAKE IT YOUR OWN</p>
          <h2>
            A trip that
            <br />
            feels like you.
          </h2>
          <p>
            Share your dates, who’s coming and the experiences you love. We’ll
            discuss the details and a personalised quote before you book.
          </p>
          <Link
            className="button button-red"
            to={`/plan-your-trip?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.destination || '')}`}
          >
            Customise this trip ↗
          </Link>
          <Link className="text-link" to="/contact">
            Talk to our team ↗
          </Link>
        </aside>
      </section>
    </Layout>
  )
}
export const Head = ({ data, location }) => {
  const tour = data.inbound.nodes[0] || data.outbound.nodes[0]
  return (
    <Seo
      title={tour.title}
      description={tour.description}
      image={tour.images?.[0]}
      pathname={location.pathname}
      jsonLd={buildTourJsonLd(tour, data.site.siteMetadata.siteUrl)}
    />
  )
}
