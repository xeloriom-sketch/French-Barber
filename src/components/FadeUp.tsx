"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  tag?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}

export default function FadeUp({
  children, delay = 0, distance = 32, className, style, tag: Tag = "div", once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>, { once, margin: "-6% 0px" });

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={style}>
      <motion.div
        initial={{ y: distance, opacity: 0, filter: "blur(4px)" }}
        animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
          mass: 0.9,
          delay,
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
