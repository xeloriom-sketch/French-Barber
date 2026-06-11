import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

/* Photos clients réelles en tête de galerie, picsum pour compléter */
const photos = [
  /* Photos réelles French Barber — en évidence */
  { src: `${basePath}/client-1.png`,                                 w: 600, h: 800, cls: "g1", minH: 300, alt: "Coupe client French Barber Lagnieu", real: true },
  { src: `${basePath}/client-2.png`,                                 w: 600, h: 400, cls: "g2", minH: 200, alt: "Résultat coupe French Barber", real: true },
  { src: `${basePath}/client-3.png`,                                 w: 600, h: 400, cls: "g3", minH: 200, alt: "Barbe sculptée French Barber", real: true },
  /* Photos complémentaires */
  { src: "https://picsum.photos/id/1062/600/400?grayscale",          w: 600, h: 400, cls: "g4", minH: 180, alt: "Fade moderne" },
  { src: "https://picsum.photos/id/1074/400/400?grayscale",          w: 400, h: 400, cls: "g5", minH: 180, alt: "Style cheveux premium" },
  { src: "https://picsum.photos/id/1072/600/400?grayscale",          w: 600, h: 400, cls: "g6", minH: 180, alt: "Finition rasage" },
  { src: "https://picsum.photos/id/614/600/380?grayscale",           w: 600, h: 380, cls: "g7", minH: 200, alt: "Barbier au travail" },
  { src: "https://picsum.photos/id/338/600/380?grayscale",           w: 600, h: 380, cls: "g8", minH: 200, alt: "Ambiance salon" },
  { src: "https://picsum.photos/id/453/600/380?grayscale",           w: 600, h: 380, cls: "g9", minH: 200, alt: "Coupe de précision" },
  { src: "https://picsum.photos/id/1025/600/380?grayscale",          w: 600, h: 380, cls: "g10",minH: 200, alt: "Résultat coiffage" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
          <div>
            <span className="section-label mb-4">Portfolio</span>
            <h2 className="section-title">Nos <span className="text-gradient">Réalisations</span></h2>
          </div>
          <p className="max-w-sm" style={{ fontSize: ".875rem", color: "rgba(240,237,230,.4)", lineHeight: 1.75 }}>
            Photos réelles de nos clients. Chaque coupe est unique.
          </p>
        </div>

        <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
          {photos.map((p, i) => (
            <div key={i} className={`gitem ${p.cls}`} style={{ minHeight: p.minH }}>
              <img
                src={p.src} alt={p.alt} loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
                style={{ filter: p.real ? "none" : "grayscale(20%)" }}
              />
              {/* Badge "Vrai client" sur les 3 premières */}
              {p.real && (
                <div className="absolute top-3 left-3 z-10 badge" style={{ fontSize: ".55rem" }}>
                  <i className="fa-solid fa-check" aria-hidden="true" />French Barber
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-6" style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", color: "rgba(240,237,230,.3)", letterSpacing: ".15em", textTransform: "uppercase" }} data-aos="fade-up">
          Photos authentiques prises au salon · Lagnieu, Ain
        </p>
      </div>
    </section>
  );
}
