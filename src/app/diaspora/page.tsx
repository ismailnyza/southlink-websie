export default function DiasporaPage() {
  const routes = [
    { from: "Dubai", to: "Colombo", note: "4h 30m direct. Emirates, SriLankan, FlyDubai. Multiple daily flights." },
    { from: "Doha", to: "Colombo", note: "5h direct. Qatar Airways, SriLankan. Excellent connections from Europe and US." },
    { from: "London", to: "Colombo", note: "11–14h, usually 1 stop. Good connections via Middle East hubs." },
    { from: "Sydney", to: "Colombo", note: "12–16h, 1 stop. Via Singapore, Kuala Lumpur, or Middle East." },
    { from: "Toronto", to: "Colombo", note: "18–24h, 1–2 stops. We find the shortest layovers and best connections." },
    { from: "Singapore", to: "Colombo", note: "4h direct. Singapore Airlines, SriLankan. A quick hop for weekend visits." },
  ];

  const services = [
    {
      title: "Best fares on your route",
      desc: "We track fares year-round on every major diaspora route. We know when prices drop, which airlines run seasonal deals, and how to find seats during peak holiday periods when online prices spike 3x.",
    },
    {
      title: "Family bookings",
      desc: "Group discounts for 4+ passengers. Seats together — we make sure the system doesn't scatter your family across the plane. Special meals, bassinet seats for infants, wheelchair assistance for elderly parents.",
    },
    {
      title: "Sri Lanka tours when you land",
      desc: "You're coming home — make the most of it. We arrange airport pickup, a tour of the cultural triangle, beach stays, or a full island circuit. Everything's booked before you land so you hit the ground running.",
    },
    {
      title: "Send gifts & tickets to family in Sri Lanka",
      desc: "Want to send your parents on a holiday? Buy your nephew concert tickets? Arrange a weekend at a beach hotel for the family? We handle everything locally — you pay from abroad, we deliver in Sri Lanka.",
    },
    {
      title: "Visa help for family visiting you",
      desc: "When your parents or siblings need a visa to visit you abroad, we guide them through the application. Document checking, appointment booking, cover letters — the whole process.",
    },
    {
      title: "Emergency flights home",
      desc: "When you need to get home fast, call us any hour of the day or night. We find seats on sold-out flights, arrange compassionate fares where available, and handle everything while you focus on what matters.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Diaspora</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Flying home?
            <br />
            <span className="text-red-400">We handle everything.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            For Sri Lankans in Dubai, London, Sydney, Toronto, Singapore, Doha — and everywhere else. We know the routes, the seasons, the tricks. And we answer the phone when you call.
          </p>
        </div>
      </section>

      {/* Routes */}
      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            We know your route.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {routes.map(r => (
              <div
                key={r.from}
                className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 hover:border-red-100 transition-colors"
              >
                <p className="font-bold text-gray-900">
                  {r.from} → {r.to}
                </p>
                <p className="text-xs text-gray-500 mt-1">{r.note}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            What we do for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 pt-10 border-t border-gray-100">
            <p className="text-gray-700 font-medium mb-2">
              We&apos;re from Galle too. We understand what matters when you&apos;re coming home.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Message us from anywhere in the world — we respond within minutes during Sri Lanka business hours.
            </p>
            <a
              href="https://wa.me/+94776984777?text=Hi!%20I'm%20based%20abroad%20and%20looking%20for%20flights%20home%20to%20Sri%20Lanka.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Message us about flying home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
