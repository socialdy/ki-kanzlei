import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Sind eure Systeme mit bestehender Verwaltungs-Software kompatibel?",
        answer: "Ja, wir integrieren unsere KI-Agenten über APIs in gängige E-Government-Systeme, ELAK-Lösungen oder proprietäre Verwaltungssysteme von Städten und Gemeinden."
    },
    {
        question: "Wie wird der Datenschutz bei Bürgerdaten gewährleistet?",
        answer: "Wir nutzen ausschließlich DSGVO-konforme Infrastrukturen in Österreich/EU. Personenbezogene Daten werden verschlüsselt und nur für den spezifischen Behördenzweck verarbeitet. Wir gewährleisten volle Revisionssicherheit."
    },
    {
        question: "Kann die KI auch komplexe Bürgeranfragen beantworten?",
        answer: "Die KI dient als hocheffizienter Erstkontakt und beantwortet alle regelbasierten Fragen (Erforderliche Dokumente, Öffnungszeiten, Fristen, Zuständigkeiten). Bei komplexen rechtlichen Einzelfällen leitet das System automatisch an die zuständigen Sachbearbeiter weiter."
    },
    {
        question: "Ist die Implementierung für Kommunen förderfähig?",
        answer: "Ja. Da unsere Lösungen die Digitalisierung der Verwaltung und die Bürgernähe steigern, fallen sie oft unter Bundes- oder Landes-Förderprogramme zur Verwaltungsmodernisierung (z.B. Digitalisierungsoffensiven). Wir unterstützen Sie bei den technischen Details."
    },
    {
        question: "Wie hoch ist der Aufwand für die Einführung?",
        answer: "Wir setzen auf 'Plug-and-Play'-Integration. Nach der Bereitstellung Ihrer Wissensbasis (Verordnungen, FAQs) ist das System innerhalb weniger Wochen einsatzbereit, ohne Ihren laufenden Betrieb zu stören."
    }
];

export const FAQOeffentlich = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        FAQ zur Verwaltungs‑KI
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Wichtige Fragen zur Digitalisierung öffentlicher Einrichtungen
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
