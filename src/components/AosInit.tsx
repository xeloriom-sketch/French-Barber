"use client";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    Promise.all([import("aos"), import("aos/dist/aos.css")]).then(([AOS]) => {
      AOS.default.init({ offset: 80, duration: 700, easing: "ease-out-quad", once: true, disable: false });
    });
  }, []);
  return null;
}
