import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Ist die Lösung mit meinem bestehenden Praxissystem kompatibel?",
        answer: "Wir integrieren unsere KI über moderne Schnittstellen so, dass Termine und Daten direkt in Ihr bestehendes Verwaltungssystem fließen. Wir prüfen die technische Machbarkeit individuell in unserem Analysegespräch."
    },
    {
        question: "Wie wird die ärztliche Verschwiegenheit und DSGVO gewahrt?",
        answer: "Sicherheit steht für uns an oberster Stelle. Alle Lösungen werden auf DSGVO-konformen Servern in Europa betrieben. Die Sprachverarbeitung erfolgt verschlüsselt und wir stellen sicher, dass alle Einwilligungen rechtssicher eingeholt werden."
    },
    {
        question: "Kann die KI auch Rezepte und Befundanfragen bearbeiten?",
        answer: "Ja. Der KI-Manager kann vordefinierte Anfragen entgegennehmen, die notwendigen Daten abgleichen und Antwortentwürfe zur finalen medizinischen Freigabe durch das Personal vorbereiten."
    },
    {
        question: "Hilft die Lösung auch bei akutem Personalmangel?",
        answer: "Absolut. Unsere KI übernimmt die repetitive Erstkommunikation am Telefon komplett. Dadurch kann die Praxis auch mit weniger Personal am Empfang die volle Erreichbarkeit für die Patienten sicherstellen."
    },
    {
        question: "Was passiert, wenn die KI einen Notfall am Telefon erkennt?",
        answer: "Die KI ist darauf trainiert, medizinische Notfallsituationen sofort zu erkennen. In solchen Fällen kann der Anruf priorisiert an den Notruf (144) verwiesen oder direkt zu einem Mitarbeiter durchgestellt werden."
    },
];

export const FAQAerzte = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Ihr Weg zur effizienten und patientenorientierten Ordination
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
