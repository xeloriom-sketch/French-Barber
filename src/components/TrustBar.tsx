const items = [
  { icon: "fa-star",         text: "4.9/5 · 47 avis Google" },
  { icon: "fa-location-dot", text: "36 route du port, Lagnieu" },
  { icon: "fa-clock",        text: "Lun–Sam : 9h–19h" },
  { icon: "fa-phone",        text: "07 45 10 74 01", href: "tel:+33745107401" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#080808]" style={{ borderBottom: "1px solid rgba(240,237,230,.06)" }}>
      <div className="max-w-7xl mx-auto px-5 py-2.5 flex flex-wrap gap-0 overflow-x-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 py-1"
            style={{ paddingRight: "2rem", marginRight: i < items.length - 1 ? "2rem" : 0, borderRight: i < items.length - 1 ? "1px solid rgba(240,237,230,.07)" : "none", flexShrink: 0 }}>
            <i className={`fa-solid ${item.icon}`} style={{ color: "#c8864a", fontSize: ".6rem" }} aria-hidden="true" />
            {item.href ? (
              <a href={item.href} style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".1em", color: "rgba(240,237,230,.45)", textDecoration: "none", whiteSpace: "nowrap", fontWeight: 600 }}
                className="hover:text-[#c8864a] transition-colors">{item.text}</a>
            ) : (
              <span style={{ fontFamily: "var(--font-accent)", fontSize: ".6rem", letterSpacing: ".1em", color: "rgba(240,237,230,.45)", whiteSpace: "nowrap", fontWeight: 600 }}>{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
