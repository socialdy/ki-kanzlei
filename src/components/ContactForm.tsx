import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Datenschutzerklärung erforderlich",
        description: "Bitte akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
    });
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Bereit? Lass uns deine Praxis transformieren
          </h2>
          <p className="text-lg text-muted-foreground">
            Buche eine kostenlose, unverbindliche Demo oder stell deine Fragen
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">Vorname *</Label>
              <Input id="firstName" required placeholder="Max" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nachname *</Label>
              <Input id="lastName" required placeholder="Mustermann" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required placeholder="max@praxis.de" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" type="tel" placeholder="+43 123 456789" />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="practice">Praxis-Name *</Label>
            <Input id="practice" required placeholder="Praxis für Psychotherapie" />
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="message">Nachricht</Label>
            <Textarea
              id="message"
              placeholder="Erzählen Sie uns von Ihren Herausforderungen..."
              rows={5}
            />
          </div>

          <div className="flex items-start gap-3 mb-8">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
              Ich akzeptiere die{" "}
              <a href="#" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              und bin damit einverstanden, kontaktiert zu werden.
            </Label>
          </div>

          <Button type="submit" size="lg" variant="gradient" className="w-full md:w-auto">
            Jetzt Demo buchen
          </Button>
        </form>
      </div>
    </section>
  );
};
