import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import TourCard from '../components/TourCard'
import { getTourNodes, getTourSlug } from '../utils/tours'
import Seo, { buildTravelAgencyJsonLd } from '../components/Seo'

export const query = graphql`
  query HomeJourneys {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSettingsJson {
      nodes {
        email
        address
        contact_numbers
      }
    }
    inbound: allInboundJson(filter: { visibility: { eq: true } }) {
      nodes {
        fields {
          slug
        }
        title
        images
        coverImage {
          ...TourCover
        }
        destination
        duration
        tags
        visibility
        description
        itinerary {
          title
        }
      }
    }
  }
`

const styles = [
  ['01', 'Culture & heritage', 'Ancient cities. Living traditions.', 'culture'],
  ['02', 'Coast & slow days', 'Salt air and a little less hurry.', 'beach'],
  ['03', 'Into the wild', 'Room for wonder, out in nature.', 'wildlife'],
  ['04', 'Hills & adventure', 'Take the scenic route.', 'adventure'],
]

export default function IndexPage({ data }) {
  const tours = ['sigiriya-ancient', 'ella-highlands', 'galle-heritage']
    .map((slug) =>
      getTourNodes(data, 'inbound').find((t) => getTourSlug(t) === slug),
    )
    .filter(Boolean)
  return (
    <Layout>
      <section className="home-hero">
        <StaticImage
          src="../../static/images/galle-boat.jpg"
          alt="Colourful fishing boats along the Galle coast"
          className="hero-image"
          style={{ position: 'absolute', inset: 0 }}
          imgStyle={{ objectPosition: 'center 60%' }}
          layout="fullWidth"
          formats={['auto', 'webp']}
          quality={75}
          loading="eager"
        />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <p className="eyebrow light">SRI LANKA & BEYOND · WITH SOUTHLINK</p>
          <h1>
            A little wonder.
            <br />A world of <em>possibility.</em>
          </h1>
          <p className="hero-intro">
            From the island we call home to the places you dream of.
            <br className="desktop-break" /> Thoughtful journeys, planned by
            people who care.
          </p>
          <div className="button-row">
            <a href="#your-journey" className="button button-white">
              Find your journey <span aria-hidden="true">↘</span>
            </a>
            <Link to="/plan-your-trip" className="hero-secondary">
              Let’s make it yours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="site-shell hero-caption">
          <span>01 / THE SOUTH COAST</span>
          <span>Our home. Your starting point.</span>
        </div>
      </section>
      <div className="trust-strip site-shell">
        <span>Personal travel planning since 1991</span>
        <span>Based in Galle, Sri Lanka</span>
        <span>Planned around you</span>
        <Link to="/about">
          Get to know Southlink <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <section className="section-space site-shell" id="your-journey">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR JOURNEY</p>
            <h2>
              Start with a place.
              <br />
              <em>Make it your own.</em>
            </h2>
          </div>
          <p>
            Some come for the coast. Others for ancient cities, misty hills or a
            glimpse of the wild. Explore a few starting points, then let us
            shape the details around you.
          </p>
        </div>
        <div className="travel-styles">
          {styles.map(([n, title, text, category]) => (
            <Link
              key={n}
              to={`/tours/inbound?style=${category}`}
              className="travel-style"
            >
              <span className="style-number">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-space cream-section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JOURNEYS WORTH TAKING</p>
              <h2>
                A few ideas.
                <br />
                <em>Endless ways to go.</em>
              </h2>
            </div>
            <div>
              <p>
                These itineraries are a starting point. We’ll help you choose
                the route, stays and experiences that suit your dates and pace.
              </p>
              <Link className="text-link" to="/tours/inbound">
                Explore all Sri Lanka journeys <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="journey-grid">
            {tours.map((t) => (
              <TourCard key={getTourSlug(t)} tour={t} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space site-shell heritage-split">
        <div className="heritage-image">
          <StaticImage
            src="../../static/images/southlink-history.png"
            alt="Daily News feature on Southlink Travels’ 25th anniversary, published 6 February 2019"
            width={554}
            formats={['auto', 'webp']}
            className="archive-photo"
          />
          <span className="image-note">
            FROM OUR ARCHIVE · DAILY NEWS, 2019
          </span>
        </div>
        <div className="heritage-copy">
          <p className="eyebrow">A GALLE STORY. A GLOBAL OUTLOOK.</p>
          <h2>
            Good journeys begin
            <br />
            with <em>good people.</em>
          </h2>
          <p>
            Southlink’s story is woven into Galle’s travel history. From the
            days of paper airline tickets to today’s tailor-made holidays,
            personal service has always been at the heart of what we do.
          </p>
          <p>
            Since 1991, we’ve helped travellers find their way. Today, that same
            care connects flights, Sri Lankan experiences and journeys further
            afield.
          </p>
          <Link to="/about" className="text-link">
            Meet Southlink <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="section-space dark-section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow light">THE REST OF YOUR JOURNEY</p>
              <h2>
                Every detail.
                <br />
                <em>A familiar face.</em>
              </h2>
            </div>
            <p>
              From your first flight enquiry to the drive home, our Galle team
              helps you put the pieces together.
            </p>
          </div>
          <div className="service-grid">
            {[
              [
                '01',
                'Flights',
                'Routes, fares and changes, with an agent to talk to.',
                '/flights',
              ],
              [
                '02',
                'World travel',
                'Go further with an international holiday planned for you.',
                '/tours/outbound',
              ],
              [
                '03',
                'Airport transfers',
                'Arrange your arrival or departure with our team.',
                '/airport-transfer',
              ],
              [
                '04',
                'Corporate travel',
                'Personal support for your team’s travel needs.',
                '/corporate',
              ],
            ].map(([n, title, description, to]) => (
              <Link className="service-link" to={to} key={title}>
                <span>{n}</span>
                <h3>
                  {title} <span aria-hidden="true">↗</span>
                </h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space site-shell trip-invitation">
        <p className="eyebrow">YOUR DATES. YOUR PACE. YOUR PEOPLE.</p>
        <h2>
          Let’s make your
          <br />
          <em>next journey happen.</em>
        </h2>
        <p>Tell us what you have in mind. We’ll take it from there.</p>
        <Link to="/plan-your-trip" className="button button-red">
          Customise your trip <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo
    title="Sri Lanka Journeys & Personal Travel Planning"
    jsonLd={buildTravelAgencyJsonLd(
      data?.allSettingsJson?.nodes?.[0] || {},
      data?.site?.siteMetadata?.siteUrl || 'https://southlinktravels.lk',
    )}
  />
)
