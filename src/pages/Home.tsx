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
    document.title = "KI Kanzlei – KI-Automatisierung für Unternehmen | Österreich";
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. Wir implementieren KI-Lösungen für Unternehmen – von Wissensdatenbanken über Workflow-Automatisierung bis hin zu KI-Agenten. DSGVO-konform, in 30 Tagen einsatzbereit. Kostenloses Analysegespräch!');
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


