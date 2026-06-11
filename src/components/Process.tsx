const steps = [
  { num: "01", icon: "fa-calendar-plus",   title: "Réservez",        desc: "En ligne ou au 07 45 10 74 01. Choisissez prestation, jour et heure." },
  { num: "02", icon: "fa-comments",        title: "Consultation",    desc: "Votre barbier prend le temps d'écouter votre style, morphologie et attentes." },
  { num: "03", icon: "fa-wand-sparkles",   title: "La Prestation",   desc: "Coupe, barbe ou rasage — précision, produits premium, ambiance parfaite." },
  { num: "04", icon: "fa-face-smile-beam", title: "Repartez Parfait",desc: "Finition soignée, conseils d'entretien, produits adaptés. Top du top." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#0d0d0d]">
      <div className="py-24 md:py-28 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-label mb-4">Comment Ça Marche</span>
          <h2 className="section-title">Votre <span className="text-gradient">Expérience</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col gap-5 p-7"
              style={{ background: "rgba(255,255,255,.025)", border: "1px solid rgba(240,237,230,.06)" }}
              data-aos="fade-up" data-aos-delay={String(i * 80)}>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-4 h-px" style={{ background: "rgba(200,134,74,.25)", transform: "translateX(100%)" }} aria-hidden="true" />
              )}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0" style={{ width: 44, height: 44, background: "rgba(200,134,74,.08)", border: "1px solid rgba(200,134,74,.22)" }}>
                  <i className={`fa-solid ${s.icon}`} style={{ color: "#c8864a" }} aria-hidden="true" />
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: "2.5rem", color: "rgba(200,134,74,.18)", lineHeight: 1 }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-accent)", fontSize: "1rem", fontWeight: 700, color: "#f0ede6" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.5)", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10" data-aos="fade-up">
          <a href="#booking" className="btn-primary">Commencer <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
