const stats = [
  { num: "5+",  label: "Ans d'expérience" },
  { num: "800+",label: "Clients satisfaits" },
  { num: "4.9", label: "Note moyenne /5", star: true },
  { num: "47",  label: "Avis Google" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h"
      style={{ background: "radial-gradient(ellipse at 25% 60%, #232e2e 0%, #191f1f 55%, #121818 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div data-aos="fade-up">
            <span className="section-label mb-5">Notre Histoire</span>
            <h2 id="about-h" className="section-title mb-8">
              <span className="text-gradient">L&apos;Art du</span><br />
              <span>Barbier</span>
            </h2>
            <div className="hr-gold mb-8" />
            <p style={{ fontSize: ".9375rem", color: "rgba(240,237,230,.6)", lineHeight: 1.85, fontFamily: "var(--font-sans)" }} className="mb-6">
              Installé au <strong style={{ color: "rgba(240,237,230,.85)", fontWeight: 500 }}>36 route du port à Lagnieu</strong> dans l&apos;Ain, <strong style={{ color: "#c8864a", fontWeight: 500 }}>French Barber</strong> est le barbershop premium de référence dans la région. Nous allions la barberie traditionnelle française aux techniques modernes pour offrir une expérience unique.
            </p>
            <p style={{ fontSize: ".9375rem", color: "rgba(240,237,230,.6)", lineHeight: 1.85, fontFamily: "var(--font-sans)" }} className="mb-8">
              Chaque visite est pensée comme un moment pour vous — consultation personnalisée, produits haut de gamme, résultat impeccable. De la coupe à la barbe en passant par le rasage au coupe-choux, nous maîtrisons l&apos;art du détail.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="badge"><i className="fa-solid fa-award" aria-hidden="true" />Produits Premium</span>
              <span className="badge"><i className="fa-solid fa-certificate" aria-hidden="true" />Barbiers Certifiés</span>
              <span className="badge"><i className="fa-solid fa-shield-halved" aria-hidden="true" />Satisfaction Garantie</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="btn-primary">Prendre RDV <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" /></a>
              <a href="tel:+33745107401" className="btn-outline"><i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01</a>
            </div>
          </div>

          {/* Right: stats */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="card p-7 flex flex-col gap-2" data-aos="fade-up" data-aos-delay={String(150 + i * 60)}>
                  <div className="stat-num">
                    {s.num}{s.star && <span style={{ color: "#c9a84c", fontSize: "2rem" }}>★</span>}
                  </div>
                  <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.4)", fontWeight: 600 }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="card p-6 mt-3" data-aos="fade-up" data-aos-delay="400">
              <p className="section-label mb-4">Nous Contacter</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "fa-location-dot", text: "36 route du port, Lagnieu 01150" },
                  { icon: "fa-phone",        text: "07 45 10 74 01", href: "tel:+33745107401" },
                  { icon: "fa-envelope",     text: "frenchbarber01@gmail.com", href: "mailto:frenchbarber01@gmail.com" },
                ].map(item => (
                  <div key={item.icon} className="flex items-center gap-3">
                    <i className={`fa-solid ${item.icon}`} style={{ color: "#c8864a", fontSize: ".75rem", width: 16 }} aria-hidden="true" />
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.6)", textDecoration: "none" }} className="hover:text-[#c8864a] transition-colors">{item.text}</a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.6)" }}>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
