"use client";
import { useState } from "react";
import { skillsData } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Skills() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? skillsData : skillsData.filter((s) => s.category === active);
  return (
    <section id="matrix">
      <div className="wrap">
        <Reveal className="sec-wrap"><span className="sec-index">{"//03.00 SEC_MATRIX INDEX [03 / 05]"}</span></Reveal>
        <Reveal>
          <div className="eyebrow">Engineering Index</div>
          <h2 className="h2">The Systems Matrix</h2>
          <p className="lead">The stack behind every build — mobile, web, backend, cloud, security and AI.</p>
        </Reveal>

        <div className="filters">
          {["All", ...skillsData.map((s) => s.category)].map((c) => (
            <button key={c} className={active === c ? "on" : ""} onClick={() => setActive(c)}>
              {c === "All" ? `All Systems (${skillsData.length})` : c}
            </button>
          ))}
        </div>

        <div className="grid3">
          {shown.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 70} className="card">
              <span className="chip">SYS-0{skillsData.indexOf(cat) + 1}</span>
              <h3 style={{ fontWeight: 800, fontSize: "1.1rem", margin: ".9rem 0 .4rem", letterSpacing: "-.02em" }}>{cat.category}</h3>
              <p style={{ color: "var(--mut)", fontSize: ".82rem", lineHeight: 1.6, marginBottom: "1rem" }}>{cat.description}</p>
              {cat.skills.map((s) => (
                <div key={s.name} className="sk">
                  <div>
                    {s.name}
                    <small>{s.tag} · {s.years}</small>
                  </div>
                  <span className="lvl">{s.level}</span>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
