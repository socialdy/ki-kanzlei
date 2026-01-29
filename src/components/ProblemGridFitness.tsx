import { PhoneOff, Clock, UserMinus, MessageSquare, TrendingDown, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Verpasste Probetrainings",
        description: "Interessenten rufen oft an, wenn der Empfang nicht besetzt ist. Jedes Besetzt-Zeichen ist ein verlorener Neu-Mitglied-Umsatz.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Antwortzeit bei Anfragen",
        description: "Wer auf eine Website-Anfrage erst nach 24 Stunden reagiert, hat den Interessenten oft schon an das Studio um die Ecke verloren.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Mühsame Lead-Nachverfolgung",
        description: "Das manuelle Nachtelefonieren von Leads kostet Ihrem Team Stunden an Zeit und wird oft vernachlässigt, wenn das Studio voll ist.",
        size: "medium",
    },
    {
        icon: UserMinus,
        title: "Überlastete Trainer am Empfang",
        description: "Ihre Trainer sollten auf der Fläche sein und Mitglieder betreuen, statt am Telefon Fragen zu Verträgen oder Öffnungszeiten zu beantworten.",
        size: "large",
    },
    {
        icon: ClipboardList,
        title: "Chaos bei Vertragsfragen",
        description: "Kündigungen, Pausen oder Tarifwechsel binden enorme administrative Kapazitäten und führen oft zu Fehlern in der Verwaltung.",
        size: "medium",
    },
    {
        icon: TrendingDown,
        title: "Hohe Fluktuation (Churn)",
        description: "Mangelnde Interaktion mit passiven Mitgliedern führt zu höherer Kündigungsrate. Automatisierte Re-Engagement-Prozesse fehlen oft.",
        size: "medium",
    },
];

export const ProblemGridFitness = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen im Studio-Alltag
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Wachstum braucht Systematik. Wir automatisieren die Interessenten-Gewinnung und Mitglieder-Betreuung, damit Sie sich auf das Training konzentrieren können.
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
