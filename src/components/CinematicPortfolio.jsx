/* eslint-disable react-hooks/immutability */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, Line, Stars } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Code2,
  Database,
  Download,
  FileText,
  FolderOpen,
  GitBranch,
  Mail,
  RadioTower,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserRound,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { featuredProject, profileLinks, projects } from "../data/projects";

const skills = [
  "React",
  "Three.js",
  "GSAP",
  "Framer",
  "Python",
  "FastAPI",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
  "Vite",
  "ML",
];

const achievements = [
  "Production AI SaaS platform launched with FastAPI and React",
  "Random Forest churn prediction and customer segmentation systems",
  "Deployment proof across Vercel, Render, Swagger and GitHub",
  "Responsive dashboards, reports, analytics views and business workflows",
];

const experienceItems = [
  {
    role: "Technology Intern",
    company: "Z-Aksys Solutions, Vashi Navi Mumbai",
    date: "Mar 2026 - Present",
    points: [
      "Developed and maintained 15+ responsive web pages using Git/GitHub.",
      "Performed QA testing, identified/logged 20+ bugs and supported fixes.",
      "Managed website content updates and digital campaign support using Mailchimp.",
      "Built practical exposure to production websites and client-ready delivery.",
    ],
  },
  {
    role: "Logistics Clearing & Documentation Executive",
    company: "Ace Clearing And Forwarding, Navi Mumbai",
    date: "Mar 2024 - Nov 2025",
    points: [
      "Handled import/export clearance documents and shipping records.",
      "Worked on ODEX document submission and process tracking.",
      "Built documentation discipline and business process understanding.",
    ],
  },
];

const certifications = [
  {
    title: "Data Science Diploma",
    source: "Boston Institute Of Analytics",
    date: "Mar 2025 - Nov 2025",
  },
  {
    title: "Artificial Intelligence Diploma",
    source: "Boston Institute Of Analytics",
    date: "May 2025 - Nov 2025",
  },
  {
    title: "Data Science Internship",
    source: "Spinnaker Analytics Pvt. Ltd.",
    date: "2-month internship",
  },
];

const projectPreviewImages = {
  "RetailIQ - AI SaaS Analytics Platform": "/images/retailiq-dashboard.png",
  "TradingMLModel - ML Backtesting & Paper Trading": "/images/tradingml-dashboard-preview.png",
  "KKC Spices - ERP Reports Dashboard": "/images/kkc-spices-dashboard-preview.png",
};

function seededValue(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function seededSpread(seed, range) {
  return (seededValue(seed) - 0.5) * range;
}

function usePointerRig() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}

function CameraRig({ scrollRef, pointerRef }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const scroll = scrollRef.current;
    const pointer = pointerRef.current;
    const time = state.clock.elapsedTime;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      Math.sin(scroll * Math.PI * 1.2) * 1.35 + pointer.x * 0.38,
      delta * 1.15,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      1.35 + Math.cos(scroll * Math.PI * 1.1) * 0.34 + pointer.y * 0.24,
      delta * 1.15,
    );
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.8 - scroll * 2.6, delta * 1.05);

    target.set(pointer.x * 0.38, pointer.y * 0.22, -2.5 - scroll * 3.2 + Math.sin(time * 0.18));
    camera.lookAt(target);
  });

  return null;
}

