import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const DEFAULT_IMAGE = '/images/galle-boat.jpg'

/**
 * Drop into a page's `export const Head` to get title, meta description,
 * canonical link, Open Graph, Twitter Card, and optional JSON-LD in one go.
 */
const Seo = ({ title, description, pathname = '/', image, jsonLd, noindex = false }) => {
  const { site } = useStaticQuery(graphql`
    query SeoSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { title: siteTitle, description: siteDescription, siteUrl } = site.siteMetadata

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || siteDescription
  const metaUrl = `${siteUrl}${pathname}`
  const metaImage = `${siteUrl}${image || DEFAULT_IMAGE}`

  const jsonLdList = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {jsonLdList.map((entry, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <script key={idx} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </>
  )
}

export default Seo

export const buildTravelAgencyJsonLd = (settings = {}, siteUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Southlink Travels',
  url: siteUrl,
  image: `${siteUrl}${DEFAULT_IMAGE}`,
  ...(settings.contact_numbers?.[0] && { telephone: settings.contact_numbers[0] }),
  ...(settings.email && { email: settings.email }),
  ...(settings.address && {
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.address,
      addressLocality: 'Galle',
      addressCountry: 'LK',
    },
  }),
})

export const buildTourJsonLd = (tour, siteUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: tour.title,
  ...(tour.description && { description: tour.description }),
  ...(tour.images?.[0] && { image: `${siteUrl}${tour.images[0]}` }),
  ...(tour.tags?.length && { touristType: tour.tags }),
  ...(tour.duration && { itinerary: tour.duration }),
  ...(tour.price && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'LKR',
      price: tour.price,
      availability: 'https://schema.org/InStock',
    },
  }),
})
