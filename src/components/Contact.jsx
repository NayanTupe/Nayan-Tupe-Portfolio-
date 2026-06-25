import { Code2, UserRound, Mail, MapPin, Phone, FolderOpen } from "lucide-react";
import { profileLinks } from "../data/projects";

function Contact() {
  return (
    <section id="contact" className="section section-pad contact-section">
      <div className="contact-card glass-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect for Data Science, ML, Backend or Frontend roles.</h2>

        <div className="contact-grid">
          <a href="mailto:nayantupe699@gmail.com">
            <Mail size={18} /> nayantupe699@gmail.com
          </a>
          <a href="tel:+919152110404">
            <Phone size={18} /> +91 9152110404
          </a>
          <span>
            <MapPin size={18} /> Vashi, Navi Mumbai
          </span>
          <a href={profileLinks.github} target="_blank">
            <Code2 size={18} /> GitHub
          </a>
          <a href={profileLinks.linkedin} target="_blank">
            <UserRound size={18} /> LinkedIn
          </a>
          <a href={profileLinks.portfolioDrive} target="_blank">
            <FolderOpen size={18} /> Portfolio Drive
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
