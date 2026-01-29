import { useEffect, useState } from "react";
import { NavigationFitness } from "@/components/NavigationFitness";
import { HeroFitness } from "@/components/HeroFitness";
import { ProblemGridFitness } from "@/components/ProblemGridFitness";
import { UseCasesFitness } from "@/components/UseCasesFitness";
import { TestimonialsFitness } from "@/components/TestimonialsFitness";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsFitness } from "@/components/AboutUsFitness";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQFitness } from "@/components/FAQFitness";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Fitness = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Fitnessstudios | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Innovative KI Lösungen für Fitnessstudios & Sportzentren. Automatisieren Sie Mitglieder-Support, Lead-Management & Sales-Prozesse für nachhaltiges Wachstum.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationFitness />
            <main>
                <HeroFitness onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridFitness />
                <UseCasesFitness />
                <VoiceAgentSection />
                <TestimonialsFitness />
                <AboutUsFitness />
                <BlogSectionHome />
                <ContactForm />
                <FAQFitness />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Fitness;
