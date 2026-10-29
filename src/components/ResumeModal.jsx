"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { personalData, experienceData, educationData } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("pdf"); // "pdf" | "text"

  if (!isOpen) return null;

  const pdfUrl = "/Software_Developer_Debaraj.pdf";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-5 md:p-6 bg-slate-900/65 backdrop-blur-2xl animate-fadeIn">
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-5xl bg-white/95 backdrop-blur-3xl rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-2xl max-h-[95vh] flex flex-col text-slate-800 border border-white">
        
        {/* Top Control Bar with Glassmorphic Pill Header */}
        <div className="shrink-0 mb-3 px-3 py-2 sm:px-4 sm:py-2.5 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex flex-wrap items-center justify-between gap-2 z-20 border border-slate-200/90 shadow-xs">
          
          {/* Header Title with Document Icon */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg sm:rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-400/40 flex items-center justify-center text-sky-700 shrink-0">
              <Icon name="academic" className="w-4 h-4 text-sky-600" />
            </div>
            <div className="min-w-0">
              <h2 className="font-black text-xs sm:text-sm text-slate-900 truncate">
                Debaraj Malik &bull; Resume
              </h2>
              <p className="text-[10px] sm:text-xs text-sky-700 font-bold hidden xs:block truncate">
                Software_Developer_Debaraj.pdf
              </p>
            </div>
          </div>

          {/* View Mode Toggle: PDF File vs Text Summary */}
          <div className="flex items-center p-0.5 rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold order-last xs:order-none w-full xs:w-auto justify-center xs:justify-start">
            <button
              onClick={() => setActiveTab("pdf")}
              className={`flex-1 xs:flex-initial px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg transition-all cursor-pointer ${
                activeTab === "pdf"
                  ? "bg-white text-sky-700 shadow-xs font-black"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PDF Document
            </button>
            <button
              onClick={() => setActiveTab("text")}
              className={`flex-1 xs:flex-initial px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg transition-all cursor-pointer ${
                activeTab === "text"
                  ? "bg-white text-sky-700 shadow-xs font-black"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Text View
            </button>
          </div>

          {/* Action Buttons: Download + Open in New Tab + Close */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto xs:ml-0">
            {/* Direct Download Button */}
            <a
              href={pdfUrl}
              download="Software_Developer_Debaraj.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/25 border border-white/40 cursor-pointer active:scale-95 transition-all whitespace-nowrap"
              title="Download Software_Developer_Debaraj.pdf"
            >
              <Icon name="download" className="w-3.5 h-3.5 shrink-0" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab (Full Screen) */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 glass-btn hover:text-sky-700 cursor-pointer whitespace-nowrap active:scale-95 transition-all"
              title="Open PDF in new tab"
            >
              <Icon name="external" className="w-3.5 h-3.5 text-slate-600" />
              <span>Full Screen</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="glass-btn p-1.5 sm:p-2 rounded-xl text-slate-700 hover:text-slate-900 cursor-pointer active:scale-95"
              title="Close Resume"
              aria-label="Close"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        {activeTab === "pdf" ? (
          /* PDF Viewer Display */
          <div className="relative flex-1 w-full min-h-[62vh] sm:min-h-[72vh] md:min-h-[78vh] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-inner flex flex-col">
            <object
              data={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              type="application/pdf"
              className="w-full h-full flex-1 min-h-[62vh] sm:min-h-[72vh] md:min-h-[78vh]"
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                className="w-full h-full flex-1 min-h-[62vh] sm:min-h-[72vh] md:min-h-[78vh]"
                title="Debaraj Malik Resume PDF"
              >
                {/* Fallback for devices without inline PDF viewer */}
                <div className="p-8 text-center flex flex-col items-center justify-center h-full bg-slate-50">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                    <Icon name="academic" className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Debaraj Malik Resume PDF</h3>
                  <p className="text-sm text-slate-600 mb-5 max-w-md">
                    To view or download the complete original resume PDF, use the options below:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md"
                    >
                      Open PDF Full Screen
                    </a>
                    <a
                      href={pdfUrl}
                      download="Software_Developer_Debaraj.pdf"
                      className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-800 glass-btn"
                    >
                      Download PDF File
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
          </div>
        ) : (
          /* Structured Responsive Text Version */
          <div className="overflow-y-auto pr-0.5 sm:pr-1 space-y-4">
            <div className="print-area bg-slate-50/90 backdrop-blur-md p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 text-xs sm:text-sm shadow-xs">
              
              {/* Header */}
              <div className="border-b border-slate-300 pb-5 mb-5 text-center sm:text-left">
                <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  DEBARAJ MALIK
                </h1>
                <p className="text-sky-700 font-black text-sm sm:text-base mt-1">
                  Application Developer | Full Stack Developer
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 mt-2.5 text-[11px] sm:text-xs text-slate-600 font-bold">
                  <a href={`mailto:${personalData.email}`} className="text-sky-700 hover:underline">
                    {personalData.email}
                  </a>
                  <span className="text-slate-400">•</span>
                  <a href={`tel:${personalData.phone}`} className="text-sky-700 hover:underline">
                    {personalData.phoneDisplay}
                  </a>
                  <span className="text-slate-400">•</span>
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                    linkedin.com/in/debaraj07
                  </a>
                  <span className="text-slate-400">•</span>
                  <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                    github.com/Devraj070
                  </a>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-700">{personalData.location}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-2 border-b border-slate-200 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {personalData.summary}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-2 border-b border-slate-200 pb-1">
                  SKILLS
                </h2>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <div>
                    <strong className="text-slate-900 font-black">Frameworks & Libraries:</strong> React Native, Flutter, Next.js, React.js, Node.js, Express.js, Tailwind CSS, ThreeJS
                  </div>
                  <div>
                    <strong className="text-slate-900 font-black">Languages & Core:</strong> JavaScript (ES6+), Dart, JAVA, HTML5, CSS3
                  </div>
                  <div>
                    <strong className="text-slate-900 font-black">Databases & Tools:</strong> MongoDB, REST APIs, Git/GitHub, Payment Gateways (Razorpay), Authentication & Role-Based Access
                  </div>
                  <div>
                    <strong className="text-slate-900 font-black">Other:</strong> VPS Deployment, Play Store Deployment, Vercel Deployment, Mobile-First Design, Client Project Delivery, Server Architecture, Learning GEN AI
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-3 border-b border-slate-200 pb-1">
                  WORK EXPERIENCE
                </h2>
                <div className="space-y-4">
                  {experienceData.map((exp, i) => (
                    <div key={i} className="text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-black text-slate-900 mb-1 gap-0.5 sm:gap-2">
                        <span className="text-xs sm:text-sm">
                          {exp.title} &mdash; <span className="text-sky-700 font-bold">{exp.company}</span>
                        </span>
                        <span className="text-slate-500 font-bold text-[11px] sm:text-xs">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 font-medium">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-3 border-b border-slate-200 pb-1">
                  KEY PROJECTS
                </h2>
                <div className="space-y-3.5 text-xs">
                  <div>
                    <div className="font-black text-slate-900 break-words">
                      Career Counselling App (React Native, MongoDB, Nodejs) |{" "}
                      <span className="text-sky-700 break-all font-bold">Google Play: com.careervedas.app</span>
                    </div>
                    <div className="text-slate-700 mt-0.5 font-medium leading-relaxed">
                      • Built Nodejs APIs with secure CRUD operations, MongoDB integration, authentication, payment gateway (Razorpay), and role-based access; deployed to the Google Play Store.
                    </div>
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      Gym Management App (Flutter, MongoDB, Nodejs)
                    </div>
                    <div className="text-slate-700 mt-0.5 font-medium leading-relaxed">
                      • Developing a full-stack gym management app with Flutter, Node.js, Express.js, and MongoDB for managing members, memberships, attendance, payments, and workouts.
                    </div>
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      Waitinger (3 Apps) – Restaurant Ordering & Delivery Platform (React Native, Node.js, MongoDB, Socket.IO)
                    </div>
                    <div className="text-slate-700 mt-0.5 font-medium leading-relaxed">
                      • Built a multi-app platform of diner, restaurant and rider apps with a Node.js backend, real-time tracking, online payments, role-based access, and an AI assistant.
                    </div>
                    <div className="text-slate-600 mt-0.5 italic font-semibold">
                      Google Play: Waitinger (Diner) | Waitinger Partner (Restaurant) | Waitinger Delivery (Rider)
                    </div>
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      25+ Production Client Platforms & Portals (Next.js, React, MongoDB)
                    </div>
                    <div className="text-slate-700 mt-0.5 font-medium leading-relaxed">
                      • Delivered 25+ production websites for restaurant, salon, healthcare, real estate, and career-counselling clients with booking flows and digital proposals.
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-2 border-b border-slate-200 pb-1">
                  EDUCATION
                </h2>
                <div className="space-y-2 text-xs">
                  {educationData.map((edu, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                      <span className="font-black text-slate-900">
                        {edu.degree} &mdash; <span className="text-slate-600 font-semibold">{edu.institution}</span>
                      </span>
                      <span className="text-sky-700 font-black">{edu.period} | {edu.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h2 className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-sky-800 mb-2 border-b border-slate-200 pb-1">
                  ACHIEVEMENTS & CERTIFICATIONS
                </h2>
                <div className="text-xs text-slate-700 flex flex-wrap gap-x-6 gap-y-1 font-bold">
                  <span>• Advanced Java Project - OCAC Training Centre</span>
                  <span>• MERN Stack Project - WebBocket Pvt Ltd</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom Helper Bar */}
        <div className="mt-2.5 sm:mt-3 px-1 sm:px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Software_Developer_Debaraj.pdf &bull; 303 KB</span>
          </div>
          <div className="flex items-center gap-3 font-bold">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-800 hover:underline flex items-center gap-1"
            >
              <span>Open in new tab</span>
              <Icon name="external" className="w-3 h-3" />
            </a>
            <span className="text-slate-300">|</span>
            <button
              onClick={handlePrint}
              className="text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Icon name="printer" className="w-3 h-3" />
              <span>Print</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
