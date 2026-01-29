import { Star } from "lucide-react";

// Format name: "Max Mustermann" -> "Max M."
const formatName = (name: string): string => {
    const parts = name.split(' ');
    if (parts.length === 0) return name;

    // Check if first part is a title (Dr., etc.)
    const titlePattern = /^(Dr\.|Prof\.|Mag\.|Dipl\.|Ing\.)/i;
    const hasTitle = titlePattern.test(parts[0]);

    if (hasTitle && parts.length >= 3) {
        // Title + First Name + Last Name
        return `${parts[0]} ${parts[1]} ${parts[2][0]}.`;
    } else if (parts.length >= 2) {
        // First Name + Last Name
        return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }

    return name;
};

export const TestimonialsHausverwaltung = () => {
    const testimonials = [
        {
            name: "Ingo Berger",
            position: "Hausverwalter",
            hotel: "Berger Immobilien",
            location: "Klagenfurt",
            rating: 5.0,
            review: "Die KI-Mieter-Hotline hat unseren Arbeitsalltag komplett verändert. Mieter erhalten sofort Antworten auf Standardfragen, und wir werden nur noch bei echten Notfällen alarmiert. Das spart uns pro Woche locker 15 Stunden Telefonzeit.",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        {
            name: "Cornelia Lackner",
            position: "Senior Property Manager",
            hotel: "Lackner & Partner",
            location: "Steyr",
            rating: 5.0,
            review: "Früher war die Suche in alten Protokollen und Verträgen eine Qual. Mit der KI-Wissensdatenbank finden wir jetzt jede Info in Sekunden. Es ist, als hätte man einen Assistenten, der alles auswendig weiß.",
            image: "https://randomuser.me/api/portraits/women/14.jpg",
        },
        {
            name: "Wolfgang Stern",
            position: "Geschäftsführer",
            hotel: "Stern Liegenschaften",
            location: "Wien",
            rating: 5.0,
            review: "Unser Akquise-Agent läuft vollautomatisch auf LinkedIn und hat uns bereits drei neue Liegenschaften zur Verwaltung eingebracht. Die Personalisierung ist so gut, dass die Eigentümer gar nicht merken, dass eine KI am Werk ist.",
            image: "https://randomuser.me/api/portraits/men/21.jpg",
        },
        {
            name: "Beatrix Gruber",
            position: "Inhaberin",
            hotel: "Gruber & Cie",
            location: "Eisenstadt",
            rating: 5.0,
            review: "Das Multichannel-System bündelt WhatsApp und E-Mail perfekt. Keine Schadensmeldung geht mehr unter, und die Mieter sind begeistert von der schnellen Reaktionszeit. Ein absolutes Muss für moderne Verwalter.",
            image: "https://randomuser.me/api/portraits/women/31.jpg",
        },
    ];

    return (
        <section id="referenzen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
                        Stimmen aus der Branche
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Erfolgreiche Hausverwaltung durch intelligente Automatisierung
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="flex animate-scroll-right-to-left">
                        {/* First set */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 w-80 mx-4"
                            >
                                <div className="bg-card rounded-2xl p-6 hover-lift border border-border h-full slide-up cursor-pointer">
                                    {/* Header with Avatar and Rating */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="font-semibold text-sm">{formatName(testimonial.name)}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.hotel}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                            <Star className="w-4 h-4 fill-primary text-primary" />
                                            <span className="font-semibold">{testimonial.rating}</span>
                                        </div>
                                    </div>

                                    {/* Review */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        "{testimonial.review}"
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* Second set for seamless loop */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 w-80 mx-4"
                            >
                                <div className="bg-card rounded-2xl p-6 hover-lift border border-border h-full slide-up cursor-pointer">
                                    {/* Header with Avatar and Rating */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="font-semibold text-sm">{formatName(testimonial.name)}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.hotel}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                            <Star className="w-4 h-4 fill-primary text-primary" />
                                            <span className="font-semibold">{testimonial.rating}</span>
                                        </div>
                                    </div>

                                    {/* Review */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        "{testimonial.review}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>
                        <span className="font-semibold">5.0 / 5</span>
                        <span>basierend auf Kundenbewertungen</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
