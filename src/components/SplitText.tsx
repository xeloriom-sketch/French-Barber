"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Direction scroll globale — pas de re-render, juste une var module */
let _dir = 1;
if (typeof window !== "undefined") {
  let _py = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (Math.abs(y - _py) > 1) { _dir = y > _py ? 1 : -1; _py = y; }
  }, { passive: true });
}

interface Props {
  children: string;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function SplitText({ children, tag: Tag = "span", className, style, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>, { once: true, margin: "-6% 0px" });

  /* Capture la direction au moment où l'élément entre en vue */
  const dir = useRef(1);
  const seen = useRef(false);
  if (inView && !seen.current) { dir.current = _dir; seen.current = true; }

  const words = children.split(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={style} aria-label={children}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block" }}>
          {word.split("").map((ch, ci) => (
            <motion.span
              key={ci}
              aria-hidden="true"
              style={{ display: "inline-block" }}
              initial={{ y: dir.current * 72, opacity: 0, filter: "blur(6px)" }}
              animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                type: "spring",
                stiffness: 340,
                damping: 24,
                mass: 0.75,
                delay: delay + wi * 0.045 + ci * 0.022,
              }}
            >
              {ch}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <span aria-hidden="true">{" "}</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
