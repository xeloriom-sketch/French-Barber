export default function Footer() {
  return (
    <footer id="contact" role="contentinfo" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(240,237,230,.06)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(240,237,230,.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fa-solid fa-scissors" style={{ color: "rgba(240,237,230,.6)", transform: "rotate(-45deg)", fontSize: ".8rem" }} aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "var(--font-title)", fontSize: "1.2rem", letterSpacing: ".1em", color: "#f0ede6" }}>FRENCH</span>
              <span style={{ fontFamily: "var(--font-title)", fontSize: ".8rem", letterSpacing: ".2em", color: "rgba(240,237,230,.45)" }}>BARBER</span>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem", color: "rgba(240,237,230,.4)", lineHeight: 1.8, maxWidth: 300 }} className="mb-6">
            Barbershop premium à Lagnieu, dans l&apos;Ain. Coupe homme, barbe, rasage traditionnel — avec le souci du détail.
          </p>
          <div className="flex items-center gap-2 mb-6">
            <span style={{ color: "rgba(240,237,230,.4)", fontSize: ".85rem", letterSpacing: ".05em" }}>★★★★★</span>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.35)", fontWeight: 600 }}>4.9/5 · 47 avis Google</span>
          </div>
          <div className="flex gap-3" aria-label="Réseaux sociaux">
            <a href="https://www.facebook.com/p/French-Barber-61552611964085/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-soc">
              <i className="fa-brands fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram" className="footer-soc">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
            <a href="#" aria-label="TikTok" className="footer-soc">
              <i className="fa-brands fa-tiktok" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="80">
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(240,237,230,.35)", fontWeight: 600, marginBottom: "1.25rem" }}>Contact</p>
          <address className="not-italic flex flex-col gap-3" style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem", color: "rgba(240,237,230,.5)" }}>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-0.5" style={{ color: "rgba(240,237,230,.4)", fontSize: ".75rem", width: 14 }} aria-hidden="true" />
              <span>36 route du port<br />Lagnieu, 01150<br />Ain — France</span>
            </div>
            <a href="tel:+33745107401" className="flex items-center gap-3 hover:text-[#f0ede6] transition-colors" style={{ textDecoration: "none", color: "rgba(240,237,230,.5)" }}>
              <i className="fa-solid fa-phone" style={{ color: "rgba(240,237,230,.4)", fontSize: ".75rem", width: 14 }} aria-hidden="true" />07 45 10 74 01
            </a>
            <a href="mailto:frenchbarber01@gmail.com" className="flex items-center gap-3 hover:text-[#f0ede6] transition-colors" style={{ textDecoration: "none", color: "rgba(240,237,230,.5)", fontSize: ".8125rem" }}>
              <i className="fa-solid fa-envelope" style={{ color: "rgba(240,237,230,.4)", fontSize: ".75rem", width: 14 }} aria-hidden="true" />frenchbarber01@gmail.com
            </a>
          </address>
        </div>

        {/* Hours */}
        <div data-aos="fade-up" data-aos-delay="160">
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(240,237,230,.35)", fontWeight: 600, marginBottom: "1.25rem" }}>Horaires</p>
          <div className="flex flex-col gap-2" style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem" }}>
            {[["Lundi","9h – 19h"],["Mardi","9h – 19h"],["Mercredi","9h – 19h"],["Jeudi","9h – 19h"],["Vendredi","9h – 19h"],["Samedi","9h – 18h"]].map(([day, h]) => (
              <div key={day} className="flex justify-between" style={{ color: "rgba(240,237,230,.5)" }}><span>{day}</span><span>{h}</span></div>
            ))}
            <div className="flex justify-between" style={{ color: "rgba(240,237,230,.2)", textDecoration: "line-through" }} aria-label="Dimanche fermé"><span>Dimanche</span><span>Fermé</span></div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(240,237,230,.05)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".5625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.2)" }}>
            © {new Date().getFullYear()} French Barber — 36 route du port, Lagnieu 01150. Tous droits réservés.
          </p>
          <a href="https://www.google.com/maps/search/36+route+du+port+Lagnieu+01150" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-accent)", fontSize: ".5625rem", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(240,237,230,.35)", textDecoration: "none" }}>
            <i className="fa-solid fa-diamond-turn-right mr-1" style={{ fontSize: ".55rem" }} aria-hidden="true" />Nous trouver sur Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
