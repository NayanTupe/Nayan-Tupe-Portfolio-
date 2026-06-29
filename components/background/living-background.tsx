"use client";

import { useEffect } from "react";

export function LivingBackground() {
  useEffect(() => {
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--pointer-x", String((event.clientX / window.innerWidth) * 2 - 1));
      document.documentElement.style.setProperty("--pointer-y", String((event.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="living-bg" aria-hidden="true">
      <div className="mesh-layer" />
      <div className="liquid-layer" />
      <div className="distortion-layer" />
      <div className="ambient-light-layer" />
      <div className="reflection-layer" />
      <div className="depth-layer" />
      <div className="noise-layer" />
    </div>
  );
}
