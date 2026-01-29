import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie funktioniert die Terminbuchung in der Werkstatt?",
        answer: "Die KI erkennt am Telefon Kundenwunsch (z.B. Pickerl oder Service), prüft die Kapazität in Ihrem DMS (Händlersystem) und bucht den Termin direkt ein. Der Kunde erhält sofort eine SMS-Bestätigung."
    },
    {
        icon: null,
        question: "Kann die KI auch Leasing- und Finanzierungsanfragen bearbeiten?",
        answer: "Ja. Der Voice-Agent oder Chatbot kann grundlegende Daten zur Wunschfinanzierung abfragen und diese vorqualifiziert an Ihren Verkaufsberater weiterleiten, inklusive aller notwendigen Kontaktdaten."
    },
    {
        question: "Ist die Lösung mit gängigen Autohaus-Systemen (DMS) kompatibel?",
        answer: "Wir integrieren uns über sichere Schnittstellen (APIs) in die meisten gängigen Systeme. Sollte keine direkte API verfügbar sein, nutzen wir intelligente Workflows, um die Daten fehlerfrei zu übertragen."
    },
    {
        question: "Was passiert bei Notfällen oder Pannendienst-Anrufen?",
        answer: "Die KI erkennt kritische Situationen sofort und leitet den Anruf priorisiert an Ihren Notdienst oder einen Mitarbeiter weiter. Außerhalb der Kernzeiten kann sie wichtige Erstinfos geben und den Abschleppdienst koordinieren."
    },
    {
        question: "Wie wird die DSGVO im Autohaus-Alltag gewahrt?",
        answer: "Alle Anrufe und Daten werden nach strengsten DSGVO-Richtlinien verarbeitet. Wir nutzen Serverstandorte in Europa (vorzugsweise Österreich) und stellen sicher, dass alle Einwilligungen rechtssicher eingeholt werden."
    },
];

export const FAQAutohaus = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Ihre Transformation zum digitalen Autohaus
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-base slide-up cursor-pointer"
                        >
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
