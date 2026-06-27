import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="w-full mb-16 md:mb-24">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title), 'Impact', 'Arial Black', sans-serif" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Un Savoir-Faire</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>Artisanal Et Des</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.24}>Services Premium.</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col justify-between h-full relative">
            <div className="space-y-6 max-w-md">
              <FadeUp delay={0.1}>
                <p className="text-[#f0ede6]/60 font-light" style={{ fontSize: "0.9rem", lineHeight: "1.8", fontFamily: "var(--font-sans)" }}>
                  Bien plus qu&apos;un simple barbershop — nous proposons des prestations haut de gamme et des produits locaux spécialement sélectionnés pour les hommes.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[#f0ede6]/60 font-light" style={{ fontSize: "0.9rem", lineHeight: "1.8", fontFamily: "var(--font-sans)" }}>
                  Nos coiffeurs et barbiers prennent soin de vos cheveux et voulons que votre coupe soit parfaite. Notre équipe est à votre disposition pour vous conseiller et vous aider à trouver le style qui vous correspond.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-[#f0ede6]/60 font-light" style={{ fontSize: "0.9rem", lineHeight: "1.8", fontFamily: "var(--font-sans)" }}>
                  Basé au 36 route du port à Lagnieu (01150), votre coiffeur homme accueille les clients de Lagnieu, Ambérieu-en-Bugey, Béligneux, Pont-d&apos;Ain, Saint-Rambert-en-Bugey et tout l&apos;Ain — 7 jours sur 7.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.3}>
              <div className="mt-16 md:mt-24 relative flex items-end gap-6">
                <div className="w-48 h-48 bg-[#141414] border border-[#f0ede6]/10 p-4 flex items-center justify-center overflow-hidden">
                  <img src={`${basePath}/client-1.webp`} alt="Client French Barber"
                    className="w-full h-full object-cover object-top grayscale opacity-80" />
                </div>
                <div className="absolute -top-12 left-32 w-28 h-28 pointer-events-none select-none hidden sm:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite] opacity-30 fill-[#f0ede6]">
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className="text-[6.5px] tracking-[0.22em] uppercase font-medium">
                      <textPath href="#circlePath">FRENCH BARBER • LAGNIEU • DEPUIS 1998 •</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="lg:col-span-7 w-full h-full flex justify-end">
            <div className="w-full lg:max-w-2xl aspect-[4/3] lg:aspect-auto lg:h-[550px] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img src={`${basePath}/client-2.webp`} alt="Coupe réalisée chez French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
