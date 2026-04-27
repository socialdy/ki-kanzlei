import type { Metadata } from "next";
import Steuerberater from "@/views/Steuerberater";

export const metadata: Metadata = {
  title: "KI Lösungen für Steuerberater | KI Kanzlei Österreich",
  description:
    "KI für Steuerberater: Mandantenanfragen, Belegverarbeitung & Routineprozesse automatisieren. Mehr Zeit für Beratung statt Verwaltung. Jetzt Demo anfordern!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-steuerberater" },
};

export default function Page() {
  return <Steuerberater />;
}
