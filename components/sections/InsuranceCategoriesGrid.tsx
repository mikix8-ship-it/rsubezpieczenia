"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Car,
  Home,
  Heart,
  Plane,
  GraduationCap,
  Bike,
  Zap,
  PawPrint,
  Tractor,
  Briefcase,
} from "lucide-react";
import Card from "../ui/Card";

const categories = [
  {
    id: 1,
    title: "Samochód",
    description: "OC, AC, NNW, Assistance",
    icon: Car,
    image: "/images/categories/samochod.jpg",
    href: "/ubezpieczenia/samochod",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Nieruchomość",
    description: "Dom, mieszkanie, budowa",
    icon: Home,
    image: "/images/categories/nieruchomosci.jpg",
    href: "/ubezpieczenia/nieruchomosci",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: 3,
    title: "Życie i zdrowie",
    description: "Ubezpieczenie na życie, zdrowotne",
    icon: Heart,
    image: "/images/categories/zycie-zdrowie.jpg",
    href: "/ubezpieczenia/zycie-i-zdrowie",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    id: 4,
    title: "Podróż",
    description: "Turystyczne, bagaż, leczenie",
    icon: Plane,
    image: "/images/categories/turystyczne.jpg",
    href: "/ubezpieczenia/turystyczne",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 5,
    title: "NNW szkolne",
    description: "Przedszkolak, uczeń, student",
    icon: GraduationCap,
    image: "/images/categories/nnw-szkolne.jpg",
    href: "/ubezpieczenia/nnw-szkolne",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: 6,
    title: "Rower",
    description: "Rower, hulajnoga elektryczna",
    icon: Bike,
    image: "/images/categories/rower.jpg",
    href: "/ubezpieczenia/rower",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: 7,
    title: "Motocykl",
    description: "Motocykl, skuter, AC",
    icon: Zap,
    image: "/images/categories/motocykl.jpg",
    href: "/ubezpieczenia/motocykl",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    id: 8,
    title: "Zwierzęta",
    description: "Pies i kot",
    icon: PawPrint,
    image: "/images/categories/zwierzeta.jpg",
    href: "/ubezpieczenia/zwierzeta",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    id: 9,
    title: "Agrobiznes",
    description: "Uprawy, maszyny, zwierzęta",
    icon: Tractor,
    image: "/images/categories/rolnicze.jpg",
    href: "/ubezpieczenia/rolnicze",
    color: "text-lime-500",
    bgColor: "bg-lime-500/10",
  },
  {
    id: 10,
    title: "Firma",
    description: "OC działalności, majątek",
    icon: Briefcase,
    image: "/images/categories/firmowe.jpg",
    href: "/ubezpieczenia/firmowe",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
];

export default function InsuranceCategoriesGrid() {
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
            Najpopularniejsze ubezpieczenia
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Wybierz kategorię ubezpieczenia i skontaktuj się z nami w sprawie oferty
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={category.href}>
                <Card className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden p-0">
                  {/* Zdjęcie */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Zawartość */}
                  <div className="p-6">
                    <div className={`p-3 ${category.bgColor} rounded-lg w-fit mb-3`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {category.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
