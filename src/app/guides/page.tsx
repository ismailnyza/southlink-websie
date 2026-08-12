export default function GuidesPage() {
  const guides = [
    {
      title: "Galle Fort — A Local's Guide",
      desc: "UNESCO World Heritage and our hometown. Best sunset spots on the ramparts, hidden cafes in Dutch-colonial courtyards, the lighthouse at golden hour, and where to find the best hoppers. We've lived here 15 years — we know every lane.",
      theme: "Heritage",
    },
    {
      title: "Colombo — Where to Stay & Eat",
      desc: "Sri Lanka's capital is a mix of colonial charm, modern high-rises, and the best food on the island. Neighborhood guides for Cinnamon Gardens, Pettah markets, Galle Face at sunset, and the restaurants worth your rupees.",
      theme: "City",
    },
    {
      title: "Kandy — The Cultural Capital",
      desc: "Temple of the Tooth, the lake at dawn, Kandyan dance performances, and the Royal Botanical Gardens. Kandy is the spiritual heart of Sri Lanka — we'll tell you what's worth your time and what to skip.",
      theme: "Culture",
    },
    {
      title: "Ella — Tea Country & Mountain Views",
      desc: "The train ride from Kandy to Ella is one of the world's most beautiful. Nine Arch Bridge, Ella Rock hike, tea factory tours, and the best guesthouses with valley views. We plan this route weekly.",
      theme: "Nature",
    },
    {
      title: "Sigiriya — Climbing the Lion Rock",
      desc: "Everything you need to know before climbing Sri Lanka's most famous rock fortress. Best time of day (6:30 AM), what to wear, the hornet situation, and why you should also visit nearby Pidurangala for the view back.",
      theme: "Heritage",
    },
    {
      title: "Yala National Park — Safari Guide",
      desc: "Leopards, elephants, sloth bears, and 200+ bird species. Best seasons (February–July), how to book a good jeep driver, what a half-day vs full-day safari costs, and why Block 1 is worth the extra effort.",
      theme: "Wildlife",
    },
    {
      title: "Mirissa & The South Coast",
      desc: "Whale watching season (November–April), the secret beaches between Mirissa and Tangalle, Hiriketiya's surf scene, and the seafood shacks worth driving an hour for. The south coast is our backyard.",
      theme: "Beach",
    },
    {
      title: "Nuwara Eliya — Little England",
      desc: "Colonial bungalows, perfectly manicured tea estates, afternoon tea at the Grand Hotel, and Horton Plains for the World's End viewpoint. Bring a jacket — it gets cold up here.",
      theme: "Hill Country",
    },
    {
      title: "Anuradhapura & Polonnaruwa",
      desc: "The ancient cities that ruled Sri Lanka for over a millennium. Massive stupas, the sacred Sri Maha Bodhi tree (oldest historically documented tree on earth), and the stunning Buddha statues of Gal Vihara. 2,500 years of history.",
      theme: "Heritage",
    },
    {
      title: "Trincomalee — East Coast Paradise",
      desc: "The best beaches most tourists never see. Koneswaram Temple on the cliff, Pigeon Island for snorkeling, whale watching (May–October season), and Nilaveli's endless white sand. Worth the journey east.",
      theme: "Beach",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Guides</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Travel guides.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Written by people who live here. No sponsored content, no generic lists — just what we tell our friends when they visit.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map(g => (
              <div
                key={g.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {g.title}
                  </h3>
                  <span className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                    {g.theme}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                <a
                  href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'd love to get the "${g.title}" travel guide.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Request this guide{' '}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            Each guide is available as a free PDF. Message us on WhatsApp and we&apos;ll send you the ones you want — no catch, no spam.
          </p>
        </div>
      </section>
    </div>
  );
}
