import { experienceData } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="career">
      <div className="wrap">
        <Reveal className="sec-wrap"><span className="sec-index">{"//04.00 SEC_CAREER INDEX [04 / 05]"}</span></Reveal>
        <Reveal>
          <div className="eyebrow">Career Log</div>
          <h2 className="h2">Where I&apos;ve Shipped</h2>
        </Reveal>
        <div className="tl">
          {experienceData.map((e) => (
            <Reveal key={e.title + e.company} className="tl-item card">
              <h3>{e.title}</h3>
              <div className="tl-meta">
                <b>{e.company}</b>
                <span>{e.period}</span>
                <span>{e.location}</span>
                <span>{e.type}</span>
              </div>
              <ul className="hl">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="row" style={{ marginTop: "1.2rem" }}>
                {e.tech.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
