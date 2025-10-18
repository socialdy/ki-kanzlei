import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">KI Kanzlei</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Ihr Partner für digitale Transformation in der Psychotherapie. 
              DSGVO-konform, schnell, zuverlässig.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-base">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-base">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-base">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Lösungen</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-base">KI Voice Agents</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">n8n Workflows</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">DSGVO Compliance</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">Integration</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Ressourcen</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-base">Whitepaper</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">Case Studies</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-base">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-background/80">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:info@ki-kanzlei.at" className="hover:text-background transition-base">
                  info@ki-kanzlei.at
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <Phone className="w-4 h-4 mt-0.5" />
                <a href="tel:+431234567890" className="hover:text-background transition-base">
                  +43 1 234 567 890
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Wien, Österreich</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 KI Kanzlei. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-base">Impressum</a>
              <a href="#" className="hover:text-background transition-base">Datenschutz</a>
              <a href="#" className="hover:text-background transition-base">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
