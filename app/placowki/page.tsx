import { Metadata } from "next";
import LocationFinder from "@/components/ui/LocationFinder";

export const metadata: Metadata = {
  title: "Placówki - RS Ubezpieczenia",
  description: "Znajdź najbliższą placówkę RS Ubezpieczenia. Odwiedź nas osobiście.",
};

export default function PlacowkiPage() {
  return (
    <div className="pt-20">
      <section className="section-padding relative overflow-hidden">
        {/* Fixed Background Image (parallax effect) */}
        {/* Mobile: contain (całe zdjęcie) | Desktop: cover (wypełnia) */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/placowki.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />

        {/* Content */}
        <div className="container-custom text-center relative z-10 min-h-[320px] sm:min-h-[420px] flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
            Nasze placówki
          </h1>
          <p className="text-body-lg text-text-primary max-w-2xl mx-auto">
            Znajdź najbliższą placówkę RS Ubezpieczenia i odwiedź nas osobiście
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <LocationFinder />
        </div>
      </section>
    </div>
  );
}
