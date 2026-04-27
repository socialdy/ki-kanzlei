import type { Metadata } from "next";
import Hausverwaltung from "@/views/Hausverwaltung";

export const metadata: Metadata = {
  title: "KI Lösungen für Hausverwaltungen | KI Kanzlei Österreich",
  description:
    "KI für Hausverwaltungen: Mieteranfragen, Buchhaltung & Dokumentenverarbeitung automatisieren. Bis zu 95% automatische Bankbuchungen. Jetzt Demo anfordern!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-hausverwaltung" },
};

export default function Page() {
  return <Hausverwaltung />;
}
