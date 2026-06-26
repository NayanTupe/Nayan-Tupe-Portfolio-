"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  Award,
  Code2,
  FileText,
  FolderOpen,
  GitBranch,
  Mail,
  RadioTower,
  Send,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { certificates, experienceItems, profileLinks, projects, skills } from "@/lib/portfolio-data";

const fadeUp = {
  initial: { opacity: 0, y: 44, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <motion.div {...fadeUp} className="hero-copy">
        <div className="eyebrow">AI / ML / React / FastAPI / Cinematic UI</div>
        <h1>
          I build digital products that feel engineered for the future.
        </h1>
        <p>
          Nayan Tupe creates practical AI systems, deployed FastAPI backends,
          responsive React dashboards, and recruiter-ready project proof wrapped in a
          luxury cinematic interface.
        </p>
        <div className="action-row">
          <Button asChild variant="primary">
            <a href="#projects">View work <ArrowUpRight size={18} /></a>
          </Button>
          <Button asChild>
            <a href={profileLinks.resume} download>Resume <FileText size={18} /></a>
          </Button>
          <Button asChild>
            <a href="#contact">Contact <Mail size={18} /></a>
          </Button>
        </div>
      </motion.div>
      <motion.div {...fadeUp} className="hero-orb-panel">
        <div className="code-shard shard-one">model.predict(customer)</div>
        <div className="code-shard shard-two">deploy.render(api)</div>
        <div className="portrait-system">
          <Image src="/images/nayan-ai-avatar.png" alt="Nayan Tupe AI avatar" fill priority sizes="420px" />
          <span />
          <span />
        </div>
        <div className="system-readout">
          <strong>Portfolio OS</strong>
          <span>All proof links active</span>
          <i />
        </div>
      </motion.div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="scene-section">
      <div className="section-heading">
        <span>About / Identity Hologram</span>
        <h2>AI/ML developer building practical systems with cinematic product presentation.</h2>
      </div>
      <motion.div {...fadeUp} className="about-console">
        <div className="profile-ring">
          <Image src="/images/profile.jpg" alt="Nayan Tupe profile portrait" fill sizes="360px" />
          <span />
          <span />
          <span />
        </div>
        <div className="about-copy">
          <p>
            Computer Science graduate with hands-on experience across Data Science,
            Machine Learning, Data Analysis, FastAPI, React dashboards, Git/GitHub
            workflows, QA testing, and production deployment.
          </p>
          <div className="stats-grid">
            <strong>7+<span>Portfolio projects</span></strong>
            <strong>15+<span>Responsive builds</span></strong>
            <strong>20+<span>QA issues closed</span></strong>
            <strong>1<span>AI SaaS platform</span></strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scene-section">
      <div className="section-heading">
        <span>Skill Constellation</span>
        <h2>Everything connects: data, APIs, interfaces, motion and deployment.</h2>
      </div>
      <div className="skill-constellation">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.035 }}
              className="skill-node magnetic"
              key={skill.name}
            >
              <Icon key="icon" size={22} />
              <strong key="name">{skill.name}</strong>
              <span key="group">{skill.group}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scene-section projects-section">
      <div className="section-heading">
        <span>Project Cinema</span>
        <h2>Real project proof, live links, GitHub repositories and case-study energy.</h2>
      </div>
      <div className="poster-grid">
        {projects.slice(0, 3).map((project, index) => (
          <motion.article {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }} className="project-poster magnetic" key={project.title}>
            <div key="media" className="poster-media">
              <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span>{project.highlight ? "Project Highlight" : project.category}</span>
            </div>
            <div key="copy" className="poster-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-cloud">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-actions">
                {project.live && <a href={project.live} target="_blank">Live <ArrowUpRight size={15} /></a>}
                {project.github && <a href={project.github} target="_blank">GitHub <Code2 size={15} /></a>}
                {project.presentation && <a href={project.presentation} target="_blank">PPT <FileText size={15} /></a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="evidence-grid">
        {projects.map((project) => (
          <article className="evidence-tile magnetic" key={project.title}>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-actions">
              {project.live && <a href={project.live} target="_blank">Live</a>}
              {project.github && <a href={project.github} target="_blank">Code</a>}
              {project.presentation && <a href={project.presentation} target="_blank">Proof</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scene-section">
      <div className="section-heading">
        <span>Experience Beam</span>
        <h2>Professional exposure with production websites, QA and business workflows.</h2>
      </div>
      <div className="timeline-beam">
        {experienceItems.map((item, index) => (
          <motion.article {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="timeline-card magnetic" key={item.role}>
            <span key="date">{item.date}</span>
            <h3 key="role">{item.role}</h3>
            <p key="company">{item.company}</p>
            <ul key="points">
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CertificatesSection() {
  return (
    <section id="proof" className="scene-section">
      <div className="section-heading">
        <span>Certificates / Proof Vault</span>
        <h2>Learning proof, screenshots, resumes and deployment evidence in one place.</h2>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card magnetic" key={certificate.title}>
            <Award size={24} />
            <h3>{certificate.title}</h3>
            <p>{certificate.source}</p>
            <span>{certificate.date}</span>
          </article>
        ))}
      </div>
      <div className="proof-vault">
        <div>
          <h3>Portfolio proof folder</h3>
          <p>Project presentations, certificates, screenshots, resumes and deployment proof are available for fast verification.</p>
        </div>
        <div className="action-row">
          <Button asChild variant="primary"><a href={profileLinks.portfolioDrive} target="_blank"><FolderOpen size={18} /> Open Drive</a></Button>
          <Button asChild><a href={profileLinks.resumeWithCertificates} download><FileText size={18} /> Resume + Certificates</a></Button>
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(8),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  return (
    <section id="contact" className="scene-section contact-section">
      <div className="contact-console">
        <div>
          <span className="eyebrow">Holographic Contact Console</span>
          <h2>Ready to launch a smarter interface?</h2>
          <p>Send a signal for AI/ML, dashboard, backend or frontend roles.</p>
          <div className="social-row">
            <a href={profileLinks.github} target="_blank"><GitBranch size={18} /> GitHub</a>
            <a href={profileLinks.linkedin} target="_blank"><UserRound size={18} /> LinkedIn</a>
            <a href="mailto:nayantupe699@gmail.com"><Mail size={18} /> Email</a>
          </div>
        </div>
        <form
          onSubmit={form.handleSubmit(() => form.reset())}
          className="contact-form"
        >
          <input placeholder="Your name" {...form.register("name")} />
          <input placeholder="Email address" {...form.register("email")} />
          <textarea placeholder="Message" rows={5} {...form.register("message")} />
          <Button type="submit" variant="primary">Transmit <Send size={17} /></Button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>Nayan Tupe / AI ML Developer</span>
      <span><RadioTower size={15} /> Signal stable</span>
    </footer>
  );
}
