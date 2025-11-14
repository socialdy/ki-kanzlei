import { PhoneOff, ClipboardList, PenSquare, Info, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: PhoneOff,
    title: "Abend- & Nachtanrufe bleiben liegen",
    description: "22:00 Uhr klingelt das Telefon – Nachtdienst? Fehlanzeige. Gäste landen auf der Mailbox, wichtige Anfragen warten bis zum Morgen, Beschwerden eskalieren.",
    size: "large",
  },
  {
    icon: ClipboardList,
    title: "Verfügbarkeiten werden manuell geprüft",
    description: "Zwischen Telefon, Buchungssystem und Excel hin- und herwechseln, Preise nachschlagen, Zimmer blocken – während der nächste Gast bereits wartet.",
    size: "medium",
  },
  {
    icon: PenSquare,
    title: "Spezialangebote manuell erfassen",
    description: "Tagung, Hochzeit, Gutschein? Sie setzen das Angebot von Grund auf auf, füllen PDFs und E-Mails – pro Anfrage wieder 20 Minuten Bildschirmzeit statt Gästebetreuung.",
    size: "medium",
  },
  {
    icon: Info,
    title: "Standardfragen rauben Fokus",
    description: "Frühstück, Parkplatz, Spa-Zeiten, Late Check-out – dieselben Antworten über Telefon, WhatsApp und E-Mail. Die Rezeption steckt im Fragenloop fest, Check-in bleibt liegen.",
    size: "large",
  },
  {
    icon: RefreshCw,
    title: "Umbuchungen & Stornos kosten Morgenstunden",
    description: "Nächte verschieben, Stornos abwickeln, Karten prüfen – alles manuell im Buchungssystem. Jeder Vorgang frisst 10 Minuten, der Vormittag ist dahin.",
    size: "medium",
  },
  {
    icon: MessageSquare,
    title: "Kanäle jonglieren statt Gäste betreuen",
    description: "Instagram, WhatsApp, Booking.com, Website – jede Anfrage braucht Antwort, Preis, PDF. Sie jonglieren Chats und Buchungssystem, während der Gast vor Ihnen wartet.",
    size: "medium",
  },
];

export const ProblemGridHotels = () => {
  return (
    <section id="probleme" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Diese Probleme kennen Sie nur zu gut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Jeden Tag derselbe Wahnsinn an der Rezeption. Zeit, die Sie lieber Ihren Gästen widmen würden.
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
            Ziel: zuverlässige Gästekommunikation – ohne zusätzlichen Personalaufwand
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Analysegespräch vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};


