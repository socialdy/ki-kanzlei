import { useEffect, useState } from "react";
import { NavigationRechtsanwaelte } from "@/components/NavigationRechtsanwaelte";
import { HeroRechtsanwaelte } from "@/components/HeroRechtsanwaelte";
import { ProblemGridRechtsanwaelte } from "@/components/ProblemGridRechtsanwaelte";
import { UseCasesRechtsanwaelte } from "@/components/UseCasesRechtsanwaelte";
import { TestimonialsRechtsanwaelte } from "@/components/TestimonialsRechtsanwaelte";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsRechtsanwaelte } from "@/components/AboutUsRechtsanwaelte";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQRechtsanwaelte } from "@/components/FAQRechtsanwaelte";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Rechtsanwaelte = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Rechtsanwälte & Notare | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'DSGVO-konforme KI Lösungen für Rechtsanwälte & Notare. Automatisieren Sie Mandats-Vorqualifizierung, Recherche & Terminmanagement für Ihre Kanzlei.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationRechtsanwaelte />
            <main>
                <HeroRechtsanwaelte onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridRechtsanwaelte />
                <UseCasesRechtsanwaelte />
                <VoiceAgentSection />
                <TestimonialsRechtsanwaelte />
                <AboutUsRechtsanwaelte />
                <BlogSectionHome />
                <ContactForm />
                <FAQRechtsanwaelte />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Rechtsanwaelte;
