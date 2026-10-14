import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TourCollection from '../components/TourCollection'
import Seo from '../components/Seo'
import { getTourNodes } from '../utils/tours'

export const query = graphql`
  query AllJourneys {
    inbound: allInboundJson(filter: { visibility: { eq: true } }) {
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
    outbound: allOutboundJson(filter: { visibility: { eq: true } }) {
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
export default function Tours({ data }) {
  return (
    <Layout>
      <TourCollection
        tours={[
          ...getTourNodes(data, 'inbound'),
          ...getTourNodes(data, 'outbound'),
        ]}
        title="Where will you go next?"
        description="Near home or a world away, find the starting point for a trip that feels like you."
      />
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo title="Explore Our Journeys" pathname={location.pathname} />
)
