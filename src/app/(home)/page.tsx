import { SITE, FLIGHT_PRICES, SERVICES, GUARANTEE, TESTIMONIALS } from "@/lib/constants";
import PriceTicker from "@/components/PriceTicker";
import AIChatWidget from "@/components/AIChatWidget";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image gradient (swap with real photo) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMjQgMGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20">
          <p className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            IATA Certified · Galle, Sri Lanka · Est. 2009
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-none tracking-tight text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Travel,{" "}
            <span className="text-red-500">handled</span>
            <br />
            personally.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Not a booking system. Not a chatbot. Not a call center.
            <br className="hidden sm:block" />
            A dedicated travel agency based in Galle that answers when you call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href="/flights" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-base transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30">
              <SearchIcon /> Find Flights
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-base backdrop-blur-sm border border-white/20 transition-all duration-200"
            >
              <ChatIcon /> Talk to an Agent
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm animate-fade-up" style={{ animationDelay: "0.65s" }}>
            <span className="flex items-center gap-1.5"><StarIcon /> {SITE.googleRating} ★</span>
            <span>{SITE.ticketsBooked.toLocaleString()}+ tickets booked</span>
            <span>{SITE.tripsRescued} trips rescued</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ PRICE TICKER ═══════════════ */}
      <section className="bg-gray-900 border-y border-gray-800 overflow-hidden py-4">
        <PriceTicker prices={FLIGHT_PRICES} />
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">What we do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Everything travel.
            <br />
            <span className="text-gray-300">One relationship.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-14">
            From a single flight to a month-long tour, we handle every detail so you can focus on the experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 h-60 sm:h-72 flex flex-col justify-end transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY SOUTHlink ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">Why Southlink</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                The difference is<br />
                <span className="text-red-600">someone who answers.</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                Anyone can sell you a ticket. We&apos;re the ones who pick up the phone when the airline cancels at midnight. Who rebook you before you even know there&apos;s a problem. Who remember your seat preference and your daughter&apos;s name.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["IATA Certified", `#${SITE.iata}`],
                  ["Years in Business", `${SITE.yearsInBusiness}+`],
                  ["Tickets Booked", `${SITE.ticketsBooked.toLocaleString()}+`],
                  ["Google Rating", `${SITE.googleRating} ★`],
                  ["Trips Rescued", `${SITE.tripsRescued}`],
                  ["Reviews", `${SITE.googleReviews}`],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-2 py-2 border-b border-gray-200">
                    <span className="text-gray-400 text-xs">{label}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Image placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
                  </svg>
                  <p className="text-sm">Galle Office</p>
                  <p className="text-xs mt-1">Selaka Complex, Gamini Mawatha</p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <p className="text-3xl font-bold text-gray-900">{SITE.googleRating}</p>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">{SITE.googleReviews} Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GUARANTEE ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4 text-center">The Southlink Guarantee</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            If something goes wrong,
            <br />
            <span className="text-red-600">we fix it.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg text-center mb-14">Not a chatbot. Not a call center script. A real team in Galle.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GUARANTEE.map((g, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-red-50/50 transition-colors group">
                <span className="text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckIcon />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ POPULAR ROUTES ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4 text-center">Popular Routes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Where is everyone going?
          </h2>
          <p className="text-gray-500 text-base text-center mb-12">Typical fare ranges from Colombo. Message us for exact pricing on your dates.</p>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {FLIGHT_PRICES.map((f, i) => (
              <div key={f.route} className={`flex items-center justify-between px-6 py-4 ${i < FLIGHT_PRICES.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50 transition-colors group`}>
                <div>
                  <p className="font-semibold text-gray-900">{f.route}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{f.airline}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">LKR {f.from.toLocaleString()} – {f.to.toLocaleString()}</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in flights: ${f.route}. Please let me know the best options.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-600 hover:text-red-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Get exact price →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4 text-center">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
            {SITE.googleRating} stars. {SITE.googleReviews} reviews.
            <br />
            <span className="text-gray-300">On Google. Unfiltered.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs text-gray-400">— {t.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.google.com/search?q=Southlink+Travels+Galle" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center gap-1">
              Read all {SITE.googleReviews} reviews on Google <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ EMERGENCY ═══════════════ */}
      <section className="py-20 sm:py-28 bg-red-600 text-white px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Stranded? Flight cancelled?
            <br />
            <span className="text-red-200">Call us. Even if you didn&apos;t book with us.</span>
          </h2>
          <p className="text-red-100 text-lg mb-8">
            We&apos;ve rescued {SITE.tripsRescued}+ travellers. We&apos;ll do the same for you — no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-lg">
              <PhoneIcon /> {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-all shadow-lg">
              <ChatIcon /> WhatsApp
            </a>
          </div>
          <p className="text-red-200 text-sm mt-4">24 hours. 7 days. We answer.</p>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-10 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Ready when you are.</h2>
          <p className="text-gray-500 text-lg mb-8">Your personal travel team is one message away.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/flights" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-red-600/20">
              <SearchIcon /> Find Flights
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 rounded-full font-semibold text-base transition-all">
              <ChatIcon /> Message Us
            </a>
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </>
  );
}

/* ── Inline SVG Icons ── */
function SearchIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
}
function ChatIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
}
function StarIcon() {
  return <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
}
function CheckIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
}
function PhoneIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
function ArrowRight() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>;
}
