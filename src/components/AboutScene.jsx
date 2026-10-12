import React from 'react';
import { Cpu, Layers, Compass, ArrowUpRight } from 'lucide-react';

export default function AboutScene({ scrollProgress = 0 }) {
  // Spatial depth based on scroll progress (active focal zone: 0.18 - 0.38)
  const distFromCenter = Math.abs(scrollProgress - 0.28);
  const depthZ = Math.max(-50, -distFromCenter * 200);
  const tiltY = (scrollProgress - 0.28) * 3;
  const pillars = [
    {
      num: '01',
      icon: <Layers size={18} className="text-[#E4E4E7]" />,
      title: 'Full-Stack Engineering',
      desc: 'Architecting structured web systems from the database layer to modern frontend component trees. Prioritizing performant, clean, maintainable codebases.',
      meta: 'React // Node // APIs // SQL'
    },
    {
      num: '02',
      icon: <Cpu size={18} className="text-[#E4E4E7]" />,
      title: 'Applied AI & RAG Exploration',
      desc: 'Experimenting with generative models, retrieval-augmented generation pipelines, vector embeddings, and computer vision to build helpful, grounded experiences.',
      meta: 'Python // RAG // Vector DBs // OpenCV'
    },
    {
      num: '03',
      icon: <Compass size={18} className="text-[#E4E4E7]" />,
      title: 'Spatial & Editorial Design',
      desc: 'Viewing interfaces through an art director’s lens. Crafting dimensional compositions, typography hierarchy, micro-interactions, and 3D web motion that captivates.',
      meta: 'Three.js // Spatial UI // Monochromatic Systems'
    }
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '3.5rem 2rem 5rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
        transform: `translate3d(0, 0, ${depthZ}px) rotateY(${tiltY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="md:px-12 lg:px-20 flex flex-col justify-center preserve-3d"
    >
      {/* Section Header Track */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">[ 02 // POINT OF VIEW ]</span>
          <span className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            Philosophy &amp; Focus
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#71717A]">
          <span>INTERSECTION // 2026</span>
        </div>
      </div>

      {/* Monumental Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <h2 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.14] sm:leading-[1.10] text-[#F5F5F5] uppercase">
            CURIOUS BY NATURE.
            <br />
            <span className="chrome-text">BUILDER BY PRACTICE.</span>
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pt-3">
          <div className="p-6 border-l-2 border-white/30 bg-[#0B0B0B]/40">
            <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-widest block mb-2">
              CREATIVE ENGINEERING
            </span>
            <p className="font-mono text-sm text-[#E4E4E7] leading-relaxed">
              Balancing rigorous computer science fundamentals with experimental digital art direction and spatial interaction.
            </p>
          </div>
        </div>
      </div>

      {/* Core Narrative Text (Layered Composition, Not a generic card!) */}
      <div className="mt-12 md:mt-16 max-w-4xl">
        <p className="text-xl sm:text-2xl md:text-3xl font-body text-[#D4D4D8] leading-relaxed font-light">
          &ldquo;I&apos;m a B.Tech Information Technology student exploring the intersection of{' '}
          <span className="text-white font-medium underline decoration-white/30 underline-offset-8">
            software, AI and design
          </span>
          . I enjoy turning ideas into functional digital products—from AI-powered applications to full-stack platforms and user-focused interfaces.&rdquo;
        </p>

        <p className="mt-6 text-base sm:text-lg text-[#969696] font-body max-w-2xl leading-relaxed">
          Whether designing an accessible computer-vision assistance tool, grounding complex medical questions in clinical RAG documents, or orchestrating 3D web environments, my goal is always to deliver experiences that are both technically disciplined and visually unforgettable.
        </p>
      </div>

      {/* Dimensional Architecture Pillars (Asymmetric 3-column layout) */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.num}
            className="p-8 border border-[rgba(255,255,255,0.08)] bg-[#0B0B0B]/60 hover:bg-[#111111]/80 hover:border-[rgba(255,255,255,0.25)] transition-all duration-300 group relative flex flex-col justify-between"
          >
            {/* Top Row */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-[#71717A] tracking-widest group-hover:text-white transition-colors">
                  {pillar.num}
                </span>
                <div className="p-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#050505] group-hover:border-white/40 transition-colors">
                  {pillar.icon}
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="font-headline font-semibold text-xl text-[#F5F5F5] mb-3 group-hover:text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#969696] leading-relaxed mb-6 font-body">
                {pillar.desc}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] font-mono text-[11px] text-[#71717A] tracking-wider uppercase">
              {pillar.meta}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
