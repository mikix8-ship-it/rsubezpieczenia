import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Heart, Users, TrendingDown, Star, Phone, Mail, Stethoscope, PawPrint, Bird } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie psa, kota i zwierząt - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona Twojego pupila - leczenie, OC, koszty weterynaryjne. Ubezpieczenia dla psów, kotów i zwierząt egzotycznych. Kontakt 24h.",
};

export default function UbezpieczenieZwierzatPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/zwierzeta.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia zwierząt</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">zwierząt</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Zadbaj o zdrowie i bezpieczeństwo swojego pupila. Kompleksowe ubezpieczenia dla psów, kotów i zwierząt egzotycznych - koszty leczenia, OC i więcej.
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
                  <span>Wszystkie rasy</span>
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
              Dlaczego warto ubezpieczyć zwierzę z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Twój pupil zasługuje na najlepszą opiekę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <PawPrint className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli psów
              </h3>
              <p className="text-text-secondary">
                Ubezpiecz swojego psa od kosztów leczenia i odpowiedzialności cywilnej. Ochrona dla wszystkich ras - od małych po bardzo duże.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli kotów
              </h3>
              <p className="text-text-secondary">
                Koty również wymagają opieki weterynaryjnej. Ubezpieczenie pokryje koszty leczenia, operacji i badań diagnostycznych.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Bird className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla zwierząt egzotycznych
              </h3>
              <p className="text-text-secondary">
                Posiadasz papugę, fretk ę, świnkę morską? Oferujemy specjalne pakiety również dla zwierząt nietypowych.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla odpowiedzialnych
              </h3>
              <p className="text-text-secondary">
                OC posiadacza zwierzęcia chroni Cię przed kosztami odszkodowań, jeśli Twój pupil wyrządzi komuś szkodę.
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
                Porównamy oferty kilku towarzystw, aby znaleźć dla Ciebie najlepszy stosunek ceny do zakresu ochrony dla Twojego pupila.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla kochających zwierzęta
              </h3>
              <p className="text-text-secondary">
                Twój pupil to członek rodziny. Ubezpieczenie daje Ci pewność, że zawsze będziesz mógł zapewnić mu najlepszą opiekę weterynaryjną.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Jakie dane potrzebne */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-6">Szybki proces</Badge>
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Jakie informacje są potrzebne do wyceny?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Kilka prostych informacji o Twoim pupilu wystarczy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane zwierzęcia</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Gatunek (pies, kot, inne)</li>
                <li>• Rasa (jeśli rasowe)</li>
                <li>• Wiek i płeć</li>
                <li>• Numer chip/tatuaż</li>
                <li>• Waga (dla psów)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Stan zdrowia</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Choroby przewlekłe (jeśli są)</li>
                <li>• Przebyte operacje</li>
                <li>• Szczepienia aktualne</li>
                <li>• Historia leczenia</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Zakres ochrony</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Leczenie weterynaryjne</li>
                <li>• OC posiadacza</li>
                <li>• Koszty operacji</li>
                <li>• Assistance weterynaryjne</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie znasz wszystkich szczegółów? Pomożemy wypełnić wniosek!
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
              Orientacyjne ceny ubezpieczeń zwierząt - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { animal: "Pies mały (5 kg)", age: "2 lata", coverage: "Leczenie + OC", sum: "10 000 zł", price: "350 zł/rok" },
              { animal: "Pies średni (15 kg)", age: "4 lata", coverage: "Leczenie + OC + operacje", sum: "15 000 zł", price: "520 zł/rok" },
              { animal: "Pies duży (35 kg)", age: "3 lata", coverage: "Pakiet kompletny", sum: "20 000 zł", price: "780 zł/rok" },
              { animal: "Kot domowy", age: "5 lat", coverage: "Leczenie + OC", sum: "8 000 zł", price: "280 zł/rok" },
              { animal: "Pies rasowy", age: "1 rok", coverage: "Leczenie", sum: "12 000 zł", price: "420 zł/rok" },
              { animal: "Kot + pies", age: "Różne", coverage: "Pakiet rodzinny", sum: "18 000 zł", price: "650 zł/rok" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.animal}</div>
                    <div className="text-sm text-text-secondary">Wiek: {example.age}</div>
                    <div className="text-sm text-text-secondary">{example.coverage}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Suma: {example.sum}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od rasy, wieku, stanu zdrowia i zakresu ochrony.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz ubezpieczyć swojego pupila?
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
              Co obejmuje ubezpieczenie zwierząt?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Poznaj zakresy ochrony i wybierz odpowiedni pakiet dla swojego pupila
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">PODSTAWOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Leczenie weterynaryjne</h3>
              <p className="text-text-secondary mb-6">
                Pokrycie kosztów leczenia, badań diagnostycznych i zabiegów weterynaryjnych Twojego zwierzęcia.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Wizyty u weterynarza</li>
                <li>• Badania i diagnostyka</li>
                <li>• Leki i szczepienia</li>
                <li>• Hospitalizacja</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">OC posiadacza</h3>
              <p className="text-text-secondary mb-6">
                Odpowiedzialność cywilna za szkody wyrządzone przez Twoje zwierzę innym osobom lub ich mieniu.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Uszkodzenie mienia</li>
                <li>• Obrażenia ciała</li>
                <li>• Pogryzienia i zadrapania</li>
                <li>• Suma gwarancyjna do 100 000 zł</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">ROZSZERZONE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Operacje chirurgiczne</h3>
              <p className="text-text-secondary mb-6">
                Pokrycie kosztów zabiegów chirurgicznych, w tym operacji ratujących życie i pooperacyjnej rehabilitacji.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Operacje planowane</li>
                <li>• Operacje nagłe</li>
                <li>• Znieczulenie i hospitalizacja</li>
                <li>• Rehabilitacja pooperacyjna</li>
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
                    <strong className="text-text-primary">Assistance weterynaryjne</strong> - transport do kliniki, pomoc w nagłych przypadkach
                  </div>
                  <div>
                    <strong className="text-text-primary">Utrata/kradzież</strong> - rekompensata przy zaginięciu lub kradzieży zwierzęcia
                  </div>
                  <div>
                    <strong className="text-text-primary">Choroby przewlekłe</strong> - ochrona dla zwierząt z przewlekłymi schorzeniami
                  </div>
                  <div>
                    <strong className="text-text-primary">Rekonwalescencja</strong> - opieka i rehabilitacja po chorobie
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
            Zadbaj o zdrowie swojego pupila
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj ofertę ubezpieczenia dla Twojego psa, kota lub innego zwierzęcia. Pomożemy wybrać najlepszą ochronę.
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
              <div className="text-4xl font-bold mb-2">Wszystkie rasy</div>
              <div className="opacity-80">Ochrona</div>
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
