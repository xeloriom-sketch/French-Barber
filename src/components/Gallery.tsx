"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitText from "./SplitText";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

type MediaItem = {
  id: number;
  src: string;
  alt: string;
  category: "photo" | "video";
};

const media: MediaItem[] = [
  { id: 1,  src: `${basePath}/reel-1.mp4`,                 alt: "Reel coupe French Barber",           category: "video" },
  { id: 2,  src: `${basePath}/insta-DWTRLmHjbpC.mp4`,     alt: "Reel barbe French Barber",            category: "video" },
  { id: 3,  src: `${basePath}/insta-DWOoqWPjY8c.mp4`,     alt: "Reel French Barber Lagnieu",          category: "video" },
  { id: 4,  src: `${basePath}/insta-Cy6Xf-lKbEo.jpg`,     alt: "Coupe client French Barber",          category: "photo" },
  { id: 5,  src: `${basePath}/insta-CywIjxCK1st.jpg`,     alt: "Réalisation coupe French Barber",     category: "photo" },
  { id: 6,  src: `${basePath}/insta-CywIdewqriO.jpg`,     alt: "Coupe homme French Barber Lagnieu",   category: "photo" },
  { id: 7,  src: `${basePath}/insta-CywISe6qTyp.jpg`,     alt: "Barbe sculptée French Barber",        category: "photo" },
  { id: 8,  src: `${basePath}/insta-CywIO4BqAc8.jpg`,     alt: "Coupe dégradé French Barber",         category: "photo" },
  { id: 9,  src: `${basePath}/insta-CywIKlXq_lW.jpg`,     alt: "Style coiffure French Barber",        category: "photo" },
  { id: 10, src: `${basePath}/insta-CywIGcuKmvl.jpg`,     alt: "Finition rasage French Barber",       category: "photo" },
  { id: 11, src: `${basePath}/insta-CywHP2GqKV0.jpg`,     alt: "Résultat coupe French Barber",        category: "photo" },
  { id: 12, src: `${basePath}/insta-CywHKP3Klok.jpg`,     alt: "Coupe premium French Barber Lagnieu", category: "photo" },
];

const FILTERS = ["Tout", "Photos", "Vidéos"] as const;
type Filter = typeof FILTERS[number];

