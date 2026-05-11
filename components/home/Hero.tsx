export function Hero() {
  return (
    <section className="relative grid min-h-screen grid-rows-[auto_1fr_auto] gap-10 px-[var(--pad-x)] pb-20 pt-[140px] max-[700px]:pt-[120px]">
      <div className="flex items-center justify-between gap-4 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.06em] text-[var(--muted)]">
        <div className="inline-flex items-center gap-2">
          <span className="size-1.5 shrink-0 rounded-full bg-[var(--blue)]" />
          <span>[ 01 - Index ]</span>
        </div>
      </div>

      <div className="relative">
        <h1 className="hero-title-studio relative z-[1] m-0 max-w-[14ch] text-[clamp(48px,9.5vw,168px)] font-bold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]">
          <span className="hero-title-line block overflow-hidden">
            <span className="studio-reveal block">
              <span>Digital craft</span>
            </span>
          </span>
          <span className="hero-title-line block overflow-hidden">
            <span className="studio-reveal block">
              <span>
                for brands that <em>refuse</em>
              </span>
            </span>
          </span>
          <span className="hero-title-line block overflow-hidden">
            <span className="studio-reveal block">
              <span>
                to look{" "}
                <span className="relative inline-flex h-[0.9em] items-center overflow-hidden rounded-[0.12em] bg-[var(--blue)] px-[0.25em] align-baseline text-white">
                  <span className="studio-badge-cycle relative inline-block h-[1em]">
                    <b>average.</b>
                    <b>generic.</b>
                    <b>boring.</b>
                    <b>flat.</b>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className="relative z-[1] mt-[60px] grid grid-cols-1 gap-10 min-[801px]:grid-cols-[1.2fr_1fr] min-[801px]:items-end">
          <p className="hero-blurb-studio m-0 max-w-[44ch] text-[18px] font-normal leading-[1.45] text-[var(--ink-2)]">
            Yarla Studios is an independent design and engineering practice building
            websites, products, and brand systems for ambitious teams across fintech,
            climate, and consumer.
          </p>
          <div className="hero-actions-studio flex flex-wrap items-center justify-start gap-3 min-[801px]:justify-end">
            <a
              href="#work"
              data-cursor="magnet"
              className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--ink)] px-6 py-4 text-[14px] font-medium tracking-[-0.005em] text-white transition-[color] duration-300 ease-[var(--ease)]"
            >
              <span
                className="absolute inset-0 z-0 translate-y-full rounded-full bg-[var(--blue)] transition-transform duration-[550ms] ease-[var(--ease-out)] group-hover/btn:translate-y-0"
                aria-hidden
              />
              <span className="relative z-[1] inline-block h-[14px] overflow-hidden leading-none">
                <span className="flex translate-y-0 flex-col transition-transform duration-[500ms] ease-[var(--ease-out)] group-hover/btn:-translate-y-1/2">
                  <span className="block h-[14px]">See selected work</span>
                  <span className="block h-[14px]">See selected work</span>
                </span>
              </span>
              <span className="relative z-[1] inline-block translate-x-0 transition-transform duration-[450ms] ease-[var(--ease)] group-hover/btn:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://calendar.app.google/FKfjbrEKyrqRPE916"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="magnet"
              className="group/ghost relative inline-flex items-center gap-3 rounded-full border border-solid border-[var(--line)] px-6 py-4 text-[14px] font-medium tracking-[-0.005em] text-[var(--ink)] transition-colors duration-300 ease-[var(--ease)] hover:border-[var(--ink)]"
            >
              <span className="relative inline-block h-[14px] overflow-hidden leading-none">
                <span className="flex translate-y-0 flex-col transition-transform duration-[500ms] ease-[var(--ease-out)] group-hover/ghost:-translate-y-1/2">
                  <span className="block h-[14px]">Book a 30-min intro</span>
                  <span className="block h-[14px]">Book a 30-min intro</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
