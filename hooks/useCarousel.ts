import { useEffect } from "react";

export function useCarousel() {
  useEffect(() => {
    const quotes = document.querySelectorAll(".quote");
    const dots = document.querySelectorAll(".qd");
    if (quotes.length === 0) return;

    let qIndex = 0;
    let qTimer: ReturnType<typeof setInterval> | undefined;

    function showQuote(i: number) {
      qIndex = (i + quotes.length) % quotes.length;
      quotes.forEach((q, idx) => q.classList.toggle("active", idx === qIndex));
      dots.forEach((d, idx) => d.classList.toggle("active", idx === qIndex));
    }
    function nextQuote() {
      showQuote(qIndex + 1);
    }
    function prevQuote() {
      showQuote(qIndex - 1);
    }
    function startQTimer() {
      if (qTimer !== undefined) clearInterval(qTimer);
      qTimer = setInterval(nextQuote, 6500);
    }
    startQTimer();

    const nextBtn = document.querySelector(".q-next");
    const prevBtn = document.querySelector(".q-prev");

    const onNext = () => {
      nextQuote();
      startQTimer();
    };
    const onPrev = () => {
      prevQuote();
      startQTimer();
    };

    nextBtn?.addEventListener("click", onNext);
    prevBtn?.addEventListener("click", onPrev);

    type DotLn = { d: Element; fn: () => void };
    const dotListeners: DotLn[] = [];
    dots.forEach((d) => {
      const fn = () => {
        showQuote(parseInt(d.getAttribute("data-q") || "0", 10));
        startQTimer();
      };
      d.addEventListener("click", fn);
      dotListeners.push({ d, fn });
    });

    return () => {
      if (qTimer !== undefined) clearInterval(qTimer);
      nextBtn?.removeEventListener("click", onNext);
      prevBtn?.removeEventListener("click", onPrev);
      dotListeners.forEach((l) => l.d.removeEventListener("click", l.fn));
    };
  }, []);
}