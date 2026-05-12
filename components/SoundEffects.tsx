"use client";
import { useEffect, useRef } from "react";
import { soundSystem } from "@/lib/sound-system";

export function SoundEffects() {
  // Track last hovered element to debounce repeated mouseover fires
  const lastHoverTarget = useRef<EventTarget | null>(null);
  // Throttle whoosh so it doesn't fire more than once per 800ms
  const lastWhooshAt = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ── 1. Unlock AudioContext on first user gesture ─────────
    const unlock = () => {
      soundSystem.unlock();
      // Only need to unlock once
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("click", unlock);
    window.addEventListener("keydown", unlock);

    // ── 2. Link / Button Hover → Soft Click ─────────────────
    const handleMouseOver = (e: MouseEvent) => {
      // Debounce: ignore if same target
      if (e.target === lastHoverTarget.current) return;
      lastHoverTarget.current = e.target;

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        !!target.closest("[data-cursor='link']") ||
        !!target.closest("[data-cursor='magnet']") ||
        !!target.closest("[data-cursor='card']") ||
        !!target.closest("[data-cursor='view']");

      if (isInteractive) soundSystem.playClick();
    };

    // ── 3. Keyboard Tones on Input ───────────────────────────
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      const isTypingKey = e.key.length === 1 || e.key === "Backspace" || e.key === "Enter";
      if (isInput && isTypingKey) soundSystem.playKeypress();
    };

    // ── 4. Section Enter → Whoosh (throttled) ───────────────
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const now = Date.now();
        if (now - lastWhooshAt.current < 800) return; // throttle
        lastWhooshAt.current = now;
        soundSystem.playWhoosh();
      });
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.15 });

    // Observe all <section> tags + anything flagged with .sound-section
    const targets = document.querySelectorAll("section, .sound-section");
    targets.forEach((el) => observer.observe(el));

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("keydown", handleKeyDown);
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
