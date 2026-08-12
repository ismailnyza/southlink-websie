export default function ContactPage() {
  const contacts = [
    {
      label: "WhatsApp",
      value: "+94 77 698 4777",
      href: "https://wa.me/+94776984777",
      desc: "Fastest response. Message anytime.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      bg: "bg-green-50 border-green-200 hover:border-green-300",
      textColor: "text-green-700",
    },
    {
      label: "Phone",
      value: "+94 91 223 4517",
      href: "tel:+94912234517",
      desc: "Call us during business hours — or anytime for emergencies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bg: "bg-white border-gray-100 hover:border-red-200",
      textColor: "text-gray-900",
    },
    {
      label: "Email",
      value: "info@southlinktravels.com",
      href: "mailto:info@southlinktravels.com",
      desc: "For documents, itineraries, and non-urgent requests.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bg: "bg-white border-gray-100 hover:border-red-200",
      textColor: "text-gray-900",
    },
    {
      label: "Visit us",
      value: "Selaka Complex, 34 Gamini Mawatha, Galle 80000",
      href: "https://maps.google.com/?q=Southlink+Travels+Galle",
      desc: "Come by the office — we&apos;re in central Galle, near the fort.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: "bg-white border-gray-100 hover:border-red-200",
      textColor: "text-gray-900",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Get in touch.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            One message, one call, one visit — and a real person in Galle handles the rest. Not a chatbot. Not a call center.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto space-y-4">
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Visit us" || c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "Visit us" || c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className={`block p-5 sm:p-6 rounded-2xl border transition-all hover:shadow-md ${c.bg}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 mt-0.5 ${c.label === "WhatsApp" ? "text-green-600" : "text-red-600"}`}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{c.label}</span>
                  <span className={`block mt-1 text-base sm:text-lg font-medium ${c.textColor}`}>{c.value}</span>
                  <span className="block mt-1 text-xs text-gray-400">{c.desc}</span>
                </div>
              </div>
            </a>
          ))}

          {/* Hours */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-3">Office hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-medium">8:30 AM – 5:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
            <p className="text-xs text-red-600 font-medium mt-4">
              Emergencies: call anytime, any day. We answer.
            </p>
          </div>

          <p className="text-center text-xs text-gray-400 pt-2">
            Sri Lanka Standard Time (UTC+5:30)
          </p>
        </div>
      </section>
    </div>
  );
}
