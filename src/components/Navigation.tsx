import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              KI Kanzlei
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#losungen" className="text-sm font-medium hover:text-primary transition-base">
              Lösungen
            </a>
            <a href="#preise" className="text-sm font-medium hover:text-primary transition-base">
              Preise
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-base">
              Referenzen
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-base">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Anmelden
            </Button>
            <Button variant="gradient" size="sm">
              Jetzt starten
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#losungen" className="text-sm font-medium hover:text-primary transition-base py-2">
                Lösungen
              </a>
              <a href="#preise" className="text-sm font-medium hover:text-primary transition-base py-2">
                Preise
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-base py-2">
                Referenzen
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-base py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="w-full">
                  Anmelden
                </Button>
                <Button variant="gradient" className="w-full">
                  Jetzt starten
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
