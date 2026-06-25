import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="section section-pad">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Professional exposure with production websites and business workflows.</h2>
      </div>

      <div className="timeline">
        <motion.div
          className="timeline-card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="timeline-graph" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <h3>Technology Intern</h3>
            <p>Z-Aksys Solutions, Vashi Navi Mumbai</p>
          </div>
          <span>Mar 2026 - Present</span>
          <ul>
            <li>Developed and maintained 15+ responsive web pages using Git/GitHub.</li>
            <li>Performed QA testing, identified/logged 20+ bugs and supported fixes.</li>
            <li>Managed website content updates and digital campaign support using Mailchimp.</li>
            <li>Built practical exposure to production websites and client-ready delivery.</li>
          </ul>
        </motion.div>

        <motion.div
          className="timeline-card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="timeline-graph" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <h3>Logistics Clearing & Documentation Executive</h3>
            <p>Ace Clearing And Forwarding, Navi Mumbai</p>
          </div>
          <span>Mar 2024 - Nov 2025</span>
          <ul>
            <li>Handled import/export clearance documents and shipping records.</li>
            <li>Worked on ODEX document submission and process tracking.</li>
            <li>Built strong documentation discipline and business process understanding.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
