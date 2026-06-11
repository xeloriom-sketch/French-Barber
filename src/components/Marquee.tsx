const items = ["FRENCH BARBER", "COUPE HOMME", "TAILLE DE BARBE", "RASAGE TRADITIONNEL", "LAGNIEU · AIN", "BARBERSHOP PREMIUM", "07 45 10 74 01", "SAVOIR-FAIRE FRANÇAIS"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ background: "#0a0f0f", borderTop: "1px solid rgba(200,134,74,.12)", borderBottom: "1px solid rgba(200,134,74,.12)", padding: ".75rem 0" }} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ opacity: i % 2 === 1 ? 0.3 : 1 }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
