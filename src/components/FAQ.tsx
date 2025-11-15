import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Digitalisierung meiner Praxis?",
    answer: "In nur 30 Tagen ist Ihre Praxis vollständig digitalisiert. Nach dem ersten Gespräch analysieren wir Ihre Prozesse, implementieren die Lösungen System für System und testen alles gründlich. Sie erhalten regelmäßige Updates und können jederzeit Anpassungen wünschen."
  },
  {
    question: "Ist die Lösung wirklich DSGVO-konform?",
    answer: "Ja, absolut. Alle Daten werden in Österreich gehostet. Wir arbeiten mit zertifizierten Cloud-Providern, implementieren Ende-zu-Ende-Verschlüsselung und stellen sicher, dass alle Klientendaten nach höchsten Datenschutzstandards verarbeitet werden. Sie erhalten von uns ein vollständiges DSGVO-Compliance-Paket."
  },
  {
    question: "Wie viel Zeit spare ich wirklich?",
    answer: "Unsere Kunden sparen durchschnittlich 8-10 Stunden pro Woche. Das sind 32-40 Stunden im Monat, die Sie wieder voll und ganz für Ihre Klienten nutzen können. KI-Anrufannahme spart 8h/Woche, automatische Terminplanung 4h/Woche, Dokumentenverarbeitung 2h/Woche und Nachsorge-Aufgaben 1-2h/Woche."
  },
  {
    question: "Was passiert mit meinen Klientendaten?",
    answer: "Ihre Klientendaten bleiben Ihre Daten. Wir speichern und verarbeiten sie ausschließlich in Ihrem Auftrag gemäß Auftragsverarbeitungsvertrag (AVV). Die Daten werden verschlüsselt gespeichert, regelmäßig gesichert und Sie können jederzeit den Zugriff widerrufen oder Daten exportieren/löschen."
  },
  {
    question: "Wie zuverlässig ist die KI-Anrufannahme?",
    answer: "Unser KI-Telefonassistent erreicht eine Verständnisrate von >95%. Bei Unklarheiten kann der Agent an einen Menschen weiterleiten. Wir trainieren die KI kontinuierlich mit echten Praxis-Dialogen und Sie können jederzeit Anpassungen wünschen. Uptime liegt bei 99.9%."
  },
  {
    question: "Brauche ich technische Kenntnisse?",
    answer: "Nein. Wir übernehmen die komplette technische Implementierung und Wartung. Sie können bei Bedarf einfache Anpassungen selbst vornehmen. Unser Support-Team steht jederzeit zur Verfügung – auch für nicht-technische Fragen."
  },
  {
    question: "Was ist, wenn etwas nicht funktioniert?",
    answer: "Unser Support-Team ist für Sie da. Wir überwachen alle Systeme 24/7 und reagieren sofort bei Problemen. Zusätzlich erhalten Sie regelmäßige Updates und können jederzeit Anpassungen wünschen. Unser Ziel ist, dass Sie sich um Ihre Klienten kümmern können, nicht um die Technik."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-spacing">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            Alles, was Sie über unsere Lösung wissen müssen
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
