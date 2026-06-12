"use client";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

export default function CTABanner() {
  return (
    <section aria-label="CTA" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-28 overflow-hidden font-sans select-none"
      style={{ borderTop: "1px solid rgba(240,237,230,.06)", borderBottom: "1px solid rgba(240,237,230,.06)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center" data-aos="fade-up">

          <div className="lg:col-span-7">
            <h2 className="text-left text-white uppercase font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
              <SplitText tag="span" style={{ display: "block" }} delay={0}>Réservez Votre</SplitText>
              <SplitText tag="span" style={{ display: "block" }} delay={0.12}>Créneau Aujourd&apos;hui.</SplitText>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col" style={{ gap: "2.5rem" }}>
            <FadeUp delay={0.2}>
              <a href="#booking"
                style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem", transition: "border-color .3s", display: "inline-block", whiteSpace: "nowrap" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#f0ede6")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(240,237,230,.3)")}>
                Réserver en ligne →
              </a>
            </FadeUp>
            <FadeUp delay={0.35}>
              <a href="tel:+33745107401"
                style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.45)", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.15)", paddingBottom: ".3rem", transition: "border-color .3s, color .3s", display: "inline-block", whiteSpace: "nowrap" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(240,237,230,.4)"; e.currentTarget.style.color = "#f0ede6"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,237,230,.15)"; e.currentTarget.style.color = "rgba(240,237,230,.45)"; }}>
                07 45 10 74 01 →
              </a>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
