import Image from "next/image";

const team = [
  { name: "Mehdi",   role: "Fondateur & Barbier", years: "5+ ans", pic: "614", tags: ["Coupe Classique", "Dégradé", "Barbe"] },
  { name: "Lucas",   role: "Barbier Confirmé",    years: "3 ans",  pic: "338", tags: ["Skin Fade", "Taper", "Soin Visage"] },
  { name: "Antoine", role: "Barbier & Styliste",  years: "2 ans",  pic: "453", tags: ["Design Barbe", "Coiffage", "Rasage"] },
];

const sectionBg = "radial-gradient(circle at 50% 80%, #222a2a 0%, #191f1f 60%, #131919 100%)";

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-h" style={{ background: sectionBg }}>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="block mb-4" style={{ fontSize: ".6875rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>Derrière le Fauteuil</span>
          <h2 id="team-h" className="uppercase mb-0" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(3rem,6vw,5rem)", lineHeight: 0.9, color: "#f4f3ef" }}>
            Notre <span className="gradient-text">Équipe</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <article key={m.name} className="team-card-wrap flex flex-col overflow-hidden group relative" data-aos="fade-up" data-aos-delay={String(i * 150)}>
              <div className="overflow-hidden relative">
                <Image
                  src={`https://picsum.photos/id/${m.pic}/500/667?grayscale`}
                  alt={`${m.name} – ${m.role}`}
                  width={500} height={667} loading="lazy"
                  className="w-full transition-all duration-500 group-hover:scale-[1.04]"
                  style={{ aspectRatio: "3/4", objectFit: "cover", filter: "grayscale(20%)", display: "block" }}
                />
                {/* Overlay on hover */}
                <div className="team-overlay" />
              </div>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(244,243,239,0.08)" }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="uppercase mb-1" style={{ fontFamily: "var(--font-title)", fontSize: "1.5rem", color: "#f4f3ef" }}>{m.name}</h3>
                    <span style={{ fontSize: ".625rem", letterSpacing: ".15em", textTransform: "uppercase", color: "#cf9152", fontWeight: 500, fontFamily: "var(--font-sans)" }}>{m.role}</span>
                  </div>
                  <span style={{ fontSize: ".625rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(244,243,239,0.25)", fontFamily: "var(--font-sans)", marginTop: 2 }}>{m.years}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {m.tags.map((t) => (
                    <span key={t} style={{ padding: ".15rem .5rem", border: "1px solid rgba(244,243,239,0.1)", fontSize: ".6875rem", letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(244,243,239,0.4)", fontFamily: "var(--font-sans)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
