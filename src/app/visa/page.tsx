export default function VisaPage() {
  const visas = [
    { country:"United Arab Emirates",type:"Tourist & Transit",processing:"3-5 working days",requirement:"Passport (6+ months validity), photo, confirmed flights & hotel",fee:"LKR 8,000 – 15,000",desc:"Dubai and Abu Dhabi visas. Fast processing. We check your documents and submit the application. Transit visas also available for short layovers." },
    { country:"Schengen Area (Europe)",type:"Tourist (Short Stay)",processing:"15-20 working days",requirement:"Passport, photos, bank statements (6 months), employment letter, travel insurance, flight & hotel bookings",fee:"LKR 15,000 – 25,000",desc:"Covers France, Germany, Italy, Netherlands, Spain, and 22 other European countries. We guide you through the full application — appointment booking, document checklist, cover letter." },
    { country:"United Kingdom",type:"Standard Visitor",processing:"15 working days",requirement:"Passport, photos, bank statements, employment letter, accommodation proof, travel itinerary",fee:"LKR 25,000 – 40,000",desc:"Tourism, business, or family visits. We review every document before submission to maximize your chances of approval." },
    { country:"India",type:"Tourist, Business & Medical",processing:"3-7 working days",requirement:"Passport (6+ months), photo, travel itinerary. E-visa available for most cases.",fee:"LKR 5,000 – 12,000",desc:"Multiple visa types available. E-visa is the fastest option for tourism — we handle the online application end to end." },
    { country:"Thailand",type:"Tourist & Visa on Arrival",processing:"3-5 working days (or on arrival)",requirement:"Passport, photo, confirmed flights, hotel booking, proof of funds",fee:"LKR 6,000 – 12,000",desc:"Tourist visas processed before travel, or visa-on-arrival guidance. We check your documents before you fly so there are no surprises at the airport." },
    { country:"China",type:"Tourist & Business",processing:"5-10 working days",requirement:"Passport, photo, flights, hotel, bank statements, employment letter, detailed itinerary",fee:"LKR 12,000 – 20,000",desc:"Tourist and business visas with full document support. China has specific photo and form requirements — we make sure everything is correct." },
    { country:"Australia",type:"Visitor (Subclass 600)",processing:"15-25 working days",requirement:"Passport, bank statements, employment letter, travel itinerary, invitation letter (if applicable)",fee:"LKR 30,000 – 50,000",desc:"Tourist and family visit visas. We help prepare a strong application with all required supporting documents." },
    { country:"Japan",type:"Tourist",processing:"5-7 working days",requirement:"Passport, photo, bank statements, employment letter, detailed day-by-day itinerary, flight & hotel bookings",fee:"LKR 8,000 – 15,000",desc:"Japan requires a detailed itinerary. We format it exactly as the embassy expects and review all documents before submission." },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Visa</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Visa help,<br/><span className="text-red-400">made simple.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Document checking, application guidance, and processing support for 8+ countries. We handle the confusing parts.</p>
        </div>
      </section>
      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto space-y-5">
          {visas.map(v=>(
            <div key={v.country} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{v.country}</h3>
                    <p className="text-sm text-red-600 font-medium">{v.type} · {v.processing}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-full flex-shrink-0">{v.fee}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{v.desc}</p>
                <p className="text-xs text-gray-400"><span className="font-semibold text-gray-500">Requirements:</span> {v.requirement}</p>
                <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I need help with a ${v.country} visa. Can you guide me through the requirements and process?`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-red-600 hover:text-red-700">
                  Get visa help <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          ))}
          <div className="text-center pt-6">
            <p className="text-gray-500 text-sm">Don&apos;t see your country? Message us — we can help with most destinations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
