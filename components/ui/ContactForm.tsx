"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Button from "./Button";

// ⚠️ ZMIEŃ TE WARTOŚCI NA SWOJE Z EMAILJS.COM
const EMAILJS_SERVICE_ID = "service_507y46c";  // np. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_5ql7cae"; // np. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "5uCFeA6ryRBEinkbP";   // np. "user_ABC123XYZ"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjectOptions = [
    { value: "general", label: "Pytanie ogólne" },
    { value: "quote", label: "Wycena ubezpieczenia" },
    { value: "claim", label: "Zgłoszenie szkody" },
    { value: "other", label: "Inne" },
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9]{9,}$/.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Walidacja
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Podaj imię i nazwisko";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Podaj adres email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Podaj prawidłowy adres email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Podaj numer telefonu";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Podaj prawidłowy numer telefonu (min. 9 cyfr)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Wpisz wiadomość";
    }

    if (!formData.consent) {
      newErrors.consent = "Musisz wyrazić zgodę na przetwarzanie danych";
    }

    setErrors(newErrors);

    // Jeśli są błędy, zatrzymaj
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // Prawdziwe wysyłanie przez EmailJS
    setIsSubmitting(true);
    
    try {
      // Mapowanie subject na polskie nazwy
      const subjectMap: { [key: string]: string } = {
        general: "Pytanie ogólne",
        quote: "Wycena ubezpieczenia",
        claim: "Zgłoszenie szkody",
        other: "Inne"
      };

      // Przygotowanie danych do wysłania
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: subjectMap[formData.subject] || formData.subject,
        message: formData.message,
      };

      // Wysyłanie emaila przez EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Sukces!
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset formularza
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
        consent: false,
      });

      // Ukryj komunikat sukcesu po 5 sekundach
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Błąd wysyłania emaila:", error);
      setIsSubmitting(false);
      
      // Pokaż błąd użytkownikowi
      alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub zadzwoń: +48 660 726 743");
    }
  };

  return (
    <div>
      {isSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg text-success">
          <p className="font-medium">Dziękujemy za wiadomość!</p>
          <p className="text-sm mt-1">Skontaktujemy się z Tobą wkrótce.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Imię i nazwisko *"
            placeholder="Jan Kowalski"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
          />

          <Input
            label="Email *"
            type="email"
            placeholder="jan.kowalski@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Telefon *"
            type="tel"
            placeholder="123 456 789"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
          />

          <Select
            label="Temat"
            options={subjectOptions}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <Textarea
          label="Wiadomość *"
          placeholder="Opisz czym możemy Ci pomóc..."
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          error={errors.message}
        />

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-2 focus:ring-accent"
            />
            <span className="text-sm text-text-secondary">
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez RS Ubezpieczenia 
              w celu udzielenia odpowiedzi na zapytanie. *
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-error">{errors.consent}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? (
            "Wysyłanie..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Wyślij wiadomość
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
