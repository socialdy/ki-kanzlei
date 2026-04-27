import type { Metadata } from "next";
import Hotels from "@/views/Hotels";

export const metadata: Metadata = {
  title: "KI für Hotels & Hotellerie | KI Kanzlei Österreich",
  description:
    "KI-Lösungen für Hotels: Gästeservice-Chatbots, automatisiertes Revenue Management & Personalplanung. Mehr Effizienz trotz Fachkräftemangel. Jetzt anfragen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-hotels" },
};

export default function Page() {
  return <Hotels />;
}
