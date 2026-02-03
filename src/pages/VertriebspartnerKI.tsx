import { useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, CheckCircle2, TrendingUp, Handshake, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const JobSales = () => {
    useEffect(() => {
        document.title = "Vertriebspartner KI (Freelance) – Karriere bei KI Kanzlei Österreich";

        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Werden Sie Vertriebspartner für KI-Lösungen in Österreich. Begleiten Sie Unternehmen in Niederösterreich & Wien bei der digitalen Transformation. Lukrative Provisionen & Mentoring durch Arnold Freissling.');
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHome />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Link - rechts ausgerichtet */}
                        <div className="flex justify-end mb-10">
                            <Link to="/jobs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
                            </Link>
                        </div>

                        {/* Header */}
                        <div className="space-y-6 mb-16">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-primary/10 text-primary border-none rounded-full px-4 py-1.5 text-sm font-medium">
                                    Freelance
                                </Badge>
                                <span className="text-muted-foreground text-sm">Remote / Österreich</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                                Vertriebspartner KI <span className="text-primary">(m/w/d)</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Du hast ein gutes Netzwerk, verstehst Business und kannst Leuten erklären, warum KI ihr Unternehmen nach vorne bringt? Dann könnten wir gut zusammenpassen.
                            </p>
                        </div>

                        {/* Content Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Was du machst</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Du sprichst mit Unternehmern, hörst dir ihre Probleme an und zeigst ihnen, wie wir mit KI helfen können. Du bist kein klassischer Verkäufer, sondern eher ein Berater, der Lösungen bringt.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Was du mitbringst</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        Du kannst auf Augenhöhe mit Geschäftsführern reden
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        Interesse an KI und Automatisierung
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        Gutes Deutsch, Englisch ist ein Plus
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        Keine Vorerfahrung im Vertrieb nötig – das zeigen wir dir
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 border-y border-border py-10">
                            <div className="space-y-2">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Attraktive Provision</h4>
                                <p className="text-sm text-muted-foreground">Wir beteiligen dich fair an jedem Deal. Bei Fleiß sind hohe 5-stellige Beträge absolut machbar.</p>
                            </div>
                            <div className="space-y-2">
                                <Handshake className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Support von Arnold</h4>
                                <p className="text-sm text-muted-foreground">Arnold teilt sein Wissen aus 30 Jahren Vertrieb mit dir. Du lernst direkt aus der Praxis, was funktioniert.</p>
                            </div>
                            <div className="space-y-2">
                                <Users className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Gemeinsam wachsen</h4>
                                <p className="text-sm text-muted-foreground">Du bist kein Einzelkämpfer. Wir unterstützen dich bei Terminen und in der technischen Vorbereitung.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-10 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Klingt gut?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Schreib uns einfach eine Mail mit ein paar Sätzen über dich. Kein Lebenslauf nötig, wir wollen wissen, wer du bist.
                            </p>
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                                <a href="mailto:info@ki-kanzlei.at?subject=Bewerbung%20Vertriebspartner%20KI">
                                    Jetzt bewerben
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default JobSales;
