"use client";
import { useSyncExternalStore } from "react";

export const AGENT_COUNT = 7;
export const AGENT_COLORS = ["#ff2d2d", "#facc15", "#38bdf8", "#a78bfa", "#34d399", "#f472b6", "#fb923c"];

let state = { total: 0, built: 0, touring: true, section: "top", feed: [] };
let feedId = 0;
let seq = 0;
const subs = new Set();
const emit = () => {
  state = { ...state };
  subs.forEach((f) => f());
};

export const store = {
  get: () => state,
  sub: (f) => {
    subs.add(f);
    return () => subs.delete(f);
  },
  register() {
    state.total++;
    emit();
  },
  unregister() {
    state.total = Math.max(0, state.total - 1);
    emit();
  },
  built() {
    state.built++;
    emit();
  },
  setTouring(v) {
    if (state.touring !== v) {
      state.touring = v;
      emit();
    }
  },
  setSection(v) {
    if (state.section !== v) {
      state.section = v;
      emit();
    }
  },
  log(who, msg, c) {
    state.feed = [...state.feed, { id: feedId++, who, msg, c }].slice(-4);
    emit();
  },
  pending: 0, // pre-hidden items currently on screen waiting for an agent
  nextId: () => seq++,
};

export const useAgentStore = () => useSyncExternalStore(store.sub, store.get, store.get);

// Tell the cursor layer that an agent is working on this rect.
export function announceBuild(detail) {
  window.dispatchEvent(new CustomEvent("agent-build", { detail }));
}
