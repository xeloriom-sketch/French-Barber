import Image from "next/image";

const photos = [
  { id: "1005", alt: "Coupe classique premium",   cls: "g1", w: 600, h: 800, minH: 280 },
  { id: "1025", alt: "Barbe sculptée",             cls: "g2", w: 600, h: 400, minH: 200 },
  { id: "1035", alt: "Rasage traditionnel",        cls: "g3", w: 600, h: 400, minH: 200 },
  { id: "1062", alt: "Fade moderne",               cls: "g4", w: 600, h: 400, minH: 180 },
  { id: "1074", alt: "Style cheveux premium",      cls: "g5", w: 400, h: 400, minH: 180 },
  { id: "1072", alt: "Soin du visage",             cls: "g6", w: 600, h: 400, minH: 180 },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-h" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
        <div>
          <span className="block mb-4" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Our Portfolio</span>
          <h2 id="gallery-h" className="uppercase mb-0" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9, color: "#f4f3ef" }}>The Work</h2>
        </div>
        <p className="max-w-xs" style={{ fontSize: ".875rem", color: "rgba(244,243,239,0.4)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
          Every cut tells a story. Browse our latest work from the chair.
        </p>
      </div>

      <div className="gallery-grid" data-aos="fade-up" data-aos-delay="150">
        {photos.map((p) => (
          <div key={p.id} className={`gitem ${p.cls}`} style={{ minHeight: p.minH }}>
            <Image
              src={`https://picsum.photos/id/${p.id}/${p.w}/${p.h}?grayscale`}
              alt={p.alt}
              width={p.w} height={p.h}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
