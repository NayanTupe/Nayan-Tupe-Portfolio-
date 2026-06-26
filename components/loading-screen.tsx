"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(100, value + 7);
        if (next === 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setVisible(false), 520);
        }
        return next;
      });
    }, 70);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loader" exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.7 }}>
          <div className="loader-mark">
            <span />
            <span />
            <span />
            <strong>NT</strong>
          </div>
          <div className="loader-copy">
            <p>Initializing portfolio operating system</p>
            <h1>{progress < 50 ? "Cinema interface booting" : "Experience engine online"}</h1>
            <div className="loader-progress">
              <i style={{ width: `${progress}%` }} />
            </div>
            <b>{progress}%</b>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
