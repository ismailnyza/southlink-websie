"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Shield, Clock, FileCheck, HeartHandshake, ArrowRight } from "lucide-react";
import FlightPlanner from "@/components/FlightPlanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { POPULAR_ROUTES } from "@/lib/constants";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function FlightsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Book flights with an agent who cares
          </motion.h1>
          <motion.p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Smart routing. Fair fares. And someone who answers the phone when things go wrong.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50 -mt-8">
        <div className="section-container flex justify-center">
          <FlightPlanner />
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn><h2 className="section-title font-serif text-center">Why book flights with us</h2>
            <p className="section-subtitle mx-auto mb-14">In a world of OTAs and algorithms, here&apos;s what you get with a real agent.</p></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "IATA Certified Agency", desc: "Your money and ticket are protected. We're licensed, bonded, and accountable." },
              { icon: Clock, title: "24/7 Problem Solving", desc: "Flight cancelled at midnight? We rebook. Airline changed your itinerary? We sort it." },
              { icon: FileCheck, title: "Visa & Transit Guidance", desc: "We check your visa requirements, transit rules, and travel documents before you book." },
              { icon: HeartHandshake, title: "The Human Guarantee", desc: "Not a chatbot. Not a call center. A real person in Galle who answers your calls." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div><h3 className="font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn><h2 className="section-title font-serif text-center">Popular routes from Sri Lanka</h2>
            <p className="section-subtitle mx-auto mb-12">Typical fare ranges. Message Ismail for exact pricing on your dates.</p></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {POPULAR_ROUTES.map((r, i) => (
              <FadeIn key={r.route} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center"><Plane className="w-3.5 h-3.5 text-red-600" /></div>
                    <h3 className="font-semibold text-gray-900 text-sm">{r.route}</h3>
                  </div>
                  <p className="text-sm text-red-600 font-semibold mb-1 ml-9">Typically {r.price}</p>
                  <p className="text-xs text-gray-400 ml-9">{r.airlines}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">Prices are typical ranges based on recent bookings. Actual fares depend on dates and availability.</p>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <FadeIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif">Ready to fly?</h2>
            <p className="text-red-100 mt-4 mb-8 text-lg">Tell us your route. We&apos;ll find the best options.</p></FadeIn>
          <FadeIn delay={0.2}>
            <WhatsAppButton context="flight" variant="large" className="!bg-white !text-red-700 hover:!bg-red-50 mx-auto shadow-lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
