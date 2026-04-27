import type { Metadata } from "next";
import Aerzte from "@/views/Aerzte";

export const metadata: Metadata = {
  title: "KI in der Arztpraxis – Lösungen | KI Kanzlei Österreich",
  description:
    "KI für Arztpraxen: Spracherkennung, automatisierte Dokumentation & intelligente Terminverwaltung. Bis zu 10h/Woche sparen. DSGVO-konform. Jetzt Demo anfragen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-aerzte" },
};

export default function Page() {
  return <Aerzte />;
}
