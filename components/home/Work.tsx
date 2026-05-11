"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useWorkPeek } from "@/hooks/useWorkPeek";

type WorkPeekSlide = {
  bg: string;
  meta: string;
  metaDark?: boolean;
  kind: "circle" | "stripes" | "arc" | "tri" | "rings" | "bars";
};

const WORK_ROWS: {
  num: string;
  title: string;
  meta: string;
  year: string;
  peek: WorkPeekSlide;
}[] = [
  {
    num: "01",
    title: "Helio Banking",
    meta: "Brand · Web · Product UX",
    year: "'26",
    peek: {
      bg: "linear-gradient(135deg,#1F2BFF,#5B68FF)",
      meta: "Helio · 2026",
      kind: "circle",
    },
  },
  {
    num: "02",
    title: "Northwind Energy",
    meta: "Identity · Website · CMS",
    year: "'25",
    peek: {
      bg: "linear-gradient(135deg,#0A0A12,#2A2A40)",
      meta: "Northwind · 2025",
      kind: "stripes",
    },
  },
  {
    num: "03",
    title: "Pareto.fund",
    meta: "Site · Microinteractions · 3D",
    year: "'25",
    peek: {
      bg: "linear-gradient(135deg,#F2EFE6,#DAD4C2)",
      meta: "Pareto · 2025",
      metaDark: true,
      kind: "arc",
    },
  },
  {
    num: "04",
    title: "Verdant Labs",
    meta: "Brand · Naming · Web",
    year: "'25",
    peek: {
      bg: "linear-gradient(135deg,#1F2BFF,#0A0A12)",
      meta: "Verdant · 2025",
      kind: "tri",
    },
  },
  {
    num: "05",
    title: "Atlas Pay",
    meta: "Product · Design system",
    year: "'24",
    peek: {
      bg: "linear-gradient(135deg,#E8E5DC,#C8C2AF)",
      meta: "Atlas Pay · 2024",
      metaDark: true,
      kind: "rings",
    },
  },
  {
    num: "06",
    title: "Ferment Co.",
    meta: "D2C · Brand · Webflow",
    year: "'24",
    peek: {
      bg: "linear-gradient(135deg,#0A0A12,#1F2BFF)",
      meta: "Ferment · 2024",
      kind: "bars",
    },
  },
];

