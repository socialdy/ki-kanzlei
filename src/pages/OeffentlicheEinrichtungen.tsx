import { useEffect, useState } from "react";
import { NavigationOeffentlich } from "@/components/NavigationOeffentlich";
import { HeroOeffentlich } from "@/components/HeroOeffentlich";
import { ProblemGridOeffentlich } from "@/components/ProblemGridOeffentlich";
import { UseCasesOeffentlich } from "@/components/UseCasesOeffentlich";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsOeffentlich } from "@/components/AboutUsOeffentlich";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQOeffentlich } from "@/components/FAQOeffentlich";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const OeffentlicheEinrichtungen = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI für öffentliche Verwaltung | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'KI-Lösungen für die öffentliche Verwaltung: Bürgeranfragen automatisieren, Dokumentenverarbeitung beschleunigen & Fachkräftemangel ausgleichen. Jetzt informieren!');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationOeffentlich />
            <main>
                <HeroOeffentlich onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridOeffentlich />
                <UseCasesOeffentlich />
                <VoiceAgentSection />
                <AboutUsOeffentlich />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQOeffentlich />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default OeffentlicheEinrichtungen;
