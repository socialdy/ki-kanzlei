import { useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Globe, ArrowRight, Code, Rocket, Sparkles, Star, Linkedin, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
    useEffect(() => {
        document.title = "Karriere bei der KI Kanzlei – Jobs in Österreich & Remote";
        window.scrollTo(0, 0);
    }, []);

    const jobOpenings = [
        {
            title: "Vertriebspartner KI (Freelance)",
            category: "Vertrieb & Partnerschaft",
            shortDesc: "Du kennst Unternehmer, verstehst ihre Probleme und kannst unsere KI-Lösungen überzeugend präsentieren.",
            link: "/jobs/vertriebspartner-ki",
            icon: <Users className="w-7 h-7 text-primary" />,
            tags: ["Provision", "Remote"]
        },
        {
            title: "n8n Experte / KI Entwickler (Freelance)",
            category: "Technik & Implementierung",
            shortDesc: "Du baust Workflows in n8n, integrierst APIs und weißt, wie man LLMs sinnvoll einsetzt.",
            link: "/jobs/n8n-experte-ki-entwickler",
            icon: <Code className="w-7 h-7 text-primary" />,
            tags: ["Projektbasiert", "Remote"]
        }
    ];

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHome />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    {/* Hero */}
                    <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                            <Star className="w-4 h-4" /> Wir wachsen
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
                            Lust, an der <span className="text-primary">KI-Entwicklung</span> teilzuhaben?
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Wir suchen Leute, die Lust auf echte Projekte haben. Bei uns arbeitest du nicht als klassischer Angestellter, sondern als Partner auf Augenhöhe.
                        </p>
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
                        {jobOpenings.map((job, index) => (
                            <Link to={job.link} key={index} className="group block">
                                <Card className="h-full border border-border/50 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                                {job.icon}
                                            </div>
                                            <div className="flex gap-2">
                                                {job.tags.map((tag, i) => (
                                                    <Badge key={i} variant="outline" className="border-border text-xs text-muted-foreground">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <span className="text-primary text-sm font-medium">{job.category}</span>
                                            <h3 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {job.shortDesc}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                                            Mehr erfahren <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Geilere Benefits Section */}
                    <div className="max-w-5xl mx-auto mb-24">
                        <h2 className="text-3xl font-bold text-center mb-12">Warum mit uns?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                                <Zap className="w-10 h-10 text-primary mb-6" />
                                <h4 className="font-bold text-xl mb-3">Echte Lösungen</h4>
                                <p className="text-muted-foreground">Wir bauen Dinge, die wirklich gebraucht werden. Kein unnötiger Schnickschnack, sondern Systeme, die Unternehmen im Alltag helfen.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                                <TrendingUp className="w-10 h-10 text-primary mb-6" />
                                <h4 className="font-bold text-xl mb-3">Arbeite, wie du willst</h4>
                                <p className="text-muted-foreground">Freelance und Remote sind bei uns Standard. Solange die Qualität passt, hast du bei deiner Zeiteinteilung volle Freiheit.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                                <Rocket className="w-10 h-10 text-primary mb-6" />
                                <h4 className="font-bold text-xl mb-3">Mentoring & Austausch</h4>
                                <p className="text-muted-foreground">Arnold bringt jahrzehntelange Sales-Erfahrung mit und Markus das technische Tiefenwissen. Wir unterstützen dich bei jedem Schritt.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section von AboutUs */}
                    <div className="mb-24 pt-16 border-t border-border">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Das Team
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Deine direkten Ansprechpartner
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {/* Arnold */}
                            <div className="group text-center">
                                <div className="relative mb-8 inline-block">
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-all overflow-hidden">
                                        <img
                                            src="/img/team/arnold_freissling.png"
                                            alt="Arnold Freissling"
                                            className="w-full h-full object-cover object-top rounded-full"
                                        />
                                    </div>
                                    <a
                                        href="https://at.linkedin.com/in/arnold-freissling-95642b256"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-2 right-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                                <h3 className="text-xl font-bold mb-1">Arnold Freissling</h3>
                                <div className="text-primary font-semibold mb-3">Strategie & Vertrieb</div>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                                    Arnold ist dein Ansprechpartner für alles Strategische. Er zeigt dir, wie man im Vertrieb wirklich erfolgreich ist und Kunden langfristig glücklich macht.
                                </p>
                            </div>

                            {/* Markus */}
                            <div className="group text-center">
                                <div className="relative mb-8 inline-block">
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-all overflow-hidden">
                                        <img
                                            src="/img/team/markus_wallner.png"
                                            alt="Markus Wallner"
                                            className="w-full h-full object-cover object-top rounded-full"
                                        />
                                    </div>
                                    <a
                                        href="https://at.linkedin.com/in/markuswallner-social-media-marketing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-2 right-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                                <h3 className="text-xl font-bold mb-1">Markus Wallner</h3>
                                <div className="text-primary font-semibold mb-3">Technik & Automatisierung</div>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                                    Markus ist für die technische Umsetzung zuständig. Er unterstützt dich bei allen Fragen rund um n8n und hilft dir, komplexe Prozesse stabil zu bauen.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-10 sm:p-16 text-center shadow-sm">
                        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Nichts dabei, aber trotzdem Bock?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                            Wenn du Skills hast, die wir brauchen können, meld dich einfach. Wir sind immer offen für gute Leute.
                        </p>
                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <a href="mailto:info@ki-kanzlei.at?subject=Initiativbewerbung">
                                Initiativbewerbung schicken
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Jobs;
