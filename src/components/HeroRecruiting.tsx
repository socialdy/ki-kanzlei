import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

interface HeroRecruitingProps {
    onCtaClick: () => void;
}

export const HeroRecruiting = ({ onCtaClick }: HeroRecruitingProps) => {
    return (
        <section id="home" className="gradient-hero section-spacing overflow-hidden min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl w-full">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block slide-up mt-8 md:mt-0">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                            Ihr österreichischer KI‑Partner für Recruiting- & Personalagenturen
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up">
                        KI Lösungen für <span className="text-primary">Recruiting</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
                        Vom 24/7 KI-Bewerber-Screening bis zu automatisierten Erstgesprächen: Wir bauen Lösungen, die Ihre Time-to-Hire drastisch verkürzen und Ihre Recruiter entlasten.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 slide-up">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto"
                            asChild
                            onClick={() => trackCtaClick("Analysegespräch", "HeroRecruiting")}
                        >
                            <a href="#contact">
                                Kostenloses Analysegespräch
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto px-8 h-14 text-lg font-bold border-2 border-primary/10 hover:border-primary/30 hover:bg-primary/5 text-gray-700 transition-all rounded-xl active:scale-[0.98] group relative overflow-hidden bg-white/40 backdrop-blur-sm"
                            onClick={() => {
                                trackCtaClick("Whitepaper sichern", "HeroRecruiting");
                                onCtaClick();
                            }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Kostenloses Whitepaper sichern
                                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary animate-pulse" />
                            </span>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 fade-in">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary">50%</div>
                            <div className="text-sm text-muted-foreground mt-2">schnellere Time-to-Hire</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
                            <div className="text-sm text-muted-foreground mt-2">Bewerber-Annahme</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
                            <div className="text-sm text-muted-foreground mt-2">Qualifizierte Leads</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
