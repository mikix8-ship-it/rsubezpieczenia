import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* O firmie */}
          <div>
            <h3 className="text-xl font-bold mb-4">RS Ubezpieczenia</h3>
            <p className="text-white/70 mb-6">
              Profesjonalne doradztwo ubezpieczeniowe. Pomagamy znaleźć najlepsze 
              ubezpieczenie z oferty 35+ towarzystw.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ubezpieczenia */}
          <div>
            <h4 className="font-semibold mb-4">Ubezpieczenia</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ubezpieczenia/samochod" className="text-white/70 hover:text-white transition-colors">
                  Samochód
                </Link>
              </li>
              <li>
                <Link href="/ubezpieczenia/nieruchomosci" className="text-white/70 hover:text-white transition-colors">
                  Nieruchomość
                </Link>
              </li>
              <li>
                <Link href="/ubezpieczenia/zycie-i-zdrowie" className="text-white/70 hover:text-white transition-colors">
                  Życie i zdrowie
                </Link>
              </li>
              <li>
                <Link href="/ubezpieczenia/turystyczne" className="text-white/70 hover:text-white transition-colors">
                  Podróż
                </Link>
              </li>
              <li>
                <Link href="/ubezpieczenia/firmowe" className="text-white/70 hover:text-white transition-colors">
                  Firma
                </Link>
              </li>
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas" className="text-white/70 hover:text-white transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/towarzystwa" className="text-white/70 hover:text-white transition-colors">
                  Towarzystwa
                </Link>
              </li>
              <li>
                <Link href="/porady" className="text-white/70 hover:text-white transition-colors">
                  Porady
                </Link>
              </li>
              <li>
                <Link href="/wspolpraca" className="text-white/70 hover:text-white transition-colors">
                  Współpraca
                </Link>
              </li>
              <li>
                <Link href="/placowki" className="text-white/70 hover:text-white transition-colors">
                  Placówki
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  ul. Szybowcowa 25<br />
                  54-130 Wrocław
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+48660726743" className="text-white/70 hover:text-white transition-colors">
                  +48 660 726 743
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@rsubezpieczenia.pl"
                  className="text-white/70 hover:text-white transition-colors break-all"
                >
                  info@rsubezpieczenia.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                © {currentYear} RS Ubezpieczenia. Wszelkie prawa zastrzeżone.
              </p>
              <p className="text-white/50 text-xs mt-1">
                Wykonanie:{" "}
                <a
                  href="https://www.enappia.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors underline"
                >
                  Enappia sp. z o.o.
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/polityka-prywatnosci" className="text-white/70 hover:text-white transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/regulamin" className="text-white/70 hover:text-white transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
