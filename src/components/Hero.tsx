"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const firedRef     = useRef(false);

  /* Crée la vidéo entièrement en JS — bypass les bugs React SSR avec muted/autoplay */
  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    const v = document.createElement("video");
    v.src         = `${basePath}/hero.mp4`;
    v.muted       = true;
    v.autoplay    = true;
    v.loop        = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    v.style.cssText = "width:100%;height:100%;object-fit:cover;object-position:center;opacity:0.38;filter:grayscale(100%);pointer-events:none;position:absolute;inset:0;";

    div.appendChild(v);
    v.play().catch(() => {});

    return () => { v.remove(); };
  }, []);

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
    <section id="hero" aria-label="Professional Barbershop Hero"
      className="relative w-full min-h-screen text-[#f0ede6] flex flex-col justify-between overflow-hidden select-none font-sans"
      style={{ background: "radial-gradient(circle at 50% 50%, #3a4646 0%, #222a2a 60%, #171d1d 100%)" }}>

      {/* Vidéo background — créée en JS pur pour contourner les bugs Safari/React */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div ref={containerRef} className="absolute inset-0" />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,.35)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-[#0d0d0d]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/70 via-transparent to-[#0d0d0d]/30" />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "28vh", background: "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)" }} />
      </div>

      <div className="w-full h-24 relative z-10" />

      {/* Contenu — ne s'anime que quand ready = true */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center my-auto pt-12">

        <motion.div className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={ready ? { opacity: 0.4, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}>
          <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Since 1998</span>
          <span className="w-8 h-[1px] bg-[#f0ede6]" />
        </motion.div>

        <h1 className="text-left text-white uppercase font-bold tracking-tight select-none mb-8"
          style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)", lineHeight: "0.9", fontFamily: "var(--font-title), 'Impact', 'Arial Black', sans-serif" }}>
          {ready && (
            <>
              <SplitText tag="span" style={{ display: "block" }} delay={0.2}>A Gentleman&apos;s</SplitText>
              <SplitText tag="span" style={{ display: "block" }} delay={0.45}>Collective</SplitText>
            </>
          )}
        </h1>

        <motion.div className="group relative mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}>
          <a href="#booking"
            className="text-[11px] tracking-[0.25em] uppercase text-[#f0ede6]/80 group-hover:text-white transition-colors duration-300 pb-2 block">
            Book Now
          </a>
          <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#f0ede6]/40 group-hover:w-20 transition-all duration-300" />
        </motion.div>
      </div>

      <footer className="relative z-30 w-full px-6 md:px-12 py-6 flex justify-between items-center">
        <motion.span
          initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: ".3em", color: "rgba(240,237,230,.25)", fontSize: "9px", textTransform: "uppercase" }}>
          SCROLL
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
