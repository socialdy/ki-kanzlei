import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog | KI-Insights & Best Practices",
  description:
    "KI-Insights, Best Practices und Case Studies rund um KI-Automatisierung für Unternehmen. Bleiben Sie auf dem Laufenden mit KI Kanzlei.",
  alternates: { canonical: "https://ki-kanzlei.at/blog" },
};

export default function Page() {
  return <Blog />;
}
