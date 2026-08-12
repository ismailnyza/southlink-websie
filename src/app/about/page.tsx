export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">About</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Southlink Travels.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Galle&apos;s first travel agency. Fifteen years later, still the one people trust with their most important trips.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Southlink Travels opened in 2009 at Selaka Complex on Gamini Mawatha — the first dedicated travel agency in Southern Sri Lanka. Before online booking sites swallowed the industry. Before &quot;travel agent&quot; became a website with a chatbot. Before you had to gamble on whether the fare you saw was the fare you&apos;d get.
          </p>
          <p>
            We started with a simple belief: behind every ticket is a person. Someone visiting family after two years apart. Someone closing a business deal. A couple starting their honeymoon. A parent rushing home for an emergency. That person deserves more than a confirmation email and a 1-800 number that rings to nowhere. They deserve a real team. In their time zone. Who answers the phone.
          </p>
          <p>
            Today we handle flights to 30+ international destinations, curate Sri Lanka tours designed by people who live here, source concert and sports tickets worldwide, guide visa applications for eight countries, manage corporate travel accounts with credit terms and dedicated agents, and run airport transfers across the island.
          </p>
          <p>
            We&apos;re IATA-accredited. Licensed in Sri Lanka. Multilingual — we work in English, German, French, Chinese, and Arabic. And we still answer the phone at 3 AM when your flight gets cancelled.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-10 border-t border-gray-100">
            {[
              { value: "15+", label: "Years in Galle" },
              { value: "IATA", label: "Accredited" },
              { value: "5", label: "Languages spoken" },
              { value: "24/7", label: "Emergency support" },
            ].map(s => (
              <div key={s.label} className="text-center p-4">
                <p className="text-2xl font-serif font-bold text-red-600">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Your agent. Always the same person.",
                desc: "Not a different voice every time you call. You get a named agent who learns your preferences — aisle seat, evening flights, specific airlines. They remember so you don&apos;t have to repeat yourself.",
              },
              {
                title: "We live where we work.",
                desc: "Our office is in Galle Fort — one of the most beautiful places on earth. We know Sri Lanka because we&apos;re from here. The best beaches, the smartest routes, the hotels worth your money. Local knowledge you can&apos;t Google.",
              },
              {
                title: "We fix problems before you feel them.",
                desc: "Flight cancelled at midnight? We rebook you before the airline finishes sending their apology email. Visa application stuck? We know who to call. Things go wrong in travel — having a real team behind you is the difference between a disaster and a story.",
              },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Credentials</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>Licensed travel agency — registered with the Sri Lanka Tourism Development Authority</p>
            <p>IATA accredited — meets international standards for ticket issuance and financial reliability</p>
            <p>Member of the Travel Agents Association of Sri Lanka</p>
            <p>First travel agency established in Southern Sri Lanka (Galle, 2009)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-8 text-center bg-red-600 text-white">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Meet your agent.</h2>
        <p className="text-red-100 mb-6">One message and you&apos;ll have a real person handling your travel.</p>
        <a
          href="https://wa.me/+94776984777"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:bg-red-50 transition-all shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Message us on WhatsApp
        </a>
      </section>
    </div>
  );
}
