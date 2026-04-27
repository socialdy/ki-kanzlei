import type { Metadata } from "next";
import Autohaus from "@/views/Autohaus";

export const metadata: Metadata = {
  title: "KI im Autohaus – Automatisierung | KI Kanzlei Österreich",
  description:
    "KI-Lösungen für Autohäuser: Intelligente Telefonassistenten, automatisierte Lead-Qualifizierung & Werkstattdokumentation. Für KMU im Autohandel. Jetzt starten!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-autohaus" },
};

export default function Page() {
  return <Autohaus />;
}
