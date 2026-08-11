import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export const metadata: Metadata = { title: "Travel Guides — Sri Lanka & Beyond", description: "Destination guides, travel tips, and route advice from a Galle-based travel agent who knows the island." };

const GUIDES = [
  "Galle — The Complete Local's Guide",
  "Colombo — Where to Stay & What to Do",
  "Kandy — The Cultural Capital",
  "Ella — Tea Country & Mountain Views",
  "Sigiriya — Climbing the Lion Rock",
  "Yala — Safari Guide & Best Time to Visit",
  "Mirissa — Beaches, Whales & Surfing",
  "Nuwara Eliya — Little England of Sri Lanka",
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Travel Guides</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Destination guides written by a local who knows every corner of Sri Lanka.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUIDES.map((title, i) => (
              <Link key={i} href="#" className="card p-5 group flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors text-sm">{title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">More guides coming soon. Want a specific destination? Message Ismail.</p>
        </div>
      </section>
    </>
  );
}
