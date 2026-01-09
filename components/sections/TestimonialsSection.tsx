"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Card from "../ui/Card";
import Carousel from "../ui/Carousel";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Właścicielka firmy",
    rating: 5,
    text: "Dzięki RS Ubezpieczenia zaoszczędziłam ponad 600 zł na ubezpieczeniu samochodu! Obsługa bardzo profesjonalna i szybka.",
    location: "Wrocław",
  },
  {
    id: 2,
    name: "Piotr Nowak",
    role: "Kierowca zawodowy",
    rating: 5,
    text: "Polecam każdemu! Doradca dokładnie wyjaśnił wszystkie opcje i pomógł wybrać najlepszą polisę dla moich potrzeb.",
    location: "Warszawa",
  },
  {
    id: 3,
    name: "Maria Wiśniewska",
    role: "Nauczycielka",
    rating: 5,
    text: "Wspaniała obsługa! Doradca szybko odpowiedział na moje pytania i pomógł znaleźć idealne ubezpieczenie mieszkania w doskonałej cenie. Bardzo zadowolona!",
    location: "Kraków",
  },
  {
    id: 4,
    name: "Jan Lewandowski",
    role: "Przedsiębiorca",
    rating: 5,
    text: "Kompleksowa obsługa ubezpieczeń firmowych. Wszystko załatwione sprawnie i bez zbędnych formalności. Polecam!",
    location: "Poznań",
  },
  {
    id: 5,
    name: "Katarzyna Zielińska",
    role: "Freelancerka",
    rating: 5,
    text: "Najlepsze doradztwo ubezpieczeniowe jakie znalazłam. Prosty kontakt, szybka odpowiedź i świetny doradca. 5 gwiazdek!",
    location: "Gdańsk",
  },
  {
    id: 6,
    name: "Tomasz Kamiński",
    role: "Manager",
    rating: 5,
    text: "Szybko, sprawnie i tanio! Polecam wszystkim, którzy szukają najlepszych ofert ubezpieczeniowych.",
    location: "Łódź",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-heading-xl font-bold text-text-primary mb-4">
            Co mówią nasi klienci?
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Ponad 2,000 zadowolonych klientów - zobacz ich opinie
          </p>
        </motion.div>

        <Carousel>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} glass className="h-full">
              <div className="mb-4">
                <Quote className="w-10 h-10 text-accent/20" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-warning text-warning"
                  />
                ))}
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-warning text-warning"
                />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span>•</span>
            <span>Średnia ocena z 1,247 opinii</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
