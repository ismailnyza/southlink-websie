import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { phoneHref } from '../utils/contact'

export const query = graphql`
  query TripContact {
    allSettingsJson {
      nodes {
        whatsapp_number
        contact_numbers
        email
      }
    }
  }
`

export default function PlanYourTrip({ data }) {
  const settings = data.allSettingsJson.nodes[0]
  const [form, setForm] = useState({
    name: '',
    destination: 'Sri Lanka',
    date: '',
    duration: '',
    travellers: '2',
    interests: '',
    tour: '',
  })
  const [ready, setReady] = useState(false)
  const readyRef = useRef(null)
  const [earliestDate, setEarliestDate] = useState('')
  useEffect(() => {
    const now = new Date()
    setEarliestDate(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
    )
  }, [])
  useEffect(() => {
    if (ready) readyRef.current?.focus()
  }, [ready])
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tour = params.get('tour')
    if (tour)
      setForm((f) => ({
        ...f,
        tour,
        destination: params.get('destination') || '',
      }))
  }, [])
  const change = (e) => {
    setReady(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const preferences = `Name: ${form.name}\nDestination: ${form.destination}\nTravel date: ${form.date || 'Flexible'}\nDuration: ${form.duration || 'Open to suggestions'}\nTravellers: ${form.travellers}\nInterests: ${form.interests || 'Open to suggestions'}`
  const href = buildWhatsAppLink(
    'tour',
    {
      title: form.tour || `A tailor-made trip to ${form.destination}`,
      preferences,
    },
    settings,
  )
  return (
    <Layout>
      <section className="section-space cream-section">
        <div className="site-shell planner-layout">
          <div className="planner-intro">
            <p className="eyebrow">LET’S MAKE IT YOURS</p>
            <h1>
              Your next journey
              <br />
              starts <em>right here.</em>
            </h1>
            <p>
              A favourite place, a special occasion, or just the need to get
              away. Tell us a little about your plans and our team will help
              shape the details.
            </p>
            <ol className="planning-steps">
              <li>
                <span>01</span>
                <div>
                  <h2>Tell us your idea</h2>
                  <p>Your dates, your interests, your people.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h2>Plan it together</h2>
                  <p>Discuss your route and preferences with an agent.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h2>Make it your journey</h2>
                  <p>Agree on the details before you book.</p>
                </div>
              </li>
            </ol>
            <p>
              Prefer a conversation?
              <br />
              <a
                className="text-link"
                href={phoneHref(settings.contact_numbers[0])}
              >
                {settings.contact_numbers[0]}
              </a>
            </p>
          </div>
          <form
            className="trip-form"
            onSubmit={(e) => {
              e.preventDefault()
              setReady(true)
            }}
          >
            <h2>A few details to get started</h2>
            <p>
              We’ll prepare your enquiry for WhatsApp. You choose when to send
              it.
            </p>
            {form.tour && (
              <div className="selected-journey">
                <span className="eyebrow">YOUR STARTING POINT</span>
                <strong>{form.tour}</strong>
              </div>
            )}
            <div className="form-grid">
              <label className="full-field">
                Your name
                <input
                  required
                  pattern=".*\S.*"
                  title="Please enter your name."
                  autoComplete="name"
                  name="name"
                  value={form.name}
                  onChange={change}
                  maxLength="100"
                  placeholder="How should we call you?"
                />
              </label>
              <label className="full-field">
                Where would you like to go?
                <input
                  required
                  pattern=".*\S.*"
                  title="Please enter a destination."
                  name="destination"
                  value={form.destination}
                  onChange={change}
                  maxLength="160"
                  placeholder="Sri Lanka, Maldives, or somewhere else…"
                />
              </label>
              <label>
                Travel date <span className="optional">(optional)</span>
                <input
                  type="date"
                  min={earliestDate}
                  name="date"
                  value={form.date}
                  onChange={change}
                />
              </label>
              <label>
                Travellers
                <input
                  type="number"
                  name="travellers"
                  required
                  min="1"
                  max="100"
                  value={form.travellers}
                  onChange={change}
                />
              </label>
              <label className="full-field">
                How long would you like to travel?
                <select name="duration" value={form.duration} onChange={change}>
                  <option value="">Open to suggestions</option>
                  <option>A few days</option>
                  <option>About a week</option>
                  <option>10–14 days</option>
                  <option>More than two weeks</option>
                </select>
              </label>
              <label className="full-field">
                What would make this trip special?
                <textarea
                  name="interests"
                  value={form.interests}
                  onChange={change}
                  rows="4"
                  maxLength="1500"
                  placeholder="Culture, beaches, a family holiday… Share anything you’d like us to know."
                />
              </label>
            </div>
            <button type="submit" className="button button-red">
              Prepare my enquiry <span aria-hidden="true">↗</span>
            </button>
            {ready && (
              <div
                ref={readyRef}
                tabIndex={-1}
                className="enquiry-ready"
                role="status"
              >
                <h3>Your enquiry is ready.</h3>
                <p>
                  Open WhatsApp to review and send it to our team. Nothing has
                  been sent yet.
                </p>
                <a
                  className="button button-dark"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue to WhatsApp <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
            <p className="form-note">
              Or email us at{' '}
              <a href={`mailto:${settings.email}`}>{settings.email}</a>.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo
    title="Customise Your Trip"
    description="Plan a tailor-made journey with Southlink Travels. Share your dates, destination and interests with our team in Galle."
    pathname={location.pathname}
  />
)
