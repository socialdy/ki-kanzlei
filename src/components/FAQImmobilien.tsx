import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie qualifiziert die KI die Leads vor?",
        answer: "Die KI fragt am Telefon oder im Chat gezielt nach den Suchkriterien, der Dringlichkeit und dem Finanzierungsstatus. Nur wenn das Profil zu Ihrem Objekt passt, wird ein Termin gebucht oder der Lead an Sie weitergeleitet. So sparen Sie wertvolle Zeit bei Besichtigungen."
    },
    {
        question: "Ist die Lösung mit Willhaben und Immowelt kompatibel?",
        answer: "Ja. Wir bündeln alle Anfragen aus den gängigen Immobilienportalen in einem zentralen System. Die KI antwortet sofort mit dem passenden Exposé und startet den Qualifizierungsprozess, egal über welchen Kanal die Anfrage kommt."
    },
    {
        question: "Wie sicher ist meine Objektdatenbank?",
        answer: "Alle Objektdaten und Mietverträge werden DSGVO-konform auf österreichischen oder europäischen Servern verarbeitet. Wir nutzen Ende-zu-Ende-Verschlüsselung und stellen sicher, dass Ihre Daten ausschließlich für Ihre Zwecke genutzt werden."
    },
    {
        question: "Kann die KI auch Termine mit den Eigentümern abstimmen?",
        answer: "Ja. Durch die Integration Ihrer Kalender (und optional der Kalender der Eigentümer) koordiniert die KI Besichtigungsslots vollautomatisch, versendet Bestätigungen und erinnert Interessenten per SMS, um No-Shows zu reduzieren."
    },
    {
        question: "Brauche ich IT-Kenntnisse für die Nutzung?",
        answer: "Keineswegs. Wir übernehmen die komplette Einrichtung und Integration in Ihre bestehenden Workflows. Sie bedienen die KI-Agenten ganz einfach per Sprachnachricht oder über Ihre gewohnten Kommunikationskanäle wie E-Mail oder WhatsApp."
    },
];

export const FAQImmobilien = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Ihr Makler-Geschäft auf das nächste Level heben
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
