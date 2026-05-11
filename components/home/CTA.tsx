"use client";

import type { FormEvent } from "react";
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

type SendUi = "idle" | "sending" | "success" | "error";

export function CTA() {
  const [chipOn, setChipOn] = useState<Record<string, boolean>>({});
  const [sendUi, setSendUi] = useState<SendUi>("idle");
  const chipOnRef = useRef(chipOn);
  const resetTimerRef = useRef<number | undefined>(undefined);
  const submitLockRef = useRef(false);

  useEffect(() => {
    chipOnRef.current = chipOn;
  }, [chipOn]);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  const toggleChip = useCallback((label: string) => {
    setChipOn((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitLockRef.current) return;
    submitLockRef.current = true;

    const form = e.currentTarget;
    setSendUi("sending");

    const formData = new FormData(form);
    const types = CHIP_LABELS.filter((c) => chipOnRef.current[c]).join(", ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          brief: formData.get("brief"),
          type: types,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setSendUi("success");
    } catch {
      setSendUi("error");
    }

    window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      form.reset();
      setChipOn({});
      setSendUi("idle");
      submitLockRef.current = false;
    }, 2400);
  }, []);

  const statusLabel =
    sendUi === "sending"
      ? "Sending…"
      : sendUi === "success"
        ? "Check your inbox"
        : sendUi === "error"
          ? "Try email below"
          : null;

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
            id="ctaForm"
            className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1"
            onSubmit={onSubmit}
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
                disabled={sendUi === "sending"}
                className={cn(
                  "group relative inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-[var(--ink)] px-7 py-5 text-[15px] font-medium tracking-tight text-white transition-[color,opacity] duration-[350ms] ease-[var(--ease)] [font-family:var(--f-display)] max-[700px]:w-full",
                  sendUi === "sending" && "cursor-wait opacity-90",
                )}
                data-cursor="magnet"
              >
                <span
                  className={cn(
                    "absolute inset-0 z-0 translate-y-[101%] rounded-full bg-[var(--blue)] transition-transform duration-[550ms] ease-[var(--ease-out)] group-disabled:translate-y-[101%]",
                    sendUi === "idle" ? "group-hover:translate-y-0" : "",
                  )}
                />
                {statusLabel ? (
                  <span className="relative z-10 min-w-[10.5rem] text-center leading-none max-[700px]:min-w-0">
                    {statusLabel}
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 inline-block h-[18px] min-w-[5.5rem] overflow-hidden leading-[18px]">
                      <span className="block transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-full group-disabled:translate-y-0">
                        Send brief
                      </span>
                      <span className="block transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-full group-disabled:translate-y-0">
                        Send brief
                      </span>
                    </span>
                    <span className="relative z-10 shrink-0 transition-transform duration-450 ease-[var(--ease)] group-hover:translate-x-1 group-disabled:translate-x-0">
                      →
                    </span>
                  </>
                )}
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
