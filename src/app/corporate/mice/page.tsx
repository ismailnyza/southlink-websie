import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Building2 } from "lucide-react";

export const metadata: Metadata = { title: "MICE Travel — Meetings, Events & Conferences", description: "Corporate events, conferences, and incentive travel in Sri Lanka. Group logistics handled end-to-end." };

export default function MICEPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">MICE Travel</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Meetings, incentives, conferences, and events — we move groups of any size.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Building2 className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Plan your event</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Flights, hotels, transfers, activities — everything for your conference or corporate event.</p>
          <WhatsAppButton context="corporate" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
