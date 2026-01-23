"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const insuranceCategories = [
  { label: "Samochód", href: "/ubezpieczenia/samochod" },
  { label: "Nieruchomość", href: "/ubezpieczenia/nieruchomosci" },
  { label: "Życie i zdrowie", href: "/ubezpieczenia/zycie-i-zdrowie" },
  { label: "Podróż", href: "/ubezpieczenia/turystyczne" },
  { label: "NNW szkolne", href: "/ubezpieczenia/nnw-szkolne" },
  { label: "Rower", href: "/ubezpieczenia/rower" },
  { label: "Motocykl", href: "/ubezpieczenia/motocykl" },
  { label: "Zwierzęta", href: "/ubezpieczenia/zwierzeta" },
  { label: "Agrobiznes", href: "/ubezpieczenia/rolnicze" },
  { label: "Firma", href: "/ubezpieczenia/firmowe" },
];

export default function Navigation() {
  const dropdownId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Mobile dropdown for "Ubezpieczenia"
  const [showMobileInsurance, setShowMobileInsurance] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown when menu closes
  useEffect(() => {
    if (!isOpen) setShowMobileInsurance(false);
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setShowMobileInsurance(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        "glass-light",
        isScrolled && "shadow-2xl"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="RS Ubezpieczenia"
              width={720}
              height={200}
              priority
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              <div
  className="relative"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => setShowDropdown(false)}
>
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded={showDropdown}
    aria-controls={dropdownId}
    className="flex items-center gap-1 font-semibold text-text-primary hover:text-accent transition-colors"
  >
    Ubezpieczenia
    <ChevronDown className="w-4 h-4" />
  </button>

  {showDropdown && (
    <>
      {/* Hover bridge: usuwa "dziurę" między buttonem a dropdownem */}
      <div className="absolute left-0 top-full h-2 w-full" />

      <div
        id={dropdownId}
        role="menu"
        className="absolute top-full left-0 mt-1 w-64 glass rounded-lg shadow-xl py-2"
      >
        {insuranceCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            role="menuitem"
            className="block px-4 py-2 text-text-primary hover:bg-background hover:text-accent transition-colors"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </>
  )}
</div>

            <Link
              href="/o-nas"
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              O nas
            </Link>

            <Link
              href="/towarzystwa"
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              Towarzystwa
            </Link>

            <Link
              href="/porady"
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              Porady
            </Link>

            <Link
              href="/placowki"
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              Placówki
            </Link>

            <Link
              href="/kontakt"
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+48660726743"
              className="flex items-center gap-2 text-accent font-medium"
            >
              <Phone className="w-5 h-5" />
              +48 660 726 743
            </a>
            <Link href="/kontakt">
              <Button size="sm">Zapytaj o ofertę</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col">
              {/* Mobile: Ubezpieczenia (collapsible) */}
              <button
                type="button"
                onClick={() => setShowMobileInsurance((v) => !v)}
                className="px-4 py-3 flex items-center justify-between font-semibold text-text-primary hover:bg-background transition-colors"
                aria-expanded={showMobileInsurance}
                aria-controls="mobile-insurance"
              >
                Ubezpieczenia
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform",
                    showMobileInsurance && "rotate-180"
                  )}
                />
              </button>

              {showMobileInsurance && (
                <div id="mobile-insurance" className="flex flex-col pb-2">
                  {insuranceCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      onClick={closeMobileMenu}
                      className="px-6 py-2 text-text-primary hover:bg-background transition-colors"
                    >
                      {/* Kategorie ubezpieczeń: zwykły tekst */}
                      {category.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile main links (BOLD) */}
              <Link
                href="/o-nas"
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-text-primary hover:bg-background transition-colors"
              >
                O nas
              </Link>

              <Link
                href="/towarzystwa"
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-text-primary hover:bg-background transition-colors"
              >
                Towarzystwa
              </Link>

              <Link
                href="/porady"
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-text-primary hover:bg-background transition-colors"
              >
                Porady
              </Link>

              {/* FIX: Placówki i Kontakt na mobile — były niewidoczne u Ciebie, więc wymuszamy poprawny rendering i spacing */}
              <Link
                href="/placowki"
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-text-primary hover:bg-background transition-colors"
              >
                Placówki
              </Link>

              <Link
                href="/kontakt"
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-text-primary hover:bg-background transition-colors"
              >
                Kontakt
              </Link>

              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-border">
                <a
                  href="tel:+48660726743"
                  className="flex items-center gap-2 text-accent font-medium mb-3"
                >
                  <Phone className="w-5 h-5" />
                  +48 660 726 743
                </a>

                <Link href="/kontakt" onClick={closeMobileMenu}>
                  <Button className="w-full">Zapytaj o ofertę</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
