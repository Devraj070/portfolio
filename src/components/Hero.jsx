"use client";

import Image from "next/image";
import { Icon } from "./Icons";
import { personalData } from "@/data/portfolioData";

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: On mobile (<lg), Photo is FIRST (order-1), Content is SECOND (order-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* PHOTO COLUMN: Order-1 on Mobile (shows directly below navbar!), Order-2 on Desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center mb-2 lg:mb-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-sm md:max-w-md">
              
              {/* Outer Vibrant Multi-Color Ambient Glow */}
              <div className="absolute -inset-2.5 sm:-inset-3 bg-gradient-to-r from-sky-400 via-indigo-500 to-pink-500 rounded-[34px] sm:rounded-[38px] blur-xl opacity-45 animate-pulse-glow"></div>
              
              {/* Iridescent Gradient Frame Container */}
              <div className="gradient-border-container shadow-2xl">
                {/* Transparent Glass Card Housing */}
                <div className="relative rounded-[30px] sm:rounded-[32px] overflow-hidden glass-card p-2 sm:p-2.5">
                  <div className="relative w-full h-[320px] xs:h-[350px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-2xl overflow-hidden bg-white/40 border border-white/60">
                    <Image
                      src="/profile.jpg"
                      alt="Debaraj Malik - Application Developer & Full Stack Developer"
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Subtle glass gradient vignette at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-slate-900/75 via-slate-900/30 to-transparent"></div>
                    
                    {/* Frosted Glass Overlay Badge on Photo */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl glass-pill shadow-xl flex items-center justify-between border-white/80">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">Debaraj Malik</h3>
                        <p className="text-[11px] sm:text-xs text-sky-700 font-extrabold">Team Lead & Full Stack Architect</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-900 text-[10px] sm:text-xs font-black backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Transparent Glass Badge 1: Top Right (Now visible and scaled on Mobile!) */}
              <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-5 flex items-center gap-2 sm:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl glass-card shadow-lg sm:shadow-xl animate-float border-white/90">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-sky-400/30 to-indigo-400/30 border border-sky-400/50 flex items-center justify-center text-sky-700 shadow-sm shrink-0">
                  <Icon name="briefcase" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider">Leadership</div>
                  <div className="text-[11px] sm:text-xs font-black text-slate-900">Team Lead</div>
                </div>
              </div>

              {/* Floating Transparent Glass Badge 2: Bottom Left (Now visible and scaled on Mobile!) */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-5 flex items-center gap-2 sm:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl glass-card shadow-lg sm:shadow-xl animate-float-delayed border-white/90">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-emerald-400/30 to-teal-400/30 border border-emerald-400/50 flex items-center justify-center text-emerald-700 shadow-sm shrink-0">
                  <Icon name="playstore" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider">Mobile Apps</div>
                  <div className="text-[11px] sm:text-xs font-black text-slate-900">4+ Play Store</div>
                </div>
              </div>

            </div>
          </div>

          {/* BIO & HEADLINE COLUMN: Order-2 on Mobile, Order-1 on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill with Iridescent Frosted Glass */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full glass-pill text-sky-800 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-md shadow-sky-500/10 border-white/90">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 animate-ping"></span>
              <span className="font-extrabold text-slate-900">Software Developer (Team Lead)</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700 font-bold">Full Stack & Mobile Engineer</span>
            </div>

            {/* Main Headline with Vibrant Multi-Stop Gradients */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] mb-4 sm:mb-6">
              Engineering <span className="text-gradient">Scalable Mobile Apps</span> & High-Performance <span className="text-gradient-cyan">Full-Stack Systems</span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-medium">
              Hi, I&apos;m <span className="font-extrabold text-slate-900">Debaraj Malik</span>. Hands-on developer and team lead with a proven track record of shipping <span className="text-sky-600 font-extrabold">25+ production client platforms</span> and <span className="text-indigo-600 font-extrabold">4+ Google Play Store apps</span> using <span className="text-slate-900 font-bold">React Native, Flutter, MERN Stack, and Next.js</span>.
            </p>

            {/* Quick Skills Badges with Translucent Gradient Glass Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {["React Native", "Flutter", "Next.js", "Node.js", "MongoDB", "Razorpay", "VPS Deployment", "GenAI"].map((skill) => (
                <span
                  key={skill}
                  className="glass-pill px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold text-slate-800 hover:border-indigo-400/60 hover:text-indigo-700 transition-all cursor-default shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons with Gradient Sheen */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-xl shadow-sky-500/35 border border-white/50 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>View Production Projects</span>
                <Icon name="arrow-up-right" className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto glass-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 rounded-2xl font-bold text-sm text-slate-900 hover:text-sky-600 border-white/90 active:scale-95 cursor-pointer shadow-sm"
              >
                <Icon name="academic" className="w-4 h-4 text-sky-600" />
                <span>Resume / CV</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="glass-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 rounded-2xl font-bold text-sm text-slate-900 hover:text-sky-600 border-white/90 active:scale-95"
                >
                  <Icon name="mail" className="w-4 h-4 text-sky-600" />
                  <span>Contact</span>
                </a>

                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:px-5 rounded-2xl font-bold text-sm text-emerald-900 bg-gradient-to-r from-emerald-100/70 to-teal-100/70 hover:from-emerald-200/80 hover:to-teal-200/80 border border-emerald-400/50 backdrop-blur-md shadow-sm transition-all active:scale-95"
                  title="Chat on WhatsApp"
                >
                  <Icon name="whatsapp" className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social links & location */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="glass-pill px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 text-slate-800 font-bold shadow-xs">
                <Icon name="mappin" className="w-3.5 h-3.5 text-sky-600" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-4 font-bold text-slate-700">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
                >
                  <Icon name="github" className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
                >
                  <Icon name="linkedin" className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Key Metrics Strip with Ultra-Transparent Gradient Glass Cards */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-300/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-start gap-1 sm:gap-1.5 mb-1 sm:mb-1.5">
                <span className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-sm font-black text-sky-600 uppercase tracking-wider">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-800 leading-tight">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-1 font-semibold">{stat.highlight}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
