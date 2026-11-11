import { educationData, certificationsData } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="sec-wrap"><span className="sec-index">{"//05.00 SEC_EDUCATION INDEX [05 / 05]"}</span></Reveal>
        <Reveal>
          <div className="eyebrow">Foundations</div>
          <h2 className="h2">Education &amp; Certifications</h2>
        </Reveal>
        <div className="grid2" style={{ marginTop: "2.5rem" }}>
          {educationData.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80} className="card">
              <span className="chip">{e.period}</span>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", margin: ".9rem 0 .3rem" }}>{e.degree}</h3>
              <div className="mono" style={{ color: "var(--red)", fontSize: ".75rem" }}>{e.institution} · {e.score}</div>
              <p className="lead" style={{ fontSize: ".86rem" }}>{e.description}</p>
            </Reveal>
          ))}
          {certificationsData.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="card">
              <span className="chip">Certified · {c.date}</span>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", margin: ".9rem 0 .3rem" }}>{c.title}</h3>
              <div className="mono" style={{ color: "var(--red)", fontSize: ".75rem" }}>{c.issuer}</div>
              <p className="lead" style={{ fontSize: ".86rem" }}>{c.description}</p>
              <div className="row" style={{ marginTop: "1rem" }}>
                {c.skills.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
