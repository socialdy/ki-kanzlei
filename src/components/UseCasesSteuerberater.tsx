import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: Database,
        title: "BMD & DATEV Vorerfassung",
        description: "KI-gestützte Klassifizierung und Extraktion von Buchungsdaten. Die KI lernt Ihre Buchungsmuster und bereitet Daten perfekt für den Import in BMD oder DATEV vor – inklusive Kostenstellen.",
        tools: [
            { name: "BMD Connect", logo: "/img/techstack/supabase.jpg" },
            { name: "n8n AI", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: PhoneCall,
        title: "24/7 KI-Klienten-Sekretariat",
        description: "Ihr digitaler Mitarbeiter für Anfragen zu Fristen, Belegen oder Terminvereinbarungen. Der Voice-Agent beantwortet Standardfragen sofort und entlastet Ihr Team massiv.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Automatisches Onboarding",
        description: "KI-geführter Prozess für Neumandanten. Dokumente werden automatisch abgefragt, auf Vollständigkeit geprüft und direkt im richtigen Verzeichnis abgelegt – ohne manuelles Nachfassen.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Intelligente Steuer-Recherche",
        description: "Durchsuchen Sie Fachliteratur, interne Vermerke und Gesetze in Sekunden. Die KI liefert fundierte Antworten auf komplexe Fachfragen, basierend auf Ihren verifizierten Quellen.",
        tools: [
            { name: "Private RAG", logo: "/img/techstack/supabase.jpg" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Automatischer Beleg-Reminder",
        description: "Keine fehlenden Unterlagen mehr. Die KI erkennt fehlende Belege in der Buchhaltung und kontaktiert Klienten freundlich per Mail oder WhatsApp, bis alle Daten vorliegen.",
        tools: [
            { name: "WhatsApp API", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Share2,
        title: "Jahresabschluss-Assistent",
        description: "Strukturierte Aufbereitung von Rohdaten für den Jahresabschluss. Die KI erkennt Unplausibilitäten und bereitet Dokumente so vor, dass Ihr Team nur noch die finale Prüfung vornimmt.",
        tools: [
            { name: "Voice Entry", logo: "/img/techstack/n8n.webp" },
            { name: "Custom GPT", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesSteuerberater = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        KI-Power für Ihre Kanzlei
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren die Steuerberatung mit Systemen, die repetitive Arbeit eliminieren und die Beratungsqualität durch intelligente Datenanalyse steigern.
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
                                <div className="flex flex-wrap gap-3 mb-3">
                                    {useCase.tools.map((tool) => (
                                        tool.logo ? (
                                            <div key={tool.name} className={`flex items-center justify-center px-2 py-2 bg-white/50 rounded-lg border border-gray-200/50`}>
                                                <img
                                                    src={tool.logo}
                                                    alt={tool.name}
                                                    className="h-8 w-8 object-contain [image-rendering:crisp-edges]"
                                                />
                                            </div>
                                        ) : (
                                            <span key={tool.name} className="px-2 py-1 text-xs rounded-full bg-white/60 border border-gray-200/60">
                                                {tool.name}
                                            </span>
                                        )
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg text-muted-foreground">
                        ✓ Zeitersparnis bei der Erfassung ✓ 24/7 Klienten-Support ✓ 100% DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
