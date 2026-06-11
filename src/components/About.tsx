const stats = [
  { num: "5+",  label: "Ans d'expérience" },
  { num: "800+",label: "Clients satisfaits" },
  { num: "4.9", label: "Note /5", star: true },
  { num: "47",  label: "Avis Google" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-up">
            <span className="section-label mb-5">Notre Histoire</span>
            <h2 className="section-title mb-8">
              <span className="text-gradient">L&apos;Art du</span><br />Barbier
            </h2>
            <div className="hr-gold mb-8" />
            <p style={{ fontSize: ".9375rem", color: "rgba(240,237,230,.6)", lineHeight: 1.9 }} className="mb-6">
              Installé au <strong style={{ color: "rgba(240,237,230,.85)", fontWeight: 500 }}>36 route du port à Lagnieu</strong>, dans l&apos;Ain, <strong style={{ color: "#c8864a", fontWeight: 500 }}>French Barber</strong> est le barbershop premium de référence dans la région. Techniques traditionnelles françaises, produits haut de gamme, résultat impeccable.
            </p>
            <p style={{ fontSize: ".9375rem", color: "rgba(240,237,230,.6)", lineHeight: 1.9 }} className="mb-8">
              De la coupe au rasage au coupe-choux, chaque prestation est une expérience conçue autour de vous — consultation, précision, finition soignée.
            </p>
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

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="card p-7 flex flex-col gap-2" data-aos="fade-up" data-aos-delay={String(150 + i * 60)}>
                  <div className="stat-num">{s.num}{s.star && <span style={{ color: "#c9a84c" }}>★</span>}</div>
                  <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,230,.4)", fontWeight: 600 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="card p-6 mt-3" data-aos="fade-up" data-aos-delay="400">
              <p className="section-label mb-4">Contact Direct</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "fa-location-dot", text: "36 route du port, Lagnieu 01150" },
                  { icon: "fa-phone", text: "07 45 10 74 01", href: "tel:+33745107401" },
                  { icon: "fa-envelope", text: "frenchbarber01@gmail.com", href: "mailto:frenchbarber01@gmail.com" },
                ].map(item => (
                  <div key={item.icon} className="flex items-center gap-3">
                    <i className={`fa-solid ${item.icon}`} style={{ color: "#c8864a", fontSize: ".7rem", width: 14 }} aria-hidden="true" />
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.6)", textDecoration: "none" }} className="hover:text-[#c8864a] transition-colors">{item.text}</a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8rem", color: "rgba(240,237,230,.6)" }}>{item.text}</span>
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
