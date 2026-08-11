import Image from "next/image";

const TOURS = [
  { title: "Galle Fort & Coastal Gems", days: "3 days", price: "From USD 350/person", desc: "Explore the UNESCO World Heritage Galle Fort, Unawatuna beach, jungle beach, and a traditional cinnamon plantation. Private guide, boutique hotel, all meals.", highlights: "Fort walk, beach time, cinnamon experience, sunset at the ramparts" },
  { title: "Tea Country & Hill Station", days: "5 days", price: "From USD 680/person", desc: "Kandy, Nuwara Eliya, and Ella. Train ride through tea plantations, Temple of the Tooth, tea factory tour, and the Nine Arch Bridge. Colonial bungalows and mountain air.", highlights: "Scenic train, tea tasting, Temple of the Tooth, Nine Arch Bridge" },
  { title: "Wildlife & Safari Circuit", days: "6 days", price: "From USD 950/person", desc: "Yala National Park, Udawalawe, and Sinharaja Rainforest. Leopards, elephants, birds, and endemic wildlife. Expert naturalist guides, luxury tented camps.", highlights: "Leopard tracking, elephant encounters, rainforest walk, luxury camping" },
  { title: "Cultural Triangle", days: "7 days", price: "From USD 1,100/person", desc: "Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, and Kandy. The heart of Sri Lanka's 2,500-year history. UNESCO sites, expert archaeology guides, heritage hotels.", highlights: "Sigiriya climb, ancient cities, cave temples, cultural shows" },
  { title: "South Coast Beach Hopper", days: "5 days", price: "From USD 520/person", desc: "Mirissa, Tangalle, Hiriketiya. Whale watching, surfing lessons, beachfront dining, and the most beautiful coastline in Sri Lanka.", highlights: "Whale watching, surfing, fresh seafood, secret beaches" },
  { title: "Full Island Grand Tour", days: "14 days", price: "From USD 2,200/person", desc: "The complete Sri Lanka experience. Colombo to Negombo, Cultural Triangle, Kandy, Ella, Yala, Galle. Private vehicle throughout, handpicked hotels, expert guide.", highlights: "Everything. This is the one." },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Tours</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Sri Lanka<br /><span className="text-red-400">experiences.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Curated tours designed by people who live here. Every itinerary is customizable — add days, swap hotels, change the pace.</p>
        </div>
      </section>
      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOURS.map(tour => (
            <div key={tour.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-xl group-hover:text-red-600 transition-colors">{tour.title}</h3>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex-shrink-0 ml-2">{tour.days}</span>
                </div>
                <p className="text-sm text-red-600 font-semibold mb-3">{tour.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{tour.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tour.highlights.split(", ").map(h => <span key={h} className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full">{h}</span>)}
                </div>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in the "${tour.title}" tour. Please share more details and availability.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm">
                  Enquire about this tour <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">Don&apos;t see what you&apos;re looking for? Every tour can be customized — or we can build one from scratch.</p>
          <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            Build my custom tour
          </a>
        </div>
      </section>
    </div>
  );
}
