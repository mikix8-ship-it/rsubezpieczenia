import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Building2, Users, TrendingDown, Star, Phone, Mail, Briefcase, FileText, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenia firmowe i biznesowe - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona Twojej firmy - OC działalności, mienie, flota, odpowiedzialność. Ubezpieczenia dla przedsiębiorców i firm. Kontakt 24h.",
};

export default function UbezpieczenieFirmowePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/firmowe.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia biznesowe</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenia <span className="text-accent">firmowe</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Zabezpiecz swoją firmę przed ryzykiem. Kompleksowe ubezpieczenia dla przedsiębiorców - OC działalności gospodarczej, mienie firmy, flota pojazdów i więcej.
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
                  <span>Pakiety firmowe</span>
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
              Dlaczego warto ubezpieczyć firmę z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Kompleksowe doradztwo biznesowe i konkurencyjne ceny
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla przedsiębiorców
              </h3>
              <p className="text-text-secondary">
                Prowadzimy firmę? Zabezpiecz swoją działalność przed nieoczekiwanymi stratami. Kompleksowa ochrona dopasowana do Twojej branży.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla małych firm
              </h3>
              <p className="text-text-secondary">
                Niewielka firma to też duże ryzyko. Doradzimy optymalne pakiety ubezpieczeń, które nie obciążą budżetu, ale zapewnią spokój.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla korporacji
              </h3>
              <p className="text-text-secondary">
                Duże przedsiębiorstwa wymagają zaawansowanych rozwiązań. Przygotujemy pakiet obejmujący wszystkie aspekty działalności Twojej firmy.
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
                Dzięki współpracy z wieloma towarzystwami znajdziemy dla Ciebie najkorzystniejsze warunki przy zachowaniu pełnego zakresu ochrony.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla firm z flotą
              </h3>
              <p className="text-text-secondary">
                Posiadasz kilka lub kilkadziesiąt pojazdów służbowych? Zorganizujemy kompleksowe ubezpieczenie floty w atrakcyjnej cenie.
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
                Każda branża ma swoje specyficzne ryzyka. Doradzimy ubezpieczenia szyte na miarę - od IT, przez produkcję, po usługi medyczne.
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
              Podstawowe dane o Twojej firmie wystarczą do przygotowania oferty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane firmy</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• NIP i REGON</li>
                <li>• Forma prawna (JDG, sp. z o.o., SA)</li>
                <li>• Branża i PKD</li>
                <li>• Adres działalności</li>
                <li>• Rok rozpoczęcia działalności</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Zakres działalności</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Profil działalności</li>
                <li>• Liczba pracowników</li>
                <li>• Roczny obrót</li>
                <li>• Wartość majątku firmy</li>
                <li>• Powierzchnia lokali</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Potrzeby ubezpieczeniowe</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• OC działalności gospodarczej</li>
                <li>• Mienie i wyposażenie</li>
                <li>• Flota pojazdów</li>
                <li>• Ubezpieczenia pracownicze</li>
                <li>• Specyficzne ryzyka branżowe</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie jesteś pewien jakie ubezpieczenia są potrzebne? Pomożemy wszystko doprecyzować!
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
              Orientacyjne ceny ubezpieczeń firmowych - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Freelancer IT", employees: "1 osoba", coverage: "OC zawodowe", sum: "100 000 EUR", price: "280 zł/rok" },
              { type: "Sklep internetowy", employees: "5 osób", coverage: "OC + mienie", sum: "200 000 zł", price: "850 zł/rok" },
              { type: "Biuro rachunkowe", employees: "12 osób", coverage: "OC + cyber", sum: "500 000 EUR", price: "1 800 zł/rok" },
              { type: "Warsztat samochodowy", employees: "8 osób", coverage: "OC + mienie + flota", sum: "300 000 zł", price: "2 400 zł/rok" },
              { type: "Firma budowlana", employees: "25 osób", coverage: "Pakiet kompleksowy", sum: "1 000 000 EUR", price: "5 500 zł/rok" },
              { type: "Restauracja", employees: "15 osób", coverage: "OC + mienie + produkt", sum: "400 000 zł", price: "3 200 zł/rok" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.type}</div>
                    <div className="text-sm text-text-secondary">{example.employees}</div>
                    <div className="text-sm text-text-secondary">{example.coverage}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Suma: {example.sum}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od branży, wielkości firmy, zakresu ochrony i historii szkodowej.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz poznać cenę dla swojej firmy?
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
              Rodzaje ubezpieczeń firmowych
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz ochronę dopasowaną do potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">PODSTAWOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">OC działalności</h3>
              <p className="text-text-secondary mb-6">
                Ubezpieczenie odpowiedzialności cywilnej z tytułu prowadzenia działalności gospodarczej. Ochrona przed roszczeniami klientów i kontrahentów.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Szkody w mieniu</li>
                <li>• Obrażenia ciała</li>
                <li>• Błędy w świadczeniu usług</li>
                <li>• Szkody produktowe</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">POLECANE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Mienie firmy</h3>
              <p className="text-text-secondary mb-6">
                Ochrona majątku firmy - budynków, lokali, wyposażenia, towaru, sprzętu przed kradzieżą, pożarem, zalaniem.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Budynki i lokale</li>
                <li>• Wyposażenie biura/sklepu</li>
                <li>• Towar i zapasy</li>
                <li>• Sprzęt i maszyny</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DODATKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Flota pojazdów</h3>
              <p className="text-text-secondary mb-6">
                Kompleksowe ubezpieczenie wszystkich pojazdów firmowych - OC, AC, Assistance w jednej polisie.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Samochody osobowe i dostawcze</li>
                <li>• Pojazdy ciężarowe</li>
                <li>• Maszyny budowlane</li>
                <li>• Zarządzanie całą flotą</li>
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
                  Dodatkowe ubezpieczenia do rozważenia
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie cyber</strong> - ochrona przed atakami hakerskimi i utratą danych
                  </div>
                  <div>
                    <strong className="text-text-primary">Grupowe dla pracowników</strong> - na życie, zdrowie, emerytalne
                  </div>
                  <div>
                    <strong className="text-text-primary">Ochrona prawna</strong> - koszty sporów sądowych
                  </div>
                  <div>
                    <strong className="text-text-primary">Utrata zysków</strong> - rekompensata za przestój
                  </div>
                  <div>
                    <strong className="text-text-primary">Ubezpieczenie D&O</strong> - odpowiedzialność zarządu
                  </div>
                  <div>
                    <strong className="text-text-primary">Kredyt kupiecki</strong> - ochrona przed niewypłacalnością kontrahentów
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
            Zabezpiecz swoją firmę kompleksowo
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj ofertę ubezpieczeń firmowych dopasowaną do Twojej branży. Pomożemy wybrać optymalną ochronę.
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
              <div className="text-4xl font-bold mb-2">Wszystkie branże</div>
              <div className="opacity-80">Doradztwo</div>
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
