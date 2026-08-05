const path = require(`path`)

// gatsby-transformer-json assigns its own generated `id` to every node
// (needed as the Node interface's identifier), which shadows the `id` field
// each tour's own JSON content sets (e.g. "sigiriya-ancient"). Without this,
// every tour page would be built at an unreadable UUID path instead of a
// clean, SEO-friendly slug. This copies the source filename - which every
// existing tour JSON file already matches to its own "id" value - into a
// `slug` field so page paths and links stay human-readable.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `InboundJson` || node.internal.type === `OutboundJson`) {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: parent.name,
    })
  }
}

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
          fields {
            slug
          }
        }
      }
      outbound: allOutboundJson {
        nodes {
          fields {
            slug
          }
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
  ]

  allTours.forEach(node => {
    const slug = node.fields.slug
    createPage({
      path: `/tours/${slug}`,
      component: tourTemplate,
      context: {
        slug,
      },
    })
  })
}
