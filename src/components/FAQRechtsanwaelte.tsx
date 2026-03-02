import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie schaut's mit DSGVO und Anwaltsgeheimnis aus?",
        answer: "Das hat bei uns oberste Priorität. Wir arbeiten ausschließlich mit DSGVO-konformen Systemen. Auf Wunsch laufen die Wissensdatenbanken komplett lokal oder in einer privaten Cloud – Ihre Mandantendaten verlassen die Kanzlei nicht."
    },
    {
        question: "Versteht die KI auch österreichische Gesetzestexte?",
        answer: "Ja. Die Sprachmodelle können mit juristischer Fachsprache umgehen. Zusätzlich füttern wir die KI gezielt mit Ihren eigenen Dokumenten und Quellen, damit die Ergebnisse zum österreichischen Recht passen."
    },
    {
        question: "Ersetzt die KI die Arbeit von Anwälten?",
        answer: "Nein. Die KI nimmt Ihnen die zeitfressende Recherche und das Durchsuchen von Akten ab. Die rechtliche Bewertung und Entscheidung bleibt immer bei Ihnen. Sie arbeiten einfach schneller."
    },
    {
        question: "Wie lange dauert die Einrichtung?",
        answer: "Die ersten Systeme wie das KI-Sekretariat sind innerhalb von 30 Tagen einsatzbereit. Die Wissensdatenbanken bauen wir Schritt für Schritt auf, ohne den laufenden Betrieb zu stören."
    },
    {
        question: "Funktioniert das mit unserer bestehenden Kanzleisoftware?",
        answer: "Ja. Wir binden unsere Lösungen über Schnittstellen an Ihre bestehenden Systeme an, sodass alles zusammenspielt."
    },
];

export const FAQRechtsanwaelte = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Die häufigsten Fragen, die wir von Kanzleien hören
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
