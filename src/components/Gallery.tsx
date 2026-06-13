import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

type MediaItem = {
  src: string;
  cls: string;
  minH: number;
  alt: string;
  real: boolean;
  video?: boolean;
};

const media: MediaItem[] = [
  { src: `${basePath}/client-1.webp`,         cls: "g1", minH: 300, alt: "Coupe client French Barber Lagnieu",   real: true },
  { src: `${basePath}/client-2.webp`,         cls: "g2", minH: 200, alt: "Résultat coupe French Barber",         real: true },
  { src: `${basePath}/client-3.webp`,         cls: "g3", minH: 200, alt: "Barbe sculptée French Barber",         real: true },
  { src: `${basePath}/nos realisation 1.png`, cls: "g4", minH: 200, alt: "Réalisation French Barber Lagnieu",    real: true },
  { src: `${basePath}/nos realisation 2.png`, cls: "g5", minH: 200, alt: "Réalisation coupe French Barber",      real: true },
  { src: `${basePath}/reel-1.mp4`,            cls: "g6", minH: 300, alt: "Reel French Barber @french_barber_015", real: true, video: true },
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
            Photos &amp; vidéos réelles de nos clients.<br />Chaque coupe est unique.
          </p>
        </div>

        <FadeUp delay={0.15}>
        <div className="gallery-grid">
          {media.map((p, i) => (
            <div key={i} className={`gitem ${p.cls}`} style={{ minHeight: p.minH }}>
              {p.video ? (
                <video
                  src={p.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={p.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={p.src} alt={p.alt} loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              )}
              {p.real && (
                <div className="absolute top-3 left-3 z-10 badge" style={{ fontSize: ".55rem" }}>
                  <i className="fa-solid fa-check" aria-hidden="true" />French Barber
                </div>
              )}
              {p.video && (
                <div className="absolute bottom-3 right-3 z-10" style={{ background: "rgba(0,0,0,.5)", borderRadius: 2, padding: ".2rem .45rem" }}>
                  <i className="fa-brands fa-instagram" style={{ color: "#f0ede6", fontSize: ".65rem" }} aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        </FadeUp>

        <p className="mt-6"
          style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", color: "rgba(240,237,230,.3)", letterSpacing: ".15em", textTransform: "uppercase" }}
          data-aos="fade-up">
          Contenu authentique · French Barber Lagnieu · @french_barber_015
        </p>

      </div>
    </section>
  );
}
