import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { Link } from 'gatsby'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const worldDestinations = {
  'Dubai, UAE': { coordinates: [55.2708, 25.2048] },
  'Singapore': { coordinates: [103.8198, 1.3521] },
  'Malaysia': { coordinates: [101.9758, 4.2105] },
  'Thailand': { coordinates: [100.5018, 13.7563] },
  'Maldives': { coordinates: [73.5093, 4.1755] },
  'India': { coordinates: [77.2090, 28.6139] },
  'Australia': { coordinates: [151.2093, -33.8688] },
  'Bali': { coordinates: [115.1889, -8.4095] },
  'Cambodia': { coordinates: [103.8670, 13.3671] },
  'Egypt': { coordinates: [31.2357, 30.0444] },
  'Indonesia': { coordinates: [106.8456, -6.2088] },
  'Istanbul': { coordinates: [28.9784, 41.0082] },
  'Japan': { coordinates: [139.6503, 35.6762] },
  'Morocco': { coordinates: [-7.9811, 31.6295] },
  'Nepal': { coordinates: [85.3240, 27.7172] },
  'Paris': { coordinates: [2.3522, 48.8566] },
  'Philippines': { coordinates: [120.9842, 14.5995] },
  'South Korea': { coordinates: [126.9780, 37.5665] },
  'Turkey': { coordinates: [34.8286, 38.6431] },
  'United Kingdom': { coordinates: [-0.1276, 51.5074] },
  'Vietnam': { coordinates: [105.8542, 21.0285] },
}

const WorldMap = ({ tours = [] }) => {
  const [hoveredDestination, setHoveredDestination] = useState(null)

  const destinationTours = {}
  tours.forEach(tour => {
    if (tour.destination && worldDestinations[tour.destination]) {
      if (!destinationTours[tour.destination]) {
        destinationTours[tour.destination] = []
      }
      destinationTours[tour.destination].push(tour)
    }
  })

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg bg-white">
      <ComposableMap
        projection="geoMercator"
        className="w-full h-full"
      >
        <ZoomableGroup center={[80, 20]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#9CA3AF"
                  strokeWidth={0.3}
                  className="outline-none"
                />
              ))
            }
          </Geographies>
          {Object.entries(destinationTours).map(([destination, destinationToursList]) => {
            const coords = worldDestinations[destination]?.coordinates
            if (!coords) return null

            return (
              <Marker
                key={destination}
                coordinates={coords}
                onMouseEnter={() => setHoveredDestination(destination)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <circle
                  r={6}
                  fill="#DC2626"
                  stroke="#fff"
                  strokeWidth={2}
                  className="cursor-pointer"
                />
                {hoveredDestination === destination && (
                  <g>
                    <rect
                      x={-60}
                      y={-60}
                      width={120}
                      height={destinationToursList.length * 30 + 20}
                      fill="white"
                      stroke="#DC2626"
                      strokeWidth={2}
                      rx={4}
                      className="shadow-lg"
                    />
                    <text
                      x={0}
                      y={-40}
                      textAnchor="middle"
                      className="text-xs font-semibold fill-gray-800"
                    >
                      {destination}
                    </text>
                    {destinationToursList.map((tour, idx) => (
                      <Link
                        key={tour.slug}
                        to={`/tours/${tour.slug}`}
                        className="block"
                      >
                        <text
                          x={0}
                          y={-20 + idx * 30}
                          textAnchor="middle"
                          className="text-xs fill-blue-600 hover:fill-blue-800 cursor-pointer"
                        >
                          {tour.title}
                        </text>
                      </Link>
                    ))}
                  </g>
                )}
              </Marker>
            )
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default WorldMap
