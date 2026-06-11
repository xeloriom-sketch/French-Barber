export default function CTABanner() {
  return (
    <section aria-label="Appel à l'action" className="cta-strip py-16 md:py-20 px-5 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up">
        <div>
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(13,17,17,.7)", marginBottom: ".5rem", fontWeight: 600 }}>
            Prêt pour l&apos;expérience ?
          </p>
          <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(2rem,5vw,3.75rem)", color: "#0d1111", lineHeight: .9, textTransform: "uppercase" }}>
            Réservez Votre<br />Créneau Aujourd&apos;hui
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href="#booking"
            style={{ background: "#0d1111", color: "#f0ede6", fontFamily: "var(--font-accent)", fontSize: ".6875rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: ".9rem 2rem", display: "inline-flex", alignItems: "center", gap: ".5rem", textDecoration: "none", transition: "background .25s" }}
            className="hover:bg-[#171c1c]">
            Réserver en ligne <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
          </a>
          <a href="tel:+33745107401"
            style={{ background: "rgba(13,17,17,.15)", color: "#0d1111", fontFamily: "var(--font-accent)", fontSize: ".6875rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: ".875rem 1.875rem", border: "1px solid rgba(13,17,17,.3)", display: "inline-flex", alignItems: "center", gap: ".5rem", textDecoration: "none", transition: "background .25s" }}>
            <i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01
          </a>
        </div>
      </div>
    </section>
  );
}
