"use client";

import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { personalData } from "@/data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-indigo-500/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo with Gradient Frosted Glass Capsule */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl glass-pill flex items-center justify-center p-[2px] shadow-md shadow-sky-500/20 group-hover:shadow-indigo-500/40 group-hover:border-indigo-400/70 transition-all">
            <span className="font-mono font-black text-base text-gradient tracking-tight select-none">
              {"</>"}
            </span>
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              Debaraj Malik
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-slate-600">Available for Hire</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Transparent Glass Capsule */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-sm border-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-white/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons with Gradient Glassmorphism */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="glass-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-800 cursor-pointer hover:text-sky-600 hover:border-sky-400/50"
          >
            <Icon name="download" className="w-4 h-4 text-sky-600" />
            <span>Resume</span>
          </button>
          
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/30 border border-white/50 transition-all transform hover:-translate-y-0.5"
          >
            <Icon name="send" className="w-4 h-4" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="glass-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800"
            title="Resume"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-btn p-2 rounded-lg text-slate-700 hover:text-slate-900"
            aria-label="Toggle Navigation Menu"
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Transparent Frosted Glass Backdrop */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-white/60 px-4 pt-3 pb-6 mt-3 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-bold text-slate-800 hover:bg-white/60 hover:text-sky-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="glass-btn w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800"
              >
                <Icon name="academic" className="w-4 h-4 text-sky-600" />
                View & Download Resume (PDF)
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md shadow-sky-500/25 border border-white/40"
              >
                <Icon name="send" className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
