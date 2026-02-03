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
    // Cal.com initialization snippet
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.q = cal.q || [];
          cal.t = +new Date();
          cal.loaded = true;
          let s = d.createElement("script");
          s.src = A;
          d.head.appendChild(s);
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "Cal");

    // Initialize Cal with default namespace
    window.Cal("init", { origin: "https://cal.com" });

    // Prepare UTM and attribution parameters
    const queryConfig: Record<string, string> = {
      theme: "light",
      transparent: "1",
    };

    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    utmParams.forEach(param => {
      if (attribution[param]) {
        queryConfig[param] = attribution[param] as string;
      }
    });

    // Inline embed configuration
    window.Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      config: queryConfig,
      calLink: "ki-kanzlei/kostenloses-analysegesprach",
    });

    window.Cal("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#3B82F6" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, [attribution]);

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
          <div id="my-cal-inline" style={{ width: "100%", height: "auto" }}></div>
        </div>
      </div>
    </section>
  );
};
