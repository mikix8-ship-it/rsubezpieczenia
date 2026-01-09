# 🚀 SEO STRATEGY - RS UBEZPIECZENIA WROCŁAW

## 🎯 CEL: Top 3 w Google dla "ubezpieczenia Wrocław"

---

## 📊 OBECNY STAN STRONY:

### **✅ CO JUŻ JEST DOBRE:**
- Metadata podstawowe ✅
- Robots: index, follow ✅
- Open Graph tags ✅
- 24 strony z contentem ✅
- Responsywność 100% ✅
- Fast loading ✅

### **⚠️ CO TRZEBA POPRAWIĆ:**
- Brak "Wrocław" w title/description ❌
- Brak Google My Business ❌
- Brak Schema.org markup ❌
- Brak lokalnych słów kluczowych ❌
- Brak linków zwrotnych ❌
- Brak Google Analytics ❌

---

## 🎯 PLAN DZIAŁANIA - 30 DNI DO TOP 10

---

## 📅 TYDZIEŃ 1: PODSTAWY (KRYTYCZNE)

### **1. Google My Business (GMB) - NAJWAŻNIEJSZE! 🔴**

**Dlaczego to jest #1:**
- 50% sukcesu lokalnego SEO
- Pojawiasz się w Google Maps
- Local Pack (top 3 wyniki z mapą)
- Bezpłatne

**Jak założyć (30 min):**

```
1. https://business.google.com
2. Dodaj firmę
3. Kategoria: "Insurance Agency" / "Agencja ubezpieczeniowa"
4. Adres: Twoja placówka we Wrocławiu
5. Telefon: +48 660 726 743
6. Strona: https://rsubezpieczenia.pl
7. Weryfikacja: Pocztą (Google wyśle kod)
8. Po weryfikacji:
   - Dodaj zdjęcia (min. 10) - biuro, zespół, logo
   - Dodaj godziny otwarcia
   - Dodaj opis (500 znaków z "Wrocław")
   - Dodaj usługi
   - Poproś klientów o opinie (min. 5-10)
```

**Opis GMB (przykład):**
```
RS Ubezpieczenia - Profesjonalna agencja ubezpieczeniowa we Wrocławiu. 
Oferujemy ubezpieczenia OC, AC, na życie, turystyczne i firmowe. 
Współpracujemy z 35+ towarzystwami ubezpieczeniowymi. 
Pomożemy Ci znaleźć najlepszą ochronę w najlepszej cenie.
Obsługujemy klientów z Wrocławia i okolic.
Zadzwoń: 660 726 743
```

**EFEKT:** Pojawisz się w Google Maps dla "ubezpieczenia Wrocław" ✅

---

### **2. Optymalizacja Metadata - Lokalnie (1h)**

**Zmień metadata na bardziej lokalne:**

**PRZED:**
```tsx
title: "RS Ubezpieczenia - Porównaj oferty 35+ towarzystw"
description: "RS Ubezpieczenia - profesjonalne doradztwo..."
```

**PO (z Wrocławiem):**
```tsx
title: "Ubezpieczenia Wrocław - RS Ubezpieczenia | OC, AC, na Życie | 35+ Towarzystw"
description: "Ubezpieczenia we Wrocławiu - profesjonalne doradztwo. Porównaj oferty 35+ towarzystw. OC, AC, na życie, turystyczne. Obsługujemy Wrocław i okolice. ☎️ 660 726 743"
keywords: "ubezpieczenia Wrocław, ubezpieczenie OC Wrocław, ubezpieczenie AC Wrocław, agent ubezpieczeniowy Wrocław, porównywarka ubezpieczeń Wrocław, RS Ubezpieczenia"
```

**Gdzie zmienić:** `/app/layout.tsx` (linie 8-10)

---

### **3. Dodaj "Wrocław" do contentu (2h)**

**Na każdej stronie dodaj lokalne wzmianki:**

**Przykłady:**
- ✅ "Obsługujemy klientów z Wrocławia i okolic"
- ✅ "Nasza placówka we Wrocławiu"
- ✅ "Ubezpieczenia samochodowe Wrocław"
- ✅ "Najlepsze ubezpieczenia we Wrocławiu"

**Gdzie dodać:**
- Strona główna (Hero section)
- O nas (wspomnienie Wrocławia)
- Kontakt (adres, mapa)
- Footer (adres)
- Każda strona ubezpieczeń (1-2 wzmianki)

