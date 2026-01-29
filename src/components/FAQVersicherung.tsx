import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie genau erkennt die KI Details in Versicherungspolizzen?",
        answer: "Unsere spezialisierten RAG-Systeme analysieren Polizzen wortgenau. Sie verstehen den Kontext von Deckungsausschlüssen, Selbstbehalten und Versicherungssummen und können diese direkt mit anderen Produkten vergleichen."
    },
    {
        question: "Kann der Voice-Agent auch komplexe Schadensfälle aufnehmen?",
        answer: "Der Agent ist darauf trainiert, alle relevanten Eckdaten (Was, Wann, Wo, Wer) strukturiert abzufragen. Bei sehr komplexen Fällen oder emotionalen Ausnahmesituationen kann das System den Anruf sofort an einen menschlichen Mitarbeiter weiterleiten."
    },
    {
        question: "Ist die Lösung mit meinem bestehenden CRM/Maklerprogramm kompatibel?",
        answer: "Ja, über Schnittstellen (APIs) können wir die gewonnenen Daten (z.B. Schadensprotokolle oder Lead-Infos) direkt in Ihr bestehendes Verwaltungsprogramm übertragen, sodass keine doppelte Dateneingabe nötig ist."
    },
    {
        question: "Wie lange dauert es, bis das System live geht?",
        answer: "Ein KI-Sekretariat für die Schadensaufnahme ist oft innerhalb von 2 bis 3 Wochen voll einsatzbereit. Komplexere Analyse-Tools benötigen inkl. Testphase etwa 4 bis 6 Wochen."
    },
    {
        question: "Was passiert mit den Daten meiner Kunden?",
        answer: "Datenschutz hat oberste Priorität. Alle Daten werden DSGVO-konform auf EU-Servern verarbeitet. Wir nutzen keine Kundendaten zum Training öffentlicher KI-Modelle. Ihre Daten bleiben Ihr Kapital."
    },
];

export const FAQVersicherung = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Klarheit für Ihr digitales Maklerbüro
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
