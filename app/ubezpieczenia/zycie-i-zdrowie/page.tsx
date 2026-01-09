import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Clock, Users, TrendingDown, Star, Phone, Mail, Heart, UserCheck, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie na życie i zdrowie - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona życia i zdrowia dla Ciebie i Twojej rodziny. Ubezpieczenia na życie, zdrowotne, chorobowe. Doradztwo 24h - 660 726 743.",
};

export default function UbezpieczenieZycieZdrowiePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/zycie-zdrowie.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia życiowe</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">na życie i zdrowie</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Zabezpiecz przyszłość swoją i swojej rodziny. Oferujemy kompleksowe ubezpieczenia na życie, zdrowotne i chorobowe dopasowane do Twoich potrzeb i możliwości finansowych.
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
                  <span>Indywidualne oferty</span>
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
              Dlaczego warto ubezpieczyć życie i zdrowie z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Bezpieczeństwo finansowe Twoje i Twojej rodziny to nasza misja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla odpowiedzialnych
              </h3>
              <p className="text-text-secondary">
                Zabezpieczasz przyszłość swoją i najbliższych. W razie nieprzewidzianych zdarzeń Twoja rodzina będzie finansowo chroniona.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla rodziców
              </h3>
              <p className="text-text-secondary">
                Gwarantujesz dzieciom bezpieczną przyszłość - edukację, stabilność finansową i spokój, niezależnie od okoliczności życiowych.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla kredytobiorców
              </h3>
              <p className="text-text-secondary">
                Zabezpieczysz spłatę kredytu hipotecznego lub konsumpcyjnego. Twoja rodzina nie straci domu ani nie zostanie z długiem.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla planujących
              </h3>
              <p className="text-text-secondary">
                Budujesz kapitał na przyszłość - emeryturę, studia dzieci, cele życiowe. Ubezpieczenie z komponentem inwestycyjnym to mądre oszczędzanie.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla pracujących
              </h3>
              <p className="text-text-secondary">
                Ochrona na wypadek utraty zdrowia lub niezdolności do pracy. Będziesz mieć środki na leczenie i utrzymanie bez obaw o przyszłość.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla ceniących spokój
              </h3>
              <p className="text-text-secondary">
                Bez względu na to co przyniesie przyszłość, będziesz miał pewność że Ty i Twoi bliscy jesteście zabezpieczeni finansowo.
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
              Przygotuj te dane, aby otrzymać dokładną ofertę ubezpieczenia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane osobowe</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Wiek i płeć</li>
                <li>• Stan cywilny</li>
                <li>• Liczba dzieci</li>
                <li>• Zawód wykonywany</li>
                <li>• Miejsce zamieszkania</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Stan zdrowia</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Wzrost i waga</li>
                <li>• Choroby przewlekłe (jeśli są)</li>
                <li>• Przyjmowane leki</li>
                <li>• Przebyte operacje</li>
                <li>• Palenie papierosów</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Zakres ochrony</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Suma ubezpieczenia (np. 200 000 zł)</li>
                <li>• Okres ochrony (np. 20 lat)</li>
                <li>• Osoby ubezpieczone</li>
                <li>• Dodatkowe ryzyka</li>
                <li>• Komponenty inwestycyjne</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie martw się szczegółami - nasi doradcy pomogą Ci wszystko wypełnić
            </p>
            <Button size="lg">Zapytaj o ofertę</Button>
          </div>
        </div>
      </section>

      {/* Przykładowe składki */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Przykładowe składki miesięczne
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny ubezpieczeń na życie - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { age: "30 lat", gender: "Kobieta", sum: "200 000 zł", period: "20 lat", price: "45 zł/mies." },
              { age: "35 lat", gender: "Mężczyzna", sum: "300 000 zł", period: "25 lat", price: "85 zł/mies." },
              { age: "25 lat", gender: "Kobieta", sum: "150 000 zł", period: "30 lat", price: "35 zł/mies." },
              { age: "40 lat", gender: "Mężczyzna", sum: "500 000 zł", period: "20 lat", price: "195 zł/mies." },
              { age: "28 lat", gender: "Kobieta", sum: "250 000 zł", period: "25 lat", price: "55 zł/mies." },
              { age: "45 lat", gender: "Mężczyzna", sum: "400 000 zł", period: "15 lat", price: "180 zł/mies." },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-text-secondary">{example.gender}, {example.age}</div>
                    <div className="text-sm text-text-secondary">Suma: {example.sum}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-base font-semibold text-text-primary">Okres: {example.period}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa składka z rynku dla ubezpieczenia terminowego na życie. Cena indywidualna zależy od stanu zdrowia, zawodu i zakresu ochrony.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz poznać swoją składkę? Skontaktuj się z nami!
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
              Rodzaje ubezpieczeń życia i zdrowia
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz ochronę dopasowaną do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">NAJBARDZIEJ POPULARNE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ubezpieczenie na życie</h3>
              <p className="text-text-secondary mb-6">
                Podstawowa ochrona finansowa na wypadek śmierci ubezpieczonego. Wypłata sumy ubezpieczenia dla bliskich.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Ochrona rodziny w razie Twojej śmierci</li>
                <li>• Wypłata sumy gwarantowanej</li>
                <li>• Terminowe lub całe życie</li>
                <li>• Możliwość dokupienia ryzyk</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DLA ZDROWIA</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ubezpieczenie zdrowotne</h3>
              <p className="text-text-secondary mb-6">
                Dostęp do prywatnej opieki medycznej - szybkie wizyty, specjaliści, badania bez kolejek.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Prywatna opieka medyczna</li>
                <li>• Wizyty bez kolejek</li>
                <li>• Badania i specjaliści</li>
                <li>• Pakiety dla całej rodziny</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">NA WYPADEK CHOROBY</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ubezpieczenie chorobowe</h3>
              <p className="text-text-secondary mb-6">
                Finansowe wsparcie w przypadku poważnej choroby - raka, zawału, udaru i innych.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Wypłata przy poważnej chorobie</li>
                <li>• Wsparcie na leczenie</li>
                <li>• Pokrycie kosztów rehabilitacji</li>
                <li>• Utrata dochodów</li>
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
                    <strong className="text-text-primary">Ubezpieczenie inwestycyjne (UFK)</strong> - połączenie ochrony z oszczędzaniem
                  </div>
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie posagowe</strong> - kapitał na przyszłość dzieci
                  </div>
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie rentowe</strong> - renta przy trwałej niezdolności do pracy
                  </div>
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie wypadkowe</strong> - ochrona przed skutkami wypadków
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
            Zabezpiecz przyszłość swoją i rodziny
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Porozmawiajmy o najlepszej ochronie dla Ciebie. Nasi doradcy pomogą wybrać ubezpieczenie dopasowane do Twojej sytuacji życiowej.
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
