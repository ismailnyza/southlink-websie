import Image from "next/image";
import Link from "next/link";
import PriceTicker from "@/components/PriceTicker";
import AIConcierge from "@/components/AIConcierge";

const IMG = {
  galleFort: "photo-1590055531615-f26d3f3c29e7",
  stiltFishermen: "photo-1570788647885-4d68a9ddb7c1",
  beach: "photo-1544551763-8ef4e5e8cd47",
  tea: "photo-1578662996442-48f60103fc96",
  temple: "photo-1609949279531-cf48d64bed89",
  elephant: "photo-1551884838-62cc21cb39a8",
};

const ROUTES = [
  { route: "Colombo → Dubai", from: 45000, to: 85000 },
  { route: "Colombo → London", from: 120000, to: 200000 },
  { route: "Colombo → Singapore", from: 35000, to: 65000 },
  { route: "Colombo → Chennai", from: 25000, to: 45000 },
  { route: "Colombo → Doha", from: 55000, to: 95000 },
  { route: "Colombo → Male", from: 30000, to: 55000 },
  { route: "Colombo → Bangkok", from: 40000, to: 75000 },
  { route: "Colombo → Kuala Lumpur", from: 35000, to: 60000 },
  { route: "Colombo → Tokyo", from: 90000, to: 150000 },
  { route: "Colombo → Sydney", from: 110000, to: 180000 },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={`https://images.unsplash.com/${IMG.galleFort}?w=1600&q=80`}
            alt="Galle Fort, Sri Lanka — lighthouse and ocean at dusk"
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-gray-900/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20 pb-10">
          <p className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            Galle, Sri Lanka · Est. 2009 · IATA Accredited
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight text-balance">
            Travel,<br />
            <span className="text-red-400">handled personally.</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Your own dedicated travel agent in Galle. We find the best routes, handle changes, and answer the phone — even at 3 AM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/flights"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-red-600/20 hover:shadow-2xl hover:scale-[1.02]"
            >
              <SearchIcon /> Find Flights
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-base backdrop-blur border border-white/25 transition-all hover:scale-[1.02]"
            >
              <PackageIcon /> Browse Packages
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <ShieldIcon /> IATA Certified
            </span>
            <span>Est. 2009 · Galle</span>
            <a
              href="https://www.google.com/search?q=Southlink+Travels+Galle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors flex items-center gap-1.5"
            >
              <StarIcon /> Google reviews →
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ PRICE TICKER ═══════════════ */}
      <section className="bg-gray-900 border-y border-gray-800 overflow-hidden py-4">
        <PriceTicker prices={ROUTES} />
      </section>

      <div className="rampart-divider" />

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">Beyond flights</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight text-gray-900">
            Everything travel.
            <br />
            <span className="text-gray-300">One relationship.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-14">
            Flights, visas, hotels, tours, event tickets, and changes. Handled by your agent — not a system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                title: "Flights",
                desc: "Smart route planning, fair transparent fares, changes handled by your agent. 30+ routes with cached fare ranges.",
                href: "/flights",
                icon: "✈️",
              },
              {
                title: "Sri Lanka Tours",
                desc: "Curated experiences designed by locals who know every corner of this island — from Galle Fort to the tea country.",
                href: "/tours",
                icon: "🏝️",
              },
              {
                title: "Travel Packages",
                desc: "Pre-built experiences for every budget — romantic getaways, family adventures, luxury escapes. Fully customizable.",
                href: "/packages",
                icon: "📦",
              },
              {
                title: "Concert & Event Tickets",
                desc: "F1, cricket, football, concerts, festivals — we source tickets worldwide and build travel packages around them.",
                href: "/events",
                icon: "🎫",
              },
              {
                title: "Visa Guidance",
                desc: "Document checking and application support for UAE, Schengen, UK, India, China, Thailand, and more.",
                href: "/visa",
                icon: "🛂",
              },
              {
                title: "Corporate Travel",
                desc: "Credit terms, 24/7 re-routing, dedicated support for your entire team. Three tiers — Essential, Business, Enterprise.",
                href: "/corporate",
                icon: "💼",
              },
            ].map(s => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 h-64 sm:h-72 flex flex-col justify-end transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-gray-50 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/10 group-hover:from-red-600/10 group-hover:to-red-700/20 transition-colors duration-500" />
                <div className="relative z-10">
                  <span className="text-3xl mb-3 block">{s.icon}</span>
                  <h3 className="text-gray-900 font-bold text-xl sm:text-2xl mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-red-600 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ IMAGE STRIP ═══════════════ */}
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { id: IMG.beach, label: "Beaches" },
          { id: IMG.tea, label: "Tea Country" },
          { id: IMG.temple, label: "Culture & Heritage" },
          { id: IMG.elephant, label: "Wildlife" },
        ].map(img => (
          <div
            key={img.label}
            className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-gray-200"
          >
            <Image
              src={`https://images.unsplash.com/${img.id}?w=600&q=80`}
              alt={img.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:768px) 50vw, 25vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-white font-serif font-bold text-xl">{img.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">
            Trusted by travellers & businesses
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What our clients say.
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-12">
            Real reviews from real people. Fifteen years of getting it right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                &ldquo;Found the best flight route to Singapore through my agent. Saved money and avoided layovers. Everything handled smoothly.&rdquo;
              </p>
              <p className="text-sm text-gray-500">— Nadeesha P., Colombo</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                &ldquo;Our company has used Southlink for five years. Same agent every time. She knows our preferences without asking. Invaluable.&rdquo;
              </p>
              <p className="text-sm text-gray-500">— Operations Manager, Galle</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                &ldquo;Called at midnight when my flight was cancelled. They had me on a new flight within 20 minutes. Didn&apos;t even book the original through them.&rdquo;
              </p>
              <p className="text-sm text-gray-500">— Ramesh K., Dubai</p>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=Southlink+Travels+Galle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm mt-8"
          >
            See all Google reviews <ArrowRight />
          </a>
        </div>
      </section>

      {/* ═══════════════ GUARANTEE ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">Why book with us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Support when things go wrong.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-14">
            Not a chatbot. Not a call center. A real team in Galle who answer when you call.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {[
              "Smart route planning — we find the best connections",
              "Fair, transparent fares — no hidden costs",
              "Visa & transit guidance before you book",
              "Changes handled by your agent, not a system",
              "Flight cancelled? We rebook you — even at midnight",
            ].map((g, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-red-50 transition-colors group"
              >
                <span className="text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckIcon />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rampart-divider" />

      {/* ═══════════════ EMERGENCY ═══════════════ */}
      <section className="py-20 sm:py-28 bg-red-600 text-white px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Stranded? Flight cancelled?
            <br />
            <span className="text-red-200">Call us. Even if you didn&apos;t book with us.</span>
          </h2>
          <p className="text-red-100 text-lg mb-8">24/7 emergency support. We answer the phone.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+94912234517"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-xl"
            >
              <PhoneIcon /> +94 91 223 4517
            </a>
            <a
              href="https://wa.me/+94776984777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-all shadow-xl"
            >
              <ChatIcon /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ready when you are.
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Your dedicated travel agent is one message away. Not a chatbot. Not a call center. A real person in Galle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/flights"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-red-600/20 hover:shadow-xl hover:scale-[1.02]"
            >
              <SearchIcon /> Find Flights
            </Link>
            <a
              href="https://wa.me/+94776984777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 rounded-full font-semibold transition-all hover:scale-[1.02]"
            >
              <ChatIcon /> Message Us
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Typically responds within minutes during business hours (SLST)
          </p>
        </div>
      </section>

      <AIConcierge />
    </>
  );
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function PackageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
