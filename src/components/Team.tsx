import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Maximilian Schneider",
    title: "CEO & KI-Spezialist",
    bio: "10+ Jahre Erfahrung in Healthcare Tech. Experte für Voice AI und Prozessautomatisierung.",
    avatar: "MS",
    linkedin: "#"
  },
  {
    name: "Julia Hartmann",
    title: "CTO & n8n Architektin",
    bio: "Spezialistin für Workflow-Automatisierung und DSGVO-konforme Integration.",
    avatar: "JH",
    linkedin: "#"
  },
  {
    name: "Dr. Michael Bauer",
    title: "Medical Advisor",
    bio: "Psychotherapeut mit 15 Jahren Praxiserfahrung. Berät bei Patient Journey Design.",
    avatar: "MB",
    linkedin: "#"
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-base">
                  <span className="text-5xl font-bold text-primary">{member.avatar}</span>
                </div>
                <a
                  href={member.linkedin}
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
