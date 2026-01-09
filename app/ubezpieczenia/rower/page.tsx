import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Bike, Users, TrendingDown, Star, Phone, Mail, MapPin, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie roweru OC i AC - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona Twojego roweru - OC rowerzysty, ubezpieczenie od kradzieży i uszkodzenia. Rowery miejskie, górskie, elektryczne. Kontakt 24h.",
};

export default function UbezpieczenieRowerPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/rower.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia rowerowe</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">roweru</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Chroń swój rower przed kradzieżą i uszkodzeniem. Oferujemy ubezpieczenie OC rowerzysty oraz kompleksowe AC dla rowerów miejskich, górskich i elektrycznych.
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
                  <span>Wszystkie typy</span>
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
              Dlaczego warto ubezpieczyć rower z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Profesjonalne doradztwo dla każdego rowerzysty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Bike className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli drogich rowerów
              </h3>
              <p className="text-text-secondary">
                Zabezpiecz swoją cenną inwestycję. Ochrona przed kradzieżą, włamaniem i dewastacją dla rowerów o wartości powyżej 2000 zł.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla miejskich rowerzystów
              </h3>
              <p className="text-text-secondary">
                Poruszasz się po mieście codziennie? Ubezpiecz się od odpowiedzialności cywilnej i zabezpiecz rower przed kradzieżą.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla miłośników MTB
              </h3>
              <p className="text-text-secondary">
                Rowery górskie wymagają specjalnej ochrony. Ubezpiecz się przed uszkodzeniami podczas jazdy w terenie i kradzieżą.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla użytkowników e-bike
              </h3>
              <p className="text-text-secondary">
                Rowery elektryczne to drogi sprzęt. Kompleksowe ubezpieczenie chroni również baterię i silnik elektryczny.
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
                Sprawdzimy oferty wielu towarzystw, aby znaleźć dla Ciebie najkorzystniejszą cenę ubezpieczenia roweru.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla bezpiecznych
              </h3>
              <p className="text-text-secondary">
                OC rowerzysty chroni Cię przed kosztami odszkodowań, jeśli spowodowałbyś wypadek lub uszkodzenie mienia.
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
              Kilka podstawowych danych wystarczy do przygotowania oferty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane roweru</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Marka i model</li>
                <li>• Rok produkcji</li>
                <li>• Wartość roweru (cena zakupu)</li>
                <li>• Typ (miejski, górski, elektryczny)</li>
                <li>• Numer ramy (jeśli znany)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Sposób użytkowania</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Miejsce przechowywania</li>
                <li>• Zabezpieczenia (zamki)</li>
                <li>• Częstotliwość użytkowania</li>
                <li>• Miejsce używania (miasto/teren)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Zakres ochrony</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• OC rowerzysty (obowiązkowe?)</li>
                <li>• AC - kradzież</li>
                <li>• AC - uszkodzenie</li>
                <li>• Assistance rowerowe</li>
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
              Przykładowe ceny ubezpieczeń roweru
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny dla różnych typów rowerów - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Rower miejski", value: "2 500 zł", coverage: "OC + kradzież", period: "Rok", price: "120 zł/rok" },
              { type: "Rower górski MTB", value: "5 000 zł", coverage: "OC + AC pełne", period: "Rok", price: "280 zł/rok" },
              { type: "Rower elektryczny", value: "8 000 zł", coverage: "OC + AC + bateria", period: "Rok", price: "450 zł/rok" },
              { type: "Rower szosowy", value: "12 000 zł", coverage: "AC all-risk", period: "Rok", price: "650 zł/rok" },
              { type: "Rower miejski", value: "1 800 zł", coverage: "Tylko OC", period: "Rok", price: "45 zł/rok" },
              { type: "E-bike miejski", value: "6 500 zł", coverage: "OC + kradzież", period: "Rok", price: "350 zł/rok" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.type}</div>
                    <div className="text-sm text-text-secondary">Wartość: {example.value}</div>
                    <div className="text-sm text-text-secondary">{example.coverage}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Okres: {example.period}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od wartości roweru, zakresu ochrony i zabezpieczeń.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz ubezpieczyć swój rower?
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
              Rodzaje ubezpieczeń rowerowych
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz ochronę dopasowaną do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">OBOWIĄZKOWE (od 2021)</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">OC rowerzysty</h3>
              <p className="text-text-secondary mb-6">
                Ubezpieczenie odpowiedzialności cywilnej posiadacza roweru - chroni przed kosztami szkód wyrządzonych innym.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Odszkodowania dla poszkodowanych</li>
                <li>• Uszkodzenie mienia</li>
                <li>• Obrażenia ciała</li>
                <li>• Suma gwarancyjna do 500 000 EUR</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">AC - Kradzież</h3>
              <p className="text-text-secondary mb-6">
                Ochrona przed kradzieżą i dewastacją roweru. Wypłata odszkodowania przy kradzieży z włamaniem.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Kradzież z włamaniem</li>
                <li>• Rozbój</li>
                <li>• Dewastacja</li>
                <li>• Wymóg zabezpieczeń (zamki)</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">ROZSZERZONE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">AC - Uszkodzenie</h3>
              <p className="text-text-secondary mb-6">
                Kompleksowa ochrona przed uszkodzeniami podczas jazdy, upadkiem, kolizją.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Uszkodzenia podczas jazdy</li>
                <li>• Kolizja z innym pojazdem</li>
                <li>• Upadek i przewrócenie</li>
                <li>• Uszkodzenie w transporcie</li>
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
                    <strong className="text-text-primary">Assistance rowerowe</strong> - pomoc drogowa, transport roweru
                  </div>
                  <div>
                    <strong className="text-text-primary">NNW rowerzysty</strong> - ochrona przed skutkami wypadków
                  </div>
                  <div>
                    <strong className="text-text-primary">Akcesoria</strong> - kaski, sakwy, liczniki
                  </div>
                  <div>
                    <strong className="text-text-primary">Bateria i silnik</strong> - dla rowerów elektrycznych
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
            Chroń swój rower już dziś
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj ofertę ubezpieczenia dopasowaną do Twojego roweru. Pomożemy wybrać najlepszą ochronę.
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
              <div className="text-4xl font-bold mb-2">Wszystkie typy</div>
              <div className="opacity-80">Rowerów</div>
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
