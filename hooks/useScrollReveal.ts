"use client";

import { useEffect } from "react";
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}