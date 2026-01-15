import React, { useState, useMemo } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import ExperienceCategoryCard from '../../components/ExperienceCategoryCard'
import TourCard from '../../components/TourCard'
import TourDetailModal from '../../components/TourDetailModal'
import WhatsAppButton from '../../components/WhatsAppButton'

export const query = graphql`
  query {
    inboundJson: allInboundJson(filter: { visibility: { eq: true } }) {
      nodes {
        id
        title
        images
        duration
        tags
        visibility
        description
        map_location
        destination
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

const InboundToursPage = ({ data }) => {
  const allTours = data.inboundJson?.nodes || []
  const settings = data.allSettingsJson?.nodes[0] || {}
  
  const [selectedChips, setSelectedChips] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTour, setSelectedTour] = useState(null)

  const categories = [
    {
      title: 'Wildlife & Safari',
      description: 'Yala, Udawalawe, Wilpattu',
      experiences: 'Yala Safari, Udawalawe Elephant Safari, Wilpattu National Park',
    },
    {
      title: 'Coast & Galle',
      description: 'Beaches, forts, slow travel',
      experiences: 'Galle Fort, Bentota, Mirissa, Pasikudah',
    },
    {
      title: 'Hill Country',
      description: 'Tea estates, trains, nature',
      experiences: 'Ella, Nuwara Eliya, Horton Plains, Knuckles',
    },
    {
      title: 'Culture & Heritage',
      description: 'Temples, history, local life',
      experiences: 'Anuradhapura, Polonnaruwa, Kandy, Dambulla',
    },
  ]

  const categoryChips = ['Beaches', 'Wildlife', 'Culture', 'Hill Country', 'Family']

  const filteredTours = useMemo(() => {
    let filtered = allTours

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(tour => 
        tour.title.toLowerCase().includes(query) ||
        tour.description?.toLowerCase().includes(query) ||
        tour.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        tour.destination?.toLowerCase().includes(query)
      )
    }

    if (selectedChips.length > 0) {
      filtered = filtered.filter(tour => 
        tour.tags?.some(tag => 
          selectedChips.some(chip => 
            tag.toLowerCase().includes(chip.toLowerCase())
          )
        )
      )
    }

    return filtered
  }, [allTours, searchQuery, selectedChips])

  const recommendedTours = filteredTours.slice(0, 6)
  const popularTours = filteredTours.slice(6, 12)

  const toggleChip = (chip) => {
    setSelectedChips(prev =>
      prev.includes(chip)
        ? []
        : [chip]
    )
  }

  return (
    <Layout>
      <section className="py-8 bg-white pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search destinations or experiences"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
              {categoryChips.map(chip => (
                <button
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedChips.includes(chip)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 active:bg-gray-200'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-gray-900">
                Recommended experiences
              </h2>
              {filteredTours.length > 6 && (
                <Link
                  to="/tours/inbound/all"
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Explore all
                </Link>
              )}
            </div>
            {recommendedTours.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No experiences found. Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-5" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                {recommendedTours.map(tour => (
                  <div key={tour.id} className="flex-shrink-0" style={{ width: '66.67%', scrollSnapAlign: 'start' }}>
                    <TourCard
                      tour={tour}
                      badge={tour.tags?.includes('Popular') ? 'Popular' : tour.tags?.includes('Wildlife') ? 'Agent favourite' : null}
                      onClick={setSelectedTour}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {popularTours.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Popular destinations
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {popularTours.map(tour => (
                  <Link
                    key={tour.id}
                    to={`/tours/${tour.id}`}
                    className="block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 active:shadow-md active:bg-gray-50 transition-all duration-75"
                  >
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                      <img
                        src={tour.images?.[0] || '/images/placeholder.jpg'}
                        alt={tour.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {tour.tags?.[0] || tour.destination || 'Sri Lanka'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our local agents design Sri Lanka trips around your interests, timing, and pace.
            </p>
            <WhatsAppButton
              context="tour"
              data={{ title: 'Sri Lanka Experience Inquiry' }}
              settings={settings}
              className="justify-center"
              variant="premium"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why travel Sri Lanka with Southlink
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">Based in Galle</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">Local guides & partners</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">One agent, start to finish</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">IATA certified</span>
              </div>
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

export default InboundToursPage
