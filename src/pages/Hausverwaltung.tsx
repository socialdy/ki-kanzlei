import { useEffect } from "react";
import { NavigationHausverwaltung } from "@/components/NavigationHausverwaltung";
import { HeroHausverwaltung } from "@/components/HeroHausverwaltung";
import { ProblemGridHausverwaltung } from "@/components/ProblemGridHausverwaltung";
import { UseCasesHausverwaltung } from "@/components/UseCasesHausverwaltung";
import { TestimonialsHausverwaltung } from "@/components/TestimonialsHausverwaltung";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsHausverwaltung } from "@/components/AboutUsHausverwaltung";
import { ContactForm } from "@/components/ContactForm";
import { FAQHausverwaltung } from "@/components/FAQHausverwaltung";
import { Footer } from "@/components/Footer";

const Hausverwaltung = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Hausverwaltungen | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Österreichs führende KI-Lösung für Hausverwaltungen. Automatisierung von Mieteranfragen, Schadensmeldungen & Besichtigungsterminen. DSGVO-konform.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHausverwaltung />
            <main>
                <HeroHausverwaltung />
                <ProblemGridHausverwaltung />
                <UseCasesHausverwaltung />
                <VoiceAgentSection />
                <TestimonialsHausverwaltung />
                <AboutUsHausverwaltung />
                <ContactForm />
                <FAQHausverwaltung />
            </main>
            <Footer />
        </div>
    );
};

export default Hausverwaltung;