function ParticleField({ count = 1400 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3 + seededValue(i + 1) * 15;
      const theta = seededValue(i + 19) * Math.PI * 2;
      const phi = Math.acos(seededSpread(i + 41, 2));
      array[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      array[i * 3 + 1] = Math.cos(phi) * radius * 0.56;
      array[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius - 5;
    }
    return array;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.018;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.026}
        color="#9ff7ef"
        transparent
        opacity={0.86}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Asteroids() {
  const group = useRef();
  const rocks = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        position: [
          seededSpread(index + 10, 16),
          seededSpread(index + 20, 6),
          -(2 + seededValue(index + 30) * 15),
        ],
        scale: 0.08 + seededValue(index + 40) * 0.24,
        speed: 0.12 + seededValue(index + 50) * 0.26,
      })),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.13) * 0.16;
  });

  return (
    <group ref={group}>
      {rocks.map((rock) => (
        <Float key={rock.id} speed={rock.speed} rotationIntensity={0.8} floatIntensity={0.55}>
          <mesh position={rock.position} scale={rock.scale}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#202a3f"
              roughness={0.72}
              metalness={0.25}
              emissive="#112b36"
              emissiveIntensity={0.18}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function EnergyGrid() {
  const grid = useRef();

  useFrame((state) => {
    if (!grid.current) return;
    grid.current.position.z = (state.clock.elapsedTime * 0.85) % 2;
    grid.current.material.opacity = 0.18 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
  });

  return (
    <gridHelper
      ref={grid}
      args={[36, 72, "#16f4df", "#31415f"]}
      position={[0, -2.6, -6]}
      rotation={[0.02, 0, 0]}
    />
  );
}

function HologramCore({ pointerRef }) {
  const core = useRef();
  const rings = useRef();

  useFrame((state, delta) => {
    const pointer = pointerRef.current;
    if (core.current) {
      core.current.rotation.x += delta * 0.18;
      core.current.rotation.y += delta * 0.24;
      core.current.position.x = THREE.MathUtils.lerp(core.current.position.x, pointer.x * 0.45, delta * 2);
      core.current.position.y = THREE.MathUtils.lerp(core.current.position.y, pointer.y * 0.35, delta * 2);
    }
    if (rings.current) {
      rings.current.rotation.z -= delta * 0.3;
      rings.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.45;
    }
  });

  return (
    <group position={[2.1, 0.2, -2]}>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.58, 0.009, 16, 160]} />
          <meshBasicMaterial color="#16f4df" transparent opacity={0.68} />
        </mesh>
        <mesh rotation={[Math.PI / 2.7, 0.28, 0.2]}>
          <torusGeometry args={[2.05, 0.007, 16, 160]} />
          <meshBasicMaterial color="#6d8cff" transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[Math.PI / 1.85, -0.4, 0.1]}>
          <torusGeometry args={[2.45, 0.006, 16, 160]} />
          <meshBasicMaterial color="#f5b756" transparent opacity={0.28} />
        </mesh>
      </group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.78, 2]} />
        <meshStandardMaterial
          color="#dffcff"
          emissive="#16f4df"
          emissiveIntensity={0.55}
          metalness={0.82}
          roughness={0.14}
          transparent
          opacity={0.78}
        />
      </mesh>
    </group>
  );
}

function EnergyLines() {
  const points = useMemo(
    () => [
      [
        [-3.5, -1.2, -3],
        [-1.2, 0.6, -5],
        [1.4, -0.1, -4],
        [3.4, 1.1, -6],
      ],
      [
        [-4.4, 1.2, -7],
        [-2.1, -0.2, -4],
        [0.5, 1.3, -5],
        [4, -0.8, -8],
      ],
      [
        [-2.6, 2.3, -9],
        [-0.4, 0.3, -5],
        [2.5, 1.8, -7],
      ],
    ],
    [],
  );

  return points.map((line, index) => (
    <Line
      key={line.map((point) => point.join(",")).join("|")}
      points={line}
      color={index === 1 ? "#7c5cff" : "#16f4df"}
      lineWidth={1}
      transparent
      opacity={0.42}
    />
  ));
}

