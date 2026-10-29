"use client";

import { Icon } from "./Icons";
import { personalData } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: "smartphone",
      title: "Cross-Platform Mobile Mastery",
      description:
        "Building production-grade iOS & Android applications with React Native and Flutter. Specialized in complex state management, sub-second socket connections, and seamless Google Play Store deployments.",
      highlight: "React Native • Flutter • Play Store",
      gradientClass: "glass-gradient-cyan",
      iconBg: "bg-sky-500/20 text-sky-700 border-sky-400/40",
    },
    {
      icon: "layout",
      title: "High-Performance Next.js & Web",
      description:
        "Developing scalable modern web platforms using Next.js App Router, React 19, and Tailwind CSS. Focus on server-side rendering, SEO superiority, accessibility, and fluid user interactions.",
      highlight: "Next.js • React • Tailwind CSS",
      gradientClass: "glass-gradient-purple",
      iconBg: "bg-purple-500/20 text-purple-700 border-purple-400/40",
    },
    {
      icon: "server",
      title: "Enterprise Backend & Architecture",
      description:
        "Architecting resilient Node.js & Express REST APIs, microservices, and MongoDB databases. Engineered high-load systems with role-based access control, JWT authentication, and Razorpay payments.",
      highlight: "Node.js • Express • MongoDB • Java",
      gradientClass: "glass-gradient-sunset",
      iconBg: "bg-amber-500/20 text-amber-700 border-amber-400/40",
    },
    {
      icon: "sparkles",
      title: "Leadership & GenAI Innovation",
      description:
        "Managing agile development teams at OdiTech Global, conducting architecture reviews, and translating business goals into robust code. Actively integrating Generative AI into modern user workflows.",
      highlight: "Team Leadership • Gen AI • VPS Cloud",
      gradientClass: "glass-gradient-emerald",
      iconBg: "bg-emerald-500/20 text-emerald-700 border-emerald-400/40",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="sparkles" className="w-3.5 h-3.5 text-sky-600" />
            <span>About Debaraj Malik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering High-Impact Applications From <span className="text-gradient">Concept to Cloud</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl">
            Passionate software developer and team lead with a comprehensive engineering foundation spanning mobile native, modern web, microservices, and client delivery.
          </p>
        </div>

        {/* Narrative Card with Ultra-Transparent Gradient Glassmorphism */}
        <div className="glass-card rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 mb-8 sm:mb-12 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Story & Philosophy */}
            <div className="lg:col-span-8">
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                Full-Lifecycle Software Developer & Tech Lead
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-medium">
                {personalData.summary}
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                Whether deploying multi-app ecosystems with live tracking for food delivery, designing career counselling portals with verified payment gateways, or delivering 25+ commercial web platforms for healthcare and education clients, I focus on <strong className="text-slate-900 font-extrabold">clean code architecture, measurable performance, and seamless user experiences</strong>.
              </p>
            </div>

            {/* Quick Spec Frosted Glass Panel */}
            <div className="lg:col-span-4 glass-subcard rounded-2xl p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 shadow-sm">
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/60 text-xs sm:text-sm">
                <span className="text-[11px] sm:text-xs uppercase font-extrabold text-slate-500">Current Base</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <Icon name="mappin" className="w-3.5 h-3.5 text-sky-600" />
                  Bhubaneswar, Odisha
                </span>
              </div>
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/60 text-xs sm:text-sm">
                <span className="text-[11px] sm:text-xs uppercase font-extrabold text-slate-500">Education</span>
                <span className="text-xs sm:text-sm font-black text-sky-700">MCA (8.3 CGPA)</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/60 text-xs sm:text-sm">
                <span className="text-[11px] sm:text-xs uppercase font-extrabold text-slate-500">Primary Stack</span>
                <span className="text-xs sm:text-sm font-black text-slate-900">React Native • MERN • Next.js</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[11px] sm:text-xs uppercase font-extrabold text-slate-500">Active Exploration</span>
                <span className="text-xs sm:text-sm font-black text-purple-700 flex items-center gap-1.5">
                  <Icon name="sparkles" className="w-3.5 h-3.5 text-purple-600" />
                  Generative AI
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars in Rich Gradient Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover ${pillar.gradientClass} rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 flex flex-col justify-between shadow-lg`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl glass-pill ${pillar.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon name={pillar.icon} className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/60 text-xs font-black text-sky-700">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
