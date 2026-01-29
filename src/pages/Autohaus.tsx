import { useEffect } from "react";
import { NavigationAutohaus } from "@/components/NavigationAutohaus";
import { HeroAutohaus } from "@/components/HeroAutohaus";
import { ProblemGridAutohaus } from "@/components/ProblemGridAutohaus";
import { UseCasesAutohaus } from "@/components/UseCasesAutohaus";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsAutohaus } from "@/components/TestimonialsAutohaus";
import { AboutUsAutohaus } from "@/components/AboutUsAutohaus";
import { ContactForm } from "@/components/ContactForm";
import { FAQAutohaus } from "@/components/FAQAutohaus";
import { Footer } from "@/components/Footer";

const Autohaus = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Autohäuser | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Digitale Transformation für Autohäuser. Automatisierte Werkstatt-Termine, Lead-Qualifizierung & 24/7 Erreichbarkeit mit KI-Agenten. DSGVO-konform und effizient.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationAutohaus />
            <main>
                <HeroAutohaus />
                <ProblemGridAutohaus />
                <UseCasesAutohaus />
                <VoiceAgentSection />
                <TestimonialsAutohaus />
                <AboutUsAutohaus />
                <ContactForm />
                <FAQAutohaus />
            </main>
            <Footer />
        </div>
    );
};

export default Autohaus;
