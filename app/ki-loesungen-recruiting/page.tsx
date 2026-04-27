import type { Metadata } from "next";
import Recruiting from "@/views/Recruiting";

export const metadata: Metadata = {
  title: "KI Lösungen für Recruiting | KI Kanzlei Österreich",
  description:
    "KI im Recruiting: Bewerbungen automatisch screenen, Kandidaten qualifizieren & Prozesse beschleunigen. Für HR-Teams & Personalagenturen. Jetzt beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-recruiting" },
};

export default function Page() {
  return <Recruiting />;
}
