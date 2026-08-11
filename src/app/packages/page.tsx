import Image from "next/image";

const PACKAGES = [
  { title: "Romantic Escape", price: "From USD 1,200 / couple", desc: "5 nights — Galle Fort boutique hotel, private candlelit beach dinner, couples spa treatment, whale watching excursion, sunset sailing. Perfect for honeymoons and anniversaries.", tag: "Best Seller", img: "photo-1544551763-8ef4e5e8cd47" },
  { title: "Family Adventure", price: "From USD 2,400 / family of 4", desc: "7 nights — Colombo zoo, Kandy cultural show, Ella train ride, Yala safari. Kid-friendly hotels with pools, private air-conditioned vehicle, child-safe activities throughout.", tag: "Family Favorite", img: "photo-1551884838-62cc21cb39a8" },
  { title: "Luxury Circuit", price: "From USD 4,500 / person", desc: "10 nights — Aman, Resplendent Ceylon, Cape Weligama. Helicopter transfers between properties, private chef dinners, personal butler, exclusive access experiences.", tag: "Luxury", img: "photo-1578662996442-48f60103fc96" },
  { title: "Cultural Triangle", price: "From USD 1,800 / person", desc: "6 nights — Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy. UNESCO World Heritage sites, expert archaeology guides, heritage boutique hotels. The 2,500-year story of Sri Lanka.", tag: "Culture", img: "photo-1609949279531-cf48d64bed89" },
  { title: "Beach Hopper", price: "From USD 850 / person", desc: "6 nights — Mirissa, Tangalle, Hiriketiya. Surf lessons, whale watching, beachfront cabanas, fresh seafood every night. The south coast at its finest.", tag: "Popular", img: "photo-1544551763-8ef4e5e8cd47" },
  { title: "Wellness Retreat", price: "From USD 1,600 / person", desc: "7 nights — Daily yoga, meditation, Ayurvedic treatments, plant-based cuisine. Set in a mountain retreat with panoramic views. Detox, recharge, transform.", tag: "Wellness", img: "photo-1578662996442-48f60103fc96" },
  { title: "Adventure Seeker", price: "From USD 1,350 / person", desc: "8 nights — White water rafting in Kitulgala, hiking Ella Rock, surfing in Weligama, cycling through ancient cities, camping in Yala. For those who want their heart rate up.", tag: "Adventure", img: "photo-1551884838-62cc21cb39a8" },
  { title: "Cricket Tour", price: "From USD 950 / person", desc: "Watch Sri Lanka play at Galle International Stadium, Kandy, and Colombo. Match tickets, stadium tours, meet-and-greet with cricket legends, beach recovery days between tests.", tag: "Sports", img: "photo-1570788647885-4d68a9ddb7c1" },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Packages</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Travel packages.<br /><span className="text-red-400">Zero planning stress.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Pre-built experiences for every style and budget. Each package is fully customizable — change dates, swap hotels, add activities. Your trip, your way.</p>
        </div>
      </section>
      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map(pkg => (
            <div key={pkg.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image src={`https://images.unsplash.com/${pkg.img}?w=600&q=80`} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" unoptimized />
                {pkg.tag && <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">{pkg.tag}</span>}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-red-600 transition-colors">{pkg.title}</h3>
                <p className="text-sm text-red-600 font-semibold mb-3">{pkg.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{pkg.desc}</p>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in the "${pkg.title}" package. Please share details and availability.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm w-full justify-center">
                  Enquire now <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Don&apos;t see what you want? Every package is customizable — or we can build one from scratch.</p>
          <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            Design my own package
          </a>
        </div>
      </section>
    </div>
  );
}
