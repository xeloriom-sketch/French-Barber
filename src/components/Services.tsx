const services = [
  { num: "01", icon: "fa-scissors",            name: "Coupe Classique",    price: "25€", time: "30 min", pop: false, desc: "Shampoing, coupe ciseau ou tondeuse, finition soignée au rasoir. Adaptée à votre morphologie." },
  { num: "02", icon: "fa-face-smile",          name: "Taille de Barbe",    price: "15€", time: "20 min", pop: false, desc: "Mise en forme précise avec serviette chaude, mousse artisanale et baume hydratant." },
  { num: "03", icon: "fa-fire",                name: "Rasage Coupe-Choux", price: "20€", time: "30 min", pop: true,  desc: "Serviette chaude, savon de rasage, rasoir droit — la gestuelle du vrai barbier." },
  { num: "04", icon: "fa-wand-magic-sparkles", name: "Coupe + Barbe",      price: "35€", time: "50 min", pop: true,  desc: "Le duo parfait : coupe complète + taille de barbe. Le plus demandé chez French Barber." },
  { num: "05", icon: "fa-leaf",                name: "Soin du Visage",     price: "20€", time: "25 min", pop: false, desc: "Masque purifiant, actifs botaniques, hydratation profonde. Idéal après rasage." },
  { num: "06", icon: "fa-crown",               name: "Pack Complet",       price: "55€", time: "80 min", pop: false, desc: "Coupe + barbe + rasage + soin. L’expérience French Barber dans sa totalité." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" data-aos="fade-up">
          <div>
            <span className="section-label mb-4">Ce Que Nous Faisons</span>
            <h2 className="section-title">Nos <span className="text-gradient">Prestations</span></h2>
          </div>
          <p className="max-w-sm" style={{ fontSize: ".875rem", color: "rgba(240,237,230,.4)", lineHeight: 1.75 }}>
            Tarifs clairs, sans surprise. Qualité premium à chaque visite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <article key={s.num} className="svc-card-item flex flex-col gap-4 p-7 relative" data-aos="fade-up" data-aos-delay={String(i * 60)}>
              {s.pop && <div className="absolute top-4 right-4 badge" style={{ fontSize: ".55rem" }}><i className="fa-solid fa-fire" aria-hidden="true" />Populaire</div>}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, border: "1px solid rgba(200,134,74,.3)", color: "#c8864a" }}>
                  <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "2.25rem", color: "rgba(240,237,230,.07)" }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.4rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".04em" }}>{s.name}</h3>
              <p style={{ fontSize: ".8125rem", color: "rgba(240,237,230,.45)", lineHeight: 1.7, flexGrow: 1 }}>{s.desc}</p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }}>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "1.875rem", color: "#c8864a" }}>{s.price}</span>
                <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.25)", fontWeight: 600 }}>{s.time}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6"
          style={{ background: "rgba(200,134,74,.05)", border: "1px solid rgba(200,134,74,.15)" }} data-aos="fade-up">
          <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.5)" }}>
            <i className="fa-solid fa-circle-info mr-2" style={{ color: "#c8864a" }} aria-hidden="true" />
            Réduction possible pour les réguliers et les étudiants.
          </span>
          <a href="#booking" className="btn-primary flex-shrink-0" style={{ fontSize: ".65rem" }}>
            Réserver <i className="fa-solid fa-arrow-right text-[9px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
