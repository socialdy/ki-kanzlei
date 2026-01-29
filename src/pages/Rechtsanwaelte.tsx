import { useEffect } from "react";
import { NavigationRechtsanwaelte } from "@/components/NavigationRechtsanwaelte";
import { HeroRechtsanwaelte } from "@/components/HeroRechtsanwaelte";
import { ProblemGridRechtsanwaelte } from "@/components/ProblemGridRechtsanwaelte";
import { UseCasesRechtsanwaelte } from "@/components/UseCasesRechtsanwaelte";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsRechtsanwaelte } from "@/components/TestimonialsRechtsanwaelte";
import { AboutUsRechtsanwaelte } from "@/components/AboutUsRechtsanwaelte";
import { ContactForm } from "@/components/ContactForm";
import { FAQRechtsanwaelte } from "@/components/FAQRechtsanwaelte";
import { Footer } from "@/components/Footer";

const Rechtsanwaelte = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Rechtsanwälte & Notare | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Digitale Transformation für Kanzleien. KI-Aktenanalyse (RAG), automatisierte Mandatsvorprüfung & Voice Agent. DSGVO-konform und präzise.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationRechtsanwaelte />
            <main>
                <HeroRechtsanwaelte />
                <ProblemGridRechtsanwaelte />
                <UseCasesRechtsanwaelte />
                <VoiceAgentSection />
                <TestimonialsRechtsanwaelte />
                <AboutUsRechtsanwaelte />
                <ContactForm />
                <FAQRechtsanwaelte />
            </main>
            <Footer />
        </div>
    );
};

export default Rechtsanwaelte;
