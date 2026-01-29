import { PhoneCall, Database, MessageSquare, UserCheck, Share2, Search } from "lucide-react";

const useCases = [
    {
        icon: PhoneCall,
        title: "KI-Studioassistent (24/7 Voice)",
        description: "Nimmt alle Anrufe entgegen, qualifiziert Interessenten vor und bucht Probetrainings direkt in Ihren Kursplaner oder Trainer-Kalender – rund um die Uhr, ohne Warteschleife.",
        tools: [
            { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
            { name: "Gemini Live", logo: "/img/techstack/gemini.png" },
            { name: "Twilio", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Instant Lead Response",
        description: "Reagiert in Sekunden auf Website-Anfragen oder WhatsApp-Nachrichten. Die KI beantwortet Fragen zu Preisen und Leistungen und führt den Interessenten direkt zur Terminbuchung.",
        tools: [
            { name: "n8n", logo: "/img/techstack/n8n.webp" },
            { name: "Superchat", logo: "/img/techstack/superchat.png" },
        ],
    },
    {
        icon: UserCheck,
        title: "Automatisches Follow-Up",
        description: "Sorgen Sie dafür, dass kein Lead verloren geht. Die KI erinnert Interessenten automatisch an ihr Probetraining oder fragt nach dem Besuch nach dem Feedback und dem Vertragsabschluss.",
        tools: [
            { name: "n8n Workflow", logo: "/img/techstack/n8n.webp" },
            { name: "Twilio API", logo: "/img/techstack/twilio.png" },
        ],
    },
    {
        icon: Database,
        title: "Mitglieder-Wissensbasis (RAG)",
        description: "Geben Sie Ihren Mitgliedern und Trainern sofort Zugriff auf Trainingspläne, Studio-Regeln oder Infos zu Zusatzleistungen per Chat oder Sprachabfrage.",
        tools: [
            { name: "RAG Agent", logo: "/img/techstack/supabase.jpg" },
            { name: "Gemini", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Share2,
        title: "KI-Mitglieder-Bindung",
        description: "Identifiziert inaktive Mitglieder und sendet personalisierte Re-Engagement-Kampagnen (z.B. neue Kurse, Angebote), um die Kündigungsrate (Churn) massiv zu senken.",
        tools: [
            { name: "CRM Sync", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Content", logo: "/img/techstack/gemini.png" },
        ],
    },
    {
        icon: Search,
        title: "Social-Media-Marketing Turbo",
        description: "Die KI erstellt wöchentlich Beiträge zu Transformationen, Erfolgsgeschichten und Fitness-Tipps für Ihre Website und Kanäle, um permanent neue Leads zu generieren.",
        tools: [
            { name: "SEO Agent", logo: "/img/techstack/n8n.webp" },
            { name: "Gemini Content", logo: "/img/techstack/gemini.png" },
        ],
    },
];

export const UseCasesFitness = () => {
    return (
        <section id="loesungen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Moderne Systeme für Ihr Studio
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir transformieren Ihr Fitnessmanagement mit intelligenter KI, die das Wachstum beschleunigt und Ihre Mitglieder begeistert.
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
                        ✓ 30% höhere Conversion ✓ 24/7 Erreichbarkeit ✓ DSGVO-konform
                    </p>
                </div>
            </div>
        </section>
    );
};