function GalaxyScene({ scrollRef, pointerRef }) {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 5, 22]} />
      <ambientLight intensity={0.58} />
      <pointLight position={[3, 3, 2]} intensity={3.2} color="#16f4df" />
      <pointLight position={[-5, 1.5, -4]} intensity={2.2} color="#7c5cff" />
      <spotLight position={[0, 7, 4]} angle={0.4} penumbra={1} intensity={3} color="#fff1c7" />
      <CameraRig scrollRef={scrollRef} pointerRef={pointerRef} />
      <Stars radius={90} depth={42} count={3600} factor={4} saturation={0.4} fade speed={0.8} />
      <ParticleField />
      <Asteroids />
      <EnergyGrid />
      <EnergyLines />
      <HologramCore pointerRef={pointerRef} />
      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={0.65}>
        <mesh position={[-2.8, 0.6, -3.2]} rotation={[0.4, -0.2, 0.2]}>
          <torusKnotGeometry args={[0.48, 0.09, 140, 18]} />
          <meshStandardMaterial
            color="#101b2e"
            emissive="#3678ff"
            emissiveIntensity={0.42}
            metalness={0.8}
            roughness={0.18}
          />
        </mesh>
      </Float>
      <Html position={[-1.6, 1.7, -4.2]} className="scene-label" transform distanceFactor={6}>
        <span>AI SYSTEMS ONLINE</span>
      </Html>
      <EffectComposer multisampling={2}>
        <Bloom luminanceThreshold={0.24} luminanceSmoothing={0.75} intensity={1.35} mipmapBlur />
        <DepthOfField focusDistance={0.02} focalLength={0.034} bokehScale={1.7} />
        <ChromaticAberration offset={[0.0007, 0.0009]} />
        <Noise opacity={0.045} blendFunction={BlendFunction.SOFT_LIGHT} />
        <Vignette eskil={false} offset={0.18} darkness={0.72} />
      </EffectComposer>
    </>
  );
}

function EnergyCursor() {
  const orb = useRef();
  const trail = useRef();

  useEffect(() => {
    const onMove = (event) => {
      if (!orb.current || !trail.current) return;
      gsap.to(orb.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.18,
        ease: "power3.out",
      });
      gsap.to(trail.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="energy-cursor-trail" ref={trail} />
      <div className="energy-cursor" ref={orb} />
    </>
  );
}

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(100, value + Math.ceil(Math.random() * 9));
        if (next === 100) {
          window.clearInterval(timer);
          window.setTimeout(onComplete, 650);
        }
        return next;
      });
    }, 110);

    return () => window.clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="cinematic-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="loader-orbit">
        <span />
        <span />
        <span />
        <strong>NT</strong>
      </div>
      <div className="loader-copy">
        <p>Initializing cinematic interface</p>
        <h2>{progress < 48 ? "I DON'T BUILD WEBSITES" : "I BUILD DIGITAL EXPERIENCES"}</h2>
        <div className="loader-bar">
          <i style={{ width: `${progress}%` }} />
        </div>
        <span>{String(progress).padStart(2, "0")}%</span>
      </div>
    </motion.div>
  );
}

function HudNav() {
  const navItems = ["intro", "about", "skills", "projects", "experience", "proof", "contact"];

  return (
    <header className="hud-nav">
      <a className="hud-brand" href="#intro">
        <span>NT</span>
        <strong>Nayan Tupe</strong>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="hud-resume magnetic" href={profileLinks.resume} download>
        <Download size={16} />
      </a>
    </header>
  );
}

function SoundVisualizer() {
  return (
    <div className="sound-visualizer" aria-hidden="true">
      {Array.from({ length: 22 }, (_, index) => (
        <span key={`wave-${index}`} style={{ "--i": index }} />
      ))}
    </div>
  );
}

