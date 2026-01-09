# Struktura Projektu RS Ubezpieczenia

## 📁 Główna struktura

```
rs-ubezpieczenia/
├── app/                    # Next.js App Router - wszystkie strony
├── components/             # Komponenty React
├── lib/                    # Funkcje pomocnicze
├── public/                 # Pliki statyczne
├── node_modules/           # Zależności (po npm install)
├── .next/                  # Build folder (po npm run build)
└── config files            # Pliki konfiguracyjne
```

## 🗂️ Szczegółowy opis

### /app - Strony aplikacji

```
app/
├── layout.tsx                      # Layout główny (Navigation, Footer, metadata)
├── page.tsx                        # Strona główna (Home)
├── globals.css                     # Style globalne Tailwind
│
├── ubezpieczenia/                  # Kategorie ubezpieczeń (10 stron)
│   ├── samochod/page.tsx          # OC, AC, NNW, Assistance
│   ├── nieruchomosci/page.tsx     # Dom, mieszkanie, budowa
│   ├── zycie-i-zdrowie/page.tsx   # Życie, zdrowie
│   ├── turystyczne/page.tsx       # Podróże
│   ├── nnw-szkolne/page.tsx       # Szkoła, przedszkole
│   ├── rower/page.tsx             # Rowery, hulajnogi
│   ├── motocykl/page.tsx          # Motocykle, skutery
│   ├── zwierzeta/page.tsx         # Psy, koty
│   ├── rolnicze/page.tsx          # Agrobiznes
│   └── firmowe/page.tsx           # Ubezpieczenia firm
│
├── o-nas/page.tsx                  # O firmie
├── towarzystwa/page.tsx            # Lista towarzystw ubezpieczeniowych
├── porady/page.tsx                 # Blog/Porady
├── wspolpraca/page.tsx             # Dla agentów, kariera
├── placowki/page.tsx               # Lokalizacje placówek
├── kontakt/page.tsx                # Kontakt z formularzem
│
└── [Legal pages]
    ├── polityka-prywatnosci/page.tsx
    ├── cookies/page.tsx
    └── regulamin/page.tsx
```

### /components - Komponenty

```
components/
│
├── sections/                       # Duże sekcje strony
│   ├── Navigation.tsx             # Navbar (sticky, dropdown, mobile)
│   ├── Footer.tsx                 # Stopka z linkami
│   ├── Hero.tsx                   # Sekcja główna z kalkulatorem
│   ├── InsuranceCategoriesGrid.tsx # Grid 10 kategorii
│   ├── PartnersGrid.tsx           # Logo 35+ towarzystw
│   ├── StatsSection.tsx           # Statystyki (35+, 10k+, 450zł, 95%)
│   ├── BenefitsSection.tsx        # Korzyści (6 kafelków)
│   ├── TestimonialsSection.tsx    # Opinie klientów (carousel)
│   ├── BlogSection.tsx            # Najnowsze porady
│   ├── CTASection.tsx             # Call to action
│   └── FAQSection.tsx             # FAQ (accordion)
│
└── ui/                             # Komponenty UI wielokrotnego użytku
    ├── Button.tsx                 # Przyciski (primary, secondary, outline)
    ├── Card.tsx                   # Karty (z glass-effect)
    ├── Input.tsx                  # Input z label i error
    ├── Select.tsx                 # Dropdown select
    ├── Textarea.tsx               # Textarea z label
    ├── Badge.tsx                  # Badges/pills
    ├── Modal.tsx                  # Modal/Dialog
    ├── Accordion.tsx              # Accordion (FAQ)
    ├── Tabs.tsx                   # Tabs
    ├── Carousel.tsx               # Carousel (Embla)
    ├── QuoteCalculator.tsx        # Kalkulator OC/AC
    ├── ContactForm.tsx            # Formularz kontaktowy
    ├── CookieConsent.tsx          # Cookie consent bar
    └── LocationFinder.tsx         # Wyszukiwarka placówek
```

### /lib - Utilities

```
lib/
└── utils.ts                        # cn() - class merging (clsx + tailwind-merge)
```

### /public - Assets

