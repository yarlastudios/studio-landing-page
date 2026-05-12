import React from "react";

const WORDS = [
  "Brand Identity",
  "Product Design",
  "Web Development",
  "Motion Graphics",
  "Design Systems",
  "Prototyping",
];

export function FooterMarquee() {
  return (
    <div className="w-full overflow-hidden border-b border-[rgba(255,255,255,0.1)] py-6 text-[clamp(24px,4vw,40px)] font-medium uppercase tracking-[-0.02em] text-white/40">
      <div className="marquee-row-studio hover:pause-animation flex whitespace-nowrap">
        {[...Array(4)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 items-center gap-8 px-4"
            aria-hidden={groupIndex > 0 ? "true" : "false"}
          >
            {WORDS.map((word, wordIndex) => (
              <span key={`${groupIndex}-${wordIndex}`} className="flex items-center gap-8 transition-colors duration-300 hover:text-white cursor-none">
                {word}
                <span className="text-[var(--blue)]">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
