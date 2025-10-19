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
