"use client";

import { useCountUp } from "@/hooks/useCountUp";

const TILE =
  "relative overflow-hidden bg-[var(--blue)] px-10 py-20 transition-colors duration-[400ms] ease-[var(--ease)] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-white/15 after:content-[''] last:after:hidden hover:bg-[var(--ink)]";

export function Stats() {
  useCountUp();

  return (
    <section className="grid grid-cols-4 gap-px bg-white/15 text-white max-[800px]:grid-cols-2">
      <div className={TILE} data-count="62">
        <div className="text-[clamp(64px,8vw,128px)] font-semibold leading-none tracking-[-0.04em] [font-family:var(--f-display)]">
          <span className="counter" data-to="62">
            0
          </span>
        </div>
        <div className="mt-4 text-[13px] font-medium uppercase leading-none tracking-[0.04em] text-white/70 [font-family:var(--f-mono)]">
          Engagements shipped
        </div>
      </div>
      <div className={TILE} data-count="14">
        <div className="text-[clamp(64px,8vw,128px)] font-semibold leading-none tracking-[-0.04em] [font-family:var(--f-display)]">
          <span className="counter" data-to="14">
            0
          </span>
        </div>
        <div className="mt-4 text-[13px] font-medium uppercase leading-none tracking-[0.04em] text-white/70 [font-family:var(--f-mono)]">
          People in the studio
        </div>
      </div>
      <div className={TILE} data-count="98">
        <div className="text-[clamp(64px,8vw,128px)] font-semibold leading-none tracking-[-0.04em] [font-family:var(--f-display)]">
          <span className="counter" data-to="98">
            0
          </span>
          <span className="inline-block align-top text-[0.6em]">%</span>
        </div>
        <div className="mt-4 text-[13px] font-medium uppercase leading-none tracking-[0.04em] text-white/70 [font-family:var(--f-mono)]">
          Avg. Lighthouse score
        </div>
      </div>
      <div className={TILE} data-count="7">
        <div className="text-[clamp(64px,8vw,128px)] font-semibold leading-none tracking-[-0.04em] [font-family:var(--f-display)]">
          <span className="counter" data-to="7">
            0
          </span>
          <span className="inline-block align-top text-[0.6em]">y</span>
        </div>
        <div className="mt-4 text-[13px] font-medium uppercase leading-none tracking-[0.04em] text-white/70 [font-family:var(--f-mono)]">
          Years independent
        </div>
      </div>
    </section>
  );
}
