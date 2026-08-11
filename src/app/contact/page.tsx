export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8"><div className="max-w-3xl mx-auto text-center"><p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">Get in touch.</h1><p className="text-gray-400 mt-4">One message, one call, one visit — and we handle the rest.</p></div></section>
      <section className="py-16 px-5 sm:px-8"><div className="max-w-2xl mx-auto space-y-5">
        {[
          { label: "WhatsApp", value: "+94 77 698 4777", href: "https://wa.me/+94776984777", bg: "bg-green-50 border-green-200" },
          { label: "Phone", value: "+94 91 223 4517", href: "tel:+94912234517", bg: "bg-white border-gray-100" },
          { label: "Email", value: "info@southlinktravels.com", href: "mailto:info@southlinktravels.com", bg: "bg-white border-gray-100" },
          { label: "Visit us", value: "Selaka Complex, 34 Gamini Mawatha, Galle 80000", href: "https://maps.google.com/?q=Southlink+Travels+Galle", bg: "bg-white border-gray-100" },
        ].map(item => (
          <a key={item.label} href={item.href} target={item.label==="Visit us"?"_blank":undefined} rel={item.label==="Visit us"?"noopener noreferrer":undefined}
            className={`block p-6 rounded-2xl border transition-all hover:shadow-md ${item.bg}`}>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{item.label}</span>
            <span className="block mt-1 text-lg text-gray-900 font-medium">{item.value}</span>
          </a>
        ))}
        <div className="text-center text-sm text-gray-400 pt-4"><p>Mon–Fri: 8:30 AM – 5:30 PM · Sat: 9:00 AM – 1:00 PM</p><p className="text-xs mt-1">Emergencies: call anytime. We answer.</p></div>
      </div></section>
    </div>
  );
}
