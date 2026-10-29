"use client";

import { Icon } from "./Icons";
import { personalData } from "@/data/portfolioData";

export default function Footer({ onOpenResume }) {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-2xl py-12 relative overflow-hidden text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/60">
          
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center font-mono font-black text-sky-600 text-xs shadow-xs border-white/80 select-none">
                {"</>"}
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                Debaraj Malik
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm font-semibold">
              Application Developer & Full Stack Lead • React Native, Flutter, MERN & Next.js
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black text-slate-700">
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="hover:text-sky-600 transition-colors cursor-pointer">
              Resume
            </button>
          </div>

          {/* Socials with Frosted Glass Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 shadow-xs"
              title="GitHub"
            >
              <Icon name="github" className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-sky-600 shadow-xs"
              title="LinkedIn"
            >
              <Icon name="linkedin" className="w-4 h-4" />
            </a>
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn w-9 h-9 rounded-xl flex items-center justify-center text-emerald-600 hover:text-emerald-700 shadow-xs"
              title="WhatsApp"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="glass-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-sky-600 shadow-xs"
              title="Email"
            >
              <Icon name="email" className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left font-semibold">
          <div>
            © {new Date().getFullYear()} Debaraj Malik. All rights reserved. Bhubaneswar, Odisha.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with Next.js App Router & Tailwind CSS</span>
            <span>•</span>
            <span className="text-gradient font-black">Ultra-Transparent Gradient Glass</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
