"use client";
import { useEffect, useRef, useState } from "react";
import { AGENT_COLORS as COLORS, AGENT_COUNT, store, useAgentStore } from "./agents";
import { SECTION_LABELS } from "./Interactive";

function Arrow({ c }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={c} style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))" }}>
      <path d="M2 1l13 6-5.5 2L7.5 15z" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const m = document.documentElement.scrollHeight - window.innerHeight;
      setP(m > 0 ? window.scrollY / m : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
    };
  }, []);
  return p;
}

export function Intro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  const spots = [[-420, -260], [380, -300], [-480, 200], [460, 240], [-200, 340], [220, -380], [520, 20]];
  return (
    <div className={`intro ${done ? "done" : ""}`} aria-hidden={done}>
      {spots.map(([x, y], i) => (
        <div key={i} className="cur" style={{ "--fx": `${x}px`, "--fy": `${y}px`, animationDelay: `${i * 60}ms` }}>
          <Arrow c={COLORS[i]} />
        </div>
      ))}
      <div className="intro-mark">
        <span>Agents assembling portfolio</span>
        <div className="intro-bar"><i /></div>
      </div>
    </div>
  );
}

export function ScrollLine() {
  const p = useScrollProgress();
  return (
    <div className="scroll-line">
      <i style={{ height: `${p * 100}%` }} />
    </div>
  );
}

const SPEED = 115; // px per second

// Auto-scrolls the page like a guided tour; any user input takes over.
export function Tour() {
  const { touring } = useAgentStore();
  useEffect(() => {
    if (!touring) return;
    let raf = 0;
    let last = 0;
    let y = 0;
    let t0 = 0;
    let f = 1;
    const start = setTimeout(() => {
      y = window.scrollY;
      const tick = (t) => {
        if (!last) { last = t; t0 = t; }
        const dt = Math.min(0.1, (t - last) / 1000);
        last = t;
        if (Math.abs(window.scrollY - y) > 3) y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ramp = Math.min(1, (t - t0) / 1000);
        const want = store.pending > 3 ? 0.2 : store.pending > 0 ? 0.55 : 1;
        f += (want - f) * 0.05;
        y = Math.min(max, y + SPEED * f * (ramp * ramp * (3 - 2 * ramp)) * dt);
        window.scrollTo({ top: y, behavior: "instant" });
        if (y >= max - 1) {
          store.setTouring(false);
          return;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 1700);

    const stop = (e) => {
      if (e.target && e.target.closest && e.target.closest(".status")) return;
      store.setTouring(false);
    };
    const evs = ["wheel", "touchstart", "keydown", "mousedown"];
    evs.forEach((n) => window.addEventListener(n, stop, { passive: true }));
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
      evs.forEach((n) => window.removeEventListener(n, stop));
    };
  }, [touring]);
  return null;
}

export function StatusBar() {
  const p = useScrollProgress();
  const { total, built, touring, section } = useAgentStore();
  return (
    <div className="status">
      <span className="dots">
        {COLORS.slice(0, 5).map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </span>
      <span className="agents"><b>{AGENT_COUNT} agents</b></span>
      <span className="sec">{SECTION_LABELS[section]}</span>
      <span><b>{built}</b> / {total} layers</span>
      <span className="trk"><i style={{ width: `${p * 100}%` }} /></span>
      <button className="tour" onClick={() => store.setTouring(!touring)}>{touring ? "Touring ⏸" : "Paused ▶"}</button>
    </div>
  );
}
