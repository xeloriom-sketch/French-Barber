"use client";
import { useState, useEffect } from "react";

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

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(13,13,13,.97)" : "transparent", borderBottom: scrolled ? "1px solid rgba(240,237,230,.06)" : "none" }}>
      <nav className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between" style={{ height: 60 }}>

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group" aria-label="French Barber">
          <div style={{ width: 36, height: 36, border: "1px solid rgba(200,134,74,.35)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-scissors" style={{ color: "#c8864a", fontSize: ".75rem", transform: "rotate(-45deg)" }} aria-hidden="true" />
          </div>
          <div className="hidden sm:flex flex-col leading-none" style={{ gap: 1 }}>
            <span style={{ fontFamily: "var(--font-title)", fontSize: "1rem", letterSpacing: ".12em", color: "#f0ede6" }}>FRENCH</span>
            <span style={{ fontFamily: "var(--font-title)", fontSize: ".65rem", letterSpacing: ".22em", color: "#c8864a" }}>BARBER</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              className="nav-link bg-transparent border-none cursor-pointer transition-colors duration-300"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,230,.55)", padding: "4px 0" }}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+33745107401" style={{ fontFamily: "var(--font-accent)", fontSize: ".625rem", color: "rgba(240,237,230,.4)", letterSpacing: ".08em", textDecoration: "none" }}
            className="hover:text-[#c8864a] transition-colors">
            <i className="fa-solid fa-phone mr-2" style={{ fontSize: ".6rem", color: "#c8864a" }} aria-hidden="true" />07 45 10 74 01
          </a>
          <button onClick={() => go("#booking")} className="btn-primary" style={{ padding: ".6rem 1.4rem", fontSize: ".6rem" }}>
            Réserver
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          className={`lg:hidden flex flex-col gap-1.5 p-2 -mr-2 bg-transparent border-none ${open ? "ham-open" : ""}`}>
          <span className="ham-line ham-1 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-2 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-3 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
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
