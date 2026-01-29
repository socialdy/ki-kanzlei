import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie funktioniert die Terminbuchung für Probetrainings?",
        answer: "Wir verknüpfen unsere KI mit Ihrer bestehenden Studio-Software (z.B. Magicline) oder einem digitalen Kalender. Die KI prüft freie Termine und bucht diese sofort ein, inklusive Mail-Bestätigung für den Kunden."
    },
    {
        question: "Können Mitglieder auch Verträge über die KI ändern oder pausieren?",
        answer: "Ja, wir können automatisierte Prozesse einrichten, bei denen die KI Anfragen zu Vertragsänderungen aufnimmt, die Identität prüft und die notwendigen Schritte in Ihrem CRM einleitet."
    },
    {
        question: "Ist die Lösung DSGVO-konform für meine Mitgliederdaten?",
        answer: "Sicherheit hat höchste Priorität. Alle Daten werden nach strengen EU-Richtlinien auf europäischen Servern verarbeitet. Wir stellen sicher, dass alle Interaktionen rechtssicher dokumentiert werden."
    },
    {
        question: "Hilft KI wirklich dabei, Kündigungen zu verhindern?",
        answer: "Ja, durch intelligentes Tracking können wir Mitglieder identifizieren, die länger nicht im Studio waren, und sie automatisch motivieren oder zu speziellen Events einladen, bevor sie kündigen."
    },
    {
        question: "Was passiert, wenn die KI eine komplexe Frage nicht beantworten kann?",
        answer: "In diesem Fall leitet die KI das Gespräch oder die Anfrage sofort an einen menschlichen Mitarbeiter weiter und gibt diesem eine Zusammenfassung über das bisherige Anliegen."
    },
];

export const FAQFitness = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Klarheit für Ihre digitale Studio-Expansion
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
