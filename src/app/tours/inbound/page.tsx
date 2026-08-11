import { Metadata } from "next";
import Link from "next/link";
import { Map, Compass } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Sri Lanka Tours — Inbound Experiences", description: "Curated Sri Lanka experiences designed by locals. Beaches, culture, wildlife, tea country — we know every corner." };

export default function InboundToursPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Sri Lanka Experiences</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Curated tours designed by locals who know every corner of this island.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Map className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Coming soon</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">We&apos;re building our tour catalog. Meanwhile, message Ismail — he knows every guide, every route, and every hidden spot in Sri Lanka.</p>
          <WhatsAppButton context="tour" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
