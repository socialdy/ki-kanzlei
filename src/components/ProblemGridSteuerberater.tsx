import { FileText, Database, Clock, Calculator, MessageSquare, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: Database,
        title: "Manuelle Beleg-Vorerfassung",
        description: "Das manuelle Abtippen von Rechnungen in BMD oder DATEV ist fehleranfällig und bindet qualifizierte Teilzeitkräfte in stupider Datenarbeit.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Fristendruck & Deadlines",
        description: "Die manuelle Kontrolle von Einspruchsfristen und Abgabeterminen erzeugt enormen Stress und birgt Haftungsrisiken bei Überseehung.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Flut an Standard-Anfragen",
        description: "Immer gleiche Fragen zu Belegen, Fristen oder einfachen Steuerregeln blockieren Ihre Mitarbeiter stundenlang am Telefon.",
        size: "medium",
    },
    {
        icon: FileText,
        title: "Mühsame Klienten-Kommunikation",
        description: "Das ständige Nachfordern fehlender Unterlagen für den Jahresabschluss verzögert Projekte und sorgt für Reibungsverluste.",
        size: "large",
    },
    {
        icon: ShieldAlert,
        title: "Daten-Sicherheit & Compliance",
        description: "Sensible Klantendaten erfordern höchste Sicherheitsstandards. Insecure KI-Tools sind ein absolutes No-Go für die Berufsverschwiegenheit.",
        size: "medium",
    },
    {
        icon: Calculator,
        title: "Hoher Kostendruck",
        description: "Steigende Personalkosten bei gleichzeitigem Druck auf die Honorare erfordern eine radikale Effizienzsteigerung in der Kanzlei-Verwaltung.",
        size: "medium",
    },
];

export const ProblemGridSteuerberater = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen in der Steuerberatung
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Wir automatisieren die repetitive Vorarbeit, damit Ihre Experten wieder Zeit für hochwertige strategische Beratung haben.
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
