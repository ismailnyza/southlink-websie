export default function FAQPage() {
  const groups = [
    {
      title: "Flights",
      items: [
        {
          q: "How do I book a flight?",
          a: "Browse our flights page for cached fare ranges across 30+ routes, then message us on WhatsApp with your preferred dates. We respond with exact pricing within minutes during business hours. Once you confirm, we issue your ticket and send the confirmation.",
        },
        {
          q: "How much do flights cost from Colombo?",
          a: "Fares vary by destination, season, and how far ahead you book. Check our flights page for current fare ranges — they're updated regularly. For exact pricing on your dates, message us on WhatsApp.",
        },
        {
          q: "What happens if my flight gets cancelled?",
          a: "Call or WhatsApp us immediately. We rebook you on the next available flight — often before the airline finishes sending their cancellation email. This is one of the main reasons people book through us instead of online.",
        },
        {
          q: "Can I change my travel dates after booking?",
          a: "Yes. Message your agent. We handle the change — reissuing tickets, managing any fare differences, and making sure everything connects. No call center menus. No waiting on hold.",
        },
        {
          q: "Do you book one-way tickets?",
          a: "Yes. One-way, round-trip, multi-city — whatever your trip needs. We also handle open-jaw itineraries where you fly into one city and out of another.",
        },
      ],
    },
    {
      title: "Tours & Packages",
      items: [
        {
          q: "Can you customize a tour or package?",
          a: "Every package on our site is fully customizable. Change the number of days, swap hotels, add activities, adjust the pace. We also build completely bespoke itineraries from scratch — just tell us what you want and we make it work.",
        },
        {
          q: "What's included in your tour packages?",
          a: "Most packages include accommodation, transport within Sri Lanka, guided activities, and some meals. Each package page lists exact inclusions. International flights are usually separate so you have flexibility on dates and routing.",
        },
        {
          q: "Do you offer group discounts?",
          a: "Yes — for families, friend groups, corporate teams, and school trips. Group sizes of 6+ typically qualify for reduced per-person rates. Message us with your group size and we'll put together a quote.",
        },
      ],
    },
    {
      title: "Visas",
      items: [
        {
          q: "Which countries can you help with visas for?",
          a: "We provide document checking and application guidance for UAE, Schengen (Europe), UK, India, Thailand, China, Australia, and Japan. Check our Visa page for processing times, requirements, and estimated fees for each.",
        },
        {
          q: "How long does visa processing take?",
          a: "It varies by country: UAE takes 3–5 working days, Schengen 15–20 working days, UK about 15 working days, India 3–7 working days. We recommend applying at least 3–4 weeks before travel for most destinations.",
        },
        {
          q: "Do you guarantee visa approval?",
          a: "No agency can guarantee visa approval — the decision is always made by the embassy or immigration authority. What we do guarantee is that your application will be complete, correctly formatted, and submitted with all required supporting documents. This significantly improves your chances.",
        },
      ],
    },
    {
      title: "Payments & Pricing",
      items: [
        {
          q: "How do I pay?",
          a: "Bank transfer to our Sri Lankan account (LKR), cash at our Galle office, or international wire transfer. Tickets are issued after payment confirmation. For corporate clients, we offer credit terms — speak to us about setting up an account.",
        },
        {
          q: "Are your prices final or are there hidden costs?",
          a: "The price we quote is the price you pay. No hidden fees, no surprise charges at checkout, no bait-and-switch. We make our money through transparent service — not through tricking you.",
        },
        {
          q: "How far in advance should I book?",
          a: "For the best fares, book international flights 4–8 weeks ahead. Peak seasons (December, April, August) book 8–12 weeks ahead. Tours and packages: 2–4 weeks is usually fine, but popular hotels book up months ahead for peak season.",
        },
      ],
    },
    {
      title: "General",
      items: [
        {
          q: "Where are you located?",
          a: "Selaka Complex, 34 Gamini Mawatha, Galle 80000, Sri Lanka. We're in central Galle, near the fort. You're welcome to visit during office hours — Mon–Fri 8:30 AM – 5:30 PM, Sat 9:00 AM – 1:00 PM.",
        },
        {
          q: "What languages do you speak?",
          a: "English, German, French, Chinese (中文), and Arabic (العربية). Our team is multilingual and we work with clients from all over the world.",
        },
        {
          q: "I need help right now — it's an emergency.",
          a: "Call us at +94 91 223 4517. We answer 24/7 for emergencies. Even if you didn't book through us. Even if it's 3 AM. We'll help.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Common questions.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Everything you need to know about booking with us. If your question isn&apos;t here, message us — we respond within minutes.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {groups.map(group => (
            <div key={group.title} className="mb-10">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">{group.title}</h2>
              <div className="space-y-1">
                {group.items.map((faq, i) => (
                  <details key={i} className="group border-b border-gray-100 pb-3">
                    <summary className="cursor-pointer font-semibold text-gray-900 group-hover:text-red-600 transition-colors list-none flex items-center justify-between py-3">
                      {faq.q}
                      <svg
                        className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-gray-600 text-sm leading-relaxed pb-3 pr-8">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-4">Didn&apos;t find your answer?</p>
            <a
              href="https://wa.me/+94776984777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
