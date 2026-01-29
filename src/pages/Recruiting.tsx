import { useEffect, useState } from "react";
import { NavigationRecruiting } from "@/components/NavigationRecruiting";
import { HeroRecruiting } from "@/components/HeroRecruiting";
import { ProblemGridRecruiting } from "@/components/ProblemGridRecruiting";
import { UseCasesRecruiting } from "@/components/UseCasesRecruiting";
import { TestimonialsRecruiting } from "@/components/TestimonialsRecruiting";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsRecruiting } from "@/components/AboutUsRecruiting";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQRecruiting } from "@/components/FAQRecruiting";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Recruiting = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für Recruiting | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Effiziente KI Lösungen für Recruiting & HR-Agenturen. Automatisieren Sie Bewerber-Screening, Erstgespräche & Sourcing für drastisch verkürzte Time-to-Hire.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationRecruiting />
            <main>
                <HeroRecruiting onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridRecruiting />
                <UseCasesRecruiting />
                <VoiceAgentSection />
                <TestimonialsRecruiting />
                <AboutUsRecruiting />
                <BlogSectionHome />
                <ContactForm />
                <FAQRecruiting />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Recruiting;
