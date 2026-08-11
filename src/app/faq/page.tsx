import { SITE } from "@/lib/constants";

const FAQS = [
  { q: "How do I book a flight?", a: "Browse routes on our flights page to see cached fares, then message us on WhatsApp for exact pricing. We respond within minutes during business hours." },
  { q: "Do I pay more than booking online?", a: "Sometimes a small margin. What you get: a team that rebooks you when airlines cancel, guides your visa, and answers the phone at 3 AM." },
  { q: "How do I pay?", a: "Bank transfer to our Sri Lankan account, cash at our Galle office, or international transfer. Tickets issued after payment confirmation." },
  { q: "What if my flight gets cancelled?", a: "Call or WhatsApp us immediately. We rebook you — often before the airline announces alternatives." },
  { q: "Can you help with visas?", a: "Yes. We guide you through requirements, check your documents, and help with the application for UAE, Schengen, UK, India, Thailand and more." },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">FAQ</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Common questions.</h1></div></section>
      <section className="py-16 px-5 sm:px-8"><div className="max-w-2xl mx-auto space-y-4">
        {FAQS.map((faq,i)=>(<details key={i} className="group border-b border-gray-100 pb-4"><summary className="cursor-pointer font-semibold text-gray-900 group-hover:text-red-600 transition-colors list-none flex items-center justify-between py-2">{faq.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></summary><p className="text-gray-600 text-sm leading-relaxed pt-2 pb-3">{faq.a}</p></details>))}
        <div className="text-center pt-6"><a href={`https://wa.me/${SITE.whatsapp}`} className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>Still have questions? Message us.</a></div>
      </div></section>
    </div>
  );
}
