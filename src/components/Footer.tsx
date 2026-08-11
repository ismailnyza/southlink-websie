import Link from "next/link";
import { MessageCircle, Phone, MapPin, Mail, Shield, Star } from "lucide-react";
import { CONTACT, IATA, SITE, LANGUAGES, TRUST_STATS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {SITE.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Flights, tours, and corporate travel — handled personally by a dedicated agent based in Galle.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-400" />
                <span>IATA {IATA.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{TRUST_STATS.googleRating} ★ ({TRUST_STATS.googleReviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Services</h4>
            <nav className="space-y-3">
              {[
                ["Flights", "/flights"],
                ["Sri Lanka Tours", "/tours/inbound"],
                ["Outbound Tours", "/tours/outbound"],
                ["Corporate Travel", "/corporate"],
                ["Events & Groups", "/events"],
                ["Airport Transfers", "/airport-transfer"],
                ["Visa Assistance", "/visa"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Support</h4>
            <nav className="space-y-3">
              {[
                ["24/7 Emergency", "/emergency"],
                ["The Southlink Guarantee", "/trust"],
                ["Reviews", "/trust/reviews"],
                ["FAQ", "/faq"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Flying Home (Diaspora)", "/diaspora"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Contact</h4>
            <div className="space-y-3.5 text-sm">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>{CONTACT.phone}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-xs">{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500 mr-1">We speak your language:</span>
            {LANGUAGES.map(({ code, label, flag }) => (
              <Link key={code} href={`/${code}`} className="text-sm px-3.5 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white border border-gray-700 transition-all duration-200">
                {flag} {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>IATA Certified Agency · Galle · First travel agency in Southern Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
