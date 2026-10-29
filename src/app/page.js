"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-900 bg-grid-pattern relative overflow-hidden">
      
      {/* Saturated Ambient Gradient Glow Orbs for Ultra-Transparent Glassmorphism */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top Hero Orb - Vivid Sky Blue & Cyan */}
        <div className="glow-orb w-[750px] h-[750px] bg-gradient-to-tr from-sky-400/60 to-cyan-300/60 -top-32 left-[15%] animate-pulse-glow" />
        
        {/* Top Right Orb - Vivid Violet & Lavender */}
        <div className="glow-orb w-[650px] h-[650px] bg-gradient-to-br from-purple-400/55 to-indigo-300/55 top-10 -right-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Mid-Left Orb - Electric Blue & Azure */}
        <div className="glow-orb w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/55 to-cyan-400/50 top-[30%] -left-36 animate-pulse-glow" style={{ animationDelay: "4s" }} />
        
        {/* Projects Center Orb - Vivid Coral, Rose & Violet */}
        <div className="glow-orb w-[800px] h-[800px] bg-gradient-to-r from-pink-400/50 via-purple-400/50 to-indigo-400/50 top-[50%] right-[5%] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        
        {/* Skills & Experience Orb - Emerald & Mint */}
        <div className="glow-orb w-[650px] h-[650px] bg-gradient-to-tr from-emerald-400/55 to-teal-300/50 top-[70%] left-[8%] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        
        {/* Bottom Contact Orb - Radiant Violet, Amber & Coral */}
        <div className="glow-orb w-[750px] h-[750px] bg-gradient-to-tl from-purple-400/60 via-pink-400/50 to-amber-300/40 bottom-[-50px] right-[20%] animate-pulse-glow" style={{ animationDelay: "5s" }} />
      </div>

      {/* Iridescent Specular Glass Reflection Top Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-pink-500 z-50 pointer-events-none opacity-90 shadow-sm" />

      {/* Main Navigation with Frosted Glass Styling */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Resume View & Print Modal with Frosted Glass Overlay */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
