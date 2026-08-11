import { Metadata } from "next";
import { FileText } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Visa Assistance — Sri Lanka & Worldwide", description: "Visa guidance, application support, and document checking for Sri Lankans traveling abroad and tourists visiting Sri Lanka." };

export default function VisaPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Visa Assistance</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Visa guidance, application support, and document checking. UAE, Schengen, UK, India, Thailand and more.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <FileText className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Visa support for any destination</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">We check your requirements, review your documents, and guide you through the application. One less thing to worry about.</p>
          <WhatsAppButton context="visa" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
        </div>
      </section>
    </>
  );
}
