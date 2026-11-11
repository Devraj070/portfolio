"use client";
import { useEffect, useRef } from "react";
import { AGENT_COLORS as COLORS, AGENT_COUNT, store, useAgentStore } from "./agents";

const rnd = (n) => Math.floor(Math.random() * n);
const clamp = (v) => Math.max(0, Math.min(1, v));
const lerp = (a, b, k) => a + (b - a) * k;
const easeOut = (p) => 1 - Math.pow(1 - p, 3);

// Agents write these one by one (typed out)
const TYPE = "p,.lead,.desc,.quote,.hl li,.sub,.mono,.lbl,.hello,.namebox,.big,h2,h3,h4";
// Agents count these up to their real value
const COUNT = ".stats strong,.num,.sec-index";
// Small labels: revealed in a sweep when their block is built
const SMALL = ".pill,.chip,.tag,.sk,.btn,.kv span,.kv b,.eyebrow,.tl-meta span,.contact-row a,.links-row a";
const WORK = `${TYPE},${COUNT},.portrait`;
const ALL = `${WORK},${SMALL}`;
const SKIP = ".cursor-field,.nav,.status,.intro,.feed";

const NUM_RE = /\d+(?:\.\d+)?/g;
const isYear = (s) => !s.includes(".") && +s >= 1900 && +s <= 2100;
const isPre = (el) => el.classList.contains("ag-pre") || el.classList.contains("ag-small");

function textNodes(el) {
  const out = [];
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) if (n.data.length) out.push(n);
  return out;
}
const hasNumber = (el) => textNodes(el).some((n) => [...n.data.matchAll(NUM_RE)].some((m) => !isYear(m[0])));

const APPROACH = 420;
function taskFor(el) {
  if (el.matches(".portrait")) return { kind: "resize", label: "resizing photo", dur: 1900 };
  if (el.matches(COUNT) && hasNumber(el)) return { kind: "count", label: "counting up", dur: 1400 };
  const len = (el.textContent || "").length;
  const label = el.matches("h2,h3,h4,.big,.namebox,.hello") ? "writing heading" : "writing text";
  return { kind: "type", label, dur: APPROACH + Math.min(2200, Math.max(350, len * 8)) };
}

function pickTarget(taken) {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const list = [...document.querySelectorAll(WORK)].filter((el) => {
    if (taken.has(el) || !isPre(el) || el.closest(SKIP)) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 6) return false;
    if (r.top < 64 || r.bottom > vh - 60 || r.left < -2 || r.right > vw + 2) return false;
    const rv = el.closest(".reveal");
    if (rv && !rv.classList.contains("done")) return false;
    return true;
  });
  if (!list.length) return null;
  const photo = list.find((el) => el.matches(".portrait"));
  if (photo) return photo;
  list.sort((a, b) => {
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    return Math.round(ra.top / 20) - Math.round(rb.top / 20) || ra.left - rb.left;
  });
  return list[0];
}

const REVIEW = ".card,.btn,.portrait,.pill,.chip,.sk,.tag,h2,h3,h4,p,.lead,.hl li,.stats strong,.num,.kv b,.eyebrow";
const REVIEW_LABELS = ["reviewing layout", "checking contrast", "optimizing spacing", "a11y check", "linting copy", "testing responsive"];
const reviewTask = () => ({ kind: "review", label: REVIEW_LABELS[rnd(REVIEW_LABELS.length)], dur: APPROACH + 800 });

const inView = (el) => {
  const r = el.getBoundingClientRect();
  if (r.width < 8 || r.height < 6) return false;
  if (r.top < 64 || r.bottom > window.innerHeight - 60 || r.left < -2 || r.right > window.innerWidth + 2) return false;
  const rv = el.closest(".reveal");
  return !(rv && !rv.classList.contains("done"));
};

// helpers for agents with no main work left: fill in small labels, else review built elements
function pickSmall(taken) {
  const list = [...document.querySelectorAll(SMALL)].filter((el) => !taken.has(el) && isPre(el) && !el.closest(SKIP) && inView(el));
  list.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
  return list[0] || null;
}
function pickReview(taken, reviewed) {
  const list = [...document.querySelectorAll(REVIEW)].filter(
    (el) => !taken.has(el) && !reviewed.has(el) && !isPre(el) && !el.closest(SKIP) && !el.classList.contains("ag-focus") && inView(el)
  );
  return list.length ? list[rnd(list.length)] : null;
}

