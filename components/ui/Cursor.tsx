"use client";
import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorLabel = document.getElementById("cursorLabel");
    if (!cursor || !cursorLabel) return;

    let cx = window.innerWidth / 2,
      cy = window.innerHeight / 2;
    let tx = cx,
      ty = cy;

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onMouseLeave = () => cursor.classList.add("is-hidden");
    const onMouseEnter = () => cursor.classList.remove("is-hidden");

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    function tickCursor() {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cursor!.style.transform = `translate(${cx}px, ${cy}px)`;
      rafId = requestAnimationFrame(tickCursor);
    }
    tickCursor();

    const cursorTargets = document.querySelectorAll("[data-cursor]");
    const handles: {
      el: Element;
      onIn: EventListener;
      onOut: EventListener;
    }[] = [];

    cursorTargets.forEach((el) => {
      const kind = el.getAttribute("data-cursor");
      const onIn = () => {
        cursor.classList.remove("is-link", "is-magnet", "is-view", "is-card");
        if (kind === "link") cursor.classList.add("is-link");
        if (kind === "magnet") cursor.classList.add("is-magnet");
        if (kind === "view") {
          cursor.classList.add("is-view");
          cursorLabel.textContent = "View case";
        }
        if (kind === "card") cursor.classList.add("is-card");
      };
      const onOut = () => {
        cursor.classList.remove("is-link", "is-magnet", "is-view", "is-card");
        cursorLabel.textContent = "";
      };
      el.addEventListener("mouseenter", onIn);
      el.addEventListener("mouseleave", onOut);
      handles.push({ el, onIn, onOut });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
      handles.forEach((h) => {
        h.el.removeEventListener("mouseenter", h.onIn);
        h.el.removeEventListener("mouseleave", h.onOut);
      });
    };
  }, []);

  return (
    <div className="cursor" id="cursor">
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
      <div className="cursor-label" id="cursorLabel"></div>
    </div>
  );
}
