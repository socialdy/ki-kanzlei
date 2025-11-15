import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PricingHotels = () => {
  return (
    <section id="paket" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Paket & Preise</h2>
          <p className="text-lg text-muted-foreground mt-2">Einmalige Einrichtung + laufende Betreuung</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Einrichtung, Betrieb und Optionen</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-3 text-muted-foreground">
              <div><span className="font-semibold text-foreground">Einrichtung (einmalig):</span> 4.500,00 € netto</div>
              <div><span className="font-semibold text-foreground">Betreuung (monatlich):</span> 340,00 € netto (inkl. 2h Support) zzgl. API‑Kosten nach Verbrauch</div>
              <div><span className="font-semibold text-foreground">Mehrleistung:</span> 80,00 € je Stunde außerhalb des Pakets</div>
              <div className="pt-2">
                <span className="font-semibold text-foreground">Betriebsmodi:</span> 24/7 Vollbetrieb, ausschließlich Nachtbetrieb, oder hybrid (z. B. Spitzenzeiten + Nacht)
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <div className="text-sm text-muted-foreground">Optionale Erweiterungen</div>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>Multi‑Channel Inbound (Instagram, Facebook, WhatsApp, E‑Mail) via Superchat</li>
                <li>SEO‑Agent: Automatisierte Blogbeiträge für bessere Rankings</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Button className="w-full" asChild><a href="#contact">Anfrage starten</a></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};





