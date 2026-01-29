import { UserMinus, Clock, FileSearch, MessageSquare, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: FileSearch,
        title: "Flut an unpassenden Bewerbungen",
        description: "Recruiter verbringen Stunden damit, Lebensläufe zu sichten, die nicht annähernd auf das Anforderungsprofil passen.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Lange Time-to-Hire",
        description: "Wertvolle Zeit geht verloren, während Kandidaten auf Rückmeldung warten. Die besten Talente sind oft schon weg, bevor das Telefonat stattfindet.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Mühsame Termin-Koordination",
        description: "Das Hin- und Hergeschreibe für Erstgespräche frisst die Kapazitäten Ihres Teams und verzögert den gesamten Prozess.",
        size: "medium",
    },
    {
        icon: UserMinus,
        title: "Ghosting durch Bewerber",
        description: "Mangelnde Interaktion im frühen Prozess führt dazu, dass Bewerber das Interesse verlieren und im Prozess abtauchen.",
        size: "large",
    },
    {
        icon: Briefcase,
        title: "Hoher administrativer Aufwand",
        description: "Datenpflege im ATS, Absagen schreiben, Standardfragen beantworten – wertvolle Recruiter-Zeit versinkt in Routineaufgaben.",
        size: "medium",
    },
    {
        icon: TrendingUp,
        title: "Steigende Cost-per-Hire",
        description: "Ineffiziente Prozesse und lange Vakanzen treiben die Kosten pro Einstellung in die Höhe und belasten das Budget.",
        size: "medium",
    },
];

export const ProblemGridRecruiting = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen im modernen Recruiting
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Der "War for Talents" wird durch Geschwindigkeit gewonnen. Wir automatisieren die Routine, damit Ihre Recruiter wieder Zeit für echte Gespräche haben.
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
