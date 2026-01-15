import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { Link } from 'gatsby'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/sri-lanka/sri-lanka-provinces.json"

const sriLankaLocations = {
  'Colombo': { coordinates: [79.8612, 6.9271] },
  'Galle': { coordinates: [80.2176, 6.0329] },
  'Kandy': { coordinates: [80.6337, 7.2906] },
  'Anuradhapura': { coordinates: [80.4134, 8.3114] },
  'Sigiriya': { coordinates: [80.7596, 7.9569] },
  'Ella': { coordinates: [81.0447, 6.8667] },
  'Nuwara Eliya': { coordinates: [80.7698, 6.9497] },
  'Jaffna': { coordinates: [80.0074, 9.6615] },
}

const SriLankaMap = ({ tours = [] }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null)

  const locationTours = {}
  tours.forEach(tour => {
    if (tour.map_location && sriLankaLocations[tour.map_location]) {
      if (!locationTours[tour.map_location]) {
        locationTours[tour.map_location] = []
      }
      locationTours[tour.map_location].push(tour)
    }
  })

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg bg-white">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [80, 7.5],
          scale: 3000
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[80, 7.5]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#9CA3AF"
                  strokeWidth={0.5}
                  className="outline-none"
                />
              ))
            }
          </Geographies>
          {Object.entries(locationTours).map(([location, locationToursList]) => {
            const coords = sriLankaLocations[location]?.coordinates
            if (!coords) return null

            return (
              <Marker
                key={location}
                coordinates={coords}
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <circle
                  r={8}
                  fill="#DC2626"
                  stroke="#fff"
                  strokeWidth={2}
                  className="cursor-pointer"
                />
                {hoveredLocation === location && (
                  <g>
                    <rect
                      x={-60}
                      y={-60}
                      width={120}
                      height={locationToursList.length * 30 + 20}
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
                      {location}
                    </text>
                    {locationToursList.map((tour, idx) => (
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

export default SriLankaMap
