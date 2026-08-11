import { SITE } from "@/lib/constants";

function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children?: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Southlink Travels</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">{title}</h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">{subtitle}</p>
        </div>
      </section>
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {children || (
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-8">Message us for details — we respond within minutes.</p>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Message us on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell title="About Southlink Travels" subtitle={`IATA-certified travel agency based in Galle. ${SITE.yearsInBusiness}+ years of premium travel service.`}>
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>Southlink Travels opened in Galle over {SITE.yearsInBusiness} years ago — the first dedicated travel agency in Southern Sri Lanka. Before OTAs. Before comparison sites. Before &quot;travel agent&quot; meant &quot;website.&quot;</p>
        <p>We started with a simple belief: buying a flight ticket shouldn&apos;t feel like gambling. Behind every ticket is a person — visiting family, closing a deal, starting a honeymoon, or rushing home for an emergency. That person deserves a team that answers the phone.</p>
        <p>Today we&apos;re IATA certified (#{SITE.iata}), SLTDA registered, with {SITE.ticketsBooked.toLocaleString()}+ tickets booked and a {SITE.googleRating}-star Google rating. We handle flights, tours, corporate travel, visas, and emergency re-bookings across Sri Lanka and worldwide.</p>
        <p>Based in Galle. Trusted globally. That&apos;s how we work.</p>
      </div>
    </PageShell>
  );
}
