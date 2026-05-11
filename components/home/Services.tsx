import type { ReactNode } from "react";

const svcArtClasses =
  "pointer-events-none absolute right-6 top-6 z-[1] box-border size-20 opacity-60 transition-[transform,opacity] [transition-duration:600ms,400ms] ease-[var(--ease)] group-hover:scale-[1.08] group-hover:-rotate-[4deg] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:!scale-100 motion-reduce:group-hover:!rotate-0";

const svcCard =
  "group relative isolate flex min-h-[380px] flex-col overflow-hidden bg-[var(--ink)] py-9 pb-8 pl-8 pr-8 transition-[background] duration-500 ease-[var(--ease)] before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:h-0 before:bg-[var(--blue)] before:transition-[height] before:duration-[550ms] before:ease-[var(--ease-out)] before:content-[''] hover:before:h-full motion-reduce:hover:before:h-0";

const services: {
  num: string;
  title: string;
  desc: string;
  items: string[];
  art: ReactNode;
}[] = [
  {
    num: "01",
    title: "Brand & Identity",
    desc: "Positioning, naming, visual identity, and the systems that scale them across every surface.",
    items: [
      "Strategy & narrative",
      "Logo & wordmark",
      "Type & color systems",
      "Brand guidelines",
    ],
    art: (
      <>
        <div className="absolute inset-0 rounded-full border-[1.5px] border-white" />
        <div className="absolute inset-[18%] rounded-full border-[1.5px] border-white opacity-50" />
        <div className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </>
    ),
  },
  {
    num: "02",
    title: "Website Design",
    desc: "Marketing sites that load fast, convert, and feel inevitable. From sitemap to launch.",
    items: [
      "UX architecture",
      "Art direction",
      "Copy & tone",
      "Conversion design",
    ],
    art: (
      <div className="absolute inset-x-0 top-[8%] bottom-0 rounded-md border-[1.5px] border-white p-2">
        <i className="mr-1 inline-block size-1.5 rounded-full bg-white" />
        <i className="mr-1 inline-block size-1.5 rounded-full bg-white" />
        <i className="inline-block size-1.5 rounded-full bg-white" />
      </div>
    ),
  },
  {
    num: "03",
    title: "Engineering",
    desc: "Webflow, headless, Next.js, custom CMS — pick a stack, we'll ship it without compromise.",
    items: [
      "Webflow & CMS",
      "Next.js / Astro",
      "Sanity, Contentful",
      "Performance budgets",
    ],
    art: (
      <div className="break-all font-[var(--f-mono)] text-[11px] font-medium leading-snug text-white opacity-90">
        <span>{"{ "}</span>
        <span className="text-[var(--blue-soft)]">design</span>
        <span>: </span>
        <span className="text-[#93f7a8]">&quot;engineering&quot;</span>
        <span>{" }"}</span>
      </div>
    ),
  },
  {
    num: "04",
    title: "Product UX",
    desc: "Dashboards, onboarding, and complex flows for early‑stage products that need to feel obvious.",
    items: [
      "Discovery & research",
      "Design systems",
      "Prototyping",
      "Usability testing",
    ],
    art: (
      <>
        <div className="absolute inset-[10%_10%_50%_10%] rounded border-[1.5px] border-white" />
        <div className="absolute inset-[25%_0_35%_20%] rounded border-[1.5px] border-white opacity-70" />
        <div className="absolute inset-[40%_20%_20%_0] rounded border-[1.5px] border-white opacity-40" />
      </>
    ),
  },
  {
    num: "05",
    title: "Motion & 3D",
    desc: "Hero animations, scroll narratives, and lightweight 3D — built natively in the browser.",
    items: [
      "WebGL / R3F",
      "GSAP / Lottie",
      "Cinemagraphs",
      "Interaction prototypes",
    ],
    art: (
      <div className="relative flex size-full items-end gap-1">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <i
            key={i}
            className="flex-1 rounded-sm bg-white motion-reduce:animate-none animate-[svc-wave-bar_1.4s_var(--ease)_infinite_alternate]"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    ),
  },
  {
    num: "06",
    title: "Care & Growth",
    desc: "Most projects don't end at launch. Retainers for iteration, A/B, and content velocity.",
    items: [
      "Quarterly roadmaps",
      "Experiments & testing",
      "Content production",
      "Analytics",
    ],
    art: (
      <svg
        className="size-full text-white"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,40 15,30 30,34 45,18 60,22 75,8 100,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      className="bg-[var(--ink)] px-[var(--pad-x)] py-[120px] text-white max-[700px]:py-20"
      id="services"
    >
      <div className="section-head mb-20 grid grid-cols-[1fr_2fr] items-end gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <div className="section-tag flex items-baseline gap-3 text-[11px] font-medium uppercase tracking-[0.06em] text-white/50 [font-family:var(--f-mono)]">
          <span className="tag-num font-semibold text-[var(--blue-soft)]">
            /04
          </span>
          <span>What we do</span>
        </div>
        <h2 className="big-heading reveal-on-scroll m-0 max-w-[18ch] text-[clamp(36px,5.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.035em] [font-family:var(--f-display)] [&_em]:text-[var(--blue-soft)]">
          Six disciplines, one team. <em>No hand-offs.</em>
        </h2>
      </div>

      <div className="services-grid grid grid-cols-3 gap-px border border-white/[0.08] bg-white/[0.08] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
        {services.map((s) => (
          <article key={s.num} className={svcCard} data-cursor="card">
            <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
              <div className="svc-num mb-16 text-[11px] font-medium leading-none tracking-[0.05em] text-white/45 transition-colors [font-family:var(--f-mono)] group-hover:text-white/80">
                {s.num}
              </div>
              <h3 className="svc-title m-0 mb-4 text-[28px] font-semibold leading-none tracking-[-0.025em] [font-family:var(--f-display)]">
                {s.title}
              </h3>
              <p className="svc-desc m-0 mb-6 max-w-[32ch] text-[15px] font-normal leading-[1.5] text-white/65 [font-family:var(--f-display)] group-hover:text-white/85">
                {s.desc}
              </p>
              <ul className="svc-list mb-0 mt-auto flex flex-col gap-2 p-0">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-white/12 pt-2 text-[13px] font-medium leading-none tracking-normal text-white/55 [font-family:var(--f-mono)] group-hover:border-white/30 group-hover:text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={svcArtClasses}>{s.art}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
