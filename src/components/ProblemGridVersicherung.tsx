import { FileText, Shield, Clock, AlertCircle, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: AlertCircle,
        title: "Schadensmeldungen am Wochenende",
        description: "Kunden haben Unfälle nicht nur von 9-17 Uhr. Fehlende Erreichbarkeit bei Notfällen führt zu Unzufriedenheit und Abwanderung.",
        size: "large",
    },
    {
        icon: FileText,
        title: "Vergleich von Dschungel-Tarifen",
        description: "Hunderte Polizzen manuell nebeneinander zu legen und zu analysieren, ist zeitaufwendig und fehleranfällig.",
        size: "medium",
    },
    {
        icon: Clock,
        title: "Endlose Rückfragen",
        description: "Das ständige Telefonieren für einfache Auskünfte zu Deckungssummen oder Vertragslaufzeiten blockiert Ihren Vertrieb.",
        size: "medium",
    },
    {
        icon: Shield,
        title: "Mangelnde Lead-Qualifizierung",
        description: "Viele Anfragen über die Website sind unvollständig. Das mühsame Nachfassen von Daten kostet wertvolle Zeit im Verkaufsprozess.",
        size: "large",
    },
    {
        icon: MessageSquare,
        title: "Verlust von Follow-ups",
        description: "Interessenten werden oft nicht schnell genug kontaktiert. In der Versicherungswelt entscheidet oft die Geschwindigkeit über den Abschluss.",
        size: "medium",
    },
    {
        icon: TrendingUp,
        title: "Hoher administrativer Aufwand",
        description: "Statt zu verkaufen, verbringen Makler bis zu 60% ihrer Zeit mit der Dokumentation und Datenpflege im CRM-System.",
        size: "medium",
    },
];

export const ProblemGridVersicherung = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Engpässe im Versicherungsalltag
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Wir automatisieren die Verwaltung und Schadensaufnahme, damit Sie sich wieder auf das Wichtigste konzentrieren können: Die Beratung Ihrer Kunden.
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
