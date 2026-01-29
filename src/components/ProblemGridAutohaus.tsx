import { PhoneOff, Clock, ClipboardList, UserMinus, MessageSquare, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Engpässe in der Service-Annahme",
        description: "Besonders in Stoßzeiten sind Ihre Leitungen überlastet. Kunden hängen in der Warteschleife, was zu Frustration und verlorenen Werkstatt-Aufträgen führt.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Eingeschränkte Erreichbarkeit",
        description: "Kunden möchten Termine oft nach Feierabend buchen. Ohne eine automatisierte 24/7 Lösung verlieren Sie potenzielle Aufträge an die Konkurrenz.",
        size: "medium",
    },
    {
        icon: ClipboardList,
        title: "Hoher administrativer Aufwand",
        description: "Die manuelle Koordination von Werkstatt-Terminen am Telefon bindet wertvolle Ressourcen Ihrer Service-Berater für Routineaufgaben.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Ineffizientes Lead-Management",
        description: "Anfragen von Gebrauchtwagen-Portalen landen oft ungefiltert in den Postfächern. Die manuelle Nachverfolgung ist zeitaufwendig und fehleranfällig.",
        size: "large",
    },
    {
        icon: UserMinus,
        title: "Fachkräftemangel & Überlastung",
        description: "Qualifiziertes Personal für die Zentrale ist schwer zu finden. Bestehende Mitarbeiter sind durch repetitive Anfragen überlastet.",
        size: "medium",
    },
    {
        icon: Car,
        title: "Fragmentierte Informationen",
        description: "Rückfragen zum Reparaturstatus oder Fahrzeugdetails erfordern mühsame interne Recherchen, was die Reaktionszeit für den Kunden verlängert.",
        size: "medium",
    },
];

export const ProblemGridAutohaus = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen im modernen Autohaus
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Der Druck auf Service und Verkauf wächst. Wir automatisieren die Routineprozesse, damit Ihr Team wieder Zeit für die aktive Kundenberatung hat.
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
                        <a href="#contact">Kostenlose Potenzial-Analyse</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
