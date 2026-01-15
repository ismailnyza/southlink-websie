import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import TourCard from '../components/TourCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import WhatsAppButton from '../components/WhatsAppButton'
import FlightPlanner from '../components/FlightPlanner'
import TourDetailModal from '../components/TourDetailModal'
import { SuitcaseIcon, LocationIcon, BriefcaseIcon } from '../components/Icons'

export const query = graphql`
  query {
    inbound: allInboundJson(filter: { visibility: { eq: true } }, limit: 5) {
      nodes {
        id
        title
        images
        price
        destination
        duration
        tags
        visibility
        map_location
        description
        itinerary {
          day
          title
          description
        }
      }
    }
    outbound: allOutboundJson(filter: { visibility: { eq: true } }, limit: 5) {
      nodes {
        id
        title
        images
        price
        destination
        duration
        tags
        visibility
        map_location
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
        contact_numbers
        address
        email
        whatsapp_api_url
        whatsapp_api_key
        whatsapp_recipient_number
      }
    }
    allTestimonialsJson(filter: { visibility: { eq: true } }) {
      nodes {
        id
        rating
        text
        author
        location
        visibility
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const inboundTours = data.inbound?.nodes || []
  const outboundTours = data.outbound?.nodes || []
  const settings = data.allSettingsJson?.nodes[0] || {}
  const testimonials = data.allTestimonialsJson?.nodes || []
  const [selectedTour, setSelectedTour] = useState(null)

  const primaryContact = settings.contact_numbers?.[0] || '0912 234 517'
  const address = settings.address || '26M8+C37, Gamini Mawatha, Galle 80000'

  return (
    <Layout isHomePage={true}>
      <section className="relative w-full -mt-14" style={{ height: '100vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/galle-boat.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
          <div className="text-center text-white w-full mx-auto" style={{ maxWidth: 'clamp(320px, 90vw, 1200px)', paddingLeft: 'clamp(0.5rem, 2vw, 1rem)', paddingRight: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <h1 className="font-bold mb-4 sm:mb-6 leading-tight" style={{ fontSize: 'clamp(1.875rem, 5vw + 2vh, 4rem)' }}>
              Travel, handled personally.
            </h1>
            <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw + 1vh, 1.75rem)' }}>
              Flights, managed by your own dedicated agent.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Based in Galle. Trusted globally.
            </p>
            <button
              onClick={() => {
                const planner = document.getElementById('flight-planner')
                if (planner) {
                  planner.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="mt-4 sm:mt-6 rounded-full bg-white/90 backdrop-blur-sm font-medium text-gray-900 hover:bg-white transition-colors shadow-lg"
              style={{ 
                paddingLeft: 'clamp(1.5rem, 4vw, 2rem)', 
                paddingRight: 'clamp(1.5rem, 4vw, 2rem)',
                paddingTop: 'clamp(0.75rem, 2vw, 1rem)',
                paddingBottom: 'clamp(0.75rem, 2vw, 1rem)',
                fontSize: 'clamp(0.875rem, 1.5vw + 0.5vh, 1.125rem)'
              }}
            >
              Plan my flight
            </button>
          </div>
        </div>
      </section>

      <section
        id="flight-planner"
        className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="w-full max-w-2xl lg:max-w-4xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-2 sm:mb-4">
            Plan your flight
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center">
            Changes handled by your agent. Not a system.
          </p>
        </div>
        <div className="w-full max-w-2xl lg:max-w-4xl">
          <FlightPlanner settings={settings} />
        </div>
      </section>

      <section className="bg-gray-50" style={{ paddingTop: 'clamp(3rem, 6vw + 3vh, 5rem)', paddingBottom: 'clamp(3rem, 6vw + 3vh, 5rem)' }}>
        <div className="container mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
          <div className="mx-auto" style={{ maxWidth: 'clamp(320px, 85vw, 1400px)' }}>
            <h2 className="font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10 text-center" style={{ fontSize: 'clamp(1.5rem, 4vw + 1.5vh, 2.5rem)' }}>
              Why book flights with us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <svg className="text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)', height: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700" style={{ fontSize: 'clamp(0.9375rem, 2vw + 0.8vh, 1.25rem)' }}>Smart route planning</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <svg className="text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)', height: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700" style={{ fontSize: 'clamp(0.9375rem, 2vw + 0.8vh, 1.25rem)' }}>Fair, transparent fares</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <svg className="text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)', height: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700" style={{ fontSize: 'clamp(0.9375rem, 2vw + 0.8vh, 1.25rem)' }}>Visa & transit guidance</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <svg className="text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)', height: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700" style={{ fontSize: 'clamp(0.9375rem, 2vw + 0.8vh, 1.25rem)' }}>Changes handled by your agent</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <svg className="text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)', height: 'clamp(1.25rem, 2vw + 0.5vh, 1.75rem)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700" style={{ fontSize: 'clamp(0.9375rem, 2vw + 0.8vh, 1.25rem)' }}>Support when things go wrong</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: 'clamp(3rem, 6vw + 3vh, 5rem)', paddingBottom: 'clamp(3rem, 6vw + 3vh, 5rem)' }}>
        <div className="container mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
          <h2 className="font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center" style={{ fontSize: 'clamp(1.5rem, 4vw + 1.5vh, 2.5rem)' }}>
            Beyond flights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto" style={{ gap: 'clamp(1rem, 3vw, 2rem)', maxWidth: 'clamp(320px, 90vw, 1400px)' }}>
            <ServiceCard
              icon={SuitcaseIcon}
              title="Outbound Tours"
              subtitle="Foreign destinations, curated itineraries"
              link="/tours/outbound"
            />
            <ServiceCard
              icon={LocationIcon}
              title="Sri Lanka Experiences"
              subtitle="Designed by locals, hosted with care"
              link="/tours/inbound"
            />
            <ServiceCard
              icon={BriefcaseIcon}
              title="Corporate Travel"
              subtitle="Credit terms, visas, 24/7 re-routing"
              link="/corporate"
            />
            <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
              <div className="mb-3 text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-400 mb-1 text-sm">Coming soon</h3>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-6 max-w-md mx-auto">
            Flights, visas, hotels and changes.
            <br />
            Handled by your agent. Not a system.
          </p>
        </div>
      </section>

      {(outboundTours.length > 0 || inboundTours.length > 0) && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Trips we plan beyond flights
            </h2>
            {outboundTours.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Outbound tours</h3>
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                  {outboundTours.slice(0, 2).map(tour => (
                    <div key={tour.id} className="flex-shrink-0" style={{ width: '66.67%', scrollSnapAlign: 'start' }}>
                      <TourCard
                        tour={tour}
                        badge={tour.tags?.includes('Popular') ? 'Popular' : tour.tags?.includes('Adventure') ? 'Agent favourite' : null}
                        onClick={setSelectedTour}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {inboundTours.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore Lanka</h3>
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                  {inboundTours.slice(0, 1).map(tour => (
                    <div key={tour.id} className="flex-shrink-0" style={{ width: '66.67%', scrollSnapAlign: 'start' }}>
                      <TourCard
                        tour={tour}
                        badge={tour.tags?.includes('Popular') ? 'Popular' : tour.tags?.includes('Wildlife') ? 'Agent favourite' : null}
                        onClick={setSelectedTour}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Corporate travel, done right
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Credit terms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Visa handling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 re-routing</span>
              </li>
            </ul>
            <Link
              to="/corporate"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
            >
              Corporate travel solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trusted by travellers & businesses
          </h2>
          <div className="max-w-md mx-auto space-y-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full shadow-sm">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">IATA CERTIFIED</span>
            </div>
            <p className="text-gray-700 mb-2 font-medium">
              Established in Galle
            </p>
            <p className="text-sm text-gray-600">
              The first travel agency to open in Southern Sri Lanka
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready when you are
            </h2>
            <p className="text-gray-600 mb-10">
              Your personal travel agent is ready when you are.
            </p>
            <div className="space-y-2">
              <WhatsAppButton
                context="general"
                settings={settings}
                className="w-full justify-center"
                variant="premium"
              />
              <a
                href={`tel:${primaryContact.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 w-full h-11 px-5 border-2 border-gray-300 rounded-full text-gray-700 hover:border-primary hover:text-primary transition-colors active:bg-gray-50"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium text-sm">Call Galle office</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Southlink+Travels/@6.0335447,80.2103119,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae173bca6d98601:0x29d1d5d5d9c8d5fa!8m2!3d6.0335394!4d80.2151775!16s%2Fg%2F11cmrrl1yl?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full h-11 px-5 border border-gray-300 rounded-full text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors active:bg-gray-100"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium text-sm">Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          settings={settings}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </Layout>
  )
}

export default IndexPage
