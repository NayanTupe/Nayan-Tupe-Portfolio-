import { Download } from "lucide-react";
import { profileLinks } from "@/lib/portfolio-data";

const navItems = ["about", "skills", "projects", "experience", "proof", "contact"];

export function Navbar() {
  return (
    <header className="nav-shell">
      <a className="brand-lockup magnetic" href="#hero" aria-label="Back to hero">
        <span>NT</span>
        <strong>Nayan Tupe</strong>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="resume-orb magnetic" href={profileLinks.resume} download aria-label="Download resume">
        <Download size={17} />
      </a>
    </header>
  );
}
