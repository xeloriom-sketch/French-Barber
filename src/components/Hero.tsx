import Image from "next/image";

const prices = [
  { label: "Coupe Classique",      price: "25€" },
  { label: "Taille de Barbe",      price: "15€" },
  { label: "Rasage Coupe-Choux",   price: "20€" },
  { label: "Coupe + Barbe",        price: "35€" },
  { label: "Soin du Visage",       price: "20€" },
];

export default function Hero() {
  return (
      <section
          id="hero"
          aria-label="Hero"
          className="relative flex flex-col justify-between overflow-hidden min-h-screen select-none pt-16"
          style={{ background: "radial-gradient(circle at 50% 50%, #3a4646 0%, #222a2a 60%, #171d1d 100%)" }}
      >
        {/* Beams de lumière subtils */}
        <div className="beam-container" aria-hidden="true">
          <div className="beam" /><div className="beam" /><div className="beam" />
          <div className="beam" /><div className="beam" /><div className="beam" />
        </div>

        {/* Giant title (z-10 : passe derrière la photo) */}
        <div className="absolute inset-x-0 z-10 pointer-events-none px-4 md:px-12 top-[15%]">
          <div className="max-w-7xl mx-auto">
            <h1
                className="text-[#f4f3ef] uppercase mb-0 font-title"
                style={{
                  fontFamily: "var(--font-title), 'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 13.5vw, 15rem)",
                  lineHeight: 0.82,
                  letterSpacing: "-0.01em"
                }}
                aria-label="French Barber"
            >
              <span className="block text-left">French</span>
              <span className="block text-right pr-4 md:pr-24">Barber</span>
            </h1>
          </div>
        </div>

        {/* 🔴 L'IMAGE IMMENSE SANS OMBRE (z-20 : passe devant le titre et coupe les lettres) */}
        {/* Tu peux ajuster la taille ici avec 'w-[75vw]' (ex: w-[70vw] ou w-[80vw]) et la max-width */}
        <div className="absolute bottom-0 left-[-8%] w-[75vw] max-w-[1050px] h-auto z-20 pointer-events-none">
          <Image
              src="https://cdn.prod.website-files.com/67c1739741f245e840f55398/67d7b2e64827888297dd4fa0_client%20img%204.webp"
              alt="Barbier professionnel"
              width={1050}
              height={1400}
              priority
              className="w-full h-auto object-contain object-bottom"
              style={{ filter: "none" }} /* 👈 Aucune ombre sur la photo */
          />
        </div>

        {/* Content row (Tarifs isolés à droite - z-30) */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-auto relative z-30 px-6 md:px-12 pb-12 pt-32">

          {/* Colonne de droite pour les tarifs */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-5 w-full pb-4">

            {/* Box des prix transparente avec flou d'arrière-plan */}
            <div className="bg-black/20 backdrop-blur-md p-5 lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-none rounded-lg border border-[#f4f3ef]/10">
              {prices.map((p) => (
                  <div key={p.label} className="flex justify-between items-center py-3.5 border-b border-[#f4f3ef]/12">
                    <span className="text-[#f4f3ef]/90 text-sm font-light font-sans">{p.label}</span>
                    <span className="text-[#f4f3ef] text-sm font-normal font-sans">{p.price}</span>
                  </div>
              ))}

              <div className="flex justify-between items-center py-2.5 border-b border-[#f4f3ef]/12 lg:border-none">
                <span className="text-[#f4f3ef]/90 text-sm font-light font-sans">Pack Complet</span>
                <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 bg-[#cf9152] text-[#171d1d] rounded-sm transition-all duration-300 hover:bg-[#f4f3ef] hover:text-black shadow-md"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                  Réserver <span className="text-xs">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>


      </section>
  );
}