import React from 'react';
import { ArrowUpRight, ExternalLink, Activity, Network, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, unfeaturedProjects } from '../data/projectsData';

export default function WorkScene({ onSelectProject, scrollProgress = 0 }) {
  // Clean responsive scaling without negative 3D depth to guarantee 100% reliable click hit-testing
  const getProjectDepth = (centerP) => {
    const delta = Math.abs(scrollProgress - centerP);
    const scale = Math.max(0.97, 1 - delta * 0.12);
    const opacity = Math.min(1, Math.max(0.7, 1 - delta * 1.5));
    return {
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      position: 'relative',
      zIndex: 20,
      pointerEvents: 'auto',
    };
  };

  return (
    <section
      id="work"
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem 6rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
      className="md:px-12 lg:px-20 relative z-20"
    >
      {/* Section Header Track with Generous Breathing Room */}
      <div className="flex flex-wrap items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-5 mb-20 gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">[ 03 // SELECTED WORK ]</span>
          <span className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            Technical Systems &amp; Artifacts
          </span>
        </div>
        <div className="font-mono text-xs text-[#8E8E93]">
          04 FEATURED PRODUCTIONS
        </div>
      </div>

      {/* Intro Header with Ample Vertical Space and Relaxed Line-Height */}
      <div className="max-w-4xl mb-24">
        <h2 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight mb-6">
          ENGINEERED SYSTEMS.
          <br />
          <span className="chrome-text">MEASURED IMPACT.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#969696] font-body leading-relaxed max-w-2xl">
          Four individually crafted projects spanning clinical healthcare nutrition, assistive computer vision, temporal graph intelligence, and luxury product presentation.
        </p>
      </div>

      {/* =========================================================================
          PROJECT 01: AZZURRA (Healthcare E-commerce / Medical Nutrition)
         ========================================================================= */}
      <div className="mb-36 group" style={getProjectDepth(0.42)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-14 border border-[rgba(255,255,255,0.1)] bg-[#080808] hover:border-[rgba(255,255,255,0.3)] transition-all duration-500">
          {/* Left: Project Editorial Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-0.5 rounded">
                  {projects[0].num}
                </span>
                <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase font-semibold">
                  {projects[0].category}
                </span>
              </div>

              <div className="mb-5">
                <a
                  href={projects[0].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white hover:text-[#38BDF8] tracking-tight leading-tight transition-colors no-underline inline-flex items-center gap-3 group/title"
                  aria-label="Visit Azzurra company website"
                >
                  <span>{projects[0].title}</span>
                  <ExternalLink size={24} className="opacity-40 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-body leading-relaxed mb-8">
                {projects[0].description}
              </p>

              {/* Azzurra Clinical E-Commerce Telemetry Box */}
              <div className="p-5 bg-[#0C0C0C] border border-[rgba(56,189,248,0.2)] rounded mb-8 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] mb-3 border-b border-white/5 pb-2">
                  <span className="text-white font-medium">MEDICAL NUTRITION STOREFRONT ARCHITECTURE</span>
                  <span className="text-[#38BDF8]">CLINICAL CATALOG</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center text-[10px]">
                  <div className="p-2.5 border border-white/10 bg-black/60">
                    <span className="block text-white font-semibold">DIETARY FILTER</span>
                    <span className="text-[#71717A]">Patient Needs</span>
                  </div>
                  <div className="p-2.5 border border-[#38BDF8]/20 bg-[#38BDF8]/5">
                    <span className="block text-[#38BDF8] font-semibold">PRESCRIPTION FLOW</span>
                    <span className="text-[#A1A1AA]">Secure Checkout</span>
                  </div>
                  <div className="p-2.5 border border-white/10 bg-black/60">
                    <span className="block text-white font-semibold">HIGH-PERF UI</span>
                    <span className="text-[#71717A]">Next.js / SSR</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {projects[0].technologies.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-[rgba(255,255,255,0.08)]">
              {projects[0].demoUrl && (
                <a
                  href={projects[0].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chrome px-6 py-3 rounded text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline text-white font-semibold"
                >
                  <span>VISIT COMPANY WEBSITE</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={() => onSelectProject(projects[0])}
                className="px-5 py-3 rounded border border-white/20 hover:border-white text-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer bg-white/5"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight size={14} />
              </button>

              {projects[0].githubUrl && (
                <a
                  href={projects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded border border-white/15 text-[#A1A1AA] hover:text-white hover:border-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline"
                >
                  <GithubIcon size={14} />
                  <span>VIEW SOURCE</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Azzurra Clinical Blue-and-White Interface Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] bg-[#050505] border border-[rgba(255,255,255,0.12)] p-6 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#71717A]">
              <span className="text-[#38BDF8] font-medium">[AZZURRA STOREFRONT DEMO]</span>
              <span>MED-NUTRITION v2.1</span>
            </div>

            {/* Stylized Clinical Storefront Visual Frame / Cover Frame */}
            {projects[0].coverImage ? (
              <a
                href={projects[0].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative my-auto w-full h-full min-h-[220px] max-h-[340px] overflow-hidden rounded border border-white/20 hover:border-[#38BDF8]/60 bg-black/60 block cursor-pointer transition-colors group/img"
                aria-label="Visit Azzurra company website"
              >
                <img
                  src={projects[0].coverImage}
                  alt={`${projects[0].title} Cover Frame`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-[1.03]"
                />
              </a>
            ) : (
              <div className="relative my-auto w-full h-52 flex items-center justify-center">
                <div className="w-full max-w-sm bg-[#0B0F17] border border-[#38BDF8]/30 p-5 rounded shadow-[0_15px_40px_rgba(56,189,248,0.1)] relative">
                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                      <span className="font-headline font-bold text-xs text-white tracking-wider">
                        AZZURRA MEDICAL
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#38BDF8] border border-[#38BDF8]/30 px-2 py-0.5 rounded">
                      CLINICAL CERTIFIED
                    </span>
                  </div>

                  {/* Simulated product showcase cards */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-white/5 border border-white/10 rounded">
                      <div className="w-full h-12 bg-gradient-to-br from-[#38BDF8]/20 to-transparent rounded mb-2 flex items-center justify-center">
                        <Activity size={18} className="text-[#38BDF8]" />
                      </div>
                      <span className="font-mono text-[10px] text-white block font-medium">NutriCare Plus</span>
                      <span className="font-mono text-[9px] text-[#71717A]">Specialized Protein</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded">
                      <div className="w-full h-12 bg-gradient-to-br from-white/10 to-transparent rounded mb-2 flex items-center justify-center">
                        <ShieldCheck size={18} className="text-white" />
                      </div>
                      <span className="font-mono text-[10px] text-white block font-medium">Electrolyte Pro</span>
                      <span className="font-mono text-[9px] text-[#71717A]">Clinical Hydration</span>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#A1A1AA] pt-2 border-t border-white/5">
                    <span>DISCOVERY: ACTIVE</span>
                    <span className="text-[#38BDF8]">CART: 2 ITEMS</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between font-mono text-[10px] text-[#71717A] pt-4 border-t border-white/5">
              <span>BLUE-AND-WHITE CLINICAL STOREFRONT</span>
              <span>PATIENT-FIRST UX</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 02: WHEELMATE (AI / Computer Vision / Accessibility)
         ========================================================================= */}
      <div className="mb-36 group" style={getProjectDepth(0.50)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-14 border border-[rgba(255,255,255,0.1)] bg-[#080808] hover:border-[rgba(255,255,255,0.3)] transition-all duration-500">
          {/* Left: Directional Vector Radar Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] bg-[#050505] border border-[rgba(255,255,255,0.08)] p-6 overflow-hidden flex flex-col justify-between order-2 lg:order-1">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#71717A]">
              <span>[VISION TELEMETRY &amp; SPATIAL RADAR]</span>
              <span>OPENCV STREAM · ACTIVE</span>
            </div>

            {/* Radar / Directional Concentric Rings / Cover Frame */}
            {projects[1].coverImage ? (
              <div className="relative my-auto w-full h-full min-h-[220px] max-h-[340px] overflow-hidden rounded border border-white/20 bg-black/60">
                <img
                  src={projects[1].coverImage}
                  alt={`${projects[1].title} Cover Frame`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div className="relative my-auto w-full h-56 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center relative">
                  <div className="w-36 h-36 rounded-full border border-dashed border-[rgba(255,255,255,0.25)] flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-[rgba(255,255,255,0.35)] flex items-center justify-center bg-white/5">
                      <span className="font-mono text-[10px] text-white">SAFETY 1.2M</span>
                    </div>
                  </div>

                  {/* Sweeping Radar Needle */}
                  <div
                    className="absolute w-24 h-[1px] bg-gradient-to-r from-transparent to-white top-1/2 left-1/2 origin-left"
                    style={{ transform: 'rotate(-45deg)' }}
                  />

                  {/* Obstacle Marker */}
                  <div className="absolute top-6 right-8 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/90 px-2.5 py-1 border border-white/40 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    <span>OBSTACLE: RAMP INCLINE</span>
                  </div>

                  {/* Path Trajectory */}
                  <div className="absolute bottom-6 left-10 font-mono text-[10px] text-[#A1A1AA] bg-black/90 px-2.5 py-1 border border-white/20">
                    <span>CLEAR PATH: 14° AZIMUTH</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between font-mono text-[10px] text-[#71717A] pt-4 border-t border-white/5">
              <span>LATENCY: &lt; 35MS INFERENCE</span>
              <span>HARDWARE INTEGRATION ASSIST</span>
            </div>
          </div>

          {/* Right: Project Editorial Details */}
          <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-0.5 rounded">
                  {projects[1].num}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase">
                  {projects[1].category}
                </span>
              </div>

              <h3 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5 leading-tight">
                {projects[1].title}
              </h3>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-body leading-relaxed mb-8">
                {projects[1].description}
              </p>

              <div className="p-5 bg-[#0F0F0F] border border-[rgba(255,255,255,0.06)] rounded mb-8 font-mono text-xs text-[#A1A1AA]">
                <span className="block text-[11px] text-[#71717A] mb-2.5 border-b border-white/5 pb-1 uppercase tracking-wider">
                  ACCESSIBILITY OBJECTIVE &amp; ARCHITECTURE
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Real-time machine-vision spatial cues paired with high-contrast tactile feedback, transforming environmental navigation for wheelchair users without complex hardware friction.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {projects[1].technologies.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-[rgba(255,255,255,0.08)]">
              <button
                onClick={() => onSelectProject(projects[1])}
                className="btn-chrome px-6 py-3 rounded text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer font-semibold"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight size={14} />
              </button>

              {projects[1].githubUrl && (
                <a
                  href={projects[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded border border-white/15 text-[#A1A1AA] hover:text-white hover:border-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline"
                >
                  <GithubIcon size={14} />
                  <span>VIEW SOURCE</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 03: EPISCOPE (AI / Research / Graph Neural Networks)
         ========================================================================= */}
      <div className="mb-36 group" style={getProjectDepth(0.58)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-14 border border-[rgba(255,255,255,0.1)] bg-[#080808] hover:border-[rgba(255,255,255,0.3)] transition-all duration-500">
          {/* Left: Project Editorial Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-0.5 rounded">
                  {projects[2].num}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase">
                  {projects[2].category}
                </span>
              </div>

              <div className="mb-3">
                <a
                  href={projects[2].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white hover:text-[#38BDF8] tracking-tight leading-tight transition-colors no-underline inline-flex items-center gap-3 group/title"
                  aria-label="Visit Episcope live deployment"
                >
                  <span>{projects[2].title}</span>
                  <ExternalLink size={24} className="opacity-40 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                </a>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#A1A1AA] uppercase tracking-wider mb-5">
                {projects[2].headline}
              </p>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-body leading-relaxed mb-8">
                {projects[2].description}
              </p>

              {/* Episcope Temporal Graph Intelligence Architecture */}
              <div className="p-5 bg-[#0C0C0C] border border-[rgba(255,255,255,0.1)] rounded mb-8 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] mb-3 border-b border-white/5 pb-2">
                  <span className="text-white font-medium">TEMPORAL GRAPH NEURAL NETWORK PIPELINE</span>
                  <span className="text-white/60">DYNAMIC GRAPH INTEL</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center text-[10px]">
                  <div className="p-2.5 border border-white/10 bg-black/60">
                    <span className="block text-white font-semibold">1. CONTACT EDGES</span>
                    <span className="text-[#71717A]">Dynamic Topology</span>
                  </div>
                  <div className="p-2.5 border border-white/20 bg-white/5">
                    <span className="block text-white font-semibold">2. TGNN LAYERS</span>
                    <span className="text-[#A1A1AA]">Spatio-Temporal GCN</span>
                  </div>
                  <div className="p-2.5 border border-white/10 bg-black/60">
                    <span className="block text-white font-semibold">3. HOTSPOT DETECTION</span>
                    <span className="text-[#71717A]">Luminance Clusters</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {projects[2].technologies.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-[rgba(255,255,255,0.08)]">
              {projects[2].demoUrl && (
                <a
                  href={projects[2].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chrome px-6 py-3 rounded text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline text-white font-semibold"
                >
                  <span>VISIT LIVE DEMO</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={() => onSelectProject(projects[2])}
                className="px-5 py-3 rounded border border-white/20 hover:border-white text-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer bg-white/5"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight size={14} />
              </button>

              {projects[2].githubUrl && (
                <a
                  href={projects[2].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded border border-white/15 text-[#A1A1AA] hover:text-white hover:border-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline"
                >
                  <GithubIcon size={14} />
                  <span>VIEW SOURCE</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Dynamic Temporal Graph Visualization */}
          <div className="lg:col-span-6 relative aspect-[4/3] bg-[#050505] border border-[rgba(255,255,255,0.08)] p-6 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#71717A]">
              <span>[TEMPORAL GRAPH TOPOLOGY]</span>
              <span>DYNAMIC NODES · t = 0..T</span>
            </div>

            {/* Monochromatic Graph Network Visual / Cover Frame */}
            {projects[2].coverImage ? (
              <a
                href={projects[2].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative my-auto w-full h-full min-h-[220px] max-h-[340px] overflow-hidden rounded border border-white/20 hover:border-white/60 bg-black/60 block cursor-pointer transition-colors group/img"
                aria-label="Visit Episcope live deployment"
              >
                <img
                  src={projects[2].coverImage}
                  alt={`${projects[2].title} Cover Frame`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-[1.03]"
                />
              </a>
            ) : (
              <div className="relative my-auto w-full h-56 flex items-center justify-center">
                <div className="relative w-64 h-48 border border-white/10 bg-[#0A0A0A] bg-grid-pattern flex items-center justify-center">
                  {/* Center Cluster Core Node */}
                  <div className="relative z-10 w-20 h-20 rounded-full border border-white/60 bg-black/80 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(255,255,255,0.2)]">
                    <span className="font-mono text-[8px] text-[#71717A]">HOTSPOT NODE</span>
                    <span className="font-mono text-xs text-white font-bold">CORE t_1</span>
                    <div className="w-2 h-2 rounded-full bg-white mt-1 animate-ping" />
                  </div>

                  {/* Satellite Graph Nodes & Connectors */}
                  <div className="absolute top-4 left-6 px-2.5 py-1 border border-white/30 bg-[#121212] text-[10px] font-mono text-white">
                    NODE v_04 · w: 0.91
                  </div>
                  <div className="absolute top-6 right-6 px-2.5 py-1 border border-white/20 bg-[#121212] text-[10px] font-mono text-[#D4D4D8]">
                    NODE v_12 · w: 0.84
                  </div>
                  <div className="absolute bottom-5 left-10 px-2.5 py-1 border border-white/20 bg-[#0E0E0E] text-[10px] font-mono text-[#A1A1AA]">
                    NODE v_09 · w: 0.76
                  </div>
                  <div className="absolute bottom-5 right-8 px-2.5 py-1 border border-white/40 bg-white/10 text-[10px] font-mono text-white">
                    CLUSTER CL_A · HIGH SENS
                  </div>

                  {/* Connecting Vector Lines */}
                  <div className="absolute w-44 h-[1px] bg-white/20 top-1/2 left-10 rotate-12 pointer-events-none" />
                  <div className="absolute w-36 h-[1px] bg-white/20 top-1/2 right-12 -rotate-25 pointer-events-none" />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between font-mono text-[10px] text-[#71717A] pt-4 border-t border-white/5">
              <span>RESEARCH AI: COMPLETED PROJECT</span>
              <span>DYNAMIC CONTACT TRANSMISSION</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 04: MAGPPIE (AI / Digital Product Experience)
         ========================================================================= */}
      <div className="mb-20 group" style={getProjectDepth(0.66)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-14 border border-[rgba(255,255,255,0.1)] bg-[#080808] hover:border-[rgba(255,255,255,0.3)] transition-all duration-500">
          {/* Left: Luxury Monolithic Chrome Geometry Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] bg-[#050505] border border-[rgba(255,255,255,0.08)] p-6 overflow-hidden flex flex-col justify-between order-2 lg:order-1">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#71717A]">
              <span>[LUXURY PRODUCT PRESENTATION]</span>
              <span>WELLNESS-KITCHEN // ARCHITECTURE</span>
            </div>

            {/* Monolithic Chrome Object Composition / Cover Frame */}
            {projects[3].coverImage ? (
              <a
                href={projects[3].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative my-auto w-full h-full min-h-[220px] max-h-[340px] overflow-hidden rounded border border-white/20 hover:border-white/60 bg-black/60 block cursor-pointer transition-colors group/img"
                aria-label="Visit Magppie company website"
              >
                <img
                  src={projects[3].coverImage}
                  alt={`${projects[3].title} Cover Frame`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.03]"
                />
              </a>
            ) : (
              <div className="relative my-auto w-full h-56 flex items-center justify-center">
                <div className="relative w-44 h-44 border border-white/40 bg-gradient-to-br from-[#1C1C1E] via-[#0A0A0A] to-[#2C2C2E] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(255,255,255,0.08)] transform rotate-6 hover:rotate-0 transition-transform duration-700">
                  <div className="w-28 h-28 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="font-headline font-bold text-xl text-white tracking-widest">
                      MAGPPIE
                    </span>
                  </div>
                  <div className="absolute -top-3 -right-3 font-mono text-[9px] text-white border border-white/30 px-2 py-0.5 bg-black">
                    AI INTERNSHIP
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between font-mono text-[10px] text-[#71717A] pt-4 border-t border-white/5">
              <span>HIGH-FIDELITY PRODUCT SHOWCASE</span>
              <span>BRAND TECHNOLOGY INTERSECTION</span>
            </div>
          </div>

          {/* Right: Project Editorial Details */}
          <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-0.5 rounded">
                  {projects[3].num}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase">
                  {projects[3].category}
                </span>
              </div>

              <div className="mb-5">
                <a
                  href={projects[3].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white hover:text-[#38BDF8] tracking-tight leading-tight transition-colors no-underline inline-flex items-center gap-3 group/title"
                  aria-label="Visit Magppie company website"
                >
                  <span>{projects[3].title}</span>
                  <ExternalLink size={24} className="opacity-40 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-body leading-relaxed mb-8">
                {projects[3].description}
              </p>

              <div className="p-5 bg-[#0F0F0F] border border-[rgba(255,255,255,0.06)] rounded mb-8 font-mono text-xs text-[#A1A1AA]">
                <span className="block text-[11px] text-[#71717A] mb-2.5 border-b border-white/5 pb-1 uppercase tracking-wider">
                  INTERNSHIP SCOPE &amp; CONTRIBUTIONS
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Prototyped generative AI experimentation workflows, crafted interactive web components for digital showcases, and translated high-end architectural aesthetics into digital mediums.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {projects[3].technologies.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-[rgba(255,255,255,0.08)]">
              {projects[3].demoUrl && (
                <a
                  href={projects[3].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chrome px-6 py-3 rounded text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline text-white font-semibold"
                >
                  <span>VISIT COMPANY WEBSITE</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={() => onSelectProject(projects[3])}
                className="px-5 py-3 rounded border border-white/20 hover:border-white text-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer bg-white/5"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight size={14} />
              </button>
              <span className="font-mono text-xs text-[#71717A]">ROLE: AI &amp; WEB INTERN</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CURRENTLY BUILDING / IN ACTIVE DEVELOPMENT: EZPARK (Separated & Quieter)
         ========================================================================= */}
      <div className="mt-28 pt-12 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
          <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase">
            CURRENTLY BUILDING // IN ACTIVE DEVELOPMENT
          </span>
        </div>

        <div className="p-8 md:p-10 border border-[rgba(255,255,255,0.08)] bg-[#0A0A0A] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#8E8E93] bg-white/5 px-2 py-0.5 rounded">
                  {unfeaturedProjects[0].num}
                </span>
                <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase">
                  {unfeaturedProjects[0].category} · WORK IN PROGRESS
                </span>
              </div>

              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-[#F5F5F5] mb-3">
                {unfeaturedProjects[0].title}
              </h3>

              <p className="text-sm sm:text-base text-[#969696] font-body leading-relaxed max-w-2xl mb-6">
                {unfeaturedProjects[0].description}
              </p>

              <div className="flex flex-wrap gap-2">
                {unfeaturedProjects[0].technologies.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-[#A1A1AA] rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
              <div className="font-mono text-xs text-[#71717A] text-left lg:text-right">
                <span className="block text-[#D4D4D8] font-medium">STATUS: IN PROGRESS</span>
                <span>NOT FEATURED AS FINISHED PRODUCTION</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(unfeaturedProjects[0])}
                  className="px-4 py-2.5 rounded border border-white/20 hover:border-white text-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer bg-white/5"
                >
                  <span>SPECIFICATION</span>
                  <ArrowUpRight size={14} />
                </button>

                {unfeaturedProjects[0].githubUrl && (
                  <a
                    href={unfeaturedProjects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded border border-white/15 text-[#A1A1AA] hover:text-white hover:border-white transition-all text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline"
                  >
                    <GithubIcon size={14} />
                    <span>VIEW REPOSITORY</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
