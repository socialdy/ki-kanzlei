import { Clock, FileText, MessageSquare, Users, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Clock,
    title: "Zeitfressende manuelle Aufgaben",
    description: "Stundenlang Daten eingeben, E-Mails beantworten, Berichte erstellen – während Ihr eigentliches Unternehmen wartet.",
    size: "large",
  },
  {
    icon: MessageSquare,
    title: "Kommunikation überfordert",
    description: "E-Mails, Social Media, Telefon – zu viele Kanäle, zu wenig Zeit. Wichtige Anfragen gehen unter.",
    size: "medium",
  },
  {
    icon: FileText,
    title: "Content-Erstellung kostet Zeit",
    description: "Blogs, Social-Media-Posts, Newsletter – Content-Erstellung frisst Stunden, die Sie lieber für Kunden nutzen würden.",
    size: "medium",
  },
  {
    icon: Users,
    title: "Lead-Generierung manuell",
    description: "LinkedIn, E-Mail-Outreach, Follow-ups – alles händisch. Akquise wird zur Nebentätigkeit statt zum Wachstumstreiber.",
    size: "large",
  },
  {
    icon: TrendingDown,
    title: "Datenchaos statt Übersicht",
    description: "Informationen verstreut in verschiedenen Systemen, keine zentrale Wissensbasis. Wichtige Daten sind schwer auffindbar.",
    size: "medium",
  },
  {
    icon: Zap,
    title: "Prozesse nicht automatisiert",
    description: "Wiederkehrende Aufgaben, die sich automatisieren ließen, werden weiterhin manuell erledigt – Tag für Tag.",
    size: "medium",
  },
];

export const ProblemGridHome = () => {
  return (
    <section id="probleme" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Diese Probleme kennen Sie nur zu gut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Jeden Tag dieselben manuellen Aufgaben. Zeit, die Sie lieber für Ihr Unternehmen nutzen würden.
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
            Ziel: Automatisierung, die Zeit spart und Ihr Unternehmen voranbringt
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Analysegespräch vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

