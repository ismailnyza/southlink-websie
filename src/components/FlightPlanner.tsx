"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Calendar, Users, ArrowRightLeft, Search } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const POPULAR_FROM = ["Colombo (CMB)", "Galle"];
const POPULAR_TO = [
  "Dubai (DXB)", "London (LHR)", "Singapore (SIN)", "Kuala Lumpur (KUL)",
  "Chennai (MAA)", "Doha (DOH)", "Male (MLE)", "Bangkok (BKK)", "Tokyo (NRT)", "Sydney (SYD)",
];
const CABIN_CLASSES = ["Economy", "Business", "First"];

export default function FlightPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState<"oneway" | "return">("return");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const isValid = from && to && departDate;
  const getTodayString = () => new Date().toISOString().split("T")[0];

  const buildPrefill = (): string => {
    const parts = [`From: ${from}`, `To: ${to}`, `Trip: ${tripType === "return" ? "Return" : "One-way"}`, `Depart: ${departDate}`];
    if (tripType === "return" && returnDate) parts.push(`Return: ${returnDate}`);
    parts.push(`Passengers: ${adults} adult(s)${children > 0 ? ` + ${children} child(ren)` : ""}`, `Class: ${cabinClass}`);
    return parts.join("\n");
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-elevated border border-gray-100 p-6 sm:p-8">
      <div className="space-y-4">
        {/* Trip Type */}
        <div className="flex gap-1 p-1 bg-gray-100 rounded-full">
          {(["return", "oneway"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`relative flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                tripType === type ? "text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tripType === type && (
                <motion.div className="absolute inset-0 bg-red-600 rounded-full" layoutId="tripType" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
              )}
              <span className="relative z-10">{type === "return" ? "Return" : "One-way"}</span>
            </button>
          ))}
        </div>

        {/* From */}
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">From</label>
          <div className="relative">
            <Plane className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text" value={from}
              onChange={(e) => { setFrom(e.target.value); setShowFromSuggestions(true); }}
              onFocus={() => setShowFromSuggestions(true)}
              onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
              placeholder="Departure city"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
            />
          </div>
          {showFromSuggestions && from && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-1 max-h-48 overflow-y-auto">
              {POPULAR_FROM.filter((c) => c.toLowerCase().includes(from.toLowerCase())).map((city) => (
                <button key={city} onMouseDown={() => { setFrom(city); setShowFromSuggestions(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 transition-colors">
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Swap */}
        <div className="flex justify-center -my-2 relative z-10">
          <motion.button
            onClick={() => { const t = from; setFrom(to); setTo(t); }}
            className="p-2 rounded-full bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all shadow-sm"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowRightLeft className="w-4 h-4 text-red-600" />
          </motion.button>
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">To</label>
          <div className="relative">
            <Plane className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
            <input
              type="text" value={to}
              onChange={(e) => { setTo(e.target.value); setShowToSuggestions(true); }}
              onFocus={() => setShowToSuggestions(true)}
              onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
              placeholder="Destination city"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
            />
          </div>
          {showToSuggestions && to && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-1 max-h-48 overflow-y-auto">
              {POPULAR_TO.filter((c) => c.toLowerCase().includes(to.toLowerCase())).map((city) => (
                <button key={city} onMouseDown={() => { setTo(city); setShowToSuggestions(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 transition-colors">
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dates */}
        <div className={`grid ${tripType === "return" ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Departure</label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} min={getTodayString()}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all" />
            </div>
          </div>
          {tripType === "return" && (
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Return</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} min={departDate || getTodayString()}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all" />
              </div>
            </div>
          )}
        </div>

        {/* Passengers + Cabin */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              <div className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-gray-500">Adults</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-6 h-6 rounded-full border border-gray-300 text-xs flex items-center justify-center hover:bg-gray-100">−</button>
                    <span className="w-4 text-center font-medium">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)} className="w-6 h-6 rounded-full border border-gray-300 text-xs flex items-center justify-center hover:bg-gray-100">+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Children</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-6 h-6 rounded-full border border-gray-300 text-xs flex items-center justify-center hover:bg-gray-100">−</button>
                    <span className="w-4 text-center font-medium">{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="w-6 h-6 rounded-full border border-gray-300 text-xs flex items-center justify-center hover:bg-gray-100">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Cabin</label>
            <div className="space-y-1">
              {CABIN_CLASSES.map((cls) => (
                <button key={cls} onClick={() => setCabinClass(cls)}
                  className={`w-full py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    cabinClass === cls ? "bg-red-600 text-white shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}>
                  {cls}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          {isValid ? (
            <WhatsAppButton
              context="flight"
              prefill={`Hi Ismail! I'd like a flight quote:\n\n${buildPrefill()}\n\nPlease let me know the best options and fares. Thanks!`}
              variant="large" className="w-full shadow-lg shadow-green-500/20"
            />
          ) : (
            <button disabled className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-400 font-medium text-sm cursor-not-allowed border border-gray-200">
              <Search className="w-4 h-4 inline mr-2" />Fill in your route to get flight options
            </button>
          )}
          {isValid && (
            <motion.p className="text-xs text-gray-400 text-center mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Opens in WhatsApp. Ismail responds with exact fares — typically within minutes.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
