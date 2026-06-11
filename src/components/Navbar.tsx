"use client";
import React, { useState, useEffect } from "react";

const links = [
  { href: "#about",    label: "À Propos" },
  { href: "#services", label: "Services" },
  { href: "#styles",   label: "Styles" },
  { href: "#gallery",  label: "Galerie" },
  { href: "#team",     label: "Équipe" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 60, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => { setOpen(false); scrollTo(href); };

  const navItemStyle: React.CSSProperties = {
    fontFamily: "var(--font-accent)",
    fontSize: ".6rem",
    fontWeight: 600,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: "rgba(240,237,230,.55)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    lineHeight: 1,
    minHeight: "unset",
    height: "auto",
    display: "flex",
    alignItems: "center",
    transition: "color .3s",
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(13,13,13,.97)" : "transparent", borderBottom: scrolled ? "1px solid rgba(240,237,230,.06)" : "none" }}>

      {/* height fixe 60px, tout centré verticalement */}
      <nav style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "80rem", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Logo — icône + texte sur une seule ligne */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }} aria-label="French Barber">
          <div style={{ width: 32, height: 32, border: "1px solid rgba(200,134,74,.35)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <i className="fa-solid fa-scissors" style={{ color: "#c8864a", fontSize: ".7rem", transform: "rotate(-45deg)" }} aria-hidden="true" />
          </div>
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".95rem", letterSpacing: ".14em", color: "#f0ede6", lineHeight: 1 }}>
            FRENCH <span style={{ color: "#c8864a" }}>BARBER</span>
          </span>
        </a>

        {/* Desktop links — tous sur le même axe */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "1.75rem" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} className="nav-link" style={navItemStyle}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Droite : tel + bouton */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "1.25rem" }}>
          <a href="tel:+33745107401" style={{ ...navItemStyle, color: "rgba(240,237,230,.4)", textDecoration: "none" }}
            className="hover:text-[#c8864a] transition-colors">
            <i className="fa-solid fa-phone" style={{ fontSize: ".6rem", color: "#c8864a", marginRight: ".4rem" }} aria-hidden="true" />07 45 10 74 01
          </a>
          <button onClick={() => go("#booking")}
            style={{ background: "#c8864a", color: "#0d0d0d", fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: ".55rem 1.25rem", border: "none", cursor: "pointer", lineHeight: 1, minHeight: "unset", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
            Réserver
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          style={{ display: "flex", flexDirection: "column", gap: "5px", padding: ".5rem", background: "none", border: "none", cursor: "pointer", minHeight: "unset" }}
          className={`lg:hidden ${open ? "ham-open" : ""}`}>
          <span className="ham-line ham-1" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-2" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-3" style={{ display: "block", width: 22, height: 1, background: "#f0ede6" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{ maxHeight: open ? "480px" : "0", overflow: "hidden", transition: "max-height .4s cubic-bezier(.22,1,.36,1)" }}>
        <div className="px-5 pb-6 pt-3 flex flex-col gap-1" style={{ background: "rgba(8,8,8,.98)", borderTop: "1px solid rgba(240,237,230,.06)" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              className="text-left bg-transparent border-none cursor-pointer py-3 transition-colors"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".75rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(240,237,230,.6)", borderBottom: "1px solid rgba(240,237,230,.04)" }}>
              {l.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-3">
            <a href="tel:+33745107401" className="btn-outline justify-center" style={{ fontSize: ".6875rem" }}>
              <i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01
            </a>
            <button onClick={() => go("#booking")} className="btn-primary justify-center" style={{ fontSize: ".6875rem" }}>
              Réserver un créneau
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
