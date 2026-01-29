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

export const TestimonialsSteuerberater = () => {
    const testimonials = [
        {
            name: "Mag. Stefan Leitner",
            position: "Kanzleiinhaber",
            firm: "Leitner Steuerberatung",
            location: "Graz",
            rating: 5.0,
            review: "Die KI-Vorerfassung für BMD hat unseren Workflow massiv beschleunigt. Wir sparen uns pro Woche ca. 12 Stunden mühsame Dateneingabe. Die Genauigkeit der Beleg-Erkennung ist beeindruckend.",
            image: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        {
            name: "Mag. Kathrin Schneider",
            position: "Partnerin",
            firm: "Tax Wien",
            location: "Wien",
            rating: 5.0,
            review: "Dank des KI-Sekretariats haben wir endlich wieder Zeit für die strategische Beratung. Standardfragen zu Fristen werden rund um die Uhr beantwortet, ohne dass mein Team unterbrochen wird.",
            image: "https://randomuser.me/api/portraits/women/59.jpg",
        },
        {
            name: "Mag. Manuel Weber",
            position: "Steuerberater",
            firm: "Weber & Partner",
            location: "Linz",
            rating: 5.0,
            review: "Die Implementierung war unkompliziert und der Support exzellent. Das System zahlt sich durch die enorme Zeitersparnis beim Jahresabschluss bereits nach wenigen Monaten aus.",
            image: "https://randomuser.me/api/portraits/men/60.jpg",
        },
    ];

    return (
        <section id="referenzen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
                        Stimmen zufriedener Kanzleien
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Warum Steuerberater in ganz Österreich auf unsere KI-Systeme vertrauen
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
                        <span>basierend auf Kanzleibewertungen</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
