import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kontakt - RS Ubezpieczenia",
  description: "Skontaktuj się z RS Ubezpieczenia. Telefon, email, formularz kontaktowy.",
};

export default function KontaktPage() {
  return (
    <div className="pt-20">
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/kontakt.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
            Skontaktuj się z nami
          </h1>
          <p className="text-body-lg text-text-primary max-w-2xl mx-auto">
            Masz pytania? Chętnie pomożemy! Skontaktuj się z nami w dogodny dla Ciebie sposób.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-heading-lg font-bold text-text-primary mb-8">
                Dane kontaktowe
              </h2>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Telefon</h3>
                      <a href="tel:+48660726743" className="text-accent hover:underline">
                        +48 660 726 743
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                      <a href="mailto:info@rsubezpieczenia.pl" className="text-accent hover:underline break-all">
                        info@rsubezpieczenia.pl
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Adres</h3>
                      <p className="text-text-secondary">
                        ul. Szybowcowa 25<br />
                        54-130 Wrocław
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Godziny otwarcia</h3>
                      <p className="text-text-secondary">
                        Poniedziałek - Piątek: 9:00 - 17:00
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-heading-lg font-bold text-text-primary mb-8">
                Formularz kontaktowy
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
