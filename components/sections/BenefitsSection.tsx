"use client";

import { motion } from "framer-motion";
import {
  Search,
  HeartHandshake,
  Zap,
  MapPin,
  Shield,
  Clock,
} from "lucide-react";
import Card from "../ui/Card";

const benefits = [
  {
    id: 1,
    title: "Porównywarka ubezpieczeń",
    description:
      "Porównaj oferty 35+ towarzystw w jednym miejscu i zaoszczędź nawet kilkaset złotych rocznie.",
    icon: Search,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 2,
    title: "Profesjonalne doradztwo",
    description:
      "Nasi doświadczeni doradcy pomogą Ci wybrać najlepszą ochronę dostosowaną do Twoich potrzeb.",
    icon: HeartHandshake,
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
  {
    id: 3,
    title: "Szybka obsługa online",
    description:
      "Wykup polisę w 5 minut bez wychodzenia z domu. Wszystkie dokumenty wysyłamy elektronicznie.",
    icon: Zap,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 4,
    title: "Obsługa w całej Polsce",
    description:
      "Zapewniamy kompleksową obsługę online na terenie całego kraju. Skontaktuj się z nami z każdego miejsca.",
    icon: MapPin,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 5,
    title: "Bezpieczeństwo gwarantowane",
    description:
      "Współpracujemy tylko z renomowanymi towarzystwami ubezpieczeniowymi posiadającymi wszystkie licencje.",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 6,
    title: "Wsparcie 24/7",
    description:
      "Jesteśmy dostępni przez telefon, email i w placówkach. Pomożemy w każdej sytuacji.",
    icon: Clock,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-heading-xl font-bold text-text-primary mb-4">
            Dlaczego warto nam zaufać?
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Zapewniamy kompleksową obsługę i najlepsze warunki ubezpieczenia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <div className={`p-4 ${benefit.bgColor} rounded-lg w-fit mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
