import { FileText, Search, Clock, Scale, MessageSquare, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: FileText,
        title: "Informationsflut in Akten",
        description: "Hunderte Seiten pro Fall mühsam manuell zu sichten, kostet wertvolle Zeit. Wichtige Details können in der Masse an Dokumenten übersehen werden.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Mühsame Termin-Koordination",
        description: "Das Hin- und Hertelefonieren für Erstberatungen blockiert Ihre Kanzlei-Mitarbeiter und verzögert die Mandatsaufnahme.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Unqualifizierte Erstkontakte",
        description: "Viele Anfragen passen nicht zu Ihrem Fachgebiet oder sind rechtlich nicht aussichtsreich. Manuelle Vorprüfung raubt Kapazitäten.",
        size: "medium",
    },
    {
        icon: Search,
        title: "Zeitfressende Recherche",
        description: "Die Suche nach spezifischen Urteilen oder Klauseln in internen Archiven dauert oft Stunden, die nicht immer voll fakturiert werden können.",
        size: "large",
    },
    {
        icon: ShieldAlert,
        title: "DSGVO-Bedenken bei KI",
        description: "Der Wunsch nach Effizienz scheitert oft an der Angst vor Datenlecks. Viele Standard-KI-Tools sind für sensible Mandantendaten ungeeignet.",
        size: "medium",
    },
    {
        icon: Scale,
        title: "Hoher administrativer Druck",
        description: "Standard-Korrespondenz und Fristenkontrolle binden juristisches Fachpersonal in rein administrativen Tätigkeiten.",
        size: "medium",
    },
];

export const ProblemGridRechtsanwaelte = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Hürden moderner Kanzleien
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Juristische Exzellenz braucht Zeit. Wir automatisieren die Vorarbeit, damit Sie sich voll auf die rechtliche Strategie konzentrieren können.
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