**UWAGA:** Naturalnie! Nie spam, nie keyword stuffing.

---

### **4. Google Search Console (30 min)**

**Setup:**
```
1. https://search.google.com/search-console
2. Dodaj właściwość (rsubezpieczenia.pl)
3. Weryfikacja (plik HTML lub DNS)
4. Prześlij sitemap.xml
5. Sprawdź errory
6. Monitoruj pozycje
```

**EFEKT:** Widzisz jak Google widzi Twoją stronę ✅

---

## 📅 TYDZIEŃ 2: TECHNICAL SEO

### **5. Schema.org Markup (2h)**

**Dodaj structured data:**

```tsx
// app/layout.tsx - dodaj do <head>
const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "RS Ubezpieczenia",
  "image": "https://rsubezpieczenia.pl/logo.png",
  "url": "https://rsubezpieczenia.pl",
  "telephone": "+48660726743",
  "email": "info@rsubezpieczenia.pl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Twoja ulica 123",  // UZUPEŁNIJ
    "addressLocality": "Wrocław",
    "postalCode": "50-XXX",  // UZUPEŁNIJ
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.1079,  // UZUPEŁNIJ (Twoja lokalizacja)
    "longitude": 17.0385
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Wrocław"
  }
};

// W layout.tsx dodaj:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

**EFEKT:** Rich snippets w Google (gwiazdki, godziny, adres) ✅

---

### **6. Sitemap.xml (30 min)**

**Upewnij się że masz sitemap:**

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rsubezpieczenia.pl/</loc>
    <lastmod>2026-01-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rsubezpieczenia.pl/ubezpieczenia/samochod</loc>
    <lastmod>2026-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... wszystkie 24 strony -->
</urlset>
```

**Prześlij do Google Search Console**

---

### **7. Robots.txt (10 min)**

```txt
# public/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://rsubezpieczenia.pl/sitemap.xml
```

---

### **8. Performance Optimization (1h)**

**Sprawdź PageSpeed:**
```
https://pagespeed.web.dev/
Test: rsubezpieczenia.pl
```

**Optymalizacje:**
- ✅ Skompresuj obrazy (WebP)
- ✅ Lazy loading images
- ✅ Minify CSS/JS (Next.js robi to automatycznie)
- ✅ Enable caching
- ✅ Use CDN (Vercel/Netlify daje to za darmo)

**CEL:** 90+ score na mobile i desktop

---

## 📅 TYDZIEŃ 3: CONTENT & BACKLINKS

### **9. Blog / Porady - Lokalny Content (4h/tydzień)**

**Strategia contentu:**

**Pisz artykuły o tematyce lokalnej:**
- "5 najczęstszych błędów przy wyborze OC we Wrocławiu"
- "Jak ubezpieczyć samochód we Wrocławiu? Poradnik 2026"
- "Najlepsze ubezpieczenia mieszkań we Wrocławiu"
- "Ubezpieczenia dla firm we Wrocławiu - co warto wiedzieć"
- "Porównanie cen OC we Wrocławiu - analiza 2026"

**Format:**
- 1000-1500 słów
- 2-3x "Wrocław" w tekście
- 1x "Wrocław" w H1
- 1-2x "Wrocław" w H2
- Zdjęcia lokalne (jeśli masz)
- CTA na końcu (kontakt, formularz)

**Częstotliwość:** 1 artykuł/tydzień (minimum)

**EFEKT:** Long-tail keywords, autorytet, więcej contentu ✅

---

### **10. Lokalne Backlinki (ongoing)**

**Backlink = link z innej strony do Twojej**

**Gdzie zdobyć lokalne backlinki (Wrocław):**

#### **A. Katalogi lokalne (łatwe):**
- ✅ Panorama Firm (panoramafirm.pl)
- ✅ Google My Business (już masz)
- ✅ Facebook Business Page
- ✅ Yelp Polska
- ✅ Cylex (cylex.pl)
- ✅ Tuugo (tuugo.pl)
- ✅ Katalogi branżowe (ubezpieczenia)

#### **B. Lokalne media (trudniejsze, ale wartościowe):**
- ✅ Wroclawska gazeta lokalna
- ✅ Portale wrocławskie (love.wroclaw.pl, wroclaw.pl)
- ✅ Blogi o biznesie we Wrocławiu
- ✅ Wywiady z lokalnymi przedsiębiorcami

