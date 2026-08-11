"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane, Map, Globe, Briefcase, Users, Car, Star, ArrowRight,
  Shield, Phone, HeartHandshake, ChevronRight, Sparkles, Compass,
} from "lucide-react";
import FlightPlanner from "@/components/FlightPlanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GUARANTEE_POINTS, TRUST_STATS, SERVICES, CONTACT, CORPORATE_TIERS } from "@/lib/constants";

/* ── Scroll-triggered fade-in ── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════ HERO — Split Path ═══════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-white">
        {/* Left — Self-Serve */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-10 py-16 lg:py-0 bg-white">
          <motion.div
            className="w-full max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              I know what I want
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-3 font-serif leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Find your flight.
              <br />
              <span className="text-red-600">Handled by a person.</span>
            </motion.h1>

            <motion.p
              className="text-gray-500 mt-4 mb-8 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Search your route. Get options from a real agent — not an algorithm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <FlightPlanner />
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:flex flex-col items-center justify-center px-2 bg-gray-50">
          <motion.div
            className="bg-white rounded-full p-3 shadow-sm border border-gray-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">OR</span>
          </motion.div>
          <motion.div
            className="w-px h-12 bg-gray-200 mt-2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          />
        </div>

        {/* Mobile Divider */}
        <div className="flex lg:hidden items-center justify-center py-5 bg-gray-50">
          <motion.div
            className="bg-white rounded-full px-6 py-2 shadow-sm border border-gray-200"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          >
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">— OR —</span>
          </motion.div>
        </div>

        {/* Right — Concierge */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-10 py-16 lg:py-0 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.08),transparent_60%)]" />
          <motion.div
            className="w-full max-w-lg text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-400"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Help me decide
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 font-serif leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Not sure where
              <br />
              to start?
            </motion.h2>

            <motion.p
              className="text-gray-400 mt-4 mb-6 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Tell Ismail what you need. He&apos;ll find the best flights, suggest routes, and handle everything — from booking to boarding.
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="space-y-3 mb-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { delayChildren: 0.6, staggerChildren: 0.1 } } }}
            >
              {[
                "No search fatigue — describe once, we deliver",
                "Multi-city & complex itineraries our specialty",
                "Visa, transit, baggage — all handled",
                "Changes & emergencies? One WhatsApp message",
              ].map((benefit) => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-3 text-gray-300"
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-600/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
              <WhatsAppButton
                context="general"
                prefill="Hi Ismail! I'm looking to travel and could use your help. Here's what I have in mind..."
                variant="large"
                className="bg-white !text-gray-900 hover:!bg-gray-100 shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════ TRUST ROW ═══════════════════════════ */}
      <section className="py-6 sm:py-8 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-sm text-gray-600">
            {[
              { icon: Shield, text: "IATA Certified", strong: `#42350934`, color: "text-red-600" },
              { icon: Star, text: null, strong: `${TRUST_STATS.googleRating} ★ (${TRUST_STATS.googleReviews} reviews)`, color: "text-amber-500 fill-amber-400" },
              { icon: Plane, text: null, strong: `${TRUST_STATS.ticketsBooked.toLocaleString()}+ tickets booked`, color: "text-red-600" },
              { icon: HeartHandshake, text: null, strong: `${TRUST_STATS.tripsRescued} trips rescued`, color: "text-red-600" },
            ].map(({ icon: Icon, text, strong, color }, i) => (
              <motion.div
                key={i} className="flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span>{text && `${text} `}<strong className="text-gray-900">{strong}</strong></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ GUARANTEE ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="section-label">Peace of Mind</span>
            <h2 className="section-title font-serif mt-2 mb-4">
              The Southlink <span className="text-red-600">Guarantee</span>
            </h2>
            <p className="section-subtitle mx-auto mb-12">
              Your flight is more than a ticket. It&apos;s peace of mind. When things go wrong — and in travel, they do — we don&apos;t hide behind a chatbot.
            </p>
          </FadeIn>

          <div className="space-y-3 text-left">
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

          <FadeIn delay={0.4}>
            <Link href="/trust" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm mt-8 group">
              Read the full guarantee
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════ SERVICES ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="section-container">
          <FadeIn>
            <span className="section-label text-center block">Our Services</span>
            <h2 className="section-title font-serif mt-2">Everything we handle</h2>
            <p className="section-subtitle mx-auto mb-14">One agent. One WhatsApp message. Everything travel.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.href} delay={i * 0.06}>
                <Link href={service.href} className="card p-6 block group">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-red-600 text-sm font-medium group-hover:gap-1.5 transition-all">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CORPORATE ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-900 text-white">
        <div className="section-container max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-400">For Businesses</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mt-2 text-white">
              Corporate travel, done right
            </h2>
            <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Credit terms. 24/7 re-routing. Visa handling. A dedicated agent who knows your team by name.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 text-left">
            {CORPORATE_TIERS.map((pkg, i) => (
              <FadeIn key={pkg.title} delay={i * 0.12}>
                <div className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-red-600/10 border-red-500/30 ring-1 ring-red-500/20"
                    : "bg-gray-800 border-gray-700"
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-bold text-white mb-2 text-lg">{pkg.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pkg.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <Link href="/corporate" className="btn-primary">
              Explore corporate packages <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════ DIASPORA ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="section-label">For Sri Lankans Abroad</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 font-serif leading-tight">
              Flying home?<br />
              <span className="text-red-600">We handle everything.</span>
            </h2>
            <p className="text-gray-500 mt-4 mb-8 text-base sm:text-lg leading-relaxed">
              Whether it&apos;s for a wedding, a funeral, or just coming home — we know the routes, the airlines, and the best ways to get you back to Sri Lanka.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/diaspora" className="btn-primary">
              Flying Home services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════ EMERGENCY ═══════════════════════════ */}
      <section className="py-20 sm:py-28 bg-red-600 text-white">
        <div className="section-container max-w-3xl mx-auto text-center">
          <FadeIn>
            <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Phone className="w-12 h-12 mx-auto mb-5 text-white/80" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif">
              Stranded? Flight cancelled?
            </h2>
            <p className="text-red-100 mt-4 mb-10 text-base sm:text-lg leading-relaxed">
              Call us. Even if you didn&apos;t book with us. We&apos;ve rescued{" "}
              <strong className="text-white">{TRUST_STATS.tripsRescued}+</strong> travellers.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-red-600 rounded-full font-bold hover:bg-red-50 transition-all duration-200 shadow-lg active:scale-[0.97]">
                <Phone className="w-5 h-5" />Call {CONTACT.phone}
              </a>
              <WhatsAppButton context="emergency" variant="default"
                className="!bg-green-500 hover:!bg-green-600 !text-base !py-3.5 !px-7 shadow-lg" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-red-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">Ready when you are</h2>
            <p className="text-gray-500 mt-3 mb-8 text-base sm:text-lg">Your personal travel agent is one message away.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <WhatsAppButton context="general" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xs text-gray-400 mt-4">Typically responds within minutes during business hours (SLST)</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const cls = "w-5 h-5 text-red-600";
  switch (icon) {
    case "plane": return <Plane className={cls} />;
    case "map": return <Map className={cls} />;
    case "globe": return <Globe className={cls} />;
    case "briefcase": return <Briefcase className={cls} />;
    case "users": return <Users className={cls} />;
    case "car": return <Car className={cls} />;
    default: return <Compass className={cls} />;
  }
}
