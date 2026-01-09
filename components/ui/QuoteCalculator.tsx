"use client";

import { useState } from "react";
import { Calculator, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";

// ⚠️ ZMIEŃ TE WARTOŚCI NA SWOJE Z EMAILJS.COM
const EMAILJS_SERVICE_ID = "service_507y46c";  // np. "service_abc123"
const EMAILJS_TEMPLATE_ID_QUOTE = "template_vqbrb0s"; // np. "template_quote_xyz"
const EMAILJS_PUBLIC_KEY = "5uCFeA6ryRBEinkbP";   // np. "user_ABC123XYZ"

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    vin: "",
    firstRegistrationDate: "",
    email: "",
    phone: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    registrationNumber: "",
    vin: "",
    firstRegistrationDate: "",
    email: "",
    phone: "",
    consent: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Walidacja VIN w czasie rzeczywistym
  const validateVINFormat = (vin: string): string => {
    const cleanVIN = vin.trim().toUpperCase();
    
    if (cleanVIN.length === 0) return "";
    if (cleanVIN.length < 17) return "VIN musi mieć 17 znaków";
    if (cleanVIN.length > 17) return "VIN jest za długi (max 17 znaków)";
    
    // Sprawdzenie niedozwolonych znaków
    const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
    if (!validChars.test(cleanVIN)) {
      return "VIN zawiera niedozwolone znaki (bez I, O, Q)";
    }
    
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      registrationNumber: "",
      vin: "",
      firstRegistrationDate: "",
      email: "",
      phone: "",
      consent: "",
    };

    if (!formData.registrationNumber) {
      newErrors.registrationNumber = "Podaj numer rejestracyjny";
    }

    if (!formData.vin) {
      newErrors.vin = "Podaj numer VIN";
    } else {
      const vinError = validateVINFormat(formData.vin);
      if (vinError) {
        newErrors.vin = vinError;
      }
    }

    if (!formData.firstRegistrationDate) {
      newErrors.firstRegistrationDate = "Podaj datę pierwszej rejestracji";
    }

    if (!formData.email) {
      newErrors.email = "Podaj adres email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Podaj prawidłowy adres email";
    }

    if (!formData.phone) {
      newErrors.phone = "Podaj numer telefonu";
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = "Podaj prawidłowy numer telefonu";
    }

    if (!formData.consent) {
      newErrors.consent = "Musisz wyrazić zgodę na kontakt";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Przygotowanie danych do EmailJS
      const templateParams = {
        registrationNumber: formData.registrationNumber.toUpperCase(),
        vin: formData.vin.toUpperCase(),
        firstRegistrationDate: formData.firstRegistrationDate,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toLocaleString('pl-PL'),
      };

      // Wysłanie przez EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_QUOTE,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Sukces
      setSubmitted(true);
      
      // Reset formularza po 5 sekundach
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          registrationNumber: "",
          vin: "",
          firstRegistrationDate: "",
          email: "",
          phone: "",
          consent: false,
        });
      }, 5000);
    } catch (err) {
      console.error('Błąd EmailJS:', err);
      setError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub zadzwoń: +48 660 726 743');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card glass className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="p-4 bg-success/10 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          <h3 className="text-2xl font-semibold text-text-primary mb-2">
            Dziękujemy za zapytanie!
          </h3>
          <p className="text-text-secondary mb-4">
            Zapisaliśmy Twoje zapytanie i wysłaliśmy potwierdzenie na podany email.
          </p>
          <div className="bg-accent/10 rounded-lg p-4 max-w-md">
            <p className="text-sm text-text-secondary">
              📞 Nasz doradca skontaktuje się z Tobą w ciągu <strong>24 godzin</strong> z indywidualną ofertą.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card glass className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-accent/10 rounded-lg">
          <Calculator className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            Otrzymaj indywidualną ofertę
          </h3>
          <p className="text-sm text-text-secondary">
            Podaj dane pojazdu - przygotujemy dla Ciebie najlepszą ofertę
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-error/10 border border-error/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Numer rejestracyjny"
            placeholder="np. DW12345"
            value={formData.registrationNumber}
            onChange={(e) =>
              setFormData({ ...formData, registrationNumber: e.target.value.toUpperCase() })
            }
            error={errors.registrationNumber}
            required
          />

          <Input
            label="Numer VIN"
            placeholder="17-znakowy numer VIN"
            maxLength={17}
            value={formData.vin}
            onChange={(e) => {
              const newVin = e.target.value.toUpperCase();
              setFormData({ ...formData, vin: newVin });
              // Walidacja w czasie rzeczywistym
              if (newVin.length > 0) {
                const vinError = validateVINFormat(newVin);
                setErrors({ ...errors, vin: vinError });
              }
            }}
            error={errors.vin}
            required
          />
        </div>

        <Input
          label="Data pierwszej rejestracji"
          type="date"
          value={formData.firstRegistrationDate}
          onChange={(e) =>
            setFormData({ ...formData, firstRegistrationDate: e.target.value })
          }
          error={errors.firstRegistrationDate}
          required
        />

        <div className="border-t border-border pt-4 mt-6">
          <p className="text-sm font-medium text-text-primary mb-4">
            Dane kontaktowe
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Adres email"
              type="email"
              placeholder="twoj@email.pl"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <Input
              label="Numer telefonu"
              type="tel"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              error={errors.phone}
              required
            />
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="mt-1 w-4 h-4 text-accent bg-surface border-border rounded focus:ring-accent focus:ring-2"
          />
          <label htmlFor="consent" className="text-sm text-text-secondary">
            Wyrażam zgodę na kontakt w celu przygotowania oferty ubezpieczeniowej.{" "}
            <a href="/polityka-prywatnosci" className="text-accent hover:underline">
              Polityka prywatności
            </a>
          </label>
        </div>
        {errors.consent && (
          <p className="text-sm text-error -mt-2">{errors.consent}</p>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Wysyłanie...' : 'Wyślij zapytanie ofertowe'}
        </Button>

        <p className="text-xs text-text-secondary text-center">
          Zapytanie jest całkowicie darmowe i niezobowiązujące. Otrzymasz email i SMS z potwierdzeniem.
        </p>
      </form>
    </Card>
  );
}
