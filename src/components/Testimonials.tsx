import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Huber",
      location: "Wien",
      rating: 5.0,
      review: "Seit der Einführung der KI-Lösung ist alles anders. Meine Patienten bekommen automatisch SMS-Erinnerungen und ich habe endlich wieder Zeit für das Wesentliche. Die Terminausfälle sind von 40% auf unter 10% gesunken - das war für mich ein Game-Changer!",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Dr. Michael Steiner",
      location: "Graz",
      rating: 5.0,
      review: "Ich war am Anfang skeptisch, aber die Lösung ist wirklich DSGVO-konform. Meine Patienten sind begeistert von den SMS-Erinnerungen. Funktioniert einwandfrei.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Petra Wagner",
      location: "Salzburg",
      rating: 5.0,
      review: "Fantastisch! Ich kann mich endlich wieder voll auf meine Patienten konzentrieren. Die administrative Arbeit läuft komplett automatisch. Meine Kollegin hat mich gefragt, wo ich das her habe.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Dr. Andreas Müller",
      location: "Innsbruck",
      rating: 5.0,
      review: "Unglaublich, wie viel Zeit ich jetzt habe. Früher war ich jeden Abend bis 20 Uhr in der Praxis, jetzt schaffe ich alles in der normalen Arbeitszeit. Die Integration war super einfach.",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Dr. Christine Bauer",
      location: "Linz",
      rating: 5.0,
      review: "Der Sprachassistent ist der Hammer! Patienten denken, sie sprechen mit einer echten Person. Erstberatungen laufen jetzt viel effizienter ab.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Dr. Thomas Fischer",
      location: "Klagenfurt",
      rating: 5.0,
      review: "Wir sind 3 Therapeuten in der Praxis und die Terminplanung war immer ein Chaos. Jetzt läuft alles automatisch und die Patienten sind viel zufriedener. Kann ich nur weiterempfehlen!",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    {
      name: "Dr. Elisabeth Gruber",
      location: "Bregenz",
      rating: 5.0,
      review: "Besonders beeindruckt hat mich, dass das System sogar unseren Vorarlberger Dialekt versteht. Meine älteren Patienten fühlen sich sehr gut aufgehoben und ich spare täglich 2-3 Stunden.",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      name: "Dr. Wolfgang Zimmermann",
      location: "St. Pölten",
      rating: 5.0,
      review: "Ehrlich gesagt, ich war am Anfang sehr skeptisch. Aber das System funktioniert wirklich perfekt. Von der ersten Terminbuchung bis zur Nachsorge - alles automatisch. Meine Praxis läuft wie ein Schweizer Uhrwerk.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Dr. Sabine Koller",
      location: "Villach",
      rating: 5.0,
      review: "Die Dokumentation war mein größter Zeitfresser. Jetzt macht das die KI automatisch und ich kann mich voll auf meine Patienten konzentrieren. Meine Lebensqualität hat sich deutlich verbessert.",
      image: "https://randomuser.me/api/portraits/women/87.jpg",
    },
    {
      name: "Dr. Robert Leitner",
      location: "Dornbirn",
      rating: 5.0,
      review: "Die beste Entscheidung, die wir je getroffen haben! Nach nur 3 Monaten hatten wir die Kosten wieder drin. Mein ganzes Team und alle Patienten sind begeistert. Kann ich jedem empfehlen.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dr. Monika Fuchs",
      location: "Steyr",
      rating: 5.0,
      review: "Was mich am meisten überrascht hat: Die KI erkennt wirklich emotionale Nuancen in den Gesprächen. Manchmal denke ich, sie ist einfühlsamer als manche Menschen. Die Patienten merken den Unterschied.",
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
            Über 15 Praxen vertrauen bereits auf KI Kanzlei
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
            <span>basierend auf OMR & Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};
