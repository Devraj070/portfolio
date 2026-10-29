"use client";

import { Icon } from "./Icons";
import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  const getCategoryGradient = (idx) => {
    switch (idx) {
      case 0:
        return "glass-gradient-cyan";
      case 1:
        return "glass-gradient-purple";
      case 2:
        return "glass-gradient-sunset";
      case 3:
        return "glass-gradient-emerald";
      default:
        return "glass-gradient-cyan";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="code" className="w-3.5 h-3.5 text-sky-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tools, Technologies & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            A comprehensive, battle-tested toolset spanning cross-platform mobile apps, cloud backends, payment security, and modern web architectures.
          </p>
        </div>

        {/* Categorized Skills Grid in Transparent Gradient Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover ${getCategoryGradient(idx)} rounded-[30px] p-6 sm:p-7 flex flex-col justify-between shadow-xl`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-sky-700 shadow-sm border-white/80">
                    <Icon name={category.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items in Translucent Subcards */}
                <div className="space-y-3 mt-6">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="glass-subcard p-3 rounded-2xl flex items-center justify-between hover:border-sky-400 hover:bg-white/80 transition-all shadow-xs"
                    >
                      <div>
                        <div className="text-sm font-black text-slate-900">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-600 font-bold">
                          {skill.years} experience
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="glass-pill text-[11px] px-2.5 py-0.5 rounded-md font-black text-sky-900 bg-white/70">
                          {skill.tag}
                        </span>
                        <span className="text-xs font-extrabold text-slate-700">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/60 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="font-bold">Production Verified</span>
                <span className="flex items-center gap-1.5 text-sky-700 font-black">
                  <Icon name="check" className="w-3.5 h-3.5 text-sky-600" />
                  Ready to Ship
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning GEN AI Spotlight Frosted Glass Banner with Rich Gradient Wash */}
        <div className="mt-12 glass-card glass-gradient-purple rounded-[32px] p-6 sm:p-8 border-purple-300/80 relative overflow-hidden shadow-2xl shadow-purple-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl glass-pill flex items-center justify-center text-purple-700 border-purple-300 shadow-md shrink-0">
                <Icon name="sparkles" className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-900 text-xs font-black mb-1.5 shadow-xs">
                  Active Continuous Learning
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                  Generative AI & LLM-Powered Application Architecture
                </h4>
                <p className="text-sm text-slate-700 mt-1 max-w-2xl leading-relaxed font-medium">
                  Deepening capabilities in Generative AI integrations, intelligent chatbots, automated reasoning pipelines, and AI assistants (as demonstrated in the Waitinger platform).
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 shadow-lg shadow-purple-600/30 border border-white/50 transition-all shrink-0"
            >
              Discuss AI Integration
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
