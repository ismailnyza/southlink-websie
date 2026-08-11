import { Metadata } from "next";
import { Car } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Airport Transfers — Fixed-Price Pickups Across Sri Lanka", description: "Fixed-price airport pickups and drop-offs across Sri Lanka. Reliable drivers, clean vehicles, no surprises." };

export default function AirportTransferPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Airport Transfers</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Fixed-price pickups and drop-offs across Sri Lanka. Reliable drivers, clean vehicles.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Car className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Message for a quote</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Tell us your pickup and drop-off points. We&apos;ll give you a fixed price — no meters, no surprises.</p>
          <WhatsAppButton context="general" prefill="Hi Ismail! I need an airport transfer. Here are my details..." variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
