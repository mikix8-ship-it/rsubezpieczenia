# RS Ubezpieczenia - Strona internetowa

Profesjonalna strona internetowa dla multiagencji ubezpieczeniowej RS Ubezpieczenia.

**Ostatnia aktualizacja**: 07.01.2025

## 🎉 Najnowsze zmiany (v2.0)

- ✅ Dodano prawdziwe logo RS Ubezpieczenia
- ✅ Zmieniono kalkulator na formularz zapytania ofertowego (numer rej., VIN, data rej. + kontakt)
- ✅ Zaktualizowano dane kontaktowe (info@rsubezpieczenia.pl, +48 660 726 743)
- ✅ Dodano 2 osoby kontaktowe w placówkach (Michał i Sylwia Kijak)
- ✅ Dodano 3 rzeczywiste artykuły w sekcji porad (linki do gu.com.pl)
- ✅ Zaktualizowano stronę /porady z artykułami

📖 **Zobacz pełną listę zmian**: `CHANGELOG.md`

## 🚀 Technologie

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3.4.17**
- **Framer Motion** (animacje)
- **Lucide React** (ikony)
- **Embla Carousel** (slidery)

## 📦 Instalacja

1. Rozpakuj archiwum `rs-ubezpieczenia.zip`

2. Przejdź do katalogu projektu:
```bash
cd rs-ubezpieczenia
```

3. Zainstaluj zależności:
```bash
npm install
```

## 🛠️ Uruchomienie

### Tryb deweloperski
```bash
npm run dev
```
Strona będzie dostępna pod adresem: http://localhost:3000

### Build produkcyjny
```bash
npm run build
npm start
```

## 📁 Struktura projektu

```
rs-ubezpieczenia/
├── app/                          # Strony aplikacji (Next.js App Router)
│   ├── layout.tsx               # Layout główny
│   ├── page.tsx                 # Strona główna
│   ├── globals.css              # Style globalne
│   ├── ubezpieczenia/           # Kategorie ubezpieczeń
│   │   ├── samochod/
│   │   ├── nieruchomosci/
│   │   ├── zycie-i-zdrowie/
│   │   └── ... (10 kategorii)
│   ├── o-nas/
│   ├── towarzystwa/
│   ├── porady/
│   ├── wspolpraca/
│   ├── placowki/
│   ├── kontakt/
│   ├── polityka-prywatnosci/
│   ├── cookies/
│   └── regulamin/
├── components/
│   ├── sections/                # Komponenty sekcji
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   └── ui/                      # Komponenty UI
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── ...
├── lib/
│   └── utils.ts                 # Funkcje pomocnicze
├── public/
│   └── images/                  # Obrazy (placeholder)
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
├── tsconfig.json
└── package.json
```

## ✅ Zrealizowane funkcjonalności

### Strony
- ✅ Strona główna z pełną funkcjonalnością
- ✅ 10 stron kategorii ubezpieczeń
- ✅ O nas
- ✅ Towarzystwa (35+ partnerów)
- ✅ Porady (blog placeholder)
- ✅ Współpraca
- ✅ Placówki (z wyszukiwarką)
- ✅ Kontakt (z formularzem)
- ✅ Polityka prywatności
- ✅ Cookies
- ✅ Regulamin

### Komponenty UI
- ✅ Button (variants: primary, secondary, outline)
- ✅ Card (z glass-effect)
- ✅ Input
- ✅ Select
- ✅ Textarea
- ✅ Badge
- ✅ Modal
- ✅ Accordion (FAQ)
- ✅ Tabs
- ✅ Carousel (Embla)
- ✅ QuoteCalculator (kalkulator OC/AC)
- ✅ ContactForm (z walidacją)
- ✅ CookieConsent
- ✅ LocationFinder

### Sekcje
- ✅ Navigation (sticky, dropdown menu, mobile)
- ✅ Hero (z kalkulatorem)
- ✅ InsuranceCategoriesGrid (10 kafelków)
- ✅ PartnersGrid (35+ towarzystw)
- ✅ StatsSection
- ✅ BenefitsSection
- ✅ TestimonialsSection (carousel)
- ✅ BlogSection
- ✅ CTASection
- ✅ FAQSection (accordion)
- ✅ Footer (kompletny)

### Funkcjonalności
- ✅ Pełna responsywność (mobile, tablet, desktop)
- ✅ Animacje Framer Motion (scroll reveals)
- ✅ SEO metadata dla każdej strony
- ✅ Cookie consent z mounted state
- ✅ Walidacja formularzy
- ✅ TypeScript (strict mode)
- ✅ Accessibility (ARIA labels)

## 📝 TODO - Co trzeba jeszcze uzupełnić

### Treści
- [ ] Logo firmy (public/logo.png, public/logo-white.png)
- [ ] Obrazy dla kategorii (public/images/categories/)
- [ ] Logo towarzystw ubezpieczeniowych (public/images/partners/)
- [ ] Zdjęcia do bloga (public/images/blog/)
- [ ] Zdjęcia zespołu (public/images/team/)
- [ ] Favicon (public/favicon.ico)

### Dane kontaktowe
- [ ] Weryfikacja numeru telefonu: +48 660 726 743
- [ ] Weryfikacja email: michal.kijak@rsubezpieczenia.pl
- [ ] Weryfikacja adresu: ul. Szybowcowa 25, 54-130 Wrocław
- [ ] Dodanie NIP/REGON w footer
- [ ] Linki do social media (Facebook, Instagram, LinkedIn)

### Funkcjonalności
- [ ] Integracja z API towarzystw ubezpieczeniowych
- [ ] System wycen online (prawdziwe kalkulacje)
- [ ] Integracja Google Maps w LocationFinder
- [ ] System CMS do bloga/porad
- [ ] Integracja Google Reviews do opinii
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Formularz kontaktowy - backend (wysyłanie email)

### Legal
- [ ] Kompletna Polityka Prywatności (zgodna z RODO)
- [ ] Kompletna Polityka Cookies
- [ ] Kompletny Regulamin świadczenia usług
- [ ] Zgody marketingowe w formularzach

### SEO
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph images
- [ ] Structured data (JSON-LD)

## 🎨 Kolory (Design System)

```css
background: #F8FAFC      /* Jasny szaro-niebieski */
surface: #FFFFFF         /* Biały */
text-primary: #1E293B    /* Ciemny */
text-secondary: #64748B  /* Szary */
accent: #4F8CFF          /* Niebieski główny */
accent-secondary: #34D399 /* Turkusowy */
border: rgba(30, 41, 59, 0.10)
success: #22C55E
warning: #F59E0B
error: #EF4444
```

## 🚀 Wdrożenie

### Vercel (Rekomendowane)
1. Zaloguj się na https://vercel.com
2. Importuj projekt
3. Deploy automatyczny

### Netlify
1. Zaloguj się na https://netlify.com
2. Drag & drop folder projektu
3. Deploy automatyczny

### VPS/Hosting własny
1. Build produkcyjny: `npm run build`
2. Kopiuj folder `.next`, `public`, `package.json` na serwer
3. Zainstaluj dependencies: `npm install --production`
4. Uruchom: `npm start`

## 📞 Wsparcie

W razie pytań lub problemów:
- Email: michal.kijak@rsubezpieczenia.pl
- Telefon: +48 660 726 743

## 📄 Licencja

© 2024 RS Ubezpieczenia. Wszelkie prawa zastrzeżone.
