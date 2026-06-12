"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState<"in" | "hold" | "exit" | "done">("in");
  const done = useRef(false);

  /* ── Progression simulée ── */
  useEffect(() => {
    let raf: number;
    let p = 0;
    const tick = () => {
      /* Ralentit vers 95 pour effet réel, saute à 100 à la fin */
      const step = p < 70  ? Math.random() * 3.5 + 1.5
                 : p < 92  ? Math.random() * 1.2 + 0.4
                            : Math.random() * 0.3 + 0.1;
      p = Math.min(p + step, 100);
      setProgress(Math.round(p));
      if (p < 100) { raf = requestAnimationFrame(tick); }
      else if (!done.current) {
        done.current = true;
        setTimeout(() => setPhase("hold"), 300);
        setTimeout(() => setPhase("exit"), 900);
        setTimeout(() => {
          setPhase("done");
          window.dispatchEvent(new CustomEvent("site:loaded"));
        }, 2100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Bloque le scroll pendant le loader ── */
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  if (phase === "done") return null;

  const isExit = phase === "exit";

  /* Easing cinématique */
  const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] pointer-events-none select-none">

        {/* ── Panneau GAUCHE ── */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{ background: "#0d0d0d" }}
          animate={isExit ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 1.05, ease }}
        />

        {/* ── Panneau DROITE ── */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{ background: "#0d0d0d" }}
          animate={isExit ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 1.05, ease }}
        />

        {/* ── Contenu centré ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-0"
          animate={isExit ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeIn" }}
        >
          {/* Ciseaux */}
          <motion.div
            initial={{ scale: 0, rotate: -80, opacity: 0 }}
            animate={{ scale: 1, rotate: -40, opacity: 0.45 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
            style={{ marginBottom: "1.8rem" }}
          >
            <i className="fa-solid fa-scissors" style={{ color: "#f0ede6", fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }} aria-hidden="true" />
          </motion.div>

          {/* FRENCH — slide depuis la gauche */}
          <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
            <motion.span
              initial={{ x: "-110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.3 }}
              style={{ display: "block", fontFamily: "var(--font-title)", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#f0ede6", letterSpacing: ".06em", textTransform: "uppercase" }}
            >
              FRENCH
            </motion.span>
          </div>

          {/* BARBER — slide depuis la droite */}
          <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
            <motion.span
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.45 }}
              style={{ display: "block", fontFamily: "var(--font-title)", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#f0ede6", letterSpacing: ".06em", textTransform: "uppercase" }}
            >
              BARBER
            </motion.span>
          </div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".45em", textTransform: "uppercase", color: "#f0ede6", marginTop: "1rem" }}
          >
            LAGNIEU · AIN
          </motion.p>

          {/* Barre de progression */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: "3.5rem", width: "min(200px, 30vw)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem" }}
          >
            <div style={{ width: "100%", height: "1px", background: "rgba(240,237,230,.1)", position: "relative", overflow: "hidden" }}>
              <motion.div
                style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "#f0ede6", transformOrigin: "left center" }}
                animate={{ scaleX: progress / 100 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>

            {/* Compteur */}
            <span style={{ fontFamily: "var(--font-title)", fontSize: "clamp(.65rem, 1.5vw, .85rem)", color: "rgba(240,237,230,.35)", letterSpacing: ".2em" }}>
              {String(progress).padStart(3, "0")}
            </span>
          </motion.div>
        </motion.div>

        {/* ── Ligne centrale — joint entre les deux panneaux ── */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-px w-px h-full"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(240,237,230,.08) 30%, rgba(240,237,230,.08) 70%, transparent)" }}
          animate={isExit ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

      </div>
    </AnimatePresence>
  );
}
