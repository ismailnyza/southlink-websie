import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TourCard from '../components/TourCard'
import SriLankaMap from '../components/Map/SriLankaMap'
import WorldMap from '../components/Map/WorldMap'

export const query = graphql`
  query {
    allToursJson(filter: { visibility: { eq: true } }) {
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
      }
    }
  }
`

const ToursPage = ({ data }) => {
  const tours = data.allToursJson.nodes
  const [mapView, setMapView] = useState('sri-lanka')
  const [selectedTag, setSelectedTag] = useState(null)

  const allTags = [...new Set(tours.flatMap(tour => tour.tags || []))]

  const filteredTours = selectedTag
    ? tours.filter(tour => tour.tags && tour.tags.includes(selectedTag))
    : tours

  const sriLankaTours = filteredTours.filter(tour => tour.map_location)
  const worldTours = filteredTours.filter(tour => tour.destination && !tour.map_location)

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Tours</h1>
          <p className="text-xl">Discover amazing destinations</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Tours
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setMapView('sri-lanka')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  mapView === 'sri-lanka'
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Sri Lanka Tours
              </button>
              <button
                onClick={() => setMapView('world')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  mapView === 'world'
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                World Tours
              </button>
            </div>
            {mapView === 'sri-lanka' ? (
              <SriLankaMap tours={sriLankaTours} />
            ) : (
              <WorldMap tours={worldTours} />
            )}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {selectedTag ? `Tours tagged "${selectedTag}"` : 'All Available Tours'}
          </h2>
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-12">No tours found matching your criteria.</p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ToursPage
