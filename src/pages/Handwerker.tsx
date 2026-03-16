import { useEffect, useState } from "react";
import { NavigationHandwerker } from "@/components/NavigationHandwerker";
import { HeroHandwerker } from "@/components/HeroHandwerker";
import { ProblemGridHandwerker } from "@/components/ProblemGridHandwerker";
import { UseCasesHandwerker } from "@/components/UseCasesHandwerker";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsHandwerker } from "@/components/AboutUsHandwerker";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQHandwerker } from "@/components/FAQHandwerker";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Handwerker = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI im Handwerk – Lösungen für Betriebe | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'KI für Handwerksbetriebe: Automatisierte Angebotserstellung, Terminplanung & Kundenkommunikation. Weniger Büro, mehr Handwerk. Jetzt kostenlos beraten lassen!');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHandwerker />
            <main>
                <HeroHandwerker onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridHandwerker />
                <UseCasesHandwerker />
                <VoiceAgentSection />
<AboutUsHandwerker />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQHandwerker />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Handwerker;
