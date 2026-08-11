"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const ROUTES = [
  { route: "Colombo → Dubai", from: 45000, to: 85000, airline: "Emirates, SriLankan, FlyDubai" },
  { route: "Colombo → London", from: 120000, to: 200000, airline: "SriLankan, Emirates, Qatar Airways" },
  { route: "Colombo → Singapore", from: 35000, to: 65000, airline: "Singapore Airlines, SriLankan" },
  { route: "Colombo → Chennai", from: 25000, to: 45000, airline: "SriLankan, IndiGo, SpiceJet" },
  { route: "Colombo → Doha", from: 55000, to: 95000, airline: "Qatar Airways, SriLankan" },
  { route: "Colombo → Male", from: 30000, to: 55000, airline: "SriLankan, Emirates, FlyDubai" },
  { route: "Colombo → Bangkok", from: 40000, to: 75000, airline: "Thai Airways, SriLankan" },
  { route: "Colombo → Kuala Lumpur", from: 35000, to: 60000, airline: "AirAsia, Malaysia Airlines" },
  { route: "Colombo → Tokyo", from: 90000, to: 150000, airline: "SriLankan, Singapore Airlines, JAL" },
  { route: "Colombo → Sydney", from: 110000, to: 180000, airline: "SriLankan, Emirates, Singapore Airlines" },
  { route: "Colombo → Paris", from: 130000, to: 210000, airline: "SriLankan, Emirates, Qatar Airways" },
  { route: "Colombo → Melbourne", from: 115000, to: 190000, airline: "SriLankan, Singapore Airlines, Emirates" },
];

export default function FlightsPage() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [cls, setCls] = useState("Economy");
  const filtered = useMemo(() => {
    if (!search.trim()) return ROUTES;
    const q = search.toLowerCase();
    return ROUTES.filter(r => r.route.toLowerCase().includes(q) || r.airline.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Flights</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Where do you<br /><span className="text-red-400">want to go?</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Browse cached fares. Fill in your details and message us — we&apos;ll get exact pricing within minutes.</p>
        </div>
      </section>
      <section className="py-10 px-5 sm:px-8 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search destination or airline..." className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"/>
              </div>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"/>
              <div className="flex gap-1">
                {["Economy","Business","First"].map(c=>(<button key={c} onClick={()=>setCls(c)} className={`px-4 py-3.5 rounded-xl text-xs font-semibold transition-all ${cls===c?"bg-red-600 text-white shadow-sm":"bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"}`}>{c}</button>))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">{filtered.length} routes · Cached fares · Message us for live pricing</p>
          <div className="space-y-3">
            {filtered.map((f,i)=>(
              <motion.div key={f.route} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 p-5 sm:p-6" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-lg">✈️</div>
                    <div><p className="font-bold text-gray-900">{f.route}</p><p className="text-xs text-gray-400">{f.airline}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right"><p className="text-lg font-bold text-gray-900">LKR {f.from.toLocaleString()} – {f.to.toLocaleString()}</p><p className="text-xs text-gray-400">round trip · estimated</p></div>
                    <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! Flight quote: ${f.route}, Date: ${date||"flexible"}, Class: ${cls}. Best options and fares please.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md flex-shrink-0">Get exact price <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">All prices are cached estimates from recent bookings. Actual fares depend on travel dates and availability.</p>
        </div>
      </section>
    </div>
  );
}
