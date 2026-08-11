import { SITE, GUARANTEE } from "@/lib/constants";

export default function TrustPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Trust</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">The Southlink Guarantee.</h1><p className="text-gray-400 mt-4 text-base sm:text-lg">If something goes wrong, we fix it. Not a chatbot. Not a call center. Us.</p></div></section>
      <section className="py-16 px-5 sm:px-8"><div className="max-w-2xl mx-auto space-y-4">
        {GUARANTEE.map((g,i)=><div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-red-50/50 transition-colors"><span className="text-red-600 mt-0.5"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span><span className="text-gray-700">{g}</span></div>)}
        <div className="mt-10 pt-8 border-t border-gray-100"><h2 className="text-xl font-serif font-bold mb-4">Credentials</h2><div className="space-y-2 text-sm text-gray-600"><p>IATA Certified — #{SITE.iata}</p><p>SLTDA Registered</p><p>{SITE.yearsInBusiness}+ years — First agency in Southern Sri Lanka</p><p>{SITE.googleRating} ★ — {SITE.googleReviews} Google reviews</p><p>{SITE.ticketsBooked.toLocaleString()}+ tickets booked</p><p>{SITE.tripsRescued} trips rescued</p></div></div>
      </div></section>
    </div>
  );
}
