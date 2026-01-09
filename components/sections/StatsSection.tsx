"use client";

import { motion } from "framer-motion";
import { Shield, Users, TrendingDown, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "35+",
    label: "Towarzystw ubezpieczeniowych",
    description: "W jednym miejscu",
    icon: Shield,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 2,
    value: "2,000+",
    label: "Zadowolonych klientów",
    description: "Którzy nam zaufali",
    icon: Users,
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
  {
    id: 3,
    value: "450 zł",
    label: "Średnia oszczędność",
    description: "Rocznie",
    icon: TrendingDown,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 4,
    value: "95%",
    label: "Klientów poleca nas",
    description: "Swoim znajomym",
    icon: Star,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

export default function StatsSection() {
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
            Dlaczego RS Ubezpieczenia?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Liczby mówią same za siebie - setki zadowolonych klientów i miliony zaoszczędzonych złotych
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 ${stat.bgColor} rounded-2xl mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-text-primary">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1 text-text-primary">
                {stat.label}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
