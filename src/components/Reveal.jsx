"use client";
import { useEffect, useRef, useState } from "react";
import { announceBuild, store, AGENT_COUNT } from "./agents";

// An "agent" selects the block, then builds it in with a wipe.
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("idle"); // idle | select | build | done
  const [meta, setMeta] = useState({ n: 1, w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    store.register();
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setPhase("done");
          store.built();
          return;
        }
        later(() => {
          const id = store.nextId();
          const n = (id % AGENT_COUNT) + 1;
          const r = el.getBoundingClientRect();
          setMeta({ n, w: Math.round(r.width), h: Math.round(r.height) });
          setPhase("select");
          announceBuild({ agent: n - 1, el, x: r.left, y: r.top, w: r.width, h: r.height });
          later(() => setPhase("build"), 250);
          later(() => {
            setPhase("done");
            store.built();
          }, 250 + 650);
        }, delay);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      store.unregister();
    };
  }, [delay]);

  const showSel = phase === "select" || phase === "build";
  return (
    <Tag ref={ref} className={`reveal ${phase} ${className}`} {...rest}>
      {children}
      {showSel && (
        <span className="sel" aria-hidden>
          <i className="a" /><i className="b" /><i className="c" /><i className="d" />
          <b>agent-0{meta.n} · {meta.w}×{meta.h}</b>
        </span>
      )}
    </Tag>
  );
}
