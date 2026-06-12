"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Mobile / trackpad → laisse le navigateur gérer nativement
    if (window.matchMedia("(hover: none)").matches) return;

    let target  = window.scrollY;
    let current = window.scrollY;
    let raf: number;
    const EASE  = 0.09;  // 0 = figé, 1 = instantané — 0.09 = doux et fluide

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /* ── Wheel : accumule la cible, bloque le scroll natif ── */
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target = Math.max(0, Math.min(target + e.deltaY, maxScroll()));
    };

    /* ── Clavier / scrollbar / ancres → resync la cible ── */
    const onScroll = () => {
      // Si l'écart est grand (jump natif), on resync sans lerp
      if (Math.abs(window.scrollY - current) > 80) {
        current = window.scrollY;
        target  = window.scrollY;
      }
    };

    /* ── Boucle RAF ── */
    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) > 0.3) {
        current = lerp(current, target, EASE);
        window.scrollTo(0, current);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("wheel",  onWheel,  { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel",  onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
