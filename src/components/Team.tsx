"use client";
import Image from "next/image";
import { useRef } from "react";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const team = [
  { name: "Mehdi",   role: "Fondateur & Barbier Chef", years: "5+ ans", pic: `${basePath}/avatar-2.png`, tags: ["Coupe Classique", "Dégradé", "Barbe"] },
  { name: "Lucas",   role: "Barbier Confirmé",         years: "3 ans",  pic: `${basePath}/avatar-2.png`, tags: ["Skin Fade", "Taper", "Soin Visage"] },
  { name: "Antoine", role: "Barbier & Styliste",       years: "2 ans",  pic: `${basePath}/avatar-2.png`, tags: ["Design Barbe", "Coiffage", "Rasage"] },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;   // -0.5 à +0.5
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.03)`;
    el.style.transition = "transform .1s ease-out";
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) {
      shine.style.opacity = "1";
      shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(240,237,230,.12) 0%, transparent 70%)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) shine.style.opacity = "0";
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ willChange: "transform", transformStyle: "preserve-3d", position: "relative" }}>
      <div className="tilt-shine" style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none", opacity: 0, borderRadius: 2, transition: "opacity .3s" }} />
      {children}
    </div>
  );
}

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
              <TiltCard>
                <article className="team-card-wrap flex flex-col">
                  <div className="team-img-wrap">
                    <Image src={m.pic} alt={`${m.name} – ${m.role} chez French Barber Lagnieu`}
                      width={500} height={625} loading="lazy" className="team-img" />
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
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
