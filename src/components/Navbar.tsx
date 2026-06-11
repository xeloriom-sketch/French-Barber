"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about",    label: "À Propos" },
  { href: "#services", label: "Services" },
  { href: "#gallery",  label: "Galerie" },
  { href: "#team",     label: "Équipe" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Contact" },
];

function scroll(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 64, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map(l => document.querySelector(l.href));
      sections.forEach((el, i) => {
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 120) setActive(links[i].href);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => { setOpen(false); scroll(href); };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(13,17,17,.96)" : "rgba(13,17,17,.7)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${scrolled ? "rgba(240,237,230,.1)" : "transparent"}` }}>
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between" style={{ height: 64 }} aria-label="Navigation principale">

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          aria-label="French Barber — Accueil" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{ width: 38, height: 38, border: "1px solid rgba(200,134,74,.35)" }}>
            <i className="fa-solid fa-scissors" style={{ color: "#c8864a", fontSize: ".8rem", transform: "rotate(-45deg)" }} aria-hidden="true" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span style={{ fontFamily: "var(--font-title)", fontSize: "1.1rem", letterSpacing: ".1em", color: "#f0ede6", lineHeight: 1 }}>FRENCH</span>
            <span style={{ fontFamily: "var(--font-title)", fontSize: ".75rem", letterSpacing: ".2em", color: "#c8864a" }}>BARBER</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <button key={l.href} onClick={() => handleLink(l.href)}
              className="nav-link bg-transparent border-none cursor-pointer transition-colors duration-300"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", color: active === l.href ? "#c8864a" : "rgba(240,237,230,.6)", padding: "4px 0" }}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+33745107401" style={{ fontFamily: "var(--font-accent)", fontSize: ".6875rem", color: "rgba(240,237,230,.5)", letterSpacing: ".08em", textDecoration: "none" }}
            className="hover:text-[#c8864a] transition-colors">
            <i className="fa-solid fa-phone mr-2" style={{ fontSize: ".65rem" }} aria-hidden="true" />07 45 10 74 01
          </a>
          <button onClick={() => handleLink("#booking")} className="btn-primary" style={{ padding: ".65rem 1.5rem", fontSize: ".625rem" }}>
            Réserver
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          className={`lg:hidden flex flex-col gap-1.5 p-2 -mr-2 ${open ? "ham-open" : ""}`}>
          <span className="ham-line ham-1 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-2 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
          <span className="ham-line ham-3 block" style={{ width: 24, height: 1, background: "#f0ede6" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{ maxHeight: open ? "480px" : "0", overflow: "hidden", transition: "max-height .4s cubic-bezier(.22,1,.36,1)" }}>
        <div className="px-5 pb-6 pt-3 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(240,237,230,.06)", background: "rgba(13,17,17,.98)" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => handleLink(l.href)}
              className="text-left bg-transparent border-none cursor-pointer py-3 transition-colors"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".8125rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: active === l.href ? "#c8864a" : "rgba(240,237,230,.65)", borderBottom: "1px solid rgba(240,237,230,.04)" }}>
              {l.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-3">
            <a href="tel:+33745107401" className="flex items-center gap-2 btn-outline" style={{ fontSize: ".6875rem" }}>
              <i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01
            </a>
            <button onClick={() => handleLink("#booking")} className="btn-primary justify-center" style={{ fontSize: ".6875rem" }}>
              Réserver un créneau
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
