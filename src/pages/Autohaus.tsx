import { useEffect, useState } from "react";
import { NavigationAutohaus } from "@/components/NavigationAutohaus";
import { HeroAutohaus } from "@/components/HeroAutohaus";
import { ProblemGridAutohaus } from "@/components/ProblemGridAutohaus";
import { UseCasesAutohaus } from "@/components/UseCasesAutohaus";
import { TestimonialsAutohaus } from "@/components/TestimonialsAutohaus";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsAutohaus } from "@/components/AboutUsAutohaus";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQAutohaus } from "@/components/FAQAutohaus";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Autohaus = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Autohäuser | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Hocheffiziente KI Lösungen für Autohäuser. Automatisieren Sie Werkstatt-Termine & Lead-Qualifizierung im Verkauf rund um die Uhr. Steigern Sie Ihren ROI messbar.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationAutohaus />
            <main>
                <HeroAutohaus onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridAutohaus />
                <UseCasesAutohaus />
                <VoiceAgentSection />
                <TestimonialsAutohaus />
                <AboutUsAutohaus />
                <BlogSectionHome />
                <ContactForm />
                <FAQAutohaus />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Autohaus;
