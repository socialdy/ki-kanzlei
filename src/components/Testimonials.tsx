import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Lisa Meyer",
      location: "Berlin",
      rating: 4.8,
      review: "Mit KI Kanzlei haben wir unsere Termin-Ausfallrate um 60% reduziert. Endlich weniger Admin-Chaos!",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Dr. Thomas König",
      location: "Köln",
      rating: 5.0,
      review: "15 Stunden pro Woche gespart. Die Voice Agent + n8n Kombination ist ein Game-Changer für unsere Praxis.",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Dr. Sandra Weber",
      location: "Zürich",
      rating: 4.9,
      review: "Sicher, schnell, DSGVO-konform. Genau das, was wir brauchten. Support ist outstanding!",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section id="testimonials" className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 15 Praxen vertrauen bereits auf KI Kanzlei
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 hover-lift border border-border"
            >
              {/* Header with Avatar and Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
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
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold">4.8 / 5</span>
            <span>basierend auf OMR & Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};
