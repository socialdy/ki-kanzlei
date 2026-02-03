import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemGrid } from "@/components/ProblemGrid";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUs } from "@/components/AboutUs";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Index = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    document.title = "KI Lösungen für Psychotherapeuten | KI Kanzlei Österreich";

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Individuelle KI Lösungen für Psychotherapeuten in Österreich. Automatisieren Sie Terminbuchungen, Dokumentation & Patientenanfragen DSGVO-konform in 30 Tagen.');
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <main>
        <Hero onCtaClick={() => setIsLeadModalOpen(true)} />
        <ProblemGrid />
        <UseCases />
        <VoiceAgentSection />
        <Testimonials />
        <AboutUs />
        <BlogSectionHome />
        <JobsSectionHome />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </div>
  );
};

export default Index;
