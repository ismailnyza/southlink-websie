import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { Link } from 'gatsby'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/sri-lanka/sri-lanka-provinces.json"

const sriLankaLocations = {
  'Colombo': { coordinates: [79.8612, 6.9271] },
  'Galle': { coordinates: [80.2168, 6.0535] },
  'Kandy': { coordinates: [80.6337, 7.2906] },
  'Anuradhapura': { coordinates: [80.4037, 8.3114] },
  'Sigiriya': { coordinates: [80.7603, 7.9570] },
  'Ella': { coordinates: [81.0462, 6.8667] },
  'Nuwara Eliya': { coordinates: [80.7891, 6.9497] },
  'Jaffna': { coordinates: [80.0074, 9.6615] },
  "Adam's Peak": { coordinates: [80.4992, 6.8096] },
  'Bentota': { coordinates: [79.9955, 6.4260] },
  'Dambulla': { coordinates: [80.6517, 7.8567] },
  'Horton Plains': { coordinates: [80.7969, 6.8067] },
  'Kalpitiya': { coordinates: [79.7644, 8.2333] },
  'Knuckles': { coordinates: [80.7833, 7.4667] },
  'Matale': { coordinates: [80.6234, 7.4675] },
  'Mirissa': { coordinates: [80.4589, 5.9483] },
  'Negombo': { coordinates: [79.8358, 7.2083] },
  'Pasikudah': { coordinates: [81.5667, 7.9333] },
  'Polonnaruwa': { coordinates: [81.0000, 7.9403] },
  'Ratnapura': { coordinates: [80.4037, 6.6828] },
  'Sinharaja': { coordinates: [80.4167, 6.4000] },
  'Trincomalee': { coordinates: [81.2335, 8.5874] },
  'Udawalawe': { coordinates: [80.8883, 6.4386] },
  'Wilpattu': { coordinates: [80.0500, 8.4500] },
  'Yala': { coordinates: [81.5167, 6.3725] },
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

export default SriLankaMap
