import { useEffect } from "react";
import { NavigationHandwerker } from "@/components/NavigationHandwerker";
import { HeroHandwerker } from "@/components/HeroHandwerker";
import { ProblemGridHandwerker } from "@/components/ProblemGridHandwerker";
import { UseCasesHandwerker } from "@/components/UseCasesHandwerker";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsHandwerker } from "@/components/TestimonialsHandwerker";
import { AboutUsHandwerker } from "@/components/AboutUsHandwerker";
import { ContactForm } from "@/components/ContactForm";
import { FAQHandwerker } from "@/components/FAQHandwerker";
import { Footer } from "@/components/Footer";

const Handwerker = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Handwerksbetriebe | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Digitale Transformation für das Handwerk. 24/7 KI-Notfalltelefon, automatisierte Terminbuchung & Admin-Entlastung. DSGVO-konform und effizient.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHandwerker />
            <main>
                <HeroHandwerker />
                <ProblemGridHandwerker />
                <UseCasesHandwerker />
                <VoiceAgentSection />
                <TestimonialsHandwerker />
                <AboutUsHandwerker />
                <ContactForm />
                <FAQHandwerker />
            </main>
            <Footer />
        </div>
    );
};

export default Handwerker;
