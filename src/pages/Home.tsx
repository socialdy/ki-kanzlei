import { useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { HeroHome } from "@/components/HeroHome";
import { ProblemGridHome } from "@/components/ProblemGridHome";
import { UseCasesHome } from "@/components/UseCasesHome";
import { IndustriesHome } from "@/components/IndustriesHome";
import { AboutUs } from "@/components/AboutUs";
import { TestimonialsHome } from "@/components/TestimonialsHome";
import { ContactForm } from "@/components/ContactForm";
import { FAQHome } from "@/components/FAQHome";
import { Footer } from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "KI Kanzlei – KI-Automatisierung und Voice-Agenten";
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Österreichs führende KI-Lösung für Unternehmens-Automatisierung. RAG Model, LinkedIn Outreach, SEO Agent, Email Outreach, Social Media Content Generator. DSGVO-konform. Kostenloses Analysegespräch!');
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <HeroHome />
        <ProblemGridHome />
        <UseCasesHome />
        <IndustriesHome />
        <AboutUs />
        <TestimonialsHome />
        <ContactForm />
        <FAQHome />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


