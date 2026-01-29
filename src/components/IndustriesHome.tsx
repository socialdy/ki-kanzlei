import { Building2, Heart, Hotel, Briefcase, ShoppingBag, GraduationCap, Home, Car, Hammer, Stethoscope, Users, Dumbbell, ShieldCheck } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Ärzte & Spezialisten",
    description: "Ordinations-Entlastung, Terminbuchung, Patienten-Triage rund um die Uhr.",
    link: "/ki-loesungen-aerzte",
  },
  {
    icon: Heart,
    title: "Psychotherapie",
    description: "Terminverwaltung, Dokumentation, Klientenkommunikation – alles automatisiert.",
    link: "/ki-loesungen-psychotherapeuten",
  },
  {
    icon: Hotel,
    title: "Hotels & Gastronomie",
    description: "KI-Abendrezeptionist, Buchungsautomatisierung, Multi-Channel-Management.",
    link: "/ki-loesungen-hotels",
  },
  {
    icon: Briefcase,
    title: "Rechtsanwälte & Notare",
    description: "Lead-Generierung, Terminplanung, Follow-up-Automatisierung.",
    link: "/ki-loesungen-rechtsanwaelte",
  },
  {
    icon: Users,
    title: "Recruiting & HR",
    description: "Automatisches Bewerber-Screening, Voice-Interviews & Sourcing.",
    link: "/ki-loesungen-recruiting",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Kundenkommunikation, Bestellabwicklung, Social-Media-Automatisierung.",
    link: "/ki-loesungen-ecommerce",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "Mitglieder-Wachstum, automatisierte Probetrainings & Feedback-Loops.",
    link: "/ki-loesungen-fitness",
  },
  {
    icon: Building2,
    title: "Öffentliche Einrichtungen & Verwaltung",
    description: "KI-Sekretariat, automatisierte Bürger-Anfragen & Prozess-Entlastung.",
    link: "/ki-loesungen-oeffentliche-einrichtungen",
  },
  {
    icon: Building2,
    title: "Hausverwaltung",
    description: "KI-Mieter-Hotline, Liegenschafts-Wissen, automatisierte Schadensmeldungen.",
    link: "/ki-loesungen-hausverwaltung",
  },
  {
    icon: Home,
    title: "Immobilienmakler",
    description: "24/7 Lead-Qualifizierung, automatisierte Besichtigungstermine, Exposé-Assistenz.",
    link: "/ki-loesungen-immobilienmakler",
  },
  {
    icon: Car,
    title: "Autohaus",
    description: "Service-Annahme, Werkstatt-Termine, 24/7 Lead-Management im Verkauf.",
    link: "/ki-loesungen-autohaus",
  },
  {
    icon: Hammer,
    title: "Handwerker",
    description: "24/7 KI-Notfalltelefon, automatisierte Terminbuchung & Büro-Entlastung.",
    link: "/ki-loesungen-handwerker",
  },
  {
    icon: Briefcase,
    title: "Steuerberater",
    description: "BMD/DATEV-Anbindung, automatisierte Belegverarbeitung & Klienten-Support.",
    link: "/ki-loesungen-steuerberater",
  },
  {
    icon: ShieldCheck,
    title: "Versicherungsmakler",
    description: "24/7 Schadensmeldungen, Polizzen-Analyse & automatisierte Lead-Qualifizierung.",
    link: "/ki-loesungen-versicherungsmakler",
  },
  {
    icon: Building2,
    title: "Weitere Branchen",
    description: "Wir passen unsere Lösungen an Ihre spezifischen Anforderungen an.",
  },
];

export const IndustriesHome = () => {
  return (
    <section id="branchen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Für welche Branchen wir arbeiten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Von Psychotherapie bis E-Commerce – wir automatisieren Prozesse in verschiedenen Branchen
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const content = (
              <div className="group p-6 bg-card rounded-2xl border border-border hover-lift cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );

            return industry.link ? (
              <a key={index} href={industry.link} className="block h-full">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};





