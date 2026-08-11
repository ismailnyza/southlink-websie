import { Metadata } from "next";
import { Users } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Events & Group Travel", description: "Weddings, conferences, school trips — we move groups. One point of contact, everything handled." };

export default function EventsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Events & Group Travel</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Weddings, conferences, school trips — we move groups. One point of contact.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <Users className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Tell us about your event</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Group flights, hotel blocks, transfers, activities — one message to Ismail, everything arranged.</p>
          <WhatsAppButton context="event" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
