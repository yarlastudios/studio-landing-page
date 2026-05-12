"use client";
import React, { useState, useEffect } from "react";

const STATUS_MESSAGES = [
  "Currently booking Q3 2026",
  "2 slots remaining",
  "Reviewing new inquiries",
];

export function FooterStatus() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
        setFade(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.05em] text-white/70 [font-family:var(--f-mono)]">
      <span className="relative flex size-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#10B981] opacity-75"></span>
        <span className="relative inline-flex size-1.5 rounded-full bg-[#10B981]"></span>
      </span>
      <span className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {STATUS_MESSAGES[index]}
      </span>
    </div>
  );
}
