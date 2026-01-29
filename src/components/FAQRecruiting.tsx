import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Fühlt sich ein KI-Interview für Bewerber nicht unpersönlich an?",
        answer: "Im Gegenteil: Bewerber schätzen die sofortige Reaktion direkt nach der Bewerbung. Es ist als Erst-Check gedacht, um Eckdaten zu klären und den Prozess zu beschleunigen. Das persönliche Gespräch mit dem Recruiter findet dadurch auf einer viel höheren Qualitätsebene statt."
    },
    {
        question: "Wie erkennt die KI die Eignung eines Kandidaten?",
        answer: "Wir nutzen fortschrittliche Sprachmodelle, die nicht nur nach Schlagworten suchen, sondern den Kontext und die Relevanz der Erfahrung im Lebenslauf oder im Voice-Gespräch verstehen. Das System liefert einen Matching-Score basierend auf Ihren Kriterien."
    },
    {
        question: "Ist die Lösung DSGVO-konform bei sensiblen Bewerberdaten?",
        answer: "Absolut. Alle Daten werden verschlüsselt auf Servern in der EU verarbeitet. Wir stellen sicher, dass alle notwendigen Einwilligungen im Prozess eingeholt werden und die Datenlöschfristen automatisiert eingehalten werden."
    },
    {
        question: "Kann die KI auch Bewerber auf LinkedIn proaktiv ansprechen?",
        answer: "Ja, unser Sourcing-Agent kann Profile identifizieren, die auf eine Stelle passen, und eine hochgradig personalisierte Erstansprache versenden. Erst wenn der Kandidat reagiert, übernimmt Ihr Recruiter."
    },
    {
        question: "Wie aufwendig ist die Anbindung an mein bestehendes ATS (Bewerbermanagementsystem)?",
        answer: "Wir bieten native Integrationen für die gängigsten ATS-Systeme an oder nutzen intelligente Workflows, um Daten und Status-Updates nahtlos zu synchronisieren."
    },
];

export const FAQRecruiting = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Klarheit für Ihren modernen Recruiting-Prozess
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
