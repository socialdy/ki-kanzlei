import { useEffect } from "react";
import { NavigationImmobilien } from "@/components/NavigationImmobilien";
import { HeroImmobilien } from "@/components/HeroImmobilien";
import { ProblemGridImmobilien } from "@/components/ProblemGridImmobilien";
import { UseCasesImmobilien } from "@/components/UseCasesImmobilien";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsImmobilien } from "@/components/TestimonialsImmobilien";
import { AboutUsImmobilien } from "@/components/AboutUsImmobilien";
import { ContactForm } from "@/components/ContactForm";
import { FAQImmobilien } from "@/components/FAQImmobilien";
import { Footer } from "@/components/Footer";

const Immobilienmakler = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Immobilienmakler | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Österreichs führende KI-Lösung für Immobilienmakler. Automatisierte Lead-Qualifizierung, Terminbuchung & Admin-Entlastung. DSGVO-konform.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationImmobilien />
            <main>
                <HeroImmobilien />
                <ProblemGridImmobilien />
                <UseCasesImmobilien />
                <VoiceAgentSection />
                <TestimonialsImmobilien />
                <AboutUsImmobilien />
                <ContactForm />
                <FAQImmobilien />
            </main>
            <Footer />
        </div>
    );
};

export default Immobilienmakler;
