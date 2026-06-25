import { Award, FileText, FolderOpen } from "lucide-react";
import { profileLinks } from "../data/projects";

function Certifications() {
  return (
    <section className="section section-pad">
      <div className="section-head">
        <p className="eyebrow">Certifications</p>
        <h2>Learning proof and project documentation.</h2>
      </div>

      <div className="cert-grid">
        <div className="cert-card glass-card">
          <Award size={28} />
          <h3>Data Science Diploma</h3>
          <p>Boston Institute Of Analytics</p>
          <span>Mar 2025 - Nov 2025</span>
        </div>

        <div className="cert-card glass-card">
          <Award size={28} />
          <h3>Artificial Intelligence Diploma</h3>
          <p>Boston Institute Of Analytics</p>
          <span>May 2025 - Nov 2025</span>
        </div>

        <div className="cert-card glass-card">
          <Award size={28} />
          <h3>Data Science Internship</h3>
          <p>Spinnaker Analytics Pvt. Ltd.</p>
          <span>2-month internship</span>
        </div>
      </div>

      <div className="proof-box glass-card">
        <h3>Portfolio proof folder</h3>
        <p>
          View project presentations, certificates, screenshots, resumes and deployment proof
          in one secure Google Drive folder.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href={profileLinks.portfolioDrive} target="_blank">
            <FolderOpen size={18} /> Open Portfolio Drive
          </a>
          <a className="btn secondary" href={profileLinks.resumeWithCertificates} download>
            <FileText size={18} /> Resume With Certificates
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;