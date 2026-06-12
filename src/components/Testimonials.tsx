import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const basePath = process.env.NODE_ENV === "production" ? "/French-Barber" : "";

const reviews = [
  { initials: "TR", name: "Thomas R.", type: "Client régulier",  stars: 5, text: "Meilleure coupe que j'aie eu depuis longtemps. Mehdi prend le temps d'écouter et le résultat dépasse les attentes." },
  { initials: "JL", name: "Julien L.", type: "Client vérifié",   stars: 5, text: "Le rasage au coupe-choux ici c'est une expérience. Serviette chaude, savon artisanal, geste précis. On repart revitalisé." },
  { initials: "SA", name: "Sofiane A.",type: "Client régulier",  stars: 5, text: "French Barber c'est LE barbershop de Lagnieu. Lucas m'a redessiné la barbe comme jamais. Je recommande à 100%." },
  { initials: "MC", name: "Mathieu C.",type: "Client vérifié",   stars: 5, text: "Réservation facile, accueil chaleureux, coupe parfaite. Le Pack Complet vaut vraiment le coup." },
  { initials: "RB", name: "Romain B.", type: "Client régulier",  stars: 5, text: "Je fais le déplacement depuis Ambérieu. Ça dit tout. Qualité incomparable dans la région." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="w-full mb-16 md:mb-24">
          <h2 className="text-left text-white uppercase font-bold tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Ce Qu&apos;ils Disent</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>De Nous.</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            {reviews.map((r, i) => (
              <FadeUp key={r.name} delay={i * 0.08}>
              <div className="py-6" style={{ borderBottom: "1px solid rgba(240,237,230,.07)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center flex-shrink-0"
                    style={{ width: 36, height: 36, border: "1px solid rgba(240,237,230,.1)", background: "rgba(240,237,230,.03)", fontFamily: "var(--font-accent)", fontSize: ".7rem", fontWeight: 700, color: "rgba(240,237,230,.6)" }}>
                    {r.initials}
                  </div>
                  <div>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: ".8rem", fontWeight: 700, color: "#f0ede6", display: "block" }}>{r.name}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: ".6rem", letterSpacing: ".08em", color: "rgba(240,237,230,.3)" }}>{r.type}</span>
                  </div>
                  <div className="ml-auto" style={{ color: "rgba(240,237,230,.4)", fontSize: ".75rem", letterSpacing: ".05em" }}>{"★".repeat(r.stars)}</div>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", color: "rgba(240,237,230,.55)", fontSize: ".85rem", lineHeight: 1.75, fontWeight: 300 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              </FadeUp>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] border border-[#f0ede6]/05 relative">
              <img src={`${basePath}/client photo 3.png`} alt="Clients satisfaits French Barber"
                className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.5)" }}>French Barber · Lagnieu</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 w-full"
              style={{ border: "1px solid rgba(240,237,230,.08)", background: "rgba(240,237,230,.02)" }}>
              <div className="text-center">
                <p style={{ fontFamily: "var(--font-title)", fontSize: "3rem", color: "#f0ede6", lineHeight: 1 }}>4.9</p>
                <div style={{ color: "rgba(240,237,230,.4)", fontSize: ".8rem", marginTop: ".2rem", letterSpacing: ".05em" }}>★★★★★</div>
              </div>
              <div style={{ width: 1, height: 48, background: "rgba(240,237,230,.1)" }} />
              <div>
                <p style={{ fontFamily: "var(--font-accent)", fontSize: ".65rem", color: "rgba(240,237,230,.6)", fontWeight: 600 }}>47 avis Google</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: ".75rem", color: "rgba(240,237,230,.3)", marginTop: ".2rem" }}>French Barber · Lagnieu</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
