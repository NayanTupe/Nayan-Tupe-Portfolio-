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
} from "lucide-react";
import { profileLinks } from "../data/projects";

function Hero() {
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

        <div className="portrait-shell">
          <div className="portrait-shadow-card" />
          <div className="portrait-holo-frame" />

          <div className="portrait-main-card">
            <div className="portrait-top-strip">
              <span />
              <span />
              <span />
            </div>

            <div className="portrait-image-wrap">
              <img src="/images/profile.jpg" alt="Nayan Tupe" />
            </div>

            <div className="portrait-info-card">
              <span>Available For Roles</span>
              <strong>Nayan Tupe</strong>
              <p>Data Science • ML • Full Stack Developer</p>
            </div>
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
    </section>
  );
}

export default Hero;
