import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Southlink Travels — Flights, Tours, Events & Packages | Galle, Sri Lanka", template: "%s | Southlink Travels" },
  description: "Premium travel agency in Galle. Flights, Sri Lanka tours, concert & sports tickets, event packages, corporate travel, visa help. A real team that answers when you call.",
  metadataBase: new URL("https://southlinktravels.com"),
  openGraph: { type: "website", siteName: "Southlink Travels", title: "Southlink Travels — Premium Travel, Handled Personally." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  const links = [
    { href: "/flights", label: "Flights" },
    { href: "/tours", label: "Tours" },
    { href: "/packages", label: "Packages" },
    { href: "/events", label: "Events" },
    { href: "/corporate", label: "Corporate" },
    { href: "/visa", label: "Visa" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#FCFAF7]/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16">
        <Link href="/" className="font-serif font-bold text-xl tracking-tight text-gray-900 hover:text-red-600 transition-colors">
          Southlink<span className="text-red-600">.</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-red-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/emergency" className="hidden sm:inline-flex text-xs font-semibold text-red-600 hover:text-red-700 transition-colors">
            24/7 Help
          </Link>
          <a
            href="https://wa.me/+94776984777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <MsgIcon /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const cols = [
    {
      title: "Services",
      links: [
        { href: "/flights", label: "Flights" },
        { href: "/tours", label: "Sri Lanka Tours" },
        { href: "/packages", label: "Travel Packages" },
        { href: "/events", label: "Sports & Concert Tickets" },
        { href: "/visa", label: "Visa Help" },
        { href: "/corporate", label: "Corporate Travel" },
        { href: "/airport-transfer", label: "Airport Transfers" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/trust", label: "Our Guarantee" },
        { href: "/trust/reviews", label: "Reviews" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
        { href: "/guides", label: "Travel Guides" },
        { href: "/emergency", label: "Emergency Help" },
      ],
    },
  ];
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-white font-serif font-bold text-lg mb-3">
              Southlink<span className="text-red-500">.</span>
            </p>
            <p className="text-xs leading-relaxed mb-4">
              Galle&apos;s first travel agency. Flights, tours, event tickets, corporate travel — handled by a real team that answers the phone.
            </p>
            <p className="text-xs">Licensed & IATA accredited · Est. 2009</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">{col.title}</p>
              <div className="space-y-2 text-xs">
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} className="block hover:text-white transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Contact</p>
            <div className="space-y-2 text-xs">
              <p>Selaka Complex, 34 Gamini Mawatha</p>
              <p>Galle 80000, Sri Lanka</p>
              <p className="mt-2">+94 91 223 4517</p>
              <p>info@southlinktravels.com</p>
              <div className="flex gap-3 mt-3">
                <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors text-xs font-medium">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Southlink Travels (Pvt) Ltd.</p>
          <div className="flex gap-4">
            <Link href="/de" className="hover:text-white transition-colors">Deutsch</Link>
            <Link href="/fr" className="hover:text-white transition-colors">Français</Link>
            <Link href="/zh" className="hover:text-white transition-colors">中文</Link>
            <Link href="/ar" className="hover:text-white transition-colors">العربية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MsgIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
