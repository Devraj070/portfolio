"use client";

import { Icon } from "./Icons";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  const getRoleGradient = (idx) => {
    switch (idx) {
      case 0:
        return "glass-gradient-cyan";
      case 1:
        return "glass-gradient-purple";
      case 2:
        return "glass-gradient-sunset";
      default:
        return "glass-gradient-emerald";
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="briefcase" className="w-3.5 h-3.5 text-sky-600" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & <span className="text-gradient">Team Leadership</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            A track record of growing from core engineering intern to full-stack delivery specialist and development team lead.
          </p>
        </div>

        {/* Timeline with Transparent Gradient Frosted Glass Cards */}
        <div className="relative border-l-2 border-indigo-200 ml-2 sm:ml-8 md:ml-12 pl-4 sm:pl-10 space-y-8 sm:space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline glass dot */}
              <div
                className={`absolute -left-[25px] sm:-left-[48px] top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-[#f1f5f9] flex items-center justify-center transition-transform group-hover:scale-125 shadow-md ${
                  idx === 0
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/50"
                    : "bg-slate-300 group-hover:bg-sky-500"
                }`}
              >
                {idx === 0 && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping"></span>}
              </div>

              {/* Main Transparent Gradient Glass Card */}
              <div className={`glass-card glass-card-hover ${getRoleGradient(idx)} rounded-[24px] sm:rounded-[32px] p-4.5 sm:p-8 relative overflow-hidden shadow-xl`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[11px] sm:text-xs font-black text-sky-700 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-sm sm:text-base font-extrabold text-slate-700">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start text-xs sm:text-sm text-slate-600 gap-2">
                    <span className="glass-pill px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-slate-900 font-black shadow-xs text-xs">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-600 font-bold text-xs">
                      <Icon name="mappin" className="w-3.5 h-3.5 text-sky-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points in Translucent Subcard */}
                <div className="glass-subcard p-3.5 sm:p-4 rounded-2xl mb-4 sm:mb-6 shadow-xs">
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-black mt-0.5 text-base leading-none">
                          ›
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/60 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs text-slate-600 font-black mr-1">
                    Environment:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-pill px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black text-slate-800 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
