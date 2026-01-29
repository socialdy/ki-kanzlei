import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie wird die DSGVO und das Anwaltsgeheimnis gewahrt?",
        answer: "Sicherheit steht an erster Stelle. Wir nutzen ausschließlich DSGVO-konforme Infrastrukturen. Auf Wunsch können unsere Wissensdatenbanken (RAG) komplett lokal oder in einer privaten Cloud betrieben werden, sodass keine sensiblen Mandantendaten Ihr Kanzlei-Ökosystem verlassen."
    },
    {
        question: "Kann die KI auch komplexe österreichische Gesetzestexte verstehen?",
        answer: "Ja. Die verwendeten Sprachmodelle sind auf juristische Fachsprache trainiert. Durch unsere RAG-Technologie 'füttern' wir die KI zudem gezielt mit Ihren eigenen Dokumenten und spezifischen Fachquellen, um höchste Präzision im österreichischen Kontext zu garantieren."
    },
    {
        question: "Ersetzt die KI die juristische Vorarbeit von Rechtsanwaltsanwärtern?",
        answer: "Nein, sie dient als mächtiges Werkzeug zur Unterstützung. Die KI übernimmt die mühsame Informations-Extrahierung und Recherche, die finale rechtliche Prüfung und Würdigung bleibt immer beim Experten. Sie gewinnen jedoch enorm an Geschwindigkeit."
    },
    {
        question: "Wie zeitaufwendig ist die Implementierung in der Kanzlei?",
        answer: "Wir haben den Prozess so optimiert, dass die ersten Systeme (wie das KI-Sekretariat) innerhalb von 30 Tagen einsatzbereit sind. Die Wissensdatenbanken werden sukzessive aufgebaut, ohne Ihren laufenden Kanzleibetrieb zu stören."
    },
    {
        question: "Ist die Lösung mit Standard-Kanzleisoftware kompatibel?",
        answer: "Ja, wir integrieren unsere Agenten über moderne Schnittstellen so, dass Daten und Ergebnisse einfach in Ihre bestehenden Systeme übernommen werden können."
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
