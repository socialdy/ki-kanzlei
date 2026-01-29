import { PhoneOff, Hammer, ClipboardList, PenSquare, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Anrufe auf der Baustelle",
        description: "Ihre Profis stehen auf der Leiter oder an der Maschine. Verpasste Anrufe bedeuten verlorene Aufträge und unzufriedene Kunden.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Notfälle nach Feierabend",
        description: "Ein Rohrbruch wartet nicht auf Geschäftszeiten. Ohne 24/7 Erreichbarkeit wandern lukrative Notdienst-Aufträge zur Konkurrenz.",
        size: "medium",
    },
    {
        icon: ClipboardList,
        title: "Abends noch Büroarbeit",
        description: "Nach acht Stunden körperlicher Arbeit noch Termine koordinieren und Anfragen beantworten führt zu Dauerstress und Fehlern.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Unqualifizierte Anfragen",
        description: "Viel Zeit geht für Anrufe drauf, die gar nicht zu Ihrem Fachgebiet passen. Vorab-Filterung findet am Telefon bisher kaum statt.",
        size: "large",
    },
    {
        icon: Hammer,
        title: "Störungen im Workflow",
        description: "Ständige Telefonunterbrechungen reißen Ihre Handwerker aus der Konzentration und verlängern die Projektdauer.",
        size: "medium",
    },
    {
        icon: PenSquare,
        title: "Mühsame Angebotserstellung",
        description: "Das Sammeln von Infos für Standard-Angebote bindet qualifizierte Meister-Ressourcen in der Administration.",
        size: "medium",
    },
];

export const ProblemGridHandwerker = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Wo Handwerksbetriebe Zeit und Geld verlieren
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Das Handwerk hat goldenen Boden – aber die Bürokratie hält es am Boden. Wir lösen den Knoten mit intelligenter KI-Automatisierung.
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
                    <Button size="lg" asChild>
                        <a href="#contact">Kostenloses Analysegespräch vereinbaren</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
