export default function CTABanner() {
  return (
    <section aria-label="CTA" className="cta-strip py-16 md:py-20 px-5 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up">
        <div>
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(13,13,13,.65)", marginBottom: ".5rem", fontWeight: 600 }}>
            Prêt pour l&apos;expérience ?
          </p>
          <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(2rem,5vw,3.75rem)", color: "#0d0d0d", lineHeight: .9, textTransform: "uppercase" }}>
            Réservez Votre<br />Créneau Aujourd&apos;hui
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href="#booking" style={{ background: "#0d0d0d", color: "#f0ede6", fontFamily: "var(--font-accent)", fontSize: ".6875rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: ".9rem 2rem", display: "inline-flex", alignItems: "center", gap: ".5rem", textDecoration: "none" }}
            className="hover:bg-[#1a1a1a] transition-colors">
            Réserver en ligne <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
          </a>
          <a href="tel:+33745107401" style={{ background: "rgba(13,13,13,.15)", color: "#0d0d0d", fontFamily: "var(--font-accent)", fontSize: ".6875rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: ".875rem 1.875rem", border: "1px solid rgba(13,13,13,.3)", display: "inline-flex", alignItems: "center", gap: ".5rem", textDecoration: "none" }}>
            <i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01
          </a>
        </div>
      </div>
    </section>
  );
}
