import { PhoneCall, CalendarCheck2, MailCheck, Bell, MessageSquare, Database } from "lucide-react";

const useCases = [
  {
    icon: PhoneCall,
    title: "KI‑Abendrezeptionist",
    description: "Hebt ab, wenn niemand da ist – abends, nachts, am Wochenende. Beantwortet Standardfragen zu Frühstück, Parkplatz, Spa, Late Check-out. Nimmt Buchungen entgegen, verschiebt Nächte, storniert. Erkennt Notfälle und leitet sie weiter.",
    tools: [
      { name: "Twilio", logo: "/img/techstack/twilio.png" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "LiveKit", logo: "/img/techstack/livekit.png" },
      { name: "Fonio.ai", logo: "/img/techstack/fonio.png" },
      { name: "Azure AI", logo: "/img/techstack/azureai.png" },
    ],
  },
  {
    icon: CalendarCheck2,
    title: "Automatische Buchungen",
    description: "Kein Springen mehr zwischen Telefon, Buchungssystem und Excel. Prüft Echtzeit‑Verfügbarkeit direkt, nimmt Gästedaten fehlerfrei auf, reserviert sofort und versendet Bestätigungen – während der nächste Gast bereits bedient wird.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
    ],
  },
  {
    icon: MailCheck,
    title: "Angebote & Bestätigungen",
    description: "Keine 20‑Minuten‑Schreibarbeit mehr. Wenn jemand über Telefon, WhatsApp oder Instagram einen Bedarf hat, generiert die Automatisierung automatisch eine fertige PDF mit dem Angebot und schickt sie dem Kunden je nach Kanal – sofort. Bestätigungen und Erinnerungen laufen automatisch mit.",
    tools: [
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Twilio", logo: "/img/techstack/twilio.png" },
    ],
  },
  {
    icon: Bell,
    title: "Echtzeit‑Benachrichtigungen",
    description: "Störungen werden sofort gemeldet – z. B. defekter Fernseher. Automatische SMS/E‑Mail an Ihr Team, damit Sie proaktiv reagieren können. Wertschätzung statt Beschwerde.",
    tools: [
      { name: "Twilio", logo: "/img/techstack/twilio.png" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Multi‑Channel Inbound",
    description: "Kein Kanal‑Chaos mehr. Alle Anfragen aus Instagram, Facebook, WhatsApp, E‑Mail und Website in einem Posteingang. Ein Agent beantwortet alle Kanäle einheitlich – während der Gast vor Ihnen wartet.",
    tools: [
      { name: "Superchat", logo: "/img/techstack/superchat.png" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
    ],
  },
  {
    icon: Database,
    title: "KI Wissensdatenbank",
    description: "Ihre Hotel-Dokumente, FAQs und internes Wissen werden durchsuchbar. Der Agent findet sofort die richtige Antwort – ob für Gästeanfragen oder interne Fragen. Kein langes Suchen mehr in PDFs und E-Mails.",
    tools: [
      { name: "Supabase", logo: "/img/techstack/supabase.jpg" },
      { name: "n8n", logo: "/img/techstack/n8n.webp" },
      { name: "Azure AI", logo: "/img/techstack/azureai.png" },
    ],
  },
];

export const UseCasesHotels = () => {
  return (
    <section id="loesungen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ihre Lösung: Hotel-Automatisierung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sparen Sie 10-15 Stunden pro Woche mit unseren bewährten KI-Workflows für Hotels.
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
            DSGVO‑konform, natürlich klingend, nahtlos integriert
          </p>
        </div>
      </div>
    </section>
  );
};


