import { personalData as p } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Contact({ onOpenResume }) {
  return (
    <section id="contact" className="cta">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Direct Contact</div>
          <h2>
            Let&apos;s Build Something <em>Extraordinary.</em>
          </h2>
          <p className="lead" style={{ margin: "1.2rem auto 0" }}>
            Available for production apps, full-stack platforms and technical leadership roles.
          </p>
          <div className="btns">
            <a className="btn red" href={`mailto:${p.email}`}>Send Email →</a>
            <a className="btn" href={p.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            <button className="btn" onClick={onOpenResume}>View Resume</button>
          </div>
          <div className="contact-row">
            <a href={`mailto:${p.email}`}>{p.email}</a>
            <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phoneDisplay}</a>
            <a href={p.github} target="_blank" rel="noreferrer">github</a>
            <a href={p.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
