import { PhoneOff, ClipboardList, PenSquare, Info, LayoutGrid, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Mandats-Lücke & Akquise-Stress",
        description: "Die Suche nach neuen Objekten ist mühsam und unbeständig. Ohne systematische Akquise-Workflows bleibt Ihr Mandats-Bestand dem Zufall überlassen.",
        size: "large",
    },
    {
        icon: Info,
        title: "Besichtigungstourismus",
        description: "Sie verschwenden Stunden bei Terminen mit Interessenten, die weder Budget noch echtes Kaufinteresse haben. Vorqualifizierung fehlt oft komplett.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Portal-Reaktionszeit zu langsam",
        description: "Interessenten auf willhaben erwarten Sofort-Antworten. Wer erst nach Stunden reagiert, verliert den Lead an schnellere Kollegen.",
        size: "medium",
    },
    {
        icon: LayoutGrid,
        title: "Informations-Chaos vor Ort",
        description: "Bei Besichtigungen fehlen oft spezifische Unterlagen oder Details. Mühsame Rückfragen im Büro verzögern den Entscheidungsprozess der Käufer.",
        size: "large",
    },
    {
        icon: ClipboardList,
        title: "Administrative CRM-Qual",
        description: "Notizen tippen, Follow-ups schreiben, Daten pflegen – der administrative Rattenschwanz nach Terminen raubt Ihnen die Zeit für den nächsten Deal.",
        size: "medium",
    },
    {
        icon: PenSquare,
        title: "Mangelnde Online-Sichtbarkeit",
        description: "Als Makler ohne frischen Content werden Sie online kaum gefunden. Aber für regelmäßige Marktberichte fehlt im Tagesgeschäft einfach die Zeit.",
        size: "medium",
    },
];

export const ProblemGridImmobilien = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Wo Makler heute Zeit und Geld verlieren
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Die Anforderungen an moderne Makler steigen – die Zeit bleibt gleich. Wir lösen diese Gleichung mit intelligenter KI-Automatisierung.
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
