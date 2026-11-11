import { personalData } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function About() {
  const p = personalData;
  const rows = [
    ["Location", p.location],
    ["Current Role", p.currentRole.title],
    ["Company", p.currentRole.company],
    ["Since", p.currentRole.period],
    ["Focus", "Mobile · Web · APIs"],
  ];
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-wrap"><span className="sec-index">{"//01.00 SEC_ABOUT INDEX [01 / 05]"}</span></Reveal>
        <Reveal>
          <div className="eyebrow">Engineer Profile</div>
          <h2 className="h2">Background &amp; Philosophy</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="lead" style={{ maxWidth: "none", fontSize: "1.05rem" }}>{p.summary}</p>
            <p className="quote">
              &ldquo;I build apps that ship to real users — then keep them fast, secure and maintainable.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={150} className="kv">
            {rows.map(([k, v]) => (
              <div key={k} className="card">
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
