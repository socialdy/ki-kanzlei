import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Seite nicht gefunden | KI Kanzlei";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8">
            {/* 404 Number */}
            <div className="slide-up">
              <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
                404
              </h1>
            </div>

            {/* Icon */}
            <div className="slide-up">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
                <Search className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Headline */}
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Seite nicht gefunden
              </h2>
            </div>

            {/* Description */}
            <div className="slide-up">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Die Seite, die Sie suchen, existiert leider nicht. 
                Möglicherweise wurde sie verschoben oder die URL ist falsch eingegeben.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
              <Button size="lg" asChild>
                <a href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Zur Startseite
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-12 slide-up">
              <p className="text-sm text-muted-foreground mb-4">
                Vielleicht suchen Sie nach:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/ki-loesungen-psychotherapeuten" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  KI-Lösungen für Psychotherapeuten
                </a>
                <span className="text-muted-foreground">•</span>
                <a 
                  href="/ki-loesungen-hotels" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  KI-Lösungen für Hotels
                </a>
                <span className="text-muted-foreground">•</span>
                <a 
                  href="/#contact" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
