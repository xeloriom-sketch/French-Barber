"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about",        label: "À Propos" },
  { href: "#services",     label: "Services" },
  { href: "#gallery",      label: "Galerie" },
  { href: "#team",         label: "Équipe" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact",      label: "Contact" },
];

function smoothScroll(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 64, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    smoothScroll(href);
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(15,21,21,0.92)" : "rgba(15,21,21,0.75)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,243,239,0.08)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16" aria-label="Navigation principale">

        {/* Logo */}
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="The Gentleman's Club" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-300 group-hover:border-[#cf9152]" style={{ borderColor: "rgba(244,243,239,0.2)" }}>
            <i className="fa-solid fa-scissors text-[#f4f3ef] text-sm" style={{ transform: "rotate(-45deg)" }} aria-hidden="true" />
          </div>
          <span className="hidden sm:block font-[family-name:var(--font-title)] text-xl tracking-wider" style={{ color: "rgba(244,243,239,0.9)" }}>FB</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleLink(l.href)}
              className="nav-link text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#f4f3ef] bg-transparent border-none cursor-pointer"
              style={{ color: "rgba(244,243,239,0.6)", fontFamily: "var(--font-sans)" }}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex gap-4 text-sm" style={{ color: "rgba(244,243,239,0.5)" }}>
            <a href="#" aria-label="Instagram" className="hover:text-[#cf9152] transition-colors"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
            <a href="#" aria-label="TikTok"    className="hover:text-[#cf9152] transition-colors"><i className="fa-brands fa-tiktok"    aria-hidden="true" /></a>
          </div>
          <button onClick={() => handleLink("#booking")}
            className="text-[10px] font-bold tracking-[0.15em] uppercase px-5 py-3 transition-all duration-200 hover:-translate-y-px cursor-pointer"
            style={{ background: "#cf9152", color: "#0f1515", fontFamily: "var(--font-sans)" }}>
            Réserver
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          className={`md:hidden flex flex-col gap-1.5 p-2 -mr-2 ${open ? "ham-open" : ""}`}>
          <span className="ham-line ham-1 block w-6 bg-[#f4f3ef]" style={{ height: "1px" }} />
          <span className="ham-line ham-2 block w-6 bg-[#f4f3ef]" style={{ height: "1px" }} />
          <span className="ham-line ham-3 block w-6 bg-[#f4f3ef]" style={{ height: "1px" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden transition-all duration-500" style={{ maxHeight: open ? "400px" : "0" }}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(244,243,239,0.06)" }}>
          {links.map((l) => (
            <button key={l.href} onClick={() => handleLink(l.href)}
              className="text-left text-[11px] font-medium tracking-[0.15em] uppercase py-1 hover:text-[#cf9152] transition-colors bg-transparent border-none cursor-pointer"
              style={{ color: "rgba(244,243,239,0.6)", fontFamily: "var(--font-sans)" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleLink("#booking")}
            className="self-start text-[10px] font-bold tracking-[0.15em] uppercase px-5 py-3 mt-2 cursor-pointer"
            style={{ background: "#cf9152", color: "#0f1515", fontFamily: "var(--font-sans)" }}>
            Réserver
          </button>
        </div>
      </div>
    </header>
  );
}
