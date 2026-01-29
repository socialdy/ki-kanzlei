import { Users, ClipboardList, MessageSquare, Clock, Landmark, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: MessageSquare,
        title: "Flut an Bürgeranfragen",
        description: "Bürger stellen täglich die gleichen Fragen zu Öffnungszeiten, Fristen und benötigten Unterlagen. Ihr Team in der Verwaltung kommt kaum noch zu den Kernaufgaben.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Lange Wartezeiten",
        description: "Die Terminvergabe und Bearbeitung von Standardanträgen erfolgt oft noch manuell, was zu Unmut bei Bürgern und Überlastung der Mitarbeiter führt.",
        size: "medium",
    },
    {
        icon: Users,
        title: "Fehlende Barrierefreiheit",
        description: "Informationen sind oft schwer zugänglich oder nur während der Dienstzeiten abrufbar. Es fehlt ein digitaler Ansprechpartner rund um die Uhr.",
        size: "medium",
    },
    {
        icon: Landmark,
        title: "Fachkräftemangel im Amt",
        description: "Offene Stellen in der Verwaltung können kaum besetzt werden. Vorhandenes Personal muss Routineaufgaben übernehmen, die KI längst lösen könnte.",
        size: "large",
    },
    {
        icon: ClipboardList,
        title: "Bürokratiestau",
        description: "Die manuelle Erfassung von Anträgen und die interne Weiterleitung von Dokumenten bindet enorme Personalressourcen und verlangsamt Prozesse.",
        size: "medium",
    },
    {
        icon: PenSquare,
        title: "Komplexe Gesetzeslage",
        description: "Ständige Änderungen in Verordnungen machen es schwer, Bürger immer auf dem neuesten Stand zu informieren. Informationen sind oft veraltet.",
        size: "medium",
    },
];

export const ProblemGridOeffentlich = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen in der Verwaltung
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Bürokratie und knappe Ressourcen bremsen den Verwaltungsalltag. Wir digitalisieren die Administration, damit mehr Zeit für den Service am Bürger bleibt.
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
