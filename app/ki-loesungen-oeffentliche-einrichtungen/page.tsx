import type { Metadata } from "next";
import OeffentlicheEinrichtungen from "@/views/OeffentlicheEinrichtungen";

export const metadata: Metadata = {
  title: "KI für öffentliche Verwaltung | KI Kanzlei Österreich",
  description:
    "KI-Lösungen für die öffentliche Verwaltung: Bürgeranfragen automatisieren, Dokumentenverarbeitung beschleunigen & Fachkräftemangel ausgleichen. Jetzt informieren!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-oeffentliche-einrichtungen" },
};

export default function Page() {
  return <OeffentlicheEinrichtungen />;
}
