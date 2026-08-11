"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

interface WhatsAppButtonProps {
  context?: string;
  prefill?: string;
  variant?: "default" | "large" | "floating";
  className?: string;
}

export default function WhatsAppButton({
  context = "general",
  prefill,
  variant = "default",
  className = "",
}: WhatsAppButtonProps) {
  const messages: Record<string, string> = {
    general: "Hi! I'd like some help with travel planning.",
    flight: "Hi! I'd like to get a flight quote.",
    tour: "Hi! I'm interested in a tour package.",
    corporate: "Hi! I'd like to discuss corporate travel for my company.",
    emergency: "URGENT: I need travel assistance immediately.",
    visa: "Hi! I need help with a visa application.",
    event: "Hi! I'm planning a group/event trip.",
    diaspora: "Hi! I'm looking for flights back to Sri Lanka.",
  };

  const message = prefill || messages[context] || messages.general;
  const encoded = encodeURIComponent(message);
  const link = `https://wa.me/${CONTACT.whatsapp}?text=${encoded}`;

  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.97]";

  const sizeClasses = {
    default: "px-5 py-2.5 text-sm",
    large: "px-8 py-4 text-base font-semibold",
    floating: "fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg hover:shadow-xl",
  };

  const label =
    context === "emergency"
      ? "Message Ismail NOW"
      : context === "flight"
        ? "Get flight options"
        : context === "corporate"
          ? "Talk to corporate desk"
          : "Message my agent";

  if (variant === "floating") {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${sizeClasses.floating} ${className}`}
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 25 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: [0, 12, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className={variant === "large" ? "w-5 h-5" : "w-4 h-4"} />
      <span>{label}</span>
    </motion.a>
  );
}
