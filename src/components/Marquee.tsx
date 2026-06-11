const items = ["COUPE PREMIUM", "TAILLE DE BARBE", "RASAGE TRADITIONNEL", "FRENCH BARBER", "LAGNIEU · AIN", "SAVOIR-FAIRE FRANÇAIS", "DEPUIS LAGNIEU", "L'ART DU BARBIER"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ background: "#0d1515", borderTop: "1px solid rgba(207,145,82,0.15)", borderBottom: "1px solid rgba(207,145,82,0.15)", padding: ".875rem 0" }} aria-hidden="true">
      <div className="marquee-track" style={{ fontFamily: "var(--font-title)", color: "#cf9152", fontSize: ".875rem", letterSpacing: ".18em" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ opacity: i % 2 === 1 ? 0.35 : 1 }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
