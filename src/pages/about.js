import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import WhatsAppButton from '../components/WhatsAppButton'
import Seo from '../components/Seo'

export const query = graphql`
  query {
    allSettingsJson {
      nodes {
        whatsapp_number
        contact_numbers
        address
        email
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const settings = data.allSettingsJson?.nodes[0] || {}
  const address = settings.address || '26M8+C37, Gamini Mawatha, Galle 80000'

  const values = [
    {
      title: 'One agent, start to finish',
      description: 'You deal with the same person from your first message to the day you fly - not a rotating queue or a chatbot.',
    },
    {
      title: 'Handled personally, not automated',
      description: 'Fares, routing, visas and changes are worked out by someone who knows the route, not just an algorithm.',
    },
    {
      title: 'Based in Galle, working globally',
      description: 'We started as the first travel agency to open in Southern Sri Lanka and now handle both inbound experiences and international bookings.',
    },
  ]

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">About Southlink Travels</h1>
          <p className="text-xl text-white/90">Travel, handled personally.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Southlink Travels is a Galle-based travel agency covering flight bookings, curated Sri Lanka
              experiences, international tours, and corporate travel management. Every request - a flight quote,
              a tour, a corporate account - is handled by a dedicated agent rather than a self-service system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work with travellers booking flights and holidays, and with businesses that need someone
              accountable for changes, visas, and re-routing when plans shift.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What we stand for</h2>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Visit us</h2>
            <p className="text-gray-600 mb-6">{address}</p>
            <div className="space-y-2">
              <WhatsAppButton context="general" settings={settings} className="w-full justify-center" variant="premium" />
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full h-11 px-5 border-2 border-gray-300 rounded-full text-gray-700 hover:border-primary hover:text-primary transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const Head = ({ location }) => (
  <Seo
    title="About Us"
    description="Southlink Travels is a Galle-based agency handling flights, Sri Lanka experiences, and corporate travel - one dedicated agent, start to finish."
    pathname={location.pathname}
  />
)
