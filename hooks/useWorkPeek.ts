"use client";

import { useEffect } from "react";

export function useWorkPeek() {
  useEffect(() => {
    const peekNode = document.getElementById("workPeek");
    if (!(peekNode instanceof HTMLElement)) return;

    const peekUi = peekNode;

    const peekTiles = peekUi.querySelectorAll(".peek-tile");
    const workItems = document.querySelectorAll(".work-item:not(.work-peek)");

    let peekX = 0;
    let peekY = 0;
    let peekTX = 0;
    let peekTY = 0;

    type Entry = {
      item: Element;
      onEnter: () => void;
      onLeave: () => void;
      onMove: (e: Event) => void;
    };
    const listeners: Entry[] = [];

    workItems.forEach((item) => {
      const idx = Number.parseInt(item.getAttribute("data-img") ?? "0", 10);

      const onEnter = () => {
        peekUi.classList.add("visible");
        peekTiles.forEach((t) => t.classList.remove("active"));
        peekTiles[idx]?.classList.add("active");
      };
      const onLeave = () => {
        peekUi.classList.remove("visible");
      };
      const onMove = (e: Event) => {
        const ev = e as MouseEvent;
        peekTX = ev.clientX;
        peekTY = ev.clientY;
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      item.addEventListener("mousemove", onMove);

      listeners.push({ item, onEnter, onLeave, onMove });
    });

    let rafId = 0;
    function tickPeek() {
      peekX += (peekTX - peekX) * 0.18;
      peekY += (peekTY - peekY) * 0.18;
      peekUi.style.left = `${peekX}px`;
      peekUi.style.top = `${peekY}px`;
      rafId = requestAnimationFrame(tickPeek);
    }
    tickPeek();

    return () => {
      cancelAnimationFrame(rafId);
      listeners.forEach((l) => {
        l.item.removeEventListener("mouseenter", l.onEnter);
        l.item.removeEventListener("mouseleave", l.onLeave);
        l.item.removeEventListener("mousemove", l.onMove);
      });
    };
  }, []);
}
