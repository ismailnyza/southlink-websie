"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Award, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT, IATA, TRUST_STATS } from "@/lib/constants";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            About Southlink Travels
          </motion.h1>
          <motion.p className="text-gray-400 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            The first travel agency to open in Southern Sri Lanka. Serving Galle — and the world — for {TRUST_STATS.yearsInBusiness}+ years.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-8">Our story</h2>
          </FadeIn>
          <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            {[
              `Southlink Travels opened its doors in Galle over ${TRUST_STATS.yearsInBusiness} years ago — the first dedicated travel agency in Southern Sri Lanka. Before OTAs. Before online booking. Before "travel agent" meant "website."`,
              "We started with a simple belief: buying a flight ticket shouldn't feel like gambling. Behind every ticket is a person — someone visiting family, closing a deal, starting a honeymoon, or rushing home for an emergency. That person deserves more than a chatbot and a 1-800 number that never answers.",
              `Today, we've booked over ${TRUST_STATS.ticketsBooked.toLocaleString()} tickets. We're IATA certified. We handle flights, Sri Lanka tours, corporate travel, visas, and emergency re-bookings. And we still answer the phone — even at 3 AM.`,
              "Based in Galle, trusted globally. That's not just a tagline. It's how we work.",
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}><p>{p}</p></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn><h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-10 text-center">Our credentials</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "IATA Certified", desc: `#${IATA.number}` },
              { icon: Award, title: "SLTDA Registered", desc: "Tour operator license" },
              { icon: Clock, title: `${TRUST_STATS.yearsInBusiness}+ Years`, desc: "Serving Galle & beyond" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/trust" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1.5">
                View all trust signals <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn><h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-10 text-center">Visit us</h2></FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 text-center border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Southlink Travels</h3>
              <p className="text-gray-500 mb-8">{CONTACT.address}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-red-300 hover:text-red-600 transition-all font-medium text-sm shadow-sm">
                  <Phone className="w-4 h-4" />{CONTACT.phone}
                </a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Southlink Travels, ${CONTACT.address}`)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MapPin className="w-4 h-4" />Open in Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="section-container max-w-xl mx-auto text-center">
          <FadeIn><h2 className="text-2xl sm:text-3xl font-bold font-serif mb-5">Ready to work with us?</h2></FadeIn>
          <FadeIn delay={0.2}>
            <WhatsAppButton context="general" variant="large" className="!bg-white !text-red-700 hover:!bg-red-50 mx-auto shadow-lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
