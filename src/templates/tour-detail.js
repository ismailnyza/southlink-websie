import React, { useState } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Layout from '../components/Layout'
import WhatsAppButton from '../components/WhatsAppButton'
import LazyImage from '../components/LazyImage'

export const query = graphql`
  query($id: String!) {
    inboundJson: allInboundJson(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        images
        destination
        duration
        tags
        description
        map_location
        itinerary {
          day
          title
          description
        }
      }
    }
    outboundJson: allOutboundJson(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        images
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
    allSettingsJson {
      nodes {
        whatsapp_number
      }
    }
  }
`

const TourDetailPage = ({ data }) => {
  const tour = data.inboundJson?.nodes[0] || data.outboundJson?.nodes[0]
  const settings = data.allSettingsJson?.nodes[0] || {}
  const [expandedDescription, setExpandedDescription] = useState(false)

  if (!tour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Experience Not Found</h1>
          <Link to="/tours/inbound" className="text-primary hover:underline">
            Back to Experiences
          </Link>
        </div>
      </Layout>
    )
  }

  const mainImage = tour.images && tour.images.length > 0 ? tour.images[0] : '/images/placeholder.jpg'
  const tagsText = tour.tags && tour.tags.length > 0 
    ? tour.tags.join(' · ')
    : tour.destination || ''

  const isLongDescription = tour.description && tour.description.length > 300
  const displayDescription = expandedDescription || !isLongDescription
    ? tour.description
    : tour.description.substring(0, 300) + '...'

  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    } else {
      navigate('/tours/inbound')
    }
  }

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-24">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto flex items-center justify-between h-14">
              <button
                onClick={goBack}
                className="flex items-center gap-2 text-gray-700 active:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-lg font-bold text-gray-900 flex-1 text-center">
                {tour.title}
              </h1>
              <div className="w-6" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-80 bg-gray-200">
            <LazyImage
              src={mainImage}
              alt={tour.title}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="pt-6 pb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {tour.title}
              </h1>
              {tagsText && (
                <p className="text-base text-gray-600 mb-3">
                  {tagsText}
                </p>
              )}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-xs font-medium text-primary">
                  Designed by our local team
                </span>
              </div>
            </div>

            {tour.description && (
              <section className="py-6 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About this experience
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {displayDescription}
                  </p>
                  {isLongDescription && !expandedDescription && (
                    <button
                      onClick={() => setExpandedDescription(true)}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Read more
                    </button>
                  )}
                </div>
              </section>
            )}

            {tour.itinerary && tour.itinerary.length > 0 && (
              <section className="py-6 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Highlights
                </h2>
                <ul className="space-y-2">
                  {tour.itinerary.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item.title || item.description}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="py-6 border-t border-gray-100">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Planned by a dedicated agent</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Customizable itinerary</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Based in Galle</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-md mx-auto">
              <WhatsAppButton
                context="tour"
                data={tour}
                settings={settings}
                className="w-full justify-center"
                variant="premium"
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                No booking required. We'll tailor it to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TourDetailPage
