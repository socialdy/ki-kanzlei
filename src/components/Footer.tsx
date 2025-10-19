import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 fade-in">
            <div className="flex items-center">
              <img
                src="/img/ki_kanzlei_logo_white.svg"
                alt="KI Kanzlei Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Ihr Partner für digitale Transformation in der Psychotherapie. 
              DSGVO-konform, schnell, zuverlässig.
            </p>
          </div>

          {/* Navigation */}
          <div className="fade-in">
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#probleme" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">Probleme</a></li>
              <li><a href="#loesungen" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">Lösungen</a></li>
              <li><a href="#ueber-uns" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">Über uns</a></li>
              <li><a href="#referenzen" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">Referenzen</a></li>
              <li><a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">FAQ</a></li>
            </ul>
          </div>

          {/* Branchen */}
          <div className="fade-in">
            <h4 className="font-bold mb-4">Branchen</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/ki-loesungen-psychotherapeuten" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Psychotherapeuten</a></li>
              <li><a href="/ki-loesungen-hotels" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Hotels</a></li>
              <li><a href="/ki-loesungen-steuerberater" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Steuerberater</a></li>
              <li><a href="/ki-loesungen-gastronomie" className="text-primary-foreground/80 hover:text-primary-foreground transition-base">KI-Lösungen für Gastronomie</a></li>
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
                <span>Stavangergasse 5/1/6, 1220 Wien</span>
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
