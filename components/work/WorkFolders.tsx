"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Project = {
  num: string;
  title: string;
  meta: string;
  year: string;
  color: string;
  folderIcon: string;
  assets: { label: string; bg: string; text: string }[];
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Helio Banking",
    meta: "Brand · Web · Product UX",
    year: "'26",
    color: "#1F2BFF",
    folderIcon: "blue",
    assets: [
      { label: "Logo System", bg: "#e7e8ff", text: "#1F2BFF" },
      { label: "UI Components", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
      { label: "Brand Palette", bg: "#f6f5f1", text: "#0A0A12" },
      { label: "Typography", bg: "#1F2BFF", text: "white" },
    ],
  },
  {
    num: "02",
    title: "Northwind Energy",
    meta: "Identity · Website · CMS",
    year: "'25",
    color: "#2A2A40",
    folderIcon: "black",
    assets: [
      { label: "Hero Layout", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
      { label: "Icon Set", bg: "#e7e8ff", text: "#1F2BFF" },
      { label: "Web Screens", bg: "#f6f5f1", text: "#0A0A12" },
      { label: "Motion Guide", bg: "#2A2A40", text: "white" },
    ],
  },
  {
    num: "03",
    title: "Pareto.fund",
    meta: "Site · Microinteractions · 3D",
    year: "'25",
    color: "#6b6b7a",
    folderIcon: "gray",
    assets: [
      { label: "3D Assets", bg: "#eceae3", text: "#0A0A12" },
      { label: "Motion Reel", bg: "#1F2BFF", text: "white" },
      { label: "Color System", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
      { label: "Prototypes", bg: "#f6f5f1", text: "#0A0A12" },
    ],
  },
  {
    num: "04",
    title: "Verdant Labs",
    meta: "Brand · Naming · Web",
    year: "'25",
    color: "#1F7A1F",
    folderIcon: "green",
    assets: [
      { label: "Wordmark", bg: "#e7e8ff", text: "#1F2BFF" },
      { label: "Mockup Sheet", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
      { label: "Web Design", bg: "#f6f5f1", text: "#0A0A12" },
      { label: "Brand Deck", bg: "#1F7A1F", text: "white" },
    ],
  },
  {
    num: "05",
    title: "Atlas Pay",
    meta: "Product · Design system",
    year: "'24",
    color: "#8B5CF6",
    folderIcon: "purple",
    assets: [
      { label: "Component Lib", bg: "#e7e8ff", text: "#1F2BFF" },
      { label: "Token System", bg: "#8B5CF6", text: "white" },
      { label: "App Screens", bg: "#f6f5f1", text: "#0A0A12" },
      { label: "Prototype", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
    ],
  },
  {
    num: "06",
    title: "Ferment Co.",
    meta: "D2C · Brand · Webflow",
    year: "'24",
    color: "#D97706",
    folderIcon: "yellow",
    assets: [
      { label: "Label Design", bg: "#D97706", text: "white" },
      { label: "E-com Layout", bg: "#f6f5f1", text: "#0A0A12" },
      { label: "Photography", bg: "#0A0A12", text: "rgba(255,255,255,0.5)" },
      { label: "Brand System", bg: "#e7e8ff", text: "#1F2BFF" },
    ],
  },
];

// Fixed scatter positions for assets relative to viewport
const SCATTER_POSITIONS = [
  { top: "12%", left: "5%",   rotate: "-7deg",  delay: "0ms"   },
  { top: "10%", right: "4%",  rotate: "5deg",   delay: "60ms"  },
  { bottom: "22%", left: "4%",  rotate: "8deg",  delay: "30ms"  },
  { bottom: "18%", right: "5%", rotate: "-4deg",  delay: "90ms"  },
];

export function WorkFolders() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [genieOrigin, setGenieOrigin] = useState({ x: "50%", y: "50%" });
  const [isClosing, setIsClosing] = useState(false);
  const folderRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const currentProject = PROJECTS.find((p) => p.num === clickedId);

  const handleClick = (num: string) => {
    const el = folderRefs.current[num];
    if (el) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setGenieOrigin({ x: `${cx}px`, y: `${cy}px` });
    }
    setIsClosing(false);
    setClickedId(num);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setClickedId(null);
      setIsClosing(false);
    }, 450);
  };

  return (
    <div className="relative min-h-[600px] py-16">

      {/* Folders Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
        {PROJECTS.map((row) => (
          <div
            key={row.num}
            className="flex flex-col items-center group relative"
            onMouseEnter={() => setHoveredId(row.num)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Folder Icon */}
            <div
              ref={(el) => { folderRefs.current[row.num] = el; }}
              onClick={() => handleClick(row.num)}
              className={`cursor-pointer select-none transition-all duration-300 ease-[var(--ease)] ${
                hoveredId === row.num
                  ? "scale-[1.15] -translate-y-3 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  : ""
              }`}
              style={{ willChange: "transform" }}
            >
              <div className="relative w-28 h-28">
                <Image
                  src={`/assets/macOS Folder Icons (Community)/macos-folder-${row.folderIcon}256x256.svg`}
                  alt={`${row.title} folder`}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <span
              className="mt-3 text-[14px] font-semibold text-[var(--ink)] text-center transition-colors duration-200"
              style={{ color: hoveredId === row.num ? row.color : undefined }}
            >
              {row.title}
            </span>
            <span className="text-[11px] font-mono text-[var(--muted)] text-center mt-0.5">
              {row.meta}
            </span>
          </div>
        ))}
      </div>

      {/* ── Hover Scatter Overlay ─────────────────────────── */}
      {hoveredId && (() => {
        const project = PROJECTS.find((p) => p.num === hoveredId)!;
        return (
          <div className="fixed inset-0 pointer-events-none z-50">
            {project.assets.map((asset, i) => {
              const pos = SCATTER_POSITIONS[i];
              return (
                <div
                  key={asset.label}
                  className="absolute w-72 h-52 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2 font-medium text-[15px]"
                  style={{
                    background: asset.bg,
                    color: asset.text,
                    top: pos.top,
                    left: (pos as any).left,
                    right: (pos as any).right,
                    bottom: (pos as any).bottom,
                    transform: `rotate(${pos.rotate})`,
                    animation: `scatterIn 0.4s ${pos.delay} cubic-bezier(0.16, 1, 0.3, 1) both`,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.08em] opacity-50">
                    {project.num} / Asset
                  </span>
                  <span className="font-semibold text-[16px]">{asset.label}</span>
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* ── Genie Modal ──────────────────────────────────── */}
      {clickedId && currentProject && (
        <div
          className="fixed inset-0 bg-[var(--paper)] z-[1000] overflow-y-auto"
          style={{
            transformOrigin: `${genieOrigin.x} ${genieOrigin.y}`,
            animation: isClosing
              ? `genieCollapse 0.45s cubic-bezier(0.4, 0, 1, 1) forwards`
              : `genieExpand 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="fixed top-6 right-6 size-12 flex items-center justify-center rounded-full bg-[var(--ink)] text-white z-[1001] hover:bg-[var(--blue)] transition-colors text-lg"
            aria-label="Close project"
          >
            ✕
          </button>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-[var(--pad-x)] py-24">
            {/* Header */}
            <div className="mb-6 font-[500_12px/1_var(--f-mono)] uppercase tracking-[0.12em] text-[var(--muted)]">
              Project {currentProject.num} — {currentProject.year}
            </div>
            <h1 className="text-[clamp(48px,7vw,96px)] font-bold tracking-[-0.04em] leading-[0.95] mb-6 text-[var(--ink)]">
              {currentProject.title}
            </h1>
            <p className="text-[20px] text-[var(--muted)] mb-16 max-w-[40ch]">
              {currentProject.meta} — a full-service engagement from strategy through build.
            </p>

            {/* Hero image */}
            <div
              className="w-full h-[400px] rounded-3xl mb-8 flex items-center justify-center text-[var(--muted)] font-mono text-2xl"
              style={{ background: `${currentProject.color}18`, border: `1px solid ${currentProject.color}30` }}
            >
              <span style={{ color: currentProject.color }}>[ Hero Mockup — {currentProject.title} ]</span>
            </div>

            {/* Asset Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {currentProject.assets.map((asset) => (
                <div
                  key={asset.label}
                  className="rounded-2xl h-56 flex flex-col items-center justify-center gap-2"
                  style={{ background: asset.bg, color: asset.text, border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] opacity-50">Asset</span>
                  <span className="font-semibold text-[18px]">{asset.label}</span>
                </div>
              ))}
            </div>

            {/* Info strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--line)] pt-10">
              {[
                { label: "Client", val: currentProject.title },
                { label: "Year", val: currentProject.year },
                { label: "Services", val: currentProject.meta },
                { label: "Status", val: "Delivered ✓" },
              ].map(({ label, val }) => (
                <div key={label}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">{label}</h3>
                  <p className="font-semibold text-[var(--ink)]">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Keyframes ────────────────────────────────────── */}
      <style jsx>{`
        @keyframes scatterIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(var(--r, 0deg)) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(var(--r, 0deg)) translateY(0);
          }
        }

        @keyframes genieExpand {
          0%   { transform: scale(0.04); opacity: 0; border-radius: 50%; filter: blur(8px); }
          30%  { opacity: 1; filter: blur(0); }
          60%  { transform: scale(1.04); border-radius: 16px; }
          100% { transform: scale(1);    border-radius: 0;   opacity: 1; filter: blur(0); }
        }

        @keyframes genieCollapse {
          0%   { transform: scale(1);    opacity: 1; border-radius: 0;   filter: blur(0); }
          50%  { transform: scale(0.6);  opacity: 0.6; border-radius: 50px; }
          100% { transform: scale(0.04); opacity: 0; border-radius: 50%; filter: blur(6px); }
        }
      `}</style>
    </div>
  );
}
