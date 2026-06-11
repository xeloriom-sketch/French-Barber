const reviews = [
  { initials: "TR", name: "Thomas R.", type: "Client régulier",  text: "La meilleure coupe que j'ai eue depuis des années. Mehdi sait exactement ce qu'il fait, le résultat est net et précis. L'ambiance du salon est top." },
  { initials: "JL", name: "Julien L.", type: "Client vérifié",   text: "Je viens régulièrement depuis l'ouverture. Le rasage au coupe-choux est une expérience à part entière — serviette chaude, mousse parfumée, précision absolue." },
  { initials: "SA", name: "Sofiane A.", type: "Client régulier", text: "French Barber c'est plus qu'un barbershop, c'est un rituel. Lucas m'a redessiné la barbe comme jamais. Je ne vais plus nulle part ailleurs à Lagnieu." },
];

const sectionBg = "radial-gradient(circle at 50% 50%, #242c2c 0%, #1a2020 55%, #131919 100%)";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testi-h" style={{ background: sectionBg }}>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="block mb-4" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Ce Qu&apos;ils Disent</span>
          <h2 id="testi-h" className="uppercase mb-0" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9, color: "#f4f3ef" }}>
            Avis <span className="gradient-text">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={r.name} className="testi-card flex flex-col gap-6 p-8 h-full"
              data-aos="fade-up" data-aos-delay={String(i * 150)}>
              <div className="flex gap-1" style={{ color: "#d4a853" }} aria-label="5 étoiles">
                {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star text-sm" aria-hidden="true" />)}
              </div>
              <p className="flex-grow" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "rgba(244,243,239,0.65)", fontSize: "1rem", lineHeight: 1.75 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(244,243,239,0.08)" }}>
                <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 32, height: 32, background: "rgba(207,145,82,0.15)", fontSize: ".75rem", fontWeight: 700, color: "#cf9152" }} aria-hidden="true">
                  {r.initials}
                </div>
                <div>
                  <cite className="not-italic block" style={{ fontSize: ".8rem", fontWeight: 500, color: "#f4f3ef", fontFamily: "var(--font-sans)" }}>{r.name}</cite>
                  <span style={{ fontSize: ".625rem", letterSpacing: ".1em", color: "rgba(244,243,239,0.3)", fontFamily: "var(--font-sans)" }}>{r.type}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
