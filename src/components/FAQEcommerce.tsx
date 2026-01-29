import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Funktioniert eure KI mit Shopify/WooCommerce?",
        answer: "Ja, unsere KI-Agenten und Workflows lassen sich nahtlos über APIs oder Tools wie n8n in alle gängigen Shop-Systeme (Shopify, WooCommerce, Shopware, Magento) integrieren."
    },
    {
        question: "Kann die KI wirklich meinen Kundensupport übernehmen?",
        answer: "Wir setzen auf hybride Systeme. Die KI übernimmt bis zu 80% der Standardanfragen (Sendungsstatus, Rückfragen zu Produkten). Komplexe Fälle werden sofort an Ihr Team übergeben – inklusive Zusammenfassung des bisherigen Gesprächs."
    },
    {
        question: "Wie steht es um den Datenschutz meiner Kundendaten?",
        answer: "Höchste Priorität. Wir arbeiten DSGVO-konform, nutzen europäische Serverstandorte und implementieren strikte Daten-Anonymisierungs-Prozesse, bevor Informationen an KI-Modelle übermittelt werden."
    },
    {
        question: "Wie schnell sehe ich Resultate?",
        answer: "Erste Erfolge in der Support-Entlastung sind meist sofort nach dem Go-Live sichtbar. In der Regel ist das Gesamtsystem innerhalb von 30 Tagen produktiv und liefert messbaren ROI."
    },
    {
        question: "Brauche ich ein großes IT-Team für die Wartung?",
        answer: "Nein. Wir bauen die Systeme so auf, dass sie stabil laufen. Wir übernehmen die Wartung und das Monitoring, während Sie die Ergebnisse über einfache Dashboards steuern."
    }
];

export const FAQEcommerce = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        FAQ zum E‑Commerce
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Antworten auf Ihre Fragen zur KI-Skalierung im Onlinehandel
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
