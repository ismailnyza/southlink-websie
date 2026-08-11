"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const ROUTES = [
  { route:"Colombo → Dubai",from:45000,to:85000,airline:"Emirates, SriLankan, FlyDubai",duration:"4h 30m",stops:"Direct" },
  { route:"Colombo → Abu Dhabi",from:42000,to:80000,airline:"Etihad, SriLankan",duration:"4h 30m",stops:"Direct" },
  { route:"Colombo → Doha",from:55000,to:95000,airline:"Qatar Airways, SriLankan",duration:"5h",stops:"Direct" },
  { route:"Colombo → London",from:120000,to:200000,airline:"SriLankan, Emirates, Qatar Airways",duration:"11-14h",stops:"1 stop" },
  { route:"Colombo → Manchester",from:115000,to:195000,airline:"Emirates, Qatar Airways",duration:"12-15h",stops:"1 stop" },
  { route:"Colombo → Paris",from:130000,to:210000,airline:"SriLankan, Emirates, Qatar Airways",duration:"12-15h",stops:"1 stop" },
  { route:"Colombo → Frankfurt",from:125000,to:205000,airline:"SriLankan, Emirates, Qatar Airways",duration:"11-14h",stops:"1 stop" },
  { route:"Colombo → Rome",from:120000,to:200000,airline:"Emirates, Qatar Airways, SriLankan",duration:"12-15h",stops:"1 stop" },
  { route:"Colombo → Singapore",from:35000,to:65000,airline:"Singapore Airlines, SriLankan",duration:"4h",stops:"Direct" },
  { route:"Colombo → Kuala Lumpur",from:35000,to:60000,airline:"AirAsia, Malaysia Airlines, SriLankan",duration:"3h 30m",stops:"Direct" },
  { route:"Colombo → Bangkok",from:40000,to:75000,airline:"Thai Airways, SriLankan",duration:"3h 30m",stops:"Direct" },
  { route:"Colombo → Jakarta",from:50000,to:90000,airline:"SriLankan, AirAsia, Singapore Airlines",duration:"5-8h",stops:"1 stop" },
  { route:"Colombo → Manila",from:55000,to:95000,airline:"Singapore Airlines, SriLankan",duration:"7-10h",stops:"1 stop" },
  { route:"Colombo → Tokyo",from:90000,to:150000,airline:"SriLankan, Singapore Airlines, JAL",duration:"9-12h",stops:"1 stop" },
  { route:"Colombo → Seoul",from:85000,to:140000,airline:"SriLankan, Korean Air, Singapore Airlines",duration:"9-12h",stops:"1 stop" },
  { route:"Colombo → Shanghai",from:80000,to:135000,airline:"SriLankan, China Eastern, Singapore Airlines",duration:"8-12h",stops:"1 stop" },
  { route:"Colombo → Mumbai",from:25000,to:45000,airline:"SriLankan, IndiGo, SpiceJet",duration:"2h 30m",stops:"Direct" },
  { route:"Colombo → Delhi",from:28000,to:50000,airline:"SriLankan, IndiGo, Air India",duration:"3h 30m",stops:"Direct" },
  { route:"Colombo → Chennai",from:25000,to:45000,airline:"SriLankan, IndiGo, SpiceJet",duration:"1h 30m",stops:"Direct" },
  { route:"Colombo → Bangalore",from:25000,to:45000,airline:"SriLankan, IndiGo",duration:"1h 30m",stops:"Direct" },
  { route:"Colombo → Hyderabad",from:28000,to:50000,airline:"SriLankan, IndiGo",duration:"2h 30m",stops:"Direct" },
  { route:"Colombo → Male",from:30000,to:55000,airline:"SriLankan, Emirates, FlyDubai",duration:"1h 30m",stops:"Direct" },
  { route:"Colombo → Sydney",from:110000,to:180000,airline:"SriLankan, Emirates, Singapore Airlines",duration:"12-16h",stops:"1 stop" },
  { route:"Colombo → Melbourne",from:115000,to:190000,airline:"SriLankan, Singapore Airlines, Emirates",duration:"12-16h",stops:"1 stop" },
  { route:"Colombo → Perth",from:95000,to:155000,airline:"SriLankan, Singapore Airlines, AirAsia",duration:"9-13h",stops:"1 stop" },
  { route:"Colombo → Auckland",from:140000,to:230000,airline:"Singapore Airlines, Emirates, SriLankan",duration:"15-20h",stops:"1-2 stops" },
  { route:"Colombo → Toronto",from:150000,to:250000,airline:"Emirates, Qatar Airways, SriLankan",duration:"18-24h",stops:"1-2 stops" },
  { route:"Colombo → New York",from:160000,to:260000,airline:"Emirates, Qatar Airways, Etihad",duration:"18-24h",stops:"1-2 stops" },
  { route:"Colombo → Nairobi",from:65000,to:110000,airline:"SriLankan, Kenya Airways, Emirates",duration:"7-10h",stops:"1 stop" },
  { route:"Colombo → Johannesburg",from:75000,to:130000,airline:"Emirates, Qatar Airways, SriLankan",duration:"10-14h",stops:"1 stop" },
];

