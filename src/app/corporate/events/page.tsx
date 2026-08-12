export default function CorporateEventsPage() {
  const services = [
    {
      title: "Conferences & Summits",
      desc: "Venue sourcing across Sri Lanka — beach resorts, hill country hotels, Colombo conference centers. Attendee flights from multiple origins, hotel room blocks, airport transfers for speakers and delegates, on-site coordination, AV and tech setup. We've handled events from 20 to 800 people.",
      includes: ["Venue search & negotiation", "Group flight bookings", "Hotel room blocks", "Airport transfers", "On-site coordinator"],
    },
    {
      title: "Incentive Trips",
      desc: "Reward your top performers with an unforgettable Sri Lanka experience. Custom itineraries that impress — private chef dinners, helicopter transfers, exclusive access to cultural sites, luxury safari camps, beach villas. We design trips that people talk about for years.",
      includes: ["Custom itinerary design", "Luxury accommodation", "Exclusive experiences", "Private transport", "24/7 support during trip"],
    },
    {
      title: "Team Offsites & Retreats",
      desc: "Beach strategy sessions, hill country team building, adventure retreats with rafting and hiking. We handle the logistics so your team can focus on the work — and each other. Suitable for teams of 8 to 80.",
      includes: ["Venue selection", "Activity planning", "All transport", "Meal coordination", "Emergency backup plans"],
    },
    {
      title: "Product Launches & Galas",
      desc: "Launching a product? Celebrating a milestone? We source venues, manage guest travel, coordinate with event planners, and ensure every VIP arrives relaxed and on time. From Colombo ballrooms to Galle Fort courtyards.",
      includes: ["VIP travel management", "Venue sourcing", "Guest logistics", "Multi-city coordination", "Post-event departures"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Corporate</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Corporate events.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Conferences, incentive trips, team offsites, product launches — group travel logistics handled end to end by a team that has done it before.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5">
            {services.map(s => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7"
              >
                <h3 className="font-bold text-gray-900 text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.includes.map(i => (
                    <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-4">Planning an event? Let's talk.</p>
            <a
              href="https://wa.me/+94776984777?text=Hi!%20We're%20planning%20a%20corporate%20event%20and%20need%20travel%20logistics%20support.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Message us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
