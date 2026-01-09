import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
  title: "Ubezpieczenia Wrocław - RS Ubezpieczenia | OC, AC, na Życie | 35+ Towarzystw",
  description: "Profesjonalna agencja ubezpieczeniowa we Wrocławiu. Porównaj oferty 35+ towarzystw. Ubezpieczenia OC, AC, na życie, turystyczne, firmowe. Wrocław i okolice. Zaoszczędź nawet kilkaset złotych rocznie! ☎️ 660 726 743",
  keywords: "ubezpieczenia Wrocław, ubezpieczenie OC Wrocław, ubezpieczenie AC Wrocław, agent ubezpieczeniowy Wrocław, porównywarka ubezpieczeń Wrocław, RS Ubezpieczenia, ubezpieczenia samochodowe Wrocław, ubezpieczenie na życie Wrocław, ubezpieczenie mieszkania Wrocław, ubezpieczenie firmy Wrocław",
  authors: [{ name: "RS Ubezpieczenia" }],
  openGraph: {
    title: "Ubezpieczenia Wrocław - RS Ubezpieczenia | OC, AC, na Życie",
    description: "Profesjonalna agencja ubezpieczeniowa we Wrocławiu. Porównaj oferty 35+ towarzystw. Najlepsze ceny, profesjonalna obsługa. ☎️ 660 726 743",
    type: "website",
    locale: "pl_PL",
    siteName: "RS Ubezpieczenia",
    url: "https://rsubezpieczenia.pl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://rsubezpieczenia.pl",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      "streetAddress": "ul. Szybowcowa 25",
      "addressLocality": "Wrocław",
      "postalCode": "54-130",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1079,
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
    },
    "sameAs": [
      "https://www.facebook.com/rsubezpieczenia",
      "https://www.linkedin.com/company/rsubezpieczenia"
    ]
  };

  return (
    <html lang="pl" className="font-sans">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
