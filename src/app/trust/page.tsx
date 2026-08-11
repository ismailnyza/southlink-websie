"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Star, HeartHandshake, BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IATA, TRUST_STATS, GUARANTEE_POINTS } from "@/lib/constants";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function TrustPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            The Southlink Guarantee
          </motion.h1>
          <motion.p className="text-gray-400 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Your flight is more than a ticket. It&apos;s peace of mind — backed by {TRUST_STATS.yearsInBusiness}+ years of keeping promises.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="section-title font-serif text-center">Our promises to you</h2>
            <p className="section-subtitle mx-auto mb-12">
              When things go wrong — and in travel, they do — we don&apos;t hide behind a chatbot or call center script.
            </p>
          </FadeIn>
          <div className="space-y-4">
            {GUARANTEE_POINTS.map((point, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300 group">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                    <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn><h2 className="section-title font-serif text-center">Credentials & Certifications</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Shield, title: "IATA Certified", desc: `License #${IATA.number}`, detail: "Internationally recognized accreditation. Your money and ticket are protected." },
              { icon: Award, title: "SLTDA Registered", desc: "Tour operator license", detail: "Licensed by the Sri Lanka Tourism Development Authority." },
              { icon: Clock, title: `${TRUST_STATS.yearsInBusiness}+ Years`, desc: "Established in Galle", detail: "The first travel agency in Southern Sri Lanka. Not a startup — an institution." },
            ].map(({ icon: Icon, title, desc, detail }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm font-medium text-red-600 mb-2">{desc}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
            </div>
            <h2 className="section-title font-serif">{TRUST_STATS.googleRating} ★ on Google</h2>
            <p className="section-subtitle mx-auto">{TRUST_STATS.googleReviews} reviews and counting. Real travellers. Real experiences.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/trust/reviews" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mt-6">
              Read our reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="section-container max-w-xl mx-auto text-center">
          <FadeIn><h2 className="text-2xl sm:text-3xl font-bold font-serif mb-5">Ready to book with confidence?</h2></FadeIn>
          <FadeIn delay={0.2}>
            <WhatsAppButton context="general" variant="large" className="!bg-white !text-red-700 hover:!bg-red-50 mx-auto shadow-lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
