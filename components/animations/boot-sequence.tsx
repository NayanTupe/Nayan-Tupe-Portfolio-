"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const messages = [
  "Initializing Neural Core...",
  "Loading Visual Engine...",
  "Calibrating Motion System...",
  "Scanning Portfolio Database...",
  "Authenticating Visitor...",
  "Preparing Interactive Experience...",
  "Welcome.",
];

export function BootSequence() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (reduced) {
      const timeout = window.setTimeout(() => setVisible(false), 900);
      return () => window.clearTimeout(timeout);
    }

    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current >= messages.length - 1) {
          window.clearInterval(timer);
          window.setTimeout(() => setVisible(false), 850);
          return current;
        }
        return current + 1;
      });
    }, 560);

    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          exit={{ opacity: 0, filter: "blur(18px)", scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Portfolio operating system boot sequence"
        >
          <motion.div
            className="boot-light"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="boot-lines" aria-live="polite">
            {messages.slice(0, step + 1).map((message, index) => (
              <motion.p
                key={message}
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: index === step ? 1 : 0.6, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
              >
                {message}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
