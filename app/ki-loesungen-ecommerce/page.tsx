import type { Metadata } from "next";
import Ecommerce from "@/views/Ecommerce";

export const metadata: Metadata = {
  title: "KI im E-Commerce & Online-Handel | KI Kanzlei Österreich",
  description:
    "KI für E-Commerce: Produktempfehlungen, Kundenservice-Chatbots & Lagerverwaltung automatisieren. Mehr Umsatz, weniger Retouren. Jetzt anfragen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-ecommerce" },
};

export default function Page() {
  return <Ecommerce />;
}
