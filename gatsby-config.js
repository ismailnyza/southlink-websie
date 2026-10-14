module.exports = {
  siteMetadata: {
    title: `Southlink Travels`,
    description: `Flights, Sri Lanka experiences, and corporate travel - handled personally by a dedicated agent based in Galle.`,
    siteUrl: `https://southlinktravels.lk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tours`,
        path: `${__dirname}/content/tours`,
        ignore: [`**/.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `flights`,
        path: `${__dirname}/content/flights`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `${__dirname}/content/settings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/content/testimonials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-decap-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Southlink Travels`,
        short_name: `Southlink`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#D32F2F`,
        display: `standalone`,
        icon: `static/images/southlink-logo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://southlinktravels.lk`,
        sitemap: `https://southlinktravels.lk/sitemap-index.xml`,
        policy: [
          { userAgent: `*`, disallow: [`/admin`] },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-Q52K6Q2NEH`],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
