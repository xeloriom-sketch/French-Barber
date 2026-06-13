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

const BASE = "https://xeloriom-sketch.github.io/French-Barber";

export const metadata: Metadata = {
  title: "French Barber – Barbershop & Coiffeur à Lagnieu (01150)",
  description:
    "French Barber — barbershop premium à Lagnieu (Ain, 01150). Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. ☎ 07 45 10 74 01.",
  keywords: [
    "barbershop Lagnieu", "coiffeur barbier Lagnieu", "coupe homme Lagnieu",
    "barbe Lagnieu", "French Barber Lagnieu", "barbier Ain 01150",
    "coupe cheveux homme Ain", "barbershop 01150",
    "coiffeur homme Ambérieu-en-Bugey", "meilleur barbier Lagnieu",
    "salon coiffure homme Lagnieu", "coiffeur ouvert dimanche Lagnieu",
    "barbershop ouvert dimanche Ain", "barbier dimanche 01150",
    "coupe 15 euros Lagnieu", "barbe pas chère Ain",
    "coiffeur homme pas cher Lagnieu", "barbershop premium Ain",
    "où se couper les cheveux Lagnieu", "barbier proche de moi Lagnieu",
  ],
  authors: [{ name: "French Barber" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  metadataBase: new URL(BASE),
  alternates: { canonical: "/" },
  openGraph: {
    title: "French Barber – Barbershop Premium à Lagnieu",
    description: "Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. 36 route du port, Lagnieu (01150). ☎ 07 45 10 74 01",
    url: BASE,
    siteName: "French Barber",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/French-Barber/og-image.jpg", width: 1200, height: 630, alt: "French Barber – Barbershop Premium Lagnieu Ain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "French Barber – Barbershop Premium à Lagnieu",
    description: "Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. 36 route du port, Lagnieu (01150). ☎ 07 45 10 74 01",
    images: ["/French-Barber/og-image.jpg"],
  },
};

const jsonLdSalon = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${BASE}/#salon`,
  name: "French Barber",
  description: "Barbershop premium à Lagnieu (Ain, 01150). Coupe homme, barbe, soin du visage, pack complet. Ouvert 7 jours sur 7 dont le dimanche de 10h à 19h.",
  url: BASE,
  telephone: "+33745107401",
  email: "frenchbarber01@gmail.com",
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  image: `${BASE}/og-image.jpg`,
  logo: `${BASE}/og-image.jpg`,
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
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "19:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/p/French-Barber-61552611964085/",
    "https://www.instagram.com/FrenchF_barber_015",
    "https://www.snapchat.com/add/frenchbarber",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations French Barber",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coupe Classique", description: "Shampoing, coupe ciseau ou tondeuse, finition soignée. Durée : 30 min." }, price: "15", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barbe", description: "Mise en forme précise avec serviette chaude et baume hydratant. Durée : 20 min." }, price: "8", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soin du Visage", description: "Masque purifiant aux actifs botaniques, hydratation profonde. Durée : 25 min." }, price: "10", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barbe et Coupe Classique", description: "Coupe complète + taille de barbe en une séance. Durée : 50 min." }, price: "20", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pack Complet", description: "Coupe + barbe + soin du visage. L'expérience French Barber totale. Durée : 80 min." }, price: "35", priceCurrency: "EUR" },
    ],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "French Barber",
  url: BASE,
  description: "Site officiel de French Barber, barbershop premium à Lagnieu, Ain (01150). Tarifs, horaires, réservation en ligne.",
  inLanguage: "fr-FR",
  publisher: { "@id": `${BASE}/#salon` },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Faut-il réserver à l'avance chez French Barber ?",
      acceptedAnswer: { "@type": "Answer", text: "La réservation est recommandée pour garantir votre créneau. Nous acceptons également les clients sans rendez-vous selon disponibilités. Appelez le 07 45 10 74 01." },
    },
    {
      "@type": "Question",
      name: "Où se trouve French Barber à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "French Barber est situé au 36 route du port, 01150 Lagnieu, dans l'Ain. Facilement accessible depuis Ambérieu-en-Bugey et les communes voisines." },
    },
    {
      "@type": "Question",
      name: "Quels sont les horaires de French Barber ?",
      acceptedAnswer: { "@type": "Answer", text: "Nous sommes ouverts du lundi au vendredi de 9h à 19h, le samedi de 9h à 18h, et le dimanche de 10h à 19h." },
    },
    {
      "@type": "Question",
      name: "French Barber est-il ouvert le dimanche ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui ! French Barber est ouvert le dimanche de 10h à 19h." },
    },
    {
      "@type": "Question",
      name: "Combien coûte une coupe chez French Barber ?",
      acceptedAnswer: { "@type": "Answer", text: "La coupe classique est à 15€ (30 min), la barbe à 8€ (20 min), le soin du visage à 10€ (25 min), la coupe + barbe à 20€ (50 min), et le pack complet à 35€ (80 min)." },
    },
    {
      "@type": "Question",
      name: "Quels modes de paiement accepte French Barber ?",
      acceptedAnswer: { "@type": "Answer", text: "Nous acceptons les espèces et les paiements par carte bancaire (CB, Visa, Mastercard). Pas de chèque." },
    },
    {
      "@type": "Question",
      name: "Coupez-vous les cheveux des enfants ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui, nous accueillons les enfants à partir de 5 ans avec un tarif réduit. Contactez-nous pour plus d'informations." },
    },
    {
      "@type": "Question",
      name: "Peut-on offrir une séance en bon cadeau ?",
      acceptedAnswer: { "@type": "Answer", text: "Absolument ! Nous proposons des bons cadeaux. Contactez-nous au 07 45 10 74 01 ou à frenchbarber01@gmail.com pour les commander." },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable} ${syne.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSalon) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <link rel="icon" href="/French-Barber/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/French-Barber/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="sitemap" type="application/xml" href="/French-Barber/sitemap.xml" />
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Lagnieu" />
        <meta name="geo.position" content="45.909;5.346" />
        <meta name="ICBM" content="45.909, 5.346" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
