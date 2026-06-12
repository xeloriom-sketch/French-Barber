"use client";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const steps = [
  { num: "01", icon: "fa-calendar-plus",   title: "Réservez",         desc: "En ligne ou au 07 45 10 74 01. Choisissez prestation, jour et heure." },
  { num: "02", icon: "fa-comments",        title: "Consultation",     desc: "Votre barbier prend le temps d'écouter votre style, morphologie et attentes." },
  { num: "03", icon: "fa-wand-sparkles",   title: "La Prestation",    desc: "Coupe, barbe ou rasage — précision, produits premium, ambiance parfaite." },
  { num: "04", icon: "fa-face-smile-beam", title: "Repartez Parfait", desc: "Finition soignée, conseils d'entretien, produits adaptés. Top du top." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="w-full mb-16 md:mb-24">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Votre Expérience</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>En 4 Étapes.</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.08}>
              <div className="flex items-start gap-6 py-6"
                style={{ borderBottom: "1px solid rgba(240,237,230,.07)" }}>
                <div className="flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ width: 44, height: 44, border: "1px solid rgba(240,237,230,.1)", background: "rgba(240,237,230,.03)" }}>
                  <i className={`fa-solid ${s.icon}`} style={{ color: "rgba(240,237,230,.45)", fontSize: ".9rem" }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ fontFamily: "var(--font-title)", fontSize: ".7rem", letterSpacing: ".1em", color: "rgba(240,237,230,.15)" }}>{s.num}</span>
                    <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.35rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em" }}>{s.title}</h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.45)", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
              </FadeUp>
            ))}

            <div className="mt-10">
              <a href="#booking"
                style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem", transition: "border-color .3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#f0ede6")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(240,237,230,.3)")}>
                Réserver maintenant →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img src={`${basePath}/client photo.png`} alt="Expérience French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)" }}>French Barber · Lagnieu</p>
              </div>
            </div>
            <div className="relative flex items-center gap-4">
              <div className="w-20 h-20 pointer-events-none select-none flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite] opacity-25 fill-[#f0ede6]">
                  <path id="cpProcess" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text fontSize="6.5" letterSpacing="3" fontFamily="sans-serif">
                    <textPath href="#cpProcess">FRENCH BARBER • LAGNIEU • PREMIUM •</textPath>
                  </text>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.4)", lineHeight: 1.7 }}>
                Satisfaction garantie<br />à chaque visite.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
