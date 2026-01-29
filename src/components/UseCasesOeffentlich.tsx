import { Landmark, Brain, MessageSquare, Clock, Zap, ShieldCheck } from "lucide-react";

const useCases = [
    {
        icon: Brain,
        title: "Rechtssichere Wissensbasis",
        description: "KI-gestützter Zugriff auf Gesetze, Verordnungen, Satzungen und interne Dokumente. Mitarbeiter und Bürger erhalten in Sekunden präzise, rechtssichere Auskünfte.",
    },
    {
        icon: MessageSquare,
        title: "Digitales KI-Sekretariat",
        description: "Ein intelligenter Agent, der telefonische und schriftliche Bürgeranfragen 24/7 vorqualifiziert, Termine vergibt und Anliegen automatisch an die richtige Stelle leitet.",
    },
    {
        icon: Zap,
        title: "Automatisierte Verwaltung",
        description: "Effiziente Workflows für Anträge, Bescheinigungen und interne Genehmigungsprozesse – papierlos, absolut sicher und fehlerfrei.",
    },
    {
        icon: Landmark,
        title: "Bürgerservice 2.0",
        description: "Automatisierte Erstberatung für Bürger bei behördlichen Fragen, um das Personal von Routineanfragen zu entlasten und Wartezeiten zu verkürzen.",
    },
    {
        icon: Clock,
        title: "Effiziente Ressourcenplanung",
        description: "Optimierung von Personalressourcen und Raumbelegungen durch intelligente Algorithmen, die Engpässe proaktiv erkennen und Auslastungen verbessern.",
    },
    {
        icon: ShieldCheck,
        title: "Rechtssichere Dokumentation",
        description: "Vollautomatisierte Protokollierung und rechtssichere Archivierung gemäß öffentlicher Bestimmungen und DSGVO-Standards in österreichischen Systemen.",
    },
];

export const UseCasesOeffentlich = () => {
    return (
        <section id="loesungen" className="section-spacing bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        KI‑Lösungen für moderne Verwaltungen
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir entwickeln die technologischen Grundlagen für effiziente öffentliche Einrichtungen, Ämter und Behörden.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover-lift cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
