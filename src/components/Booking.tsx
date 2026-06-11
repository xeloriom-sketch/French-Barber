"use client";
import { useState } from "react";

const inp = {
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(240,237,230,.1)",
  color: "#f0ede6", width: "100%",
  padding: ".875rem 1.125rem",
  fontFamily: "var(--font-sans)", fontSize: ".875rem",
  outline: "none", borderRadius: 0,
  WebkitAppearance: "none" as const,
  transition: "border-color .3s, background .3s",
};

export default function Booking() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const g = (n: string) => ({ ...inp, borderColor: focused === n ? "#c8864a" : "rgba(240,237,230,.1)", background: focused === n ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.04)" });
  const f = (n: string) => ({ onFocus: () => setFocused(n), onBlur: () => setFocused(null) });
  const lbl = { fontSize: ".625rem", letterSpacing: ".18em", textTransform: "uppercase" as const, color: "rgba(240,237,230,.4)", display: "block", marginBottom: ".5rem", fontFamily: "var(--font-accent)", fontWeight: 600 };

  return (
    <section id="booking" aria-labelledby="booking-h"
      style={{ background: "radial-gradient(ellipse at 20% 50%, #1c2828 0%, #141c1c 55%, #0d1111 100%)", padding: "6rem 0" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left */}
          <div data-aos="fade-up">
            <span className="section-label mb-5">Réservez Votre Fauteuil</span>
            <h2 id="booking-h" className="section-title mb-6">
              Prendre<br /><span className="text-gradient">Rendez-vous</span>
            </h2>
            <div className="hr-gold mb-7" />
            <p className="mb-7" style={{ fontSize: ".9rem", color: "rgba(240,237,230,.5)", lineHeight: 1.85, fontFamily: "var(--font-sans)" }}>
              Réservez en ligne ou appelez-nous. Nous confirmons rapidement par téléphone ou SMS.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: "fa-location-dot", label: "Adresse",   val: "36 route du port, Lagnieu 01150" },
                { icon: "fa-phone",        label: "Téléphone", val: "07 45 10 74 01", href: "tel:+33745107401" },
                { icon: "fa-envelope",     label: "Email",     val: "frenchbarber01@gmail.com", href: "mailto:frenchbarber01@gmail.com" },
                { icon: "fa-clock",        label: "Horaires",  val: "Lun–Ven 9h–19h · Sam 9h–18h" },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 mt-0.5" style={{ width: 34, height: 34, border: "1px solid rgba(200,134,74,.25)", color: "#c8864a" }}>
                    <i className={`fa-solid ${item.icon} text-xs`} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: ".575rem", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,230,.3)", marginBottom: ".2rem", fontFamily: "var(--font-accent)", fontWeight: 600 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: ".875rem", color: "rgba(240,237,230,.7)", fontFamily: "var(--font-sans)", textDecoration: "none" }} className="hover:text-[#c8864a] transition-colors">{item.val}</a>
                    ) : (
                      <p style={{ fontSize: ".875rem", color: "rgba(240,237,230,.7)", fontFamily: "var(--font-sans)", margin: 0 }}>{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="map-placeholder" style={{ height: "180px" }} aria-label="French Barber — 36 route du port, Lagnieu 01150">
              <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
                <i className="fa-solid fa-location-dot" style={{ color: "#c8864a", fontSize: "1.5rem" }} aria-hidden="true" />
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.35)" }}>
                  36 route du port<br />Lagnieu, 01150 — Ain
                </p>
                <a href="https://www.google.com/maps/search/36+route+du+port+Lagnieu+01150" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: ".55rem", padding: ".5rem 1rem", marginTop: ".5rem" }}>
                  <i className="fa-solid fa-diamond-turn-right text-[9px]" aria-hidden="true" />Itinéraire
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-up" data-aos-delay="100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 text-center p-10" style={{ background: "rgba(200,134,74,.06)", border: "1px solid rgba(200,134,74,.2)" }}>
                <div style={{ width: 64, height: 64, background: "rgba(200,134,74,.15)", border: "1px solid rgba(200,134,74,.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa-solid fa-check" style={{ color: "#c8864a", fontSize: "1.5rem" }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: "var(--font-title)", fontSize: "2rem", color: "#f0ede6", textTransform: "uppercase" }}>Demande Envoyée !</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem", color: "rgba(240,237,230,.55)", lineHeight: 1.7 }}>
                  Nous vous confirmons votre rendez-vous dans les plus brefs délais par téléphone ou SMS.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: ".65rem" }}>Nouvelle réservation</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate aria-label="Formulaire de réservation" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label htmlFor="bk-name" style={lbl}>Prénom &amp; Nom <span style={{ color: "#c8864a" }} aria-hidden="true">*</span></label><input type="text" id="bk-name" name="name" placeholder="Jean Dupont" required autoComplete="name" style={g("name")} {...f("name")} /></div>
                  <div><label htmlFor="bk-phone" style={lbl}>Téléphone <span style={{ color: "#c8864a" }} aria-hidden="true">*</span></label><input type="tel" id="bk-phone" name="phone" placeholder="06 00 00 00 00" required autoComplete="tel" style={g("phone")} {...f("phone")} /></div>
                </div>
                <div>
                  <label htmlFor="bk-service" style={lbl}>Prestation <span style={{ color: "#c8864a" }} aria-hidden="true">*</span></label>
                  <select id="bk-service" name="service" required style={g("service")} {...f("service")}>
                    <option value="" disabled>Choisissez une prestation…</option>
                    <option>Coupe Classique — 25€</option>
                    <option>Taille de Barbe — 15€</option>
                    <option>Rasage au Coupe-Choux — 20€</option>
                    <option>Coupe + Barbe — 35€</option>
                    <option>Soin du Visage — 20€</option>
                    <option>Pack Complet — 55€</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label htmlFor="bk-date" style={lbl}>Date <span style={{ color: "#c8864a" }} aria-hidden="true">*</span></label><input type="date" id="bk-date" name="date" required style={g("date")} {...f("date")} /></div>
                  <div>
                    <label htmlFor="bk-time" style={lbl}>Heure <span style={{ color: "#c8864a" }} aria-hidden="true">*</span></label>
                    <select id="bk-time" name="time" required style={g("time")} {...f("time")}>
                      <option value="" disabled>Choisissez…</option>
                      {["9h00","9h30","10h00","10h30","11h00","11h30","12h00","14h00","14h30","15h00","15h30","16h00","16h30","17h00","17h30","18h00","18h30"].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="bk-style" style={lbl}>Style souhaité (optionnel)</label>
                  <select id="bk-style" name="style" style={g("style")} {...f("style")}>
                    <option value="">Pas de préférence / Je laisse mon barbier conseiller</option>
                    <option>Mid Fade — Dégradé Moyen</option>
                    <option>High Skin Fade — Dégradé à Blanc</option>
                    <option>Buzz Cut — Coupe Militaire</option>
                    <option>Side Part — Coupe Classique</option>
                    <option>Slick Back — Cheveux Plaqués</option>
                    <option>French Crop — Coupe Texturée</option>
                  </select>
                </div>
                <div><label htmlFor="bk-msg" style={lbl}>Remarques</label><textarea id="bk-msg" name="message" rows={3} placeholder="Précisions, allergies, préférences particulières…" style={{ ...g("msg"), resize: "none" }} {...f("msg")} /></div>
                <button type="submit" className="btn-primary justify-center w-full mt-1" style={{ fontSize: ".6875rem", padding: ".95rem" }}>
                  Envoyer Ma Demande <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
                </button>
                <p className="text-center" style={{ fontFamily: "var(--font-sans)", fontSize: ".6875rem", color: "rgba(240,237,230,.2)", letterSpacing: ".05em" }}>
                  Confirmation par téléphone ou SMS dans les plus brefs délais.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
