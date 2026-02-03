import { useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Layers, Cpu, Zap, Settings, Database, ArrowRight, Code } from "lucide-react";
import { Link } from "react-router-dom";

const JobAutomation = () => {
    useEffect(() => {
        document.title = "n8n Experte / KI Entwickler (m/w/d) – Jobs KI Kanzlei";

        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Job als n8n Experte & KI Entwickler in Österreich. Baue Workflow-Automatisierungen und KI-Agenten. 100% Remote, spannende Projekte in der Region Wachau/Niederösterreich.');
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
                                <span className="text-muted-foreground text-sm">100% Remote</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                                n8n Experte / KI Entwickler <span className="text-primary">(m/w/d)</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Du baust gerne Dinge, die funktionieren? n8n, APIs, LLMs sind keine Fremdwörter für dich? Dann lass uns reden.
                            </p>
                        </div>

                        {/* Content Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Layers className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Was du machst</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Du baust Automatisierungen für echte Unternehmen. n8n-Workflows designen, APIs anbinden, LLMs integrieren und dafür sorgen, dass alles stabil läuft. Keine Spielerei, sondern Produktionssysteme.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Cpu className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Womit wir arbeiten</h3>
                                <ul className="grid grid-cols-2 gap-3 text-muted-foreground text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        n8n
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        OpenAI / Anthropic
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        REST APIs
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        JavaScript
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Supabase / SQL
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Python (nice to have)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 border-y border-border py-10">
                            <div className="space-y-2">
                                <Zap className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Fokus auf Resultate</h4>
                                <p className="text-sm text-muted-foreground">Wir arbeiten asynchron und verzichten auf unnötige Meetings. Was zählt, ist die Qualität der Workflows.</p>
                            </div>
                            <div className="space-y-2">
                                <Database className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Spannende Projekte</h4>
                                <p className="text-sm text-muted-foreground">Du entwickelst Systeme, die wirklich im Einsatz sind. Keine graue Theorie, sondern echte Hilfe für Unternehmen.</p>
                            </div>
                            <div className="space-y-2">
                                <Code className="w-6 h-6 text-primary" />
                                <h4 className="font-bold">Austausch mit Markus</h4>
                                <p className="text-sm text-muted-foreground">Markus steht dir bei technischen Fragen zur Seite. Wir finden gemeinsam die beste Lösung für jede Herausforderung.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-10 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Interesse?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Schick uns einen Link zu deinem GitHub oder zeig uns ein paar n8n-Workflows, auf die du stolz bist. Wir wollen sehen, was du kannst.
                            </p>
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                                <a href="mailto:info@ki-kanzlei.at?subject=Bewerbung%20n8n%20Experte%20KI%20Entwickler">
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

export default JobAutomation;