export default function FlightsPage() {
  const [search,setSearch]=useState("");
  const [date,setDate]=useState("");
  const [cls,setCls]=useState("Economy");
  const [budget,setBudget]=useState("all");

  const filtered = useMemo(() => {
    let r = ROUTES;
    if (search.trim()) { const q=search.toLowerCase(); r=r.filter(f=>f.route.toLowerCase().includes(q)||f.airline.toLowerCase().includes(q)||f.stops.toLowerCase().includes(q)); }
    if (budget==="under50k") r=r.filter(f=>f.from<50000);
    if (budget==="50kto100k") r=r.filter(f=>f.from>=50000&&f.from<100000);
    if (budget==="over100k") r=r.filter(f=>f.from>=100000);
    return r;
  },[search,budget]);

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Flights</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Where do you<br/><span className="text-red-400">want to go?</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">30+ routes with cached fare ranges. Filter by budget, search by destination. Message us for exact pricing — we respond within minutes.</p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="py-10 px-5 sm:px-8 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search city, airline, or 'direct'..." className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm"/>
              </div>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm"/>
              <div className="flex gap-1">
                {["Economy","Business","First"].map(c=>(<button key={c} onClick={()=>setCls(c)} className={`px-4 py-3.5 rounded-xl text-xs font-semibold ${cls===c?"bg-red-600 text-white":"bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"}`}>{c}</button>))}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[{v:"all",l:"All Prices"},{v:"under50k",l:"Under LKR 50K"},{v:"50kto100k",l:"LKR 50K – 100K"},{v:"over100k",l:"Over LKR 100K"}].map(b=>(
                <button key={b.v} onClick={()=>setBudget(b.v)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${budget===b.v?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{b.l}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{filtered.length} routes found</p>
            <p className="text-xs text-gray-400">Cached fares · Tap for live pricing</p>
          </div>
          <div className="space-y-3">
            {filtered.map((f,i)=>(
              <motion.div key={f.route} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*0.03}}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 p-4 sm:p-5 group cursor-pointer"
                onClick={()=>window.open(`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! Flight quote for:\nRoute: ${f.route}\nDate: ${date||"flexible"}\nClass: ${cls}\n\nPlease share the best options and exact fares.`)}`, '_blank')}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-lg">✈️</div>
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{f.route}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                        <span>{f.airline}</span>
                        <span className="text-gray-300">·</span>
                        <span>{f.duration}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-green-600 font-medium">{f.stops}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-14 sm:ml-0">
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">LKR {f.from.toLocaleString()} – {f.to.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">round trip · estimated</p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex-shrink-0">
                      Get price <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">All prices are recent estimates. Actual fares depend on dates, availability, and cabin class. Click any route to get a live quote.</p>
        </div>
      </section>
    </div>
  );
}
