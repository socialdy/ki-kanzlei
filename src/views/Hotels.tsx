'use client';

import { useEffect, useState } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { HeroHotels } from "@/components/HeroHotels";
import { ProblemGridHotels } from "@/components/ProblemGridHotels";
import { UseCasesHotels } from "@/components/UseCasesHotels";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AboutUsHotels } from "@/components/AboutUsHotels";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FAQHotels } from "@/components/FAQHotels";
import { Footer } from "@/components/Footer";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Hotels = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    document.title = "KI für Hotels & Hotellerie | KI Kanzlei Österreich";

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KI-Lösungen für Hotels: Gästeservice-Chatbots, automatisiertes Revenue Management & Personalplanung. Mehr Effizienz trotz Fachkräftemangel. Jetzt anfragen!');
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <HeroHotels onCtaClick={() => setIsLeadModalOpen(true)} />
        <ProblemGridHotels />
        <UseCasesHotels />
        <VoiceAgentSection />
<AboutUsHotels />
        <BlogSectionHome />
        <JobsSectionHome />
        <ContactForm />
        <FAQHotels />
      </main>
      <Footer />
      <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </div>
  );
};

export default Hotels;
