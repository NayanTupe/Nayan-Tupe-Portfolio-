import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Portfolio Projects" },
  { value: "15+", label: "Responsive Pages" },
  { value: "20+", label: "QA Bugs Logged" },
  { value: "1", label: "AI SaaS Platform" },
];

function About() {
  return (
    <section id="about" className="section section-pad">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Profile Snapshot</p>
        <h2>Building practical AI, ML and dashboard systems.</h2>
        <p>
          Computer Science graduate with hands-on experience across Data Science,
          Machine Learning, Data Analysis, FastAPI, React/Vite dashboards,
          Git/GitHub workflows and production deployment.
        </p>
      </motion.div>

      <motion.div
        className="ml-visual glass-card"
        initial={{ opacity: 0, y: 34, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <div className="ml-visual-copy">
          <p className="eyebrow">ML Graph Layer</p>
          <h3>Model insights, data patterns and business KPIs in one visual system.</h3>
          <p>
            Portfolio projects combine preprocessing, prediction, segmentation,
            API delivery and dashboards that make model output easy to understand.
          </p>
        </div>

        <div className="graph-stage" aria-hidden="true">
          <div className="graph-floor" />
          <div className="bar-3d bar-a"><span /></div>
          <div className="bar-3d bar-b"><span /></div>
          <div className="bar-3d bar-c"><span /></div>
          <div className="bar-3d bar-d"><span /></div>
          <div className="curve-line" />
          <div className="data-node node-one" />
          <div className="data-node node-two" />
          <div className="data-node node-three" />
          <div className="data-node node-four" />
          <div className="metric-chip chip-accuracy">Accuracy 94%</div>
          <div className="metric-chip chip-churn">Churn Risk</div>
        </div>
      </motion.div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card glass-card"
            key={item.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
