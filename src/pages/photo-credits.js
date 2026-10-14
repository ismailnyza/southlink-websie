import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import destinationPhotos from '../data/destination-photo-credits.json'

const photos = [
  [
    'Sigiriya',
    'Wrobell',
    'https://commons.wikimedia.org/wiki/File:Sigiriya_(141688197).jpeg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
  ],
  [
    'The Nine Arches Bridge, Ella',
    'MichaelJames2468',
    'https://commons.wikimedia.org/wiki/File:The_Nine_Arches_Bridge.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
  ],
  [
    'Mirissa beach aerial',
    'dronepicr',
    'https://commons.wikimedia.org/wiki/File:Mirissa_beach_aerial_(29448581263).jpg',
    'CC BY 2.0',
    'https://creativecommons.org/licenses/by/2.0/',
  ],
]
export default function Credits() {
  return (
    <Layout>
      <section className="section-space site-shell story-body">
        <p className="eyebrow">THROUGH THEIR LENS</p>
        <h1 className="text-4xl mb-8">Photography credits</h1>
        <p>
          Thank you to the photographers whose work helps bring these places to
          life.
        </p>
        {[
          ...photos,
          ...destinationPhotos.map(
            ({ title, author, url, license, licenseUrl }) => [
              title,
              author,
              url,
              license,
              licenseUrl,
            ],
          ),
        ].map(([title, author, url, license, licenseUrl]) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>
              Photograph by {author}, via <a href={url}>Wikimedia Commons</a>.
              Licensed under <a href={licenseUrl}>{license}</a>. Displayed at a
              smaller size and cropped to fit the layout; adaptations remain
              under the same licence.
            </p>
          </div>
        ))}
        <h2>Southlink’s archive</h2>
        <p>
          The Southlink logo and coastal photograph are from our existing
          website collection. The newspaper clipping was supplied from the
          company archive: Daily News, Business / Travel & Aviation, 6 February
          2019.
        </p>
      </section>
    </Layout>
  )
}
export const Head = ({ location }) => (
  <Seo title="Photography Credits" pathname={location.pathname} />
)
