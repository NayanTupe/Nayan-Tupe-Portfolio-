import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["About", "Skills", "RetailIQ", "Projects", "Experience", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="brand-mark">NT</span>
        <span>Nayan Tupe</span>
      </button>

      <nav className={`nav-links ${open ? "active" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item}
            className={activeSection === item.toLowerCase() ? "active" : ""}
            onClick={() => goToSection(item.toLowerCase())}
            aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
          >
            {item}
          </button>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen((prev) => !prev)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Navbar;
