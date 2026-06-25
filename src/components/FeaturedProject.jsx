import { motion } from "framer-motion";
import { ExternalLink, Code2, Server, Presentation, CheckCircle2 } from "lucide-react";
import { featuredProject } from "../data/projects";

function FeaturedProject() {
  return (
    <section id="retailiq" className="section section-pad featured-section">
      <div className="section-head">
        <p className="eyebrow">Featured Project</p>
        <h2>{featuredProject.title}</h2>
        <p>{featuredProject.subtitle}</p>
      </div>

      <div className="featured-grid">
        <motion.div
          className="featured-info glass-card"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>AI Powered E-commerce Intelligence Platform</h3>
          <p>{featuredProject.description}</p>

          <div className="highlight-list">
            {featuredProject.highlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="tag-wrap">
            {featuredProject.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="link-grid">
            <a href={featuredProject.links.live} target="_blank">
              <ExternalLink size={17} /> Live Demo
            </a>
            <a href={featuredProject.links.backend} target="_blank">
              <Server size={17} /> Backend API
            </a>
            <a href={featuredProject.links.frontendGithub} target="_blank">
              <Code2 size={17} />  Frontend GitHub
            </a>
            <a href={featuredProject.links.backendGithub} target="_blank">
              <Code2 size={17} /> Backend GitHub
            </a>
            <a href={featuredProject.links.presentation} target="_blank">
              <Presentation size={17} /> PPT/PDF
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-showcase"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="browser-card main-shot">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <img src="/images/retailiq-dashboard.png" alt="RetailIQ Dashboard" />
          </div>

          <div className="mini-shots">
            <div className="browser-card">
              <img src="/images/retailiq-prediction.png" alt="RetailIQ Prediction" />
            </div>
            <div className="browser-card">
              <img src="/images/retailiq-segments.png" alt="RetailIQ Segments" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProject;
