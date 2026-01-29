import { useEffect } from "react";
import { NavigationFitness } from "@/components/NavigationFitness";
import { HeroFitness } from "@/components/HeroFitness";
import { ProblemGridFitness } from "@/components/ProblemGridFitness";
import { UseCasesFitness } from "@/components/UseCasesFitness";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsFitness } from "@/components/TestimonialsFitness";
import { AboutUsFitness } from "@/components/AboutUsFitness";
import { ContactForm } from "@/components/ContactForm";
import { FAQFitness } from "@/components/FAQFitness";
import { Footer } from "@/components/Footer";

const Fitness = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Fitnessstudios & Sportzentren | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Wachstum für Fitnessstudios durch KI-Automatisierung. 24/7 Lead-Annahme, automatisierte Terminbuchung für Probetrainings & Mitglieder-Betreuung.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationFitness />
            <main>
                <HeroFitness />
                <ProblemGridFitness />
                <UseCasesFitness />
                <VoiceAgentSection />
                <TestimonialsFitness />
                <AboutUsFitness />
                <ContactForm />
                <FAQFitness />
            </main>
            <Footer />
        </div>
    );
};

export default Fitness;
