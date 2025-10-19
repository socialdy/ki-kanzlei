import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up text-center">
              Impressum
            </h1>
            
            <div className="space-y-8 text-gray-700 slide-up text-center">
              {/* Impressum gemäß ECG */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Impressum gemäß § 5 ECG und § 25 MedienG
                </h2>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Medieninhaber:</span>
                    <span className="text-gray-600 ml-2">Arnold Freissling</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Anschrift:</span>
                    <span className="text-gray-600 ml-2">Stavangergasse 5/1/6, 1220 Wien</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Telefonnummer:</span>
                    <span className="text-gray-600 ml-2">0664 / 2314676</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">E-Mail:</span>
                    <span className="text-gray-600 ml-2">arnold@freissling-partners.com</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Zuständige Aufsichtsbehörde:</span>
                    <span className="text-gray-600 ml-2">Magistrat für den 22. Wiener Gemeindebezirk</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">UID:</span>
                    <span className="text-gray-600 ml-2">[Wird nachgereicht]</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Gewerbe:</span>
                    <span className="text-gray-600 ml-2">Unternehmensberater für Marketing und Vertrieb</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Mitglied der österreichischen Wirtschaftskammer:</span>
                    <a href="https://www.wko.at/" className="text-primary hover:text-primary/80 transition-colors ml-2" target="_blank" rel="noopener noreferrer">
                      https://www.wko.at/
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Gewerberechtliche Vorschriften:</span>
                    <span className="text-gray-600 ml-2">Gewerbeordnung (www.ris.bka.gv.at)</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Nutzungsvorbehalt gemäß § 42h Abs 6 UrhG:</span>
                    <span className="text-gray-600 ml-2">Dem Text-Mining von Inhalten dieser Website wird ausdrücklich widersprochen.</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-semibold text-gray-700">Blattlinie:</span>
                    <span className="text-gray-600 ml-2">Informationen rund um das Thema (digitaler) Vertrieb und Automatisierung von Vertrieb</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
