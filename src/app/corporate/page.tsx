import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, GraduationCap } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CORPORATE_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corporate Travel Management — Galle, Sri Lanka",
  description: "Credit terms, 24/7 re-routing, dedicated agent. Corporate travel management for SMEs, NGOs, exporters, and executive teams.",
};

export default function CorporatePage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Corporate travel, done right</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Credit terms. 24/7 re-routing. Visa handling. A dedicated agent who knows your team by name.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {CORPORATE_TIERS.map((pkg) => (
              <div key={pkg.title} className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                pkg.highlight ? "bg-red-50 border-red-200 ring-1 ring-red-200" : "bg-white border-gray-100 shadow-sm"
              }`}>
                {pkg.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</span></div>}
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{pkg.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <Link href="/corporate/mice" className="card p-6 group">
              <Building2 className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors">MICE Travel</h3>
              <p className="text-sm text-gray-500 mb-3">Meetings, incentives, conferences, events — we move groups.</p>
              <span className="text-red-600 text-sm font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/corporate/educational" className="card p-6 group">
              <GraduationCap className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors">Educational Travel</h3>
              <p className="text-sm text-gray-500 mb-3">School trips, university programs, study tours — handled end to end.</p>
              <span className="text-red-600 text-sm font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="section-container max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-5">Ready to set up your team?</h2>
          <WhatsAppButton context="corporate" variant="large" className="!bg-white !text-red-700 hover:!bg-red-50 mx-auto shadow-lg" />
        </div>
      </section>
    </>
  );
}
