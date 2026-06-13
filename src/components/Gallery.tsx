"use client";
import { useRef, useState } from "react";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

type MediaItem = { src: string; alt: string; video?: boolean };

const media: MediaItem[] = [
  { src: `${basePath}/reel-1.mp4`,                 alt: "Reel coupe French Barber",              video: true },
  { src: `${basePath}/insta-DWTRLmHjbpC.mp4`,     alt: "Reel barbe French Barber",               video: true },
  { src: `${basePath}/insta-DWOoqWPjY8c.mp4`,     alt: "Reel French Barber Lagnieu",             video: true },
  { src: `${basePath}/insta-Cy6Xf-lKbEo.jpg`,     alt: "Coupe client French Barber" },
  { src: `${basePath}/insta-CywIjxCK1st.jpg`,     alt: "Réalisation coupe French Barber" },
  { src: `${basePath}/insta-CywIdewqriO.jpg`,     alt: "Coupe homme French Barber Lagnieu" },
  { src: `${basePath}/insta-CywISe6qTyp.jpg`,     alt: "Barbe sculptée French Barber" },
  { src: `${basePath}/insta-CywIO4BqAc8.jpg`,     alt: "Coupe dégradé French Barber" },
  { src: `${basePath}/insta-CywIKlXq_lW.jpg`,     alt: "Style coiffure French Barber" },
  { src: `${basePath}/insta-CywIGcuKmvl.jpg`,     alt: "Finition rasage French Barber" },
  { src: `${basePath}/insta-CywHP2GqKV0.jpg`,     alt: "Résultat coupe French Barber" },
  { src: `${basePath}/insta-CywHKP3Klok.jpg`,     alt: "Coupe premium French Barber Lagnieu" },
];

function VideoPlayer({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(false);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = ref.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={togglePlay}
    >
      <video ref={ref} src={src} autoPlay muted loop playsInline aria-label={alt}
        onTimeUpdate={onTimeUpdate}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Overlay contrôles */}
      <div style={{
        position: "absolute", inset: 0,
        background: hover ? "rgba(0,0,0,.35)" : "transparent",
        transition: "background .3s",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: "10px",
      }}>
        {/* Bouton play/pause centré */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(0,0,0,.55)", border: "1px solid rgba(240,237,230,.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hover ? 1 : 0, transition: "opacity .25s",
          }}>
            <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`}
              style={{ color: "#f0ede6", fontSize: ".85rem", marginLeft: playing ? 0 : 2 }}
              aria-hidden="true" />
          </div>
        </div>

        {/* Bas : barre de progression + mute */}
        <div style={{ opacity: hover ? 1 : 0, transition: "opacity .25s" }}>
          {/* Barre de progression cliquable */}
          <div onClick={seekTo}
            style={{ height: 3, background: "rgba(240,237,230,.2)", borderRadius: 2, marginBottom: 8, cursor: "pointer" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#f0ede6", borderRadius: 2, transition: "width .1s linear" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: ".5rem", letterSpacing: ".1em", color: "rgba(240,237,230,.5)", textTransform: "uppercase" }}>
              <i className="fa-brands fa-instagram" aria-hidden="true" style={{ marginRight: 4 }} />french_barber_015
            </span>
            <button onClick={toggleMute}
              style={{ background: "rgba(0,0,0,.4)", border: "1px solid rgba(240,237,230,.15)", borderRadius: 2, cursor: "pointer", padding: "3px 7px", lineHeight: 1 }}>
              <i className={`fa-solid ${muted ? "fa-volume-xmark" : "fa-volume-high"}`}
                style={{ color: "#f0ede6", fontSize: ".65rem" }} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              <div key={i} className="gitem">
                {p.video ? (
                  <VideoPlayer src={p.src} alt={p.alt} />
                ) : (
                  <>
                    <img src={p.src} alt={p.alt} loading={i < 4 ? "eager" : "lazy"}
                      className="w-full h-full object-cover" />
                    <div style={{
                      position: "absolute", bottom: 8, left: 8,
                      fontFamily: "var(--font-accent)", fontSize: ".5rem",
                      letterSpacing: ".1em", color: "rgba(240,237,230,.45)",
                      textTransform: "uppercase",
                    }}>
                      <i className="fa-brands fa-instagram" aria-hidden="true" style={{ marginRight: 4 }} />french_barber_015
                    </div>
                  </>
                )}
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
