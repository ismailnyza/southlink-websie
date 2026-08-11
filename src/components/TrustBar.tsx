"use client";

import { Shield, Star, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IATA, TRUST_STATS, CONTACT } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="sticky top-0 z-50 trust-bar">
      <div className="flex items-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-red-400" />
        <span className="font-semibold tracking-wide">IATA {IATA.number}</span>
      </div>

      <div className="hidden sm:flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        <span className="font-medium">
          {TRUST_STATS.googleRating} ★{" "}
          <span className="text-gray-400">({TRUST_STATS.googleReviews})</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1.5 text-gray-400">
        <span>{TRUST_STATS.ticketsBooked.toLocaleString()}+ tickets</span>
      </div>

      <Link
        href="/emergency"
        className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Phone className="w-3 h-3" />
        </motion.div>
        <span className="font-semibold text-xs">24/7 Rescue</span>
      </Link>

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm"
      >
        <MessageCircle className="w-3 h-3" />
        <span className="font-semibold text-xs">WhatsApp</span>
      </a>
    </div>
  );
}
