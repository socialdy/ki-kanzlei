import { Star } from "lucide-react";

// Format name: "Dr. Sarah Huber" -> "Dr. Sarah H."
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

export const TestimonialsHome = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Huber",
      location: "Wien",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Seit der Einführung der KI-Lösung ist alles anders. Meine Klienten bekommen automatisch SMS-Erinnerungen und ich habe endlich wieder Zeit für das Wesentliche. Die Terminausfälle sind von 40% auf unter 10% gesunken - das war für mich ein Game-Changer!",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Georg Gerl",
      position: "Geschäftsführer",
      hotel: "Hotel Gerl",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Wir hatten letztes Jahr ein Problem mit verlorenen Schlüsseln – nachts um 2 Uhr klingelte das Telefon, niemand war da. Jetzt nimmt der Abendrezeptionist ab, klärt das Problem und leitet es weiter. Unsere Gäste sind zufrieden, wir können schlafen.",
      image: "/img/testimonials/referenzen/georg-gerl.jpg",
    },
    {
      name: "Dr. Michael Steiner",
      location: "Graz",
      type: "Psychotherapeut",
      rating: 5.0,
      review: "Ich war am Anfang skeptisch, aber die Lösung ist wirklich DSGVO-konform. Meine Klienten sind begeistert von den SMS-Erinnerungen. Funktioniert einwandfrei.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Thomas Huber",
      position: "Geschäftsführer",
      hotel: "Hotel Bergblick",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Die Implementierung war überraschend unkompliziert. Innerhalb von 30 Tagen war alles am Laufen. Besonders gut finde ich, dass wir bei Fragen immer jemanden erreichen. Das Team steht wirklich hinter der Lösung.",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      name: "Dr. Petra Wagner",
      location: "Salzburg",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Fantastisch! Ich kann mich endlich wieder voll auf meine Klienten konzentrieren. Die administrative Arbeit läuft komplett automatisch. Meine Kollegin hat mich gefragt, wo ich das her habe.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Maria Schneider",
      position: "Geschäftsführerin",
      hotel: "Hotel Astoria",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Wir haben viele Gruppenanfragen – Schulklassen, Vereine, Firmen. Früher habe ich für jedes Angebot Stunden gebraucht. Jetzt wird alles automatisch erstellt und versendet. Ich spare mindestens 10 Stunden pro Woche.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Andreas Müller",
      location: "Innsbruck",
      type: "Psychotherapeut",
      rating: 5.0,
      review: "Unglaublich, wie viel Zeit ich jetzt habe. Früher war ich jeden Abend bis 20 Uhr in der Praxis, jetzt schaffe ich alles in der normalen Arbeitszeit. Die Integration war super einfach.",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Florian Wagner",
      position: "Geschäftsführer",
      hotel: "Hotel Florum",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Besonders praktisch ist, dass alle Kanäle zusammengeführt werden. Früher habe ich morgens erstmal 20 Minuten gebraucht, um alle Nachrichten durchzugehen. Jetzt sehe ich auf einen Blick, was wichtig ist.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Dr. Christine Bauer",
      location: "Linz",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Der Sprachassistent ist der Hammer! Klienten denken, sie sprechen mit einer echten Person. Erstberatungen laufen jetzt viel effizienter ab.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Petra Fischer",
      position: "Geschäftsführerin",
      hotel: "Hotel Prägant",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Die Benachrichtigungen bei Problemen sind ein echter Game-Changer. Wenn ein Gast ein Problem meldet, wissen wir sofort Bescheid und können reagieren, bevor es eskaliert. Das spart uns Ärger und verbessert die Gästezufriedenheit deutlich.",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Dr. Thomas Fischer",
      location: "Klagenfurt",
      type: "Psychotherapeut",
      rating: 5.0,
      review: "Wir sind 3 Therapeuten in der Praxis und die Terminplanung war immer ein Chaos. Jetzt läuft alles automatisch und die Klienten sind viel zufriedener. Kann ich nur weiterempfehlen!",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    {
      name: "Robert Bauer",
      position: "Geschäftsführer",
      hotel: "Hotel Romantik",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Die Integration mit unserem Buchungssystem hat perfekt funktioniert. Keine Probleme, alles läuft reibungslos. Wir haben jetzt viel mehr Zeit für unsere Gäste und müssen uns nicht mehr um die ganzen administrativen Aufgaben kümmern.",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
      name: "Dr. Elisabeth Gruber",
      location: "Bregenz",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Besonders beeindruckt hat mich, dass das System sogar unseren Vorarlberger Dialekt versteht. Meine älteren Klienten fühlen sich sehr gut aufgehoben und ich spare täglich 2-3 Stunden.",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      name: "Sabine Gruber",
      position: "Geschäftsführerin",
      hotel: "Hotel Spa",
      location: "Österreich",
      type: "Hotel",
      rating: 5.0,
      review: "Die Gesprächsprotokolle helfen uns enorm bei der Qualitätssicherung. Wir können jetzt nachvollziehen, was besprochen wurde und wo wir noch nachbessern müssen. Das war vorher einfach nicht möglich.",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Dr. Wolfgang Zimmermann",
      location: "St. Pölten",
      type: "Psychotherapeut",
      rating: 5.0,
      review: "Ehrlich gesagt, ich war am Anfang sehr skeptisch. Aber das System funktioniert wirklich perfekt. Von der ersten Terminbuchung bis zur Nachsorge - alles automatisch. Meine Praxis läuft wie ein Schweizer Uhrwerk.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Dr. Sabine Koller",
      location: "Villach",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Die Dokumentation war mein größter Zeitfresser. Jetzt macht das die KI automatisch und ich kann mich voll auf meine Klienten konzentrieren. Meine Lebensqualität hat sich deutlich verbessert.",
      image: "https://randomuser.me/api/portraits/women/87.jpg",
    },
    {
      name: "Dr. Robert Leitner",
      location: "Dornbirn",
      type: "Psychotherapeut",
      rating: 5.0,
      review: "Die beste Entscheidung, die wir je getroffen haben! Nach nur 3 Monaten hatten wir die Kosten wieder drin. Mein ganzes Team und alle Klienten sind begeistert. Kann ich jedem empfehlen.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dr. Monika Fuchs",
      location: "Steyr",
      type: "Psychotherapeutin",
      rating: 5.0,
      review: "Was mich am meisten überrascht hat: Die KI erkennt wirklich emotionale Nuancen in den Gesprächen. Manchmal denke ich, sie ist einfühlsamer als manche Menschen. Die Klienten merken den Unterschied.",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
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
            Zahlreiche Unternehmen vertrauen bereits auf KI Kanzlei
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
                        <div className="text-xs text-muted-foreground">
                          {testimonial.hotel 
                            ? `${testimonial.position}, ${testimonial.hotel}, ${testimonial.location}`
                            : `${testimonial.type}, ${testimonial.location}`
                          }
                        </div>
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
                        <div className="text-xs text-muted-foreground">
                          {testimonial.hotel 
                            ? `${testimonial.position}, ${testimonial.hotel}, ${testimonial.location}`
                            : `${testimonial.type}, ${testimonial.location}`
                          }
                        </div>
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

