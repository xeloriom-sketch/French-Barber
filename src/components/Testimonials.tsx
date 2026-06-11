const reviews = [
  { initials: "TR", name: "Thomas R.", type: "Client régulier",   stars: 5, text: "Meilleure coupe que j'aie eu depuis longtemps. Mehdi prend le temps d'écouter ce qu'on veut et le résultat est au-delà de mes attentes. Je reviens tous les mois." },
  { initials: "JL", name: "Julien L.", type: "Client vérifié",    stars: 5, text: "Le rasage au coupe-choux ici c'est une expérience en soi. Serviette chaude, savon artisanal, geste précis. On repart revitalisé. L'ambiance est top aussi." },
  { initials: "SA", name: "Sofiane A.", type: "Client régulier",  stars: 5, text: "French Barber c'est LE barbershop de Lagnieu. Lucas m'a redessiné la barbe comme jamais. Produits de qualité, équipe sympa. Je recommande à 100%." },
  { initials: "MC", name: "Mathieu C.", type: "Client vérifié",   stars: 5, text: "Réservation facile, accueil chaleureux, coupe parfaite. Le Pack Complet vaut vraiment le coup — on repart complètement transformé. À faire au moins une fois !" },
  { initials: "RB", name: "Romain B.", type: "Client régulier",   stars: 5, text: "J'habite à Ambérieu et je fais le déplacement jusqu'à Lagnieu exprès pour French Barber. Ça dit tout. Niveau de qualité incomparable dans la région." },
  { initials: "KC", name: "Karim C.", type: "Client vérifié",     stars: 5, text: "Antoine a fait un travail incroyable sur ma barbe. Il m'a conseillé sur l'entretien, m'a montré les bons produits. C'est plus qu'une coupe, c'est un accompagnement." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testi-h"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #1e2b2b 0%, #161e1e 55%, #101616 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <span className="section-label mb-4">Ce Qu&apos;ils Disent</span>
            <h2 id="testi-h" className="section-title">
              Avis <span className="text-gradient">Clients</span>
            </h2>
          </div>
          {/* Aggregate rating */}
          <div className="flex items-center gap-4 p-5" style={{ background: "rgba(200,134,74,.07)", border: "1px solid rgba(200,134,74,.18)" }}>
            <div className="text-center">
              <p style={{ fontFamily: "var(--font-title)", fontSize: "3rem", color: "#c8864a", lineHeight: 1 }}>4.9</p>
              <div className="stars text-sm mt-1" aria-label="4.9 étoiles">★★★★★</div>
            </div>
            <div style={{ width: "1px", height: 48, background: "rgba(200,134,74,.2)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.6)", fontWeight: 600 }}>47 avis Google</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "rgba(240,237,230,.35)", marginTop: ".2rem" }}>French Barber — Lagnieu</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <blockquote key={r.name} className="testi-card flex flex-col gap-5 p-7 h-full"
              data-aos="fade-up" data-aos-delay={String(i * 50)}>
              <div className="flex items-center justify-between">
                <div className="stars text-sm" aria-label={`${r.stars} étoiles`}>{"★".repeat(r.stars)}</div>
                <span style={{ fontFamily: "var(--font-accent)", fontSize: ".55rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,237,230,.25)", fontWeight: 600 }}>Google</span>
              </div>
              <p className="flex-grow" style={{ fontFamily: "var(--font-sans)", color: "rgba(240,237,230,.65)", fontSize: ".875rem", lineHeight: 1.75, fontWeight: 300 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }}>
                <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 34, height: 34, background: "rgba(200,134,74,.15)", fontFamily: "var(--font-accent)", fontSize: ".75rem", fontWeight: 700, color: "#c8864a" }} aria-hidden="true">{r.initials}</div>
                <div>
                  <cite className="not-italic block" style={{ fontFamily: "var(--font-accent)", fontSize: ".8125rem", fontWeight: 700, color: "#f0ede6" }}>{r.name}</cite>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: ".6rem", letterSpacing: ".08em", color: "rgba(240,237,230,.3)" }}>{r.type}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
