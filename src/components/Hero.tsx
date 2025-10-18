import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="gradient-hero section-spacing overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Ihr deutscher KI-Partner für Psychotherapie
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Wir digitalisieren Ihre Praxis in nur{" "}
              <span className="text-primary">30 Tagen</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Überlastet von Papierbergen und Routineaufgaben? Mit unserer KI-gestützten Lösung 
              automatisieren Sie Ihre Praxisprozesse – schnell, sicher und DSGVO-konform.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">
                21 Bewertungen • 15+ Praxen vertrauen uns
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto">
                Kostenlose Demo buchen
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Whitepaper downloaden
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-3xl blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="space-y-6">
                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary">15h</div>
                      <div className="text-sm text-muted-foreground">gespart/Woche</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4">
                      <div className="text-3xl font-bold text-accent">30%</div>
                      <div className="text-sm text-muted-foreground">mehr Patienten</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {["KI Voice Agent 24/7", "n8n Workflows", "DSGVO-konform"].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
