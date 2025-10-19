import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Probleme", href: "#probleme", hasDropdown: false },
    { label: "Lösungen", href: "#loesungen", hasDropdown: false },
    { label: "Über uns", href: "#ueber-uns", hasDropdown: false },
    { label: "Referenzen", href: "#referenzen", hasDropdown: false },
    { label: "FAQ", href: "#faq", hasDropdown: false },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white rounded-full shadow-lg border border-gray-200/50 backdrop-blur-md max-w-5xl w-full">
        <div className="px-8 py-3">
          <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
            {/* Logo */}
                    <div className="flex items-center">
                      <a href="#home">
                        <img
                          src="/img/ki_kanzlei_logo_black.svg"
                          alt="KI Kanzlei Logo"
                          className="h-10 w-auto"
                        />
                      </a>
                    </div>

            {/* Desktop Menu (show from lg up) */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-base font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>

            {/* CTA Button (show from lg up) */}
            <div className="hidden lg:flex items-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  Analysegespräch vereinbaren
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button (show below lg) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (show below lg) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-200/50 backdrop-blur-md">
            <div className="p-6">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  <Button size="lg" className="w-full" asChild>
                    <a href="#contact">
                      Analysegespräch vereinbaren
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
