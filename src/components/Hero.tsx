import React from "react";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

export default function Hero() {
    return (
        <section
            id="hero"
            aria-label="Professional Barbershop Hero"
            className="relative w-full min-h-screen bg-[#0d0d0d] text-[#f0ede6] flex flex-col justify-between overflow-hidden select-none font-sans"
        >
            {/* 1. BACKGROUND IMAGE — hero.png depuis public */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <img
                    src={`${basePath}/hero.png`}
                    alt="Professional Barber At Work"
                    className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 pointer-events-none"
                />
                {/* Voiles sombres */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]/40" />
            </div>

            {/* 2. ESPACE HAUT */}
            <div className="w-full h-24 relative z-10" />

            {/* 3. MAIN HERO TITLE & CALL TO ACTION */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center my-auto pt-12">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4 opacity-40">
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Since 1998</span>
                    <span className="w-8 h-[1px] bg-[#f0ede6]" />
                </div>

                {/* Main Massive Typography */}
                <h1
                    className="text-left text-white uppercase font-bold tracking-tight select-none mb-8"
                    style={{
                        fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
                        lineHeight: "0.9",
                        fontFamily: "var(--font-title), 'Impact', 'Arial Black', sans-serif"
                    }}
                >
                    A Gentleman&apos;s<br />
                    <span className="text-[#f0ede6]/95">Collective</span>
                </h1>

                {/* Minimal CTA */}
                <div className="group relative mt-2">
                    <a
                        href="#booking"
                        className="text-[11px] tracking-[0.25em] uppercase text-[#f0ede6]/80 group-hover:text-white transition-colors duration-300 pb-2 block"
                    >
                        Book Now
                    </a>
                    <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#f0ede6]/40 group-hover:w-20 transition-all duration-300" />
                </div>
            </div>

            {/* 4. FOOTER INTERFACE */}
            <footer className="relative z-30 w-full px-6 md:px-12 py-8 flex justify-between items-end text-[9px] tracking-[0.2em] uppercase text-[#f0ede6]/40">
                <div className="flex items-center space-x-3">
          <span
              className="tracking-[0.3em] font-medium text-[#f0ede6]/30 uppercase select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            SCROLL
          </span>
                </div>
                <div className="flex items-center space-x-6 font-light text-[#f0ede6]/50">
                    <a href="https://www.facebook.com/p/French-Barber-61552611964085/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-widest px-1">Fb</a>
                    <a href="#" className="hover:text-white transition-colors tracking-widest px-1">Ig</a>
                </div>
            </footer>
        </section>
    );
}
