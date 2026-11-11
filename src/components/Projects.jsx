import { projectsData } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="flagships">
      <div className="wrap">
        <Reveal className="sec-wrap"><span className="sec-index">{"//02.00 SEC_FLAGSHIPS INDEX [02 / 05]"}</span></Reveal>
        <Reveal>
          <div className="eyebrow">Selected Work</div>
          <h2 className="h2">Flagship Deployments</h2>
          <p className="lead">Production-grade apps and platforms running live — on Google Play, VPS and Vercel.</p>
        </Reveal>

        {projectsData.map((p, i) => (
          <Reveal key={p.id} className="card flag">
            <div className="flag-top">
              <div>
                <span className="chip">{p.category === "mobile" ? "Mobile" : "Full-Stack"} · Flagship</span>
                <h3>{p.title}</h3>
                <div className="sub">{p.subtitle}</div>
              </div>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
            </div>
            <div className="flag-cols">
              <div>
                <p className="desc">{p.description}</p>
                {p.playStoreLinks.length > 0 && (
                  <div className="links-row">
                    {p.playStoreLinks.map((l) => (
                      <a key={l.name} href={l.url} target="_blank" rel="noreferrer">{l.name} ↗</a>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <ul className="hl">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row" style={{ marginTop: "1.6rem" }}>
              {p.tech.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
