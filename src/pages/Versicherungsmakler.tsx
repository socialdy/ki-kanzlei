import { useEffect, useState } from "react";
import { NavigationVersicherung } from "@/components/NavigationVersicherung";
import { HeroVersicherung } from "@/components/HeroVersicherung";
import { ProblemGridVersicherung } from "@/components/ProblemGridVersicherung";
import { UseCasesVersicherung } from "@/components/UseCasesVersicherung";
import { TestimonialsVersicherung } from "@/components/TestimonialsVersicherung";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsVersicherung } from "@/components/AboutUsVersicherung";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQVersicherung } from "@/components/FAQVersicherung";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Versicherungsmakler = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Versicherungsmakler | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'KI-gestützte Versicherungslösungen für Makler. Automatisierte Schadensaufnahme, Polizzen-Analyse und proaktives Lead-Management – rund um die Uhr.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationVersicherung />
            <main>
                <HeroVersicherung onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridVersicherung />
                <UseCasesVersicherung />
                <VoiceAgentSection />
                <TestimonialsVersicherung />
                <AboutUsVersicherung />
                <BlogSectionHome />
                <ContactForm />
                <FAQVersicherung />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Versicherungsmakler;
