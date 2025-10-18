import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="gradient-hero section-spacing overflow-hidden pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
              Ihr deutscher KI-Partner für Psychotherapie
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up">
            Wir digitalisieren Ihre Praxis in nur{" "}
            <span className="text-primary">30 Tagen</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            Überlastet von Papierbergen und Routineaufgaben? Mit unserer KI-gestützten Lösung 
            automatisieren Sie Ihre Praxisprozesse – schnell, sicher und DSGVO-konform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <Button size="lg" className="w-full sm:w-auto">
              Jetzt starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Kostenlose Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 fade-in">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary">15h</div>
              <div className="text-sm text-muted-foreground mt-2">gespart pro Woche</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground mt-2">mehr Patienten</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-2">Praxen vertrauen uns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
