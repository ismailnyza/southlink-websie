export default function EventsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Events & Tickets</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Sports, concerts,<br /><span className="text-red-400">festivals & more.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">If there&apos;s an event anywhere in the world you want to be at, we&apos;ll get you there — tickets, flights, accommodation, the works.</p>
        </div>
      </section>

      {/* Sports */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Sports Events</h2>
          <p className="text-gray-500 mb-10">Grand Prix, cricket, football, tennis — we source tickets and build travel packages around the events you love.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Formula 1 Grand Prix", desc: "F1 tickets for every race on the calendar — Monaco, Singapore, Abu Dhabi, Silverstone, and beyond. Grandstand seats, paddock passes, VIP hospitality. Full travel packages with flights and hotels.", price: "From USD 1,500" },
              { title: "Cricket Matches", desc: "Test matches, ODIs, T20 World Cup fixtures — Sri Lanka home games and international tours. We get tickets to sold-out matches at Galle, Kandy, Colombo, and around the world.", price: "From USD 120" },
              { title: "Premier League Football", desc: "Matchday experiences at Old Trafford, Anfield, Stamford Bridge, and the Emirates. Match tickets, stadium tours, flights from Colombo — the full football pilgrimage.", price: "From USD 850" },
              { title: "Tennis Grand Slams", desc: "Wimbledon, Australian Open, French Open, US Open — Centre Court, Rod Laver Arena, Philippe Chatrier. Premium seats and hospitality packages.", price: "From USD 2,200" },
              { title: "Olympics & World Cups", desc: "Major multi-sport events and world championships. We plan 1-2 years ahead for the big ones. Join our list to get early access to packages.", price: "Register interest" },
              { title: "Rugby & More", desc: "Rugby World Cup, Six Nations, the Ashes, boxing title fights — whatever sport you follow, we can build a trip around it. Just ask.", price: "Custom pricing" },
            ].map(e => (
              <div key={e.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{e.title}</h3>
                <p className="text-xs text-red-600 font-semibold mb-3">{e.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{e.desc}</p>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in ${e.title} tickets. Please share options and pricing.`)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-red-600 hover:text-red-700 inline-flex items-center gap-1">Enquire <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music & Festivals */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Music Concerts & Festivals</h2>
          <p className="text-gray-500 mb-10">From arena tours to destination festivals — we handle tickets, travel, and accommodation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "International Concert Tours", desc: "When major artists announce Asia and Middle East tours, we secure tickets. Coldplay, Taylor Swift, Ed Sheeran, BTS — we&apos;ve sourced tickets for them all. Flights + concert = unforgettable trip." },
              { title: "Music Festivals", desc: "Tomorrowland, Glastonbury, Coachella, Summer Sonic, Sunburn Goa. Festival passes, camping packages, VIP upgrades, and full travel logistics from Sri Lanka." },
              { title: "Award Shows & Galas", desc: "Grammys, Oscars viewing parties, Film Festival passes, fashion week access. Premium experiences for the culturally curious." },
              { title: "Local Sri Lanka Events", desc: "Galle Literary Festival, Kandy Perahera, Colombo Jazz Festival, beach parties and full moon celebrations. We know every event on the island calendar." },
            ].map(e => (
              <div key={e.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{e.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{e.desc}</p>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in ${e.title}. Please share what's available.`)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-red-600 hover:text-red-700 inline-flex items-center gap-1">Enquire <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Travel */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Group & Private Events</h2>
          <p className="text-gray-500 mb-10">Weddings, corporate retreats, milestone birthdays, school tours — we move groups of any size.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Destination Weddings", desc: "Beach ceremonies, jungle receptions, heritage hotel celebrations. We handle guest flights, accommodation, transfers, and the logistics so you can focus on the big day." },
              { title: "Corporate Retreats", desc: "Team offsites in Sri Lanka. Conference venues, team-building activities, group dining, airport pickups for 50+ people. One contact, everything coordinated." },
              { title: "School & University Trips", desc: "Educational tours across Sri Lanka. Safe, structured, curriculum-aligned itineraries. We&apos;ve moved school groups from 10 to 200 students." },
            ].map(e => (
              <div key={e.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{e.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{e.desc}</p>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm planning a ${e.title.toLowerCase()}. Please share how you can help.`)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-red-600 hover:text-red-700 inline-flex items-center gap-1">Enquire <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white text-center px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Tell us the event. We&apos;ll find your tickets.</h2>
        <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-xl mt-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          Message us on WhatsApp
        </a>
      </section>
    </div>
  );
}