#### **C. Partnerstwa (średnio trudne):**
- ✅ Salony samochodowe (Wrocław) - wymiana linków
- ✅ Warsztaty samochodowe (Wrocław)
- ✅ Agencje nieruchomości (Wrocław)
- ✅ Biura rachunkowe (Wrocław)
- ✅ Kancelarie prawne (Wrocław)

**Jak to zrobić:**
```
1. Znajdź lokalną firmę (komplementarną)
2. Napisz email: "Chętnie dodamy link do Państwa strony 
   w naszej sekcji 'Partnerzy' jeśli Państwo również 
   dodacie link do nas"
3. Win-win!
```

**CEL:** 10-20 lokalnych backlinków w 3 miesiące

---

### **11. Opinie Klientów (ongoing)**

**Zbieraj opinie na:**
- ✅ Google My Business (NAJWAŻNIEJSZE)
- ✅ Facebook
- ✅ Własna strona (testimonials)

**Jak prosić:**
```
Email po zamknięciu polisy:

"Dzień dobry,

Dziękujemy za zaufanie! 
Jeśli jesteś zadowolony z naszej obsługi, 
będziemy wdzięczni za opinię na Google:

[LINK DO GOOGLE REVIEW]

Zajmie to 1 minutę, a nam bardzo pomoże!

Pozdrawiamy,
RS Ubezpieczenia"
```

**CEL:** 20+ opinii w 3 miesiące

**EFEKT:** Wyższa pozycja w Local Pack + trust ✅

---

## 📅 TYDZIEŃ 4: ANALYTICS & MONITORING

### **12. Google Analytics 4 (GA4) (30 min)**

**Setup:**
```
1. https://analytics.google.com
2. Utwórz konto
3. Dodaj właściwość (rsubezpieczenia.pl)
4. Skopiuj Measurement ID (G-XXXXXXXXXX)
5. Dodaj do Next.js (Google Tag)
```

**Next.js config:**
```tsx
// app/layout.tsx - dodaj w <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**EFEKT:** Widzisz ruch, konwersje, źródła ✅

---

### **13. Monitoring Pozycji (weekly)**

**Narzędzia (darmowe):**
- ✅ Google Search Console (positions)
- ✅ Ahrefs Webmaster Tools (darmowe)
- ✅ Ubersuggest (limitowane darmowe)

**Śledź pozycje dla:**
- "ubezpieczenia Wrocław"
- "ubezpieczenie OC Wrocław"
- "ubezpieczenie AC Wrocław"
- "agent ubezpieczeniowy Wrocław"
- "porównywarka ubezpieczeń Wrocław"

**Cel:**
- Tydzień 1-2: Brak pozycji (Google indexuje)
- Tydzień 3-4: Top 50-100
- Miesiąc 2: Top 20-30
- Miesiąc 3: Top 10-15
- Miesiąc 6: Top 5-10
- Rok 1: Top 3-5

---

## 🎯 SŁOWA KLUCZOWE - STRATEGIA

### **Primary Keywords (najważniejsze):**
1. **"ubezpieczenia Wrocław"** (volume: ~1000/mies)
2. **"ubezpieczenie OC Wrocław"** (volume: ~500/mies)
3. **"ubezpieczenie AC Wrocław"** (volume: ~300/mies)
4. **"agent ubezpieczeniowy Wrocław"** (volume: ~200/mies)

### **Secondary Keywords:**
- "porównywarka ubezpieczeń Wrocław"
- "ubezpieczenie na życie Wrocław"
- "ubezpieczenie mieszkania Wrocław"
- "ubezpieczenie turystyczne Wrocław"
- "ubezpieczenie firmy Wrocław"

### **Long-tail Keywords:**
- "najtańsze ubezpieczenie OC Wrocław"
- "ile kosztuje OC we Wrocławiu"
- "gdzie ubezpieczyć samochód Wrocław"
- "dobry agent ubezpieczeniowy Wrocław"
- "ubezpieczenie samochodu Wrocław cena"

---

## 🎯 KONKRETNE ZMIANY W KODZIE

### **1. Layout.tsx - Metadata**

```tsx
// /app/layout.tsx
export const metadata: Metadata = {
  title: "Ubezpieczenia Wrocław - RS Ubezpieczenia | OC, AC, na Życie",
  description: "Profesjonalna agencja ubezpieczeniowa we Wrocławiu. Porównaj oferty 35+ towarzystw. Ubezpieczenia OC, AC, na życie, turystyczne, firmowe. Wrocław i okolice. ☎️ 660 726 743",
  keywords: "ubezpieczenia Wrocław, ubezpieczenie OC Wrocław, ubezpieczenie AC Wrocław, agent ubezpieczeniowy Wrocław, porównywarka ubezpieczeń Wrocław, RS Ubezpieczenia, ubezpieczenia samochodowe Wrocław, ubezpieczenie na życie Wrocław",
  authors: [{ name: "RS Ubezpieczenia" }],
  openGraph: {
    title: "Ubezpieczenia Wrocław - RS Ubezpieczenia",
    description: "Profesjonalna agencja ubezpieczeniowa we Wrocławiu. 35+ towarzystw, najlepsze ceny.",
    type: "website",
    locale: "pl_PL",
    siteName: "RS Ubezpieczenia",
    url: "https://rsubezpieczenia.pl",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rsubezpieczenia.pl",
  },
};
```

---

### **2. Hero.tsx - Dodaj Wrocław**

```tsx
// components/sections/Hero.tsx
<h1>
  Znajdź <span className="text-accent">najlepsze</span> ubezpieczenie 
  <span className="block">we Wrocławiu</span>
