import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie funktioniert die Anbindung an BMD oder DATEV?",
        answer: "Unsere KI-Systeme bereiten die Daten so auf, dass sie über Standard-Schnittstellen (wie BMD Connect oder den DATEV-Import) nahtlos übernommen werden können. Wir automatisieren die Vorerfassung und Klassifizierung, bevor die Daten in Ihr Hauptsystem fließen."
    },
    {
        question: "Ist die Datenverarbeitung DSGVO-konform?",
        answer: "Absolut. Als österreichischer Partner legen wir höchsten Wert auf Datensicherheit. Die Verarbeitung erfolgt auf europäischen Servern, und sensible Finanzdaten werden nach höchsten Standards verschlüsselt. Wir schließen mit jeder Kanzlei einen individuellen Auftragsverarbeitervertrag (AVV) ab."
    },
    {
        question: "Kann die KI auch Handschriften auf Belegen lesen?",
        answer: "Ja, moderne Vision-KI-Modelle sind extrem leistungsfähig bei der Erkennung von Handschriften auf Honorarnoten oder Spesenbelegen. Die Genauigkeit liegt oft über der manuellen Erfassung."
    },
    {
        question: "Wie viel Zeit spart eine Kanzlei durch KI pro Woche?",
        answer: "Je nach Kanzleigröße und Digitalisierungsgrad sehen wir Zeitersparnisse von 10 bis 20 Stunden pro Woche allein in der Verwaltung und Vorerfassung. Das entspricht oft einer kompletten Teilzeitstelle, die für wertvollere Aufgaben frei wird."
    },
    {
        question: "Müssen meine Mitarbeiter IT-Experten sein, um das System zu nutzen?",
        answer: "Nein. Wir gestalten die Benutzeroberflächen so intuitiv wie möglich (z.B. über einfache Dashboards oder Voice-Interfaces). Zudem bieten wir Schulungen an, um Ihr Team Schritt für Schritt an die neuen Tools heranzuführen."
    },
];

export const FAQSteuerberater = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Klarheit für Ihre digitale Kanzlei-Transformation
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
