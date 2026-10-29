"use client";

import { Icon } from "./Icons";
import { educationData, certificationsData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="graduation" className="w-3.5 h-3.5 text-sky-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="text-gradient">Professional Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            Strong computer applications fundamentals combined with specialized project credentials in Java microservices and MERN stack engineering.
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degrees (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-2">
              <Icon name="academic" className="w-5 h-5 text-sky-600" />
              <span>University Degrees</span>
            </h3>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`glass-card glass-card-hover ${idx === 0 ? "glass-gradient-cyan" : "glass-gradient-purple"} rounded-[30px] p-6 sm:p-7 relative overflow-hidden shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-extrabold text-sky-700">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="glass-pill px-3.5 py-1 rounded-full text-xs font-black text-sky-900 shadow-xs">
                      {edu.score}
                    </span>
                    <span className="text-xs text-slate-600 font-bold">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                  {edu.description}
                </p>

                <div className="pt-3 border-t border-white/60 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-bold">Status</span>
                  <span className="font-black text-emerald-800 flex items-center gap-1.5">
                    <Icon name="check" className="w-3.5 h-3.5 text-emerald-600" />
                    {edu.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-2">
              <Icon name="award" className="w-5 h-5 text-purple-600" />
              <span>Achievements & Certifications</span>
            </h3>

            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover glass-gradient-sunset rounded-[28px] p-6 relative overflow-hidden shadow-lg"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl glass-pill flex items-center justify-center text-purple-700 border-purple-300 shadow-xs shrink-0">
                    <Icon name="trophy" className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-bold">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/60">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="glass-pill px-2.5 py-0.5 rounded-md text-[11px] font-bold text-slate-800 shadow-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Commitment to Rigor Banner in Transparent Gradient Frosted Glass */}
            <div className="glass-card glass-gradient-emerald rounded-2xl p-5 border-emerald-300/80 text-xs text-slate-800 leading-relaxed shadow-md">
              <div className="font-black text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                <Icon name="sparkles" className="w-4 h-4 text-emerald-600" />
                Commitment to Engineering Rigor
              </div>
              Consistently graduated with top-tier academic honors while simultaneously shipping commercial applications and deploying to the Google Play Store.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
