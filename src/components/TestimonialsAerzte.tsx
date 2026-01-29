import { Star } from "lucide-react";

const formatName = (name: string): string => {
    const parts = name.split(' ');
    if (parts.length === 0) return name;

    const titlePattern = /^(Dr\.|Prof\.|Mag\.|Dipl\.|Ing\.)/i;
    const hasTitle = titlePattern.test(parts[0]);

    if (hasTitle && parts.length >= 3) {
        return `${parts[0]} ${parts[1]} ${parts[2][0]}.`;
    } else if (parts.length >= 2) {
        return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }

    return name;
};

export const TestimonialsAerzte = () => {
    const testimonials = [
        {
            name: "Dr. Maria Berger",
            position: "Hausärztin",
            clinic: "Ordination Dr. Berger",
            location: "Graz",
            rating: 5.0,
            review: "Seit wir den KI-Empfangs-Assistenten nutzen, hat sich die Atmosphäre am Empfang komplett beruhigt. Wir verpassen keine Anrufe mehr und meine Assistenten können sich wieder voll auf die Patienten konzentrieren, die physisch vor Ort sind.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "Dr. Peter Schmid",
            position: "Zahnarzt",
            clinic: "Zahnzentrum Schmid",
            location: "Wien",
            rating: 5.0,
            review: "Die Termin-Triage ist genial. Der KI-Agent fragt genau ab, ob es sich um einen Notfall oder eine Routineuntersuchung handelt, und vergibt die passenden Zeitslots. Wir sparen uns mindestens 15 Stunden Telefonzeit pro Woche.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            name: "Dr. Julia Wagner",
            position: "Dermatologin",
            clinic: "Hautpraxis Wagner",
            location: "Innsbruck",
            rating: 5.0,
            review: "Die automatisierte Beantwortung von E-Mail-Anfragen hat unser Postfach im Griff. Dass alles DSGVO-konform auf EU-Servern läuft, war für uns die Grundvoraussetzung. Wir sind begeistert von der Zeitersparnis.",
            image: "https://randomuser.me/api/portraits/women/42.jpg",
        },
    ];

    return (
        <section id="referenzen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
                        Erfahrungen aus der Praxis
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Wie KI-Lösungen den Alltag in österreichischen Ordinationen verbessern
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="flex animate-scroll-right-to-left">
                        {testimonials.concat(testimonials).map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 mx-4"
                            >
                                <div className="bg-card rounded-2xl p-6 hover-lift border border-border h-full slide-up cursor-pointer">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="font-semibold text-sm">{formatName(testimonial.name)}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.clinic}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                            <Star className="w-4 h-4 fill-primary text-primary" />
                                            <span className="font-semibold">{testimonial.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        "{testimonial.review}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>
                        <span className="font-semibold">5.0 / 5</span>
                        <span>basierend auf Patienten- & Praxisfeedback</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
