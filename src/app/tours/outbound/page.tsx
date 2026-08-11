"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

const OUTBOUND = [
  { title:"Dubai — City of Gold",days:"4 days",price:85000,budget:"budget",region:"middle-east",desc:"Burj Khalifa, Dubai Mall, desert safari, dhow cruise, Gold Souk. Direct flights from Colombo. Visa assistance included.","highlights":["Burj Khalifa observation deck","Desert safari & BBQ dinner","Dhow cruise dinner","Dubai Mall & Gold Souk"],img:"photo-1512453979798-5ea266f8880c" },
  { title:"Abu Dhabi — Cultural Capital",days:"4 days",price:82000,budget:"budget",region:"middle-east",desc:"Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Ferrari World, Yas Island. A more refined UAE experience.","highlights":["Sheikh Zayed Mosque","Louvre Abu Dhabi","Ferrari World","Yas Island beaches"],img:"photo-1512632578810-3819f3f5e4cf" },
  { title:"Singapore — The Garden City",days:"5 days",price:95000,budget:"mid",region:"asia",desc:"Gardens by the Bay, Universal Studios, Sentosa Island,Orchard Road. Clean, efficient, unforgettable. Direct flights available.","highlights":["Gardens by the Bay","Universal Studios","Sentosa Island","Marina Bay Sands"],img:"photo-1525625293386-3f8f99389edd" },
  { title:"Malaysia — Truly Asia",days:"5 days",price:75000,budget:"budget",region:"asia",desc:"Kuala Lumpur, Petronas Towers, Batu Caves, Genting Highlands, Langkawi beaches. Incredible food, great value.","highlights":["Petronas Twin Towers","Batu Caves","Genting Highlands","Langkawi island"],img:"photo-1596422846543-75c6fc197f07" },
  { title:"Thailand — Land of Smiles",days:"6 days",price:78000,budget:"budget",region:"asia",desc:"Bangkok temples, floating markets, Phuket beaches, Phi Phi Islands. The perfect mix of culture and beach life.","highlights":["Grand Palace & temples","Floating markets","Phi Phi Islands","Phuket beaches"],img:"photo-1504214208698-ea1916a2195a" },
  { title:"Maldives — Paradise Found",days:"4 days",price:120000,budget:"luxury",region:"indian-ocean",desc:"Overwater villas, crystal lagoons, world-class diving. A short flight from Colombo. Honeymooners' dream.","highlights":["Overwater villa stay","Snorkeling & diving","Sunset dolphin cruise","Private sandbank dinner"],img:"photo-1514282401047-d79a71a590e8" },
  { title:"Bali — Island of Gods",days:"6 days",price:95000,budget:"mid",region:"asia",desc:"Ubud rice terraces, Tanah Lot temple, Seminyak beaches, Uluwatu cliffs. Spiritual, beautiful, unforgettable.","highlights":["Ubud rice terraces","Tanah Lot at sunset","Uluwatu temple & kecak dance","Seminyak beach clubs"],img:"photo-1537996194471-e657df975ab4" },
  { title:"India — Golden Triangle",days:"7 days",price:65000,budget:"budget",region:"india",desc:"Delhi, Agra (Taj Mahal), Jaipur. The classic India experience. Short flights from Colombo, incredible value.","highlights":["Taj Mahal at sunrise","Jaipur's Amber Fort","Delhi street food tour","Rajput heritage hotels"],img:"photo-1548013146-72479768bada" },
  { title:"Vietnam — Timeless Charm",days:"7 days",price:88000,budget:"budget",region:"asia",desc:"Hanoi Old Quarter, Ha Long Bay cruise, Hoi An lantern town, Ho Chi Minh City. Incredible food, rich history.","highlights":["Ha Long Bay overnight cruise","Hoi An lantern festival","Hanoi street food","Cu Chi Tunnels"],img:"photo-1528127269322-539801943592" },
  { title:"Turkey — Where East Meets West",days:"7 days",price:140000,budget:"mid",region:"europe",desc:"Istanbul's Blue Mosque & Grand Bazaar, Cappadocia hot air balloons, Pamukkale terraces. Unforgettable.","highlights":["Blue Mosque & Hagia Sophia","Cappadocia balloon ride","Pamukkale thermal pools","Grand Bazaar shopping"],img:"photo-1524231757912-21f4fe3a7200" },
  { title:"Japan — Land of the Rising Sun",days:"8 days",price:180000,budget:"luxury",region:"asia",desc:"Tokyo, Kyoto, Osaka. Bullet trains, ancient temples, neon cities, cherry blossoms. The trip of a lifetime.","highlights":["Tokyo — Shibuya & Shinjuku","Kyoto's golden temples","Bullet train experience","Osaka street food"],img:"photo-1493976040374-85c8e12f0c0e" },
  { title:"Europe Multi-City",days:"12 days",price:280000,budget:"luxury",region:"europe",desc:"London, Paris, Rome, Barcelona. The grand European tour. Flights, trains, handpicked hotels, expert planning.","highlights":["London — Tower & Buckingham","Paris — Eiffel & Louvre","Rome — Colosseum & Vatican","Barcelona — Sagrada Familia"],img:"photo-1467269204594-9661b134dd2b" },
];

