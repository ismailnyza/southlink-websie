"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT } from "@/lib/constants";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Contact us
          </motion.h1>
          <motion.p className="text-gray-400 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            One message, one call, one visit — and we handle the rest.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div className="space-y-5">
            {[
              { icon: MessageCircle, bg: "bg-green-50 border-green-200", iconBg: "bg-green-600", title: "WhatsApp", desc: "The fastest way to reach us. Message Ismail directly — he typically responds within minutes.", action: <WhatsAppButton context="general" variant="default" /> },
              { icon: Phone, bg: "bg-white border-gray-200", iconBg: "bg-red-50", title: "Phone", desc: "Call our Galle office during business hours. For emergencies, we answer 24/7.", action: <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-red-600 hover:text-red-700 font-semibold text-lg">{CONTACT.phone}</a> },
              { icon: Mail, bg: "bg-white border-gray-200", iconBg: "bg-red-50", title: "Email", desc: "For documents, itineraries, and non-urgent inquiries.", action: <a href={`mailto:${CONTACT.email}`} className="text-red-600 hover:text-red-700 font-medium">{CONTACT.email}</a> },
              { icon: MapPin, bg: "bg-white border-gray-200", iconBg: "bg-red-50", title: "Visit us", desc: CONTACT.address, action: <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Southlink Travels, ${CONTACT.address}`)}`} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" />Open in Google Maps</a> },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className={`rounded-3xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-all duration-300 ${item.bg}`}>
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                      <item.icon className={`w-6 h-6 ${item.title === "WhatsApp" ? "text-white" : "text-red-600"}`} />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-xl mb-1.5">{item.title}</h2>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                      {item.action}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-10 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Clock className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
              <p className="text-sm text-gray-500">Mon–Fri: 8:30 AM – 5:30 PM (SLST)</p>
              <p className="text-sm text-gray-500">Saturday: 9:00 AM – 1:00 PM</p>
              <p className="text-xs text-gray-400 mt-2">For emergencies outside hours, call or WhatsApp — we answer.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
