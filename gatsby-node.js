const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type InboundJson implements Node {
      id: String!
      title: String!
      images: [String]
      price: Int
      itinerary: [ToursJsonItinerary]
      visibility: Boolean
      tags: [String]
      map_location: String
      destination: String
      duration: String
      description: String
    }
    type OutboundJson implements Node {
      id: String!
      title: String!
      images: [String]
      price: Int
      itinerary: [ToursJsonItinerary]
      visibility: Boolean
      tags: [String]
      map_location: String
      destination: String
      duration: String
      description: String
    }
    type ToursJson implements Node {
      id: String!
      title: String!
      images: [String]
      price: Int
      itinerary: [ToursJsonItinerary]
      visibility: Boolean
      tags: [String]
      map_location: String
      destination: String
      duration: String
      description: String
    }
    type ToursJsonItinerary {
      day: Int
      title: String
      description: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      inbound: allInboundJson {
        nodes {
          id
        }
      }
      outbound: allOutboundJson {
        nodes {
          id
        }
      }
      tours: allToursJson {
        nodes {
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const tourTemplate = path.resolve(`src/templates/tour-detail.js`)

  const allTours = [
    ...(result.data.inbound?.nodes || []),
    ...(result.data.outbound?.nodes || []),
    ...(result.data.tours?.nodes || []),
  ]

  allTours.forEach(node => {
    createPage({
      path: `/tours/${node.id}`,
      component: tourTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
