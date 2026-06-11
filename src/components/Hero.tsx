import Image from "next/image";

const prices = [
  { label: "Classic Haircut", price: "25€" },
  { label: "Beard Sculpture", price: "15€" },
  { label: "Razor Shave", price: "20€" },
  { label: "Cut + Beard Combo", price: "35€" },
  { label: "Facial Care", price: "20€" },
];

export default function Hero() {
  return (
      <section
          id="hero"
          aria-label="Hero"
          className="relative flex flex-col justify-between overflow-hidden min-h-screen select-none"
          style={{
            paddingTop: 64,
            background: "radial-gradient(ellipse at 50% 50%, #2e3a3a 0%, #1e2828 40%, #141c1c 80%, #0d1111 100%)",
          }}
      >
        {/* Subtle grid texture */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(240,237,230,.8) 60px,rgba(240,237,230,.8) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(240,237,230,.8) 60px,rgba(240,237,230,.8) 61px)",
            }}
            aria-hidden="true"
        />

        {/* Giant title — z-10 (behind photo) */}
        <div className="absolute inset-x-0 pointer-events-none px-5 md:px-10 z-10" style={{ top: "calc(64px + 8%)" }}>
          <div className="max-w-7xl mx-auto">
            <h1
                aria-label="French Barber Collective"
                style={{
                  fontFamily: "var(--font-title)",
                  fontSize: "clamp(3rem,10vw,12rem)",
                  lineHeight: 1,
                  letterSpacing: "-.01em",
                  color: "#f0ede6",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
            >
              A Gentleman&apos;s<br />Collective
            </h1>
            <h2
                style={{
                  fontFamily: "var(--font-title)",
                  fontSize: "clamp(2rem,6vw,8rem)",
                  lineHeight: 1,
                  letterSpacing: "-.01em",
                  color: "#f0ede6",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  paddingLeft: "clamp(2rem,10vw,10rem)",
                  marginTop: "1rem",
                }}
            >
              And Premium Services.
            </h2>
          </div>
        </div>

        {/* Photo — z-20 (cuts through title) */}
        <div className="absolute bottom-0 z-20 pointer-events-none" style={{ left: "0%", width: "100%", textAlign: "center" }}>
          <Image
              src="https://cdn.prod.website-files.com/67c1739741f245e840f55398/67d7b2e64827888297dd4fa0_client%20img%204.webp"
              alt="French Barber Collective Studio Lagnieu"
              width={1200}
              height={1600}
              priority
              fetchPriority="high"
              className="mx-auto h-auto object-contain object-bottom"
              style={{ width: "90vw", maxWidth: "1200px", filter: "none" }}
          />
        </div>

        {/* Right col — z-30 */}
        <div
            className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-end mt-auto relative z-30 px-5 md:px-10 pb-10"
            style={{ paddingTop: "6rem" }}
        >
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 pb-4">
            {/* Phone CTA */}
            <a
                href="tel:+33745107401"
                className="flex items-center gap-3 transition-colors mb-6"
                style={{
                  textDecoration: "none",
                  color: "rgba(240,237,230,.5)",
                  fontSize: ".75rem",
                  fontFamily: "var(--font-accent)",
                }}
            >
              <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid rgba(200,134,74,.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
              >
                <i className="fa-solid fa-phone" style={{ color: "#c8864a", fontSize: ".65rem" }} aria-hidden="true" />
              </div>
              <span className="hover:text-[#c8864a] transition-colors">07 45 10 74 01</span>
            </a>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="inline-block" style={{ width: "2rem", height: "2px", background: "#c8864a" }} />
              <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: ".6rem",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "#c8864a",
                    fontWeight: 600,
                  }}
              >
              Lagnieu · Ain · France
            </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="stars" aria-label="4.9 étoiles sur 5">
                ★★★★★
              </div>
              <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.5)" }}>
              4.9 — 47 Google reviews
            </span>
            </div>

            {/* Price list */}
            <div
                style={{
                  background: "rgba(13,17,17,.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(240,237,230,.08)",
                }}
                className="p-5"
            >
              {prices.map((p, i) => (
                  <div
                      key={p.label}
                      className="flex justify-between items-center py-2.5"
                      style={{ borderBottom: i < prices.length - 1 ? "1px solid rgba(240,237,230,.07)" : "none" }}
                  >
                <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: ".8125rem",
                      color: "rgba(240,237,230,.75)",
                      fontWeight: 300,
                    }}
                >
                  {p.label}
                </span>
                    <span
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: ".875rem",
                          color: "#f0ede6",
                          fontWeight: 600,
                        }}
                    >
                  {p.price}
                </span>
                  </div>
              ))}
              <div className="flex justify-between items-center pt-3">
              <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: ".8125rem",
                    color: "rgba(240,237,230,.75)",
                    fontWeight: 300,
                  }}
              >
                Collective Pack
              </span>
                <a href="#booking" className="btn-primary" style={{ padding: ".55rem 1.25rem", fontSize: ".6rem" }}>
                  Book Now <i className="fa-solid fa-arrow-right ml-1" style={{ fontSize: ".55rem" }} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div
            className="relative z-30 flex justify-between items-center px-5 md:px-10 py-3"
            style={{
              background: "rgba(13,17,17,.6)",
              borderTop: "1px solid rgba(240,237,230,.07)",
              fontSize: ".5rem",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "rgba(240,237,230,.2)",
              fontFamily: "var(--font-accent)",
            }}
        >
          <span>French Barber Collective · Lagnieu</span>
          {/* Scroll indicator */}
          <div
              aria-hidden="true"
              className="flex flex-col items-center gap-2"
              style={{ border: "1px solid rgba(240,237,230,.15)", padding: ".4rem .5rem" }}
          >
            <div className="scroll-dot" style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8864a" }} />
          </div>
          <span>Since 1989 · Quality Service</span>
        </div>
      </section>
  );
}