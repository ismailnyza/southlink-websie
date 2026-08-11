import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Flying Home — Diaspora Services", description: "Flights home to Sri Lanka for the diaspora. Weddings, funerals, holidays — we handle everything." };

export default function DiasporaPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Flying home?<br /><span className="text-red-400">We handle everything.</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">For Sri Lankans in Dubai, London, Sydney, Toronto, and everywhere else — we know the routes, the airlines, and the best ways home.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Heart className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">We understand</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Whether it&apos;s a wedding, a funeral, or just coming home — we know what it means. We handle flights, connections, and everything in between.</p>
          <WhatsAppButton context="diaspora" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
