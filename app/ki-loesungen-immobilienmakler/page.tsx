import type { Metadata } from "next";
import Immobilienmakler from "@/views/Immobilienmakler";

export const metadata: Metadata = {
  title: "KI Lösungen für Immobilienmakler | KI Kanzlei Österreich",
  description:
    "KI für Immobilienmakler: Exposés automatisch erstellen, Leads qualifizieren & Immobilienbewertung mit KI. Mehr Abschlüsse, weniger Aufwand. Jetzt beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-immobilienmakler" },
};

export default function Page() {
  return <Immobilienmakler />;
}
