import { MessageSquare, Zap, ShoppingBag, TrendingUp, Search, Scale } from "lucide-react";

const useCases = [
    {
        icon: MessageSquare,
        title: "24/7 KI-Kundensupport",
        description: "Ein intelligenter Support-Agent, der auf Basis Ihrer FAQ und Bestelldaten Anfragen sofort löst – von 'Wo ist mein Paket?' bis zu detaillierten Produktfragen.",
    },
    {
        icon: Zap,
        title: "Automatisierte Bestellabwicklung",
        description: "KI-gestützte Synchronisation zwischen Shop, Lager und Buchhaltung. Automatische Erkennung von Inkonsistenzen und proaktive Fehlerbehebung.",
    },
    {
        icon: ShoppingBag,
        title: "Dynamic Product Description",
        description: "KI generiert SEO-optimierte Produktbeschreibungen und Captions für hunderte Artikel in Minuten, perfekt abgestimmt auf Ihre Brand-Voice.",
    },
    {
        icon: TrendingUp,
        title: "Intelligente Lead-Nurturing",
        description: "Personalisierte E-Mail-Flows und LinkedIn-Retargeting auf Autopilot, die Warenkorbabbrecher zurückgewinnen und Bestandskunden binden.",
    },
    {
        icon: Search,
        title: "Smart Product Discovery",
        description: "KI-gestützte Suchfunktion und Empfehlungs-Engine, die die Intention des Kunden versteht und die Add-to-Cart-Rate signifikant steigert.",
    },
    {
        icon: Scale,
        title: "DSGVO-Sicheres Retail-CRM",
        description: "Datenschutzkonforme Konsolidierung von Kundendaten über alle Kanäle hinweg für eine 360-Grad-Sicht und prädiktive Verkaufsanalyse.",
    },
];

export const UseCasesEcommerce = () => {
    return (
        <section id="loesungen" className="section-spacing bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        KI‑Lösungen für Retail‑Wachstum
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Wir bauen produktionsreife KI-Systeme, die Ihren operativen Aufwand senken und den Umsatz steigern.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover-lift cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
