"use client";
import { personalData } from "@/data/portfolioData";
import Reveal from "./Reveal";
import { CountUp } from "./Interactive";

const focus = [
  { n: "01.", t: "Mobile Apps", d: "React Native & Flutter apps live on Google Play with real-time features and payments.", k: "PRODUCTION" },
  { n: "02.", t: "Full-Stack Platforms", d: "Next.js, Node & MongoDB portals with RBAC, CMS dashboards and booking engines.", k: "EXECUTION" },
  { n: "03.", t: "Team Leadership", d: "Code reviews, CI/CD and clean architecture as Team Lead at OdiTech Global.", k: "LEADERSHIP" },
];

export default function Hero({ onOpenResume }) {
  const stats = personalData.stats;
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <span className="big">PORTFOLIO</span>
        <div className="hero-grid">
          <Reveal>
            <span className="hello">Hello, I&apos;m</span>
            <br />
            <span className="namebox">DEBARAJ.</span>
            <br />
            <span className="tag">
              <i /> Application Developer &amp; Full Stack Lead
            </span>
            <p className="sub">
              Building <b>production mobile apps</b>, <b>full-stack platforms</b> and scalable APIs with React Native,
              Flutter, MERN &amp; Next.js — shipped, live and used.
            </p>
            <div className="btns">
              <a href="#contact" className="btn red">Initiate Dispatch →</a>
              <a href="#flagships" className="btn">Explore Work</a>
              <button className="btn" onClick={onOpenResume}>Resume</button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="portrait">
              <span className="corner a" /><span className="corner b" /><span className="corner c" /><span className="corner d" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt={personalData.name} />
              <span className="cap">● OPEN TO WORK</span>
            </div>
          </Reveal>

          <Reveal delay={240} className="focus-list">
            {focus.map((f) => (
              <div key={f.n}>
                <small>{f.n} {f.k}</small>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={300} className="stats">
          {stats.map((s, i) => (
            <div key={s.label}>
              <strong className={i === 0 ? "r" : ""}><CountUp value={s.value} /></strong>
              <span className="lbl">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
