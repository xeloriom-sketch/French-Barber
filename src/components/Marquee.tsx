const items = ["FRENCH BARBER", "BARBERSHOP LAGNIEU", "COUPE HOMME", "TAILLE DE BARBE", "BARBERSHOP AIN", "LAGNIEU · 01150", "BARBERSHOP PREMIUM", "07 45 10 74 01", "SAVOIR-FAIRE FRANÇAIS"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#080808]" style={{ borderTop: "1px solid rgba(200,134,74,.1)", borderBottom: "1px solid rgba(200,134,74,.1)", padding: ".75rem 0" }} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ opacity: i % 2 === 1 ? 0.28 : 1 }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
