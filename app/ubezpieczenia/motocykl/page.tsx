import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import QuoteCalculator from "@/components/ui/QuoteCalculator";
import { Check, Shield, Bike as MotorcycleIcon, Users, TrendingDown, Star, Phone, Mail, Calendar, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie motocykla OC i AC - RS Ubezpieczenia Wrocław",
  description: "Ubezpieczenie motocykla Wrocław - OC, AC, Assistance. Sezonowe i całoroczne. Dla wszystkich typów jednośladów. ☎️ 660 726 743",
};

export default function UbezpieczenieMotocyklPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/motocykl.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia motocyklowe</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">motocykla</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Profesjonalna ochrona dla Twojego motocykla. Oferujemy ubezpieczenia OC, AC i Assistance - sezonowe i całoroczne, dla wszystkich typów jednośladów.
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
                  <span>Sezonowe</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Check className="w-5 h-5 text-success mb-1" />
                  <span>Bez opłat</span>
                </div>
              </div>
            </div>

            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego RS Ubezpieczenia */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Dlaczego warto ubezpieczyć motocykl z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Specjalizujemy się w ubezpieczeniach motocyklowych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MotorcycleIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla motocyklistów
              </h3>
              <p className="text-text-secondary">
                Rozumiemy potrzeby motocyklistów. Doradzimy najlepszą ochronę dla Twojego jednośla du - od skutera po sportowy superbike.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla sezonowych
              </h3>
              <p className="text-text-secondary">
                Jeździsz tylko w sezonie? Możesz wybrać ubezpieczenie sezonowe (np. kwiecień-październik) i zaoszczędzić na składce.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli drogich maszyn
              </h3>
              <p className="text-text-secondary">
                Posiadasz motocykl o wysokiej wartości? AC chroni przed kradzieżą, uszkodzeniem i wypadkiem - odzyskasz koszty naprawy lub wartość pojazdu.
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
                Sprawdzimy oferty kilkunastu towarzystw, aby znaleźć najkorzystniejszą cenę przy zachowaniu odpowiedniego zakresu ochrony.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla podróżników
              </h3>
              <p className="text-text-secondary">
                Planujesz dalekie trasy? Assistance motocyklowe zapewni Ci pomoc w razie awarii, wypadku czy złego stanu technicznego.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla młodych kierowców
              </h3>
              <p className="text-text-secondary">
                Dopiero zaczynasz przygodę z motocyklem? Pomożemy znaleźć korzystną ofertę mimo braku historii ubezpieczeniowej.
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
              Podstawowe dane wystarczą do przygotowania oferty ubezpieczenia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane motocykla</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Marka i model</li>
                <li>• Rok produkcji</li>
                <li>• Pojemność silnika</li>
                <li>• Numer rejestracyjny</li>
                <li>• Data pierwszej rejestracji</li>
                <li>• Przebieg</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Dane właściciela</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Data urodzenia</li>
                <li>• Data uzyskania prawa jazdy kat. A</li>
                <li>• Adres zameldowania</li>
                <li>• Miejsce parkowania</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Historia i zakres</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Obecny ubezpieczyciel</li>
                <li>• Historia szkód</li>
                <li>• Okres ubezpieczenia (sezon/cały rok)</li>
                <li>• Dodatkowe ochrony (AC, Assistance)</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie masz wszystkich danych? Pomożemy Ci je znaleźć!
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
              Przykładowe ceny ubezpieczeń motocykla
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny dla różnych typów motocykli - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Skuter 50cc", age: "28 lat", capacity: "50 cm³", period: "Cały rok", price: "180 zł" },
              { type: "Naked 600cc", age: "32 lata", capacity: "600 cm³", period: "Sezon (7 mies.)", price: "420 zł" },
              { type: "Cruiser 1200cc", age: "45 lat", capacity: "1200 cm³", period: "Cały rok", price: "650 zł" },
              { type: "Sportowy 1000cc", age: "25 lat", capacity: "1000 cm³", period: "Sezon", price: "1200 zł" },
              { type: "Enduro 650cc", age: "38 lat", capacity: "650 cm³", period: "Cały rok", price: "520 zł" },
              { type: "Chopper 800cc", age: "42 lata", capacity: "800 cm³", period: "Sezon (6 mies.)", price: "380 zł" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.type}</div>
                    <div className="text-sm text-text-secondary">Wiek: {example.age}</div>
                    <div className="text-sm text-text-secondary">{example.capacity}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Okres: {example.period}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena OC z rynku. Cena indywidualna zależy od wieku, doświadczenia, miejsca zamieszkania i historii ubezpieczeniowej.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz poznać cenę dla swojego motocykla?
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
              Rodzaje ubezpieczeń motocyklowych
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz ochronę dopasowaną do Twoich potrzeb i sposobu jazdy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">OBOWIĄZKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">OC motocykla</h3>
              <p className="text-text-secondary mb-6">
                Ubezpieczenie odpowiedzialności cywilnej - obowiązkowe dla każdego motocyklisty. Pokrywa szkody wyrządzone innym.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Ochrona od odpowiedzialności</li>
                <li>• Szkody w pojazdach i mieniu</li>
                <li>• Obrażenia ciała poszkodowanych</li>
                <li>• Sezonowe lub całoroczne</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">AC motocykla</h3>
              <p className="text-text-secondary mb-6">
                Kompleksowa ochrona Twojego motocykla - kradzież, uszkodzenie, wypadek. Odszkodowanie za naprawę lub wartość pojazdu.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Kradzież i rozbój</li>
                <li>• Kolizja i wypadek</li>
                <li>• Pożar, grad, powódź</li>
                <li>• Dewastacja</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DODATKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Assistance</h3>
              <p className="text-text-secondary mb-6">
                Pomoc drogowa dla motocyklistów - holowanie, transport, pomoc techniczna w razie awarii lub wypadku.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Holowanie motocykla</li>
                <li>• Pomoc techniczna</li>
                <li>• Transport do warsztatu</li>
                <li>• Pomoc za granicą</li>
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
                    <strong className="text-text-primary">Ubezpieczenie NNW</strong> - ochrona kierowcy i pasażera
                  </div>
                  <div>
                    <strong className="text-text-primary">Zielona Karta</strong> - rozszerzone OC poza UE
                  </div>
                  <div>
                    <strong className="text-text-primary">Sprzęt dodatkowy</strong> - kaski, kufry, GPS
                  </div>
                  <div>
                    <strong className="text-text-primary">Ochrona zniżek</strong> - zachowaj bonus po szkodzie
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
            Gotowy na sezon motocyklowy?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj najlepszą ofertę ubezpieczenia dla swojego motocykla. Sezonowe i całoroczne - Ty decydujesz!
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
              <div className="text-4xl font-bold mb-2">Sezonowe</div>
              <div className="opacity-80">Dostępne</div>
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
