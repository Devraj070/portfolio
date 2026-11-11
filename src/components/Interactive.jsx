"use client";
import { useEffect, useRef } from "react";
import { store } from "./agents";

export const SECTION_LABELS = {
  top: "Intro",
  about: "About",
  flagships: "Flagships",
  matrix: "Matrix",
  career: "Career",
  education: "Education",
  contact: "Contact",
};

export const mouse = { x: -100, y: -100, t: 0 };

const lerp = (a, b, k) => a + (b - a) * k;

// Custom cursor, card spotlight, magnetic buttons, portrait tilt, headline parallax, click ripples.
export function Interactive() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-cursor");
    const m = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: m.x, y: m.y };
    const par = { x: 0, y: 0 };
    const tilt = { x: 0, y: 0, el: null };
    let magnet = null;
    let raf = 0;

    const onMove = (e) => {
      m.x = e.clientX;
      m.y = e.clientY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.t = performance.now();

      const t = e.target;
      const hot = t.closest && t.closest("a,button,.card,.filters button");
      ring.current?.classList.toggle("hot", !!hot);

      // spotlight vars on the card under the cursor
      const card = t.closest && t.closest(".card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      // magnetic buttons
      const b = t.closest && t.closest(".btn,.links-row a");
      if (magnet && magnet !== b) magnet.style.transform = "";
      magnet = b || null;
      if (b) {
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        b.style.transform = `translate(${dx}px, ${dy}px)`;
      }

      // portrait tilt
      const p = t.closest && t.closest(".portrait");
      if (p) {
        const r = p.getBoundingClientRect();
        tilt.el = p;
        tilt.x = ((e.clientY - r.top) / r.height - 0.5) * -14;
        tilt.y = ((e.clientX - r.left) / r.width - 0.5) * 14;
      } else if (tilt.el) {
        tilt.x = 0;
        tilt.y = 0;
      }
    };

    const onDown = (e) => {
      ring.current?.classList.add("down");
      const r = document.createElement("span");
      r.className = "ripple";
      r.style.left = `${e.clientX}px`;
      r.style.top = `${e.clientY}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 700);
    };
    const onUp = () => ring.current?.classList.remove("down");
    const onLeave = () => {
      if (ring.current) ring.current.style.opacity = 0;
      if (dot.current) dot.current.style.opacity = 0;
    };
    const onEnter = () => {
      if (ring.current) ring.current.style.opacity = 1;
      if (dot.current) dot.current.style.opacity = 1;
    };

    const loop = () => {
      ringPos.x = lerp(ringPos.x, m.x, 0.16);
      ringPos.y = lerp(ringPos.y, m.y, 0.16);
      if (dot.current) dot.current.style.transform = `translate(${m.x}px, ${m.y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;

      const tx = (m.x / window.innerWidth - 0.5) * 36;
      const ty = (m.y / window.innerHeight - 0.5) * 18;
      par.x = lerp(par.x, tx, 0.06);
      par.y = lerp(par.y, ty, 0.06);
      document.documentElement.style.setProperty("--px", `${par.x.toFixed(2)}px`);
      document.documentElement.style.setProperty("--py", `${par.y.toFixed(2)}px`);

      if (tilt.el) {
        const cur = tilt.el._t || { x: 0, y: 0 };
        cur.x = lerp(cur.x, tilt.x, 0.12);
        cur.y = lerp(cur.y, tilt.y, 0.12);
        tilt.el._t = cur;
        tilt.el.style.transform = `perspective(900px) rotateX(${cur.x.toFixed(2)}deg) rotateY(${cur.y.toFixed(2)}deg)`;
        if (tilt.x === 0 && tilt.y === 0 && Math.abs(cur.x) < 0.05 && Math.abs(cur.y) < 0.05) {
          tilt.el.style.transform = "";
          tilt.el = null;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cring" aria-hidden />
      <div ref={dot} className="cdot" aria-hidden />
    </>
  );
}

// Tracks which section is on screen (drives nav highlight + status pill).
export function SectionSpy() {
  useEffect(() => {
    const els = Object.keys(SECTION_LABELS)
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) store.setSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// Renders the real value; agents animate it (0 -> value) when they visit the number.
export function CountUp({ value }) {
  return <span>{value}</span>;
}
