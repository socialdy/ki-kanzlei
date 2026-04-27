import type { Metadata } from "next";
import Versicherungsmakler from "@/views/Versicherungsmakler";

export const metadata: Metadata = {
  title: "KI Lösungen für Versicherungsmakler | KI Kanzlei Österreich",
  description:
    "KI für Versicherungsmakler: E-Mails automatisch verarbeiten, Cross-Selling erkennen & Schadenmeldungen beschleunigen. Weniger Admin. Jetzt starten!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-versicherungsmakler" },
};

export default function Page() {
  return <Versicherungsmakler />;
}
