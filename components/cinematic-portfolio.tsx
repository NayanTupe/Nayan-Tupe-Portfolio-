"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { AIAssistant } from "@/components/assistant/ai-assistant";
import { BootSequence } from "@/components/animations/boot-sequence";
import { LivingBackground } from "@/components/background/living-background";
import { FloatingNav } from "@/components/layout/floating-nav";
import {
  AchievementsSection,
  CertificatesSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  IdentitySection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { useMagnetic } from "@/hooks/use-magnetic";

gsap.registerPlugin(ScrollTrigger);

function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span />
      <i />
    </div>
  );
}

export function CinematicPortfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.22 });
  useMagnetic();

  useEffect(() => {
    const unsubscribe = progress.on("change", (value) => {
      document.documentElement.style.setProperty("--scroll-progress", String(value));
    });

    document.body.classList.add("cinema-mode");

    const hello = () => {
      document.documentElement.classList.add("hello-mode");
      window.setTimeout(() => document.documentElement.classList.remove("hello-mode"), 1800);
    };
    window.addEventListener("portfolio:hello", hello);

    const keys: string[] = [];
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    const keydown = (event: KeyboardEvent) => {
      keys.push(event.key);
      keys.splice(-konami.length - 1, Math.max(0, keys.length - konami.length));
      if (konami.every((key, index) => keys[index] === key)) {
        document.documentElement.classList.toggle("gold-mode");
      }
      if (event.shiftKey && event.key.toLowerCase() === "d") {
        document.documentElement.classList.toggle("developer-overlay");
      }
    };
    window.addEventListener("keydown", keydown);

    return () => {
      unsubscribe();
      document.body.classList.remove("cinema-mode");
      window.removeEventListener("portfolio:hello", hello);
      window.removeEventListener("keydown", keydown);
    };
  }, [progress]);

  return (
    <SmoothScrollProvider>
      <main className="cinema-app">
        <BootSequence />
        <LivingBackground />
        <ScrollIndicator />
        <FloatingNav />
        <HeroSection />
        <IdentitySection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
        <AIAssistant />
        <noscript>
          <div className="noscript">Nayan Tupe portfolio. JavaScript is required for the cinematic OS interface, but the resume is available at /Nayan_Tupe_Resume.pdf.</div>
        </noscript>
      </main>
    </SmoothScrollProvider>
  );
}
