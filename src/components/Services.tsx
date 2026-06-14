"use client";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  { icon: "fa-scissors",            name: "Coupe Classique",          price: "15€", time: "30 min", desc: "Shampoing, coupe ciseau ou tondeuse, finition soignée au rasoir." },
  { icon: "fa-face-smile",          name: "Barbe",                    price: "8€",  time: "20 min", desc: "Mise en forme précise avec serviette chaude et baume hydratant." },
  { icon: "fa-leaf",                name: "Soin du Visage",           price: "10€", time: "25 min", desc: "Masque purifiant aux actifs botaniques, hydratation profonde." },
  { icon: "fa-wand-magic-sparkles", name: "Barbe et Coupe Classique", price: "20€", time: "50 min", desc: "Le duo parfait : coupe complète + taille de barbe en une séance." },
  { icon: "fa-crown",               name: "Pack Complet",             price: "35€", time: "80 min", desc: "Coupe + barbe + soin. L'expérience French Barber totale." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Titre éditorial pleine largeur */}
        <div className="w-full mb-16 md:mb-20">
          <h2 className="text-left text-white uppercase font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title), 'Impact', 'Arial Black', sans-serif" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Expertise &amp; Savoir-Faire</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.1}>Au Service</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.2}>De Votre Style.</SplitText>
          </h2>
        </div>

        {/* Grid asymétrique */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Gauche : liste des services */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s, i) => (
                <FadeUp key={s.name} delay={i * 0.07}>
                <div
                  className="border border-[#f0ede6]/08 p-6 flex flex-col gap-3 group transition-all duration-300 hover:border-[#f0ede6]/20 hover:bg-white/[0.02]">
                  <div className="flex items-center justify-between">
                    <i className={`fa-solid ${s.icon} text-[#f0ede6]/50`} style={{ fontSize: "1rem" }} aria-hidden="true" />
                    <span style={{ fontFamily: "var(--font-title)", fontSize: ".75rem", letterSpacing: ".1em", color: "rgba(240,237,230,.15)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.25rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em" }}>{s.name}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.45)", lineHeight: 1.7, flexGrow: 1 }}>{s.desc}</p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }}>
                    <span style={{ fontFamily: "var(--font-title)", fontSize: "1.5rem", color: "#f0ede6" }}>{s.price}</span>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: ".575rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.25)" }}>{s.time}</span>
                  </div>
                </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Droite : photo client + badge rotatif */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            {/* Image */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img src={`${basePath}/client-1.webp`} alt="Coupe réalisée chez French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "var(--font-acc)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)" }}>French Barber · Lagnieu</p>
              </div>
            </div>

            {/* Badge rotatif */}
            <div className="relative flex items-center gap-4">
              <div className="w-20 h-20 pointer-events-none select-none flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite] opacity-25 fill-[#f0ede6]">
                  <path id="cpServices" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text fontSize="6.5" letterSpacing="3" fontFamily="sans-serif">
                    <textPath href="#cpServices">FRENCH BARBER • LAGNIEU • PREMIUM •</textPath>
                  </text>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.4)", lineHeight: 1.7 }}>
                Réduction réguliers &amp; étudiants<br />disponible au salon.
              </p>
            </div>

            <a href="#booking" title="Réserver chez French Barber Lagnieu"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem", transition: "border-color .3s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#f0ede6")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(240,237,230,.3)")}>
              Réserver maintenant →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
