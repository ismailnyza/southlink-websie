import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import TourCollection from '../../components/TourCollection'
import Seo from '../../components/Seo'
import { getTourNodes } from '../../utils/tours'

export const query = graphql`
  query WorldJourneys {
    allOutboundJson(filter: { visibility: { eq: true } }) {
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
export default function Outbound({ data }) {
  return (
    <Layout>
      <TourCollection
        tours={getTourNodes(data, 'outbound')}
        title="A world waiting for you."
        description="From island escapes to cities full of possibility. Start with an idea and let our team help you bring it to life."
      />
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo
    title="International Holidays & World Travel"
    pathname={location.pathname}
  />
)