function caretRect(fx) {
  let idx = -1;
  for (let i = 0; i < fx.nodes.length; i++) if (fx.nodes[i].data.length) idx = i;
  if (idx < 0) return null;
  const n = fx.nodes[idx];
  const range = document.createRange();
  range.setStart(n, Math.max(0, n.data.length - 1));
  range.setEnd(n, n.data.length);
  const r = range.getBoundingClientRect();
  return r.width || r.height ? r : null;
}

function fmt(m, v) {
  const d = m.includes(".") ? m.split(".")[1].length : 0;
  let s = v.toFixed(d);
  if (m.length > 1 && m[0] === "0") s = s.padStart(m.length, "0");
  return s;
}

// Nothing is shown before an agent makes it: blocks build as empty skeletons, then agents
// type headings and paragraphs, count numbers up and drag the photo to full size.
export function CursorField() {
  const curRefs = useRef([]);
  const selRefs = useRef([]);
  const labelRefs = useRef([]);
  const agents = useRef(
    Array.from({ length: AGENT_COUNT }, (_, i) => ({
      i, x: -60, y: 900, busy: false, el: null, task: null, fx: null, t0: 0, nextAt: 0,
    }))
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const A = agents.current;
    const taken = new Set();
    const reviewed = new WeakSet();
    let ahead = false; // is there an unbuilt block further down the page?
    const pres = new Set();
    const seen = new Map();
    const timers = [];
    let raf = 0;
    const t00 = performance.now();
    A.forEach((a, i) => {
      a.x = 30 + i * 40;
      a.y = window.innerHeight + 30;
      a.nextAt = t00 + 1600 + i * 120;
    });

    const reveal = (el) => {
      if (el.classList.contains("ag-small")) {
        el.classList.add("ag-grow");
        el.classList.remove("ag-small");
        return;
      }
      if (!el.classList.contains("ag-pre")) return;
      el.classList.remove("ag-pre");
      el.classList.add("ag-in");
      setTimeout(() => el.classList.remove("ag-in"), 650);
    };

    if (!reduce) {
      document.querySelectorAll(ALL).forEach((el) => {
        if (el.closest(SKIP)) return;
        el.classList.add(el.matches(".portrait") ? "ag-small" : "ag-pre");
        pres.add(el);
      });
    }

    // Safety net: anything an agent can't reach in time is shown, so nothing stays blank.
    const vh0 = () => window.innerHeight;
    const maintain = setInterval(() => {
      const now = performance.now();
      const vh = vh0();
      let pending = 0;
      pres.forEach((el) => {
        if (!el.isConnected || !isPre(el)) {
          pres.delete(el);
          return;
        }
        if (taken.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.bottom <= 60) {
          reveal(el);
          pres.delete(el);
          return;
        }
        if (r.top < vh - 40) {
          const rv = el.closest(".reveal");
          if (rv && !rv.classList.contains("done")) return;
          if (!el.matches(SMALL)) pending++;
          const s = seen.get(el) ?? now;
          seen.set(el, s);
          if (now - s > 5000) {
            reveal(el);
            pres.delete(el);
          }
        }
      });
      store.pending = pending;
      ahead = !!document.querySelector(".reveal:not(.done)");
    }, 300);

    const restore = (a) => {
      const el = a.el;
      const fx = a.fx;
      if (!el || !a.task) return;
      if ((a.task.kind === "type" || a.task.kind === "count") && fx) {
        fx.nodes.forEach((n, i) => (n.data = fx.orig[i]));
        el.style.minHeight = "";
        el.style.minWidth = "";
      } else if (a.task.kind === "resize") {
        el.classList.remove("ag-small", "ag-live");
        el.style.scale = "";
      }
    };

    const finish = (a, ok) => {
      const el = a.el;
      if (el && a.task) {
        restore(a);
        el.classList.remove("ag-focus");
        if (ok && a.task.kind === "review") {
          el.style.setProperty("--ag", COLORS[a.i]);
          el.classList.add("ag-pop");
          setTimeout(() => el.classList.remove("ag-pop"), 1000);
        }
        if (ok && a.task.kind !== "build") {
          const name = el.matches(".portrait") ? "profile photo" : (el.innerText || "element").replace(/\s+/g, " ").slice(0, 28);
          store.log(`agent-0${a.i + 1}`, `${a.task.label} · ${name}`, COLORS[a.i]);
        }
        taken.delete(el);
      }
      a.busy = false;
      a.el = null;
      a.task = null;
      a.fx = null;
      a.nextAt = performance.now() + 60 + rnd(220);
    };

    const start = (a, el, task) => {
      a.busy = true;
      a.el = el;
      a.task = task;
      a.fx = null;
      a.t0 = performance.now();
      taken.add(el);
      if (task.kind !== "build") el.classList.add("ag-focus");
    };

    const onBuild = (e) => {
      const { agent, el, w, h } = e.detail;
      const a = A[agent];
      if (!a || !el) return;
      if (a.busy) finish(a, false);
      const name = (el.querySelector("h2,h3,h4,.num,strong") || el).innerText || "";
      start(a, el, { kind: "build", label: "building", dur: 1100 });
      store.log(`agent-0${a.i + 1}`, `built block ${name.replace(/\s+/g, " ").slice(0, 22) || `${Math.round(w)}×${Math.round(h)}`}`, COLORS[a.i]);
      // the sweep also fills in the small labels of this block
      const items = [...el.querySelectorAll(SMALL)].filter((x) => x.classList.contains("ag-pre"));
      items.sort((p, q) => p.getBoundingClientRect().top - q.getBoundingClientRect().top);
      items.forEach((x, idx) => {
        timers.push(setTimeout(() => reveal(x), 450 + (idx / Math.max(1, items.length)) * 650));
      });
    };
    window.addEventListener("agent-build", onBuild);

    // Click a heading, paragraph, number or the photo and an agent replays the work on it.
    const onClick = (e) => {
      const t = e.target;
      if (!t.closest || t.closest("a,button,.cursor-field,.nav,.status")) return;
      const el = t.closest(WORK);
      if (!el || taken.has(el) || isPre(el)) return;
      const rv = el.closest(".reveal");
      if (rv && !rv.classList.contains("done")) return;
      const a = A.find((x) => !x.busy);
      if (!a) return;
      start(a, el, taskFor(el));
    };
    window.addEventListener("click", onClick);

    const setupFx = (a) => {
      const el = a.el;
      const k = a.task.kind;
      if (k === "type") {
        const nodes = textNodes(el);
        const r = el.getBoundingClientRect();
        a.fx = { nodes, orig: nodes.map((n) => n.data), total: nodes.reduce((s, n) => s + n.data.length, 0) };
        el.style.minHeight = `${r.height}px`;
        el.style.minWidth = `${r.width}px`;
        nodes.forEach((n) => (n.data = ""));
        el.classList.remove("ag-pre");
      } else if (k === "count") {
        const nodes = textNodes(el);
        a.fx = { nodes, orig: nodes.map((n) => n.data) };
        nodes.forEach((n, ni) => {
          n.data = a.fx.orig[ni].replace(NUM_RE, (m) => (isYear(m) ? m : fmt(m, 0)));
        });
        el.classList.remove("ag-pre");
      } else if (k === "resize") {
        el.classList.add("ag-small", "ag-live");
        el.style.scale = "0.35";
        a.fx = {};
      }
    };

    const loop = (now) => {
      const vh = window.innerHeight;
      A.forEach((a, i) => {
        const cur = curRefs.current[i];
        const sel = selRefs.current[i];
        const lab = labelRefs.current[i];
        if (!cur) return;

        if (!a.busy && now >= a.nextAt && !reduce) {
          const el = pickTarget(taken);
          if (el) start(a, el, taskFor(el));
          else {
            const sm = pickSmall(taken);
            if (sm) start(a, sm, taskFor(sm));
            else {
              const rv = pickReview(taken, reviewed);
              if (rv) {
                reviewed.add(rv);
                start(a, rv, reviewTask());
              } else a.nextAt = now + 300;
            }
          }
        }

        let tx = a.x;
        let ty = a.y;
        let k = 0.06;
        if (a.busy && a.el && a.el.isConnected) {
          const kind = a.task.kind;
          const t = now - a.t0;
          const p = clamp((t - APPROACH) / (a.task.dur - APPROACH));
          if (t >= APPROACH && !a.fx && kind !== "build") setupFx(a);

          let r = a.el.getBoundingClientRect();
          if (kind === "build") {
            tx = r.left + r.width * p;
            ty = r.top + r.height * p;
          } else if (kind === "type") {
            const fx = a.fx;
            let c = null;
            if (fx) {
              let remain = Math.floor(fx.total * p);
              for (let n = 0; n < fx.nodes.length; n++) {
                const take = Math.min(remain, fx.orig[n].length);
                fx.nodes[n].data = fx.orig[n].slice(0, take);
                remain -= take;
              }
              c = caretRect(fx);
            }
            if (c) {
              tx = c.right + 2;
              ty = c.top + c.height * 0.8;
            } else {
              tx = r.left + 4;
              ty = r.top + Math.min(14, r.height / 2);
            }
          } else if (kind === "count") {
            const fx = a.fx;
            if (fx) {
              const e = easeOut(p);
              fx.nodes.forEach((n, ni) => {
                n.data = fx.orig[ni].replace(NUM_RE, (m) => (isYear(m) ? m : fmt(m, parseFloat(m) * e)));
              });
            }
            tx = r.left + r.width * (0.15 + 0.7 * p);
            ty = r.top + r.height * 0.6;
          } else if (kind === "resize") {
            if (a.fx) a.el.style.scale = String(0.35 + 0.65 * easeOut(p));
            r = a.el.getBoundingClientRect();
            tx = r.right;
            ty = r.bottom;
          } else if (kind === "review") {
            tx = r.left + r.width * (0.1 + 0.8 * p);
            ty = r.top + r.height * (0.3 + 0.4 * p);
          }
          k = t < APPROACH ? 0.2 : 0.38;

          if (kind !== "build" && sel) {
            sel.style.opacity = 1;
            sel.style.transform = `translate(${r.left - 4}px, ${r.top - 4}px)`;
            sel.style.width = `${r.width + 8}px`;
            sel.style.height = `${r.height + 8}px`;
            sel.style.setProperty("--c", COLORS[i]);
          }
          if (lab) lab.textContent = `agent-0${i + 1} · ${a.task.label}`;

          const gone = r.bottom < 60 || r.top > vh - 30;
          if (t >= a.task.dur || gone) {
            if (sel) sel.style.opacity = 0;
            finish(a, !gone);
          }
        } else if (a.busy) {
          finish(a, false);
        } else {
          if (sel) sel.style.opacity = 0;
          if (ahead && !reduce) {
            // nothing to do on screen: scout the next block below
            tx = 60 + (i / (AGENT_COUNT - 1)) * (window.innerWidth - 120);
            ty = vh - 105;
            k = 0.05;
            if (lab) lab.textContent = `agent-0${i + 1} · scouting ahead`;
          } else if (lab) lab.textContent = `agent-0${i + 1}`;
        }
        a.x = lerp(a.x, tx, k);
        a.y = lerp(a.y, ty, k);
        cur.style.transform = `translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px)`;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(maintain);
      timers.forEach(clearTimeout);
      window.removeEventListener("agent-build", onBuild);
      window.removeEventListener("click", onClick);
      A.forEach((a) => a.busy && restore(a));
      pres.forEach((el) => el.classList.remove("ag-pre", "ag-small"));
    };
  }, []);

  return (
    <div className="cursor-field" aria-hidden>
      {COLORS.slice(0, AGENT_COUNT).map((c, i) => (
        <div key={`s${i}`} ref={(n) => (selRefs.current[i] = n)} className="agsel" style={{ "--c": c, opacity: 0 }}>
          <i className="a" /><i className="b" /><i className="c" /><i className="d" />
        </div>
      ))}
      {COLORS.slice(0, AGENT_COUNT).map((c, i) => (
        <div key={`c${i}`} ref={(n) => (curRefs.current[i] = n)} className="fcur" style={{ transform: "translate(-60px, 900px)" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill={c} style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))" }}>
            <path d="M2 1l13 6-5.5 2L7.5 15z" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span ref={(n) => (labelRefs.current[i] = n)} style={{ background: c }}>{`agent-0${i + 1}`}</span>
        </div>
      ))}
    </div>
  );
}

// Live log of what the agents just changed.
export function ActivityFeed() {
  const { feed } = useAgentStore();
  return (
    <div className="feed" aria-hidden>
      {feed.map((f) => (
        <div key={f.id} className="feed-row">
          <i style={{ background: f.c }} />
          <b>{f.who}</b> {f.msg}
        </div>
      ))}
    </div>
  );
}
