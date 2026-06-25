import { motion } from "framer-motion";
import { ExternalLink, Code2, Presentation } from "lucide-react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section section-pad">
      <div className="section-head">
        <p className="eyebrow">Project Portfolio</p>
        <h2>Selected work across ML, dashboards, APIs and full-stack platforms.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card glass-card"
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <div className="project-graph-bg" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tag-wrap">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank">
                  <ExternalLink size={16} /> Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank">
                  <Code2 size={16} />  GitHub
                </a>
              )}
              {project.presentation && (
                <a href={project.presentation} target="_blank">
                  <Presentation size={16} /> PPT/PDF
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
