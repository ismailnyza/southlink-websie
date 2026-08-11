export default function CorporatePage() {
  const tiers = [
    { t:"Essential",p:"Pay as you go",d:"Per-trip billing. Business hours support. Standard fare finding across all airlines. Ideal for small teams with occasional travel.",msg:"Hi! I'm interested in the Essential corporate travel plan. Please share details about pay-as-you-go pricing." },
    { t:"Business",p:"Credit terms available",d:"Credit terms. Priority handling. 24/7 re-routing. Monthly travel reports. A dedicated contact who knows your team's preferences.",h:true,msg:"Hi! I'd like to learn about the Business corporate travel plan — credit terms, priority handling, and 24/7 support." },
    { t:"Enterprise",p:"Custom pricing",d:"Named account manager. Custom billing cycles. SLA-backed response times. Quarterly strategy reviews. For organizations with complex travel needs.",msg:"Hi! We're interested in the Enterprise corporate travel plan. Would like to discuss custom pricing and dedicated account management." },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Corporate</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Corporate travel,<br/><span className="text-red-400">done right.</span></h1><p className="text-gray-400 mt-4 text-base sm:text-lg">Credit terms. 24/7 re-routing. A dedicated team member who knows your company. SMEs, NGOs, exporters, executive teams — we work with everyone.</p></div></section>

      <section className="py-16 px-5 sm:px-8 lg:px-10"><div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {tiers.map(tier=>(
            <a key={tier.t} href={`https://wa.me/+94776984777?text=${encodeURIComponent(tier.msg)}`} target="_blank" rel="noopener noreferrer"
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer block ${tier.h?"border-red-200 bg-red-50 ring-1 ring-red-200":"bg-white border-gray-100 shadow-sm hover:border-red-100"}`}>
              {tier.h&&<div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">Most Popular</span></div>}
              <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600">{tier.t}</h3>
              <p className="text-xs text-red-600 font-semibold mb-3">{tier.p}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{tier.d}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-red-600">Enquire <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[{t:"What we handle",items:["Employee flights — domestic & international","Hotel bookings at corporate rates","Airport transfers for visiting clients","Group bookings for conferences & events","Visa processing for business travel","Emergency re-routing — 24/7"]},{t:"Why companies choose us",items:["One point of contact — no call center","We remember preferences — seat, meal, airline","Monthly consolidated billing","We fix problems before you know about them","Credit terms that work for your cash flow","Local office in Galle — meet us in person"]}].map(col=>(<div key={col.t} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"><h3 className="font-bold text-gray-900 mb-4">{col.t}</h3><ul className="space-y-2.5">{col.items.map((item,i)=>(<li key={i} className="flex items-start gap-2.5 text-sm text-gray-600"><span className="text-red-600 mt-0.5 flex-shrink-0"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>{item}</li>))}</ul></div>))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/corporate/events" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-red-200 hover:text-red-600 hover:shadow-sm transition-all">Corporate Events →</a>
          <a href="/corporate/educational" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-red-200 hover:text-red-600 hover:shadow-sm transition-all">Educational Travel →</a>
        </div>
        <div className="text-center mt-8">
          <a href="https://wa.me/+94776984777?text=Hi!%20I'd%20like%20to%20discuss%20setting%20up%20a%20corporate%20travel%20account%20with%20Southlink." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            Set up a corporate account
          </a>
        </div>
      </div></section>
    </div>
  );
}
