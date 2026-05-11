"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
] as const;

const PROJECT_CAL = "https://calendar.app.google/FKfjbrEKyrqRPE916";

const MOBILE_DRAWER_ID = "primary-nav-drawer";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalMounted, setPortalMounted] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only portal root
    setPortalMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const mobileMenuPortal =
    portalMounted &&
    createPortal(
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[90] hidden max-[1100px]:block",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
          "ease-[var(--ease)] motion-reduce:transition-none motion-reduce:duration-[1ms] transition-opacity duration-[320ms]",
          mobileOpen ? "opacity-100" : "opacity-0",
        )}
      >
        <button
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 cursor-pointer bg-[rgba(10,10,18,0.42)] backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] motion-reduce:transition-none motion-reduce:duration-[1ms]",
            mobileOpen ? "opacity-100" : "opacity-0",
            "transition-opacity duration-[320ms]",
          )}
          tabIndex={mobileOpen ? 0 : -1}
          type="button"
          onClick={closeMobile}
        />
        <div
          aria-labelledby="nav-mobile-heading"
          aria-modal="true"
          className={cn(
            "fixed bottom-0 left-[max(16px,env(safe-area-inset-left))] right-[max(16px,env(safe-area-inset-right))] z-[91] max-h-[min(560px,88dvh)] overflow-y-auto overscroll-contain rounded-t-[20px] border border-b-0 border-[var(--line)] bg-[var(--paper)] opacity-[0.98] shadow-[0_-32px_80px_rgba(10,10,18,0.12),0_-1px_0_rgba(255,255,255,0.6)] [-webkit-overflow-scrolling:touch] motion-reduce:duration-[1ms] motion-reduce:transition-none ease-[var(--ease-out)] transition-[transform,opacity] duration-[420ms] will-change-transform",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[106%] opacity-[0.98]",
          )}
          id={MOBILE_DRAWER_ID}
          role="dialog"
          tabIndex={-1}
        >
          <nav
            aria-label="Primary mobile"
            className="px-[calc(var(--pad-x)*0.5)] pb-[calc(26px+env(safe-area-inset-bottom))] pt-2.5"
          >
            <p
              className="mb-2 font-[500_11px/1_var(--f-mono)] uppercase tracking-[0.1em] text-[var(--muted)]"
              id="nav-mobile-heading"
            >
              Navigate
            </p>
            <ul className="m-0 list-none border-y border-[var(--line)] p-0 [&>li:last-child>a]:border-b-0">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className={cn(
                      "group/nav-item flex items-center justify-between gap-4 border-b border-[rgba(217,214,204,0.55)] px-1 py-[18px] text-[clamp(26px,7vw,40px)] font-semibold leading-none tracking-[-0.035em] text-[var(--ink)] outline-none transition-[color,padding-left] duration-[220ms] ease-[var(--ease)]",
                      "active:text-[var(--blue)] focus-visible:text-[var(--blue)] hover:pl-2 hover:text-[var(--blue)]",
                    )}
                    data-cursor="link"
                    href={href}
                    onClick={closeMobile}
                  >
                    <span>{label}</span>
                    <span
                      aria-hidden
                      className="font-[500_22px/1_var(--f-mono)] text-[var(--muted)] transition-[transform,color] duration-[220ms] ease-[var(--ease)] group-hover/nav-item:translate-x-1.5 group-hover/nav-item:text-[var(--blue)]"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              className={cn(
                "mt-[22px] flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--ink)] px-5 py-4 text-[15px] font-semibold tracking-[-0.01em] text-white transition-[background-color,transform] duration-[280ms] ease-[var(--ease)] hover:bg-[var(--blue)] active:scale-[0.98]",
              )}
              data-cursor="magnet"
              href={PROJECT_CAL}
              onClick={closeMobile}
              rel="noopener noreferrer"
              target="_blank"
            >
              Start a project
              <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        id="nav"
        className={cn(
          "fixed inset-x-0 top-0 z-[100] px-[var(--pad-x)] pb-[18px] pt-[18px] transition-[padding,background-color,backdrop-filter,-webkit-backdrop-filter,border-color] duration-[350ms] ease-[var(--ease)]",
          scrolled &&
            "border-b border-[var(--line)] bg-[rgba(246,245,241,0.78)] pb-2.5 pt-2.5 backdrop-blur-[14px] backdrop-saturate-[110%]",
        )}
      >
        <div className="relative z-[2] grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-[1100px]:grid-cols-[1fr_auto] max-[1100px]:gap-4">
          <Link
            aria-label="Yarla Studios home"
            className={cn(
              "group/logo flex shrink-0 items-center gap-2.5 text-[var(--blue)] outline-none hover:opacity-90",
            )}
            data-cursor="logo"
            href="/"
            onClick={closeMobile}
          >
            <span className="logo-mark inline-flex">
              <Image
                priority
                alt=""
                aria-hidden
                className="block duration-[600ms] ease-[var(--ease)] transition-transform group-hover/logo:rotate-180"
                height={28}
                src="/assets/home/yarla-logo-mark.svg"
                width={28}
              />
            </span>
            <span className="flex flex-col leading-[0.9]">
              <span className="text-[16px] font-extrabold leading-[0.9] tracking-[-0.02em]">
                Yarla
              </span>
              <span className="text-[16px] font-extrabold leading-[0.9] tracking-[-0.02em]">
                Studios
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden min-[1101px]:flex justify-center gap-1.5"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                className="group/nav-pill relative overflow-hidden rounded-full px-[14px] py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[var(--ink)] outline-none"
                data-cursor="link"
                href={href}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 z-0 translate-y-[101%] rounded-full bg-[var(--ink)] duration-[450ms] ease-[var(--ease)] transition-transform group-focus-visible/nav-pill:translate-y-0 group-hover/nav-pill:translate-y-0"
                />
                <span className="relative z-[1] duration-300 ease-[var(--ease)] transition-colors group-focus-visible/nav-pill:text-white group-hover/nav-pill:text-white">
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 max-[1100px]:gap-2.5 max-[1100px]:[&>*]:items-center min-[1101px]:gap-3.5">
            <button
              aria-controls={MOBILE_DRAWER_ID}
              aria-expanded={mobileOpen}
              className={cn(
                "hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--line)] bg-white/55 px-4 py-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--ink)] outline-none duration-[250ms] ease-[var(--ease)] transition-[border-color,background-color,color] hover:border-[var(--ink)] max-[1100px]:inline-flex",
                scrolled &&
                  "max-[1100px]:border-[rgba(217,214,204,0.85)] max-[1100px]:bg-white/[0.7]",
              )}
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>

            <a
              aria-label="Schedule kickoff via Google Calendar (opens new tab)"
              className={cn(
                "group/nav-cta relative box-border inline-flex min-h-[44px] overflow-hidden rounded-full bg-[var(--ink)] px-4 py-3 leading-none outline-none duration-300 ease-[var(--ease)] transition-colors hover:bg-[var(--blue)] max-[380px]:hidden max-[1100px]:justify-center max-[1100px]:gap-2",
                "items-center gap-2.5 text-[13px] font-medium tracking-[-0.005em] text-white min-[1101px]:px-[18px] min-[1101px]:py-[11px]",
              )}
              data-cursor="magnet"
              href={PROJECT_CAL}
              onClick={closeMobile}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="relative z-[1] hidden h-[13px] min-[1101px]:inline-flex min-[1101px]:flex-col min-[1101px]:overflow-hidden">
                <span className="flex translate-y-0 flex-col duration-[450ms] ease-[var(--ease-out)] transition-transform group-hover/nav-cta:-translate-y-1/2">
                  <span className="flex h-[13px] shrink-0 items-center">
                    Start a project
                  </span>
                  <span className="flex h-[13px] shrink-0 items-center">
                    Start a project
                  </span>
                </span>
              </span>
              <span className="relative z-[1] min-[1101px]:hidden">
                Start a project
              </span>
              <span className="relative z-[1] translate-x-0 duration-[400ms] ease-[var(--ease)] transition-transform group-hover/nav-cta:translate-x-[2px] group-hover/nav-cta:-translate-y-[2px]">
                ↗
              </span>
            </a>
          </div>
        </div>
      </header>
      {mobileMenuPortal ? mobileMenuPortal : null}
    </>
  );
}
