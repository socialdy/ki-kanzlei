import { useEffect, useState } from "react";
import { NavigationEcommerce } from "@/components/NavigationEcommerce";
import { HeroEcommerce } from "@/components/HeroEcommerce";
import { ProblemGridEcommerce } from "@/components/ProblemGridEcommerce";
import { UseCasesEcommerce } from "@/components/UseCasesEcommerce";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsEcommerce } from "@/components/AboutUsEcommerce";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQEcommerce } from "@/components/FAQEcommerce";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Ecommerce = () => {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    useEffect(() => {
        document.title = "KI Lösungen für E-Commerce & Retail | KI Kanzlei Österreich";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Profitablere KI Lösungen für E-Commerce & Retail. Automatisieren Sie Kundensupport, Bestellabwicklung & Content-Erstellung hocheffizient und DSGVO-konform.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationEcommerce />
            <main>
                <HeroEcommerce onCtaClick={() => setIsLeadModalOpen(true)} />
                <ProblemGridEcommerce />
                <UseCasesEcommerce />
                <VoiceAgentSection />
                <AboutUsEcommerce />
                <BlogSectionHome />
                <JobsSectionHome />
                <ContactForm />
                <FAQEcommerce />
            </main>
            <Footer />
            <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
        </div>
    );
};

export default Ecommerce;
