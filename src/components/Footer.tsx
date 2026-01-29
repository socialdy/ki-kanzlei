import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determine base path and navigation links based on current page
  const getNavigationLinks = () => {
    if (currentPath === "/") {
      return {
        probleme: "/#probleme",
        loesungen: "/#loesungen",
        ueberUns: "/#ueber-uns",
        referenzen: "/#referenzen",
        faq: "/#faq",
      };
    } else if (currentPath === "/ki-loesungen-psychotherapeuten") {
      return {
        probleme: "/ki-loesungen-psychotherapeuten#probleme",
        loesungen: "/ki-loesungen-psychotherapeuten#loesungen",
        ueberUns: "/ki-loesungen-psychotherapeuten#ueber-uns",
        referenzen: "/ki-loesungen-psychotherapeuten#referenzen",
        faq: "/ki-loesungen-psychotherapeuten#faq",
      };
    } else if (currentPath === "/ki-loesungen-hotels") {
      return {
        probleme: "/ki-loesungen-hotels#probleme",
        loesungen: "/ki-loesungen-hotels#loesungen",
        ueberUns: "/ki-loesungen-hotels#ueber-uns",
        referenzen: "/ki-loesungen-hotels#referenzen",
        faq: "/ki-loesungen-hotels#faq",
      };
    } else {
      // Default to home (for blog pages, etc.)
      return {
        probleme: "/#probleme",
        loesungen: "/#loesungen",
        ueberUns: "/#ueber-uns",
        referenzen: "/#referenzen",
        faq: "/#faq",
      };
    }
  };

  const navLinks = getNavigationLinks();

  const handleNavClick = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentPath !== "/" && !currentPath.startsWith("/ki-loesungen-")) {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(hash.replace("/#", "").replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 fade-in">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/img/ki_kanzlei_logo_white.svg"
                  alt="KI Kanzlei Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Ihr Partner für digitale Transformation.
              DSGVO-konform, schnell, zuverlässig.
            </p>
          </div>

          {/* Navigation */}
          <div className="fade-in">
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={navLinks.probleme}
                  onClick={(e) => handleNavClick(navLinks.probleme, e)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-base"
                >
                  Probleme
                </a>
              </li>
              <li>
                <a
                  href={navLinks.loesungen}
                  onClick={(e) => handleNavClick(navLinks.loesungen, e)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-base"
                >
                  Lösungen
                </a>
              </li>
              <li><a href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">Blog</a></li>
              <li>
                <a
                  href={navLinks.ueberUns}
                  onClick={(e) => handleNavClick(navLinks.ueberUns, e)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-base"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href={navLinks.referenzen}
                  onClick={(e) => handleNavClick(navLinks.referenzen, e)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-base"
                >
                  Referenzen
                </a>
              </li>
              <li>
                <a
                  href={navLinks.faq}
                  onClick={(e) => handleNavClick(navLinks.faq, e)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-base"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Branchen */}
          <div className="fade-in">
            <h4 className="font-bold mb-4">Branchen</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/ki-loesungen-psychotherapeuten" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Psychotherapeuten</a></li>
              <li><a href="/ki-loesungen-hotels" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Hotels</a></li>
              <li><a href="/ki-loesungen-hausverwaltung" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Hausverwaltungen</a></li>
              <li><a href="/ki-loesungen-immobilienmakler" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Immobilienmakler</a></li>
              <li><a href="/ki-loesungen-autohaus" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Autohäuser</a></li>
              <li><a href="/ki-loesungen-handwerker" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Handwerker</a></li>
              <li><a href="/ki-loesungen-rechtsanwaelte" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Rechtsanwälte</a></li>
              <li><a href="/ki-loesungen-aerzte" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Ärzte</a></li>
              <li><a href="/ki-loesungen-recruiting" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Recruiting</a></li>
              <li><a href="/ki-loesungen-fitness" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Fitnessstudios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in">
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:info@ki-kanzlei.at" className="hover:text-primary-foreground transition-base">
                  info@ki-kanzlei.at
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5" />
                <a href="tel:+436642314676" className="hover:text-primary-foreground transition-base">
                  +43 664 2314676
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Rossatzbach 3/2, 3602 Rossatz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 KI Kanzlei. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="/impressum" className="hover:text-primary-foreground transition-base">Impressum</a>
              <a href="/datenschutz" className="hover:text-primary-foreground transition-base">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
