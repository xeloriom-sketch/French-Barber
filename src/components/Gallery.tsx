import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const photos = [
  { src: `${basePath}/client-1.webp`, cls: "g1", minH: 300, alt: "Coupe client French Barber Lagnieu", real: true },
  { src: `${basePath}/client-2.webp`, cls: "g2", minH: 200, alt: "Résultat coupe French Barber", real: true },
  { src: `${basePath}/client-3.webp`, cls: "g3", minH: 200, alt: "Barbe sculptée French Barber", real: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="w-full mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-aos="fade-up">
          <h2 className="text-left text-white uppercase font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Nos</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.08}>Réalisations.</SplitText>
          </h2>
          <p className="max-w-xs md:text-right"
            style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem", color: "rgba(240,237,230,.4)", lineHeight: 1.75 }}>
            Photos réelles de nos clients.<br />Chaque coupe est unique.
          </p>
        </div>

        <FadeUp delay={0.15}>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div key={i} className={`gitem ${p.cls}`} style={{ minHeight: p.minH }}>
              <img
                src={p.src} alt={p.alt} loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
                style={{ filter: p.real ? "none" : "grayscale(20%)" }}
              />
              {p.real && (
                <div className="absolute top-3 left-3 z-10 badge" style={{ fontSize: ".55rem" }}>
                  <i className="fa-solid fa-check" aria-hidden="true" />French Barber
                </div>
              )}
            </div>
          ))}
        </div>
        </FadeUp>

        <p className="mt-6"
          style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", color: "rgba(240,237,230,.3)", letterSpacing: ".15em", textTransform: "uppercase" }}
          data-aos="fade-up">
          Photos authentiques prises au salon · Lagnieu, Ain
        </p>

      </div>
    </section>
  );
}
