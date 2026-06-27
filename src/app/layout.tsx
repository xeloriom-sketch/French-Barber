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

const BASE = "https://frenchbarber01.com";

export const metadata: Metadata = {
  title: "Coiffeur & Barbershop Homme à Lagnieu (01150) | French Barber",
  description:
    "French Barber — votre coiffeur et barbershop homme à Lagnieu (Ain, 01150). Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. ☎ 07 45 10 74 01.",
  keywords: [
    "coiffeur Lagnieu", "coiffeur homme Lagnieu", "coiffure Lagnieu",
    "salon de coiffure Lagnieu", "salon coiffure homme Lagnieu",
    "coiffeur 01150", "coiffeur Ain", "coiffure homme Ain",
    "coiffeur pas cher Lagnieu", "meilleur coiffeur Lagnieu",
    "coiffeur ouvert dimanche Lagnieu", "coiffeur dimanche Ain",
    "coupe cheveux Lagnieu", "coupe homme Lagnieu", "coupe cheveux homme Ain",
    "coupe dégradé Lagnieu", "coupe fondu Lagnieu",
    "coiffeur Ambérieu-en-Bugey", "coiffeur Béligneux", "coiffeur Pont-d'Ain",
    "coiffeur Saint-Rambert-en-Bugey", "coiffeur Loyettes",
    "barbershop Lagnieu", "barbier Lagnieu", "barbier Ain 01150",
    "barbershop 01150", "barbershop premium Ain", "barbershop ouvert dimanche Ain",
    "French Barber Lagnieu", "coiffeur barbier Lagnieu",
    "barbe Lagnieu", "taille de barbe Lagnieu", "barbe pas chère Ain",
    "coiffeur homme pas cher Lagnieu", "barbier proche de moi Lagnieu",
    "coiffeur proche de moi Lagnieu", "où se couper les cheveux Lagnieu",
    "réservation coiffeur Lagnieu", "coiffeur rendez-vous Lagnieu",
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
    title: "Coiffeur & Barbershop Homme à Lagnieu | French Barber",
    description: "Votre coiffeur homme à Lagnieu (Ain, 01150). Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. 36 route du port. ☎ 07 45 10 74 01",
    url: BASE,
    siteName: "French Barber",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/client-1.webp`, width: 1080, height: 1080, alt: "French Barber – Coiffeur & Barbershop Homme à Lagnieu (Ain)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coiffeur & Barbershop Homme à Lagnieu | French Barber",
    description: "Votre coiffeur homme à Lagnieu (Ain, 01150). Coupe 15€, barbe 8€, pack complet 35€. Ouvert 7j/7 dont dimanche. ☎ 07 45 10 74 01",
    images: [`${BASE}/client-1.webp`],
  },
};

const jsonLdSalon = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "LocalBusiness"],
  "@id": `${BASE}/#salon`,
  name: "French Barber",
  alternateName: [
    "French Barber Lagnieu",
    "Coiffeur Lagnieu",
    "Barbershop Lagnieu",
    "Barbier Lagnieu",
    "Coiffeur Homme Lagnieu",
    "Salon de coiffure Lagnieu",
  ],
  description: "Coiffeur et barbershop homme premium à Lagnieu (Ain, 01150). Coupe homme, taille de barbe, soin du visage, pack complet. Ouvert 7 jours sur 7 dont le dimanche. Accessible depuis Ambérieu-en-Bugey, Béligneux, Pont-d'Ain et tout l'Ain.",
  slogan: "Votre coiffeur et barbershop homme à Lagnieu",
  url: BASE,
  telephone: "+33745107401",
  email: "Frenchbarber212@gmail.com",
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  image: `${BASE}/client-1.webp`,
  logo: `${BASE}/favicon.svg`,
  hasMap: "https://maps.app.goo.gl/u2vVjvnwhrU4e5Te9",
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
  areaServed: [
    { "@type": "City", "name": "Lagnieu", "sameAs": "https://www.wikidata.org/wiki/Q1150523" },
    { "@type": "City", "name": "Ambérieu-en-Bugey" },
    { "@type": "City", "name": "Béligneux" },
    { "@type": "City", "name": "Pont-d'Ain" },
    { "@type": "City", "name": "Saint-Rambert-en-Bugey" },
    { "@type": "City", "name": "Lhuis" },
    { "@type": "City", "name": "Loyettes" },
    { "@type": "City", "name": "Bregnier-Cordon" },
  ],
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
    "https://www.instagram.com/french_barber_015",
    "https://www.snapchat.com/add/frenchbarber",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations coiffure et barbershop — French Barber Lagnieu",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coupe Classique", description: "Shampoing, coupe ciseau ou tondeuse, finition soignée. Coiffeur homme à Lagnieu. Durée : 30 min." }, price: "15", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taille de Barbe", description: "Mise en forme précise avec serviette chaude et baume hydratant. Barbier à Lagnieu. Durée : 20 min." }, price: "8", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soin du Visage", description: "Masque purifiant aux actifs botaniques, hydratation profonde. Durée : 25 min." }, price: "10", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coupe + Barbe", description: "Coupe homme complète + taille de barbe. Coiffeur et barbier à Lagnieu en une séance. Durée : 50 min." }, price: "20", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pack Complet", description: "Coupe + barbe + soin du visage. L'expérience French Barber totale. Coiffeur premium Lagnieu. Durée : 80 min." }, price: "35", priceCurrency: "EUR" },
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
      name: "Quel est le meilleur coiffeur homme à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "French Barber est le coiffeur et barbershop homme de référence à Lagnieu (01150). Noté 4,9/5 sur Google avec plus de 47 avis, notre salon propose coupes homme, dégradés, taille de barbe et soins du visage. Situé au 36 route du port, Lagnieu." },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un coiffeur à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui ! French Barber est votre coiffeur homme à Lagnieu (Ain, 01150), au 36 route du port. Ouvert 7j/7 dont le dimanche, sans rendez-vous possible. Appelez le 07 45 10 74 01." },
    },
    {
      "@type": "Question",
      name: "French Barber est-il un coiffeur ou un barbershop ?",
      acceptedAnswer: { "@type": "Answer", text: "French Barber à Lagnieu est à la fois un salon de coiffure homme et un barbershop premium. Nos coiffeurs spécialisés réalisent coupes classiques, dégradés et coupes tendance, et nos barbiers assurent la taille et l'entretien de la barbe." },
    },
    {
      "@type": "Question",
      name: "Quelles villes sont proches du coiffeur French Barber à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "French Barber accueille les clients de Lagnieu et des communes voisines : Ambérieu-en-Bugey, Béligneux, Pont-d'Ain, Saint-Rambert-en-Bugey, Loyettes, Lhuis et tout l'Ain (01150). Facilement accessible en voiture." },
    },
    {
      "@type": "Question",
      name: "Combien coûte une coupe de cheveux à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "Chez French Barber à Lagnieu, la coupe homme est à 15€ (30 min). La taille de barbe est à 8€, le soin du visage à 10€, la coupe + barbe à 20€, et le pack complet (coupe + barbe + soin) à 35€." },
    },
    {
      "@type": "Question",
      name: "Le coiffeur French Barber est-il ouvert le dimanche à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui ! French Barber est ouvert le dimanche de 10h à 19h à Lagnieu. C'est le seul coiffeur et barbershop homme ouvert le dimanche dans la zone de Lagnieu (Ain, 01150)." },
    },
    {
      "@type": "Question",
      name: "Faut-il réserver à l'avance chez French Barber ?",
      acceptedAnswer: { "@type": "Answer", text: "La réservation est recommandée pour garantir votre créneau. Nous acceptons également les clients sans rendez-vous selon disponibilités. Réservez via notre site ou appelez le 07 45 10 74 01." },
    },
    {
      "@type": "Question",
      name: "Quels sont les horaires du coiffeur French Barber à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "French Barber est ouvert du lundi au vendredi de 9h à 19h, le samedi de 9h à 18h, et le dimanche de 10h à 19h. 7 jours sur 7 à Lagnieu (01150)." },
    },
    {
      "@type": "Question",
      name: "Peut-on offrir une séance de coiffure en cadeau à Lagnieu ?",
      acceptedAnswer: { "@type": "Answer", text: "Absolument ! French Barber propose des bons cadeaux pour une coupe, une prestation barbe ou un pack complet. Contactez-nous au 07 45 10 74 01 ou à Frenchbarber212@gmail.com." },
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="French Barber" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Lagnieu" />
        <meta name="geo.position" content="45.909;5.346" />
        <meta name="ICBM" content="45.909, 5.346" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
