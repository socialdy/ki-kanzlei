import { Brain, Linkedin, TrendingUp, Mail, Instagram, Users } from "lucide-react";

const useCases = [
  {
    icon: Brain,
    title: "KI Wissensdatenbank",
    description: "Ihre Dokumente, FAQs und internes Wissen werden durchsuchbar. Der Agent findet sofort die richtige Antwort – ob für Kundenanfragen oder interne Fragen. Kein langes Suchen mehr in PDFs und E-Mails.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Outreach",
    description: "Findet passende Kontakte, analysiert Profile und schreibt personalisierte Nachrichten. Von der ersten Kontaktaufnahme bis zum Follow-up – alles automatisch. Sie sparen Stunden bei der Akquise.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Analysiert Ihre Website, findet passende Keywords und erstellt optimierte Inhalte. Ihr Ranking verbessert sich kontinuierlich, ohne dass Sie ständig selbst recherchieren müssen.",
  },
  {
    icon: Mail,
    title: "Email Outreach",
    description: "Personalisierte E-Mails auf Autopilot. Der Agent segmentiert Ihre Kontakte, schreibt passende Nachrichten und kümmert sich um Follow-ups. Mehr Conversions, weniger Aufwand.",
  },
  {
    icon: Instagram,
    title: "Social Media Content",
    description: "Erstellt Posts, Stories und Captions für alle Ihre Kanäle. Immer zur richtigen Zeit, immer im richtigen Ton. Konsistente Präsenz ohne dass Sie jeden Tag selbst Content erstellen müssen.",
  },
  {
    icon: Users,
    title: "CRM Datenlieferer",
    description: "Sammelt automatisch Kontaktdaten aus Google Maps, Websites und anderen Quellen. Füllt Ihr CRM mit qualifizierten Leads – ohne manuelles Suchen und Eintippen.",
  },
];

export const UseCasesHome = () => {
  return (
    <section id="loesungen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unsere KI‑Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automatisierte Lösungen, die Ihr Unternehmen voranbringen
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover-lift cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            DSGVO‑konform, messbar, schnell einsatzbereit
          </p>
        </div>
      </div>
    </section>
  );
};

