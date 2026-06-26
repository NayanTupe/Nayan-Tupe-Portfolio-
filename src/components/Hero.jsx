import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Download,
  FolderOpen,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserRound,
  Volume2,
} from "lucide-react";
import { profileLinks } from "../data/projects";
import TalkingAvatar from "./TalkingAvatar";

const profileIntroduction =
  "Hello, I am Nayan Tupe, an AI and machine learning developer focused on building useful digital products. I create prediction systems, FastAPI backends, responsive React dashboards, and business intelligence experiences. My work connects data, engineering, and thoughtful interface design to solve practical problems. Scroll through my portfolio to explore Retail IQ, my technical skills, project evidence, and deployment work.";

function Hero() {
  const [isTalking, setIsTalking] = useState(false);
  const [speechMessage, setSpeechMessage] = useState("");
  const hasIntroduced = useRef(false);

  const playIntroduction = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    const speech = window.speechSynthesis;
    const introduction = new SpeechSynthesisUtterance(profileIntroduction);
    const voices = speech.getVoices();
    const preferredVoice =
      voices.find((voice) => voice.lang === "en-IN") ||
      voices.find((voice) => voice.lang.startsWith("en"));

    if (preferredVoice) introduction.voice = preferredVoice;
    introduction.lang = preferredVoice?.lang || "en-IN";
    introduction.rate = 0.72;
    introduction.pitch = 0.96;
    introduction.volume = 1;

    introduction.onstart = () => {
      hasIntroduced.current = true;
      setIsTalking(true);
      setSpeechMessage("Now playing Nayan's professional introduction");
    };
    introduction.onend = () => {
      setIsTalking(false);
      setSpeechMessage("Click the AI avatar to replay the introduction");
    };
    introduction.onerror = (event) => {
      setIsTalking(false);
      if (event.error !== "canceled") {
        setSpeechMessage("Click the AI avatar to play the introduction");
      }
    };

    speech.cancel();
    speech.speak(introduction);
  }, []);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return undefined;

    const speech = window.speechSynthesis;
    const startAfterInteraction = () => {
      if (!hasIntroduced.current) playIntroduction();
    };

    const autoStartTimer = window.setTimeout(playIntroduction, 1400);
    window.addEventListener("pointerdown", startAfterInteraction, { passive: true });
    window.addEventListener("keydown", startAfterInteraction);
    window.addEventListener("scroll", startAfterInteraction, { passive: true, once: true });

    return () => {
      window.clearTimeout(autoStartTimer);
      window.removeEventListener("pointerdown", startAfterInteraction);
      window.removeEventListener("keydown", startAfterInteraction);
      window.removeEventListener("scroll", startAfterInteraction);
      speech.cancel();
    };
  }, [playIntroduction]);

  return (
    <section className="hero section-pad">
      <div className="hero-background-grid" />
      <div className="hero-light-field" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <div className="hero-badge">
          <Sparkles size={16} />
          AI • ML • React • FastAPI • Dashboards
        </div>

        <h1>
          Nayan Tupe
          <span>AI/ML Systems Builder.</span>
        </h1>

        <p className="hero-text">
          I design and ship <strong>production-ready AI products</strong>:
          ML prediction systems, FastAPI backends, React/Vite dashboards and
          business intelligence platforms with live deployment proof.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#retailiq">
            View Featured Work <ArrowRight size={18} />
          </a>

          <a className="btn secondary" href={profileLinks.resume} download>
            <Download size={18} /> Download Resume
          </a>

          <a className="btn secondary" href={profileLinks.portfolioDrive} target="_blank">
            <FolderOpen size={18} /> Portfolio Drive
          </a>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>7+</strong>
            <span>Shipped Projects</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Responsive Builds</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>QA Issues Closed</span>
          </div>
        </div>

        <div className="social-row">
          <a href={profileLinks.github} target="_blank">
            <Code2 size={20} /> GitHub
          </a>

          <a href={profileLinks.linkedin} target="_blank">
            <UserRound size={20} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-portrait-area"
        initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.9, delay: 0.18 }}
      >
        <div className="portrait-ring portrait-ring-one" />
        <div className="portrait-ring portrait-ring-two" />
        <div className="portrait-ring portrait-ring-three" />

        <div className="hero-code-panel">
          <div className="code-panel-top">
            <TerminalSquare size={16} />
            <span>nayan.profile</span>
          </div>
          <code>
            role: "AI/ML Developer"<br />
            stack: ["React", "FastAPI", "Python"]<br />
            status: "ready_to_build"
          </code>
        </div>

        <div className={`portrait-shell${isTalking ? " is-talking" : ""}`}>
          <div className="portrait-shadow-card" />
          <div className="portrait-holo-frame" />

          <button
            className="portrait-main-card"
            type="button"
            onClick={playIntroduction}
            aria-label="Play Nayan Tupe's AI introduction"
          >
            <div className="portrait-image-wrap">
              <TalkingAvatar isTalking={isTalking} />
              <div className="talking-wave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="ai-guide-badge">
                <span className="ai-guide-dot" />
                Interactive AI Introduction
              </div>
            </div>

            <div className="portrait-info-card">
              <span>{isTalking ? "Speaking Now" : "Click Avatar To Hear Me"}</span>
              <strong>Nayan Tupe</strong>
              <p>AI/ML Developer • React • FastAPI • Data Products</p>
            </div>
          </button>

          <div className={`avatar-speech-bubble${isTalking ? " is-speaking" : ""}`}>
            <span>{isTalking ? "Let me introduce my work..." : "Click me — I can introduce this portfolio."}</span>
          </div>

          <div className="profile-speech-status visible" aria-live="polite">
            <Volume2 size={15} />
            <span>
              {speechMessage || "Click the AI avatar to play my professional introduction"}
            </span>
          </div>
        </div>

        <div className="floating-tech-card card-ai">
          <BrainCircuit size={22} />
          <div>
            <strong>Machine Learning</strong>
            <span>Prediction • Segmentation</span>
          </div>
        </div>

        <div className="floating-tech-card card-api">
          <Rocket size={22} />
          <div>
            <strong>FastAPI Backend</strong>
            <span>Swagger • Render</span>
          </div>
        </div>

        <div className="floating-tech-card card-data">
          <Database size={22} />
          <div>
            <strong>Dashboards</strong>
            <span>KPIs • Reports • Charts</span>
          </div>
        </div>

        <div className="floating-tech-card card-proof">
          <ShieldCheck size={22} />
          <div>
            <strong>Project Proof</strong>
            <span>GitHub • PPT • Live Links</span>
          </div>
        </div>

        <span className="orbit-chip chip-python">Python</span>
        <span className="orbit-chip chip-react">React</span>
        <span className="orbit-chip chip-fastapi">FastAPI</span>
        <span className="orbit-chip chip-ml">ML</span>
      </motion.div>

      <a className="hero-scroll-cue" href="#about" aria-label="Scroll to About section">
        <span>Explore</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
