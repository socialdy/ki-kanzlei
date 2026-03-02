import { FileText, Search, Clock, Scale, MessageSquare, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: FileText,
        title: "Hunderte Seiten pro Fall – und kaum Zeit",
        description: "Akten durcharbeiten, relevante Stellen finden, nichts übersehen. Das kostet Stunden, die eigentlich für die juristische Arbeit fehlen.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Termine koordinieren statt arbeiten",
        description: "Hin- und Hertelefonieren für Erstberatungen blockiert Ihr Team und verzögert die Mandatsaufnahme unnötig.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Anfragen, die nicht passen",
        description: "Viele Erstkontakte passen nicht zum Fachgebiet oder sind rechtlich nicht aussichtsreich. Die Vorprüfung frisst trotzdem Zeit.",
        size: "medium",
    },
    {
        icon: Search,
        title: "Urteile suchen, Stunden verlieren",
        description: "In alten Akten und internen Archiven nach Präzedenzfällen suchen – das dauert oft Stunden und lässt sich kaum fakturieren.",
        size: "large",
    },
    {
        icon: ShieldAlert,
        title: "KI klingt gut – aber was ist mit DSGVO?",
        description: "Viele KI-Tools sind für sensible Mandantendaten schlicht ungeeignet. Ohne sichere Lösung bleibt alles beim Alten.",
        size: "medium",
    },
    {
        icon: Scale,
        title: "Verwaltung statt Jura",
        description: "Standard-Korrespondenz, Fristenkontrolle, E-Mails beantworten – Routineaufgaben, die eigentlich kein Jurist machen sollte.",
        size: "medium",
    },
];

export const ProblemGridRechtsanwaelte = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Diese Probleme kennen Sie aus dem Kanzleialltag
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Jeden Tag dieselben administrativen Aufgaben. Zeit, die Sie lieber für Ihre Mandanten nutzen würden.
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
