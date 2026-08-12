export default function EducationalTravelPage() {
  const programs = [
    {
      title: "School Trips",
      desc: "Curriculum-aligned itineraries across Sri Lanka. History students walk through ancient Anuradhapura. Geography students study tea plantation ecosystems. Biology students explore Sinharaja rainforest — a UNESCO biodiversity hotspot. We work with teachers to design trips that reinforce what students learn in class.",
      suitable: "Ages 10–18 · Groups of 15–60 students",
    },
    {
      title: "University Programs",
      desc: "Field research logistics, study tours, exchange program coordination, and academic conference travel. We arrange accommodation near university campuses, long-stay rates for researchers, and transport for field sites. Archaeology, marine biology, development studies — we support a wide range of disciplines.",
      suitable: "Undergraduate & postgraduate · Groups of 5–50",
    },
    {
      title: "International School Expeditions",
      desc: "For international schools bringing students to Sri Lanka. CAS trips, service learning projects, cultural immersion programs. We arrange safe, vetted accommodation, licensed vehicles with seatbelts, experienced local guides, and 24/7 emergency contact throughout the trip.",
      suitable: "International schools · Groups of 10–40",
    },
    {
      title: "Teacher Familiarization Tours",
      desc: "Before bringing students, teachers need to see it themselves. We arrange familiarization tours at educator rates — visit the sites, meet the guides, inspect the accommodation. Make informed decisions about your school trip.",
      suitable: "2–5 teachers per trip · 5–7 day itineraries",
    },
  ];

  const safety = [
    "All accommodation is personally inspected before booking",
    "Licensed vehicles with seatbelts and air conditioning",
    "Experienced guides with working-with-children clearance",
    "24/7 emergency contact — we answer day or night",
    "Detailed risk assessments provided for every activity",
    "First aid trained staff accompany all school groups",
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Corporate</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Educational travel.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            School trips, university field research, study tours — safe, structured, and genuinely educational. We work with teachers and faculty to get it right.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5 mb-12">
            {programs.map(p => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-xl">{p.title}</h3>
                  <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium flex-shrink-0">
                    {p.suitable}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Safety section */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className="font-serif font-bold text-gray-900 text-xl mb-4">
              Safety is the foundation
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              We&apos;ve been running educational trips for over a decade. Every aspect is built around safety — not as an afterthought, but as the starting point.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {safety.map(s => (
                <div key={s} className="flex items-start gap-2.5">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-4">
              Planning a school trip or university program? Let&apos;s discuss your requirements.
            </p>
            <a
              href="https://wa.me/+94776984777?text=Hi!%20We're%20planning%20an%20educational%20trip%20to%20Sri%20Lanka%20and%20need%20travel%20logistics%20support."
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
