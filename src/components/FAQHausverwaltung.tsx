import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Wie sicher sind die Daten meiner Mieter?",
        answer: "Datensicherheit steht bei uns an erster Stelle. Alle Lösungen sind vollständig DSGVO-konform. Daten werden verschlüsselt verarbeitet und ausschließlich in zertifizierten Rechenzentren (vorzugsweise in Österreich/EU) gehostet. Wir stellen Ihnen alle notwendigen Unterlagen für Ihre Dokumentation bereit."
    },
    {
        question: "Kann die KI wirklich Notfälle von Routineanfragen unterscheiden?",
        answer: "Ja. Unser KI-Modell ist speziell darauf trainiert, Schlagworte und Dringlichkeiten in Mieteranfragen zu erkennen. Ein Wasserrohrbruch wird sofort priorisiert und nach Ihren Vorgaben an den Notdienst weitergeleitet, während eine Frage zur Hausordnung normal protokolliert wird."
    },
    {
        question: "Wie erfolgt die Anbindung an meine bestehende Software?",
        answer: "Wir nutzen flexible Schnittstellen (APIs), um unsere Automatisierungen mit gängigen Hausverwaltungsprogrammen zu verbinden. So fließen Schadensmeldungen oder Termindaten direkt in Ihre gewohnten Workflows ein, ohne dass Sie Daten manuell übertragen müssen."
    },
    {
        question: "Was passiert, wenn die KI eine Frage nicht beantworten kann?",
        answer: "In solchen Fällen erkennt das System die Unsicherheit und leitet das Gespräch entweder an einen verfügbaren Mitarbeiter weiter oder erstellt eine strukturierte Aufgabe für Ihr Team, damit Sie sich später darum kümmern können. Der Mieter erhält sofort eine freundliche Bestätigung, dass sein Anliegen bearbeitet wird."
    },
    {
        question: "Wie lange dauert die Einrichtung für meine Liegenschaften?",
        answer: "Dank unserer modularen Bauweise können wir erste Liegenschaften oft innerhalb von 30 Tagen digitalisieren. Die Implementierung erfolgt schrittweise, wobei wir Ihre spezifischen FAQs und Prozesse in die KI einpflegen."
    },
    {
        question: "Muss ich meine Mieter über die Nutzung von KI informieren?",
        answer: "Ja, Transparenz ist wichtig und rechtlich vorgeschrieben. Wir unterstützen Sie dabei, die Mieter proaktiv zu informieren und stellen entsprechende Textbausteine für Ihre Website, Mietverträge oder Aushänge zur Verfügung."
    }
];

export const FAQHausverwaltung = () => {
    return (
        <section id="faq" className="section-spacing">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Klarheit für Ihren Weg in die KI-gestützte Immobilienverwaltung
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
