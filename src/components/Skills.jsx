import { motion } from "framer-motion";
import { Brain, Server, Monitor, BarChart3, Wrench } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "ML & Data",
    items: ["Python", "pandas", "NumPy", "scikit-learn", "EDA", "Feature Engineering"],
  },
  {
    icon: Server,
    title: "Backend/API",
    items: ["FastAPI", "REST APIs", "Swagger/OpenAPI", "Pydantic", "Uvicorn", "Render"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: ["React", "Vite", "JavaScript", "HTML", "CSS", "Responsive UI"],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    items: ["Analytics UI", "KPI Cards", "Charts", "Business Reports", "PDF Export"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "SQL", "Jupyter Notebook", "Power BI"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-pad">
      <div className="section-head">
        <p className="eyebrow">Tech Stack</p>
        <h2>Skills that connect data, backend, frontend and business decisions.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              className="skill-card glass-card"
              key={skill.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{skill.title}</h3>
              <div className={`skill-sparkline sparkline-${index}`} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="tag-wrap">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
