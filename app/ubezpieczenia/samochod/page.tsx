import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import QuoteCalculator from "@/components/ui/QuoteCalculator";
import {
  Check,
  Shield,
  Clock,
  Users,
  TrendingDown,
  Star,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie samochodu OC i AC Wrocław - RS Ubezpieczenia",
  description:
    "Ubezpieczenie samochodu Wrocław - OC, AC, Assistance, NNW. Profesjonalne doradztwo, porównanie 35+ towarzystw. Najlepsze ceny we Wrocławiu. ☎️ 660 726 743",
};

export default function UbezpieczenieSamochoduPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Fixed Background Image (parallax effect) */}
        {/* Mobile: contain (całe zdjęcie) | Desktop: cover (wypełnia) */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/samochod.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />

        <div className="container-custom relative z-10">
          {/* Give the hero enough height so 'contain' can show the whole image on mobile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[380px] sm:min-h-[520px]">
            <div>
              <Badge className="mb-6">Ubezpieczenia komunikacyjne</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie samochodu{" "}
                <span className="text-accent">OC i AC</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Profesjonalne doradztwo w zakresie ubezpieczeń samochodowych.
                Współpracujemy z 35+ towarzystwami, aby znaleźć dla Ciebie
                najlepszą ochronę w optymalnej cenie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+48660726743" className="w-full sm:w-auto">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Zadzwoń: 660 726 743
                  </Button>
                </a>
                <a
                  href="mailto:info@rsubezpieczenia.pl"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto"
                  >
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
                  <span>35+ towarzystw</span>
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
              Dlaczego warto ubezpieczyć samochód z RS Ubezpieczenia?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Oferujemy profesjonalne doradztwo i indywidualne podejście do
              każdego klienta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla oszczędnych
              </h3>
              <p className="text-text-secondary">
                Dzięki współpracy z 35+ towarzystwami ubezpieczeniowymi możemy
                znaleźć dla Ciebie najkorzystniejszą ofertę na rynku.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla dociekliwych
              </h3>
              <p className="text-text-secondary">
                Dokładnie wyjaśnimy Ci różnice między ofertami, zakresy ochrony i
                warunki ubezpieczenia. Pomożemy wybrać najlepszą ochronę.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla zabieganych
              </h3>
              <p className="text-text-secondary">
                Skontaktujemy się z Tobą w ciągu 24 godzin. Wszystkie formalności
                możemy załatwić telefonicznie lub przez email.
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
                Współpracujemy z liderami rynku ubezpieczeniowego: PZU, Generali,
                ERGO Hestia, Allianz i wieloma innymi.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla planujących
              </h3>
              <p className="text-text-secondary">
                Możesz zapytać o wycenę z wyprzedzeniem, jeszcze przed końcem
                obecnej polisy. Pomożemy zaplanować przedłużenie ubezpieczenia.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla ceniących kontakt osobisty
              </h3>
              <p className="text-text-secondary">
                Możesz do nas zadzwonić, napisać lub odwiedzić nas w biurze we
                Wrocławiu. Zawsze chętnie pomożemy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Jakie dane potrzebne */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-6">Krok po kroku</Badge>
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Jakie dane są potrzebne do wyceny?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Przygotuj te informacje, aby przyspieszyć proces wyceny
              ubezpieczenia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">
                1. Dane samochodu
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Marka i model</li>
                <li>• Rok produkcji</li>
                <li>• Numer rejestracyjny</li>
                <li>• VIN (17 znaków)</li>
                <li>• Data pierwszej rejestracji</li>
                <li>• Przebieg</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">
                2. Dane właściciela
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Data urodzenia</li>
                <li>• Data uzyskania prawa jazdy</li>
                <li>• Adres zameldowania</li>
                <li>• PESEL (opcjonalnie)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">
                3. Historia ubezpieczenia
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Obecny ubezpieczyciel</li>
                <li>• Data końca polisy</li>
                <li>• Liczba szkód w ostatnich latach</li>
                <li>• Klasa bonus-malus</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie masz wszystkich danych? Nic nie szkodzi - pomożemy Ci je
              znaleźć!
            </p>
            <Button size="lg">Wyślij zapytanie</Button>
          </div>
        </div>
      </section>

      {/* Przykładowe ceny */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Przykładowe ceny na rynku
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Sprawdź orientacyjne ceny ubezpieczeń - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Wrocław",
                age: "42 lata",
                car: "Toyota Corolla",
                price: "340 zł",
                type: "Mężczyzna",
              },
              {
                city: "Warszawa",
                age: "35 lat",
                car: "Volkswagen Golf",
                price: "420 zł",
                type: "Kobieta",
              },
              {
                city: "Kraków",
                age: "51 lat",
                car: "Skoda Octavia",
                price: "380 zł",
                type: "Mężczyzna",
              },
              {
                city: "Poznań",
                age: "29 lat",
                car: "Ford Fiesta",
                price: "520 zł",
                type: "Kobieta",
              },
              {
                city: "Gdańsk",
                age: "45 lat",
                car: "Opel Astra",
                price: "410 zł",
                type: "Mężczyzna",
              },
              {
                city: "Łódź",
                age: "38 lat",
                car: "Renault Clio",
                price: "390 zł",
                type: "Kobieta",
              },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-text-secondary">
                      {example.type}, {example.age}
                    </div>
                    <div className="text-sm text-text-secondary">{example.city}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    {example.price}
                  </div>
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {example.car}
                </div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena OC z rynku. Twoja indywidualna wycena może się
                  różnić w zależności od historii ubezpieczenia i innych czynników.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz poznać swoją cenę? Wyślij nam zapytanie!
            </p>
            <Button size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Otrzymaj indywidualną wycenę
            </Button>
          </div>
        </div>
      </section>

      {/* Które ubezpieczenia są najważniejsze */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-text-primary mb-4">
              Które ubezpieczenia samochodu są najważniejsze?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Poznaj rodzaje ubezpieczeń komunikacyjnych i wybierz odpowiednią ochronę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">OBOWIĄZKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Ubezpieczenie OC
              </h3>
              <p className="text-text-secondary mb-6">
                OC to ubezpieczenie odpowiedzialności cywilnej - obowiązkowe dla
                każdego kierowcy. Chroni Cię przed kosztami szkód, które wyrządzisz
                innym osobom.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Pokrywa szkody wyrządzone innym</li>
                <li>• Odszkodowania dla poszkodowanych</li>
                <li>• Suma gwarancyjna min. 5 mln EUR</li>
                <li>• Ważne w całej UE</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Ubezpieczenie AC
              </h3>
              <p className="text-text-secondary mb-6">
                AC (autocasco) to kompleksowa ochrona Twojego samochodu. Otrzymasz
                odszkodowanie za uszkodzenie, zniszczenie lub kradzież pojazdu.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Kradzież i rozbój</li>
                <li>• Kolizja i wypadek</li>
                <li>• Żywioły (grad, powódź, pożar)</li>
                <li>• Wybite szyby</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DODATKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Assistance
              </h3>
              <p className="text-text-secondary mb-6">
                Pomoc drogowa w każdej sytuacji. Assistance zapewnia holowanie,
                samochód zastępczy i pomoc w razie awarii.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Holowanie do warsztatu</li>
                <li>• Samochód zastępczy</li>
                <li>• Pomoc po wypadku</li>
                <li>• Wsparcie za granicą</li>
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
                  Inne ubezpieczenia do rozważenia
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie NNW</strong>{" "}
                    - ochrona kierowcy i pasażerów w razie wypadku
                  </div>
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie szyb</strong>{" "}
                    - tansze naprawy bez utraty zniżek
                  </div>
                  <div>
                    <strong className="text-text-primary">Ochrona zniżek</strong>{" "}
                    - zachowaj bonus po szkodzie
                  </div>
                  <div>
                    <strong className="text-text-primary">Zielona Karta</strong>{" "}
                    - rozszerzone OC poza UE
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
            Potrzebujesz ubezpieczenia samochodu?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami już dziś. Nasi doradcy pomogą Ci wybrać najlepszą
            ochronę dla Twojego pojazdu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48660726743" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto gap-2"
              >
                <Phone className="w-5 h-5" />
                Zadzwoń: 660 726 743
              </Button>
            </a>
            <a href="mailto:info@rsubezpieczenia.pl" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent w-full sm:w-auto gap-2"
              >
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