export default function OutboundToursPage() {
  const [region,setRegion]=useState("all");
  const [budget,setBudget]=useState("all");

  const regions = ["all","middle-east","asia","india","indian-ocean","europe"];
  const budgets = ["all","budget","mid","luxury"];

  const filtered = useMemo(()=>{
    let r=OUTBOUND;
    if(region!=="all") r=r.filter(t=>t.region===region);
    if(budget!=="all") r=r.filter(t=>t.budget===budget);
    return r;
  },[region,budget]);

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Outbound Tours</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Fly abroad.<br/><span className="text-red-400">We handle everything.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">For Sri Lankans looking to explore the world. Flights, hotels, visas, itineraries — all handled by us. You just pack.</p>
        </div>
      </section>

      <section className="py-10 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Region</p>
              <div className="flex flex-wrap gap-1.5">
                {regions.map(r=>(<button key={r} onClick={()=>setRegion(r)} className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${region===r?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{r==="all"?"All":r==="middle-east"?"Middle East":r==="indian-ocean"?"Indian Ocean":r}</button>))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Budget</p>
              <div className="flex flex-wrap gap-1.5">
                {budgets.map(b=>(<button key={b} onClick={()=>setBudget(b)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${budget===b?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{b==="all"?"All":b==="budget"?"Under LKR 100K":b==="mid"?"LKR 100K – 200K":"LKR 200K+"}</button>))}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">{filtered.length} destinations found · Prices include flights, hotels, visa assistance</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(tour=>(
              <div key={tour.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-[16/10] bg-gray-200">
                  <Image src={`https://images.unsplash.com/${tour.img}?w=600&q=80`} alt={tour.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" unoptimized />
                  <span className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur">{tour.days}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{tour.title}</h3>
                  <p className="text-sm text-red-600 font-semibold mb-2">From LKR {tour.price.toLocaleString()} / person</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{tour.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tour.highlights.slice(0,3).map(h=>(<span key={h} className="text-[10px] bg-red-50 text-red-700 px-2 py-1 rounded-full">{h}</span>))}
                    {tour.highlights.length>3&&<span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded-full">+{tour.highlights.length-3} more</span>}
                  </div>
                  <a href={`https://wa.me/+94776984777?text=${encodeURIComponent(`Hi! I'm interested in the "${tour.title}" outbound tour (${tour.days}, from LKR ${tour.price.toLocaleString()}/person). Please share full itinerary and availability.`)}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-semibold transition-all w-full justify-center shadow-sm">
                    Get full itinerary <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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
