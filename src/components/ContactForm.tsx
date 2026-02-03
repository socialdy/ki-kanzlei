import { useEffect } from "react";
import { getAttributionData } from "@/lib/analytics";

declare global {
  interface Window {
    Cal?: any;
  }
}

export const ContactForm = () => {
  const attribution = getAttributionData();

  // Construct Cal.com URL with prefilled UTM data, forced light theme and transparent background
  const getCalUrl = () => {
    const baseUrl = "https://cal.com/ki-kanzlei/kostenloses-analysegesprach";
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    const query = new URLSearchParams();

    // Force light theme and transparency
    query.set("theme", "light");
    query.set("transparent", "1");

    utmParams.forEach(param => {
      if (attribution[param]) {
        query.set(param, attribution[param]);
      }
    });

    const queryString = query.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Bereit für Ihr kostenloses Analysegespräch?
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            In 30 Minuten analysieren wir Ihre Praxisprozesse und zeigen Ihnen, wie Sie mit KI 8-10 Stunden pro Woche sparen können. Unverbindlich und kostenlos.
          </p>
        </div>

        <div className="w-full slide-up">
          <iframe
            src={getCalUrl()}
            className="cal-iframe"
            frameBorder="0"
            allowFullScreen
            title="Terminbuchung"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
