import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SimpleContactButton from "@/components/ui/SimpleContactButton";
import { Check, Shield, Wheat, Users, TrendingDown, Star, Phone, Mail, Home, Tractor, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Ubezpieczenia rolnicze i gospodarstw - RS Ubezpieczenia Wrocław",
  description: "Kompleksowa ochrona gospodarstwa rolnego - budynki, plony, zwierzęta, sprzęt. Ubezpieczenia dla rolników i producentów rolnych. Kontakt 24h.",
};

export default function UbezpieczenieRolniczePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/rolnicze.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">Ubezpieczenia rolne</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
                Ubezpieczenia <span className="text-accent">rolnicze</span>
              </h1>
              <p className="text-body-lg text-text-primary mb-8">
                Zabezpiecz swoje gospodarstwo przed ryzykiem. Kompleksowe ubezpieczenia dla rolników - budynki gospodarcze, plony, zwierzęta hodowlane, sprzęt rolniczy.
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
                  <span>Dotacje unijne</span>
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
              Dlaczego warto ubezpieczyć gospodarstwo z nami?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Rozumiemy specyfikę pracy w rolnictwie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Wheat className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla producentów roślinnych
              </h3>
              <p className="text-text-secondary">
                Ubezpiecz swoje plony przed gradobiiciem, przymrozkami, suszą i innymi żywiołami. Ochrona upraw polowych, warzywniczych i sadów.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla hodowców
              </h3>
              <p className="text-text-secondary">
                Kompleksowa ochrona zwierząt hodowlanych - bydła, trzody chlewnej, drobiu. Ubezpieczenie od padnięcia, chorób i utraty wartości.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla właścicieli zabudowań
              </h3>
              <p className="text-text-secondary">
                Ochrona budynków gospodarczych, stodół, obór i magazynów przed pożarem, zalaniem i innymi zagrożeniami.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Tractor className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla posiadaczy maszyn
              </h3>
              <p className="text-text-secondary">
                Ubezpieczenie ciągników, kombajnów i innego sprzętu rolniczego. Ochrona przed kradzieżą, uszkodzeniem i utratą wartości.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla korzystających z dotacji
              </h3>
              <p className="text-text-secondary">
                Pomożemy Ci skorzystać z dopłat unijnych do składek. Ubezpieczenia upraw z dotacją ARiMR mogą być tańsze nawet o 65%.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Dla spokojnych
              </h3>
              <p className="text-text-secondary">
                Rolnictwo to ryzykowna działalność. Ubezpieczenie daje Ci pewność, że w razie nieszczęścia nie stracisz całorocznej pracy.
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
              Podstawowe dane o gospodarstwie wystarczą do przygotowania oferty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">1. Dane gospodarstwa</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Powierzchnia użytków rolnych (ha)</li>
                <li>• Lokalizacja (gmina)</li>
                <li>• Rodzaj produkcji</li>
                <li>• Liczba budynków</li>
                <li>• Dane właściciela</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">2. Uprawy i zwierzęta</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Rodzaje upraw (zboża, warzywa, owoce)</li>
                <li>• Powierzchnia poszczególnych upraw</li>
                <li>• Liczba i rodzaj zwierząt</li>
                <li>• Wartość stada</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-accent font-bold text-lg mb-3">3. Majątek do ubezpieczenia</div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Wartość budynków</li>
                <li>• Sprzęt i maszyny rolnicze</li>
                <li>• Zapasy (zbiory, pasze)</li>
                <li>• Instalacje (silosy, chłodnie)</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nie masz wszystkich danych? Pomożemy je oszacować i uzupełnić!
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
              Orientacyjne ceny ubezpieczeń rolniczych - Twoja wycena może się różnić
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Gospodarstwo 20 ha", coverage: "Budynki + plony", crops: "Zboża", dotation: "Z dotacją", price: "1 200 zł/rok" },
              { type: "Gospodarstwo 50 ha", coverage: "Pakiet kompleksowy", crops: "Zboża + warzywa", dotation: "Z dotacją", price: "3 500 zł/rok" },
              { type: "Hodowla bydła", coverage: "30 sztuk", crops: "Zwierzęta + budynki", dotation: "Bez dotacji", price: "2 800 zł/rok" },
              { type: "Sad 10 ha", coverage: "Uprawy + grad", crops: "Jabłonie", dotation: "Z dotacją", price: "1 800 zł/rok" },
              { type: "Gospodarstwo 100 ha", coverage: "All-risk", crops: "Zboża + rzepak", dotation: "Z dotacją", price: "7 500 zł/rok" },
              { type: "Ferma drobiu", coverage: "15 000 sztuk", crops: "Zwierzęta + budynki", dotation: "Bez dotacji", price: "4 200 zł/rok" },
            ].map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{example.type}</div>
                    <div className="text-sm text-text-secondary">{example.crops}</div>
                    <div className="text-sm text-text-secondary">{example.coverage}</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{example.price}</div>
                </div>
                <div className="text-sm text-text-secondary mb-2">{example.dotation}</div>
                <div className="text-xs text-text-secondary mt-4">
                  *Przykładowa cena z rynku. Cena indywidualna zależy od lokalizacji, rodzaju upraw/zwierząt, zakresu ochrony i możliwości dotacji.
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6 font-semibold">
              Chcesz ubezpieczyć swoje gospodarstwo?
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
              Rodzaje ubezpieczeń rolniczych
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Wybierz ochronę dopasowaną do Twojego gospodarstwa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">NAJPOPULARNIEJSZE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ubezpieczenie upraw</h3>
              <p className="text-text-secondary mb-6">
                Ochrona plonów przed skutkami niekorzystnych zjawisk atmosferycznych - grad, susza, przymrozki, powódź.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Zboża i rzepak</li>
                <li>• Warzywa gruntowe</li>
                <li>• Owoce z sadów</li>
                <li>• Dotacje ARiMR do 65%</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">DLA HODOWCÓW</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ubezpieczenie zwierząt</h3>
              <p className="text-text-secondary mb-6">
                Ochrona zwierząt hodowlanych przed padnięciem, chorobami zakaźnymi i utratą wartości użytkowej.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Bydło mleczne i mięsne</li>
                <li>• Trzoda chlewna</li>
                <li>• Drób (kury, indyki, kaczki)</li>
                <li>• Konie hodowlane</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-accent text-sm font-semibold mb-2">KOMPLEKSOWE</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Mienie rolnicze</h3>
              <p className="text-text-secondary mb-6">
                Ochrona budynków gospodarczych, sprzętu rolniczego i zapasów przed pożarem, kradzieżą i żywiołami.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary mb-6">
                <li>• Budynki gospodarcze</li>
                <li>• Ciągniki i maszyny</li>
                <li>• Zapasy (zbiory, pasze)</li>
                <li>• Instalacje rolnicze</li>
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
                    <strong className="text-text-primary">OC rolnika</strong> - odpowiedzialność cywilna z tytułu posiadania gospodarstwa
                  </div>
                  <div>
                    <strong className="text-text-primary">Utrata dochodów</strong> - rekompensata przy niemożności zbiorów
                  </div>
                  <div>
                    <strong className="text-text-primary">Szkody łowieckie</strong> - ochrona przed szkodami wyrządzonymi przez zwierzynę
                  </div>
                  <div>
                    <strong className="text-text-primary">Pomoc doraźna</strong> - szybka wypłata po oszacowaniu szkód
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
            Zabezpiecz swoje gospodarstwo
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Skontaktuj się z nami i otrzymaj ofertę ubezpieczeń rolniczych. Pomożemy wybrać ochronę i skorzystać z dotacji unijnych.
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
              <div className="text-4xl font-bold mb-2">Do 65%</div>
              <div className="opacity-80">Dotacja ARiMR</div>
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
