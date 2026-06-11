import type { Metadata } from "next";
import { Bebas_Neue, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "French Barber – Barbershop Premium à Lagnieu",
  description:
    "French Barber — barbershop premium à Lagnieu (01150). Coupes de cheveux, taille de barbe, rasage au coupe-choux, soins du visage. Réservez votre expérience en ligne.",
  keywords: ["barbershop", "coupe de cheveux", "barbe", "rasage", "barbier", "Lagnieu", "Ain", "French Barber", "fade", "grooming"],
  authors: [{ name: "French Barber" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://frenchbarber-lagnieu.fr"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "French Barber – Premium Barbershop",
    description: "Barbershop premium à New York. Coupes, barbe, rasage & soins. Réservez en ligne.",
    url: "https://frenchbarber-lagnieu.fr",
    siteName: "French Barber",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "French Barber" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "French Barber – Premium Barbershop",
    description: "Barbershop premium à New York. Coupes, barbe, rasage & soins.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "French Barber",
  description: "Barbershop premium à New York.",
  url: "https://frenchbarber-lagnieu.fr",
  telephone: "+1-555-123-4567",
  email: "hello@frenchbarber-lagnieu.fr",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Gentleman's Row",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
  ],
  sameAs: [
    "https://www.instagram.com/thegentlemansclub",
    "https://www.tiktok.com/@thegentlemansclub",
    "https://www.facebook.com/thegentlemansclub",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
