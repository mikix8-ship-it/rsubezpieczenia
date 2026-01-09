"use client";

import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";

const faqItems = [
  {
    id: "1",
    title: "Czy porównanie ofert jest darmowe?",
    content:
      "Tak! Porównanie ofert ubezpieczeniowych w RS Ubezpieczenia jest całkowicie darmowe i niezobowiązujące. Możesz sprawdzić ceny z 35+ towarzystw bez żadnych opłat.",
  },
  {
    id: "2",
    title: "Jak długo trwa proces wyceny?",
    content:
      "Podstawowa wycena trwa zaledwie 30 sekund! Wystarczy podać numer rejestracyjny i datę urodzenia, a system automatycznie porówna oferty. Szczegółowa wycena z doradcą zajmuje około 10 minut.",
  },
  {
    id: "3",
    title: "Czy mogę wykupić ubezpieczenie online?",
    content:
      "Oczywiście! Możesz wykupić większość ubezpieczeń online w 100%. Wszystkie dokumenty wysyłamy elektronicznie. Jeśli wolisz kontakt osobisty, zapraszamy do jednej z naszych placówek.",
  },
  {
    id: "4",
    title: "Czy RS Ubezpieczenia ma licencję?",
    content:
      "Tak, RS Ubezpieczenia to licencjonowana multiagencja ubezpieczeniowa. Współpracujemy wyłącznie z renomowanymi towarzystwami posiadającymi wszystkie niezbędne zezwolenia i licencje.",
  },
  {
    id: "5",
    title: "Jak mogę skontaktować się z doradcą?",
    content:
      "Możesz skontaktować się z nami telefonicznie (+48 660 726 743), mailowo (michal.kijak@rsubezpieczenia.pl) lub osobiście w jednej z naszych placówek. Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00-17:00.",
  },
  {
    id: "6",
    title: "Czy mogę zmienić ubezpieczenie w trakcie roku?",
    content:
      "Tak, możesz zmienić ubezpieczenie w każdym momencie. Warto jednak pamiętać o terminach wypowiedzenia i zwrocie składki z poprzedniego ubezpieczenia. Nasi doradcy pomogą Ci przeprowadzić ten proces bezproblemowo.",
  },
];

export default function FAQSection() {
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
            Najczęściej zadawane pytania
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Masz pytania? Sprawdź odpowiedzi na najczęstsze wątpliwości
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-accent/5 rounded-2xl border border-accent/10"
        >
          <p className="text-text-primary font-medium mb-2">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <p className="text-text-secondary mb-4">
            Skontaktuj się z nami, a nasi doradcy chętnie Ci pomogą
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Przejdź do kontaktu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
