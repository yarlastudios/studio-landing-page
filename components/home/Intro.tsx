const TRUST_MARKS = [
  "◐ Helio",
  "✺ Northwind",
  "◇ Pareto",
  "◆ Verdant",
  "◈ Atlas Pay",
  "● Ferment",
  "○ Lumen Labs",
  "▲ Cardinal",
] as const;

export function Intro() {
  return (
    <section
      className="px-[var(--pad-x)] py-[120px] max-[900px]:py-20 [font-family:var(--f-display)]"
      id="studio"
    >
      <div className="grid grid-cols-12 gap-6 max-[900px]:grid-cols-1">
        <div className="col-span-3 max-[900px]:col-span-12">
          <div className="flex items-baseline gap-3 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.06em] text-[var(--muted)]">
            <span className="font-semibold text-[var(--blue)]">/02</span>
            <span>About the studio</span>
          </div>
        </div>

        <div className="col-span-6 max-[900px]:col-span-12">
          <h2 className="reveal-on-scroll m-0 max-w-[18ch] text-[clamp(36px,5.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--ink)]">
            We&apos;re a 14-person studio building <em>considered</em> digital
            experiences - somewhere between an agency, a product team, and a
            research lab.
          </h2>
          <p className="reveal-on-scroll mt-6 max-w-[56ch] text-[17px] font-normal leading-[1.55] text-[var(--muted)]">
            Founded in 2019 inside the Yarlagadda Group, we work end‑to‑end:
            positioning, identity, websites, products, and the systems that keep
            them alive after launch.
          </p>
        </div>

        <div className="col-span-3 flex w-full max-[900px]:col-span-12 flex-col gap-3.5 [font-family:var(--f-display)]">
          <Kv label="Founded" value="2019" />
          <Kv label="Headcount" value="14" />
          <Kv label="Studios" value="Bengaluru, NYC" />
          <Kv label="Engagements" value={`62 since '19`} />
        </div>
      </div>

      <div className="reveal-on-scroll mt-20 flex flex-wrap items-center gap-7 border-t border-[var(--line)] pt-8">
        <span className="shrink-0 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.06em] text-[var(--muted)]">
          Trusted by teams at
        </span>
        <ul className="m-0 flex list-none flex-wrap gap-7 p-0">
          {TRUST_MARKS.map((name) => (
            <li
              key={name}
              className="text-[18px] font-medium leading-none tracking-[-0.01em] text-[var(--ink)] opacity-70 transition-[opacity,transform,color] duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:text-[var(--blue)]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Kv({ label, value }: { label: string; value: string }) {
  return (
    <div className="reveal-on-scroll flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--line)] pt-3.5">
      <span className="font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.05em] text-[var(--muted)]">
        {label}
      </span>
      <span className="text-base font-medium leading-none">{value}</span>
    </div>
  );
}
