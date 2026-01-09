"use client";

import { motion } from "framer-motion";
import { Shield, TrendingDown, Clock } from "lucide-react";
import QuoteCalculator from "../ui/QuoteCalculator";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero/glowna.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/50 z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6">
              <span className="hidden sm:inline">🏆 Zaufało nam ponad 2,000 klientów z Wrocławia</span>
              <span className="sm:hidden">🏆 2,000+ klientów</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-display-lg lg:text-display-xl font-bold text-text-primary mb-6 leading-tight">
              Znajdź <span className="text-accent">najlepsze</span> ubezpieczenie <span className="block mt-2">we Wrocławiu</span>
            </h1>

            <p className="text-base sm:text-lg md:text-body-lg text-text-primary mb-8 max-w-xl">
              Profesjonalna agencja ubezpieczeniowa obsługująca Wrocław i okolice. 
              Wyślij zapytanie a my odezwiemy się w ciągu 24 godzin z idealnie dopasowaną ofertą 
              spośród 35+ towarzystw ubezpieczeniowych.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">35+ Towarzystw</p>
                  <p className="text-sm text-text-secondary">W jednym miejscu</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent-secondary/10 rounded-lg flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Oszczędzasz</p>
                  <p className="text-sm text-text-secondary">Średnio 450 zł</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-warning/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Odpowiedź</p>
                  <p className="text-sm text-text-secondary">W ciągu 24h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <QuoteCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
