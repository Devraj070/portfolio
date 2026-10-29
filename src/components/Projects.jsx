"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { projectsData } from "@/data/portfolioData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const getProjectGradient = (id) => {
    switch (id) {
      case "waitinger":
        return "glass-gradient-cyan";
      case "career-counselling":
        return "glass-gradient-emerald";
      case "gym-management":
        return "glass-gradient-purple";
      default:
        return "glass-gradient-sunset";
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="code" className="w-3.5 h-3.5 text-sky-600" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production-Grade <span className="text-gradient">Mobile & Web Platforms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            Real-world applications shipped to the Google Play Store, production client networks, and high-traffic cloud environments.
          </p>

          {/* Filter Tabs Capsule with Glassmorphism */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass-pill shadow-sm border-white/80">
            {[
              { id: "all", label: "All Projects", count: projectsData.length },
              { id: "mobile", label: "Mobile Apps (Play Store)", count: 3 },
              { id: "fullstack", label: "Full Stack & Web", count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-sky-500/30 border border-white/50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/70"
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 opacity-80">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Transparent Gradient Frosted Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover ${getProjectGradient(project.id)} rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-between group shadow-xl`}
            >
              {/* Header */}
              <div>
                {/* Badges strip */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`glass-pill px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black shadow-xs ${
                        badge.includes("Play")
                          ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-900 flex items-center gap-1.5"
                          : badge.includes("Multi")
                          ? "bg-purple-500/20 border-purple-400/50 text-purple-900"
                          : "text-sky-900 bg-sky-500/15"
                      }`}
                    >
                      {badge.includes("Play") && <Icon name="playstore" className="w-3.5 h-3.5 text-emerald-600" />}
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs sm:text-sm font-black text-sky-700 mb-3 sm:mb-4">
                  {project.subtitle}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-medium">
                  {project.description}
                </p>

                {/* Key Achievements / Bullets */}
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-2.5 glass-subcard p-3.5 sm:p-4 rounded-2xl shadow-xs">
                  <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-600 mb-1">
                    Key Architectural Highlights:
                  </div>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="text-sky-600 font-black mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack & Actions */}
              <div className="pt-4 sm:pt-6 border-t border-white/60 mt-2">
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-pill px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold text-slate-800 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  {/* Google Play Store Links if available */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.playStoreLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all active:scale-95"
                      >
                        <Icon name="playstore" className="w-3.5 h-3.5" />
                        <span>{link.name}</span>
                        <Icon name="external" className="w-3 h-3 opacity-90" />
                      </a>
                    ))}
                  </div>

                  {/* Architecture & Details Modal trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="glass-btn inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs font-black text-slate-900 hover:text-sky-600 cursor-pointer w-full sm:w-auto"
                  >
                    <span>View Architecture</span>
                    <Icon name="arrow-up-right" className="w-3.5 h-3.5 text-sky-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Transparent Frosted Glass Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-2xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-3xl rounded-[32px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-white">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="glass-btn absolute top-5 right-5 p-2 rounded-full text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {selectedProject.badges.map((b, i) => (
                <span
                  key={i}
                  className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-sky-800"
                >
                  {b}
                </span>
              ))}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-bold text-sky-700 mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider mb-2">
                  System Architecture & Implementation
                </h4>
                <div className="glass-subcard p-4 rounded-2xl leading-relaxed text-slate-800 font-medium">
                  {selectedProject.description}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider mb-2">
                  Key Technical Deliverables
                </h4>
                <div className="glass-subcard p-4 rounded-2xl space-y-2.5 text-slate-800 font-medium">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider mb-2">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-pill px-3 py-1 rounded-xl text-xs font-black text-slate-800 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.playStoreLinks.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider mb-2">
                    Production Google Play Releases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.playStoreLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all"
                      >
                        <Icon name="playstore" className="w-4 h-4" />
                        <span>Open {link.name}</span>
                        <Icon name="external" className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="glass-btn px-6 py-2.5 rounded-xl text-sm font-bold text-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
