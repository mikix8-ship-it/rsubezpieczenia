import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Globe, Users, TrendingDown, Star, Phone, Mail, Plane, Heart, Backpack } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie turystyczne - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona w podróży - koszty leczenia, bagaż, odpowiedzialność cywilna. Ubezpieczenia na wyjazdy w Europie i na świecie. Kontakt 24h.",
};

export default function UbezpieczenieTurystycznePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/turystyczne.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia podróżne</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">turystyczne</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Bezpieczne podróże po całym świecie. Oferujemy kompleksową ochronę na wyjazdy turystyczne, służbowe i sportowe - w Europie i poza nią.
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
                  <span>Cały świat</span>
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
              Dlaczego warto ubezpieczyć podróż z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Profesjonalne doradztwo i pełna ochrona w każdym zakątku świata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla podróżujących
              </h3>
              <p className="text-text-secondary">
                Bez względu na cel podróży - wakacje, praca, sport - zapewnimy Ci kompleksową ochronę dostosowaną do Twoich planów.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla rodzin
              </h3>
              <p className="text-text-secondary">
                Pakiety rodzinne z korzystną ceną. Ochrona dla dzieci i dorosłych w jednej polisie - wygodnie i oszczędnie.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla sportowców
              </h3>
              <p className="text-text-secondary">
                Specjalne pakiety dla aktywnych - narty, nurkowanie, wspinaczka. Pełna ochrona podczas uprawiania sportu.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla pracujących za granicą
              </h3>
              <p className="text-text-secondary">
                Długoterminowe polisy dla osób pracujących poza Polską. Ochrona od pierwszego do ostatniego dnia pobytu.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla seniorów
              </h3>
              <p className="text-text-secondary">
                Specjalne pakiety dla osób starszych z rozszerzonym zakresem ochrony zdrowotnej i pomocą medyczną 24/7.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla często podróżujących
              </h3>
              <p className="text-text-secondary">
                Polisy roczne dla osób często wyjeżdżających. Jedna polisa na cały rok - wygoda i oszczędność.
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
              Kilka prostych informacji wystarczy do przygotowania oferty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane podróży</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Destynacja (kraj/region)</li>
                <li>• Daty wyjazdu i powrotu</li>
                <li>• Cel podróży (turystyka, praca, sport)</li>
                <li>• Rodzaj aktywności</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Dane osobowe</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Liczba osób ubezpieczonych</li>
                <li>• Wiek każdej osoby</li>
                <li>• Obywatelstwo</li>
                <li>• Kontakt (email, telefon)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Zakres ochrony</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Suma ubezpieczenia (np. 50 000 EUR)</li>
                <li>• Koszty leczenia</li>
                <li>• Bagaż i odpowiedzialność cywilna</li>
                <li>• Rozszerzenia (sport, praca fizyczna)</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie znasz wszystkich szczegółów? Pomożemy Ci dobrać odpowiedni zakres!
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
              Przykładowe ceny ubezpieczeń turystycznych
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny dla różnych destynacji - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { destination: "Europa", duration: "7 dni", people: "1 osoba", coverage: "50 000 EUR", price: "35 zł" },
              { destination: "Cały świat", duration: "14 dni", people: "2 osoby", coverage: "100 000 EUR", price: "180 zł" },
              { destination: "Europa + sport", duration: "7 dni", people: "1 osoba", coverage: "50 000 EUR", price: "65 zł" },
              { destination: "USA/Kanada", duration: "21 dni", people: "Rodzina 2+2", coverage: "150 000 USD", price: "520 zł" },
              { destination: "Europa", duration: "Roczna", people: "1 osoba", coverage: "50 000 EUR", price: "280 zł" },
              { destination: "Azja", duration: "30 dni", people: "2 osoby", coverage: "100 000 EUR", price: "340 zł" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.destination}</div>
                    <div className="text-sm text-text-secondary">{example.people}</div>
                    <div className="text-sm text-text-secondary">{example.duration}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Suma: {example.coverage}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od wieku, kraju, zakresu ochrony i długości pobytu.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Potrzebujesz wyceny dla swojej podróży?
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
              Co obejmuje ubezpieczenie turystyczne?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Poznaj zakresy ochrony i wybierz odpowiedni pakiet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">PODSTAWOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Koszty leczenia</h3>
              <p className="text-text-secondary mb-6">
                Najważniejszy element ubezpieczenia - pokrycie kosztów leczenia i hospitalizacji za granicą.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Pomoc medyczna 24/7</li>
                <li>• Hospitalizacja i leczenie</li>
                <li>• Transport medyczny</li>
                <li>• Leki i badania</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DODATKOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Bagaż i OC</h3>
              <p className="text-text-secondary mb-6">
                Ochrona Twojego majątku i odpowiedzialności cywilnej podczas podróży.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Kradzież i zniszczenie bagażu</li>
                <li>• Opóźnienie bagażu</li>
                <li>• Odpowiedzialność cywilna</li>
                <li>• Dokumenty i pieniądze</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">ROZSZERZONE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Sport i aktywności</h3>
              <p className="text-text-secondary mb-6">
                Specjalna ochrona dla uprawiających sporty i aktywności wysokiego ryzyka.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Sporty zimowe (narty, snowboard)</li>
                <li>• Nurkowanie</li>
                <li>• Wspinaczka górska</li>
                <li>• Sporty wodne</li>
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
                  Dodatkowe opcje do rozważenia
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Rezygnacja z podróży</strong> - zwrot kosztów przy rezygnacji
                  </div>
                  <div>
                    <strong className="text-text-primary">Następstwa nieszczęśliwych wypadków</strong> - trwały uszczerbek
                  </div>
                  <div>
                    <strong className="text-text-primary">Pomoc prawna</strong> - wsparcie prawnika za granicą
                  </div>
                  <div>
                    <strong className="text-text-primary">Choroby przewlekłe</strong> - rozszerzenie dla seniorów
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
            Planujesz wyjazd?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami przed podróżą. Pomożemy wybrać najlepsze ubezpieczenie dla Twoich planów.
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
              <div className="text-4xl font-bold mb-2">Cały świat</div>
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
