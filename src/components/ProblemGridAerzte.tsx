import { PhoneOff, Clock, UserMinus, MessageSquare, ClipboardList, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: PhoneOff,
        title: "Dauerbesetzt am Empfang",
        description: "Patienten hängen in der Warteschleife oder erreichen niemanden. Das führt zu Frustration und unnötigem Stress für Ihre Assistenten vor Ort.",
        size: "large",
    },
    {
        icon: UserMinus,
        title: "Überlastetes Personal",
        description: "Ihr Team verbringt wertvolle Zeit mit repetitiven Telefonaten zur Terminvergabe, statt sich um die Patienten in der Ordination zu kümmern.",
        size: "medium",
    },
    {
        icon: Clock,
        title: "Terminbuchung nur zu Kernzeiten",
        description: "Patienten möchten Termine oft abends oder am Wochenende buchen. Wer hier keinen 24/7 Service bietet, verliert Patienten an Online-Portale.",
        size: "medium",
    },
    {
        icon: MessageSquare,
        title: "Flut an E-Mail-Anfragen",
        description: "Fragen zu Rezepten, Befunden oder Öffnungszeiten überfluten das Postfach. Die manuelle Beantwortung bindet täglich Stunden an Arbeitszeit.",
        size: "large",
    },
    {
        icon: ClipboardList,
        title: "Administrative Zettelwirtschaft",
        description: "Notizen von Telefonaten müssen später mühsam ins System übertragen werden. Das ist fehleranfällig und zeitraubend.",
        size: "medium",
    },
    {
        icon: ShieldAlert,
        title: "Hohe Datenschutzhürden",
        description: "Die Automatisierung scheitert oft an der Sorge um die Patientendaten. Standard-Tools erfüllen selten die strengen DSGVO-Anforderungen für Ärzte.",
        size: "medium",
    },
];

export const ProblemGridAerzte = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Herausforderungen in der Ordination
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Medizinische Qualität erfordert Fokus. Wir eliminieren das Telefon-Chaos am Empfang, damit Ihr Team wieder Zeit für das Wesentliche hat.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        const sizeClasses = {
                            small: "md:col-span-1 lg:col-span-1",
                            medium: "md:col-span-1 lg:col-span-2",
                            large: "md:col-span-2 lg:col-span-3"
                        };
                        return (
                            <div
                                key={index}
                                className={`group p-6 bg-background rounded-2xl border-2 border-border hover-lift cursor-pointer slide-up ${sizeClasses[problem.size as keyof typeof sizeClasses]}`}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-16 slide-up">
                    <Button size="lg" asChild>
                        <a href="#contact">Kostenloses Analysegespräch vereinbaren</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
