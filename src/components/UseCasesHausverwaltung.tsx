import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: PhoneCall,
        title: "KI-Anrufassistent",
        description: "DSGVO-konforme 24/7-Anrufannahme speziell für Hausverwaltungen. Beantwortet Fragen zu Hausordnungen, nimmt Schadensmeldungen auf und koordiniert Besichtigungstermine vollautomatisch.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: Database,
        title: "KI-Wissensdatenbank",
        description: "Ihr digitaler Wissensassistent für alle Objekte. Durchsucht Mietverträge, technische Dokumentationen und Beschlussprotokolle in Sekunden und liefert präzise Antworten für Team und Mieter.",
        tools: [
            { name: "Supabase", logo: "/img/techstack/supabase.jpg" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Multichannel Support Assistent",
        description: " WhatsApp, E-Mail und Mieterportal in einem System. Ein KI-Agent beantwortet Mieteranfragen einheitlich, konsistent und DSGVO-konform über alle Kanäle hinweg.",
        tools: [
            { name: "Superchat", logo: "/img/techstack/superchat.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Digitale Verwaltungsassistent",
        description: "Übernimmt administrative Routineaufgaben wie die Erstellung von Mieterbescheinigungen, Protokollen und die Koordination von Handwerkerterminen direkt via Messenger oder E-Mail.",
        tools: [
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Share2,
        title: "Akquise Agent",
        description: "Autonomer LinkedIn-Agent zur Identifizierung neuer Eigentümer und Liegenschaften. Versendet hochgradig personalisierte Anfragen und liefert qualifizierte Leads direkt an Ihren Vertrieb.",
        tools: [
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
            { name: "Supabase", logo: "/img/techstack/supabase.jpg" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Contentagent",
        description: "Sorgen Sie für organische Sichtbarkeit. Der KI-Agent erstellt SEO-optimierte Beiträge zu Markttrends, Sanierungsthemen und Verwaltungswissen und pflegt diese automatisch auf Ihrer Website ein.",
        tools: [
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
        ],
    },
];

export const UseCasesHausverwaltung = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Wo wir ansetzten
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihre Verwaltungsprozesse mit produktionsreifen KI-Agenten, die Zeit sparen und Ihre Servicequalität für Mieter und Eigentümer nachhaltig steigern.
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
                        ✓ 15-20 Stunden Zeit gespart ✓ 400% ROI im Durchschnitt ✓ 100% DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
