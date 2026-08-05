import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FlightPlanner from '../components/FlightPlanner'
import Seo from '../components/Seo'

export const query = graphql`
  query {
    allSettingsJson {
      nodes {
        whatsapp_number
        contact_numbers
        email
      }
    }
  }
`

const FlightsPage = ({ data }) => {
  const settings = data.allSettingsJson?.nodes[0] || {}

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Plan your flight</h1>
          <p className="text-xl text-white/90">Changes handled by your agent. Not a system.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <FlightPlanner settings={settings} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why book flights with us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Smart route planning',
                'Fair, transparent fares',
                'Visa & transit guidance',
                'Changes handled by your agent',
                'Support when things go wrong',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FlightsPage

export const Head = ({ location }) => (
  <Seo
    title="Plan Your Flight"
    description="Get a flight quote from your own dedicated agent - smart routing, fair fares, and changes handled by a person, not a system."
    pathname={location.pathname}
  />
)
