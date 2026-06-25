import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["About", "Skills", "RetailIQ", "Projects", "Experience", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

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
          <button key={item} onClick={() => goToSection(item.toLowerCase())}>
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