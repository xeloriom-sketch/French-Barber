"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

export default function Hero() {
  const [ready, setReady]   = useState(false);
  const sectionRef          = useRef<HTMLElement>(null);
  const containerRef        = useRef<HTMLDivElement>(null);
  const firedRef            = useRef(false);

  /* ── Vidéo scroll-driven avec lerp pour douceur ── */
  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    const v = document.createElement("video");
    v.src         = `${basePath}/hero.mp4`;
    v.muted       = true;
    v.preload     = "auto";
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    v.style.cssText = "width:100%;height:100%;object-fit:cover;object-position:center;opacity:0.38;filter:grayscale(100%);pointer-events:none;position:absolute;inset:0;";
    div.appendChild(v);

    const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isMobile) {
      v.autoplay = true;
      v.loop     = true;
      v.setAttribute("autoplay", "");
      v.setAttribute("loop", "");
      const tryPlay = () => v.play().catch(() => {});
      v.addEventListener("canplaythrough", tryPlay, { once: true });
      v.addEventListener("loadeddata",     tryPlay, { once: true });
      tryPlay();
      return () => { v.remove(); };
    }

    /* Desktop : scroll-driven avec lerp */
    let target  = 0;
    let current = 0;
    let raf: number;

    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) > 0.001) {
        current += diff * 0.12;
        if (v.duration) v.currentTime = current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const range = window.innerHeight * 0.4;
    const onScroll = () => {
      if (!v.duration) return;
      const t = Math.min(Math.max(window.scrollY / range, 0), 1);
      target = t * v.duration;
    };

    v.addEventListener("loadedmetadata", onScroll, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      v.remove();
    };
  }, []);

  /* ── Attend la fin du loader pour lancer les animations ── */
  useEffect(() => {
    const trigger = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      setReady(true);
    };
    window.addEventListener("site:loaded", trigger);
    const fallback = setTimeout(trigger, 6000);
    return () => {
      window.removeEventListener("site:loaded", trigger);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" aria-label="French Barber — Barbershop à Lagnieu"
      className="relative w-full min-h-screen text-[#f0ede6] flex flex-col justify-between overflow-hidden select-none font-sans"
      style={{ background: "radial-gradient(circle at 50% 50%, #3a4646 0%, #222a2a 60%, #171d1d 100%)" }}>

        {/* Vidéo */}
        <div className="absolute inset-0 z-0">
          <div ref={containerRef} className="absolute inset-0" />
          <div className="absolute inset-0" style={{ background: "rgba(13,13,13,.35)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-[#0d0d0d]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/70 via-transparent to-[#0d0d0d]/30" />
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "28vh", background: "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)" }} />
        </div>

        <div className="w-full h-24 relative z-10" />

        {/* Titre */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center my-auto pt-12">

          <motion.div className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={ready ? { opacity: 0.4, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}>
            <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Depuis 1998</span>
            <span className="w-8 h-[1px] bg-[#f0ede6]" />
          </motion.div>

          <h1 className="text-left text-white uppercase font-bold tracking-tight select-none mb-8"
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)", lineHeight: "0.9", fontFamily: "var(--font-title), 'Impact', 'Arial Black', sans-serif" }}>
            {ready && (
              <>
                <SplitText tag="span" style={{ display: "block" }} delay={0.2}>L&apos;Art Du</SplitText>
                <SplitText tag="span" style={{ display: "block" }} delay={0.45}>Barbier.</SplitText>
              </>
            )}
          </h1>

          <motion.div className="group relative mt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}>
            <a href="#booking"
              className="text-[11px] tracking-[0.25em] uppercase text-[#f0ede6]/80 group-hover:text-white transition-colors duration-300 pb-2 block">
              Réserver maintenant
            </a>
            <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#f0ede6]/40 group-hover:w-20 transition-all duration-300" />
          </motion.div>
        </div>

        {/* Bas */}
        <footer className="relative z-30 w-full px-6 md:px-12 py-6 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: ".3em", color: "rgba(240,237,230,.25)", fontSize: "9px", textTransform: "uppercase" }}>
            DÉFILER
          </motion.span>
          <motion.div className="flex items-center gap-5"
            initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ color: "rgba(240,237,230,.45)", fontSize: "9px", letterSpacing: ".2em", textTransform: "uppercase" }}>
            <a href="https://www.facebook.com/p/French-Barber-61552611964085/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fb</a>
            <a href="#" className="hover:text-white transition-colors">Ig</a>
          </motion.div>
        </footer>

    </section>
  );
}