function HeroScene() {
  const words = ["AI", "MACHINE LEARNING", "CINEMATIC UI", "DATA SYSTEMS"];

  return (
    <section id="intro" className="cinema-section hero-cinema">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 80, filter: "blur(18px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.15, delay: 0.35 }}
      >
        <div className="signal-pill">
          <Sparkles size={16} />
          Portfolio operating system / 2026
        </div>
        <h1>
          I don't build websites.
          <span>I build digital experiences.</span>
        </h1>
        <p>
          Nayan Tupe designs AI products, FastAPI systems, cinematic React interfaces,
          and dashboard intelligence that feels engineered for the future.
        </p>
        <div className="hero-command-row">
          <a className="quantum-btn primary magnetic" href="#projects">
            Enter the work <ArrowUpRight size={18} />
          </a>
          <a className="quantum-btn magnetic" href="#proof">
            <FolderOpen size={18} /> Proof
          </a>
          <a className="quantum-btn magnetic" href={profileLinks.github} target="_blank">
            <GitBranch size={18} /> GitHub
          </a>
          <a className="quantum-btn magnetic" href={profileLinks.linkedin} target="_blank">
            <UserRound size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-hud"
        initial={{ opacity: 0, scale: 0.86, rotateX: 16 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        <div className="hud-scanline" />
        <div className="hud-ring">
          <img src="/images/nayan-ai-avatar.png" alt="Nayan Tupe AI avatar" />
        </div>
        <div className="hud-stats">
          <span>Experience Engine</span>
          <strong>120 FPS Target</strong>
          <i />
        </div>
        <div className="rotating-words">
          {words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function AboutScene() {
  return (
    <section id="about" className="cinema-section about-cinema">
      <div className="section-kicker">Identity Hologram</div>
      <div className="hologram-panel">
        <div className="profile-orb">
          <img src="/images/profile.jpg" alt="Nayan Tupe profile" />
          <span />
          <span />
          <span />
        </div>
        <div>
          <h2>AI/ML developer building practical systems with cinematic presentation.</h2>
          <p>
            Computer Science graduate focused on ML products, FastAPI backends,
            React dashboards, analytics interfaces, deployment proof, and product-grade
            digital storytelling.
          </p>
          <div className="about-metrics">
            <strong>7+<span>Projects</span></strong>
            <strong>15+<span>Responsive builds</span></strong>
            <strong>20+<span>QA issues closed</span></strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsScene() {
  return (
    <section id="skills" className="cinema-section skills-cinema">
      <div className="section-kicker">Technology Constellation</div>
      <h2>Every skill is part of one connected machine.</h2>
      <div className="skill-orbit-field">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-satellite magnetic"
            key={skill}
            initial={{ opacity: 0, y: 80, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: index * 0.035 }}
            style={{ "--delay": `${index * 0.22}s` }}
          >
            <span>{skill.slice(0, 2).toUpperCase()}</span>
            <strong>{skill}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectsScene() {
  const spotlightProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="cinema-section projects-cinema">
      <div className="section-kicker">Project Portals</div>
      <h2>Recruiter-ready project proof with cinematic previews.</h2>
      <p className="section-subtitle">
        Important projects are kept visible: live links, GitHub links, tech stack, and
        presentation proof stay one scan away.
      </p>
      <div className="portal-grid">
        {spotlightProjects.map((project, index) => (
          <motion.article
            className="project-portal magnetic"
            key={project.title}
            initial={{ opacity: 0, y: 90, rotateX: 14 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.75, delay: index * 0.06 }}
          >
            <div className="portal-media">
              <img
                src={projectPreviewImages[project.title] || "/images/retailiq-dashboard.png"}
                alt={`${project.title} preview`}
              />
              <span />
            </div>
            <div className="portal-content">
              <p>{index === 0 ? "Project Highlight" : project.category}</p>
              <h3>{project.title}</h3>
              <span className="portal-description">{project.description}</span>
              <div className="portal-tags">
                {(project.tech || featuredProject.tech).slice(0, 5).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="portal-actions">
                {(project.live || project.links?.live) && (
                  <a href={project.live || project.links.live} target="_blank">
                    Live <ArrowUpRight size={15} />
                  </a>
                )}
                {(project.github || project.links?.frontendGithub) && (
                  <a href={project.github || project.links.frontendGithub} target="_blank">
                    Code <Code2 size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="project-evidence-grid">
        {projects.map((project, index) => (
          <motion.article
            className="evidence-card magnetic"
            key={project.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: index * 0.035 }}
          >
            <div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
            <div className="portal-tags">
              {project.tech.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="portal-actions">
              {project.live && (
                <a href={project.live} target="_blank">
                  Live <ArrowUpRight size={15} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank">
                  Code <Code2 size={15} />
                </a>
              )}
              {project.presentation && (
                <a href={project.presentation} target="_blank">
                  PPT <FileText size={15} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ExperienceScene() {
  return (
    <section id="experience" className="cinema-section timeline-cinema">
      <div className="section-kicker">Experience Timeline</div>
      <h2>Professional exposure and delivery proof.</h2>
      <div className="energy-timeline">
        {experienceItems.map((item, index) => (
          <motion.div
            className="timeline-node magnetic"
            key={item.role}
            initial={{ opacity: 0, x: index % 2 ? 120 : -120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <span>{item.date}</span>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="achievement-strip">
        {achievements.map((achievement, index) => (
          <span key={achievement}>
            0{index + 1} / {achievement}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProofScene() {
  return (
    <section id="proof" className="cinema-section proof-cinema">
      <div className="section-kicker">Certificates & Proof</div>
      <h2>Documents, certificates, resume, screenshots and deployment evidence.</h2>
      <div className="proof-grid">
        {certifications.map((item) => (
          <motion.article
            className="proof-card magnetic"
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <Award size={22} />
            <h3>{item.title}</h3>
            <p>{item.source}</p>
            <span>{item.date}</span>
          </motion.article>
        ))}
      </div>
      <div className="proof-console">
        <div>
          <h3>Portfolio proof folder</h3>
          <p>
            Project presentations, certificates, screenshots, resumes and deployment proof
            are available in one Drive folder for quick recruiter verification.
          </p>
        </div>
        <div className="hero-command-row">
          <a className="quantum-btn primary magnetic" href={profileLinks.portfolioDrive} target="_blank">
            <FolderOpen size={18} /> Open Drive
          </a>
          <a className="quantum-btn magnetic" href={profileLinks.resumeWithCertificates} download>
            <FileText size={18} /> Resume + Certificates
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactScene() {
  return (
    <section id="contact" className="cinema-section contact-cinema">
      <div className="console-panel">
        <div className="section-kicker">Holographic Console</div>
        <h2>Ready to launch the next intelligent interface?</h2>
        <div className="console-grid">
          <a className="console-tile magnetic" href="mailto:nayantupe699@gmail.com">
            <Mail size={20} />
            <span>Email</span>
            <strong>nayantupe699@gmail.com</strong>
          </a>
          <a className="console-tile magnetic" href={profileLinks.github} target="_blank">
            <GitBranch size={20} />
            <span>Repository</span>
            <strong>GitHub Systems</strong>
          </a>
          <a className="console-tile magnetic" href={profileLinks.linkedin} target="_blank">
            <UserRound size={20} />
            <span>Network</span>
            <strong>LinkedIn Signal</strong>
          </a>
        </div>
        <div className="send-sequence">
          <RadioTower size={18} />
          <span>Transmission channel open</span>
          <i />
        </div>
      </div>
    </section>
  );
}

function FloatingHud() {
  const items = [
    [BrainCircuit, "ML Core"],
    [Server, "API Layer"],
    [Database, "Data Orbit"],
    [TerminalSquare, "Code Stream"],
    [Rocket, "Deploy"],
    [ShieldCheck, "Proof"],
    [Zap, "Motion"],
  ];

  return (
    <aside className="floating-hud" aria-hidden="true">
      {items.map(([Icon, label], index) => (
        <span key={label} style={{ "--index": index }}>
          <Icon size={15} />
          {label}
        </span>
      ))}
    </aside>
  );
}

function CinematicPortfolio() {
  const [loaded, setLoaded] = useState(false);
  const pointerRef = usePointerRig();
  const scrollRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.24 });
  const lightX = useTransform(smoothProgress, [0, 1], ["12%", "88%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.55,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 1,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      scrollRef.current = value;
      document.documentElement.style.setProperty("--scroll-progress", String(value));
    });

    return unsubscribe;
  }, [smoothProgress]);

  useEffect(() => {
    document.body.classList.add("cinematic-mode");
    return () => document.body.classList.remove("cinematic-mode");
  }, []);

  return (
    <main className="cinematic-app">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <EnergyCursor />
      <motion.div className="dynamic-spotlight" style={{ left: lightX }} />
      <div className="webgl-stage" aria-hidden="true">
        <Canvas camera={{ position: [0, 1.4, 7.8], fov: 48 }} dpr={[1, 1.8]}>
          <GalaxyScene scrollRef={scrollRef} pointerRef={pointerRef} />
        </Canvas>
      </div>
      <div className="film-grain" aria-hidden="true" />
      <HudNav />
      <SoundVisualizer />
      <FloatingHud />
      <HeroScene />
      <AboutScene />
      <SkillsScene />
      <ProjectsScene />
      <ExperienceScene />
      <ProofScene />
      <ContactScene />
    </main>
  );
}

export default CinematicPortfolio;
