import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Współpraca - RS Ubezpieczenia",
  description: "Dołącz do zespołu RS Ubezpieczenia. Sprawdź nasze oferty dla agentów i partnerów biznesowych.",
};

export default function WspolpracaPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
            Współpraca z RS Ubezpieczenia
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Dołącz do naszego zespołu i rozwijaj swoją karierę w branży ubezpieczeniowej
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Dla agentów</h3>
              <p className="text-text-secondary mb-6">
                Oferujemy atrakcyjny system prowizyjny, dostęp do 35+ towarzystw i wsparcie marketingowe.
              </p>
              <Button>Dowiedz się więcej</Button>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Kariera</h3>
              <p className="text-text-secondary mb-6">
                Szukasz pracy w dynamicznej firmie? Sprawdź nasze aktualne oferty pracy.
              </p>
              <Button>Zobacz oferty</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
