import { useEffect } from "react";
import { NavigationAerzte } from "@/components/NavigationAerzte";
import { HeroAerzte } from "@/components/HeroAerzte";
import { ProblemGridAerzte } from "@/components/ProblemGridAerzte";
import { UseCasesAerzte } from "@/components/UseCasesAerzte";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsAerzte } from "@/components/TestimonialsAerzte";
import { AboutUsAerzte } from "@/components/AboutUsAerzte";
import { ContactForm } from "@/components/ContactForm";
import { FAQAerzte } from "@/components/FAQAerzte";
import { Footer } from "@/components/Footer";

const Aerzte = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Ärzte & Fachärzte | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Digitale Transformation für Ordinationen. 24/7 KI-Notfalltelefon, automatisierte Terminbuchung & Entlastung des Empfangs. DSGVO-konform und effizient.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationAerzte />
            <main>
                <HeroAerzte />
                <ProblemGridAerzte />
                <UseCasesAerzte />
                <VoiceAgentSection />
                <TestimonialsAerzte />
                <AboutUsAerzte />
                <ContactForm />
                <FAQAerzte />
            </main>
            <Footer />
        </div>
    );
};

export default Aerzte;
