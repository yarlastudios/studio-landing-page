import { useEffect } from "react";

export function useCountUp() {
  useEffect(() => {
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const to = parseInt(el.getAttribute("data-to") || "0", 10);
          const dur = 1600;
          const start = performance.now();
          function step(now: number) {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - (1 - t) ** 3;
            el.textContent = Math.round(to * eased).toString();
            if (t < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll(".counter").forEach((el) => counterIO.observe(el));

    return () => counterIO.disconnect();
  }, []);
}