"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      document.documentElement.style.setProperty("--cursor-x", `${x}px`);
      document.documentElement.style.setProperty("--cursor-y", `${y}px`);

      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x, y, duration: 0.14, ease: "power3.out" });
      }

      if (trailRef.current) {
        gsap.to(trailRef.current, { x, y, duration: 0.5, ease: "power3.out" });
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-orb" aria-hidden="true" />
    </>
  );
}
