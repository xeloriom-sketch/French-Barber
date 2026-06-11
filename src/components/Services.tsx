const services = [
  { num: "01", icon: "fa-scissors",            name: "Coupe Classique",       price: "25€", time: "30 min", pop: false, desc: "Coupe maîtrisée adaptée à votre morphologie. Shampoing, coupe ciseau ou tondeuse, finition soignée au rasoir." },
  { num: "02", icon: "fa-face-smile",          name: "Taille de Barbe",       price: "15€", time: "20 min", pop: false, desc: "Mise en forme précise avec serviette chaude, mousse artisanale et baume de finition hydratant." },
  { num: "03", icon: "fa-fire",                name: "Rasage Coupe-Choux",    price: "20€", time: "30 min", pop: true,  desc: "Rasage à l'ancienne : serviette chaude, savon de rasage, rasoir droit — la gestuelle du vrai barbier." },
  { num: "04", icon: "fa-wand-magic-sparkles", name: "Coupe + Barbe",         price: "35€", time: "50 min", pop: true,  desc: "Le duo parfait. Coupe complète + taille de barbe. Le résultat le plus demandé chez French Barber." },
  { num: "05", icon: "fa-leaf",                name: "Soin du Visage",        price: "20€", time: "25 min", pop: false, desc: "Masque purifiant, hydratation avec des actifs botaniques. Idéal en complément du rasage." },
  { num: "06", icon: "fa-crown",               name: "Pack Complet",          price: "55€", time: "80 min", pop: false, desc: "Coupe + barbe + rasage au coupe-choux + soin visage. L'expérience French Barber dans sa totalité." },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h"
      style={{ background: "radial-gradient(ellipse at 75% 40%, #212c2c 0%, #181f1f 55%, #111717 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <span className="section-label mb-4">Ce Que Nous Faisons</span>
            <h2 id="services-h" className="section-title">
              Nos <span className="text-gradient">Prestations</span>
            </h2>
          </div>
          <p className="max-w-sm" style={{ fontSize: ".875rem", color: "rgba(240,237,230,.45)", lineHeight: 1.75, fontFamily: "var(--font-sans)" }}>
            Tous nos tarifs sont affichés clairement. Pas de surprise, juste de la qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <article key={s.num} className="svc-card-item flex flex-col gap-4 p-7 relative"
              data-aos="fade-up" data-aos-delay={String(i * 60)}>
              {s.pop && (
                <div className="absolute top-4 right-4 badge" style={{ fontSize: ".55rem" }}>
                  <i className="fa-solid fa-fire" aria-hidden="true" />Populaire
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, border: "1px solid rgba(200,134,74,.3)", color: "#c8864a" }}>
                  <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "2.25rem", color: "rgba(240,237,230,.08)" }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.4rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em" }}>{s.name}</h3>
              <p style={{ fontSize: ".8125rem", color: "rgba(240,237,230,.45)", lineHeight: 1.7, fontFamily: "var(--font-sans)", flexGrow: 1 }}>{s.desc}</p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }}>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "1.875rem", color: "#c8864a" }}>{s.price}</span>
                <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.25)", fontWeight: 600 }}>{s.time}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6" style={{ background: "rgba(200,134,74,.06)", border: "1px solid rgba(200,134,74,.15)" }} data-aos="fade-up">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-info-circle" style={{ color: "#c8864a" }} aria-hidden="true" />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.55)" }}>
              Prix indicatifs. Réduction possible pour les réguliers et les étudiants — renseignez-vous au salon.
            </span>
          </div>
          <a href="#booking" className="btn-primary flex-shrink-0" style={{ fontSize: ".65rem" }}>
            Réserver <i className="fa-solid fa-arrow-right text-[9px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
