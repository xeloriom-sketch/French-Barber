import Image from "next/image";

const cuts = [
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_three-quarter_-0-2.jpg",
    name: "Mid Fade",
    fr: "Dégradé Moyen",
    desc: "Transition naturelle sur les côtés — polyvalent et moderne.",
  },
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_exact_side_pro-0.jpg",
    name: "High Skin Fade",
    fr: "Dégradé à Blanc",
    desc: "Dégradé rasé très haut pour un résultat ultra net.",
  },
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_centered_symme-0.jpg",
    name: "Buzz Cut",
    fr: "Coupe Militaire",
    desc: "Coupe courte uniforme — entretien minimal, style maximal.",
  },
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_gentleman_from_the_chest_up_front_vi-0.jpg",
    name: "Side Part",
    fr: "Coupe Classique",
    desc: "Raie sur le côté, style gentleman intemporel.",
  },
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_three-quarter_-0.jpg",
    name: "Slick Back",
    fr: "Cheveux Plaqués",
    desc: "Cheveux plaqués arrière pour une allure sophistiquée.",
  },
  {
    file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_straight_front-0.jpg",
    name: "French Crop",
    fr: "Coupe Texturée",
    desc: "Coupe moderne avec frange texturée — très tendance.",
  },
];

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

export default function HaircutStyles() {
  return (
    <section id="styles" aria-labelledby="styles-h"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #1e2828 0%, #161c1c 55%, #0f1515 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">

        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-label mb-4">Inspirations</span>
          <h2 id="styles-h" className="section-title">
            Nos <span className="text-gradient">Styles</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans)", fontSize: ".9rem", color: "rgba(240,237,230,.45)", lineHeight: 1.7 }}>
            Trouvez le style qui vous correspond. Montrez-le à votre barbier lors de votre rendez-vous.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cuts.map((cut, i) => (
            <article key={cut.name} className="group relative overflow-hidden"
              style={{ background: "#fff", borderRadius: "2px" }}
              data-aos="fade-up" data-aos-delay={String(i * 60)}>

              {/* Image with mix-blend-mode to blend white bg */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={`${basePath}/${cut.file}`}
                  alt={`${cut.fr} — ${cut.desc}`}
                  fill loading="lazy"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: "grayscale(10%) contrast(1.05)" }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(13,17,17,.92) 0%, rgba(13,17,17,.3) 45%, rgba(13,17,17,.05) 100%)" }} />

                {/* Labels */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p style={{ fontFamily: "var(--font-title)", fontSize: "1.25rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".06em", lineHeight: 1.1 }}>{cut.fr}</p>
                  <p style={{ fontFamily: "var(--font-accent)", fontSize: ".5625rem", color: "#c8864a", letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600, marginTop: ".2rem" }}>{cut.name}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "rgba(13,17,17,.65)" }}>
                  <a href="#booking"
                    className="btn-primary" style={{ padding: ".65rem 1.4rem", fontSize: ".6rem" }}>
                    Réserver ce style
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="p-4" style={{ background: "#1e2626", borderTop: "1px solid rgba(200,134,74,.15)" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "rgba(240,237,230,.5)", lineHeight: 1.6 }}>{cut.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-8" style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.3)", letterSpacing: ".1em" }} data-aos="fade-up">
          Ces styles sont proposés à titre indicatif — votre barbier s&apos;adapte à votre morphologie et à votre chevelure.
        </p>
      </div>
    </section>
  );
}
