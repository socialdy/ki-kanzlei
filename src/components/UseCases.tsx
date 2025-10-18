import { Phone, FileText, Bell, UserCheck, Receipt, MailCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: Phone,
    title: "Automatische Anrufannahme & Scheduling",
    description: "Voice Agent antwortet 24/7, qualifiziert Anfragen, bucht Termine direkt.",
    tools: ["Voice Agent", "n8n"],
    savings: "15h/Woche"
  },
  {
    icon: FileText,
    title: "Digitale Anamnesebogen",
    description: "Patienten füllen Formulare digital aus, n8n speichert automatisch.",
    tools: ["n8n", "CRM"],
    savings: "5h/Woche"
  },
  {
    icon: Bell,
    title: "Automatisierte Terminbestätigungen",
    description: "SMS/Email Reminders vor Termin, reduziert No-Shows.",
    tools: ["Voice Agent", "n8n", "SMS API"],
    savings: "3h/Woche"
  },
  {
    icon: UserCheck,
    title: "Patient Intake & Informationen",
    description: "KI stellt medizinische Fragen, erfasst Historie, prüft Versicherung.",
    tools: ["Voice Agent", "n8n"],
    savings: "8h/Woche"
  },
  {
    icon: Receipt,
    title: "Automatisierte Rechnungsstellung",
    description: "Invoice-Generierung, Mahnungen, Payment Reminders.",
    tools: ["n8n", "Accounting"],
    savings: "6h/Woche"
  },
  {
    icon: MailCheck,
    title: "Follow-up & Patient Engagement",
    description: "Nachbetreuung, Feedback-Umfragen, Re-booking Reminders.",
    tools: ["Voice Agent", "n8n", "Email"],
    savings: "4h/Woche"
  }
];

export const UseCases = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ihre Lösung: KI-gestützte Automatisierung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sparen Sie bis zu 40 Stunden pro Woche mit unseren bewährten Workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {useCase.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                  ⏱ {useCase.savings}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
