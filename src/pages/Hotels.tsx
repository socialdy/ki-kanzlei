import { useEffect } from "react";
import { NavigationHotels } from "@/components/NavigationHotels";
import { HeroHotels } from "@/components/HeroHotels";
import { ProblemGridHotels } from "@/components/ProblemGridHotels";
import { UseCasesHotels } from "@/components/UseCasesHotels";
import { AboutUsHotels } from "@/components/AboutUsHotels";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { TestimonialsHotels } from "@/components/TestimonialsHotels";
import { ContactForm } from "@/components/ContactForm";
import { FAQHotels } from "@/components/FAQHotels";
import { Footer } from "@/components/Footer";

const Hotels = () => {
  useEffect(() => {
    document.title = "KI Lösungen für Hotels | KI Kanzlei";

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Österreichs führende KI-Lösung für Hotels. Automatisierung mit KI-Abendrezeptionist, n8n & Superchat. DSGVO-konform. Kostenloses Analysegespräch!');
  }, []);
  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHotels />
      <main>
        <HeroHotels />
        <ProblemGridHotels />
        <UseCasesHotels />
        <VoiceAgentSection />
        <AboutUsHotels />
        <TestimonialsHotels />
        <ContactForm />
        <FAQHotels />
      </main>
      <Footer />
    </div>
  );
};

export default Hotels;


