import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollExperience() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.25,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => section.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}

export default ScrollExperience;
