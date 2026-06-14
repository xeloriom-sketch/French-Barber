"use client";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const items = [
  { name: "Coupe Classique",          price: "15€", time: "30 min" },
  { name: "Barbe",                    price: "8€",  time: "20 min" },
  { name: "Soin du Visage",           price: "10€", time: "25 min" },
  { name: "Barbe et Coupe Classique", price: "20€", time: "50 min" },
  { name: "Pack Complet",             price: "35€", time: "80 min" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Titre éditorial */}
        <div className="w-full mb-16 md:mb-20">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Investissez Dans</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.1}>Votre Image.</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.2}>Nos Tarifs.</SplitText>
          </h2>
        </div>

        {/* Grid asymétrique */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Gauche : liste des tarifs */}
          <div className="lg:col-span-7">
            {items.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.06}>
              <div className="flex items-center justify-between py-5 group"
                style={{ borderBottom: "1px solid rgba(240,237,230,.07)" }}
              >
                <div className="flex items-center gap-5">
                  <span
                    style={{ fontFamily: "var(--font-title)", fontSize: ".7rem", letterSpacing: ".1em", color: "rgba(240,237,230,.15)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-title)", fontSize: "1.35rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em" }}
                  >
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    style={{ fontFamily: "var(--font-accent)", fontSize: ".55rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.25)" }}
                  >
                    {item.time}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-title)", fontSize: "1.5rem", color: "#f0ede6", minWidth: "3.5rem", textAlign: "right" }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
              </FadeUp>
            ))}

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#booking" title="Réserver chez French Barber Lagnieu"
                style={{
                  fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700,
                  letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6",
                  textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)",
                  paddingBottom: ".3rem", transition: "border-color .3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#f0ede6")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(240,237,230,.3)")}
              >
                Réserver maintenant →
              </a>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "rgba(240,237,230,.3)", lineHeight: 1.6 }}>
                Réductions réguliers &amp; étudiants<br />disponibles au salon.
              </p>
            </div>
          </div>

          {/* Droite : photo + badge rotatif */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img
                src={`${basePath}/client-3.webp`}
                alt="Coupe réalisée chez French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)" }}>
                  French Barber · Lagnieu
                </p>
              </div>
            </div>

            {/* Badge rotatif */}
            <div className="relative flex items-center gap-4">
              <div className="w-20 h-20 pointer-events-none select-none flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite] opacity-25 fill-[#f0ede6]">
                  <path id="cpPricing" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text fontSize="6.5" letterSpacing="3" fontFamily="sans-serif">
                    <textPath href="#cpPricing">FRENCH BARBER • LAGNIEU • PREMIUM •</textPath>
                  </text>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.4)", lineHeight: 1.7 }}>
                Prix TTC · Paiement sur place
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
