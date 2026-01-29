import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: Share2,
        title: "Automatisierte Objekt-Akquise",
        description: "Finden Sie neue Mandate, während Sie besichtigen. Unser Akquise-Agent identifiziert Eigentümer auf LinkedIn und per Mail, versendet personalisierte Anfragen und füllt Ihre Pipeline mit künftigen Verkäufen.",
        tools: [
            { name: "LinkedIn Agent", logo: "/img/techstack/gemini.png" },
            { name: "Cold Email Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Supabase", logo: "/img/techstack/supabase.jpg" },
        ],
    },
    {
        icon: PhoneCall,
        title: "KI-Anrufassistent zur Vorqualifizierung",
        description: "Schluss mit Besichtigungstourismus. Der KI-Voice-Agent qualifiziert Interessenten am Telefon vor: Finanzierungscheck, Suchprofil und Dringlichkeit. Nur 'echte' Käufer erhalten einen Besichtigungstermin.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Portal-Anfragen Automatisierung",
        description: "Sekunden-Reaktion auf jede Anfrage. Die KI erkennt Eingänge von Immobilienportalen (z.B. Willhaben) sofort, versendet automatisch das passende Exposé und startet den Qualifizierungsprozess – 24/7.",
        tools: [
            { name: "Multi-Channel", logo: "/img/techstack/superchat.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Database,
        title: "Zentrale Immobilien-Wissensdatenbank",
        description: "Beantworten Sie Rückfragen direkt bei der Besichtigung. Per Smartphone fragen Sie Details zu Widmung, Sanierungen oder Betriebskosten ab – die KI liefert sofort Fakten aus jedem Dokumenten-Wust.",
        tools: [
            { name: "RAG Agent", logo: "/img/techstack/supabase.jpg" },
            { name: "Smart Query", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Digitaler Makler-Assistent (Sprachsteuerung)",
        description: "CRM-Pflege per Sprachnachricht. Nach der Besichtigung diktieren Sie einfach die Notizen und nächsten Schritte – die KI trägt alles korrekt in Ihr System ein und erstellt die Follow-up Mails.",
        tools: [
            { name: "Voice Entry", logo: "/img/techstack/n8n.webp" },
            { name: "Custom GPT", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Search,
        title: "Content- & SEO-Marketing für Makler",
        description: "Werden Sie der Top-Makler in Ihrer Region. Die KI erstellt wöchentliche Marktberichte und Blogbeiträge zu lokalen Immobilien-Entwicklungen, die Ihre organische Sichtbarkeit und Expertenstatus massiv stärken.",
        tools: [
            { name: "SEO Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Content Gen", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesImmobilien = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Wo wir ansetzen
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Maßgeschneiderte KI-Lösungen, die den administrativen Engpass moderner Immobilienmakler sprengen und Ihren ROI messbar steigern.
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
                        ✓ 8-12 Stunden Zeit gespart ✓ 500% ROI im Durchschnitt ✓ 100% DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
