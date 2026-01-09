import { Metadata } from "next";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "O nas - RS Ubezpieczenia | Nasza historia i misja",
  description: "Poznaj RS Ubezpieczenia - profesjonalną multiagencję z wieloletnim doświadczeniem. Poznaj naszą misję i wartości.",
};

export default function ONasPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/o-nas.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
              O <span className="text-accent">RS Ubezpieczenia</span>
            </h1>
            <p className="text-body-lg text-text-primary">
              Jesteśmy profesjonalną multiagencją ubezpieczeniową z wieloletnim doświadczeniem. 
              Naszym celem jest pomóc Ci znaleźć najlepsze ubezpieczenie w najlepszej cenie.
            </p>
          </div>
        </div>
      </section>

      {/* Misja i Wartości */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-heading-xl font-bold text-text-primary mb-12 text-center">
            Nasza misja i wartości
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="p-4 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Misja</h3>
              <p className="text-text-secondary">
                Zapewniamy dostęp do najlepszych ubezpieczeń w najlepszych cenach
              </p>
            </Card>

            <Card className="text-center">
              <div className="p-4 bg-accent-secondary/10 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Klient</h3>
              <p className="text-text-secondary">
                Klient zawsze na pierwszym miejscu - Twoje potrzeby są dla nas priorytetem
              </p>
            </Card>

            <Card className="text-center">
              <div className="p-4 bg-warning/10 rounded-lg w-fit mx-auto mb-4">
                <Award className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Jakość</h3>
              <p className="text-text-secondary">
                Współpracujemy tylko z renomowanymi towarzystwami ubezpieczeniowymi
              </p>
            </Card>

            <Card className="text-center">
              <div className="p-4 bg-success/10 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Rozwój</h3>
              <p className="text-text-secondary">
                Stale rozwijamy naszą ofertę i podnosimy jakość obsługi
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-text-primary mb-8 text-center">
              Nasza historia
            </h2>
            <div className="space-y-6 text-text-secondary">
              <p>
                RS Ubezpieczenia to dynamicznie rozwijająca się multiagencja ubezpieczeniowa 
                z siedzibą we Wrocławiu. Od początku naszej działalności stawiamy na 
                profesjonalizm, uczciwość i indywidualne podejście do każdego klienta.
              </p>
              <p>
                Współpracujemy z ponad 35 renomowanymi towarzystwami ubezpieczeniowymi, 
                co pozwala nam oferować naszym klientom najszerszy wybór produktów 
                ubezpieczeniowych w najlepszych cenach.
              </p>
              <p>
                Nasz zespół składa się z doświadczonych doradców, którzy pomogą Ci 
                wybrać optymalne ubezpieczenie dostosowane do Twoich indywidualnych potrzeb. 
                Dzięki nowoczesnej platformie online możesz porównać oferty i wykupić 
                ubezpieczenie nie wychodząc z domu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
