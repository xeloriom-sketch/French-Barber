import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

type MediaItem = {
  src: string;
  cls: string;
  minH: number;
  alt: string;
  video?: boolean;
};

const media: MediaItem[] = [
  { src: `${basePath}/reel-1.mp4`,                       cls: "g1",  minH: 340, alt: "Reel coupe French Barber",              video: true },
  { src: `${basePath}/insta-DWTRLmHjbpC.mp4`,           cls: "g2",  minH: 220, alt: "Reel barbe French Barber",               video: true },
  { src: `${basePath}/insta-DWOoqWPjY8c.mp4`,           cls: "g3",  minH: 220, alt: "Reel French Barber Lagnieu",             video: true },
  { src: `${basePath}/insta-Cy6Xf-lKbEo.jpg`,           cls: "g4",  minH: 220, alt: "Coupe client French Barber" },
  { src: `${basePath}/insta-CywIjxCK1st.jpg`,           cls: "g5",  minH: 220, alt: "Réalisation coupe French Barber" },
  { src: `${basePath}/insta-CywIdewqriO.jpg`,           cls: "g6",  minH: 220, alt: "Coupe homme French Barber Lagnieu" },
  { src: `${basePath}/insta-CywISe6qTyp.jpg`,           cls: "g7",  minH: 220, alt: "Barbe sculptée French Barber" },
  { src: `${basePath}/insta-CywIO4BqAc8.jpg`,           cls: "g8",  minH: 220, alt: "Coupe dégradé French Barber" },
  { src: `${basePath}/insta-CywIKlXq_lW.jpg`,           cls: "g9",  minH: 220, alt: "Style coiffure French Barber" },
  { src: `${basePath}/insta-CywIGcuKmvl.jpg`,           cls: "g10", minH: 220, alt: "Finition rasage French Barber" },
  { src: `${basePath}/insta-CywHP2GqKV0.jpg`,           cls: "g11", minH: 220, alt: "Résultat coupe French Barber" },
  { src: `${basePath}/insta-CywHKP3Klok.jpg`,           cls: "g12", minH: 220, alt: "Coupe premium French Barber Lagnieu" },
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
            Photos &amp; vidéos directement<br />depuis notre Instagram.
          </p>
        </div>

        <FadeUp delay={0.15}>
        <div className="gallery-grid">
          {media.map((p, i) => (
            <div key={i} className={`gitem ${p.cls}`} style={{ minHeight: p.minH }}>
              {p.video ? (
                <video
                  src={p.src}
                  autoPlay muted loop playsInline
                  aria-label={p.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={p.src} alt={p.alt} loading={i < 4 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-3 left-3 z-10 badge" style={{ fontSize: ".55rem" }}>
                <i className="fa-brands fa-instagram" aria-hidden="true" />french_barber_015
              </div>
            </div>
          ))}
        </div>
        </FadeUp>

        <div className="mt-8 flex items-center gap-4" data-aos="fade-up">
          <a href="https://www.instagram.com/french_barber_015" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem" }}>
            <i className="fa-brands fa-instagram mr-2" aria-hidden="true" />Voir plus sur Instagram →
          </a>
        </div>

      </div>
    </section>
  );
}
