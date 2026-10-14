import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import TourCollection from '../../components/TourCollection'
import Seo from '../../components/Seo'
import { getTourNodes } from '../../utils/tours'

export const query = graphql`
  query SriLankaJourneys {
    allInboundJson(filter: { visibility: { eq: true } }) {
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
        visibility
        description
        itinerary {
          title
        }
      }
    }
  }
`
export default function Inbound({ data }) {
  return (
    <Layout>
      <TourCollection
        tours={getTourNodes(data, 'inbound')}
        title="Sri Lanka, at your pace."
        description="Ancient cities, tea-covered hills and the coast we call home. Discover our island through journeys shaped around you."
      />
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo
    title="Sri Lanka Tours & Tailor-Made Journeys"
    description="Explore Sri Lanka’s culture, wildlife, hills and beaches with Southlink Travels. Choose an itinerary and customise it with our Galle team."
    pathname={location.pathname}
  />
)
