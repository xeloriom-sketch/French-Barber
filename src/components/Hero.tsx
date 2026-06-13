"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const videoRef  = useRef<HTMLVideoElement>(null);
  const firedRef  = useRef(false);

  /* Forcer la lecture — autoplay direct + fallback sur premier touch iOS */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    (v as any).defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.controls = false;

    const play = () => { v.play().catch(() => {}); };

    /* Tentative directe */
    play();
    v.addEventListener("canplay", play, { once: true });

    /* Fallback iOS : joue au premier toucher (scroll naturel du user) */
    const onTouch = () => { play(); };
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouch);
    };
  }, []);

  /* Scroll-driven sur tous les appareils */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let target = 0, current = 0, raf: number;

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
      target = Math.min(Math.max(window.scrollY / range, 0), 1) * v.duration;
    };
    v.addEventListener("loadedmetadata", onScroll, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Attend la fin du loader */
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
    <section id="hero" aria-label="French Barber — Barbershop à Lagnieu"
      className="relative w-full min-h-screen text-[#f0ede6] flex flex-col justify-between overflow-hidden select-none font-sans"
      style={{ background: "radial-gradient(circle at 50% 50%, #3a4646 0%, #222a2a 60%, #171d1d 100%)" }}>

      {/* Vidéo background */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: "hidden" }}>
        <video
          ref={videoRef}
          loop
          playsInline
          preload="auto"
          poster={`${basePath}/client-2.webp`}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%", minHeight: "100%",
            width: "auto", height: "auto",
            objectFit: "cover",
            opacity: 0.5,
            filter: "grayscale(100%)",
            pointerEvents: "none",
          }}
        >
          <source src={`${basePath}/hero.mp4`} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-[#0d0d0d]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/70 via-transparent to-[#0d0d0d]/30" />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "28vh", background: "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)", pointerEvents: "none" }} />
      </div>

      <div className="w-full h-24 relative z-10" />

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
          <SplitText tag="span" style={{ display: "block" }} delay={0.2}>French Barber —</SplitText>
          <SplitText tag="span" style={{ display: "block" }} delay={0.45}>Barbershop À Lagnieu.</SplitText>
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
          <a href="https://www.instagram.com/french_barber_015" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ig</a>
        </motion.div>
      </footer>
    </section>
  );
}
