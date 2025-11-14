import { PhoneCall, FileSpreadsheet, MessageSquare, Stethoscope, Calculator, Share2 } from "lucide-react";

const useCases = [
  {
    icon: PhoneCall,
    title: "KI-Anrufannahme",
    description: "Beantwortet Anrufe 24/7 auf Deutsch oder Englisch, qualifiziert Klienten und bucht Termine automatisch in Freudio über n8n.",
    tools: [
      { name: "LiveKit", logo: "/img/techstack/livekit.png" },
      { name: "ElevenLabs", logo: "/img/techstack/eleven_labs.png" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Freudio", logo: "/img/techstack/freudio.svg" }
    ],
    savings: "8h/Woche"
  },
  {
    icon: FileSpreadsheet,
    title: "Automatische Dokumentenverarbeitung",
    description: "Klienten senden PDFs per E-Mail wie Verschwiegenheitserklärung, Einverständniserklärungen und weitere Dokumente. Die Dateien werden automatisch verarbeitet und in Freudio importiert.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Freudio", logo: "/img/techstack/freudio.svg" }
    ],
    savings: "3h/Woche"
  },
  {
    icon: MessageSquare,
    title: "Automatische Klientenkommunikation",
    description: "SMS-Erinnerungen, E-Mails mit Dokumenten zum Ausfüllen direkt an Klienten, automatische Terminbestätigungen und Synchronisation mit Freudio.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Twilio", logo: "/img/techstack/twilio.png" },
      { name: "Freudio", logo: "/img/techstack/freudio.svg" }
    ],
    savings: "8-10h/Woche"
  },
  {
    icon: Stethoscope,
    title: "KI-Dokumentation",
    description: "Integrierte KI-Dokumentation erstellt automatisch Therapieberichte und Zusammenfassungen direkt in der Praxisverwaltung.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Azure AI", logo: "/img/techstack/azureai.png" },
      { name: "Freudio", logo: "/img/techstack/freudio.svg" }
    ],
    savings: "4h/Woche"
  },
  {
    icon: Calculator,
    title: "Automatisierte Buchhaltung",
    description: "Integrierte Abrechnungsfunktion generiert automatisch Rechnungen, ICD-11 Kodierung und Krankenkassen-Abrechnung direkt in Freudio. Verwaltet alle buchhaltungsrelevanten Daten.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Azure AI", logo: "/img/techstack/azureai.png" },
      { name: "Freudio", logo: "/img/techstack/freudio.svg" }
    ],
    savings: "2h/Woche"
  },
  {
    icon: Share2,
    title: "Automatisches Marketing",
    description: "KI-Agent generiert automatisch Posts zu bestimmten Themen und veröffentlicht sie zu optimalen Zeiten auf Social Media Kanälen.",
    tools: [
      { name: "Azure AI", logo: "/img/techstack/azureai.png" },
      { name: "Supabase", logo: "/img/techstack/supabase.jpg" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" }
    ],
    savings: "3h/Woche"
  }
];

export const UseCases = () => {
  return (
    <section id="loesungen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ihre Lösung: Digitale Praxisoptimierung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sparen Sie bis zu 8-10 Stunden pro Woche mit unseren bewährten digitalen Workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover-lift cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                        <div className="flex flex-wrap gap-3 mb-3">
                          {useCase.tools.map((tool) => (
                            <div key={tool.name} className="flex items-center gap-2 px-2 py-2 bg-white/50 rounded-lg border border-gray-200/50">
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                className="h-8 w-8 object-contain [image-rendering:crisp-edges]"
                              />
                            </div>
                          ))}
                        </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Und noch vieles mehr – individuell auf Ihre Praxis zugeschnitten
          </p>
        </div>
      </div>
    </section>
  );
};
