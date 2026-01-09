import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, GraduationCap, Users, TrendingDown, Star, Phone, Mail, Heart, Baby, Tent } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenie NNW szkolne dla dzieci - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona dziecka w szkole, przedszkolu i w czasie wolnym. Ubezpieczenie NNW szkolne, sportowe, na wyjazdy. Kontakt 24h.",
};

export default function UbezpieczenieNNWSzkolnePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/nnw-szkolne.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia dla dzieci</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenie <span className="text-accent">NNW szkolne</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Zabezpiecz swoje dziecko w szkole, przedszkolu i podczas zajęć dodatkowych. Kompleksowa ochrona NNW dla dzieci - 24 godziny na dobę, 7 dni w tygodniu.
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
                  <span>Ochrona 24/7</span>
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
              Dlaczego warto ubezpieczyć dziecko z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Bezpieczeństwo Twojego dziecka jest dla nas najważniejsze
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla odpowiedzialnych rodziców
              </h3>
              <p className="text-text-secondary">
                Zapewnij dziecku finansowe wsparcie w razie wypadku. Ochrona w szkole, w domu i podczas zajęć pozalekcyjnych.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla przedszkolaków
              </h3>
              <p className="text-text-secondary">
                Specjalne pakiety dla najmłodszych - ochrona w przedszkolu, na placu zabaw i podczas wycieczek przedszkolnych.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla uczniów
              </h3>
              <p className="text-text-secondary">
                Pełna ochrona uczniów w szkole, na wycieczkach szkolnych i w drodze do/ze szkoły. Pakiety dopasowane do wieku.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla młodych sportowców
              </h3>
              <p className="text-text-secondary">
                Rozszerzona ochrona dla dzieci uprawiających sport - treningi, zawody, obozy sportowe. Wsparcie w leczeniu i rehabilitacji.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Tent className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Na wyjazdy i obozy
              </h3>
              <p className="text-text-secondary">
                Specjalne pakiety na kolonie, obozy i wyjazdy zagraniczne. Ochrona przez cały czas pobytu poza domem.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla spokoju rodziców
              </h3>
              <p className="text-text-secondary">
                Ubezpieczenie dziecka daje Ci pewność, że w razie wypadku nie będziesz martwić się o koszty leczenia i rehabilitacji.
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
              <div className="text-accent font-bold text-lg mb-3">1. Dane dziecka</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Data urodzenia</li>
                <li>• Nazwa przedszkola/szkoły</li>
                <li>• Klasa (jeśli dotyczy)</li>
                <li>• Miejsce zamieszkania</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Zakres ochrony</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Suma ubezpieczenia (np. 10 000 zł)</li>
                <li>• Okres ochrony (rok szkolny / roczna)</li>
                <li>• Ochrona 24h czy tylko w szkole</li>
                <li>• Zajęcia sportowe</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Dodatkowe informacje</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Planowane wyjazdy/obozy</li>
                <li>• Uprawiany sport</li>
                <li>• Rozszerzenia (stomatologia, okulary)</li>
                <li>• Dane kontaktowe rodzica</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie wiesz jaki zakres wybrać? Pomożemy dobrać odpowiednią ochronę!
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
              Przykładowe ceny ubezpieczeń NNW
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Orientacyjne ceny dla różnych pakietów - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { age: "Przedszkolak", coverage: "Tylko w przedszkolu", sum: "10 000 zł", period: "Rok szkolny", price: "35 zł" },
              { age: "Uczeń kl. 1-3", coverage: "24h na dobę", sum: "15 000 zł", period: "Rok szkolny", price: "55 zł" },
              { age: "Uczeń kl. 4-8", coverage: "24h + sport", sum: "20 000 zł", period: "Rok szkolny", price: "85 zł" },
              { age: "Licealista", coverage: "24h na dobę", sum: "25 000 zł", period: "Rok szkolny", price: "75 zł" },
              { age: "Przedszkolak", coverage: "24h + wyjazdy", sum: "15 000 zł", period: "Cały rok", price: "95 zł" },
              { age: "Uczeń kl. 1-8", coverage: "Sport + obozy", sum: "30 000 zł", period: "Cały rok", price: "140 zł" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.age}</div>
                    <div className="text-sm text-text-secondary">{example.coverage}</div>
                    <div className="text-sm text-text-secondary">Suma: {example.sum}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">Okres: {example.period}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od wieku dziecka, zakresu ochrony i wybranego pakietu.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz ubezpieczyć swoje dziecko?
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
              Co obejmuje ubezpieczenie NNW dla dzieci?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Poznaj zakresy ochrony i wybierz odpowiedni pakiet dla swojego dziecka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">PODSTAWOWY</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">NNW w szkole</h3>
              <p className="text-text-secondary mb-6">
                Ochrona dziecka podczas pobytu w szkole lub przedszkolu oraz w drodze do/ze szkoły.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Wypadki w szkole/przedszkolu</li>
                <li>• Wycieczki szkolne</li>
                <li>• Droga do i ze szkoły</li>
                <li>• Zajęcia WF i pozalekcyjne</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">ROZSZERZONY</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">NNW 24h</h3>
              <p className="text-text-secondary mb-6">
                Pełna ochrona dziecka przez całą dobę - w szkole, w domu i podczas zabaw.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Ochrona 24h przez 7 dni w tygodniu</li>
                <li>• W szkole i poza nią</li>
                <li>• Weekendy i wakacje</li>
                <li>• Zabawa i zajęcia dodatkowe</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">SPORTOWY</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">NNW + Sport</h3>
              <p className="text-text-secondary mb-6">
                Specjalna ochrona dla dzieci aktywnych fizycznie i uprawiających sport.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Treningi i zawody sportowe</li>
                <li>• Obozy i zgrupowania</li>
                <li>• Zajęcia pozaszkolne</li>
                <li>• Sporty wysokiego ryzyka</li>
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
                  Co wypłaca ubezpieczenie NNW?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Trwały uszczerbek na zdrowiu</strong> - wypłata proporcjonalna do stopnia uszczerbku
                  </div>
                  <div>
                    <strong className="text-text-primary">Leczenie i rehabilitacja</strong> - zwrot kosztów wizyt, zabiegów, leków
                  </div>
                  <div>
                    <strong className="text-text-primary">Pobyt w szpitalu</strong> - dzienne świadczenie za każdy dzień hospitalizacji
                  </div>
                  <div>
                    <strong className="text-text-primary">Śmierć w wyniku wypadku</strong> - jednorazowa wypłata dla rodziny (100% sumy)
                  </div>
                  <div>
                    <strong className="text-text-primary">Złamania i oparzenia</strong> - dodatkowe świadczenia przy złamaniach kości
                  </div>
                  <div>
                    <strong className="text-text-primary">Stomatologia</strong> - zwrot kosztów leczenia zębów po wypadku
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
            Zadbaj o bezpieczeństwo swojego dziecka
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i wybierz najlepszą ochronę dla Twojego dziecka. Pomożemy dobrać odpowiedni pakiet NNW.
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
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-80">Ochrona dziecka</div>
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
