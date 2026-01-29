import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: Database,
        title: "Digitales Akten-Gehirn (RAG)",
        description: "Analysieren Sie tausende Seiten in Sekunden. Stellen Sie komplexe Fragen an Ihre Akten und erhalten Sie präzise Antworten inklusive Quellenbelegen aus Ihren Dokumenten – 100% lokal & sicher.",
        tools: [
            { name: "Private RAG", logo: "/img/techstack/supabase.jpg" },
            { name: "Smart Query", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: PhoneCall,
        title: "KI-Mandats-Sekretariat (24/7)",
        description: "Verpassen Sie keinen Klienten mehr. Der Voice-Agent nimmt Anrufe entgegen, qualifiziert den Rechtsfall vor und bucht Erstberatungstermine DSGVO-konform direkt in Ihren Kalender.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Mandats-Vorqualifizierung",
        description: "Automatisierte Erstprüfung von Anfragen. Die KI filtert nach Fachgebiet, Streitwert und Erfolgsaussichten vor, damit Sie nur die Mandate bearbeiten, die für Ihre Kanzlei relevant sind.",
        tools: [
            { name: "Voice UI", logo: "/img/techstack/livekit.png" },
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
        ],
    },
    {
        icon: Search,
        title: "Smart Archive Search",
        description: "Finden Sie Präzedenzfälle und interne Schriftsätze in Sekunden. Die KI versteht juristische Zusammenhänge und findet nicht nur Wörter, sondern Konzepte in Ihrem Kanzlei-Archiv.",
        tools: [
            { name: "Vector Search", logo: "/img/techstack/supabase.jpg" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Multi-Channel Response Agent",
        description: "Sofortreaktion auf Anfragen via Mail oder Kontaktformular. Die KI versendet Erstinfos, Vollmachtsformulare und Terminvorschläge automatisch – Tag und Nacht.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Azure AI", logo: "/img/techstack/azureai.png" },
        ],
    },
    {
        icon: Share2,
        title: "Dokumenten-Assistenz",
        description: "Diktieren Sie kurze Aktenvermerke oder Schriftsatz-Entwürfe per Sprachnachricht. Die KI erstellt daraus strukturierte Texte in Ihrem Kanzlei-Stil zur finalen Durchsicht.",
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
                        Intelligenz für Ihre Kanzlei
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihre juristische Arbeit mit KI-Systemen, die Recherchezeit halbieren und die Mandantenbetreuung professionalisieren.
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
