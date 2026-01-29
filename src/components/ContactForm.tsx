import { useEffect } from "react";
import { getAttributionData } from "@/lib/analytics";

declare global {
  interface Window {
    Cal?: any;
  }
}

export const ContactForm = () => {
  const attribution = getAttributionData();

  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.q = [];
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const cand = ar[1];
            api.q = api.q || [];
            if (typeof cand === "string") {
              (api as any).ns = cand;
            }
            return api;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const cal = window.Cal("init", "kostenloses-analysegesprach", { origin: "https://cal.com" });

    cal("ui", {
      theme: "light",
      styles: {
        branding: { brandColor: "#3B82F6" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    cal("inline", {
      elementOrSelector: "#cal-inline",
      config: {
        name: "Kostenloses Analysegespräch",
        notes: "Analyse der Praxisprozesse",
        theme: "light",
      },
      calLink: "ki-kanzlei/kostenloses-analysegesprach",
    });

    // Pass attribution data to Cal.com
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    const prefill: any = {};
    utmParams.forEach(param => {
      if (attribution[param]) {
        prefill[param] = attribution[param];
      }
    });

    if (Object.keys(prefill).length > 0) {
      cal("patch", {
        calLink: "ki-kanzlei/kostenloses-analysegesprach",
        fragment: new URLSearchParams(prefill).toString(),
      });
    }
  }, [attribution]);

  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Bereit für Ihr kostenloses Analysegespräch?
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            In 30 Minuten analysieren wir Ihre Praxisprozesse und zeigen Ihnen, wie Sie mit KI 8-10 Stunden pro Woche sparen können. Unverbindlich und kostenlos.
          </p>
        </div>

        <div className="relative w-full slide-up min-h-[600px] bg-white rounded-2xl shadow-lg border border-border">
          <div id="cal-inline" style={{ width: "100%", height: "100%", minHeight: "600px" }} />
        </div>
      </div>
    </section>
  );
};
