"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { personalData } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time / Team Lead Opportunity",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-sky-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Icon name="mail" className="w-3.5 h-3.5 text-sky-600" />
            <span>Initiate Direct Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build Something <span className="text-gradient">Exceptional Together</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            Currently open to Software Developer (Team Lead), Senior Mobile, and Full-Stack opportunities, as well as select architectural consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Contact Direct Cards in Gradient Glassmorphism (Col 5) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* Email Card */}
            <div className="glass-card glass-card-hover glass-gradient-cyan rounded-[22px] sm:rounded-[28px] p-4.5 sm:p-6 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-pill flex items-center justify-center text-sky-600 shadow-sm border-white/80 shrink-0">
                  <Icon name="email" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase font-black text-slate-500">Direct Email</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-base font-black text-slate-900 hover:text-sky-600 transition-colors block break-all"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="glass-btn p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-sky-600 cursor-pointer shrink-0 ml-2"
                title="Copy Email"
              >
                <Icon name={copiedEmail ? "check" : "copy"} className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card glass-card-hover glass-gradient-emerald rounded-[22px] sm:rounded-[28px] p-4.5 sm:p-6 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-pill flex items-center justify-center text-emerald-600 shadow-sm border-white/80 shrink-0">
                  <Icon name="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase font-black text-slate-500">Phone & WhatsApp</div>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-xs sm:text-base font-black text-slate-900 hover:text-emerald-700 transition-colors block"
                  >
                    {personalData.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn p-2 sm:p-2.5 rounded-xl text-emerald-700 hover:text-emerald-800"
                  title="Open WhatsApp Chat"
                >
                  <Icon name="whatsapp" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="glass-btn p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-sky-600 cursor-pointer"
                  title="Copy Phone Number"
                >
                  <Icon name={copiedPhone ? "check" : "copy"} className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                </button>
              </div>
            </div>

            {/* Socials & Location Card */}
            <div className="glass-card glass-gradient-purple rounded-[22px] sm:rounded-[28px] p-4.5 sm:p-6 space-y-3 sm:space-y-4 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-3.5 text-slate-700 text-sm">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl glass-pill flex items-center justify-center text-sky-600 shadow-xs">
                  <Icon name="mappin" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-black uppercase tracking-wider">Base Location</div>
                  <div className="font-black text-slate-900 text-xs sm:text-sm">{personalData.location}</div>
                </div>
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-white/60 flex items-center gap-2 sm:gap-3">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-btn flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-slate-900 text-[11px] sm:text-xs font-black hover:text-sky-600"
                >
                  <Icon name="linkedin" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-btn flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-slate-900 text-[11px] sm:text-xs font-black hover:text-sky-600"
                >
                  <Icon name="github" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form with Ultra-Transparent Inputs (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-card glass-gradient-cyan rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 relative shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-1.5 sm:mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-4 sm:mb-6 font-medium">
                Fill in the details below to start a conversation regarding opportunities, leadership roles, or collaborations.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-100/80 border border-emerald-400 text-emerald-950 text-sm flex items-center gap-2.5 backdrop-blur-md shadow-sm">
                  <Icon name="check" className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span className="font-semibold">
                    Thank you! Your default email client was opened with the message pre-filled. You can also message Debaraj directly on WhatsApp!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass-input w-full px-4 py-3.5 rounded-2xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass-input w-full px-4 py-3.5 rounded-2xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Discussion Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="glass-input w-full px-4 py-3.5 rounded-2xl text-slate-900 text-sm focus:outline-none bg-white/70 font-semibold"
                  >
                    <option value="Full-Time / Team Lead Opportunity">Full-Time / Team Lead Opportunity</option>
                    <option value="Mobile App Development (React Native / Flutter)">Mobile App Development (React Native / Flutter)</option>
                    <option value="Full-Stack Web Application (Next.js / MERN)">Full-Stack Web Application (Next.js / MERN)</option>
                    <option value="Freelance / Contract Engagement">Freelance / Contract Engagement</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Your Message / Project Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Debaraj about the role, technical requirements, or project details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass-input w-full px-4 py-3.5 rounded-2xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-xl shadow-sky-500/30 border border-white/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Icon name="send" className="w-4 h-4" />
                  <span>Send Message to Debaraj</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
