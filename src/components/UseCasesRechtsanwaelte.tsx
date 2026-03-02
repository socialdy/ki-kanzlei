import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: Database,
        title: "Akten durchsuchen mit KI",
        description: "Stellen Sie Fragen an Ihre Akten und bekommen Sie in Sekunden die richtige Stelle – mit Quellenangabe. Egal ob 50 oder 5.000 Seiten. Läuft komplett lokal und sicher.",
        tools: [
            { name: "Private RAG", logo: "/img/techstack/supabase.jpg" },
            { name: "Smart Query", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: PhoneCall,
        title: "KI-Sekretariat – rund um die Uhr",
        description: "Kein Anruf geht mehr verloren. Der KI-Assistent nimmt Anrufe entgegen, stellt die richtigen Fragen und bucht Erstberatungstermine direkt in Ihren Kalender.",
        tools: [
            { name: "Fonio.ai", logo: "/img/techstack/fonio.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Anfragen automatisch vorfiltern",
        description: "Die KI prüft neue Anfragen nach Fachgebiet und Relevanz, bevor Sie sich damit befassen. So bearbeiten Sie nur die Fälle, die wirklich zu Ihrer Kanzlei passen.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Archiv-Suche, die mitdenkt",
        description: "Präzedenzfälle und alte Schriftsätze in Sekunden finden. Die KI versteht Zusammenhänge und findet nicht nur Wörter, sondern was Sie wirklich suchen.",
        tools: [
            { name: "Vector Search", logo: "/img/techstack/supabase.jpg" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Anfragen automatisch beantworten",
        description: "Auf E-Mails und Kontaktformulare sofort reagieren – mit Erstinfos, Vollmachtsformularen und Terminvorschlägen. Automatisch, aber persönlich.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Share2,
        title: "Diktieren statt tippen",
        description: "Sprechen Sie Aktenvermerke oder Entwürfe einfach ein. Die KI macht daraus fertige Texte in Ihrem Kanzlei-Stil – Sie schauen nur noch drüber.",
        tools: [
            { name: "Voice Entry", logo: "/img/techstack/n8n.webp" },
            { name: "Custom GPT", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesRechtsanwaelte = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Das bauen wir für Ihre Kanzlei
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Weniger Verwaltung, mehr Zeit für die eigentliche Arbeit. Hier sind die Lösungen, die im Kanzleialltag wirklich etwas bringen.
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
                        ✓ 10-15 Stunden Zeit gespart ✓ 100% DSGVO-konform ✓ Österreichischer Partner
                    </p>
                </div>
            </div>
        </section>
    );
};