/* ── Lecteur vidéo mini (grille) ───────────────────── */
function GridVideo({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current; if (!v) return;
    v.paused ? (v.play(), setPlaying(true)) : (v.pause(), setPlaying(false));
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current; if (!v) return;
    v.muted = !v.muted; setMuted(v.muted);
  };
  const onTime = () => {
    const v = ref.current;
    if (v?.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <div className="w-full h-full relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <video ref={ref} src={src} autoPlay muted loop playsInline aria-label={alt}
        onTimeUpdate={onTime}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

      <div style={{
        position: "absolute", inset: 0,
        background: hover ? "rgba(0,0,0,.4)" : "transparent",
        transition: "background .25s",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: 10, pointerEvents: hover ? "auto" : "none",
      }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={togglePlay} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(0,0,0,.55)", border: "1px solid rgba(240,237,230,.25)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: hover ? 1 : 0, transition: "opacity .2s" }}>
            <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`} style={{ color: "#f0ede6", fontSize: ".75rem", marginLeft: playing ? 0 : 2 }} />
          </button>
        </div>
        <div style={{ opacity: hover ? 1 : 0, transition: "opacity .2s" }}>
          <div style={{ height: 2, background: "rgba(240,237,230,.15)", borderRadius: 1, marginBottom: 6 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#f0ede6", borderRadius: 1, transition: "width .1s linear" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: ".45rem", letterSpacing: ".1em", color: "rgba(240,237,230,.45)", textTransform: "uppercase" }}>
              <i className="fa-brands fa-instagram" style={{ marginRight: 3 }} />french_barber_015
            </span>
            <button onClick={toggleMute} style={{ background: "rgba(0,0,0,.4)", border: "1px solid rgba(240,237,230,.15)", borderRadius: 2, cursor: "pointer", padding: "3px 6px" }}>
              <i className={`fa-solid ${muted ? "fa-volume-xmark" : "fa-volume-high"}`} style={{ color: "#f0ede6", fontSize: ".6rem" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Lightbox ──────────────────────────────────────── */
function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: MediaItem[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClose}
      role="dialog" aria-modal="true" aria-label={item.alt}>

      {/* Fermer */}
      <button onClick={onClose} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer", color: "rgba(240,237,230,.6)", fontSize: "1.5rem", lineHeight: 1 }} aria-label="Fermer">
        <i className="fa-solid fa-xmark" />
      </button>

      {/* Compteur */}
      <span style={{ position: "absolute", top: 24, left: 24, fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", color: "rgba(240,237,230,.35)", textTransform: "uppercase" }}>
        {index + 1} / {items.length}
      </span>

      {/* Précédent */}
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,.5)", border: "1px solid rgba(240,237,230,.15)", borderRadius: 2, cursor: "pointer", color: "#f0ede6", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
        aria-label="Précédent">
        <i className="fa-solid fa-chevron-left" />
      </button>

      {/* Suivant */}
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,.5)", border: "1px solid rgba(240,237,230,.15)", borderRadius: 2, cursor: "pointer", color: "#f0ede6", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
        aria-label="Suivant">
        <i className="fa-solid fa-chevron-right" />
      </button>

      {/* Média */}
      <motion.div key={item.id}
        initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: "min(90vw, 700px)", maxHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>

        {item.category === "video" ? (
          <video src={item.src} controls autoPlay
            style={{ maxWidth: "100%", maxHeight: "75vh", borderRadius: 2, background: "#0d0d0d" }} />
        ) : (
          <img src={item.src} alt={item.alt}
            style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: 2, display: "block" }} />
        )}

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.45)" }}>
            <i className="fa-brands fa-instagram" style={{ marginRight: 5 }} />french_barber_015 · French Barber Lagnieu
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Galerie principale ─────────────────────────────── */
export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "Tout" ? media
    : media.filter(m => m.category === (filter === "Photos" ? "photo" : "video"));

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex(m => m.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const goNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  const btnBase: React.CSSProperties = {
    fontFamily: "var(--font-accent)", fontSize: ".55rem", fontWeight: 700,
    letterSpacing: ".18em", textTransform: "uppercase",
    padding: ".4rem 1rem", border: "1px solid rgba(240,237,230,.15)",
    cursor: "pointer", transition: "all .25s", borderRadius: 0,
  };

  return (
    <section id="gallery" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <div className="w-full mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-aos="fade-up">
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

        {/* Filtres */}
        <div className="flex gap-2 mb-10" data-aos="fade-up" role="group" aria-label="Filtrer la galerie">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                ...btnBase,
                background: filter === f ? "#f0ede6" : "transparent",
                color: filter === f ? "#0d0d0d" : "rgba(240,237,230,.5)",
                borderColor: filter === f ? "#f0ede6" : "rgba(240,237,230,.15)",
              }}
              aria-pressed={filter === f}>
              {f === "Vidéos" && <i className="fa-solid fa-play" style={{ fontSize: ".45rem", marginRight: 5 }} />}
              {f === "Photos" && <i className="fa-solid fa-image" style={{ fontSize: ".45rem", marginRight: 5 }} />}
              {f}
            </button>
          ))}
        </div>

        {/* Grille */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div key={item.id} layout
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: .9 }}
                transition={{ duration: .25, delay: i * .03 }}
                className="gitem"
                role="button" tabIndex={0} aria-label={`Agrandir : ${item.alt}`}
                onClick={() => item.category === "photo" && openLightbox(item.id)}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && openLightbox(item.id)}
                style={{ cursor: item.category === "photo" ? "zoom-in" : "default" }}>

                {item.category === "video" ? (
                  <GridVideo src={item.src} alt={item.alt} />
                ) : (
                  <>
                    <img src={item.src} alt={item.alt} loading={i < 4 ? "eager" : "lazy"}
                      className="w-full h-full object-cover" />
                    {/* Overlay hover photo */}
                    <div className="gallery-photo-overlay">
                      <i className="fa-solid fa-magnifying-glass-plus" style={{ fontSize: "1.2rem", color: "#f0ede6", opacity: .8 }} />
                    </div>
                  </>
                )}

                {/* Badge Instagram */}
                <span style={{
                  position: "absolute", bottom: 8, left: 8, zIndex: 5,
                  fontFamily: "var(--font-accent)", fontSize: ".45rem",
                  letterSpacing: ".08em", color: "rgba(240,237,230,.4)",
                  textTransform: "uppercase", pointerEvents: "none",
                }}>
                  <i className="fa-brands fa-instagram" style={{ marginRight: 3 }} />french_barber_015
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lien Instagram */}
        <div className="mt-10" data-aos="fade-up">
          <a href="https://www.instagram.com/french_barber_015" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem" }}>
            <i className="fa-brands fa-instagram mr-2" />Voir plus sur Instagram →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox items={filtered} index={lightboxIndex}
            onClose={closeLightbox} onPrev={goPrev} onNext={goNext} />
        )}
      </AnimatePresence>
    </section>
  );
}
