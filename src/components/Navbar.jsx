"use client";

import { useAgentStore } from "./agents";

export default function Navbar({ onOpenResume }) {
  const { section } = useAgentStore();
  const a = (id) => (section === id ? "act" : "");
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a href="#top" className="logo">
          <i>DM</i>
          <span>DEBARAJ.</span>
        </a>
        <span className="sep" />
        <div className="links">
          <a href="#about" className={a("about")}>About</a>
          <a href="#flagships" className={a("flagships")}>Flagships</a>
          <a href="#matrix" className={a("matrix")}>Matrix</a>
          <a href="#career" className={a("career")}>Career</a>
          <button onClick={onOpenResume}>Resume</button>
        </div>
        <span className="sep" />
        <div className="avail">
          <i />
          <span>Available</span>
          <a href="#contact" className="nav-cta">Dispatch →</a>
        </div>
      </nav>
    </header>
  );
}
