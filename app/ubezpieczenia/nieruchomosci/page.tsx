import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Home, Users, TrendingDown, Star, Phone, Mail, Building, Key, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie mieszkania i domu - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona Twojej nieruchomości - mieszkanie, dom, OC w życiu prywatnym. Zabezpieczenie przed pożarem, zalaniem, kradzieżą. Kontakt 24h.",
};

export default function UbezpieczenieNieruchomosciPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/nieruchomosci.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia nieruchomości</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">mieszkania i domu</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Chroń swój dom przed nieprzewidzianymi zdarzeniami. Kompleksowe ubezpieczenie nieruchomości, wyposażenia i odpowiedzialności cywilnej w życiu prywatnym.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+48660726743">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Zadzwoń: 660 726 743
                  </Button>
                </a>
                <a href="mailto:info@rsubezpieczenia.pl">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Mail className="w-5 h-5" />
                    Napisz do nas
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-text-secondary">
                <div className="flex flex-col items-center text-center">
                  <Check className="w-5 h-5 text-success mb-1" />
                  <span>Kontakt w 24h</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Check className="w-5 h-5 text-success mb-1" />
                  <span>Pełna ochrona</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Check className="w-5 h-5 text-success mb-1" />
                  <span>Bez opłat</span>
                </div>
              </div>
            </div>

            <div>
              <SimpleContactButton />
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego RS Ubezpieczenia */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Dlaczego warto ubezpieczyć nieruchomość z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Bezpieczeństwo Twojego domu to nasza specjalność
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli
              </h3>
              <p className="text-text-secondary">
                Zabezpiecz swój największy majątek. Ochrona mieszkania lub domu przed pożarem, zalaniem, włamaniem i innymi zagrożeniami.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla wynajmujących
              </h3>
              <p className="text-text-secondary">
                Specjalne pakiety dla mieszkań na wynajem. Ochrona Twojej inwestycji i zabezpieczenie przed szkodami najemców.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla oszczędnych
              </h3>
              <p className="text-text-secondary">
                Doradzimy najkorzystniejsze pakiety. Dzięki współpracy z wieloma towarzystwami znajdziemy dla Ciebie optymalną cenę.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla spokojnych
              </h3>
              <p className="text-text-secondary">
                Śpij spokojnie wiedząc, że Twój dom jest ubezpieczony. W razie szkody otrzymasz szybkie odszkodowanie na naprawę.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla kredytobiorców
              </h3>
              <p className="text-text-secondary">
                Obowiązkowe ubezpieczenie przy kredycie hipotecznym. Pomożemy wybrać polisę spełniającą wymagania banku w dobrej cenie.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla wymagających
              </h3>
              <p className="text-text-secondary">
                Kompleksowe pakiety z dodatkowymi ochronami - szyby, AGD, sprzęt elektroniczny, przedmioty wartościowe.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Jakie dane potrzebne */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-6">Prosty proces</Badge>
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Jakie informacje są potrzebne do wyceny?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Podstawowe dane wystarczą do przygotowania oferty ubezpieczenia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane nieruchomości</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Typ (mieszkanie/dom)</li>
                <li>• Adres</li>
                <li>• Powierzchnia (m²)</li>
                <li>• Rok budowy</li>
                <li>• Standard wykończenia</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Wartość do ubezpieczenia</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Wartość budynku/lokalu</li>
                <li>• Wartość wyposażenia</li>
                <li>• Przedmioty wartościowe</li>
                <li>• Sprzęt elektroniczny</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Dodatkowe informacje</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Zabezpieczenia (alarm, drzwi)</li>
                <li>• Sposób użytkowania</li>
                <li>• Kredyt hipoteczny (jeśli jest)</li>
                <li>• Historia szkód</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie znasz dokładnej wartości? Pomożemy ją oszacować!
            </p>
            <Button size="lg">Zapytaj o ofertę</Button>
          </div>
        </div>
      </section>

      {/* Przykładowe ceny */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Przykładowe składki roczne
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny ubezpieczeń - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Mieszkanie 45m²", city: "Wrocław", sum: "200 000 zł", extras: "Wyposażenie", price: "180 zł/rok" },
              { type: "Mieszkanie 65m²", city: "Warszawa", sum: "350 000 zł", extras: "Wyposażenie + OC", price: "320 zł/rok" },
              { type: "Dom 120m²", city: "Kraków", sum: "600 000 zł", extras: "Budynek + wyposażenie", price: "650 zł/rok" },
              { type: "Mieszkanie 50m²", city: "Poznań", sum: "220 000 zł", extras: "Podstawowe", price: "160 zł/rok" },
              { type: "Dom 150m²", city: "Gdańsk", sum: "800 000 zł", extras: "All-risk", price: "890 zł/rok" },
              { type: "Mieszkanie 80m²", city: "Łódź", sum: "280 000 zł", extras: "Wyposażenie + szyby", price: "280 zł/rok" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.type}</div>
                    <div className="text-sm text-text-secondary">{example.city}</div>
                    <div className="text-sm text-text-secondary">Suma: {example.sum}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Zakres: {example.extras}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od lokalizacji, wartości, zabezpieczeń i zakresu ochrony.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz poznać cenę dla swojej nieruchomości?
            </p>
            <Button size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Otrzymaj indywidualną wycenę
            </Button>
          </div>
        </div>
      </section>

      {/* Rodzaje ubezpieczeń */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Co można ubezpieczyć?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz zakres ochrony dopasowany do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">PODSTAWOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Budynek/lokal</h3>
              <p className="text-text-secondary mb-6">
                Ochrona konstrukcji budynku lub lokalu mieszkalnego przed pożarem, zalaniem, żywiołami.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Pożar i uderzenie pioruna</li>
                <li>• Zalanie i powódź</li>
                <li>• Huragan, grad, śnieg</li>
                <li>• Trzęsienie ziemi</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ruchomości</h3>
              <p className="text-text-secondary mb-6">
                Ubezpieczenie wyposażenia mieszkania - mebli, AGD, elektroniki, odzieży.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Meble i wyposażenie</li>
                <li>• Sprzęt RTV i AGD</li>
                <li>• Odzież i obuwie</li>
                <li>• Przedmioty codziennego użytku</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">WAŻNE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">OC w życiu prywatnym</h3>
              <p className="text-text-secondary mb-6">
                Odpowiedzialność cywilna za szkody wyrządzone innym osobom w życiu prywatnym.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Zalanie sąsiada</li>
                <li>• Uszkodzenia mienia</li>
                <li>• Obrażenia ciała</li>
                <li>• Szkody dzieci i zwierząt</li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-accent/5 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  Dodatkowe ochrony do rozważenia
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie szyb</strong> - wybite szyby, lustra, ceramika
                  </div>
                  <div>
                    <strong className="text-text-primary">Assistance domowe</strong> - pomoc hydraulika, elektryka, ślusarza
                  </div>
                  <div>
                    <strong className="text-text-primary">Przedmioty wartościowe</strong> - biżuteria, dzieła sztuki
                  </div>
                  <div>
                    <strong className="text-text-primary">Kradzież z włamaniem</strong> - rozszerzona ochrona przed włamaniem
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-heading-xl font-bold mb-4">
            Chroń swój dom już dziś
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj ofertę ubezpieczenia dopasowaną do Twojej nieruchomości. Doradzimy najlepsze rozwiązanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48660726743">
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Zadzwoń: 660 726 743
              </Button>
            </a>
            <a href="mailto:info@rsubezpieczenia.pl">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent w-full sm:w-auto">
                <Mail className="w-5 h-5" />
                Napisz do nas
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="opacity-80">Czas odpowiedzi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35+</div>
              <div className="opacity-80">Towarzystw</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0 zł</div>
              <div className="opacity-80">Koszt doradztwa</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
