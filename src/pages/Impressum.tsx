import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 slide-up">
              Impressum
            </h1>
            
            <div className="space-y-8 text-gray-700 slide-up">
              {/* Mandantschaft */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Mandantschaft</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-600">Mandantschaft:</span>
                    <span className="ml-2">Arnold Freissling</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Datum:</span>
                    <span className="ml-2">14.10.2025</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Aktualisierung:</span>
                    <span className="ml-2">14.10.2026 (empfohlen)</span>
                  </div>
                </div>
              </div>

              {/* Impressum gemäß ECG */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Impressum gemäß § 5 ECG und § 25 MedienG
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Medieninhaber:</span>
                    <span className="text-gray-600">Arnold Freissling</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Anschrift:</span>
                    <span className="text-gray-600">Stavangergasse 5/1/6, 1220 Wien</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Telefonnummer:</span>
                    <span className="text-gray-600">0664 / 2314676</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">E-Mail:</span>
                    <span className="text-gray-600">arnold@freissling-partners.com</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Zuständige Aufsichtsbehörde:</span>
                    <span className="text-gray-600">Magistrat für den 22. Wiener Gemeindebezirk</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">UID:</span>
                    <span className="text-gray-600">[Wird nachgereicht]</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Gewerbe:</span>
                    <span className="text-gray-600">Unternehmensberater für Marketing und Vertrieb</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Mitglied der österreichischen Wirtschaftskammer:</span>
                    <a href="https://www.wko.at/" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                      https://www.wko.at/
                    </a>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Gewerberechtliche Vorschriften:</span>
                    <span className="text-gray-600">Gewerbeordnung (www.ris.bka.gv.at)</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Foto-Credit:</span>
                    <span className="text-gray-600">Die Urheberrechte an Bildern liegen bei Gradwohl Creations GmbH</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Nutzungsvorbehalt gemäß § 42h Abs 6 UrhG:</span>
                    <span className="text-gray-600">Dem Text-Mining von Inhalten dieser Website wird ausdrücklich widersprochen.</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold text-gray-700 w-full md:w-48">Blattlinie:</span>
                    <span className="text-gray-600">Informationen rund um das Thema (digitaler) Vertrieb und Automatisierung von Vertrieb</span>
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
