"use client";
import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing",  label: "Tarifs" },
  { href: "#styles",   label: "Styles" },
  { href: "#gallery",  label: "Réalisations" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 64, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastThreshold, setPastThreshold] = useState(false);

  const { scrollY } = useScroll();

  /* Valeurs interpolées — transition douce 0→80px de scroll */
  const bgOpacity    = useTransform(scrollY, [0, 80], [0, 0.88]);
  const blurPx       = useTransform(scrollY, [0, 80], [0, 18]);
  const borderOpacity= useTransform(scrollY, [0, 80], [0, 0.07]);
  const shadowOpacity= useTransform(scrollY, [0, 80], [0, 0.25]);

  useMotionValueEvent(scrollY, "change", (v) => setPastThreshold(v > 40));

  const go = (href: string) => { setOpen(false); scrollTo(href); };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(13,13,13,${v})`),
        backdropFilter: useTransform(blurPx, (v) => v > 0 ? `blur(${v}px) saturate(1.4)` : "none"),
        WebkitBackdropFilter: useTransform(blurPx, (v) => v > 0 ? `blur(${v}px) saturate(1.4)` : "none"),
        borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(240,237,230,${v})`),
        boxShadow: useTransform(shadowOpacity, (v) => `0 4px 32px rgba(0,0,0,${v})`),
      }}
    >
      <nav style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "88rem",
        margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
      }}>

        {/* ── LOGO ── */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}
          aria-label="French Barber">
          <div style={{ width: 34, height: 34, border: "1px solid rgba(240,237,230,.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-scissors" style={{ color: "rgba(240,237,230,.7)", fontSize: ".7rem", transform: "rotate(-45deg)" }} aria-hidden="true" />
          </div>
          <span style={{ fontFamily: "var(--font-title)", fontSize: "1.1rem", letterSpacing: ".14em", color: "#f0ede6", lineHeight: 1 }}>
            FRENCH BARBER
          </span>
        </a>

        {/* ── DESKTOP LINKS (xl+) ── */}
        <div className="hidden xl:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 1, minHeight: "unset", transition: "color .3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0ede6")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,.5)")}>
              {l.label}
            </button>
          ))}
        </div>

        {/* ── DESKTOP CTA (xl+) ── */}
        <div className="hidden xl:flex" style={{ alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
          <button onClick={() => go("#booking")}
            style={{ background: "transparent", color: "#f0ede6", fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: ".6rem 1.5rem", border: "1px solid rgba(240,237,230,.3)", cursor: "pointer", lineHeight: 1, minHeight: "unset", transition: "border-color .3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#f0ede6"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,237,230,.3)"; }}>
            Réserver
          </button>
        </div>

        {/* ── HAMBURGER (below xl) ── */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          className={`xl:hidden flex flex-col ${open ? "ham-open" : ""}`}
          style={{ gap: "5px", padding: ".5rem", background: "none", border: "none", cursor: "pointer", minHeight: "unset" }}>
          <span className="ham-line ham-1" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-2" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-3" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div style={{
          background: "rgba(8,8,8,.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(240,237,230,.05)",
          padding: "1.5rem clamp(1.25rem, 4vw, 3rem) 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ textAlign: "left", background: "none", border: "none", borderBottom: "1px solid rgba(240,237,230,.04)", cursor: "pointer", padding: ".875rem 0", fontFamily: "var(--font-accent)", fontSize: ".75rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,237,230,.6)", minHeight: "unset", lineHeight: 1, transition: "color .3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0ede6")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,.6)")}>
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: "1.25rem" }}>
            <button onClick={() => go("#booking")}
              style={{ width: "100%", background: "transparent", color: "#f0ede6", fontFamily: "var(--font-accent)", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: ".875rem", border: "1px solid rgba(240,237,230,.2)", cursor: "pointer", minHeight: "unset", lineHeight: 1 }}>
              Réserver un créneau
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
