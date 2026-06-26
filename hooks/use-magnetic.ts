"use client";

import gsap from "gsap";
import { useEffect } from "react";

export function useMagnetic(selector = ".magnetic") {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const cleanups = items.map((item) => {
      const move = (event: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
          x: x * 0.18,
          y: y * 0.18,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(item, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.45)" });
      };

      item.addEventListener("mousemove", move);
      item.addEventListener("mouseleave", leave);
      return () => {
        item.removeEventListener("mousemove", move);
        item.removeEventListener("mouseleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);
}
