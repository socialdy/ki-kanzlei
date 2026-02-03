import { useEffect, useState } from "react";
import { NavigationSteuerberater } from "@/components/NavigationSteuerberater";
import { HeroSteuerberater } from "@/components/HeroSteuerberater";
import { ProblemGridSteuerberater } from "@/components/ProblemGridSteuerberater";
import { UseCasesSteuerberater } from "@/components/UseCasesSteuerberater";
import { TestimonialsSteuerberater } from "@/components/TestimonialsSteuerberater";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsSteuerberater } from "@/components/AboutUsSteuerberater";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQSteuerberater } from "@/components/FAQSteuerberater";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Steuerberater = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Steuerberater | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Revolutionieren Sie Ihre Steuerberatungskanzlei mit KI. Automatisierte BMD/DATEV-Vorerfassung, 24/7 Klienten-Support & DSGVO-konforme Workflows.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationSteuerberater />
            <main>
                <HeroSteuerberater onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridSteuerberater />
                <UseCasesSteuerberater />
                <VoiceAgentSection />
                <TestimonialsSteuerberater />
                <AboutUsSteuerberater />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQSteuerberater />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Steuerberater;
