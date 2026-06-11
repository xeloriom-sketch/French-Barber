"use client";
import { useState } from "react";

const faqs = [
  { q: "Faut-il réserver à l'avance ?", a: "La réservation est recommandée pour garantir votre créneau. Nous acceptons les clients sans rendez-vous selon disponibilités, mais vous risquez d'attendre. Réservez en ligne ou appelez le 07 45 10 74 01." },
  { q: "Où se trouve French Barber ?", a: "Nous sommes au 36 route du port, 01150 Lagnieu (Ain), facilement accessible depuis Ambérieu-en-Bugey, Lagnieu et les communes voisines. Parking disponible à proximité." },
  { q: "Combien de temps dure une prestation ?", a: "Une coupe seule dure environ 30 minutes. La taille de barbe 20 minutes, le rasage au coupe-choux 30 minutes. Le pack Coupe + Barbe dure 50 minutes et le Pack Complet environ 80 minutes." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Nous acceptons les espèces et les paiements par carte bancaire (CB, Visa, Mastercard). Pas de chèque." },
  { q: "Proposez-vous des produits à l'achat ?", a: "Oui ! Nous vendons une sélection de produits de coiffure et de soin de la barbe haut de gamme. Demandez conseil à votre barbier lors de votre visite." },
  { q: "Coupez-vous les cheveux des enfants ?", a: "Oui, nous accueillons les enfants à partir de 5 ans. Tarif réduit applicable. Contactez-nous pour plus d'informations." },
  { q: "Peut-on offrir une séance en cadeau ?", a: "Absolument ! Nous proposons des bons cadeaux. Contactez-nous au 07 45 10 74 01 ou par email à frenchbarber01@gmail.com pour les commander." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" aria-labelledby="faq-h"
      style={{ background: "radial-gradient(ellipse at 60% 50%, #1d2727 0%, #161d1d 55%, #101616 100%)" }}>
      <div className="relative z-10 py-24 md:py-32 px-5 md:px-10 max-w-5xl mx-auto">

        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-label mb-4">Questions Fréquentes</span>
          <h2 id="faq-h" className="section-title">
            Vos <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-icon"><i className="fa-solid fa-plus" aria-hidden="true" /></span>
              </button>
              <div className="faq-body">{f.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-7 text-center" style={{ background: "rgba(200,134,74,.06)", border: "1px solid rgba(200,134,74,.15)" }} data-aos="fade-up">
          <p style={{ fontFamily: "var(--font-accent)", fontSize: ".875rem", color: "rgba(240,237,230,.65)", marginBottom: "1rem", fontWeight: 600 }}>
            Vous avez une autre question ?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33745107401" className="btn-primary" style={{ fontSize: ".65rem" }}>
              <i className="fa-solid fa-phone text-[10px]" aria-hidden="true" />07 45 10 74 01
            </a>
            <a href="mailto:frenchbarber01@gmail.com" className="btn-outline" style={{ fontSize: ".65rem" }}>
              <i className="fa-solid fa-envelope text-[10px]" aria-hidden="true" />frenchbarber01@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
