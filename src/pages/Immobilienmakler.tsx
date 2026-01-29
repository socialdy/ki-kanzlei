import { useEffect, useState } from "react";
import { NavigationImmobilien } from "@/components/NavigationImmobilien";
import { HeroImmobilien } from "@/components/HeroImmobilien";
import { ProblemGridImmobilien } from "@/components/ProblemGridImmobilien";
import { UseCasesImmobilien } from "@/components/UseCasesImmobilien";
import { TestimonialsImmobilien } from "@/components/TestimonialsImmobilien";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsImmobilien } from "@/components/AboutUsImmobilien";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQImmobilien } from "@/components/FAQImmobilien";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Immobilienmakler = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Immobilienmakler | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Führende KI Lösungen für Immobilienmakler. Automatisieren Sie Lead-Qualifizierung, Besichtigungstermine & Exposé-Versand für maximale Abschlusseffizienz.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationImmobilien />
            <main>
                <HeroImmobilien onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridImmobilien />
                <UseCasesImmobilien />
                <VoiceAgentSection />
                <TestimonialsImmobilien />
                <AboutUsImmobilien />
                <BlogSectionHome />
                <ContactForm />
                <FAQImmobilien />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Immobilienmakler;
