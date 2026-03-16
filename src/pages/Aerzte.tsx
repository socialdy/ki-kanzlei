import { useEffect, useState } from "react";
import { NavigationAerzte } from "@/components/NavigationAerzte";
import { HeroAerzte } from "@/components/HeroAerzte";
import { ProblemGridAerzte } from "@/components/ProblemGridAerzte";
import { UseCasesAerzte } from "@/components/UseCasesAerzte";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsAerzte } from "@/components/AboutUsAerzte";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQAerzte } from "@/components/FAQAerzte";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Aerzte = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI in der Arztpraxis – Lösungen | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'KI für Arztpraxen: Spracherkennung, automatisierte Dokumentation & intelligente Terminverwaltung. Bis zu 10h/Woche sparen. DSGVO-konform. Jetzt Demo anfragen!');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationAerzte />
            <main>
                <HeroAerzte onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridAerzte />
                <UseCasesAerzte />
                <VoiceAgentSection />
<AboutUsAerzte />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQAerzte />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Aerzte;