export function Work() {
  useWorkPeek();

  return (
    <section
      className="work px-[var(--pad-x)] py-[120px] max-[900px]:py-20"
      id="work"
    >
      <div className="mb-20 grid grid-cols-12 gap-6 max-[900px]:grid-cols-1">
        <div className="col-span-3 max-[900px]:col-span-12">
          <div className="flex items-baseline gap-3 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.06em] text-[var(--muted)]">
            <span className="font-semibold text-[var(--blue)]">/03</span>
            <span>Selected work</span>
          </div>
        </div>
        <div className="col-span-6 max-[900px]:col-span-12">
          <h2 className="reveal-on-scroll m-0 max-w-[18ch] text-[clamp(36px,5.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--ink)]">
            Recent engagements, <em>built</em> not pitched.
          </h2>
        </div>
      </div>

      <ul
        className="work-list relative m-0 list-none border-t border-[var(--line)] p-0"
        id="workList"
      >
        {WORK_ROWS.map((row, i) => (
          <li
            className="work-item relative"
            data-img={String(i)}
            key={row.title}
          >
            <Link
              className="work-item-link group/work relative grid grid-cols-[56px_1fr_auto_auto] items-center gap-7 border-b border-[var(--line)] py-8 text-[var(--ink)] transition-[padding,color] duration-500 ease-[var(--ease)] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-3 max-[800px]:py-6"
              data-cursor="view"
              href="#"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 origin-bottom scale-y-0 bg-[var(--ink)] transition-transform duration-[550ms] ease-[var(--ease-out)] group-hover/work:origin-top group-hover/work:scale-y-100"
              />
              <span className="work-num font-[500_12px/1_var(--f-mono)] tracking-[0.05em] text-[var(--muted)] transition-colors duration-300 group-hover/work:text-white/55">
                {row.num}
              </span>
              <span className="work-title text-[clamp(28px,4.4vw,64px)] font-semibold leading-none tracking-[-0.03em] transition-colors duration-300 group-hover/work:text-white">
                {row.title}
              </span>
              <span className="work-meta font-[500_13px/1_var(--f-mono)] text-[var(--muted)] transition-colors duration-300 group-hover/work:text-white/70">
                {row.meta}
              </span>
              <span className="work-year font-[500_13px/1_var(--f-mono)] text-[var(--muted)] transition-colors duration-300 group-hover/work:text-white/70">
                {row.year}
              </span>
            </Link>
          </li>
        ))}

        <li
          aria-hidden="true"
          className="work-peek work-list-peek fixed z-50 h-[220px] w-[320px] overflow-hidden rounded-[14px] shadow-[0_30px_60px_rgba(0,0,0,0.18)] max-[900px]:hidden"
          id="workPeek"
        >
          <div className="peek-track relative h-full w-full">
            {WORK_ROWS.map((row) => (
              <PeekSlide key={row.title} slide={row.peek} />
            ))}
          </div>
        </li>
      </ul>

      <div className="work-foot flex justify-center pt-10">
        <Link
          className="group/work-arch relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-solid border-[var(--ink)] px-[26px] py-[18px] text-[14px] font-medium tracking-[-0.005em] text-[var(--ink)] transition-[background-color,color] duration-300 ease-[var(--ease)] hover:bg-[var(--ink)] hover:text-white"
          data-cursor="magnet"
          href="#"
        >
          <span className="relative inline-block h-[14px] overflow-hidden leading-none">
            <span className="flex translate-y-0 flex-col transition-transform duration-[500ms] ease-[var(--ease-out)] group-hover/work-arch:-translate-y-1/2">
              <span className="flex h-[14px] shrink-0 items-center">
                Full archive - 62 projects
              </span>
              <span className="flex h-[14px] shrink-0 items-center">
                Full archive - 62 projects
              </span>
            </span>
          </span>
          <span className="inline-block transition-transform duration-[450ms] ease-[var(--ease)] group-hover/work-arch:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function PeekSlide({ slide }: { slide: WorkPeekSlide }) {
  const style = { "--bg": slide.bg } as CSSProperties & { "--bg"?: string };

  return (
    <div
      className="peek-tile peek-tile-surface absolute inset-0 grid place-items-center overflow-hidden text-white opacity-0"
      style={style}
    >
      <span
        className={`peek-meta peek-meta-abs absolute bottom-3 left-3.5 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.06em] ${slide.metaDark ? "peek-meta-dark text-[var(--ink)]" : ""}`}
      >
        {slide.meta}
      </span>
      <div className="peek-art relative h-[70%] w-[70%]">
        {slide.kind === "circle" && (
          <>
            <div className="peek-circle peek-circle-ring absolute inset-[10%] rounded-full border-2 border-white" />
            <div className="peek-circle-fill absolute inset-[34%] rounded-full bg-white" />
            <div className="peek-grid-bg absolute inset-0 bg-[length:14px_14px] opacity-50 [background-image:linear-gradient(#fff3_1px,transparent_1px),linear-gradient(90deg,#fff3_1px,transparent_1px)]" />
          </>
        )}
        {slide.kind === "stripes" && (
          <div className="peek-stripes absolute inset-0 [background-image:repeating-linear-gradient(45deg,#fff2_0_6px,transparent_6px_16px)]" />
        )}
        {slide.kind === "arc" && (
          <div className="peek-arc-shape absolute inset-0 rounded-full border-[14px] border-[var(--blue)] border-b-transparent border-l-transparent border-r-transparent [transform:rotate(-30deg)]" />
        )}
        {slide.kind === "tri" && (
          <div className="peek-tri-shape absolute inset-[10%] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        )}
        {slide.kind === "rings" && (
          <div className="peek-rings-shape absolute inset-0 rounded-full shadow-[inset_0_0_0_2px_var(--ink),inset_0_0_0_14px_var(--ink)]" />
        )}
        {slide.kind === "bars" && (
          <div className="absolute inset-0">
            <div className="absolute left-0 right-[30%] top-[calc(50%-12px)] h-1 bg-white" />
            <div className="absolute bottom-[calc(50%-12px)] left-[20%] right-0 h-1 bg-white" />
            <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-white" />
          </div>
        )}
      </div>
    </div>
  );
}
