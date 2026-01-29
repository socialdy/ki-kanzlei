import { ShoppingCart, MessageSquare, Clock, TrendingDown, LayoutGrid, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: MessageSquare,
        title: "Überlasteter Support",
        description: "Standardfragen zu Lieferstatus und Rücksendungen blockieren Ihr Team stundenlang und verzögern wichtige Antwortzeiten.",
        size: "large",
    },
    {
        icon: Clock,
        title: "Manuelle Bestellpflege",
        description: "Datenübertragung zwischen Shop, ERP und Logistik erfolgt händisch? Das führt zu Fehlern und unnötigem Zeitaufwand.",
        size: "medium",
    },
    {
        icon: TrendingDown,
        title: "Hohe Warenkorb-Abbrecher",
        description: "Interessenten springen ab, weil Fragen nicht sofort geklärt werden können – besonders nachts und am Wochenende.",
        size: "medium",
    },
    {
        icon: LayoutGrid,
        title: "Content-Chaos",
        description: "Produktbeschreibungen für hunderte SKUs und Social-Media-Content manuell zu erstellen, ist unmöglich zu skalieren.",
        size: "large",
    },
    {
        icon: ShoppingCart,
        title: "Inkonsistente Bestandsdaten",
        description: "Lagerbestände werden nicht in Echtzeit synchronisiert, was zu Überverkäufen und unzufriedenen Kunden führt.",
        size: "medium",
    },
    {
        icon: Zap,
        title: "Langsame Personalisierung",
        description: "Individuelle Produktempfehlungen und Retargeting-Kampagnen sind zu aufwendig und erreichen den Kunden zum falschen Zeitpunkt.",
        size: "medium",
    },
];

export const ProblemGridEcommerce = () => {
    return (
        <section id="probleme" className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
                        Engpässe im Online-Handel
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
                        Wir automatisieren Ihre repetitiven Aufgaben, damit Sie sich auf Wachstum, Marke und Strategie konzentrieren können.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        const sizeClasses = {
                            small: "md:col-span-1 lg:col-span-1",
                            medium: "md:col-span-1 lg:col-span-2",
                            large: "md:col-span-2 lg:col-span-3"
                        };
                        return (
                            <div
                                key={index}
                                className={`group p-6 bg-background rounded-2xl border-2 border-border hover-lift cursor-pointer slide-up ${sizeClasses[problem.size as keyof typeof sizeClasses]}`}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-16 slide-up">
                    <Button size="lg" asChild>
                        <a href="#contact">Kostenloses Analysegespräch vereinbaren</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
