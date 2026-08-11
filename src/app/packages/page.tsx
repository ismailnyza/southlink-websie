"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

const PACKAGES = [
  { title:"Romantic Escape",days:"5 nights",price:1200,budget:"mid",type:"couples",desc:"Galle Fort boutique hotel, private candlelit beach dinner, couples spa, whale watching, sunset sailing. The honeymoon you deserve.",img:"photo-1544551763-8ef4e5e8cd47",tag:"Best Seller" },
  { title:"Family Adventure",days:"7 nights",price:2400,budget:"mid",type:"family",desc:"Colombo zoo, Kandy cultural show, Ella train ride, Yala safari. Kid-friendly hotels with pools, private vehicle, child-safe activities.",img:"photo-1551884838-62cc21cb39a8",tag:"Family Favorite" },
  { title:"Luxury Circuit",days:"10 nights",price:4500,budget:"luxury",type:"luxury",desc:"Aman, Resplendent Ceylon, Cape Weligama. Helicopter transfers, private chef, personal butler, exclusive access experiences.",img:"photo-1578662996442-48f60103fc96",tag:"Luxury" },
  { title:"Cultural Triangle",days:"6 nights",price:1800,budget:"mid",type:"culture",desc:"Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy. UNESCO sites, expert guides, heritage boutique hotels.",img:"photo-1609949279531-cf48d64bed89",tag:"Culture" },
  { title:"Beach Hopper",days:"6 nights",price:850,budget:"budget",type:"beach",desc:"Mirissa, Tangalle, Hiriketiya. Surf lessons, whale watching, beachfront cabanas, fresh seafood nightly.",img:"photo-1544551763-8ef4e5e8cd47",tag:"Popular" },
  { title:"Wellness Retreat",days:"7 nights",price:1600,budget:"luxury",type:"wellness",desc:"Daily yoga, meditation, Ayurvedic treatments, plant-based cuisine. Mountain retreat with panoramic views.",img:"photo-1578662996442-48f60103fc96",tag:"Wellness" },
  { title:"Adventure Seeker",days:"8 nights",price:1350,budget:"mid",type:"adventure",desc:"White water rafting, hiking, surfing, cycling, camping. For those who want their heart rate up.",img:"photo-1551884838-62cc21cb39a8",tag:"Adventure" },
  { title:"Cricket Tour",days:"7 nights",price:950,budget:"mid",type:"sports",desc:"Watch Sri Lanka play at Galle, Kandy, Colombo. Match tickets, stadium tours, cricket legend meet-and-greet.",img:"photo-1570788647885-4d68a9ddb7c1",tag:"Sports" },
  { title:"Quick Weekend",days:"3 nights",price:350,budget:"budget",type:"beach",desc:"Short on time? Galle Fort, Unawatuna beach, spice garden, best seafood on the island. Perfect reset.",img:"photo-1544551763-8ef4e5e8cd47" },
  { title:"Tea & Trains",days:"5 nights",price:750,budget:"budget",type:"hill",desc:"Kandy to Ella by train — the world's most scenic rail journey. Tea factories, mountain villages, colonial bungalows.",img:"photo-1578662996442-48f60103fc96",tag:"Scenic" },
  { title:"Diving Expedition",days:"6 nights",price:1100,budget:"mid",type:"adventure",desc:"Explore shipwrecks, coral reefs, and marine life. PADI-certified guides, equipment included. East and south coast sites.",img:"photo-1544551763-8ef4e5e8cd47" },
  { title:"Food & Spice Trail",days:"8 nights",price:1400,budget:"mid",type:"culture",desc:"Cooking classes, spice garden tours, market visits, street food walks, fine dining. Taste Sri Lanka from street to table.",img:"photo-1609949279531-cf48d64bed89",tag:"Foodie" },
];

export default function PackagesPage() {
  const [type,setType]=useState("all");
  const [budget,setBudget]=useState("all");

  const types = ["all","beach","hill","culture","adventure","wellness","couples","family","luxury","sports"];
  const budgets = [
    {v:"all",l:"All Budgets"},
    {v:"budget",l:"Under USD 1,000"},
    {v:"mid",l:"USD 1,000 – 2,000"},
    {v:"luxury",l:"USD 2,000+"},
  ];

  const filtered = useMemo(()=>{
    let r=PACKAGES;
    if(type!=="all") r=r.filter(p=>p.type===type);
    if(budget!=="all") r=r.filter(p=>p.budget===budget);
    return r;
  },[type,budget]);

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Packages</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Travel packages.<br/><span className="text-red-400">Zero planning stress.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Pre-built experiences. Fully customizable. Every package includes accommodation, transport, activities, and 24/7 support.</p>
        </div>
      </section>
      <section className="py-10 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Type</p>
              <div className="flex flex-wrap gap-1.5">{types.map(t=>(<button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${type===t?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{t}</button>))}</div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Budget</p>
              <div className="flex flex-wrap gap-1.5">{budgets.map(b=>(<button key={b.v} onClick={()=>setBudget(b.v)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${budget===b.v?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{b.l}</button>))}</div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">{filtered.length} packages found</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(pkg=>(
              <div key={pkg.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image src={`https://images.unsplash.com/${pkg.img}?w=600&q=80`} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" unoptimized />
                  {pkg.tag && <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">{pkg.tag}</span>}
                  <span className="absolute bottom-3 right-3 bg-white/90 text-gray-900 text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur">{pkg.days}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{pkg.title}</h3>
                  <p className="text-sm text-red-600 font-semibold mb-2">From USD {pkg.price.toLocaleString()}{pkg.type==="family"?" / family":pkg.type==="couples"?" / couple":" / person"}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{pkg.desc}</p>
                  <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in the "${pkg.title}" package (${pkg.days}, from USD ${pkg.price.toLocaleString()}). Please share details and availability.`)}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 w-full justify-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-semibold transition-all shadow-sm">
                    Enquire now <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
