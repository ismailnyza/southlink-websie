"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const TOURS = [
  { title:"Galle Fort & Coastal Gems",days:"3 days",price:350,budget:"budget",type:"beach",desc:"UNESCO Galle Fort, Unawatuna beach, jungle beach, traditional cinnamon plantation. Private guide, boutique hotel, all meals.",highlights:["Fort heritage walk","Beach time","Cinnamon experience","Sunset at ramparts"] },
  { title:"Tea Country & Hill Station",days:"5 days",price:680,budget:"mid",type:"hill",desc:"Kandy, Nuwara Eliya, Ella. Scenic train through tea plantations, Temple of the Tooth, tea factory, Nine Arch Bridge. Colonial bungalows.",highlights:["Scenic train ride","Tea tasting","Temple of the Tooth","Nine Arch Bridge"] },
  { title:"Wildlife & Safari Circuit",days:"6 days",price:950,budget:"mid",type:"wildlife",desc:"Yala, Udawalawe, Sinharaja Rainforest. Leopards, elephants, endemic birds. Expert naturalists, luxury tented camps.",highlights:["Leopard tracking","Elephant encounters","Rainforest walk","Luxury camping"] },
  { title:"Cultural Triangle",days:"7 days",price:1100,budget:"mid",type:"culture",desc:"Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy. 2,500 years of history. UNESCO sites, archaeology guides, heritage hotels.",highlights:["Sigiriya Rock Fortress","Ancient city tours","Dambulla cave temples","Cultural dance show"] },
  { title:"South Coast Beach Hopper",days:"5 days",price:520,budget:"budget",type:"beach",desc:"Mirissa, Tangalle, Hiriketiya. Whale watching, surf lessons, beachfront dining. Sri Lanka's most beautiful coastline.",highlights:["Whale watching","Surfing lessons","Fresh seafood","Secret beaches"] },
  { title:"Full Island Grand Tour",days:"14 days",price:2200,budget:"luxury",type:"all",desc:"The complete Sri Lanka experience. Colombo, Cultural Triangle, Kandy, Ella, Yala, Galle. Private vehicle, handpicked hotels, expert guide throughout.",highlights:["All major sites","Private driver & guide","Handpicked hotels","Fully customizable"] },
  { title:"Wellness & Ayurveda Retreat",days:"7 days",price:1600,budget:"luxury",type:"wellness",desc:"Daily yoga, meditation, Ayurvedic treatments, plant-based cuisine. Mountain retreat with panoramic views. Detox and recharge.",highlights:["Daily yoga & meditation","Ayurvedic treatments","Plant-based meals","Mountain views"] },
  { title:"Adventure Seeker",days:"8 days",price:1350,budget:"mid",type:"adventure",desc:"White water rafting Kitulgala, hiking Ella Rock, surfing Weligama, cycling ancient cities, camping in Yala. Heart rate up.",highlights:["White water rafting","Ella Rock hike","Surfing","Wild camping"] },
  { title:"Romantic Honeymoon",days:"6 days",price:1400,budget:"luxury",type:"beach",desc:"Boutique hotels, private dinners on the beach, couples spa, sunset sailing, whale watching. The honeymoon you'll never forget.",highlights:["Private beach dinner","Couples spa","Sunset sailing","Whale watching"] },
  { title:"Photography Expedition",days:"10 days",price:1800,budget:"mid",type:"culture",desc:"Capture Sri Lanka through your lens. Golden hour at Sigiriya, street photography in Colombo, wildlife in Yala, portraits in tea country. Led by a pro photographer.",highlights:["Pro photographer guide","Golden hour shoots","Wildlife photography","Street & portrait work"] },
  { title:"Quick Weekend Escape",days:"3 days",price:250,budget:"budget",type:"beach",desc:"Short on time? Galle Fort, Unawatuna beach, a spice garden, and the best seafood on the island. Perfect weekend reset.",highlights:["Galle Fort","Beach time","Spice garden","Seafood feast"] },
  { title:"Bicycle Tour — Hill Country",days:"8 days",price:1200,budget:"mid",type:"adventure",desc:"Cycle through tea plantations, mountain villages, and cloud forests. Support vehicle, quality bikes, charming guesthouses each night.",highlights:["Scenic cycling routes","Tea plantation rides","Village homestays","Support vehicle"] },
];

export default function ToursPage() {
  const [type,setType]=useState("all");
  const [budget,setBudget]=useState("all");

  const filtered = useMemo(()=>{
    let r=TOURS;
    if(type!=="all") r=r.filter(t=>t.type===type);
    if(budget!=="all") r=r.filter(t=>t.budget===budget);
    return r;
  },[type,budget]);

  const types = ["all","beach","hill","wildlife","culture","adventure","wellness"];
  const budgets = ["all","budget","mid","luxury"];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Tours</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Sri Lanka<br/><span className="text-red-400">experiences.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">Curated tours designed by people who live here. Every itinerary is customizable.</p>
          <div className="mt-6">
            <Link href="/tours/outbound" className="text-sm text-white/60 hover:text-white/90 transition-colors underline underline-offset-4">
              Looking to travel abroad? Browse our outbound tours →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Type</p>
              <div className="flex flex-wrap gap-1.5">
                {types.map(t=>(<button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${type===t?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{t}</button>))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Budget</p>
              <div className="flex flex-wrap gap-1.5">
                {budgets.map(b=>(<button key={b} onClick={()=>setBudget(b)} className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${budget===b?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{b==="budget"?"Budget Friendly":b==="mid"?"Mid Range":b==="luxury"?"Luxury":"All"}</button>))}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">{filtered.length} tours found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(tour=>(
              <div key={tour.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-xl group-hover:text-red-600 transition-colors">{tour.title}</h3>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex-shrink-0 ml-2">{tour.days}</span>
                  </div>
                  <p className="text-sm text-red-600 font-semibold mb-3">From USD {tour.price.toLocaleString()} / person</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{tour.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tour.highlights.map(h=>(<span key={h} className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full">{h}</span>))}
                  </div>
                  <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in the "${tour.title}" tour (${tour.days}, from USD ${tour.price.toLocaleString()}/person). Please share more details and availability.`)}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm">
                    Enquire <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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
