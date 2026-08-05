import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const faqs = [
  {
    question: 'How do I get a flight quote or book a tour?',
    answer: "Use the flight planner on the homepage or the /flights page, or open a tour and tap \"Plan this trip with an agent.\" Either one opens WhatsApp with your request pre-filled - send it and your agent takes it from there.",
  },
  {
    question: 'Do I book and pay online?',
    answer: 'Not directly through the website today. Your agent confirms availability and fares with you over WhatsApp or phone, then arranges payment with you directly.',
  },
  {
    question: 'Can I change or cancel after booking?',
    answer: 'Message your agent directly - changes and cancellations depend on the airline or supplier\'s own fare rules, and your agent will walk you through what applies to your specific booking.',
  },
  {
    question: 'Do you help with visas?',
    answer: 'Yes, for both leisure and corporate travel. Your agent can advise on visa and transit requirements for your route as part of planning your trip.',
  },
  {
    question: 'How is corporate travel different?',
    answer: 'Corporate accounts get a single dedicated agent, and depending on the package, credit terms, priority handling, and 24/7 re-routing support. See the Corporate Travel page for details.',
  },
  {
    question: 'How quickly will I hear back?',
    answer: 'Most WhatsApp requests are answered within a few minutes during business hours. Corporate consultation requests are typically answered within one business day.',
  },
]

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Frequently asked questions</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="text-gray-600 leading-relaxed pb-5 pr-8">{faq.answer}</p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="max-w-2xl mx-auto text-center mt-10">
            <p className="text-gray-600 mb-4">Still have a question?</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage

export const Head = ({ location }) => (
  <Seo
    title="FAQ"
    description="Answers to common questions about booking flights and tours, changes and cancellations, visas, and corporate travel with Southlink Travels."
    pathname={location.pathname}
  />
)
