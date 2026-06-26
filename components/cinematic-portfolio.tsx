"use client";

import dynamic from "next/dynamic";
import { useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { useMagnetic } from "@/hooks/use-magnetic";

const GalaxyScene = dynamic(() => import("@/components/three/galaxy-scene").then((mod) => mod.GalaxyScene), {
  ssr: false,
  loading: () => <div className="webgl-stage webgl-fallback" />,
});

export function CinematicPortfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.25 });
  useMagnetic();

  useEffect(() => {
    const unsubscribe = progress.on("change", (value) => {
      document.documentElement.style.setProperty("--scroll-progress", String(value));
    });

    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", String((event.clientX / window.innerWidth) * 2 - 1));
      document.documentElement.style.setProperty("--pointer-y", String(-(event.clientY / window.innerHeight) * 2 + 1));
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.body.classList.add("cinema-mode");

    return () => {
      unsubscribe();
      window.removeEventListener("pointermove", move);
      document.body.classList.remove("cinema-mode");
    };
  }, [progress]);

  return (
    <SmoothScrollProvider>
      <main className="cinema-app">
        <LoadingScreen />
        <CustomCursor />
        <GalaxyScene />
        <div className="noise-layer" aria-hidden="true" />
        <div className="spotlight-layer" aria-hidden="true" />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
