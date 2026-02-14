import { PhoneCall, Shield, MessageSquare, ClipboardCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: ClipboardCheck,
        title: "Intelligente Polizzen-Analyse",
        description: "Vergleichen Sie hunderte Versicherungsprodukte in Sekunden. Die KI erkennt Leistungsunterschiede, Deckungslücken und Einsparpotenziale für Ihre Kunden – präzise und objektiv.",
        tools: [
            { name: "OCR Analyst", logo: "/img/techstack/supabase.jpg" },
            { name: "n8n AI", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: PhoneCall,
        title: "KI-Notfall-Hotline (24/7)",
        description: "Lassen Sie Ihre Kunden im Schadensfall nie allein. Der Voice-Agent nimmt Schadensmeldungen rund um die Uhr auf, fragt Details ab und beruhigt Kunden in Stresssituationen.",
        tools: [
            { name: "Fonio.ai", logo: "/img/techstack/fonio.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: Shield,
        title: "Lead-Qualifizierung & Scoring",
        description: "Automatisierte Erstprüfung von Interessenten. Die KI filtert nach Bedarf, Budget und Abschlusswahrscheinlichkeit vor, damit Sie sich auf die lukrativsten Beratungstermine konzentrieren.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Smart Tarif-Recherche",
        description: "Finden Sie die beste Lösung im Tarifdschungel. Die KI durchsucht tagesaktuelle Bedingungen aller Versicherer und liefert Ihnen die schlagkräftigsten Argumente für das Verkaufsgespräch.",
        tools: [
            { name: "Private RAG", logo: "/img/techstack/supabase.jpg" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Proaktives Service-Management",
        description: "Die KI erkennt bevorstehende Ablaufdaten oder Optimierungschancen und kontaktiert Kunden automatisch mit personalisierten Vorschlägen für ein Review-Gespräch.",
        tools: [
            { name: "WhatsApp API", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Share2,
        title: "Schadensbericht-Assistent",
        description: "Automatisierte Erstellung von Schadensberichten. Die KI transkribiert Kundenaussagen, strukturiert diese und bereitet alle nötigen Dokumente für die Einreichung beim Versicherer vor.",
        tools: [
            { name: "Voice Entry", logo: "/img/techstack/n8n.webp" },
            { name: "Custom GPT", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesVersicherung = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Wettbewerbsvorteil durch KI
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir geben Versicherungsmaklern Tools an die Hand, die Reaktionszeiten auf Null senken und die Beratungsqualität auf ein völlig neues Level heben.
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
                        ✓ 24/7 Schadensmeldung ✓ Schnelle Analyse ✓ Mehr Verkaufszeit
                    </p>
                </div>
            </div>
        </section>
    );
};
