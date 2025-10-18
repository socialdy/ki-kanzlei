import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Implementierung?",
    answer: "Die vollständige Implementierung dauert in der Regel 30 Tage. Nach einem initialen Kick-off Meeting analysieren wir Ihre Prozesse, konfigurieren die KI Voice Agents und n8n Workflows, und führen umfangreiche Tests durch. Sie erhalten regelmäßige Updates und können jederzeit Anpassungen wünschen."
  },
  {
    question: "Ist die Lösung wirklich DSGVO-konform?",
    answer: "Ja, absolut. Alle Daten werden in der EU (Deutschland/Österreich) gehostet. Wir arbeiten mit zertifizierten Cloud-Providern, implementieren Ende-zu-Ende-Verschlüsselung und stellen sicher, dass alle Patientendaten nach höchsten Datenschutzstandards verarbeitet werden. Sie erhalten von uns ein vollständiges DSGVO-Compliance-Paket."
  },
  {
    question: "Mit welchen Praxis-Systemen integrieren wir?",
    answer: "Wir integrieren mit den meisten gängigen Praxisverwaltungssystemen (PVS) wie Theorg, Albis, Medatixx, und anderen. Über n8n können wir praktisch jedes System anbinden, das eine API oder Datenexport-Funktion bietet. In einem Vorgespräch klären wir die technischen Details mit Ihnen."
  },
  {
    question: "Was passiert mit meinen Patientendaten?",
    answer: "Ihre Patientendaten bleiben Ihre Daten. Wir speichern und verarbeiten sie ausschließlich in Ihrem Auftrag gemäß Auftragsverarbeitungsvertrag (AVV). Die Daten werden verschlüsselt gespeichert, regelmäßig gesichert und Sie können jederzeit den Zugriff widerrufen oder Daten exportieren/löschen."
  },
  {
    question: "Können wir die Lösung wieder kündigen?",
    answer: "Ja, Sie haben volle Flexibilität. Unsere Verträge haben eine Mindestlaufzeit von 6 Monaten, danach monatlich kündbar. Bei Kündigung erhalten Sie alle Ihre Daten in einem standardisierten Format. Es gibt keine versteckten Kosten oder Lock-in-Effekte."
  },
  {
    question: "Was kostet das?",
    answer: "Die Kosten hängen von Ihrem individuellen Setup und der Anzahl der Workflows ab. Ein typisches Package startet bei ca. 599€/Monat (inkl. Voice Agent, 3-5 n8n Workflows, Support). Die Implementierung kostet einmalig ab 2.500€. In einem kostenlosen Erstgespräch erstellen wir ein maßgeschneidertes Angebot."
  },
  {
    question: "Wie zuverlässig ist der Voice Agent?",
    answer: "Unser Voice Agent basiert auf modernster KI-Technologie und erreicht eine Verständnisrate von >95%. Bei Unklarheiten kann der Agent an einen Menschen weiterleiten. Wir trainieren die KI kontinuierlich mit echten Praxis-Dialogen und Sie können jederzeit Anpassungen wünschen. Uptime liegt bei 99.9%."
  },
  {
    question: "Brauchen wir technische Kenntnisse?",
    answer: "Nein. Wir übernehmen die komplette technische Implementierung und Wartung. Sie erhalten ein einfaches Dashboard zur Überwachung und können bei Bedarf einfache Anpassungen selbst vornehmen. Unser Support-Team steht jederzeit zur Verfügung – auch für nicht-technische Fragen."
  }
];

export const FAQ = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles, was Sie über unsere Lösung wissen müssen
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-base"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
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
