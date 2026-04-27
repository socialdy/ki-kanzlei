import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "KI Kanzlei – KI-Automatisierung für Unternehmen | Österreich",
  description:
    "KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. Von Wissensdatenbanken bis KI-Agenten – DSGVO-konform & einsatzbereit in 30 Tagen. Jetzt beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/" },
};

export default function Page() {
  return <Home />;
}
