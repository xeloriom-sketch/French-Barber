const reasons = [
  { icon: "fa-medal",       title: "Produits Haut de Gamme",      desc: "Nous utilisons exclusivement des produits professionnels sélectionnés pour leur qualité — cires, huiles de barbe, soins post-rasage." },
  { icon: "fa-user-tie",    title: "Barbiers Expérimentés",        desc: "Notre équipe est formée aux techniques de coupe modernes et traditionnelles. Chaque barbier maîtrise ciseau, tondeuse et coupe-choux." },
  { icon: "fa-calendar-check", title: "Réservation Facile",       desc: "Prenez rendez-vous en ligne ou appelez directement au 07 45 10 74 01. Confirmation rapide, rappel automatique." },
  { icon: "fa-face-laugh-beam", title: "Satisfaction Garantie",   desc: "Pas satisfait ? On refait. Votre satisfaction est notre priorité — nous ne vous lâchons pas tant que le résultat n'est pas parfait." },
  { icon: "fa-location-dot",  title: "Idéalement Situé",          desc: "Au 36 route du port à Lagnieu, facilement accessible depuis Ambérieu-en-Bugey et les communes voisines de l'Ain." },
  { icon: "fa-clock",        title: "Horaires Étendus",            desc: "Ouverts du lundi au samedi de 9h à 19h. Possibilité de créneaux en dehors des horaires habituels sur demande." },
];

export default function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-h"
      style={{ background: "radial-gradient(ellipse at 30% 70%, #1e2a2a 0%, #171e1e 55%, #111616 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">

        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-label mb-4">Pourquoi Nous</span>
          <h2 id="why-h" className="section-title">
            Ce Qui Nous <span className="text-gradient">Distingue</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="why-card p-7 flex flex-col gap-4" data-aos="fade-up" data-aos-delay={String(i * 60)}>
              <div className="flex items-center justify-center" style={{ width: 48, height: 48, background: "rgba(200,134,74,.1)", border: "1px solid rgba(200,134,74,.2)" }}>
                <i className={`fa-solid ${r.icon}`} style={{ color: "#c8864a", fontSize: "1.1rem" }} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "var(--font-accent)", fontSize: "1rem", fontWeight: 700, color: "#f0ede6" }}>{r.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.5)", lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
