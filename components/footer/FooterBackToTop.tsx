"use client";
import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function FooterBackToTop() {
  const progress = useScrollProgress();
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="group relative flex size-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)]"
      aria-label="Back to top"
      data-cursor="link"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        className="footer-progress-ring absolute inset-0 text-[var(--blue)]"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white transition-transform duration-300 group-hover:-translate-y-1">
        ↑
      </span>
    </button>
  );
}