</h1>

<p>
  Profesjonalna agencja ubezpieczeniowa obsługująca Wrocław i okolice.
  Porównaj oferty 35+ towarzystw i zaoszczędź nawet kilkaset złotych rocznie!
</p>
```

---

### **3. Footer.tsx - Adres**

```tsx
// components/sections/Footer.tsx
<div>
  <h3>Nasz adres</h3>
  <p>
    ul. [Twoja ulica] [numer]<br/>
    [kod] Wrocław<br/>
    Tel: <a href="tel:+48660726743">660 726 743</a><br/>
    Email: <a href="mailto:info@rsubezpieczenia.pl">info@rsubezpieczenia.pl</a>
  </p>
</div>
```

---

## 📊 TIMELINE & REZULTATY

### **Miesiąc 1:**
- ✅ Google My Business live
- ✅ Metadata zoptymalizowane
- ✅ Schema.org dodane
- ✅ Google Search Console setup
- ✅ 5+ opinii na GMB
- ✅ 2-4 artykuły na blogu
- **Rezultat:** Top 50-100 dla "ubezpieczenia Wrocław"

### **Miesiąc 2-3:**
- ✅ 15+ opinii na GMB
- ✅ 8-12 artykułów
- ✅ 5-10 lokalnych backlinków
- ✅ Regularny content
- **Rezultat:** Top 20-30 dla "ubezpieczenia Wrocław"

### **Miesiąc 4-6:**
- ✅ 25+ opinii
- ✅ 20+ artykułów
- ✅ 15-20 backlinków
- ✅ Stały ruch organiczny
- **Rezultat:** Top 10-15 dla "ubezpieczenia Wrocław"

### **Rok 1:**
- ✅ 50+ opinii
- ✅ 50+ artykułów
- ✅ 30+ backlinków
- ✅ Autorytet w branży
- **Rezultat:** Top 3-5 dla "ubezpieczenia Wrocław" ✅

---

## 💰 KOSZTY

### **Wariant 1: DIY (Zrób sam)**
- Google My Business: **DARMOWE**
- Google Search Console: **DARMOWE**
- Google Analytics: **DARMOWE**
- Schema.org: **DARMOWE** (sam dodajesz)
- Content writing: **CZAS** (4h/tydzień)
- Katalogi lokalne: **DARMOWE**
- Backlinki: **CZAS** (outreach)

**RAZEM:** 0 PLN + Twój czas (4-8h/tydzień)

---

### **Wariant 2: Freelancer SEO**
- Setup (GMB, GSC, Schema): 1,000-2,000 PLN (jednorazowo)
- Optymalizacja on-page: 1,500-3,000 PLN (jednorazowo)
- Content writing: 200-400 PLN/artykuł
- Link building: 500-1,000 PLN/miesiąc
- Monitoring: 300-500 PLN/miesiąc

**RAZEM:** 3,000-5,000 PLN setup + 1,500-3,000 PLN/miesiąc

---

### **Wariant 3: Agencja SEO**
- Setup: 5,000-10,000 PLN
- Miesięczna obsługa: 3,000-8,000 PLN/miesiąc
- Content: included
- Link building: included

**RAZEM:** 5,000-10,000 PLN + 3,000-8,000 PLN/miesiąc

---

## ✅ QUICK WINS (Zrób TO najpierw!)

### **Tydzień 1 - MUST HAVE:**

1. **Google My Business** ⭐⭐⭐⭐⭐
   - Czas: 30 min setup + 2 tygodnie weryfikacja
   - Koszt: 0 PLN
   - Efekt: Pojawisz się w mapach Google!

2. **Dodaj "Wrocław" do title/description** ⭐⭐⭐⭐⭐
   - Czas: 15 min
   - Koszt: 0 PLN
   - Efekt: Natychmiastowa zmiana w wynikach

3. **Google Search Console** ⭐⭐⭐⭐
   - Czas: 30 min
   - Koszt: 0 PLN
   - Efekt: Monitoring pozycji

4. **5 opinii na GMB** ⭐⭐⭐⭐⭐
   - Czas: 1 tydzień
   - Koszt: 0 PLN (poproś klientów)
   - Efekt: Wyższa pozycja w Local Pack

5. **Adres w footer** ⭐⭐⭐⭐
   - Czas: 10 min
   - Koszt: 0 PLN
   - Efekt: Lokalizacja widoczna dla Google

---

## 🎯 NAJWAŻNIEJSZE: GOOGLE MY BUSINESS!

**To jest 50% sukcesu lokalnego SEO!**

Bez GMB:
- ❌ Nie ma Cię na mapach Google
- ❌ Nie pojawisz się w Local Pack (top 3 z mapą)
- ❌ Brak opinii
- ❌ Brak zaufania

Z GMB:
- ✅ Jesteś na mapach Google
- ✅ Możesz być w top 3 (Local Pack)
- ✅ Opinie budują zaufanie
- ✅ Darmowa reklama

**Zrób to JUTRO!** ⚡

---

## 📋 CHECKLIST - DRUKUJ I ODHACZAJ

### **TYDZIEŃ 1:**
- [ ] Załóż Google My Business
- [ ] Zmień title/description (dodaj "Wrocław")
- [ ] Setup Google Search Console
- [ ] Dodaj adres w footer
- [ ] Poproś 5 klientów o opinię (GMB)
- [ ] Napisz pierwszy artykuł na blog

### **TYDZIEŃ 2:**
- [ ] Dodaj Schema.org markup
- [ ] Stwórz/prześlij sitemap.xml
- [ ] Setup Google Analytics
- [ ] Zarejestruj w 5 katalogach lokalnych
- [ ] Napisz drugi artykuł

### **TYDZIEŃ 3-4:**
- [ ] 10+ opinii na GMB
- [ ] 4 artykuły opublikowane
- [ ] 5 lokalnych backlinków
- [ ] Sprawdź pozycje w GSC

### **MIESIĄC 2-3:**
- [ ] 20+ opinii
- [ ] 12 artykułów
- [ ] 10 backlinków
- [ ] Top 30 dla "ubezpieczenia Wrocław"

---

## 🚀 START TUTAJ:

**DZI przeczytałeś plan.**  
**JUTRO załóż Google My Business!**  
**ZA TYDZIEŃ miej 5 opinii!**  
**ZA MIESIĄC bądź w top 50!**  
**ZA ROK bądź w top 5!**

---

## 💡 DODATKOWE TIPS:

1. **Konsystencja > jednorazowy wysiłek**
   - Lepiej 1 artykuł/tydzień przez rok niż 50 artykułów raz

2. **Jakość > ilość**
   - 1 dobry backlink > 10 złych
   - 10 prawdziwych opinii > 100 fałszywych

3. **Lokalizacja, lokalizacja, lokalizacja**
   - Wrocław w title ✅
   - Wrocław w contencie ✅
   - Wrocław w GMB ✅
   - Wrocław w backlinks ✅

4. **User experience matters**
   - Szybka strona = wyższa pozycja
   - Mobile-friendly = must have
   - Czytelny content = dłuższy czas na stronie

5. **Bądź cierpliwy**
   - SEO to maraton, nie sprint
   - Pierwsze efekty: 1-3 miesiące
   - Top 3: 6-12 miesięcy
   - Ale... warto! 🚀

---

**POWODZENIA Z SEO!** 🎉

To długa droga, ale z tym planem DOJDZIESZ NA TOP! ✅
