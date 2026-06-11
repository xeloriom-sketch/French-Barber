const reasons = [
  { icon: "fa-medal",          title: "Produits Haut de Gamme",   desc: "Exclusivement des produits professionnels — cires, huiles de barbe, soins post-rasage." },
  { icon: "fa-user-tie",       title: "Barbiers Expérimentés",    desc: "Formés aux techniques modernes et traditionnelles. Ciseau, tondeuse et coupe-choux maîtrisés." },
  { icon: "fa-calendar-check", title: "Réservation Facile",       desc: "En ligne 24h/24 ou au 07 45 10 74 01. Confirmation dans les plus brefs délais." },
  { icon: "fa-face-laugh-beam",title: "Satisfaction Garantie",    desc: "Pas satisfait ? On refait. Votre satisfaction est notre priorité absolue." },
  { icon: "fa-location-dot",   title: "Idéalement Situé",         desc: "36 route du port, Lagnieu — accessible depuis Ambérieu-en-Bugey et toute la région." },
  { icon: "fa-clock",          title: "Horaires Étendus",          desc: "Lun–Ven 9h–19h · Sam 9h–18h. Créneaux possibles sur demande." },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-label mb-4">Pourquoi Nous</span>
          <h2 className="section-title">Ce Qui Nous <span className="text-gradient">Distingue</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="why-card p-7 flex flex-col gap-4" data-aos="fade-up" data-aos-delay={String(i * 60)}>
              <div className="flex items-center justify-center" style={{ width: 48, height: 48, background: "rgba(200,134,74,.08)", border: "1px solid rgba(200,134,74,.2)" }}>
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
