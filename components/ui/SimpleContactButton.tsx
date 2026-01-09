"use client";

import { Phone, Mail } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function SimpleContactButton() {
  return (
    <Card className="p-8 bg-surface/95 backdrop-blur-sm">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Otrzymaj indywidualną ofertę
        </h3>
        <p className="text-text-secondary mb-8">
          Skontaktuj się z nami, a przygotujemy dla Ciebie najlepszą ofertę dostosowaną do Twoich potrzeb
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+48660726743">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Zadzwoń: 660 726 743
            </Button>
          </a>
          <a href="/kontakt">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Mail className="w-5 h-5" />
              Formularz kontaktowy
            </Button>
          </a>
        </div>
        
        <p className="text-sm text-text-secondary mt-6">
          Odpowiadamy w ciągu 24 godzin • Darmowa konsultacja
        </p>
      </div>
    </Card>
  );
}
