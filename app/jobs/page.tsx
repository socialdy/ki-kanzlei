import type { Metadata } from "next";
import Jobs from "@/views/Jobs";

export const metadata: Metadata = {
  title: "Karriere bei der KI Kanzlei – Jobs in Österreich & Remote",
  description:
    "Karriere bei der KI Kanzlei. Entdecken Sie spannende Freelance-Möglichkeiten im Bereich KI-Vertrieb und n8n-Entwicklung. Arbeiten Sie an der Zukunft der Automatisierung.",
  alternates: { canonical: "https://ki-kanzlei.at/jobs" },
};

export default function Page() {
  return <Jobs />;
}
