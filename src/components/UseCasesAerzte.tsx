import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: PhoneCall,
        title: "KI-Empfangs-Assistent (24/7)",
        description: "Nimmt alle Anrufe entgegen, auch wenn alle Leitungen besetzt sind. Bucht Termine direkt in Ihr Praxissystem, gibt Infos zu Öffnungszeiten und entlastet Ihre Assistenten – menschlich und kompetent.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Smarte Patienten-Triage",
        description: "Qualifiziert Anliegen am Telefon vor. Erkennt Notfälle, fragt Symptome für bestimmte Untersuchungen ab und stellt sicher, dass Patienten den korrekten Zeitslot erhalten.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: MessageSquare,
        title: "KI-Anfrage-Manager",
        description: "Automatisiert die Beantwortung von E-Mail-Anfragen zu Befunden, Rezeptwünschen oder Terminen. Erstellt passgenaue Antwortvorschläge zur schnellen Freigabe durch das Personal.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Database,
        title: "Ordinations-Wissensbasis (RAG)",
        description: "Zugriff auf interne Leitfäden, IGeL-Leistungen oder Praxisabläufe in Sekunden. Ihr Team kann Fragen einfach per Chat stellen und erhält sofort die korrekte Antwort – 100% DSGVO-konform.",
        tools: [
            { name: "RAG Agent", logo: "/img/techstack/supabase.jpg" },
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Share2,
        title: "Automatisierte Recall-Systeme",
        description: "Erinnert Patienten automatisch per Voice oder SMS an anstehende Vorsorgen oder Folgetermine. Steigert die Patiententreue und sorgt für eine bessere Auslastung der Ordination.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Twilio API", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: Search,
        title: "KI-Praxismarketing",
        description: "Werden Sie die Anlaufstelle Nr. 1 in Ihrer Region. Die KI erstellt wöchentlich medizinische Info-Beiträge und Tipps für Patienten für Ihre Website und Social Media Kanäle.",
        tools: [
            { name: "SEO Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Content", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesAerzte = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Moderne Lösungen für Ihre Praxis
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihre Ordination mit intelligenter KI, die administrative Lasten abnimmt und die Patientenbetreuung professionalisiert.
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
                        ✓ 12-18 Stunden Entlastung ✓ Zufriedenere Patienten ✓ 100% DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
