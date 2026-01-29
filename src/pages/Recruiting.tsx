import { useEffect } from "react";
import { NavigationRecruiting } from "@/components/NavigationRecruiting";
import { HeroRecruiting } from "@/components/HeroRecruiting";
import { ProblemGridRecruiting } from "@/components/ProblemGridRecruiting";
import { UseCasesRecruiting } from "@/components/UseCasesRecruiting";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsRecruiting } from "@/components/TestimonialsRecruiting";
import { AboutUsRecruiting } from "@/components/AboutUsRecruiting";
import { ContactForm } from "@/components/ContactForm";
import { FAQRecruiting } from "@/components/FAQRecruiting";
import { Footer } from "@/components/Footer";

const Recruiting = () => {
    useEffect(() => {
        document.title = "KI Lösungen für Recruiting & HR | KI Kanzlei";

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Effizientes Recruiting durch KI-Automatisierung. 24/7 Bewerber-Screening, automatisierte Erstgespräche & Sourcing. DSGVO-konform und schnell.');
    }, []);

    return (
        <div className="min-h-screen gradient-bg">
            <NavigationRecruiting />
            <main>
                <HeroRecruiting />
                <ProblemGridRecruiting />
                <UseCasesRecruiting />
                <VoiceAgentSection />
                <TestimonialsRecruiting />
                <AboutUsRecruiting />
                <ContactForm />
                <FAQRecruiting />
            </main>
            <Footer />
        </div>
    );
};

export default Recruiting;
