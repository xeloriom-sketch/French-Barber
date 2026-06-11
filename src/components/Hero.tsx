import Image from "next/image";

const prices = [
  { label: "Coupe Classique",    price: "25€" },
  { label: "Taille de Barbe",    price: "15€" },
  { label: "Rasage Coupe-Choux", price: "20€" },
  { label: "Coupe + Barbe",      price: "35€" },
  { label: "Soin du Visage",     price: "20€" },
];

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero"
      className="relative flex flex-col justify-between overflow-hidden min-h-screen select-none"
      style={{ paddingTop: 64, background: "radial-gradient(ellipse at 55% 40%, #2e3a3a 0%, #1e2828 40%, #141c1c 80%, #0d1111 100%)" }}>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: .025, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(240,237,230,.8) 60px,rgba(240,237,230,.8) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(240,237,230,.8) 60px,rgba(240,237,230,.8) 61px)" }} aria-hidden="true" />

      {/* Giant title — z-10 (behind photo) */}
      <div className="absolute inset-x-0 pointer-events-none px-5 md:px-10 z-10" style={{ top: "calc(64px + 8%)" }}>
        <div className="max-w-7xl mx-auto">
          <h1 aria-label="French Barber" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(4rem,14vw,16rem)", lineHeight: .82, letterSpacing: "-.01em", color: "#f0ede6" }}>
            <span className="block text-left hero-line-1">French</span>
            <span className="block text-right hero-line-2" style={{ paddingRight: "clamp(1rem,5vw,5rem)" }}>Barber</span>
          </h1>
        </div>
      </div>

      {/* Photo — z-20 (cuts through title) */}
      <div className="absolute bottom-0 z-20 pointer-events-none" style={{ left: "-6%", width: "72vw", maxWidth: "980px" }}>
        <Image
          src="https://cdn.prod.website-files.com/67c1739741f245e840f55398/67d7b2e64827888297dd4fa0_client%20img%204.webp"
          alt="Barbier French Barber Lagnieu"
          width={980} height={1300} priority fetchPriority="high"
          className="w-full h-auto object-contain object-bottom"
          style={{ filter: "none" }}
        />
      </div>

      {/* Right col — z-30 */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-end mt-auto relative z-30 px-5 md:px-10 pb-10" style={{ paddingTop: "6rem" }}>
        <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 pb-4">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="inline-block" style={{ width: "2rem", height: "2px", background: "#c8864a" }} />
            <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".22em", textTransform: "uppercase", color: "#c8864a", fontWeight: 600 }}>
              Lagnieu · Ain · France
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="stars" aria-label="4.9 étoiles sur 5">★★★★★</div>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.5)" }}>4.9 — 47 avis Google</span>
          </div>

          {/* Price list */}
          <div style={{ background: "rgba(13,17,17,.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(240,237,230,.08)" }} className="p-5">
            {prices.map((p, i) => (
              <div key={p.label} className="flex justify-between items-center py-2.5"
                style={{ borderBottom: i < prices.length - 1 ? "1px solid rgba(240,237,230,.07)" : "none" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.75)", fontWeight: 300 }}>{p.label}</span>
                <span style={{ fontFamily: "var(--font-accent)", fontSize: ".875rem", color: "#f0ede6", fontWeight: 600 }}>{p.price}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: ".8125rem", color: "rgba(240,237,230,.75)", fontWeight: 300 }}>Pack Complet</span>
              <a href="#booking" className="btn-primary" style={{ padding: ".55rem 1.25rem", fontSize: ".6rem" }}>
                Réserver <i className="fa-solid fa-arrow-right ml-1" style={{ fontSize: ".55rem" }} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Phone CTA */}
          <a href="tel:+33745107401" className="flex items-center gap-3 transition-colors"
            style={{ textDecoration: "none", color: "rgba(240,237,230,.5)", fontSize: ".75rem", fontFamily: "var(--font-accent)" }}>
            <div style={{ width: 32, height: 32, border: "1px solid rgba(200,134,74,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fa-solid fa-phone" style={{ color: "#c8864a", fontSize: ".65rem" }} aria-hidden="true" />
            </div>
            <span className="hover:text-[#c8864a] transition-colors">07 45 10 74 01</span>
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-30 flex justify-between items-center px-5 md:px-10 py-3"
        style={{ background: "rgba(13,17,17,.6)", borderTop: "1px solid rgba(240,237,230,.07)", fontSize: ".5rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.2)", fontFamily: "var(--font-accent)" }}>
        <span>French Barber · Lagnieu 01150</span>
        {/* Scroll indicator */}
        <div aria-hidden="true" className="flex flex-col items-center gap-2" style={{ border: "1px solid rgba(240,237,230,.15)", padding: ".4rem .5rem" }}>
          <div className="scroll-dot" style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8864a" }} />
        </div>
        <span>36 Route du Port</span>
      </div>
    </section>
  );
}