```
public/
├── images/
│   ├── hero/                      # Zdjęcia dla hero sections
│   ├── categories/                # Ikony/zdjęcia kategorii
│   ├── partners/                  # Logo towarzystw (TODO)
│   ├── team/                      # Zdjęcia zespołu (TODO)
│   └── blog/                      # Zdjęcia do artykułów (TODO)
├── logo.png                        # Logo główne (TODO)
├── logo-white.png                  # Logo białe (TODO)
└── favicon.ico                     # Favicon (TODO)
```

## 🎨 Design System

### Kolory (tailwind.config.ts)

```typescript
colors: {
  background: '#F8FAFC',           // Jasny szaro-niebieski
  surface: '#FFFFFF',              // Biały
  'text-primary': '#1E293B',       // Ciemny
  'text-secondary': '#64748B',     // Szary
  accent: '#4F8CFF',               // Niebieski główny
  'accent-secondary': '#34D399',   // Turkusowy
  border: 'rgba(30, 41, 59, 0.10)',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
}
```

### Typografia

```typescript
fontSize: {
  'display-xl': '4.5rem',          // Hero headers
  'display-lg': '3.75rem',         // Page headers
  'heading-xl': '3rem',            // Section headers
  'heading-lg': '2.25rem',         // Card headers
  'heading-md': '1.875rem',
  'heading-sm': '1.5rem',
  'body-lg': '1.125rem',           // Lead text
  'body-md': '1rem',               // Regular text
  'body-sm': '0.875rem',           // Small text
}
```

### Spacing

```typescript
maxWidth: {
  'container': '1280px',           // Max width kontenerów
},
spacing: {
  'container-mobile': '1rem',      // Padding mobile
  'container-desktop': '2rem',     // Padding desktop
}
```

### Utility Classes (globals.css)

```css
.glass-effect                       // Glassmorphism effect
.container-custom                   // Container z padding
.section-padding                    // Padding sekcji (py-24 md:py-32)
```

## 🔧 Pliki konfiguracyjne

### package.json
- Dependencies: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion, etc.
- Scripts: dev, build, start, lint

### tsconfig.json
- TypeScript strict mode
- Path aliases: @/* -> ./*

### tailwind.config.ts
- Custom colors, typography, spacing
- Content paths

### postcss.config.js
- Tailwind CSS + Autoprefixer

### next.config.ts
- Next.js configuration
- Image optimization

## 📊 Routing (Next.js App Router)

| URL | Plik | Opis |
|-----|------|------|
| `/` | app/page.tsx | Strona główna |
| `/ubezpieczenia/samochod` | app/ubezpieczenia/samochod/page.tsx | Ubezpieczenia samochodowe |
| `/ubezpieczenia/nieruchomosci` | app/ubezpieczenia/nieruchomosci/page.tsx | Ubezpieczenia nieruchomości |
| `/o-nas` | app/o-nas/page.tsx | O firmie |
| `/towarzystwa` | app/towarzystwa/page.tsx | Lista towarzystw |
| `/porady` | app/porady/page.tsx | Blog |
| `/kontakt` | app/kontakt/page.tsx | Kontakt |
| `/polityka-prywatnosci` | app/polityka-prywatnosci/page.tsx | Polityka prywatności |

## 🎯 Główne funkcjonalności

### 1. Strona główna
- Hero z kalkulatorem OC/AC
- Grid 10 kategorii ubezpieczeń
- Grid 35+ towarzystw
- Statystyki
- Korzyści (6 kafelków)
- Opinie klientów (carousel)
- Najnowsze porady
- CTA
- FAQ (accordion)

### 2. Navigation
- Sticky navbar
- Dropdown menu dla kategorii
- Mobile hamburger menu
- CTA button "Bezpłatna wycena"

### 3. Formularze
- Kalkulator OC/AC (podstawowy)
- Formularz kontaktowy (z walidacją)
- Cookie consent

### 4. Animacje
- Framer Motion scroll reveals
- Hover effects
- Smooth transitions
- NO parallax (zgodnie z wymaganiami)

## 🚀 Performance

- Next.js 15 App Router (server components)
- Image optimization (next/image)
- Code splitting automatyczny
- Font optimization (next/font)
- CSS-in-JS (Tailwind)

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text dla obrazów

## 📱 Responsywność

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔐 Security

- TypeScript strict mode
- Input validation w formularzach
- HTTPS required (production)
- Cookie consent
- RODO compliance (TODO)
