"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const CONTACT_EMAIL = "hello@yarlastudios.com";

const CHIP_LABELS = [
  "Website",
  "Brand",
  "Product",
  "Motion",
  "Retainer",
] as const;

export function CTA() {
  const [chipOn, setChipOn] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const toggleChip = useCallback((label: string) => {
    setChipOn((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);

  useEffect(() => {
    const form = formRef.current;
    const timers: { thanks?: number; reset?: number } = {};
    const clearTimers = () => {
      if (timers.thanks !== undefined) window.clearTimeout(timers.thanks);
      if (timers.reset !== undefined) window.clearTimeout(timers.reset);
      delete timers.thanks;
      delete timers.reset;
    };

    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;

      clearTimers();

      const labelNodes = form.querySelectorAll<HTMLSpanElement>(
        'button[type="submit"] .t',
      );
      const original = [...labelNodes].map((t) => t.textContent ?? "");
      labelNodes.forEach((t) => {
        t.textContent = "Sending...";
      });

      timers.thanks = window.setTimeout(() => {
        labelNodes.forEach((t) => {
          t.textContent = "Thanks — mail us below";
        });
      }, 650);

      timers.reset = window.setTimeout(() => {
        labelNodes.forEach((t, i) => {
          t.textContent = original[i] ?? "Send brief";
        });
        form.reset();
        setChipOn({});
        clearTimers();
      }, 2600);
    };

    form?.addEventListener("submit", onSubmit);

    return () => {
      clearTimers();
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return (
    <>
      <section
        className="bg-[var(--ink)] pb-[140px] pt-[140px] text-white max-[700px]:px-[var(--pad-x)] max-[700px]:py-20"
        id="contact"
      >
        <div className="relative mx-auto max-w-[1100px] px-[var(--pad-x)]">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/18 px-3.5 py-2.5 text-[12px] font-medium uppercase tracking-[0.06em] text-white/70 [font-family:var(--f-mono)]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#2dcb6e] animate-[studio-pulse-dot_1.6s_infinite] motion-reduce:animate-none" />
            Currently booking Q3 2026 — 2 slots
          </div>
          <h2 className="m-0 text-[clamp(48px,8vw,144px)] font-semibold leading-[0.96] tracking-[-0.04em] [font-family:var(--f-display)] [&_em]:text-[var(--blue-soft)]">
            <span className="block overflow-hidden">
              <span>Have a project</span>
            </span>
            <span className="block overflow-hidden">
              <span>
                worth <em>building well?</em>
              </span>
            </span>
          </h2>
          <p className="mt-7 mb-12 max-w-[56ch] text-lg font-normal leading-normal text-white/65 [font-family:var(--f-display)]">
            Tell us a little about what you&apos;re working on. We&apos;ll reply
            within 48 hours, usually with questions.
          </p>

          <form
            ref={formRef}
            id="ctaForm"
            className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1"
          >
            <label className="flex flex-col gap-2.5 [font-family:var(--f-display)]">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/55 [font-family:var(--f-mono)]">
                Your name
              </span>
              <input
                className="border-0 border-b border-white/18 bg-transparent pb-2.5 pt-2.5 text-lg font-medium leading-snug outline-none transition-[border-color] duration-300 [font-family:var(--f-display)] placeholder:text-white/30 focus:border-[var(--blue-soft)]"
                type="text"
                name="name"
                placeholder="Asha Menon"
                required
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col gap-2.5 [font-family:var(--f-display)]">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/55 [font-family:var(--f-mono)]">
                Email
              </span>
              <input
                className="border-0 border-b border-white/18 bg-transparent pb-2.5 pt-2.5 text-lg font-medium leading-snug outline-none transition-[border-color] duration-300 [font-family:var(--f-display)] placeholder:text-white/30 focus:border-[var(--blue-soft)]"
                type="email"
                name="email"
                placeholder="asha@helio.com"
                required
                autoComplete="email"
              />
            </label>
            <label className="col-span-full flex flex-col gap-2.5 [font-family:var(--f-display)] max-[700px]:col-span-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/55 [font-family:var(--f-mono)]">
                What are you building?
              </span>
              <textarea
                className="resize-y border-0 border-b border-white/18 bg-transparent pb-2.5 pt-2.5 text-lg font-medium leading-snug outline-none transition-[border-color] duration-300 [font-family:var(--f-display)] placeholder:text-white/30 focus:border-[var(--blue-soft)]"
                name="brief"
                rows={3}
                placeholder="A new website for our Series A launch in October…"
                required
              />
            </label>
            <div className="col-span-full mt-3 flex flex-wrap items-center justify-between gap-6 max-[700px]:flex-col max-[700px]:items-stretch">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Project type"
              >
                {CHIP_LABELS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    data-cursor="link"
                    onClick={() => toggleChip(label)}
                    aria-pressed={chipOn[label] ?? false}
                    className={cn(
                      "cursor-pointer rounded-full border border-white/18 bg-transparent px-3.5 py-2.5 text-[13px] font-medium [font-family:var(--f-display)] transition-[background,border-color,color] duration-300",
                      chipOn[label]
                        ? "border-[var(--blue)] bg-[var(--blue)] text-white"
                        : "text-white/70 hover:border-[var(--blue)] hover:bg-[var(--blue)] hover:text-white",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full border-none bg-[var(--ink)] px-7 py-5 text-[15px] font-medium tracking-tight text-white transition-[color] duration-[350ms] ease-[var(--ease)] [font-family:var(--f-display)] max-[700px]:w-full max-[700px]:justify-center"
                data-cursor="magnet"
              >
                <span className="absolute inset-0 z-0 translate-y-[101%] rounded-full bg-[var(--blue)] transition-transform duration-[550ms] ease-[var(--ease-out)] group-hover:translate-y-0" />
                <span className="relative z-10 inline-block h-[15px] overflow-hidden">
                  <span className="t block transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-full">
                    Send brief
                  </span>
                  <span className="t block transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-full">
                    Send brief
                  </span>
                </span>
                <span className="relative z-10 inline-block transition-transform duration-450 ease-[var(--ease)] group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/50 [font-family:var(--f-mono)]">
              — or —
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="border-b border-white/40 pb-1 text-2xl font-medium leading-none text-inherit transition-[color,border-color] duration-300 [font-family:var(--f-display)] hover:border-[var(--blue-soft)] hover:text-[var(--blue-soft)]"
              data-cursor="link"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
