import React, { useState } from 'react'
import { graphql } from 'gatsby'
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

const ContactPage = ({ data }) => {
  const settings = data.allSettingsJson?.nodes[0] || {}
  const primaryContact = settings.contact_numbers?.[0] || '0912 234 517'
  const address = settings.address || '26M8+C37, Gamini Mawatha, Galle 80000'
  const email = settings.email || 'info@southlink.com'
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Southlink Travels, ${address}`)}`

  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form).toString(),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '', website: '' })
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try WhatsApp or phone instead.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Could not reach the server. Please try WhatsApp or phone instead.')
    }
  }

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
          <p className="text-xl text-white/90">We usually reply within a few minutes during business hours.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Reach us directly</h2>
              <div className="space-y-5">
                <a href={`tel:${primaryContact.replace(/\s/g, '')}`} className="flex items-start gap-3 group">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">{primaryContact}</p>
                    <p className="text-sm text-gray-500">Galle office</p>
                  </div>
                </a>

                <a href={`mailto:${email}`} className="flex items-start gap-3 group">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">{email}</p>
                    <p className="text-sm text-gray-500">Email</p>
                  </div>
                </a>

                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">{address}</p>
                    <p className="text-sm text-gray-500">Open in Google Maps</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <WhatsAppButton context="general" settings={settings} variant="premium" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a message</h2>
              {status === 'sent' ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-medium">Message sent.</p>
                  <p className="text-sm text-green-700 mt-1">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  {/* Honeypot - hidden from real visitors, filled in by most bots */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange('website')}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 h-11 rounded-full shadow-sm transition-colors"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

export const Head = ({ location }) => (
  <Seo
    title="Contact Us"
    description="Reach Southlink Travels by phone, WhatsApp, email, or visit our Galle office."
    pathname={location.pathname}
  />
)
