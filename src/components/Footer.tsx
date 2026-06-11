export default function Footer() {
  return (
    <footer id="contact" role="contentinfo" style={{ background: "#0f1515", borderTop: "1px solid rgba(244,243,239,0.07)" }}>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-2" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center rounded-full" style={{ width: 40, height: 40, border: "1px solid rgba(207,145,82,0.4)" }}>
              <i className="fa-solid fa-scissors" style={{ color: "#cf9152", transform: "rotate(-45deg)" }} aria-hidden="true" />
            </div>
            <span style={{ fontFamily: "var(--font-title)", fontSize: "1.4rem", letterSpacing: ".08em", color: "#f4f3ef" }}>French Barber</span>
          </div>
          <p style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.4)", lineHeight: 1.8, maxWidth: 300, fontFamily: "var(--font-sans)" }}>
            Barbershop premium à Lagnieu, dans l&apos;Ain. Précision, style et savoir-faire artisanal — pour l&apos;homme qui exige le meilleur.
          </p>
          <div className="flex gap-3 mt-8" aria-label="Réseaux sociaux">
            {[
              { icon: "fa-instagram",  label: "Instagram", href: "#" },
              { icon: "fa-facebook-f", label: "Facebook",  href: "https://www.facebook.com/p/French-Barber-61552611964085/" },
              { icon: "fa-tiktok",     label: "TikTok",    href: "#" },
            ].map((s) => (
              <a key={s.label} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                aria-label={s.label} className="footer-soc flex items-center justify-center"
                style={{ width: 44, height: 44, textDecoration: "none" }}>
                <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Address */}
        <div data-aos="fade-up" data-aos-delay="100">
          <span className="block mb-5" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Nous Trouver</span>
          <address className="not-italic flex flex-col gap-3" style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.45)", fontFamily: "var(--font-sans)" }}>
            <p className="mb-0">Lagnieu<br />01150 — Ain, France</p>
            <a href="https://www.facebook.com/p/French-Barber-61552611964085/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#cf9152", textDecoration: "none", fontSize: ".8125rem" }}>
              <i className="fa-brands fa-facebook-f mr-2" aria-hidden="true" />Voir sur Facebook
            </a>
          </address>
        </div>

        {/* Hours */}
        <div data-aos="fade-up" data-aos-delay="200">
          <span className="block mb-5" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Horaires</span>
          <div className="flex flex-col gap-2" style={{ fontSize: ".875rem", fontFamily: "var(--font-sans)" }}>
            <div className="flex justify-between" style={{ color: "rgba(244,243,239,0.45)" }}><span>Lun – Ven</span><span>9h – 19h</span></div>
            <div className="flex justify-between" style={{ color: "rgba(244,243,239,0.45)" }}><span>Samedi</span><span>9h – 18h</span></div>
            <div className="flex justify-between" style={{ color: "rgba(244,243,239,0.25)", textDecoration: "line-through" }} aria-label="Dimanche fermé"><span>Dimanche</span><span>Fermé</span></div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(244,243,239,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="mb-0" style={{ fontSize: ".5625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,239,0.2)", fontFamily: "var(--font-sans)" }}>
            © {new Date().getFullYear()} French Barber — Lagnieu. Tous droits réservés.
          </p>
          <p className="mb-0" style={{ fontSize: ".5625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,239,0.12)", fontFamily: "var(--font-sans)" }}>
            Barbershop Premium · Ain · France
          </p>
        </div>
      </div>
    </footer>
  );
}
