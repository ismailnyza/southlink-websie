import React, { useEffect, useRef, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Brand from './Brand'
import { phoneHref } from '../utils/contact'
import '../styles/global.css'
import '../styles/travel.css'

const links = [
  ['/tours/inbound', 'Sri Lanka'],
  ['/tours/outbound', 'World travel'],
  ['/flights', 'Flights'],
  ['/about', 'Our story'],
  ['/contact', 'Contact'],
]

export default function Layout({ children }) {
  const { allSettingsJson } = useStaticQuery(graphql`
    query LayoutSettings {
      allSettingsJson {
        nodes {
          email
          contact_numbers
          address
        }
      }
    }
  `)
  const settings = allSettingsJson.nodes[0]
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  useEffect(() => {
    const escape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    if (open) document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-shell header-inner">
          <Brand />
          <button
            ref={toggle}
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Close ×' : 'Menu ☰'}
          </button>
          <nav
            id="site-navigation"
            className={`site-navigation ${open ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="button button-red nav-cta"
              to="/plan-your-trip"
              onClick={() => setOpen(false)}
            >
              Plan your trip <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <Brand />
            <p>
              Rooted in Galle. Ready for the world.
              <br />
              Personal travel planning since 1991.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <Link to="/tours/inbound">Sri Lanka journeys</Link>
            <Link to="/tours/outbound">World travel</Link>
            <Link to="/plan-your-trip">Customise your trip</Link>
            <Link to="/about">Our story</Link>
          </div>
          <div>
            <h2>Travel with us</h2>
            <Link to="/flights">Flight enquiries</Link>
            <Link to="/airport-transfer">Airport transfers</Link>
            <Link to="/corporate">Corporate travel</Link>
            <Link to="/faq">Common questions</Link>
          </div>
          <div>
            <h2>Find us in Galle</h2>
            <p>{settings.address}</p>
            <a href={phoneHref(settings.contact_numbers[0])}>
              {settings.contact_numbers[0]}
            </a>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
          </div>
        </div>
        <div className="site-shell footer-bottom">
          <span>© {new Date().getFullYear()} Southlink Travels (Pvt) Ltd</span>
          <Link to="/photo-credits">Photography credits</Link>
          <span>Made for your next chapter.</span>
        </div>
      </footer>
    </>
  )
}
