"use client";

import { Download, Home, Mail, Network, PanelsTopLeft, ScanFace, Sparkles, Timer } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { profileLinks } from "@/lib/portfolio-data";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "identity", label: "Identity", icon: ScanFace },
  { id: "skills", label: "Skills", icon: Network },
  { id: "projects", label: "Projects", icon: PanelsTopLeft },
  { id: "experience", label: "Experience", icon: Timer },
  { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();
  const compact = useTransform(scrollY, [0, 260], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 },
    );
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="nav-dock"
      style={{
        scale: useTransform(compact, [0, 1], [1, 0.94]),
      }}
    >
      <button
        className="brand-lockup magnetic"
        aria-label="Nayan Tupe operating system logo"
        onDoubleClick={() => window.dispatchEvent(new CustomEvent("portfolio:logo-secret"))}
      >
        <Sparkles size={17} />
        <span>Nayan OS</span>
      </button>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.id} className={active === item.id ? "active" : ""} href={`#${item.id}`} aria-label={item.label}>
              <Icon size={16} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
      <a className="resume-control magnetic" href={profileLinks.resume} download aria-label="Download resume">
        <Download size={17} />
      </a>
    </motion.header>
  );
}
