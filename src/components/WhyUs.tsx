import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const reasons = [
  { icon: "fa-medal",          title: "Produits Haut de Gamme",   desc: "Cires, huiles de barbe, soins post-rasage — exclusivement des produits professionnels." },
  { icon: "fa-user-tie",       title: "Barbiers Expérimentés",    desc: "Formés aux techniques modernes et traditionnelles. Ciseau, tondeuse et coupe-choux maîtrisés." },
  { icon: "fa-calendar-check", title: "Réservation Facile",       desc: "En ligne 24h/24 ou au 07 45 10 74 01. Confirmation dans les plus brefs délais." },
  { icon: "fa-face-laugh-beam",title: "Satisfaction Garantie",    desc: "Pas satisfait ? On refait. Votre satisfaction est notre priorité absolue." },
  { icon: "fa-location-dot",   title: "Idéalement Situé",         desc: "36 route du port, Lagnieu — accessible depuis Ambérieu-en-Bugey et toute la région." },
  { icon: "fa-clock",          title: "Horaires Étendus",          desc: "Lun–Ven 9h–19h · Sam 9h–18h. Créneaux possibles sur demande." },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="w-full mb-16 md:mb-24">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Ce Qui Nous</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>Distingue.</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            {reasons.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.07}>
              <div className="flex items-start gap-6 py-5"
                style={{ borderBottom: "1px solid rgba(240,237,230,.07)" }}>
                <div className="flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ width: 40, height: 40, border: "1px solid rgba(240,237,230,.1)", background: "rgba(240,237,230,.03)" }}>
                  <i className={`fa-solid ${r.icon}`} style={{ color: "rgba(240,237,230,.45)", fontSize: ".85rem" }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.3rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: ".35rem" }}>{r.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.45)", lineHeight: 1.75 }}>{r.desc}</p>
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: ".7rem", letterSpacing: ".1em", color: "rgba(240,237,230,.12)", flexShrink: 0, alignSelf: "flex-start", marginTop: ".25rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              </FadeUp>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img src={`${basePath}/client photo 2.png`} alt="Qualité French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)" }}>French Barber · Lagnieu</p>
              </div>
            </div>
            <div className="relative flex items-center gap-4">
              <div className="w-20 h-20 pointer-events-none select-none flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite] opacity-25 fill-[#f0ede6]">
                  <path id="cpWhy" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text fontSize="6.5" letterSpacing="3" fontFamily="sans-serif">
                    <textPath href="#cpWhy">FRENCH BARBER • LAGNIEU • PREMIUM •</textPath>
                  </text>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.4)", lineHeight: 1.7 }}>
                L&apos;excellence artisanale<br />au cœur de Lagnieu.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
