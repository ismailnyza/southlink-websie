import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import CorporateContactStep from '../components/CorporateContactStep'

export const query = graphql`
  query {
    allSettingsJson {
      nodes {
        contact_numbers
        address
        email
      }
    }
    allTestimonialsJson(filter: { visibility: { eq: true } }) {
      nodes {
        id
        rating
        text
        author
        location
      }
    }
  }
`

const CorporatePage = ({ data }) => {
  const settings = data.allSettingsJson?.nodes[0] || {}
  const testimonials = data.allTestimonialsJson?.nodes || []
  const corporateTestimonials = testimonials.filter(t => 
    t.text.toLowerCase().includes('corporate') || 
    t.text.toLowerCase().includes('company') ||
    t.author.toLowerCase().includes('manager')
  )
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [inquirySource, setInquirySource] = useState(null)

  const primaryContact = settings.contact_numbers?.[0] || '0912 234 517'

  const clientTypes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'SMEs & Growing Companies',
      description: 'Small to medium enterprises scaling their operations'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'NGOs & International Orgs',
      description: 'Non-profits and international organizations'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Export & Logistics Teams',
      description: 'Businesses managing international supply chains'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Executive & Leadership Travel',
      description: 'C-suite and senior management travel'
    }
  ]

  const services = [
    'Flight bookings & fare optimization',
    'Visa handling & documentation',
    'Route changes & re-bookings',
    'Emergency re-routing (24/7)',
    'Group & executive travel',
    'Reporting & invoicing'
  ]

  const packages = [
    {
      name: 'Essential',
      features: [
        'Pay per trip',
        'Business-hours support',
        'Dedicated agent during business hours',
        'Standard fare optimization',
        'Basic reporting'
      ],
      ideal: 'Ideal for small teams'
    },
    {
      name: 'Business',
      features: [
        'Credit terms available',
        'Priority handling',
        '24/7 re-routing support',
        'Advanced fare optimization',
        'Detailed reporting & invoicing'
      ],
      ideal: 'For growing companies'
    },
    {
      name: 'Enterprise',
      features: [
        'SLA-backed support',
        'Named account manager',
        'Custom reporting & billing',
        'Multi-country coordination',
        'Dedicated escalation channel'
      ],
      ideal: 'For large organizations'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Initial consultation',
      description: 'We understand your travel patterns and requirements'
    },
    {
      step: 2,
      title: 'Travel policy alignment',
      description: 'We align our processes with your company policies'
    },
    {
      step: 3,
      title: 'Dedicated agent assigned',
      description: 'Your team gets a single point of contact'
    },
    {
      step: 4,
      title: 'Ongoing support & reporting',
      description: 'Regular updates and detailed travel reports'
    }
  ]

  return (
    <Layout>
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate travel, handled properly
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Flights, visas, changes, and emergencies managed by a dedicated agent.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-600">
              <span className="px-3 py-1 bg-gray-100 rounded-full">IATA Certified</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Established in Galle</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Serving Sri Lanka & overseas businesses</span>
            </div>
            <a
              href={`tel:${primaryContact.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Talk to a corporate travel specialist
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Who we work with
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="text-primary mb-3">
                    {client.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {client.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What we take care of
            </h2>
            <div className="space-y-3">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Corporate packages
            </h2>
            <div className="space-y-6">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {pkg.ideal}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setSelectedPackage(pkg.name)
                      setInquirySource('package_enquire')
                    }}
                    className="block w-full text-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {corporateTestimonials.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Why companies choose Southlink
              </h2>
              <div className="space-y-4">
                {corporateTestimonials.slice(0, 2).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm text-gray-600">
                      — {testimonial.author}{testimonial.location ? `, ${testimonial.location}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How it works
            </h2>
            <div className="space-y-6">
              {process.map((item, idx) => (
                <div key={idx} className="flex gap-4">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Let's simplify your corporate travel
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setSelectedPackage('General')
                  setInquirySource('request_consultation')
                }}
                className="block w-full text-center px-6 py-3 bg-primary hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm"
              >
                Request a consultation
              </button>
              <a
                href={`tel:${primaryContact.replace(/\s/g, '')}`}
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary rounded-full font-medium transition-colors"
              >
                Call corporate desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedPackage && (
        <CorporateContactStep
          packageName={selectedPackage}
          inquirySource={inquirySource}
          settings={settings}
          onClose={() => {
            setSelectedPackage(null)
            setInquirySource(null)
          }}
        />
      )}
    </Layout>
  )
}

export default CorporatePage
