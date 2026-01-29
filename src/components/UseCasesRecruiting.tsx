import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: PhoneCall,
        title: "KI-Bewerber-Interview (Voice)",
        description: "Führt automatisierte Erstgespräche mit Bewerbern direkt nach der Bewerbung. Fragt Verfügbarkeit, Gehaltsvorstellung und Kündigungsfrist ab – 24/7 und absolut professionell.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Automatisches Screening",
        description: "Die KI scannt eingehende Bewerbungen gegen das Anforderungsprofil. Sie erkennt Qualifikationen, Erfahrungen und Soft Skills und sortiert Kandidaten nach ihrer Eignung (Score).",
        tools: [
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Pro", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Database,
        title: "Talent-Pool Wissensbasis (RAG)",
        description: "Durchsuchen Sie Ihren gesamten Bewerber-Pool in Sekunden. Finden Sie Kandidaten aus früheren Ausschreibungen, die perfekt auf neue Rollen passen, basierend auf Inhalts-Analyse.",
        tools: [
            { name: "RAG Agent", logo: "/img/techstack/supabase.jpg" },
            { name: "Vector Search", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Instant Feedback Bot",
        description: "Begleitet Bewerber durch den gesamten Prozess. Beantwortet Fragen zum Status, zum Team oder den Benefits sofort via WhatsApp oder Chat und reduziert Ghosting.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Superchat", logo: "/img/techstack/superchat.png" },
        ],
    },
    {
        icon: Share2,
        title: "Automatisches Sourcing",
        description: "Unser KI-Agent identifiziert passende Kandidaten auf LinkedIn und XING, personalisiert die Ansprache und füllt Ihre Pipeline proaktiv mit passiven Talenten.",
        tools: [
            { name: "LinkedIn Agent", logo: "/img/techstack/gemini.png" },
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Employer Branding Content",
        description: "Die KI erstellt automatisch Beiträge über Ihren Arbeitsalltag, Mitarbeiter-Stories und offene Stellen, um Ihre Arbeitgebermarke organisch zu stärken.",
        tools: [
            { name: "SEO Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Content", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesRecruiting = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Intelligenz für Ihr Recruiting
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihren Personalprozess mit KI-Systemen, die Geschwindigkeit und Qualität der Einstellungen massiv steigern.
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
                        ✓ 50% schnellere Time-to-Hire ✓ TOP Bewerber-Erfahrung ✓ DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
