import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Arnold Freissling",
    title: "Geschäftsführer & Vertrieb",
    bio: "Hat die Idee zur KI-Kanzlei entwickelt, nachdem er die Probleme seiner Freundin Katja, einer selbstständigen Psychotherapeutin, live und hautnah miterlebt hat.",
    avatar: "AF",
    image: "/img/team/arnold_freissling.png",
    linkedin: "https://at.linkedin.com/in/arnold-freissling-95642b256"
  },
  {
    name: "Markus Wallner",
    title: "Geschäftsführer & Automatisierungsexperte",
    bio: "Spezialist für n8n und Prozessautomatisierung. Entwickelt die technischen Lösungen und implementiert sie System für System.",
    image: "/img/team/markus_wallner.png",
    linkedin: "https://at.linkedin.com/in/markuswallner-social-media-marketing"
  }
];

export const Team = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unser Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experten mit Leidenschaft für Healthcare-Innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-base overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-primary">{member.avatar}</span>
                  )}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-8 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-primary font-semibold mb-3">{member.title}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
