import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AirportTransferStep from '../components/AirportTransferStep'
import Seo from '../components/Seo'

export const query = graphql`
  query {
    allSettingsJson {
      nodes {
        whatsapp_number
        airport_transfer_price_dropoff_usd
        airport_transfer_price_pickup_usd
      }
    }
  }
`

const steps = [
  {
    step: 1,
    title: 'Pick a service and date',
    description: 'Choose drop-off or pickup and tell us when, and roughly where you\'ll be.',
  },
  {
    step: 2,
    title: 'We confirm your pickup point',
    description: 'Your agent gets back to you on WhatsApp with the exact pickup point.',
  },
  {
    step: 3,
    title: 'Your car arrives',
    description: 'A driver takes you to or from the airport, on time.',
  },
]

const AirportTransferPage = ({ data }) => {
  const settings = data.allSettingsJson?.nodes[0] || {}
  const dropoffPrice = settings.airport_transfer_price_dropoff_usd
  const pickupPrice = settings.airport_transfer_price_pickup_usd
  const [booking, setBooking] = useState(null) // null | 'dropoff' | 'pickup'

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Airport Transfers</h1>
          <p className="text-xl text-white/90">Book a date - we'll confirm the pickup point.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-8 text-center leading-relaxed">
              Fixed fares, door to airport or airport to door. No need to work out logistics yourself -
              pick your date and leave the rest to your agent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 mb-1">Airport Drop-off</h3>
                <p className="text-sm text-gray-600 mb-3">From your location to the airport</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {dropoffPrice ? `$${dropoffPrice}` : 'Contact us'}
                </p>
                <button
                  onClick={() => setBooking('dropoff')}
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm"
                >
                  Book drop-off
                </button>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 mb-1">Airport Pickup</h3>
                <p className="text-sm text-gray-600 mb-3">From the airport to your location</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {pickupPrice ? `$${pickupPrice}` : 'Contact us'}
                </p>
                <button
                  onClick={() => setBooking('pickup')}
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm"
                >
                  Book pickup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              How it works
            </h2>
            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {booking && (
        <AirportTransferStep
          settings={settings}
          initialDirection={booking}
          onClose={() => setBooking(null)}
        />
      )}
    </Layout>
  )
}

export default AirportTransferPage

export const Head = ({ location }) => (
  <Seo
    title="Airport Transfers"
    description="Book an airport drop-off or pickup by date - fixed fares, and your Southlink Travels agent confirms the exact pickup point on WhatsApp."
    pathname={location.pathname}
  />
)
