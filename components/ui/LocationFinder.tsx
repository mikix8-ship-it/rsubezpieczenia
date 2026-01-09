"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Input from "./Input";
import Select from "./Select";
import Card from "./Card";

// Placówki RS Ubezpieczenia
const sampleLocations = [
  {
    id: 1,
    name: "RS Ubezpieczenia - Wrocław",
    address: "ul. Szybowcowa 25, 54-130 Wrocław",
    hours: "Pon-Pt: 9:00-17:00",
    city: "Wrocław",
    contacts: [
      {
        name: "Michał Kijak",
        phone: "+48 660 726 743",
        email: "michal.kijak@rsubezpieczenia.pl",
      },
      {
        name: "Sylwia Kijak",
        phone: "+48 668 180 767",
        email: "sylwia.kijak@rsubezpieczenia.pl",
      },
    ],
  },
];

export default function LocationFinder() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = [
    { value: "all", label: "Wszystkie miasta" },
    { value: "Wrocław", label: "Wrocław" },
  ];

  const filteredLocations = sampleLocations.filter((location) => {
    const matchesCity = selectedCity === "all" || location.city === selectedCity;
    const matchesSearch =
      searchQuery === "" ||
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Input
          placeholder="Szukaj po nazwie lub adresie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          options={cities}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredLocations.map((location) => (
          <Card key={location.id}>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {location.name}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">{location.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-text-secondary">{location.hours}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-semibold text-text-primary mb-3">
                Osoby kontaktowe:
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {location.contacts.map((contact, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-medium text-text-primary">{contact.name}</p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-accent hover:underline text-sm"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-accent hover:underline text-sm break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}

        {filteredLocations.length === 0 && (
          <Card>
            <p className="text-center text-text-secondary py-8">
              Nie znaleziono placówek spełniających kryteria wyszukiwania.
            </p>
          </Card>
        )}
      </div>

      {/* Mapa Google Maps */}
      <div className="mt-8">
        <Card className="p-0 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.0486855445634!2d16.87768007671891!3d51.11168997171887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9dc54a426f3%3A0x4e32a7f9c7c5d0a0!2sSzybowcowa%2025%2C%2054-130%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1704724800000!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja RS Ubezpieczenia - Wrocław"
          />
        </Card>
      </div>
    </div>
  );
}
