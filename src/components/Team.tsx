import Image from "next/image";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const team = [
  { name: "Mehdi",   role: "Fondateur & Barbier Chef", years: "5+ ans", pic: `${basePath}/avatar-2.png`, tags: ["Coupe Classique", "Dégradé", "Barbe"] },
  { name: "Lucas",   role: "Barbier Confirmé",         years: "3 ans",  pic: `${basePath}/avatar-2.png`, tags: ["Skin Fade", "Taper", "Soin Visage"] },
  { name: "Antoine", role: "Barbier & Styliste",       years: "2 ans",  pic: `${basePath}/avatar-2.png`, tags: ["Design Barbe", "Coiffage", "Rasage"] },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#0d0d0d]">
      <div className="py-28 md:py-36 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-left text-white uppercase font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Nos Barbiers.</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>Votre Style.</SplitText>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <FadeUp key={m.name} delay={i * 0.12}>
            <article className="team-card-wrap flex flex-col">
              <div className="team-img-wrap">
                <Image src={m.pic} alt={`${m.name} – ${m.role} chez French Barber Lagnieu`}
                  width={500} height={667} loading="lazy" className="team-img"
                  style={{ filter: "grayscale(100%)" }} />
                <div className="team-overlay" />
              </div>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(240,237,230,.08)" }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1.5rem", color: "#f0ede6", textTransform: "uppercase" }}>{m.name}</h3>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.4)", fontWeight: 600 }}>{m.role}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,237,230,.25)", marginTop: 3 }}>{m.years}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {m.tags.map(t => (
                    <span key={t} style={{ padding: ".15rem .5rem", border: "1px solid rgba(240,237,230,.1)", fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(240,237,230,.4)", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
