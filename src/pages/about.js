import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function About() {
  return (
    <Layout>
      <section className="collection-intro cream-section">
        <div className="site-shell">
          <p className="eyebrow">OUR STORY</p>
          <h1>
            From Galle.
            <br />
            With a world of experience.
          </h1>
          <p>
            Helping people travel since 1991, with personal service at the heart
            of every journey.
          </p>
        </div>
      </section>
      <section className="section-space site-shell heritage-split">
        <div className="heritage-copy">
          <p className="eyebrow">ROOTED IN OUR COMMUNITY</p>
          <h2>
            It began with
            <br />
            <em>a personal connection.</em>
          </h2>
          <p>
            Southlink Travels grew from Galle’s early travel-agency community,
            helping people navigate the world at a time when airline tickets
            were still issued on paper.
          </p>
          <p>
            A 2019 Daily News feature marked our 25th anniversary and recalled
            the dedication of our founder, Nyzar Muheeth, and the team who
            helped travellers across Galle, Matara and Hambantota.
          </p>
          <p>
            Technology has changed the way a ticket is booked. The value of
            having someone to talk to has stayed with us.
          </p>
        </div>
        <figure className="heritage-image">
          <a
            href="/images/southlink-history.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the full newspaper clipping"
          >
            <StaticImage
              src="../../static/images/southlink-history.png"
              alt="Southlink Travels Galle celebrates 25th anniversary — Daily News, 6 February 2019"
              width={554}
              formats={['auto', 'webp']}
              className="archive-photo"
            />
          </a>
          <figcaption className="image-note">
            DAILY NEWS · 6 FEBRUARY 2019 · OPEN TO READ
          </figcaption>
        </figure>
      </section>
      <section className="section-space cream-section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SOUTHLINK TODAY</p>
              <h2>
                The same care.
                <br />
                <em>New possibilities.</em>
              </h2>
            </div>
            <p>
              Based in Galle, we help with flights, Sri Lanka journeys,
              international holidays, airport transfers and corporate travel.
              Each enquiry is an opportunity to understand what matters to you.
            </p>
          </div>
          <div className="travel-styles">
            <div className="travel-style">
              <span className="style-number">01</span>
              <div>
                <h3>People first</h3>
                <p>
                  Speak with a real travel agent about your plans and
                  preferences.
                </p>
              </div>
            </div>
            <div className="travel-style">
              <span className="style-number">02</span>
              <div>
                <h3>Local roots</h3>
                <p>
                  Explore our island with a team based on its southern coast.
                </p>
              </div>
            </div>
            <div className="travel-style">
              <span className="style-number">03</span>
              <div>
                <h3>Your own pace</h3>
                <p>Shape your itinerary around the experiences you enjoy.</p>
              </div>
            </div>
            <div className="travel-style">
              <span className="style-number">04</span>
              <div>
                <h3>Room to explore</h3>
                <p>
                  Bring us an idea, from a few days away to a longer adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space site-shell trip-invitation">
        <p className="eyebrow">COME SAY HELLO</p>
        <h2>
          Every journey starts
          <br />
          <em>with a conversation.</em>
        </h2>
        <p>Visit our Galle office or tell us what you have in mind.</p>
        <div className="button-row justify-center">
          <Link className="button button-red" to="/plan-your-trip">
            Plan with Southlink ↗
          </Link>
          <Link className="text-link" to="/contact">
            Find our office ↗
          </Link>
        </div>
      </section>
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo
    title="Our Story"
    description="Discover the story of Southlink Travels, a Galle-based travel agency with over three decades of personal travel service."
    pathname={location.pathname}
  />
)
