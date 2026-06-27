"use client";
import { useState } from "react";
import SplitText from "./SplitText";
import FadeUp from "./FadeUp";

const faqs = [
  { q: "Êtes-vous ouverts le dimanche ?", a: "Oui ! French Barber est ouvert le dimanche de 10h à 19h, ainsi que du lundi au vendredi de 9h à 19h et le samedi de 9h à 18h." },
  { q: "Quels sont vos tarifs ?", a: "Coupe classique 15€ (30 min), barbe 8€ (20 min), soin du visage 10€ (25 min), barbe + coupe 20€ (50 min), pack complet 35€ (80 min). Des réductions sont disponibles pour les réguliers et les étudiants." },
  { q: "Faut-il réserver à l'avance ?", a: "La réservation est recommandée pour garantir votre créneau. Nous acceptons les clients sans rendez-vous selon disponibilités, mais vous risquez d'attendre. Réservez en ligne ou appelez le 07 45 10 74 01." },
  { q: "Où se trouve French Barber ?", a: "Nous sommes au 36 route du port, 01150 Lagnieu (Ain), facilement accessible depuis Ambérieu-en-Bugey et les communes voisines. Parking disponible à proximité." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Nous acceptons les espèces et les paiements par carte bancaire (CB, Visa, Mastercard). Pas de chèque." },
  { q: "Proposez-vous des produits à l'achat ?", a: "Oui ! Nous vendons une sélection de produits de coiffure et de soin de la barbe haut de gamme. Demandez conseil à votre barbier lors de votre visite." },
  { q: "Coupez-vous les cheveux des enfants ?", a: "Oui, nous accueillons les enfants à partir de 5 ans. Tarif réduit applicable. Contactez-nous pour plus d'informations." },
  { q: "Peut-on offrir une séance en cadeau ?", a: "Absolument ! Nous proposons des bons cadeaux. Contactez-nous au 07 45 10 74 01 ou par email à Frenchbarber212@gmail.com pour les commander." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" aria-labelledby="faq-h"
      className="bg-[#0d0d0d] text-[#f0ede6] w-full py-24 md:py-32 overflow-hidden font-sans select-none">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2 id="faq-h" className="text-left text-white uppercase font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: "1.05", fontFamily: "var(--font-title)" }}>
            <SplitText tag="span" style={{ display: "block" }} delay={0}>Vos Questions.</SplitText>
            <SplitText tag="span" style={{ display: "block" }} delay={0.12}>Nos Réponses.</SplitText>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="80">
          {faqs.map((f, i) => (
            <FadeUp key={i} delay={i * 0.06}>
            <div className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-icon"><i className="fa-solid fa-plus" aria-hidden="true" /></span>
              </button>
              <div className="faq-body">{f.a}</div>
            </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 pt-10" style={{ borderTop: "1px solid rgba(240,237,230,.07)" }} data-aos="fade-up">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: ".875rem", color: "rgba(240,237,230,.4)", marginBottom: "1.5rem" }}>
            Vous avez une autre question ?
          </p>
          <div className="flex flex-wrap gap-8">
            <a href="tel:+33745107401"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#f0ede6", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.3)", paddingBottom: ".3rem" }}>
              07 45 10 74 01 →
            </a>
            <a href="mailto:Frenchbarber212@gmail.com"
              style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,230,.45)", textDecoration: "none", borderBottom: "1px solid rgba(240,237,230,.15)", paddingBottom: ".3rem" }}>
              Frenchbarber212&#64;gmail.com →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
