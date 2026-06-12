import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const cuts = [
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_three-quarter_-0-2.jpg", name: "Mid Fade",    fr: "Dégradé Moyen",    desc: "Transition naturelle sur les côtés — polyvalent et moderne." },
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_exact_side_pro-0.jpg",   name: "Skin Fade",   fr: "Dégradé à Blanc",  desc: "Dégradé rasé très haut pour un résultat ultra net." },
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_centered_symme-0.jpg",   name: "Buzz Cut",    fr: "Coupe Militaire",  desc: "Coupe courte uniforme — entretien minimal, style maximal." },
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_gentleman_from_the_chest_up_front_vi-0.jpg",   name: "Side Part",   fr: "Coupe Classique",  desc: "Raie sur le côté, style gentleman intemporel." },
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_three-quarter_-0.jpg",   name: "Slick Back",  fr: "Cheveux Plaqués",  desc: "Cheveux plaqués arrière — allure sophistiquée." },
  { file: "lucid-origin_Studio_commercial_photography_of_a_handsome_man_from_the_chest_up_straight_front-0.jpg",   name: "French Crop", fr: "Coupe Texturée",   desc: "Coupe moderne avec frange texturée — très tendance." },
];

export default function HaircutStyles() {
  return (
    <section id="styles" className="bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="mb-14" data-aos="fade-up">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Nos Styles.</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.1}>Votre Identité.</SplitText>
          </h2>
          <p className="mt-5 max-w-md" style={{ fontFamily: "var(--font-sans)", fontSize: ".9rem", color: "rgba(240,237,230,.4)", lineHeight: 1.7 }}>
            Trouvez le style qui vous correspond et montrez-le à votre barbier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cuts.map((cut, i) => (
            <FadeUp key={cut.name} delay={i * 0.07}>
            <article className="group relative">
              {/* overflow-hidden ONLY on image container */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#111" }}>
                <img src={`${basePath}/${cut.file}`} alt={`${cut.fr} — ${cut.desc}`}
                  loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: "grayscale(100%) contrast(1.1)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,.92) 0%, rgba(13,13,13,.2) 45%, transparent 100%)" }} />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p style={{ fontFamily: "var(--font-title)", fontSize: "1.25rem", color: "#f0ede6", textTransform: "uppercase", letterSpacing: ".06em", lineHeight: 1.1 }}>{cut.fr}</p>
                  <p style={{ fontFamily: "var(--font-accent)", fontSize: ".55rem", color: "rgba(240,237,230,.45)", letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600, marginTop: ".2rem" }}>{cut.name}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "rgba(13,13,13,.65)" }}>
                  <a href="#booking"
                    style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.4)", paddingBottom: ".3rem" }}>
                    Réserver ce style →
                  </a>
                </div>
              </div>
              <div className="p-3 bg-[#111]" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "rgba(240,237,230,.45)", lineHeight: 1.6 }}>{cut.desc}</p>
              </div>
            </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
