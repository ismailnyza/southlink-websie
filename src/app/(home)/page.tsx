import PriceTicker from "@/components/PriceTicker";
import AIConcierge from "@/components/AIConcierge";

/* ── Unsplash Sri Lanka images ── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1590055531615-f26d3f3c29e7?w=1600&q=80",
  galleFort: "https://images.unsplash.com/photo-1570788647885-4d68a9ddb7c1?w=800&q=80",
  beach: "https://images.unsplash.com/photo-1544551763-8ef4e5e8cd47?w=800&q=80",
  train: "https://images.unsplash.com/photo-1531369201-38e28c4d2b7c?w=800&q=80",
  tea: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  temple: "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=800&q=80",
  elephant: "https://images.unsplash.com/photo-1551884838-62cc21cb39a8?w=800&q=80",
};

const ROUTES = [
  { route: "Colombo → Dubai", from: 45000, to: 85000, airline: "Emirates, SriLankan, FlyDubai" },
  { route: "Colombo → London", from: 120000, to: 200000, airline: "SriLankan, Emirates, Qatar Airways" },
  { route: "Colombo → Singapore", from: 35000, to: 65000, airline: "Singapore Airlines, SriLankan" },
  { route: "Colombo → Chennai", from: 25000, to: 45000, airline: "SriLankan, IndiGo, SpiceJet" },
  { route: "Colombo → Doha", from: 55000, to: 95000, airline: "Qatar Airways, SriLankan" },
  { route: "Colombo → Male", from: 30000, to: 55000, airline: "SriLankan, Emirates, FlyDubai" },
  { route: "Colombo → Bangkok", from: 40000, to: 75000, airline: "Thai Airways, SriLankan" },
  { route: "Colombo → Kuala Lumpur", from: 35000, to: 60000, airline: "AirAsia, Malaysia Airlines" },
  { route: "Colombo → Tokyo", from: 90000, to: 150000, airline: "SriLankan, Singapore Airlines, JAL" },
  { route: "Colombo → Sydney", from: 110000, to: 180000, airline: "SriLankan, Emirates, Singapore Airlines" },
];

const SERVICES = [
  { title: "Flights", desc: "Smart routing, fair fares. We find the best connections and rebook you if anything changes.", href: "/flights", gradient: "from-red-600 to-rose-700", icon: "✈️" },
  { title: "Sri Lanka Tours", desc: "Beaches, culture, wildlife, tea country — curated experiences by people who live here.", href: "/tours/inbound", gradient: "from-emerald-600 to-teal-700", icon: "🏝️" },
  { title: "International Tours", desc: "Dubai, Singapore, Thailand, Maldives — full visa and itinerary support included.", href: "/tours/outbound", gradient: "from-blue-600 to-indigo-700", icon: "🌏" },
  { title: "Concert & Event Tickets", desc: "F1, cricket, concerts, festivals — we source tickets to events worldwide.", href: "/events", gradient: "from-purple-600 to-violet-700", icon: "🎫" },
  { title: "Visa Help", desc: "Document checking and application guidance for UAE, Schengen, UK, India, and more.", href: "/visa", gradient: "from-amber-500 to-orange-600", icon: "🛂" },
  { title: "Corporate Travel", desc: "Credit terms, dedicated support, and 24/7 re-routing for your whole team.", href: "/corporate", gradient: "from-gray-700 to-gray-900", icon: "💼" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20 pb-10">
          <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Galle, Sri Lanka · Licensed Travel Agency
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Travel,
            <br />
            <span className="text-red-400">handled personally.</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Not a booking website. Not a chatbot. Not a call center.
            <br className="hidden sm:block" />
            A real team in Galle who answer when you call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href="/flights" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-base transition-all duration-200 shadow-xl shadow-red-600/20 hover:shadow-2xl hover:shadow-red-600/30 hover:scale-[1.02]">
              <SearchIcon /> Find Flights
            </a>
            <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-base backdrop-blur border border-white/25 transition-all duration-200 hover:scale-[1.02]">
              <ChatIcon /> Talk to Our Team
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <span className="flex items-center gap-1.5"><ShieldIcon /> Licensed & Bonded</span>
            <span>15+ years in Galle</span>
            <span>IATA Accredited</span>
            <a href="https://www.google.com/search?q=Southlink+Travels+Galle" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1.5">
              <StarIcon /> See our Google reviews →
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════ PRICE TICKER ═══════════════════════════ */}
      <section className="bg-gray-900 border-y border-gray-800 overflow-hidden py-4">
        <PriceTicker prices={ROUTES} />
      </section>

      {/* ═══════════════════════════ WHAT WE DO ═══════════════════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">What we do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            Everything travel.
            <br />
            <span className="text-gray-300">One relationship.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-14">
            From a single flight to a month-long tour, concert tickets to corporate accounts — we handle the details so you can enjoy the journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICES.map((s) => (
              <a key={s.title} href={s.href}
                className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 h-64 sm:h-72 flex flex-col justify-end transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="relative z-10">
                  <span className="text-3xl mb-3 block">{s.icon}</span>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHY US ═══════════════════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">Why Southlink</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                The difference is
                <br />
                <span className="text-red-600">someone who answers.</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                Anyone can sell you a ticket online. We&apos;re the ones who pick up the phone when your flight gets cancelled at midnight. Who remember your seat preference. Who know the best connections because we book them every day.
              </p>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                We also do what most agencies don&apos;t — concert tickets, F1 Grand Prix packages, cricket matches, festival passes. If there&apos;s an event anywhere in the world you want to be at, we&apos;ll get you there.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Based in", "Galle, Sri Lanka"],
                  ["Licensed", "IATA accredited"],
                  ["Experience", "15+ years"],
                  ["Languages", "EN, DE, FR, 中文, العربية"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-2 py-2 border-b border-gray-200">
                    <span className="text-gray-400 text-xs">{label}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundImage: `url(${IMG.galleFort})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Our office</p>
                <p className="text-sm font-medium text-gray-900 leading-snug">Selaka Complex, Gamini Mawatha, Galle Fort</p>
                <a href="https://maps.google.com/?q=Southlink+Travels+Galle" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-red-600 hover:text-red-700 font-medium mt-2 inline-flex items-center gap-1">
                  View on map <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ IMAGE STRIP ═══════════════════════════ */}
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { url: IMG.beach, label: "Beaches" },
          { url: IMG.train, label: "Hill Country" },
          { url: IMG.temple, label: "Culture" },
          { url: IMG.elephant, label: "Wildlife" },
        ].map((img) => (
          <div key={img.label} className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            style={{ backgroundImage: `url(${img.url})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-white font-semibold text-lg">{img.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════ GUARANTEE ═══════════════════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4 text-center">Our promise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-center leading-tight">
            If something goes wrong,
            <br />
            <span className="text-red-600">we fix it.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg text-center mb-14">Not a chatbot. Not a call center script. A real team in Galle.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "Flight cancelled? We rebook you — even at midnight.",
              "Visa rejected? We handle the re-application.",
              "Stuck in transit? We answer the phone. Always.",
              "Need to change dates? One message. Done.",
            ].map((g, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-red-50/50 transition-colors group">
                <span className="text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"><CheckIcon /></span>
                <span className="text-gray-700 text-sm sm:text-base">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ ROUTES ═══════════════════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4 text-center">Popular routes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Where is everyone going?</h2>
          <p className="text-gray-500 text-base text-center mb-12">Cached fare ranges from Colombo. Message us for exact pricing on your dates — we respond within minutes.</p>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {ROUTES.map((f, i) => (
              <div key={f.route} className={`flex items-center justify-between px-5 sm:px-6 py-4 ${i < ROUTES.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition-colors group`}>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{f.route}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{f.airline}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm font-semibold text-gray-900 hidden sm:block">LKR {f.from.toLocaleString()} – {f.to.toLocaleString()}</p>
                  <a
                    href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'd like a quote for: ${f.route}. Please share the best options and fares.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-all opacity-0 group-hover:opacity-100 flex-shrink-0 shadow-sm">
                    Get price →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">Fares are estimates from recent bookings. Actual prices depend on dates and availability.</p>
        </div>
      </section>

      {/* ═══════════════════════════ EMERGENCY ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-red-600 text-white px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            Stranded? Flight cancelled?
            <br />
            <span className="text-red-200">Call us. Even if you didn&apos;t book with us.</span>
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ve helped hundreds of stranded travellers get home. No questions asked, no "sorry, you didn&apos;t book with us."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+94912234517" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-xl hover:scale-[1.02]">
              <PhoneIcon /> +94 91 223 4517
            </a>
            <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-[1.02]">
              <ChatIcon /> WhatsApp
            </a>
          </div>
          <p className="text-red-200/70 text-sm mt-5">24 hours. 7 days. We answer.</p>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Ready when you are.</h2>
          <p className="text-gray-500 text-lg mb-8">Your travel team is one message away.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/flights" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-red-600/20 hover:shadow-xl hover:scale-[1.02]">
              <SearchIcon /> Find Flights
            </a>
            <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 rounded-full font-semibold text-base transition-all hover:scale-[1.02]">
              <ChatIcon /> Message Us
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">We typically respond within minutes during business hours (Sri Lanka time)</p>
        </div>
      </section>

      {/* AI Concierge */}
      <AIConcierge />
    </>
  );
}

/* Icons */
function SearchIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>; }
function ChatIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>; }
function StarIcon() { return <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>; }
function ShieldIcon() { return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>; }
function CheckIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>; }
function PhoneIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>; }
function ArrowRight() { return <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>; }
