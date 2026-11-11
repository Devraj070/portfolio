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
import { Interactive, SectionSpy } from "@/components/Interactive";
import { CursorField, ActivityFeed } from "@/components/AgentLayer";
import { Intro, ScrollLine, StatusBar, Tour } from "@/components/Cursors";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const open = () => setResumeOpen(true);

  return (
    <div className="relative">
      <div className="bg-fx" />
      <Intro />
      <ScrollLine />
      <Tour />
      <SectionSpy />
      <Interactive />
      <CursorField />
      <ActivityFeed />
      <Navbar onOpenResume={open} />
      <main>
        <Hero onOpenResume={open} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact onOpenResume={open} />
      </main>
      <Footer />
      <StatusBar />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
