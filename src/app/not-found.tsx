import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", background: "#0d0d0d", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "var(--font-sans)" }}>

      <p style={{ fontFamily: "var(--font-accent)", fontSize: ".65rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(240,237,230,.25)", marginBottom: "1.5rem" }}>
        Erreur 404
      </p>

      <h1 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(5rem, 18vw, 14rem)", lineHeight: 1, color: "#f0ede6", margin: "0 0 1rem", textAlign: "center", letterSpacing: "-.02em" }}>
        404
      </h1>

      <p style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "rgba(240,237,230,.5)", textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 2.5rem", textAlign: "center" }}>
        Page introuvable
      </p>

      <p style={{ fontSize: ".9rem", color: "rgba(240,237,230,.35)", lineHeight: 1.7, maxWidth: 360, textAlign: "center", marginBottom: "3rem" }}>
        Cette page n&apos;existe pas ou a été déplacée. Retourne à l&apos;accueil pour découvrir French Barber.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/"
          style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#0d0d0d", background: "#f0ede6", textDecoration: "none", padding: ".85rem 2rem" }}>
          Retour à l&apos;accueil
        </Link>
        <a href="tel:+33745107401"
          style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", padding: ".85rem 2rem", border: "1px solid rgba(240,237,230,.2)" }}>
          07 45 10 74 01
        </a>
      </div>

      <div style={{ marginTop: "4rem", width: 1, height: 60, background: "linear-gradient(to bottom, rgba(240,237,230,.1), transparent)" }} />

      <p style={{ fontFamily: "var(--font-accent)", fontSize: ".55rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.15)", marginTop: "1rem" }}>
        French Barber &middot; Lagnieu
      </p>

    </main>
  );
}
