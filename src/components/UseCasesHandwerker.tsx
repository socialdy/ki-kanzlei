import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: PhoneCall,
        title: "KI-Büroassistent (24/7 Voice)",
        description: "Nimmt alle Anrufe entgegen, während Sie auf der Baustelle sind. Erkennt Notfälle, prüft Verfügbarkeiten und bucht Besichtigungstermine direkt in Ihren Kalender.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Digitale Auftrags-Qualifizierung",
        description: "Filtert Anfragen nach Gewerk, Dringlichkeit und Ort vor. Sorgen Sie dafür, dass Ihr Team nur an lukrativen Aufträgen arbeitet, die exakt zu Ihrem Fachgebiet passen.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Database,
        title: "Zentrale Wissensdatenbank (RAG)",
        description: "Greifen Sie auf der Baustelle per Sprache auf technische Datenblätter, Einbauanleitungen und Normen zu. Die KI liefert sofort die richtige Info aus Ihren PDFs.",
        tools: [
            { name: "RAG Agent", logo: "/img/techstack/supabase.jpg" },
            { name: "Smart Query", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Multi-Channel Response",
        description: "Reagieren Sie sofort auf Anfragen per WhatsApp oder Mail. Die KI erstellt automatisierte Erst-Antworten und fragt notwendige Infos wie Fotos vom Schaden vorab ab.",
        tools: [
            { name: "Superchat", logo: "/img/techstack/superchat.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Content-Agent für Handwerker",
        description: "Werden Sie der Top-Betrieb in Ihrer Region. Die KI erstellt wöchentlich Beiträge zu Referenzprojekten und Tipps zur Wartung für Ihre Website und Kanäle.",
        tools: [
            { name: "SEO Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Content", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Share2,
        title: "Automatisierte Meister-Assistenz",
        description: "Diktieren Sie Aufmaße und Notizen nach dem Termin per Sprachnachricht. Die KI erstellt daraus Arbeitsanweisungen oder Entwürfe für Materialbestellungen.",
        tools: [
            { name: "Voice Entry", logo: "/img/techstack/n8n.webp" },
            { name: "Custom GPT", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesHandwerker = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Moderne Lösungen für das Handwerk
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihren Betrieb mit KI-Agenten, die Ihre Administration übernehmen, während Ihr Team das Handwerk am Laufen hält.
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
                        ✓ 8-12 Stunden Büro-Entlastung ✓ 100% Erreichbarkeit ✓ DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
