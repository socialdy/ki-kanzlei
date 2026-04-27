import type { Metadata } from "next";
import Fitness from "@/views/Fitness";

export const metadata: Metadata = {
  title: "KI Lösungen für Fitnessstudios | KI Kanzlei Österreich",
  description:
    "KI für Fitnessstudios: Mitgliederverwaltung, Marketing & Kursplanung automatisieren. Mehr Neumitglieder durch KI-Chatbots. Jetzt kostenlos beraten lassen!",
  alternates: { canonical: "https://ki-kanzlei.at/ki-loesungen-fitness" },
};

export default function Page() {
  return <Fitness />;
}
