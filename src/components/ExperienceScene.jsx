import React from 'react';
import { experienceData } from '../data/projectsData';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function ExperienceScene({ scrollProgress = 0 }) {
  // Spatial depth based on scroll progress (active zone around ~0.84 - 0.92)
  const distFromCenter = Math.abs(scrollProgress - 0.88);
  const depthZ = Math.max(-200, -distFromCenter * 1200);
  const opacity = Math.min(1, Math.max(0.5, 1 - distFromCenter * 3.0));

  return (
    <section
      id="experience"
      style={{
        minHeight: '80vh',
        position: 'relative',
        padding: '8rem 2rem 6rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
        transform: `translate3d(0, 0, ${depthZ}px)`,
        opacity: opacity,
        transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
      }}
      className="md:px-12 lg:px-20 flex flex-col justify-center preserve-3d"
    >
      {/* Section Header Track */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">[ 05 // EXPERIENCE ]</span>
          <span className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            Practice &amp; Engineering Roles
          </span>
        </div>
        <div className="font-mono text-xs text-[#71717A] hidden sm:block">
          CHRONOLOGY // 2023 — 2026
        </div>
      </div>

      {/* Monumental Headline with Breathing Room */}
      <div className="max-w-4xl mb-16">
        <h2 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight mb-6">
          PRACTICE IN
          <br />
          <span className="chrome-text">APPLIED CONTEXTS.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#969696] font-body leading-relaxed max-w-2xl">
          Engineering roles and independent research building at the intersection of machine learning, web systems, and high-fidelity presentation.
        </p>
      </div>

      {/* Experience Chronology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 border border-[rgba(255,255,255,0.08)] bg-[#090909] hover:border-[rgba(255,255,255,0.25)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-4 mb-6">
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-0.5 rounded">
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-[#71717A] flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </span>
              </div>

              <h3 className="font-headline font-bold text-2xl text-white mb-2">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-[#A1A1AA] mb-4">
                {exp.company}
              </p>

              <div className="p-3 bg-[#111111] border border-white/5 mb-6 text-xs font-mono text-[#D4D4D8]">
                <span className="text-[#71717A] block mb-1 uppercase tracking-wider text-[10px]">FOCUS AREA</span>
                <span>{exp.focus}</span>
              </div>

              <p className="text-sm text-[#969696] font-body leading-relaxed">
                {exp.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)] font-mono text-[11px] text-[#71717A]">
              <span>VERIFIED ROLE RECORD // PRAGYA MEHTA</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
