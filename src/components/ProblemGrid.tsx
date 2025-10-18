import { PhoneOff, FileStack, DollarSign, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Verlorene Anrufe & Patienten",
    description: "Von 9-17 Uhr in Sessions – Anfragen gehen verloren. Bis zu 30% der potenziellen Patienten erreichen dich nicht."
  },
  {
    icon: FileStack,
    title: "Papierflut & Administration",
    description: "8-10 Stunden pro Woche nur für Terminverwaltung, Anamnesebogen, Dokumentation. Pure Zeitverschwendung."
  },
  {
    icon: DollarSign,
    title: "Hohe Betriebskosten",
    description: "Sekretariat, Verwaltung – oft underutilized. 30-40% des Budgets geht in Administration."
  },
  {
    icon: ShieldAlert,
    title: "Datenschutz & Compliance",
    description: "DSGVO, Sicherheit, Haftung – kompliziert zu handhaben. Ständige Angst vor Strafen."
  }
];

export const ProblemGrid = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kennen Sie diese Herausforderungen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Psychotherapie-Praxen verschwenden durchschnittlich 15-40 Stunden pro Woche mit administrativen Aufgaben
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-background rounded-2xl border-2 border-border hover-lift cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
