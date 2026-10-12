import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroScene({ scrollProgress = 0 }) {
  // Spatial depth fade based on scroll (no positive translateY to avoid gap)
  const opacity = Math.max(0, 1 - scrollProgress * 3.0);
  const scale = Math.max(0.96, 1 - scrollProgress * 0.15);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '6rem 2rem 2rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'opacity 0.1s linear',
        pointerEvents: opacity < 0.1 ? 'none' : 'auto',
      }}
      className="md:px-12 lg:px-20 preserve-3d"
    >
      {/* Top Editorial Telemetry Bar — Clean & Quiet */}
      <div className="flex items-center justify-between font-mono text-xs text-[#8E8E93] border-b border-[rgba(255,255,255,0.08)] pb-4">
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">PRAGYA MEHTA</span>
          <span className="text-[#52525B]">/</span>
          <span className="text-[#A1A1AA] tracking-wider uppercase">
            PORTFOLIO 2026
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#71717A]">
          <span className="hidden sm:inline">DELHI, INDIA</span>
          <span className="text-white border border-white/20 px-2.5 py-0.5 rounded-full text-[10px] tracking-wider">
            AVAILABLE
          </span>
        </div>
      </div>

      {/* Main Center Stage: Dominant Oversized "PRAGYA MEHTA." on ONE horizontal line on desktop */}
      <div className="my-auto py-12 md:py-16 flex flex-col justify-center">
        {/* Editorial Sub-Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-white/40" />
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#A1A1AA] uppercase font-medium">
            CREATIVE DEVELOPER &amp; AI ENTHUSIAST
          </p>
        </div>

        {/* Master Headline: Exactly "PRAGYA MEHTA." on ONE line on desktop */}
        <h1
          className="font-headline font-black uppercase text-white select-none leading-[0.95] whitespace-normal sm:whitespace-nowrap text-[clamp(2.6rem,7.5vw,8.5rem)]"
          style={{
            margin: '0',
            letterSpacing: '-0.03em',
            textShadow: '0 8px 32px rgba(0,0,0,0.8)',
          }}
        >
          PRAGYA MEHTA<span className="text-white/60">.</span>
        </h1>

        {/* Short Introduction directly below the name with clear hierarchy */}
        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl text-[#E4E4E7] font-body font-light leading-relaxed">
            Creative Developer &amp; AI Systems Builder exploring the intersection of spatial web, applied machine learning, and minimalist digital aesthetics.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#969696] font-body leading-relaxed max-w-2xl">
            &ldquo;I build functional digital products with a designer&apos;s eye.&rdquo; Architecting research-driven systems, intuitive interfaces, and robust software architectures.
          </p>
        </div>

        {/* Supporting Actions & Tags */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('work');
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="btn-chrome px-7 py-3 rounded text-xs font-mono tracking-wider uppercase inline-flex items-center gap-2 no-underline font-semibold cursor-pointer"
          >
            <span>SELECTED WORK</span>
            <ArrowDown size={14} />
          </a>
          <div className="flex flex-wrap gap-2">
            <span className="tag-pill">SPATIAL WEB</span>
            <span className="tag-pill">THREE.JS</span>
            <span className="tag-pill">AGENTIC AI</span>
            <span className="tag-pill">FULL-STACK</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Minimal Scroll Indicator */}
      <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3 text-xs font-mono text-[#8E8E93]">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO NAVIGATE</span>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 text-xs font-mono text-[#E4E4E7] hover:text-white transition-colors group no-underline cursor-pointer"
          aria-label="Scroll to Point of View section"
        >
          <span className="tracking-widest uppercase text-[11px]">EXPLORE PERSPECTIVE</span>
          <div className="w-7 h-7 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
}
