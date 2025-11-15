import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemGrid } from "@/components/ProblemGrid";
import { UseCases } from "@/components/UseCases";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "KI Lösungen für Psychotherapeuten | KI Kanzlei";
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Österreichs führende KI-Lösung für Psychotherapie-Praxen. Automatisierung mit KI-Anrufannahme, n8n & Freudio. DSGVO-konform. Kostenloses Analysegespräch!');
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
              <main>
                <Hero />
                <ProblemGrid />
                <UseCases />
                <AboutUs />
                <Testimonials />
                <ContactForm />
                <FAQ />
              </main>
      <Footer />
    </div>
  );
};

export default Index;
