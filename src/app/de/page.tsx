import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Sri Lanka Flugtickets — Persönlicher Service", description: "Flugtickets, Sri Lanka Rundreisen und Firmentravel — persönlich betreut von Ihrem Reiseberater in Galle." };

export default function DePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Sri Lanka Reisen —<br /><span className="text-red-400">persönlich betreut</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Flugtickets, Rundreisen, Visum — Ihr persönlicher Reiseberater in Galle kümmert sich um alles.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Schreiben Sie Ismail auf WhatsApp</h2>
          <p className="text-gray-500 text-lg mb-8">Er spricht Englisch. Für komplexe Anfragen nutzen wir KI-Übersetzung, damit nichts verloren geht.</p>
          <WhatsAppButton context="general" prefill="Hallo Ismail! Ich interessiere mich für Reisen nach Sri Lanka. Können Sie mir helfen?" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
          <p className="text-xs text-gray-400 mt-4">Antwort normalerweise innerhalb von Minuten (SLST Geschäftszeiten)</p>
        </div>
      </section>
    </div>
  );
}
