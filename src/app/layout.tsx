import type { Metadata } from "next";
import { Bebas_Neue, Inter, Syne } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "French Barber – Barbershop & Coiffeur à Lagnieu (01150)",
  description:
    "French Barber, votre barbershop premium au 36 route du port à Lagnieu (Ain, 01150). Coupe homme, taille de barbe, rasage au coupe-choux. Réservez au 07 45 10 74 01.",
  keywords: [
    "barbershop Lagnieu", "coiffeur barbier Lagnieu", "coupe homme Lagnieu",
    "barbe Lagnieu", "rasage Lagnieu", "French Barber Lagnieu",
    "barbier Ain 01150", "coupe cheveux homme Ain",
    "barbershop 01150", "coiffeur homme Ambérieu",
  ],
  authors: [{ name: "French Barber" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://xeloriom-sketch.github.io/French-Barber"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "French Barber – Barbershop Premium à Lagnieu",
    description: "Coupe homme, barbe, rasage au coupe-choux. 36 route du port, Lagnieu (01150). ☎ 07 45 10 74 01",
    url: "https://xeloriom-sketch.github.io/French-Barber",
    siteName: "French Barber",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/French-Barber/og-image.jpg", width: 1200, height: 630, alt: "French Barber Lagnieu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "French Barber – Barbershop Premium à Lagnieu",
    description: "Coupe, barbe, rasage. 36 route du port, Lagnieu (01150). ☎ 07 45 10 74 01",
    images: ["/French-Barber/og-image.jpg"],
  },
};

const jsonLdSalon = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
    "@id": "https://xeloriom-sketch.github.io/French-Barber/#salon",
    name: "French Barber",
    description: "Barbershop premium à Lagnieu, spécialisé en coupe homme, taille de barbe et rasage traditionnel au coupe-choux.",
    url: "https://xeloriom-sketch.github.io/French-Barber",
    telephone: "+33745107401",
    email: "frenchbarber01@gmail.com",
    priceRange: "€€",
    image: "https://xeloriom-sketch.github.io/French-Barber/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 route du port",
      addressLocality: "Lagnieu",
      postalCode: "01150",
      addressCountry: "FR",
      addressRegion: "Ain",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.909,
      longitude: 5.346,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/p/French-Barber-61552611964085/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services French Barber",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coupe Classique" }, price: "25", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taille de Barbe" }, price: "15", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rasage au Coupe-Choux" }, price: "20", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coupe + Barbe" }, price: "35", priceCurrency: "EUR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pack Complet" }, price: "55", priceCurrency: "EUR" },
      ],
    },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Faut-il réserver à l'avance chez French Barber ?", acceptedAnswer: { "@type": "Answer", text: "La réservation est recommandée pour garantir votre créneau, mais nous accueillons également les clients sans rendez-vous selon nos disponibilités." } },
    { "@type": "Question", name: "Où se trouve French Barber à Lagnieu ?", acceptedAnswer: { "@type": "Answer", text: "French Barber est situé au 36 route du port, 01150 Lagnieu, dans l'Ain." } },
    { "@type": "Question", name: "Quels sont les horaires de French Barber ?", acceptedAnswer: { "@type": "Answer", text: "Nous sommes ouverts du lundi au vendredi de 9h à 19h et le samedi de 9h à 18h." } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable} ${syne.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSalon) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Lagnieu" />
        <meta name="geo.position" content="45.909;5.346" />
        <meta name="ICBM" content="45.909, 5.346" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
