import type { Metadata } from "next";
import Rechtsanwaelte from "@/views/Rechtsanwaelte";

export const metadata: Metadata = {
  title: "KI für Rechtsanwälte & Notare | KI Kanzlei",
  description:
    "DSGVO-konforme KI für Anwaltskanzleien: Rechtsrecherche, Dokumentenanalyse & Mandatsverwaltung automatisieren. 40% weniger Routineaufgaben. Jetzt anfragen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-rechtsanwaelte" },
};

export default function Page() {
  return <Rechtsanwaelte />;
}
