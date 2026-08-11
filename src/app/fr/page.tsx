import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Billets d'avion Sri Lanka — Service Personnalisé", description: "Billets d'avion, circuits au Sri Lanka et voyages d'affaires — gérés personnellement par votre agent à Galle." };

export default function FrPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Voyages au Sri Lanka —<br /><span className="text-red-400">accompagnement personnel</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">Billets d&apos;avion, circuits, visas — votre agent dédié à Galle s&apos;occupe de tout.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">Écrivez à Ismail sur WhatsApp</h2>
          <p className="text-gray-500 text-lg mb-8">Il parle anglais. Pour les demandes complexes, nous utilisons la traduction IA.</p>
          <WhatsAppButton context="general" prefill="Bonjour Ismail! Je suis intéressé par un voyage au Sri Lanka. Pouvez-vous m'aider?" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
          <p className="text-xs text-gray-400 mt-4">Réponse généralement en quelques minutes (heures de bureau SLST)</p>
        </div>
      </section>
    </div>
  );
}
