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

export const TestimonialsVersicherung = () => {
    const testimonials = [
        {
            name: "Johann Mair",
            position: "Geschäftsführer",
            firm: "Mair Broker",
            location: "Innsbruck",
            rating: 5.0,
            review: "Der KI-Schadensassistent ist ein Gamechanger. Unsere Kunden können Schäden jetzt 24/7 melden. Die Daten kommen fix und fertig aufbereitet bei uns an. Ein toller Service!",
            image: "https://randomuser.me/api/portraits/men/61.jpg",
        },
        {
            name: "Andrea Hofer",
            position: "Maklerin",
            firm: "Hofer Finanz",
            location: "Villach",
            rating: 5.0,
            review: "Die Polizzen-Analyse spart uns Stunden an Recherchezeit. Wir können Kunden in Sekunden die Unterschiede ihrer Altverträge aufzeigen. Die Abschlussquote ist spürbar gestiegen.",
            image: "https://randomuser.me/api/portraits/women/61.jpg",
        },
        {
            name: "Simon Egger",
            position: "Inhaber",
            firm: "Egger Vorsorge",
            location: "Salzburg",
            rating: 5.0,
            review: "Endlich eine KI-Lösung, die wirklich funktioniert. Die Vorqualifizierung der Leads filtert die 'Spreu vom Weizen', sodass ich mich auf die wirklich wichtigen Termine konzentriere.",
            image: "https://randomuser.me/api/portraits/men/62.jpg",
        },
    ];

    return (
        <section id="referenzen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
                        Erfolge unserer Kunden
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Wie Makler durch KI ihren Vertrieb und Service transformieren
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
                                                <div className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.firm}</div>
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
                        <span>basierend auf Maklerbewertungen</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
