export const ContactForm = () => {
  const calUrl = "https://cal.com/ki-kanzlei/kostenloses-analysegesprach?embed=true&embed_domain=ki-kanzlei.at&theme=light&colorPrimary=%233B82F6&colorBackground=%23ffffff&colorText=%23374151&hideBranding=true";
  
  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Bereit für Ihr kostenloses Analysegespräch?
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            In 30 Minuten analysieren wir Ihre Praxisprozesse und zeigen Ihnen, wie Sie mit KI 12-15 Stunden pro Woche sparen können. Unverbindlich und kostenlos.
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
