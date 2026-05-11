"use client";

import { cn } from "@/lib/cn";
import { useCarousel } from "@/hooks/useCarousel";

const QUOTES = [
  {
    p: (
      <>
        Yarla is the rare studio that treats design and engineering as the same
        craft. Our marketing site shipped in 9 weeks, and three of the
        components became the foundation of our product.
      </>
    ),
    name: "Asha Menon",
    role: "Co-founder, Helio Banking",
  },
  {
    p: (
      <>
        They pushed us harder than any agency we&apos;ve worked with. The visual
        system they built is now used across our app, our investor decks, and
        our office walls.
      </>
    ),
    name: "Marcus Liu",
    role: "VP Brand, Northwind Energy",
  },
  {
    p: (
      <>
        Most studios send you a deck. Yarla sent us a working prototype on day
        four. That set the tone for everything that came after.
      </>
    ),
    name: "Priya Shah",
    role: "Founder, Pareto.fund",
  },
];

const quoteBase =
  "quote pointer-events-none absolute inset-0 z-0 m-0 translate-y-[20px] text-inherit opacity-0 transition-[opacity,transform] duration-[600ms] ease-[var(--ease)] motion-reduce:transition-none [&.active]:pointer-events-auto [&.active]:z-[1] [&.active]:translate-y-0 [&.active]:opacity-100";

const quoteParagraphBase =
  "quote-text m-0 mb-6 block font-medium tracking-[-0.02em] text-pretty [font-family:var(--f-display)] text-[clamp(20px,2.6vw,36px)] leading-[1.3]";

const qdBase =
  "qd h-1 w-7 cursor-pointer appearance-none rounded-sm border-none bg-[var(--line)] p-0 transition-[background,width] duration-300 [&.active]:w-14 [&.active]:bg-[var(--ink)]";

export function Testimonials() {
  useCarousel();

  return (
    <section
      className="testimonials bg-[var(--paper-2)] px-[var(--pad-x)] py-[120px] max-[700px]:py-20"
      id="testimonials"
    >
      <div className="section-head mb-20 grid grid-cols-[1fr_2fr] items-end gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <div className="section-tag flex items-baseline gap-3 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--muted)] [font-family:var(--f-mono)]">
          <span className="tag-num font-semibold text-[var(--blue)]">/06</span>
          <span>Words from clients</span>
        </div>
      </div>

      <div className="quote-stage mx-auto grid max-w-[1100px] grid-cols-[64px_1fr_64px] items-center gap-6">
        <button
          type="button"
          className="q-arrow q-prev grid size-[56px] place-items-center rounded-full border border-[var(--ink)] bg-transparent text-lg transition-[background,color] duration-300 hover:bg-[var(--ink)] hover:text-white"
          aria-label="Previous quote"
          data-cursor="link"
        >
          ←
        </button>

        <div className="quote-frame relative min-h-[220px]">
          {QUOTES.map((q, i) => (
            <blockquote
              key={q.name}
              className={cn(quoteBase, i === 0 && "active")}
              data-q={i}
            >
              <p className={quoteParagraphBase}>
                <span
                  className="mr-[0.1em] inline-block [vertical-align:-0.2em] font-[family-name:var(--f-serif),Georgia,serif] text-[1.4em] font-normal not-italic leading-[0] text-[var(--blue)]"
                  aria-hidden
                >
                  &quot;
                </span>
                {q.p}
              </p>
              <footer className="flex flex-col gap-1">
                <span className="q-name text-base font-semibold leading-none [font-family:var(--f-display)]">
                  {q.name}
                </span>
                <span className="q-role text-[12px] font-medium uppercase leading-none tracking-[0.04em] text-[var(--muted)] [font-family:var(--f-mono)]">
                  {q.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <button
          type="button"
          className="q-arrow q-next grid size-[56px] place-items-center rounded-full border border-[var(--ink)] bg-transparent text-lg transition-[background,color] duration-300 hover:bg-[var(--ink)] hover:text-white"
          aria-label="Next quote"
          data-cursor="link"
        >
          →
        </button>
      </div>

      <div className="quote-dots mt-8 flex justify-center gap-2" id="quoteDots">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={cn(qdBase, i === 0 && "active")}
            data-q={i}
            aria-label={`Show quote ${i + 1}`}
            data-cursor="link"
          />
        ))}
      </div>
    </section>
  );
}
