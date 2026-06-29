"use client";

import { AnimatePresence, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Check,
  Code2,
  FileText,
  Mail,
  Radio,
  Send,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  achievements,
  certificates,
  experienceItems,
  personalityTraits,
  profile,
  profileLinks,
  projects,
  skills,
  socialLinks,
  testimonials,
} from "@/lib/portfolio-data";
import type { Project } from "@/types/portfolio";

const AICore = dynamic(() => import("@/components/three/ai-core").then((mod) => mod.AICore), {
  ssr: false,
  loading: () => <div className="ai-core-fallback" aria-hidden="true" />,
});

const reveal = {
  initial: { opacity: 0, y: 34, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
};

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <motion.div {...reveal} className="section-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </motion.div>
  );
}

function TiltWindow({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });

  return (
    <motion.div
      ref={ref}
      className={`tilt-window magnetic ${className}`}
      style={{ rotateX, rotateY }}
      onPointerMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function ProjectTextVisual({ project }: { project: Project }) {
  const points = project.proofPoints ?? [
    project.short,
    project.caseStudy.results,
    `Tech stack: ${project.tech.join(", ")}`,
  ];

  return (
    <div className="project-text-visual">
      <span>{project.category}</span>
      <strong>Project Proof</strong>
      <p>{project.short}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="hero-section scene">
      <motion.div className="hero-copy" initial="initial" animate="whileInView">
        <motion.p {...reveal} className="micro">Hello.</motion.p>
        <motion.h1 {...reveal}>
          <span>I'm Nayan Tupe.</span>
          Data Science & ML Developer
        </motion.h1>
        <motion.strong {...reveal}>Python, ML models, FastAPI APIs and React/Vite dashboards.</motion.strong>
        <motion.p {...reveal} className="hero-bio">
          Resume-backed portfolio for data science, machine learning, backend API, analytics dashboard and frontend developer roles.
        </motion.p>
        <motion.div {...reveal} className="action-row">
          <Button asChild variant="primary"><a href="#projects">Explore Projects <ArrowUpRight size={18} /></a></Button>
          <Button asChild><a href={profileLinks.resume} download>Resume <FileText size={18} /></a></Button>
          <Button asChild><a href="#contact">Let's Connect <Mail size={18} /></a></Button>
        </motion.div>
      </motion.div>
      <motion.div {...reveal} className="hero-core">
        <AICore />
        <div className="status-console" aria-label="AI core status">
          {profile.status.map((item, index) => (
            <span key={item} className={index === 0 ? "online" : ""}>{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function IdentitySection() {
  const modules = [
    ["Name", profile.name],
    ["Role", profile.role],
    ["Location", profile.location],
    ["Experience", profile.experience],
    ["Education", profile.education],
    ["Target Roles", profile.targetRoles],
  ];

  return (
    <section id="identity" className="scene identity-scene">
      <SectionHeading
        kicker="Identity Scan"
        title="A Data Science, Machine Learning and Software Developer profile built from resume proof."
        copy="The content reflects Nayan's resume: skills, projects, internships, certificates, live links and GitHub proof."
      />
      <div className="identity-grid">
        <TiltWindow className="portrait-glass">
          <Image src="/images/profile.jpg" alt="Nayan Tupe portrait" fill sizes="(max-width: 900px) 90vw, 430px" />
          <div className="scan-line" />
        </TiltWindow>
        <div className="identity-modules">
          {modules.map(([label, value], index) => (
            <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.055 }} className="identity-module" key={label}>
              <small key="label">{label}</small>
              <p key="value">{value}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="trait-field">
        {personalityTraits.map((trait, index) => (
          <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.04 }} className="trait-module" key={trait.title}>
            <h3 key="title">{trait.title}</h3>
            <p key="copy">{trait.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  const [active, setActive] = useState("Python");

  return (
    <section id="skills" className="scene knowledge-scene">
      <SectionHeading
        kicker="Knowledge Network"
        title="Resume skills connected across ML, backend APIs, dashboards, deployment and proof."
        copy="Hover a node to see related tools light up."
      />
      <div className="knowledge-network" role="list" aria-label="Technology knowledge network">
        <svg className="network-lines" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true">
          {skills.map((skill, index) => {
            const x1 = 100 + (index % 6) * 195;
            const y1 = 90 + Math.floor(index / 6) * 190;
            const x2 = 100 + ((index + 2) % 6) * 195;
            const y2 = 90 + Math.floor(((index + 2) % skills.length) / 6) * 190;
            return <path key={skill.name} d={`M${x1} ${y1} C${x1 + 80} ${y1 - 70}, ${x2 - 80} ${y2 + 70}, ${x2} ${y2}`} />;
          })}
        </svg>
        {skills.map((skill) => {
          const related = skill.name === active || skill.related.includes(active);
          return (
            <button
              key={skill.name}
              className={`skill-node ${related ? "active" : ""}`}
              onMouseEnter={() => setActive(skill.name)}
              onFocus={() => setActive(skill.name)}
              role="listitem"
            >
              <span>{skill.group}</span>
              <strong>{skill.name}</strong>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [project, onClose]);

  const rows = project
    ? [
        ["Overview", project.caseStudy.overview],
        ["Problem", project.caseStudy.problem],
        ["Research", project.caseStudy.research],
        ["Planning", project.caseStudy.planning],
        ["Design", project.caseStudy.design],
        ["Development", project.caseStudy.development],
        ["Challenges", project.caseStudy.challenges],
        ["Solutions", project.caseStudy.solutions],
        ["Results", project.caseStudy.results],
        ["Performance", project.caseStudy.performance],
        ["Future Improvements", project.caseStudy.future],
      ]
    : [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="case-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
          <motion.div className="case-study" initial={{ y: 70, scale: 0.96, filter: "blur(18px)" }} animate={{ y: 0, scale: 1, filter: "blur(0px)" }} exit={{ y: 40, scale: 0.98, opacity: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <button className="case-close" onClick={onClose} aria-label="Close case study"><X size={18} /></button>
            <div className={project.image ? "case-hero" : "case-hero case-hero-text"}>
              {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="100vw" /> : null}
              <div>
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.short}</p>
                {!project.image ? (
                  <ul>
                    {(project.proofPoints ?? []).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="case-content">
              {rows.map(([label, copy]) => (
                <article key={label}>
                  <h3>{label}</h3>
                  <p>{copy}</p>
                </article>
              ))}
              <article>
                <h3>Tech Stack</h3>
                <div className="tag-cloud">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </article>
              <article>
                <h3>Gallery</h3>
                {project.gallery?.length || project.image ? (
                  <div className="case-gallery">
                    {(project.gallery ?? (project.image ? [project.image] : [])).map((image) => (
                      <Image key={image} src={image} alt={`${project.title} gallery image`} width={420} height={260} />
                    ))}
                  </div>
                ) : (
                  <div className="case-gallery-text">
                    {(project.proofPoints ?? [project.description]).map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                )}
              </article>
              <div className="case-actions">
                {project.github ? <Button asChild><a href={project.github} target="_blank" rel="noreferrer">GitHub <Code2 size={17} /></a></Button> : null}
                {project.live ? <Button asChild variant="primary"><a href={project.live} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={17} /></a></Button> : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scene projects-scene">
      <SectionHeading
        kicker="Project Windows"
        title="Resume projects with GitHub, live deployment, API proof and presentation material."
        copy="Each window expands into a case-study view written from the resume project details."
      />
      <div className="project-window-grid">
        {projects.map((project, index) => (
          <TiltWindow className={project.highlight ? "project-window featured" : "project-window"} key={project.slug}>
            <div className="window-chrome"><i /><i /><i /><span>{project.category}</span></div>
            <div className="project-media">
              {project.image ? (
                <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 900px) 92vw, 46vw" />
              ) : (
                <ProjectTextVisual project={project} />
              )}
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-cloud">{project.tech.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                <button onClick={() => setSelected(project)}>Case Study <ArrowUpRight size={15} /></button>
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <Code2 size={15} /></a> : null}
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live Demo <Radio size={15} /></a> : null}
              </div>
            </div>
            <span className="window-index">{String(index + 1).padStart(2, "0")}</span>
          </TiltWindow>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scene memory-scene">
      <SectionHeading
        kicker="Memory Timeline"
        title="Stored professional memories with light, depth and useful proof."
      />
      <div className="memory-timeline">
        {experienceItems.map((item, index) => (
          <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.09 }} className="memory-capsule" key={`${item.role}-${item.date}`}>
            <span key="date">{item.date}</span>
            <h3 key="role">{item.role}</h3>
            <p key="company">{item.company}</p>
            <ul key="points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CertificatesSection() {
  return (
    <section className="scene proof-scene" aria-labelledby="proof-title">
      <SectionHeading kicker="Proof Vault" title="Certificates and evidence presented as premium floating documents." />
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <a className="certificate-doc" href={certificate.link} target="_blank" rel="noreferrer" key={certificate.title}>
            <Award size={24} />
            <h3>{certificate.title}</h3>
            <p>{certificate.source}</p>
            <span>{certificate.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / 1200);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function AchievementsSection() {
  return (
    <section className="scene achievement-scene">
      <SectionHeading kicker="Achievement Dashboard" title="Quiet numbers that show momentum, learning and shipping energy." />
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="achievement-tile" key={item.label}>
            <Counter value={item.value} suffix={item.suffix} />
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="scene testimonial-scene">
      <SectionHeading kicker="Signal" title="Feedback panels with concise proof of trust." />
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-panel" key={item.quote}>
            <p>"{item.quote}"</p>
            <span>{item.author} / {item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submittedTo, setSubmittedTo] = useState("");

  return (
    <section id="contact" className="scene contact-scene">
      <SectionHeading
        kicker="Connection"
        title="Let the journey continue into a real conversation."
        copy={`Target roles: ${profile.targetRoles}.`}
      />
      <div className="contact-grid">
        <div className="contact-copy">
          <h3><a href={`mailto:${profile.email}`}>{profile.email}</a></h3>
          <p>{profile.bio}</p>
          <div className="social-row">
            {socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{link.label}</a>)}
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const message = String(data.get("message") ?? "");
            const subject = encodeURIComponent(`Portfolio message from ${name || "visitor"}`);
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Nayan Tupe portfolio contact form.`,
            );
            const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            window.location.href = mailto;
            setSubmittedTo(profile.email);
            setSent(true);
          }}
        >
          <label>Name<input required name="name" autoComplete="name" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" /></label>
          <label>Message<textarea required name="message" rows={5} /></label>
          <p className="form-note">
            This form opens an email draft addressed to <strong>{profile.email}</strong>. Click send in your mail app to deliver it.
          </p>
          <Button type="submit" variant="primary">Send Message <Send size={17} /></Button>
          {sent ? (
            <p className="form-success">
              <Check size={17} /> Email draft opened for {submittedTo}. Please send it from your mail app.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
