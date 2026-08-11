export default function CorporatePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Corporate</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Corporate travel,<br/><span className="text-red-400">done right.</span></h1><p className="text-gray-400 mt-4 text-base sm:text-lg">Credit terms. 24/7 re-routing. A dedicated team member who knows your company by name.</p></div></section>
      <section className="py-16 px-5 sm:px-8"><div className="max-w-2xl mx-auto space-y-4">
        {[{t:"Essential",d:"Pay per trip. Business hours support. Standard fare finding."},{t:"Business",d:"Credit terms. Priority handling. 24/7 re-routing. Monthly reporting.",h:true},{t:"Enterprise",d:"Dedicated account manager. Custom billing. SLA-backed response times."}].map(tier=>(<div key={tier.t} className={`p-5 border rounded-xl ${tier.h?"border-red-200 bg-red-50":"border-gray-100"}`}><h3 className="font-bold text-gray-900 mb-1">{tier.t}{tier.h&&<span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-medium">Popular</span>}</h3><p className="text-sm text-gray-500">{tier.d}</p></div>))}
        <div className="text-center pt-6"><a href="https://wa.me/+94776984777" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>Message us about corporate</a></div>
      </div></section>
    </div>
  );
}
