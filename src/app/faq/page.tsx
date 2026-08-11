import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "FAQ — Southlink Travels", description: "Common questions about flights, tours, payments, visas, and how we work." };

export default function FAQPage() {
  const faqs = [
    { q: "How do I book a flight?", a: "Message Ismail on WhatsApp with your route and dates. He'll respond with options and exact pricing — typically within minutes during business hours." },
    { q: "Do I pay more than booking online?", a: "Sometimes a small margin, yes. But you get a human who fixes things when flights cancel, visas reject, or plans change. Most clients find the peace of mind worth it." },
    { q: "How do I pay?", a: "We accept bank transfers to our Sri Lankan account, cash at our Galle office, or international transfers. Tickets are issued after payment confirmation." },
    { q: "What if my flight gets cancelled?", a: "Call or WhatsApp Ismail immediately. He rebooks you — often before the airline announces alternatives. This is what having an agent is for." },
    { q: "Can you help with visas?", a: "Yes. We guide you through visa requirements for your destination, check your documents, and help with the application process." },
    { q: "Do you handle group bookings?", a: "Yes — weddings, conferences, school trips. Message for a group quote with your dates and numbers." },
  ];

  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Frequently Asked Questions</h1>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 group-hover:text-red-600 transition-colors list-none flex items-center justify-between">
                {faq.q}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
            </details>
          ))}
          <div className="text-center pt-8">
            <p className="text-gray-500 text-sm mb-4">Still have questions? Just ask.</p>
            <WhatsAppButton context="general" variant="default" />
          </div>
        </div>
      </section>
    </>
  );
}
