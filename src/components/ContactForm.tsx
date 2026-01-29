import { getAttributionData } from "@/lib/analytics";

export const ContactForm = () => {
  const attribution = getAttributionData();

  // Create URL object to safely append parameters
  const baseUrl = "https://cal.com/ki-kanzlei/kostenloses-analysegesprach";
  const url = new URL(baseUrl);

  // Default parameters
  url.searchParams.set("embed", "true");
  url.searchParams.set("embed_domain", "ki-kanzlei.at");
  url.searchParams.set("theme", "light");
  url.searchParams.set("colorPrimary", "#3B82F6");
  url.searchParams.set("colorBackground", "#f8fafc");
  url.searchParams.set("colorText", "#374151");
  url.searchParams.set("colorAccent", "#3B82F6");
  url.searchParams.set("colorAccentHover", "#2563eb");
  url.searchParams.set("hideBranding", "true");

  // Append UTMs if available
  const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
  utmParams.forEach(param => {
    if (attribution[param]) {
      url.searchParams.set(param, attribution[param]);
    }
  });

  const calUrl = url.toString();

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

        <div className="relative w-full slide-up">
          <iframe
            src={calUrl}
            width="100%"
            height="700"
            frameBorder="0"
            title="Terminbuchung"
            className="w-full rounded-2xl shadow-lg h-[600px] md:h-[700px]"
            style={{
              border: 'none',
              minHeight: '500px'
            }}
          />
        </div>
      </div>
    </section>
  );
};
