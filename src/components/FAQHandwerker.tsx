import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Was passiert, wenn die KI eine Frage nicht beantworten kann?",
        answer: "In diesem Fall nimmt die KI alle notwendigen Kontaktdaten und das Anliegen des Kunden auf und leitet diese Informationen sofort per Mail oder Push-Benachrichtigung an Sie weiter. So können Sie gezielt zurückrufen, wenn Sie Zeit haben."
    },
    {
        question: "Kann die KI Notfälle von normalen Anfragen unterscheiden?",
        answer: "Ja. Die KI ist darauf trainiert, Schlüsselwörter und die Dringlichkeit (z.B. Rohrbruch, Stromausfall) zu erkennen. Notfälle können priorisiert behandelt oder direkt an einen Notdienst-Techniker weitergeleitet werden."
    },
    {
        question: "Wie funktioniert die Terminbuchung?",
        answer: "Wir verknüpfen die KI mit Ihrem digitalen Kalender (z.B. Google, Outlook). Die KI kennt Ihre freien Slots und bucht Termine nur innerhalb der von Ihnen vorgegebenen Zeiten. Sie behalten jederzeit die volle Kontrolle."
    },
    {
        question: "Ist die Lösung auch für Ein-Personen-Unternehmen (EPU) geeignet?",
        answer: "Absolut. Gerade EPU profitieren massiv von der 24/7 Erreichbarkeit, da sie oft selbst auf der Baustelle stehen und kein eigenes Sekretariat haben. Die KI fungiert als Ihr digitaler Erstkontakt."
    },
    {
        question: "Wie sicher sind meine Kundendaten?",
        answer: "Alle Daten werden nach strengster DSGVO verarbeitet. Wir nutzen Serverstandorte innerhalb der EU und legen höchsten Wert auf Verschlüsselung und Datenschutz."
    },
];

export const FAQHandwerker = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Ihr Weg zum modernen Handwerksbetrieb
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
