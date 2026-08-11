import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Southlink Travels — Flights, Tours & Corporate Travel | Galle, Sri Lanka", template: "%s | Southlink Travels" },
  description: "IATA-certified travel agency in Galle. Flights, Sri Lanka tours, corporate travel, visa assistance, and 24/7 emergency support. Premium service, handled personally.",
  metadataBase: new URL("https://southlinktravels.com"),
  openGraph: { type: "website", siteName: "Southlink Travels", title: "Southlink Travels — Premium Travel, Handled Personally." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        <Nav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16">
        <a href="/" className="font-serif font-bold text-xl tracking-tight text-gray-900 hover:text-red-600 transition-colors">
          Southlink<span className="text-red-600">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="/flights" className="hover:text-gray-900 transition-colors">Flights</a>
          <a href="/tours/inbound" className="hover:text-gray-900 transition-colors">Tours</a>
          <a href="/corporate" className="hover:text-gray-900 transition-colors">Corporate</a>
          <a href="/visa" className="hover:text-gray-900 transition-colors">Visa</a>
          <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/emergency" className="hidden sm:inline-flex text-xs font-semibold text-red-600 hover:text-red-700 transition-colors">24/7 Rescue</a>
          <a
            href="https://wa.me/+94776984777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <MessageIcon /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-white font-serif font-bold text-lg mb-3">Southlink<span className="text-red-500">.</span></p>
            <p className="text-xs leading-relaxed">IATA-certified travel agency based in Galle, Sri Lanka. Premium travel, handled personally.</p>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Services</p>
            <div className="space-y-2 text-xs">
              {["Flights","Sri Lanka Tours","Outbound Tours","Corporate","Visa","Transfers","Events"].map(s => (
                <a key={s} href={`/${s.toLowerCase().replace(/\s/g, "-").replace("sri-lanka-tours","tours/inbound").replace("outbound-tours","tours/outbound")}`} className="block hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Company</p>
            <div className="space-y-2 text-xs">
              {["About","Trust & Guarantee","Reviews","FAQ","Contact","Guides","Emergency"].map(s => (
                <a key={s} href={`/${s.toLowerCase().replace(/\s&/g,"").replace(/\s/g,"-").replace("trust---guarantee","trust")}`} className="block hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Contact</p>
            <div className="space-y-2 text-xs">
              <p>26M8+C37, Gamini Mawatha, Galle</p>
              <p>+94 91 223 4517</p>
              <p>info@southlinktravels.com</p>
              <p>IATA #42350934</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Southlink Travels (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/de" className="hover:text-white transition-colors">DE</a>
            <a href="/fr" className="hover:text-white transition-colors">FR</a>
            <a href="/zh" className="hover:text-white transition-colors">中文</a>
            <a href="/ar" className="hover:text-white transition-colors">العربية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MessageIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
