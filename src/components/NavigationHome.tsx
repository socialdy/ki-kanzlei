import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { trackLinkClick, trackCtaClick } from "@/lib/analytics";

export const NavigationHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      // Anchor-only link (e.g., #probleme)
      const hash = href.substring(1);

      if (location.pathname === "/") {
        // Already on home page, scroll to section
        e.preventDefault();
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setIsMenuOpen(false);
        }
      } else {
        // Not on home page, navigate to home with anchor
        e.preventDefault();
        navigate("/" + href);
        setIsMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { label: "Probleme", href: "#probleme" },
    { label: "Branchen", href: "#branchen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Blog", href: "/blog" },
    { label: "Jobs", href: "/jobs" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white rounded-full shadow-lg border border-gray-200/50 backdrop-blur-md max-w-5xl w-full">
        <div className="px-8 py-3">
          <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/img/ki_kanzlei_logo_black.svg"
                  alt="KI Kanzlei Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Menu (show from lg up) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e: any) => {
                    trackLinkClick(item.label, "NavigationHome");
                    handleNavClick(item.href, e);
                  }}
                  className="flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-base font-normal text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap px-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (show from lg up) */}
            <div className="hidden lg:flex items-center">
              {isHomePage ? (
                <Button size="lg" asChild onClick={() => trackCtaClick("Kostenloses Analysegespräch", "NavigationHome")}>
                  <a href="#contact">Kostenloses Analysegespräch</a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={() => {
                    trackCtaClick("Kostenloses Analysegespräch", "NavigationHome");
                    navigate("/");
                    setTimeout(() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                >
                  Kostenloses Analysegespräch
                </Button>
              )}
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
                    onClick={(e) => {
                      handleNavClick(item.href, e);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  {isHomePage ? (
                    <Button size="lg" className="w-full" asChild>
                      <a href="#contact" onClick={() => {
                        trackCtaClick("Kostenloses Analysegespräch", "NavigationHomeMobile");
                        setIsMenuOpen(false);
                      }}>
                        Kostenloses Analysegespräch
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        trackCtaClick("Kostenloses Analysegespräch", "NavigationHomeMobile");
                        navigate("/");
                        setTimeout(() => {
                          const section = document.getElementById("contact");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                        setIsMenuOpen(false);
                      }}
                    >
                      Kostenloses Analysegespräch
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

