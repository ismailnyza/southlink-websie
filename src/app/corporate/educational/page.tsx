import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = { title: "Educational Travel — School & University Programs", description: "School trips, university study tours, and educational programs in Sri Lanka. Safety-first, fully managed." };

export default function EducationalPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Educational Travel</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">School trips, university study tours, and educational programs — handled safely end-to-end.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Your program, our logistics</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Flights, accommodation, ground transport, activities — we handle everything so you can focus on teaching.</p>
          <WhatsAppButton context="corporate" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
