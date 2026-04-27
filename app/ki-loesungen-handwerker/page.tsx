import type { Metadata } from "next";
import Handwerker from "@/views/Handwerker";

export const metadata: Metadata = {
  title: "KI im Handwerk – Lösungen für Betriebe | KI Kanzlei",
  description:
    "KI für Handwerksbetriebe: Automatisierte Angebotserstellung, Terminplanung & Kundenkommunikation. Weniger Büro, mehr Handwerk. Jetzt kostenlos beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-handwerker" },
};

export default function Page() {
  return <Handwerker />;
}
