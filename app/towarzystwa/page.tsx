import { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Towarzystwa Ubezpieczeniowe - RS Ubezpieczenia",
  description: "Współpracujemy z 35+ renomowanymi towarzystwami ubezpieczeniowymi w Polsce.",
};

const companies = [
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

export default function TowarzystwaPage() {
  return (
    <div className="pt-20">
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/towarzystwa.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom text-center relative z-10">
          <Badge className="mb-6">35+ Partnerów</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
            Towarzystwa ubezpieczeniowe
          </h1>
          <p className="text-body-lg text-text-primary max-w-2xl mx-auto">
            Współpracujemy z najlepszymi towarzystwami ubezpieczeniowymi w Polsce
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="glass rounded-lg p-6 flex items-center justify-center hover:shadow-2xl transition-all min-h-[120px]">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={140}
                  height={70}
                  className="object-contain w-full h-auto max-h-[70px] logo-blur"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
