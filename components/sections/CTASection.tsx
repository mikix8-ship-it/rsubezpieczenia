"use client";

import { motion } from "framer-motion";
import { Phone, Mail, } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-accent text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-heading-xl font-bold mb-4">
              Gotowy na oszczędności?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę ubezpieczenia. 
              Pomożemy Ci znaleźć najlepszą ofertę!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48660726743">
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Zadzwoń: 660 726 743
              </Button>
            </a>
            <a href="mailto:info@rsubezpieczenia.pl">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent w-full sm:w-auto">
                <Mail className="w-5 h-5" />
                Napisz do nas
              </Button>
            </a>
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30 sek</div>
              <div className="text-white/80">Czas kalkulacji</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold mb-2">35+</div>
              <div className="text-white/80">Towarzystw</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0 zł</div>
              <div className="text-white/80">Koszt porównania</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
