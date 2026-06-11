"use client";
import { useState } from "react";

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(244,243,239,0.1)",
  color: "#f4f3ef",
  width: "100%",
  padding: ".875rem 1.125rem",
  fontFamily: "var(--font-sans)",
  fontSize: ".875rem",
  outline: "none",
  borderRadius: 0,
  WebkitAppearance: "none" as const,
  transition: "border-color .3s",
};

const sectionBg = "radial-gradient(circle at 20% 50%, #222b2b 0%, #191f1f 60%, #121818 100%)";

export default function Booking() {
  const [focused, setFocused] = useState<string | null>(null);

  const getStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focused === name ? "#cf9152" : "rgba(244,243,239,0.1)",
  });

  const labelStyle = {
    fontSize: ".6875rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    color: "rgba(244,243,239,0.35)",
    display: "block",
    marginBottom: ".5rem",
    fontFamily: "var(--font-sans)",
  };

  const f = (n: string) => ({ onFocus: () => setFocused(n), onBlur: () => setFocused(null) });

  return (
    <section id="booking" aria-labelledby="booking-h" style={{ background: sectionBg, padding: "6rem 0" }}>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" style={{ opacity: 0.5 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div data-aos="fade-right">
            <span className="block mb-6" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Réservez Votre Fauteuil</span>
            <h2 id="booking-h" className="uppercase mb-8" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9, color: "#f4f3ef" }}>
              Prendre<br /><span className="gradient-text">Rendez-vous</span>
            </h2>
            <div className="hr-gold mb-8" />
            <p className="mb-8" style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.45)", lineHeight: 1.8, fontFamily: "var(--font-sans)" }}>
              Réservez en ligne ou appelez-nous directement. Confirmation sous 2h. Créneaux du jour disponibles selon nos disponibilités.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: "fa-regular fa-clock",      label: "Horaires",  value: "Lun – Sam : 9h00 – 19h00" },
                { icon: "fa-solid fa-location-dot", label: "Adresse",   value: "Lagnieu, 01150 — Ain, France" },
                { icon: "fa-solid fa-phone",        label: "Téléphone", value: "Voir sur Facebook", href: "https://www.facebook.com/p/French-Barber-61552611964085/" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: 36, height: 36, border: "1px solid rgba(207,145,82,0.3)", color: "#cf9152" }}>
                    <i className={`${item.icon} text-xs`} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: ".625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,239,0.3)", marginBottom: ".2rem", fontFamily: "var(--font-sans)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.6)", fontFamily: "var(--font-sans)", textDecoration: "none" }}>{item.value}</a>
                    ) : (
                      <p style={{ fontSize: ".875rem", color: "rgba(244,243,243,0.6)", margin: 0, fontFamily: "var(--font-sans)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden flex items-center justify-center" style={{ height: "12rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(244,243,239,0.06)" }}
              aria-label="Localisation French Barber – Lagnieu, Ain">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(255,255,255,0.012) 38px, rgba(255,255,255,0.012) 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(255,255,255,0.012) 38px, rgba(255,255,255,0.012) 39px)`,
              }} />
              <div className="relative z-10 flex flex-col items-center gap-2" style={{ fontSize: ".6875rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,239,0.3)", fontFamily: "var(--font-sans)" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "#cf9152", fontSize: "1.5rem", marginBottom: ".25rem" }} aria-hidden="true" />
                French Barber — Lagnieu, 01150
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <form action="#" method="POST" noValidate aria-label="Formulaire de réservation" className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bk-name" style={labelStyle}>Prénom &amp; Nom <span style={{ color: "#cf9152" }} aria-hidden="true">*</span></label>
                  <input type="text" id="bk-name" name="name" placeholder="Jean Dupont" required autoComplete="name" aria-required="true" style={getStyle("name")} {...f("name")} />
                </div>
                <div>
                  <label htmlFor="bk-phone" style={labelStyle}>Téléphone <span style={{ color: "#cf9152" }} aria-hidden="true">*</span></label>
                  <input type="tel" id="bk-phone" name="phone" placeholder="06 00 00 00 00" required autoComplete="tel" aria-required="true" style={getStyle("phone")} {...f("phone")} />
                </div>
              </div>

              <div>
                <label htmlFor="bk-service" style={labelStyle}>Prestation <span style={{ color: "#cf9152" }} aria-hidden="true">*</span></label>
                <select id="bk-service" name="service" required aria-required="true" style={getStyle("service")} {...f("service")}>
                  <option value="" disabled>Choisissez une prestation…</option>
                  <option value="coupe">Coupe Classique — 25€</option>
                  <option value="barbe">Taille de Barbe — 15€</option>
                  <option value="rasage">Rasage au Coupe-Choux — 20€</option>
                  <option value="coupe-barbe">Coupe + Barbe — 35€</option>
                  <option value="soin">Soin du Visage — 20€</option>
                  <option value="pack">Pack Complet — 55€</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bk-date" style={labelStyle}>Date <span style={{ color: "#cf9152" }} aria-hidden="true">*</span></label>
                  <input type="date" id="bk-date" name="date" required aria-required="true" style={getStyle("date")} {...f("date")} />
                </div>
                <div>
                  <label htmlFor="bk-time" style={labelStyle}>Heure <span style={{ color: "#cf9152" }} aria-hidden="true">*</span></label>
                  <select id="bk-time" name="time" required aria-required="true" style={getStyle("time")} {...f("time")}>
                    <option value="" disabled>Choisissez…</option>
                    {["9h00","9h30","10h00","10h30","11h00","11h30","12h00","14h00","14h30","15h00","15h30","16h00","16h30","17h00","17h30","18h00","18h30"].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="bk-msg" style={labelStyle}>Remarques (optionnel)</label>
                <textarea id="bk-msg" name="message" rows={4} placeholder="Style souhaité, précisions pour le barbier…" style={{ ...getStyle("msg"), resize: "none" }} {...f("msg")} />
              </div>

              <button type="submit" className="magnetic-btn w-full flex items-center justify-center gap-2 mt-2"
                style={{ background: "#cf9152", color: "#0f1515", fontFamily: "var(--font-sans)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: "1rem", border: "none", cursor: "pointer" }}>
                Confirmer Mon Rendez-vous <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
              </button>

              <p className="text-center" style={{ fontSize: ".6875rem", color: "rgba(244,243,239,0.2)", letterSpacing: ".05em", fontFamily: "var(--font-sans)" }}>
                Confirmation par SMS ou message dans les 2h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
