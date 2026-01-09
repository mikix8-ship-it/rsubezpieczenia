"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "WARTA S.A.", logo: "/images/partners/warta.png" },
  { name: "ERGO HESTIA", logo: "/images/partners/hestia.png" },
  { name: "COMPENSA", logo: "/images/partners/compensa.png" },
  { name: "PZU S.A.", logo: "/images/partners/pzu.jpg" },
  { name: "Wiener", logo: "/images/partners/wiener.png" },
  { name: "TUZ", logo: "/images/partners/tuz.png" },
  { name: "UNIQA", logo: "/images/partners/uniqa.png" },
  { name: "LINK4", logo: "/images/partners/link4.png" },
  { name: "Europ Assistance", logo: "/images/partners/europe_assistance.png" },
  { name: "AGRO TUW", logo: "/images/partners/agro.png" },
  { name: "BeeSafe", logo: "/images/partners/beesafe.png" },
  { name: "BALCIA INSURANCE", logo: "/images/partners/balcia.png" },
  { name: "INTERRISK", logo: "/images/partners/interrisk.jpg" },
  { name: "EUROINS", logo: "/images/partners/euroins.jpg" },
  { name: "Trasti", logo: "/images/partners/trasti.png" },
  { name: "YOU CAN DRIVE", logo: "/images/partners/you_can_drive.png" },
  { name: "GENERALI TU", logo: "/images/partners/generali.jpg" },
  { name: "HDI WARTA", logo: "/images/partners/hdi.png" },
  { name: "Vienna Life", logo: "/images/partners/vienna_life.png" },
  { name: "PROAMA", logo: "/images/partners/proama.png" },
  { name: "Allianz", logo: "/images/partners/allianz.png" },
  { name: "BENEFIA", logo: "/images/partners/benefia.png" },
  { name: "DEFEND INSURANCE", logo: "/images/partners/defend.jpg" },
  { name: "INTER Polska", logo: "/images/partners/inter_polska.jpg" },
  { name: "Colonnade Insurance", logo: "/images/partners/colonnade.png" },
  { name: "Generali Agro", logo: "/images/partners/generali_agro.png" },
  { name: "Leadenhall Insurance", logo: "/images/partners/leadenhall.png" },
  { name: "MTU", logo: "/images/partners/mtu.png" },
  { name: "Nationale-Nederlanden", logo: "/images/partners/nationale.png" },
  { name: "EUROPA TU", logo: "/images/partners/europa.png" },
  { name: "Unum Życie", logo: "/images/partners/unum.png" },
  { name: "VH Polska", logo: "/images/partners/vh_polska.png" },
];

export default function PartnersGrid() {
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
            Współpracujemy z najlepszymi
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Porównujemy oferty z 35+ renomowanych towarzystw ubezpieczeniowych
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="glass rounded-lg p-6 flex items-center justify-center hover:shadow-2xl transition-all duration-200 min-h-[100px] relative"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain w-full h-auto max-h-[60px] logo-blur"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary">
            <span className="font-semibold text-accent text-2xl">35+</span> towarzystw w jednym miejscu
          </p>
        </motion.div>
      </div>
    </section>
  );
}
