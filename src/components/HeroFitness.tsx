import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroFitness = () => {
    return (
        <section id="home" className="gradient-hero section-spacing overflow-hidden min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl w-full">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block slide-up mt-8 md:mt-0">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                            Ihr österreichischer KI‑Partner für Fitnessstudios & Sportzentren
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up">
                        <span className="text-primary">Mehr Mitglieder</span> durch KI‑Automatisierung
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
                        Vom 24/7 KI-Interessenten-Telefon bis zum automatisierten Lead-Management: Wir bauen Lösungen, die Ihre Studio-Auslastung maximieren und Ihr Personal entlasten.
                    </p>
                    <div className="flex justify-center items-center gap-3 slide-up">
                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <a href="#contact">
                                Kostenloses Analysegespräch
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 fade-in">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary">30%</div>
                            <div className="text-sm text-muted-foreground mt-2">höhere Lead-Conversion</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
                            <div className="text-sm text-muted-foreground mt-2">Mitglieder-Service</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-4xl md:text-5xl font-bold text-primary">DSGVO</div>
                            <div className="text-sm text-muted-foreground mt-2">Sichere Daten</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
