"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FLIGHT_PRICES, SITE } from "@/lib/constants";

export default function FlightsPage() {
  const [from, setFrom] = useState("Colombo (CMB)");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [cls, setCls] = useState("Economy");

  const filtered = useMemo(() => {
    if (!to) return FLIGHT_PRICES;
    return FLIGHT_PRICES.filter(f => f.route.toLowerCase().includes(to.toLowerCase()));
  }, [to]);

  const getToday = () => new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Flights</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Where do you
            <br />
            <span className="text-red-500">want to go?</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Browse cached fares below. Fill in your details and we&apos;ll get you exact pricing on WhatsApp — typically within minutes.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 px-5 sm:px-8 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">From</label>
                <input type="text" value={from} onChange={e => setFrom(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">To</label>
                <input type="text" value={to} onChange={e => setTo(e.target.value)} placeholder="Dubai, London..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} min={getToday()}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Class</label>
                <div className="flex gap-1">
                  {["Economy","Business","First"].map(c => (
                    <button key={c} onClick={() => setCls(c)}
                      className={`flex-1 py-3 rounded-xl text-xs font-semibold transition-all ${cls === c ? "bg-red-600 text-white shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"}`}>{c}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">
            {filtered.length} routes · Cached fares · Message us for live pricing
          </p>
          <div className="space-y-3">
            {filtered.map((f, i) => (
              <motion.div
                key={f.route}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 p-5 sm:p-6"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{f.route}</p>
                      <p className="text-xs text-gray-400">{f.airline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">LKR {f.from.toLocaleString()} – {f.to.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">round trip · estimated</p>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi! Flight quote please:\nRoute: ${f.route}\nDate: ${date || "flexible"}\nPassengers: ${adults}\nClass: ${cls}\n\nPlease let me know the best options and exact fares.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md flex-shrink-0"
                    >
                      Get exact price
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            All prices are cached estimates from recent bookings. Actual fares depend on travel dates, availability, and cabin class. Message us for a live quote.
          </p>
        </div>
      </section>
    </div>
  );
}
