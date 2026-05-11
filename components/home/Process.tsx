export function Process() {
  return (
    <section
      className="px-[var(--pad-x)] py-[120px] max-[800px]:py-20"
      id="process"
    >
      <div className="mb-20 grid grid-cols-[1fr_2fr] items-end gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <div className="flex items-baseline gap-3 text-[11px] font-medium uppercase leading-none tracking-[0.06em] text-[var(--muted)] [font-family:var(--f-mono)]">
          <span className="font-semibold text-[var(--blue)]">/05</span>
          <span>How we work</span>
        </div>
        <h2 className="reveal-on-scroll m-0 max-w-[18ch] text-[clamp(36px,5.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.035em] [font-family:var(--f-display)]">
          A four-phase rhythm. <em>Roughly</em> twelve weeks.
        </h2>
      </div>

      <ol className="relative m-0 list-none p-0">
        <li className="group grid grid-cols-[240px_1fr_80px] gap-10 border-t border-[var(--line)] py-10 max-[800px]:grid-cols-1 max-[800px]:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold leading-none tracking-[0.04em] text-[var(--blue)] motion-reduce:group-hover:animate-none [font-family:var(--f-mono)] group-hover:animate-[step-num-blink_1s_var(--ease)_infinite_alternate]">
              01
            </span>
            <span className="text-[11px] font-medium uppercase leading-none tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              Week 1-2
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-3 text-[clamp(28px,3.5vw,48px)] font-semibold leading-none tracking-[-0.03em] [font-family:var(--f-display)]">
              Discover
            </h3>
            <p className="m-0 mb-4 max-w-[60ch] text-base font-normal leading-[1.55] text-[var(--ink-2)] [font-family:var(--f-display)]">
              Stakeholder interviews, audits, competitive teardowns, and a
              written narrative we both agree on. We don&apos;t open Figma until
              this is signed off.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Workshops", "Audit", "Narrative doc"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[11px] font-medium leading-none text-[var(--muted)] [font-family:var(--f-mono)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative max-[800px]:hidden">
            <i className="absolute right-0 top-0 block h-full w-px bg-[var(--line)] transition-colors group-hover:bg-[var(--blue)]" />
          </div>
        </li>
        <li className="group grid grid-cols-[240px_1fr_80px] gap-10 border-t border-[var(--line)] py-10 max-[800px]:grid-cols-1 max-[800px]:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold leading-none tracking-[0.04em] text-[var(--blue)] motion-reduce:group-hover:animate-none [font-family:var(--f-mono)] group-hover:animate-[step-num-blink_1s_var(--ease)_infinite_alternate]">
              02
            </span>
            <span className="text-[11px] font-medium uppercase leading-none tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              Week 3-5
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-3 text-[clamp(28px,3.5vw,48px)] font-semibold leading-none tracking-[-0.03em] [font-family:var(--f-display)]">
              Direction
            </h3>
            <p className="m-0 mb-4 max-w-[60ch] text-base font-normal leading-[1.55] text-[var(--ink-2)] [font-family:var(--f-display)]">
              Two distinct visual territories, each with art direction, type,
              motion, and one hero page fully art‑directed. You pick one. We
              refine.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Moodboards", "Type studies", "Hero pages"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[11px] font-medium leading-none text-[var(--muted)] [font-family:var(--f-mono)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative max-[800px]:hidden">
            <i className="absolute right-0 top-0 block h-full w-px bg-[var(--line)] transition-colors group-hover:bg-[var(--blue)]" />
          </div>
        </li>
        <li className="group grid grid-cols-[240px_1fr_80px] gap-10 border-t border-[var(--line)] py-10 max-[800px]:grid-cols-1 max-[800px]:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold leading-none tracking-[0.04em] text-[var(--blue)] motion-reduce:group-hover:animate-none [font-family:var(--f-mono)] group-hover:animate-[step-num-blink_1s_var(--ease)_infinite_alternate]">
              03
            </span>
            <span className="text-[11px] font-medium uppercase leading-none tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              Week 6-10
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-3 text-[clamp(28px,3.5vw,48px)] font-semibold leading-none tracking-[-0.03em] [font-family:var(--f-display)]">
              Design &amp; Build
            </h3>
            <p className="m-0 mb-4 max-w-[60ch] text-base font-normal leading-[1.55] text-[var(--ink-2)] [font-family:var(--f-display)]">
              Designers and engineers work in the same Figma + repo. Weekly
              demos. No 200‑page decks. The site builds itself page‑by‑page in
              staging.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Design system", "CMS", "Animation"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[11px] font-medium leading-none text-[var(--muted)] [font-family:var(--f-mono)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative max-[800px]:hidden">
            <i className="absolute right-0 top-0 block h-full w-px bg-[var(--line)] transition-colors group-hover:bg-[var(--blue)]" />
          </div>
        </li>
        <li className="group grid grid-cols-[240px_1fr_80px] gap-10 border-t border-b border-[var(--line)] py-10 max-[800px]:grid-cols-1 max-[800px]:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold leading-none tracking-[0.04em] text-[var(--blue)] motion-reduce:group-hover:animate-none [font-family:var(--f-mono)] group-hover:animate-[step-num-blink_1s_var(--ease)_infinite_alternate]">
              04
            </span>
            <span className="text-[11px] font-medium uppercase leading-none tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              Week 11-12
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-3 text-[clamp(28px,3.5vw,48px)] font-semibold leading-none tracking-[-0.03em] [font-family:var(--f-display)]">
              Launch &amp; Care
            </h3>
            <p className="m-0 mb-4 max-w-[60ch] text-base font-normal leading-[1.55] text-[var(--ink-2)] [font-family:var(--f-display)]">
              QA across devices, performance audit, content load, soft launch,
              hard launch. Then a 30‑day care window where we live in your
              Slack.
            </p>
            <div className="flex flex-wrap gap-2">
              {["QA", "Perf", "Care window"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[11px] font-medium leading-none text-[var(--muted)] [font-family:var(--f-mono)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative max-[800px]:hidden">
            <i className="absolute right-0 top-0 block h-full w-px bg-[var(--line)] transition-colors group-hover:bg-[var(--blue)]" />
          </div>
        </li>
      </ol>
    </section>
  );
}
