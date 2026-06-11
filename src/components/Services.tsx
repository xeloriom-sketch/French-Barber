const services = [
  { num: "01", icon: "fa-scissors",            name: "Coupe Classique",    price: "25€", time: "30 min", desc: "Coupe maîtrisée, adaptée à votre morphologie. Shampoing, coupe au ciseau ou tondeuse, finition soignée." },
  { num: "02", icon: "fa-face-smile",          name: "Taille de Barbe",    price: "15€", time: "20 min", desc: "Mise en forme précise avec serviette chaude, mousse artisanale et baume de finition hydratant." },
  { num: "03", icon: "fa-fire",                name: "Rasage au Coupe-Choux", price: "20€", time: "30 min", desc: "Rasage traditionnel à l'ancienne. Serviette chaude, mousse, rasoir droit — la gestuelle du maître barbier." },
  { num: "04", icon: "fa-wand-magic-sparkles", name: "Coupe + Barbe",      price: "35€", time: "50 min", desc: "Le duo parfait. Coupe complète + taille de barbe. Résultat impeccable de la tête aux épaules." },
  { num: "05", icon: "fa-leaf",                name: "Soin du Visage",     price: "20€", time: "25 min", desc: "Masque purifiant et hydratation profonde avec des extraits botaniques. Idéal après rasage." },
  { num: "06", icon: "fa-crown",               name: "Pack Complet",       price: "55€", time: "80 min", desc: "Le rituel intégral — coupe, barbe, rasage et soin visage. L&apos;expérience French Barber dans sa totalité." },
];

const sectionBg = "radial-gradient(circle at 70% 50%, #252d2d 0%, #1a2020 55%, #131919 100%)";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h" style={{ background: sectionBg }}>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" style={{ opacity: 0.6 }} />

      <div className="relative z-10 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" data-aos="fade-up">
          <div>
            <span className="block mb-4" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Ce Que Nous Faisons</span>
            <h2 id="services-h" className="uppercase mb-0" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9, color: "#f4f3ef" }}>
              Nos <span className="gradient-text">Services</span>
            </h2>
          </div>
          <p className="max-w-xs" style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.4)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
            Chaque prestation est réalisée avec des outils de précision, des produits premium et un savoir-faire exigeant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "rgba(244,243,239,0.06)" }}>
          {services.map((s, i) => (
            <article key={s.num} className="svc-card-item flex flex-col gap-5 p-8"
              data-aos="fade-up" data-aos-delay={String(i * 80)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, border: "1px solid rgba(207,145,82,0.3)", color: "#cf9152" }}>
                  <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "2.5rem", color: "rgba(244,243,239,0.1)" }}>{s.num}</span>
              </div>
              <h3 className="uppercase tracking-wide" style={{ fontFamily: "var(--font-title)", fontSize: "1.4rem", color: "#f4f3ef" }}>{s.name}</h3>
              <p className="flex-grow" style={{ fontSize: ".8125rem", color: "rgba(244,243,239,0.45)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}
                dangerouslySetInnerHTML={{ __html: s.desc }} />
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(244,243,239,0.08)" }}>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "2rem", color: "#cf9152" }}>{s.price}</span>
                <span style={{ fontSize: ".625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,243,0.25)", fontFamily: "var(--font-sans)" }}>{s.time}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <a href="#booking" className="magnetic-btn inline-flex items-center gap-2 font-bold tracking-[0.15em] uppercase px-6 py-3"
            style={{ background: "#cf9152", color: "#0f1515", fontSize: ".6875rem", fontFamily: "var(--font-sans)", textDecoration: "none" }}>
            Prendre Rendez-vous <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
