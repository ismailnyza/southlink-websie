export default function TrustPage() {
  const promises = [
    {
      title: "We answer the phone.",
      desc: "24 hours a day, 7 days a week. Not a chatbot. Not an automated menu. Not a call center in another country. A real person in Galle who knows your name and your booking. Even at 3 AM when your flight gets cancelled.",
    },
    {
      title: "Your agent. Not a system.",
      desc: "You get one named agent who handles your travel every time. They learn your preferences — aisle or window, morning or evening flights, preferred airlines. You never have to explain yourself twice.",
    },
    {
      title: "We fix problems before you feel them.",
      desc: "Flight cancelled? We rebook you while the airline is still typing their apology email. Visa stuck? We know who to call. Weather disrupts your tour? We've already rearranged the itinerary. This is what 15 years of experience buys you.",
    },
    {
      title: "Fair, transparent pricing.",
      desc: "The fare we quote is the fare you pay. No hidden fees, no surprise taxes at checkout, no bait-and-switch on seat availability. We make our living through honest, reliable service — not through tricks.",
    },
    {
      title: "We stand behind our work.",
      desc: "Not happy with something? Tell us. We make it right. No defensive explanations, no fine print, no 'it's the airline's policy.' We take responsibility for your experience, start to finish.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Trust</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Our guarantee.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            If something goes wrong, we fix it. Not a chatbot. Not a call center. Us. That&apos;s been our promise since 2009 and we&apos;ve never broken it.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {promises.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div className="border-t border-gray-100 pt-10 text-center">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {[
                { label: "IATA Accredited", desc: "International Air Transport Association — recognized worldwide for financial and professional standards." },
                { label: "Licensed in Sri Lanka", desc: "Registered with the Sri Lanka Tourism Development Authority under the Travel Agents Act." },
                { label: "15+ Years Operating", desc: "Established 2009 in Galle. The first travel agency in Southern Sri Lanka." },
                { label: "TAASL Member", desc: "Travel Agents Association of Sri Lanka — committed to industry standards and ethics." },
              ].map(c => (
                <div key={c.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-1">{c.label}</p>
                  <p className="text-xs text-gray-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/trust/reviews"
              className="inline-flex items-center gap-1 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-red-200 hover:text-red-600 transition-all"
            >
              Read our reviews{' '}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
