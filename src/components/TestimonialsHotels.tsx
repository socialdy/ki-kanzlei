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

export const TestimonialsHotels = () => {
  const testimonials = [

    {
      name: "Thomas Huber",
      position: "Geschäftsführer",
      hotel: "Hotel Bergblick",
      location: "Österreich",
      rating: 5.0,
      review: "Die Implementierung war überraschend unkompliziert. Innerhalb von 30 Tagen war alles am Laufen. Besonders gut finde ich, dass wir bei Fragen immer jemanden erreichen. Das Team steht wirklich hinter der Lösung.",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      name: "Maria Schneider",
      position: "Geschäftsführerin",
      hotel: "Hotel Astoria",
      location: "Österreich",
      rating: 5.0,
      review: "Wir haben viele Gruppenanfragen – Schulklassen, Vereine, Firmen. Früher habe ich für jedes Angebot Stunden gebraucht. Jetzt wird alles automatisch erstellt und versendet. Ich spare mindestens 10 Stunden pro Woche.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Florian Wagner",
      position: "Geschäftsführer",
      hotel: "Hotel Florum",
      location: "Österreich",
      rating: 5.0,
      review: "Besonders praktisch ist, dass alle Kanäle zusammengeführt werden. Früher habe ich morgens erstmal 20 Minuten gebraucht, um alle Nachrichten durchzugehen. Jetzt sehe ich auf einen Blick, was wichtig ist.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Petra Fischer",
      position: "Geschäftsführerin",
      hotel: "Hotel Prägant",
      location: "Österreich",
      rating: 5.0,
      review: "Die Benachrichtigungen bei Problemen sind ein echter Game-Changer. Wenn ein Gast ein Problem meldet, wissen wir sofort Bescheid und können reagieren, bevor es eskaliert. Das spart uns Ärger und verbessert die Gästezufriedenheit deutlich.",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Robert Bauer",
      position: "Geschäftsführer",
      hotel: "Hotel Romantik",
      location: "Österreich",
      rating: 5.0,
      review: "Die Integration mit unserem Buchungssystem hat perfekt funktioniert. Keine Probleme, alles läuft reibungslos. Wir haben jetzt viel mehr Zeit für unsere Gäste und müssen uns nicht mehr um die ganzen administrativen Aufgaben kümmern.",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
      name: "Sabine Gruber",
      position: "Geschäftsführerin",
      hotel: "Hotel Spa",
      location: "Österreich",
      rating: 5.0,
      review: "Die Gesprächsprotokolle helfen uns enorm bei der Qualitätssicherung. Wir können jetzt nachvollziehen, was besprochen wurde und wo wir noch nachbessern müssen. Das war vorher einfach nicht möglich.",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  return (
    <section id="referenzen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            Zahlreiche Hotelbetriebe vertrauen bereits auf KI Kanzlei
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

