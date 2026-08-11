import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Get in touch.</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">One message, one call, one visit — and we handle the rest.</p>
        </div>
      </section>
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { label: "WhatsApp", value: SITE.whatsapp, href: `https://wa.me/${SITE.whatsapp}`, primary: true },
            { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g,"")}` },
            { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { label: "Visit", value: SITE.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Southlink Travels, ${SITE.address}`)}` },
          ].map(item => (
            <a key={item.label} href={item.href} target={item.label==="Visit"?"_blank":undefined} rel={item.label==="Visit"?"noopener noreferrer":undefined}
              className={`block p-6 rounded-2xl border transition-all hover:shadow-md ${item.primary ? "bg-green-50 border-green-200" : "bg-white border-gray-100 hover:border-red-100"}`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{item.label}</span>
              <span className={`block mt-1 text-lg ${item.primary ? "text-green-700 font-semibold" : "text-gray-900"}`}>{item.value}</span>
            </a>
          ))}
          <div className="text-center text-sm text-gray-400 pt-4">
            <p>Mon–Fri: 8:30 AM – 5:30 PM (SLST)</p>
            <p>Saturday: 9:00 AM – 1:00 PM</p>
            <p className="text-xs mt-1">Emergencies: call anytime. We answer.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
