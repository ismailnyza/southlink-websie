import { Metadata } from "next";
import { Globe } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Outbound Tours — International Packages", description: "International destinations with full visa & itinerary support. Dubai, Singapore, Thailand, Maldives and more." };

export default function OutboundToursPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">International Destinations</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Dubai, Singapore, Thailand, Maldives — full visa & itinerary support included.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Globe className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Coming soon</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Building our outbound catalog. Message Ismail for any destination — he handles everything from flights to visas.</p>
          <WhatsAppButton context="tour" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
