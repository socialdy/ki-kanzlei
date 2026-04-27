import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "KI Lösungen für Psychotherapeuten | KI Kanzlei Österreich",
  description:
    "KI für Psychotherapeuten: Dokumentation, Terminverwaltung & Abrechnung automatisieren. DSGVO-konform. Sparen Sie bis zu 10h/Woche. Jetzt kostenlos beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-psychotherapeuten" },
};

export default function Page() {
  return <Index />;
}
