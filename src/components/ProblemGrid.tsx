import { Calendar, FileStack, Phone, Users, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Calendar,
    title: "Termin-Chaos",
    description: "Frau Schmidt ruft an: 'Können wir den Termin nächste Woche verschieben?' Sie checken Ihren Kalender, schlagen neue Termine vor, alles per Telefon. 20 Minuten später.",
    size: "large"
  },
  {
    icon: FileStack,
    title: "Papierberge",
    description: "Ihr Schreibtisch: Therapieberichte, Abrechnungen, Formulare. 'Wo war nochmal die Akte von Herrn Müller?' 15 Minuten Suchen.",
    size: "medium"
  },
  {
    icon: Phone,
    title: "Kommunikationsstress",
    description: "Mitten in der Therapie klingelt das Telefon. Patient wartet draußen, Anrufer will Termin. 'Entschuldigung, ich muss kurz...'",
    size: "medium"
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Ach ja, auf Instagram sollte ich auch noch einen Post machen. Und den Newsletter für nächste Woche... Aber wann?",
    size: "large"
  },
  {
    icon: FileText,
    title: "Dokumentenaufwand",
    description: "Neuer Patient: Vertrag ausdrucken, Formulare ausfüllen, Daten eintragen. 'Können Sie das nicht digital machen?'",
    size: "medium"
  },
  {
    icon: Brain,
    title: "Erinnerungen vergessen",
    description: "Patient: 'Sie haben mir doch gesagt, Sie rufen morgen an!' Sie: 'Ach ja, stimmt...' Post-it verloren, Termin vergessen.",
    size: "medium"
  }
];

export const ProblemGrid = () => {
  return (
    <section id="probleme" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Diese Probleme kennen Sie nur zu gut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Jeden Tag dasselbe Theater. Zeit, die Sie lieber mit Ihren Patienten verbringen würden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const sizeClasses = {
              small: "md:col-span-1 lg:col-span-1",
              medium: "md:col-span-1 lg:col-span-2", 
              large: "md:col-span-2 lg:col-span-3"
            };
            
            return (
              <div
                key={index}
                className={`group p-6 bg-background rounded-2xl border-2 border-border hover-lift cursor-pointer slide-up ${sizeClasses[problem.size as keyof typeof sizeClasses]}`}
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
        
        <div className="text-center mt-16 slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Sparen Sie <span className="text-primary font-bold">5-10 Stunden</span> pro Woche mit unseren Lösungen
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Termin vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
