import { Star } from "lucide-react";

const formatName = (name: string): string => {
    const parts = name.split(' ');
    if (parts.length === 0) return name;
    if (parts.length >= 2) {
        return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }
    return name;
};

export const TestimonialsRecruiting = () => {
    const testimonials = [
        {
            name: "Tobias Berger",
            position: "Head of Recruiting",
            agency: "Talent Austria",
            location: "Wien",
            rating: 5.0,
            review: "Durch die automatisierten Erst-Interviews per Voice haben wir unsere Time-to-Hire um fast 50% gesenkt. Die Kandidaten schätzen die sofortige Rückmeldung. Wir bekommen nur noch top-qualifizierte Profile auf den Tisch.",
            image: "https://randomuser.me/api/portraits/men/57.jpg",
        },
        {
            name: "Stefanie Huber",
            position: "Geschäftsführerin",
            agency: "Huber HR World",
            location: "Linz",
            rating: 5.0,
            review: "Die KI-basierte Sichtung unserer Bewerber-Datenbank ist ein Gamechanger. Wir finden jetzt Talente für neue Stellen, die wir früher übersehen hätten. Unsere Effizienz hat sich verdoppelt.",
            image: "https://randomuser.me/api/portraits/women/57.jpg",
        },
        {
            name: "Lukas Steiner",
            position: "Inhaber",
            agency: "Steiner Recruiting",
            location: "Salzburg",
            rating: 5.0,
            review: "Besonders das Sourcing-Modul spart uns enorm viel Zeit. Der KI-Agent spricht passende Kandidaten personalisiert an und füllt unsere Pipeline, während wir uns auf die Interviews konzentrieren.",
            image: "https://randomuser.me/api/portraits/men/58.jpg",
        },
    ];

    return (
        <section id="referenzen" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
                        Recruiting-Erfolge
                    </h2>
                    <p className="text-lg text-muted-foreground slide-up">
                        Wie moderne Agenturen ihren Prozess mit KI skalieren
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
                                                <div className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.agency}</div>
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
                        <span>basierend auf Kunden- & Kandidatenfeedback</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
