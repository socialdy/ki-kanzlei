import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Mit KI Kanzlei haben wir unsere Termin-Ausfallrate um 60% reduziert. Endlich weniger Admin-Chaos!",
    name: "Dr. Lisa Meyer",
    practice: "Praxis für Psychotherapie, Berlin",
    avatar: "LM"
  },
  {
    quote: "15 Stunden pro Woche gespart. Die Voice Agent + n8n Kombination ist ein Game-Changer für unsere Praxis.",
    name: "Dr. Thomas König",
    practice: "Psychotherapie-Zentrum, Köln",
    avatar: "TK"
  },
  {
    quote: "Sicher, schnell, DSGVO-konform. Genau das, was wir brauchten. Support ist outstanding!",
    name: "Dr. Sandra Weber",
    practice: "Praxis Weber, Zürich",
    avatar: "SW"
  }
];

export const Testimonials = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Über 15 Praxen vertrauen bereits auf unsere Lösungen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-2xl border-t-4 border-primary hover-lift"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
