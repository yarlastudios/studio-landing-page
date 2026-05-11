const MARQUEE_ITEMS = [
  "Brand systems",
  "Website design",
  "Webflow & headless",
  "Product UX",
  "Motion & 3D",
  "Design engineering",
] as const;

function MarqueeChunks({ pass }: { pass: "a" | "b" }) {
  return (
    <>
      {MARQUEE_ITEMS.map((label) => (
        <span
          key={`${pass}-${label}`}
          className="inline-flex shrink-0 items-center gap-9"
        >
          <span>{label}</span>
          <span className="select-none text-[var(--blue)]" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Capabilities"
      className="border-y border-[var(--line)] bg-[var(--paper)] py-[22px]"
    >
      <div className="overflow-hidden">
        <div className="marquee-row-studio flex w-max shrink-0 flex-nowrap items-center gap-9 whitespace-nowrap pr-9 text-[clamp(28px,4vw,56px)] font-medium leading-none tracking-[-0.03em] text-[var(--ink)] [font-family:var(--f-display)]">
          <MarqueeChunks pass="a" />
          <MarqueeChunks pass="b" />
        </div>
      </div>
    </section>
  );
}