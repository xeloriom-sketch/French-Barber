"use client";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({ offset: 100, duration: 800, easing: "ease-out-cubic", once: true });
    });
    import("aos/dist/aos.css");
  }, []);
  return null;
}
