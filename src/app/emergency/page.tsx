"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Shield, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT, TRUST_STATS } from "@/lib/constants";

export default function EmergencyPage() {
  return (
    <>
      <section className="bg-red-600 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Phone className="w-14 h-14 mx-auto mb-5 text-white/80" />
          </motion.div>
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            24/7 Travel Rescue
          </motion.h1>
          <motion.p className="text-red-100 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Stranded? Flight cancelled? Visa rejected at the airport? Call us. Even if you didn&apos;t book with us.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <motion.div className="text-5xl font-bold text-gray-900 font-serif mb-4"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            {TRUST_STATS.tripsRescued}+
          </motion.div>
          <motion.p className="text-gray-500 text-lg mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            travellers rescued. And counting. We don&apos;t charge for emergencies — we fix them.
          </motion.p>

          <motion.div className="space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="btn-primary !bg-red-600 hover:!bg-red-700 !px-8 !py-4 !text-lg shadow-lg shadow-red-500/20 w-full sm:w-auto">
              <Phone className="w-5 h-5" /> Call {CONTACT.phone} Now
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <WhatsAppButton context="emergency" variant="large" className="shadow-lg shadow-green-500/20" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="section-title font-serif text-center mb-4">We handle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Phone, title: "Flight Cancellations", desc: "Airline cancelled your flight? We rebook you on the next available — often before the airline announces alternatives." },
              { icon: Shield, title: "Visa Emergencies", desc: "Visa rejected at the airport? We know the process, the contacts, and how to escalate fast." },
              { icon: Clock, title: "Midnight Rebookings", desc: "Stuck in transit at 3 AM? Call us. We answer. We rebook. We get you moving." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Don&apos;t wait until it happens</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Save our number now</h2>
          <p className="text-gray-400 mb-8">{CONTACT.phone} — put it in your phone. You never know when you&apos;ll need it.</p>
        </div>
      </section>
    </>
  );
}
