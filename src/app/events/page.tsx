export default function EventsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Events</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Concert & Event<br/><span className="text-red-400">Tickets.</span></h1><p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">F1 Grand Prix, cricket matches, concerts, festivals — we source tickets to events worldwide. If there&apos;s an event you want to be at, we&apos;ll get you there.</p></div></section>
      <section className="py-16 px-5 sm:px-8"><div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { title: "Formula 1", desc: "Grand Prix tickets, paddock passes, travel packages for races worldwide." },
            { title: "Cricket", desc: "International matches, World Cup fixtures, IPL tickets — we source them." },
            { title: "Concerts & Festivals", desc: "Major concerts, music festivals, and live events anywhere in the world." },
            { title: "Groups & Weddings", desc: "Group bookings for weddings, conferences, school trips — handled end to end." },
          ].map(e => (
            <div key={e.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{e.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            Message us about tickets
          </a>
          <p className="text-xs text-gray-400 mt-3">Tell us the event — we&apos;ll find your tickets.</p>
        </div>
      </div></section>
    </div>
  );
}
