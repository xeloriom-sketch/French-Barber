const stats = [
  { num: "5+",  label: "Ans d'expérience" },
  { num: "800+",label: "Clients satisfaits" },
  { num: "4.9★",label: "Note moyenne", gold: true },
  { num: "1",   label: "Adresse, Lagnieu" },
];

const sectionBg = "radial-gradient(circle at 30% 50%, #2a3333 0%, #1a2020 60%, #141a1a 100%)";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" style={{ background: sectionBg }}>
      <div className="noise-overlay" aria-hidden="true" />
      {/* Subtle orbs */}
      <div className="orb orb-1" aria-hidden="true" />

      <div className="relative z-10 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div data-aos="fade-right">
            <span className="block mb-5" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>
              Lagnieu · Ain
            </span>
            <h2 id="about-h" className="uppercase mb-10" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9 }}>
              <span className="gradient-text">L&apos;Art du</span><br />
              <span style={{ color: "#f4f3ef" }}>Barbier</span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-2" style={{ gap: "1px", background: "rgba(244,243,239,0.06)" }}>
              {stats.map((s, i) => (
                <div key={i} className="p-8 flex flex-col gap-2" style={{ background: "rgba(15,21,21,0.5)" }}
                  data-aos="fade-up" data-aos-delay={String(100 + i * 80)}>
                  <span className={s.gold ? "gradient-text" : ""} style={{ fontFamily: "var(--font-title)", fontSize: "clamp(2.5rem,5vw,4.5rem)", color: s.gold ? undefined : "#cf9152", lineHeight: 1 }}>{s.num}</span>
                  <span style={{ fontSize: ".625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(244,243,239,0.4)", fontFamily: "var(--font-sans)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8" data-aos="fade-left" data-aos-delay="150">
            <div className="hr-gold" />
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "rgba(244,243,239,0.55)", fontSize: "1.3rem", lineHeight: 1.6 }}>
              &ldquo;Une coupe, c&apos;est bien plus qu&apos;un service — c&apos;est un rituel.&rdquo;
            </p>
            <div className="hr-gold" />
            <p style={{ fontSize: ".9rem", color: "rgba(244,243,239,0.55)", lineHeight: 1.9, fontFamily: "var(--font-sans)" }}>
              Basé à Lagnieu, dans l&apos;Ain, <strong style={{ color: "rgba(244,243,239,0.8)", fontWeight: 500 }}>French Barber</strong> a été fondé avec une conviction simple : chaque homme mérite de se sentir au mieux de sa forme. Nous allions les techniques de la barberie traditionnelle française à une esthétique moderne et soignée.
            </p>
            <p style={{ fontSize: ".9rem", color: "rgba(244,243,239,0.55)", lineHeight: 1.9, fontFamily: "var(--font-sans)" }}>
              De la première consultation jusqu&apos;à la finition, chaque visite est une expérience conçue autour de vous. Précision, soin et ambiance — c&apos;est la signature French Barber.
            </p>
            <a href="#booking" className="magnetic-btn self-start inline-flex items-center gap-2 font-bold tracking-[0.15em] uppercase px-6 py-3"
              style={{ background: "#cf9152", color: "#0f1515", fontSize: ".6875rem", fontFamily: "var(--font-sans)", textDecoration: "none" }}>
              Réserver maintenant <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
