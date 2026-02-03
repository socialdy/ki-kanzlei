import { useEffect, useState } from "react";
import { NavigationHausverwaltung } from "@/components/NavigationHausverwaltung";
import { HeroHausverwaltung } from "@/components/HeroHausverwaltung";
import { ProblemGridHausverwaltung } from "@/components/ProblemGridHausverwaltung";
import { UseCasesHausverwaltung } from "@/components/UseCasesHausverwaltung";
import { TestimonialsHausverwaltung } from "@/components/TestimonialsHausverwaltung";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsHausverwaltung } from "@/components/AboutUsHausverwaltung";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQHausverwaltung } from "@/components/FAQHausverwaltung";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Hausverwaltung = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Hausverwaltungen | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Professionelle KI Lösungen für Hausverwaltungen. Automatisieren Sie Mieteranfragen, Schadensmeldungen & Terminplanung DSGVO-konform und hocheffizient.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHausverwaltung />
            <main>
                <HeroHausverwaltung onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridHausverwaltung />
                <UseCasesHausverwaltung />
                <VoiceAgentSection />
                <TestimonialsHausverwaltung />
                <AboutUsHausverwaltung />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQHausverwaltung />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Hausverwaltung;
