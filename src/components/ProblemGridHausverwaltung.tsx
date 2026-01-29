import { PhoneOff, ClipboardList, PenSquare, Info, LayoutGrid, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Verpasste Mieteranrufe",
        description: "Das Telefon steht nie still. Mieter erreichen niemanden außerhalb der Bürozeiten, was zu Unmut bei Bewohnern und Eigentümern führt.",
        size: "large",
    },
    {
        icon: LayoutGrid,
        title: "Fragmentiertes Hauswissen",
        description: "Technische Daten, Mietverträge und Protokolle sind über verschiedene Ordner und Dokumente verteilt. Die Suche kostet Ihr Team Stunden.",
        size: "medium",
    },
    {
        icon: ClipboardList,
        title: "Administrative Überlastung",
        description: "Die Erstellung von Bescheinigungen, Protokollen und die Terminplanung für Reparaturen fressen wertvolle Zeit für die Objektbetreuung.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Kommunikationschaos",
        description: "Anfragen via WhatsApp, E-Mail und Telefon landen ungefiltert bei verschiedenen Mitarbeitern. Wichtige Mieteranliegen gehen im Stress unter.",
        size: "large",
    },
    {
        icon: PenSquare,
        title: "Mühsame Objektbeschreibungen",
        description: "Die manuelle Erstellung von Exposés und Marktberichten bindet Experten-Ressourcen, die besser für Akquise-Gespräche genutzt wären.",
        size: "medium",
    },
    {
        icon: Info,
        title: "Zeitfressende Akquise",
        description: "Die Suche nach neuen Liegenschaften und Eigentümern ist extrem zeitintensiv. Generische Kaltakquise erzielt kaum noch Wirkung.",
        size: "medium",
    },
];

export const ProblemGridHausverwaltung = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen in der Verwaltung
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Wir verwandeln Ihre administrativen Hürden in automatisierte Prozesse, damit Sie Ihre Liegenschaften effizienter und persönlicher betreuen können.
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
