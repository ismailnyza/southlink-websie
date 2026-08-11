import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Southlink Travels — Flights, Tours & Corporate Travel | Galle, Sri Lanka",
    template: "%s | Southlink Travels",
  },
  description:
    "IATA-certified travel agency in Galle, Sri Lanka. Flight bookings, Sri Lanka tours, corporate travel, visa assistance, and 24/7 emergency support. Handled by your agent, not a system.",
  metadataBase: new URL("https://southlinktravels.com"),
  openGraph: {
    type: "website",
    siteName: "Southlink Travels",
    title: "Southlink Travels — Travel, handled personally.",
    description:
      "Flights, Sri Lanka experiences, and corporate travel — handled personally by a dedicated agent based in Galle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southlink Travels — Travel, handled personally.",
    description:
      "Flights handled by your agent. Not a system. IATA certified, Galle-based.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        <TrustBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AIChat />
        <WhatsAppButton variant="floating" context="general" />
      </body>
    </html>
  );
}
