import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { Link } from 'gatsby'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const worldDestinations = {
  'Dubai': { coordinates: [55.2708, 25.2048] },
  'Singapore': { coordinates: [103.8198, 1.3521] },
  'Malaysia': { coordinates: [101.9758, 4.2105] },
  'Thailand': { coordinates: [100.5018, 13.7563] },
  'Maldives': { coordinates: [73.2207, 3.2028] },
  'India': { coordinates: [77.2090, 28.6139] },
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
                        key={tour.id}
                        to={`/tours/${tour.id}`}
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
