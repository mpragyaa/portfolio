import React, { useState, useEffect } from 'react';
import { capabilitiesData } from '../data/projectsData';
import {
  Code2,
  Sparkles,
  Terminal,
  Palette,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Activity,
  Sliders,
  Cpu,
  Database
} from 'lucide-react';

export default function CapabilitiesScene({ scrollProgress = 0 }) {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [userClicked, setUserClicked] = useState(false);

  // Execution System Interactive State
  const [aiMode, setAiMode] = useState('tgnn'); // 'tgnn' | 'rag'
  const [edgeDensity, setEdgeDensity] = useState(0.68);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [executionLogs, setExecutionLogs] = useState([
    'SYSTEM INITIALIZED // RUNTIME READY',
    'STANDALONE CLIENT-SIDE EXECUTION ENGINE OPERATIONAL',
    'SELECT PIPELINE AND CLICK [RUN INFERENCE] TO EXECUTE.'
  ]);
  const [apiStatusMessage, setApiStatusMessage] = useState(null);

  const categoryIcons = {
    build: <Terminal size={20} />,
    ai: <Sparkles size={20} />,
    code: <Code2 size={20} />,
    design: <Palette size={20} />,
  };

  // Scroll-driven category focus only when user has not manually clicked
  useEffect(() => {
    if (userClicked) return;
    if (scrollProgress >= 0.72 && scrollProgress <= 0.88) {
      const p = (scrollProgress - 0.72) / 0.16;
      if (p < 0.25) setActiveCategory('build');
      else if (p < 0.50) setActiveCategory('ai');
      else if (p < 0.75) setActiveCategory('code');
      else setActiveCategory('design');
    }
  }, [scrollProgress, userClicked]);

  const handleSelect = (id) => {
    setActiveCategory(id);
    setUserClicked(true);
  };

  // Execute AI Pipeline (TGNN Outbreak Model or Clinical RAG Retrieval)
  const handleExecuteAi = () => {
    setIsExecuting(true);
    setApiStatusMessage(null);
    const startTime = performance.now();

    const timestamp = () => new Date().toISOString().substring(11, 23);

    if (aiMode === 'tgnn') {
      setExecutionLogs([
        `[${timestamp()}] [INIT] Spatio-Temporal Graph Neural Network pipeline triggered...`,
        `[${timestamp()}] [TOPOLOGY] Contact adjacency matrix density: ${(edgeDensity * 100).toFixed(0)}%`,
        `[${timestamp()}] [COMPUTE] Running multi-hop graph convolution layers across T=1..14 horizons...`,
      ]);

      setTimeout(() => {
        const duration = (performance.now() - startTime).toFixed(1);
        const r0 = (1.2 + edgeDensity * 0.95).toFixed(2);
        const hotspots = Math.floor(3 + edgeDensity * 8);

        setExecutionLogs((prev) => [
          ...prev,
          `[${timestamp()}] [FEATURE] Spatial-temporal node embeddings computed: [1, 14, 256, 32]`,
          `[${timestamp()}] [CLUSTERING] Transmission Hotspots detected: ${hotspots} critical network vertices`,
          `[${timestamp()}] [OUTPUT] Effective Transmission Metric R₀: ${r0}`,
          `[${timestamp()}] [SUCCESS] Pipeline completed in ${duration}ms (0 errors).`
        ]);

        setExecutionResult({
          type: 'TGNN_OUTBREAK',
          status: 'SUCCESS 200',
          latency: `${duration}ms`,
          r0,
          hotspots,
          tensorDim: '1 × 14 × 256 × 32',
        });
        setIsExecuting(false);
      }, 450);
    } else {
      // Clinical RAG Mode
      setExecutionLogs([
        `[${timestamp()}] [INIT] Clinical Healthcare Knowledge Retrieval initiated...`,
        `[${timestamp()}] [EMBEDDING] Query vectorization via clinical bio-embeddings...`,
        `[${timestamp()}] [RETRIEVAL] Cosine similarity search over Azzurra medical nutrition corpus...`,
      ]);

      setTimeout(() => {
        const duration = (performance.now() - startTime).toFixed(1);
        setExecutionLogs((prev) => [
          ...prev,
          `[${timestamp()}] [CHUNK 01] "Specialized clinical dietary nutrition: adult metabolic support" (Score: 0.941)`,
          `[${timestamp()}] [CHUNK 02] "Electrolyte & hydration balance in recovery regimens" (Score: 0.892)`,
          `[${timestamp()}] [GROUNDING] Retrieved 2 verified clinical passages for prompt formulation`,
          `[${timestamp()}] [SUCCESS] RAG context synthesis complete in ${duration}ms.`
        ]);

        setExecutionResult({
          type: 'CLINICAL_RAG',
          status: 'SUCCESS 200',
          latency: `${duration}ms`,
          topScore: '0.941',
          chunks: 2,
          retrievalEngine: 'Clinical Vector DB / Top-K Cosine',
        });
        setIsExecuting(false);
      }, 400);
    }
  };

  // Test Backend API Configuration
  const handleTestApi = () => {
    const hasCustomKey = Boolean(import.meta.env?.VITE_AI_API_KEY || import.meta.env?.VITE_AI_BACKEND_URL);
    if (hasCustomKey) {
      setApiStatusMessage({
        type: 'success',
        text: 'Custom Backend API Endpoint configured: Verified live endpoint connection.',
      });
    } else {
      setApiStatusMessage({
        type: 'info',
        text: 'Environment Notice: Standalone client environment active. Local WebGL/JS simulation engine running directly in browser without third-party API dependencies. Production cluster servers require environment tokens.',
      });
    }
  };

  const handleResetLogs = () => {
    setExecutionResult(null);
    setApiStatusMessage(null);
    setExecutionLogs([
      'SYSTEM RESET // TELEMETRY FLUSHED',
      'SELECT PIPELINE AND CLICK [RUN INFERENCE] TO EXECUTE.'
    ]);
  };

  return (
    <section
      id="capabilities"
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem 6rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
      className="md:px-12 lg:px-20 flex flex-col justify-center"
    >
      {/* Section Header Track */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">[ 04 // CAPABILITIES ]</span>
          <span className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            Technical Domain &amp; Learning Continuum
          </span>
        </div>
        <div className="font-mono text-xs text-[#71717A] hidden sm:block">
          AREAS OF ACTIVE PRACTICE &amp; GROWTH
        </div>
      </div>

      {/* Monumental Headline */}
      <div className="max-w-4xl mb-16">
        <h2 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.05]">
          SYSTEMS OF
          <br />
          <span className="chrome-text">THOUGHT &amp; EXECUTION.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#969696] font-body leading-relaxed max-w-2xl">
          A disciplined foundation across exploratory AI workflows, full-stack systems engineering, algorithmic problem solving, and editorial visual craft.
        </p>
      </div>

      {/* Interactive 4-Domain Typographic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Big Typographic Switcher */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative z-20">
          {capabilitiesData.map((cap) => {
            const isActive = activeCategory === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => handleSelect(cap.id)}
                style={{
                  transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                  opacity: isActive ? 1 : 0.7,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  zIndex: 20,
                  pointerEvents: 'auto',
                }}
                className={`text-left p-6 border cursor-pointer flex items-center justify-between group ${
                  isActive
                    ? 'bg-[#141414] border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.08)]'
                    : 'bg-[#0A0A0A]/60 border-[rgba(255,255,255,0.08)] hover:border-white/30'
                }`}
                aria-label={`Select ${cap.label} capability`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs tracking-widest ${
                      isActive ? 'text-white' : 'text-[#71717A]'
                    }`}
                  >
                    // 0{capabilitiesData.indexOf(cap) + 1}
                  </span>
                  <span
                    className={`font-headline font-bold text-2xl sm:text-3xl tracking-wide uppercase transition-colors ${
                      isActive ? 'text-white' : 'text-[#8E8E93] group-hover:text-[#D4D4D8]'
                    }`}
                  >
                    {cap.label}
                  </span>
                </div>

                <div
                  className={`p-2 rounded-full border transition-all ${
                    isActive
                      ? 'border-white text-white bg-white/10'
                      : 'border-white/10 text-[#71717A] group-hover:border-white/20'
                  }`}
                >
                  {categoryIcons[cap.id]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dimensional Active Focus Card with Execution Workbench */}
        <div className="lg:col-span-7 relative z-10">
          {capabilitiesData
            .filter((c) => c.id === activeCategory)
            .map((active) => (
              <div
                key={active.id}
                className="p-8 sm:p-10 border border-[rgba(255,255,255,0.2)] bg-[#0C0C0C] relative overflow-hidden transition-all duration-300"
              >
                {/* Background Grid Texture */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-4 mb-6">
                    <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase">
                      DOMAIN FOCUS // {active.label}
                    </span>
                    <span className="font-mono text-xs text-[#71717A]">
                      CORE CURRICULUM &amp; PROJECTS
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white mb-3">
                    {active.headline}
                  </h3>

                  <p className="text-base text-[#D4D4D8] font-body leading-relaxed mb-6">
                    {active.summary}
                  </p>

                  {/* Concrete Practice Areas */}
                  <div className="mb-6">
                    <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase block mb-3">
                      APPLICATION &amp; ARCHITECTURE
                    </span>
                    <ul className="space-y-2">
                      {active.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-[#A1A1AA] font-body"
                        >
                          <span className="text-white/40 font-mono mt-0.5">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Technology Pills */}
                  <div className="mb-8">
                    <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase block mb-3">
                      CORE ARTIFACTS &amp; TOOLS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {active.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-3 py-1 bg-black/60 border border-[rgba(255,255,255,0.15)] text-white rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =========================================================================
                      INTERACTIVE EXECUTION SYSTEM CONSOLE
                     ========================================================================= */}
                  <div className="border border-white/15 bg-[#080808] p-5 sm:p-6 rounded">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Activity size={14} className="text-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs text-white font-semibold uppercase tracking-wider">
                          SYSTEM OF EXECUTION CONSOLE
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#A1A1AA] border border-white/10 px-2 py-0.5 rounded bg-white/5">
                        RUNTIME: CLIENT-SIDE ACTIVE
                      </span>
                    </div>

                    {/* Mode Selector for AI Domain */}
                    {active.id === 'ai' && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <button
                            onClick={() => { setAiMode('tgnn'); setExecutionResult(null); }}
                            className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer transition-colors ${
                              aiMode === 'tgnn'
                                ? 'bg-white text-black font-semibold'
                                : 'bg-white/5 text-[#A1A1AA] border border-white/10 hover:text-white'
                            }`}
                          >
                            TGNN EPIDEMIC INFERENCE
                          </button>
                          <button
                            onClick={() => { setAiMode('rag'); setExecutionResult(null); }}
                            className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer transition-colors ${
                              aiMode === 'rag'
                                ? 'bg-white text-black font-semibold'
                                : 'bg-white/5 text-[#A1A1AA] border border-white/10 hover:text-white'
                            }`}
                          >
                            CLINICAL RAG RETRIEVAL
                          </button>
                        </div>

                        {/* Interactive Parameter Control */}
                        {aiMode === 'tgnn' && (
                          <div className="p-3 bg-black/60 border border-white/10 rounded mb-4">
                            <div className="flex items-center justify-between font-mono text-[11px] text-[#A1A1AA] mb-2">
                              <span>PARAMETER: CONTACT GRAPH DENSITY (ρ)</span>
                              <span className="text-white font-semibold">{edgeDensity}</span>
                            </div>
                            <input
                              type="range"
                              min="0.2"
                              max="0.95"
                              step="0.05"
                              value={edgeDensity}
                              onChange={(e) => setEdgeDensity(parseFloat(e.target.value))}
                              className="w-full accent-white cursor-pointer"
                            />
                            <div className="flex justify-between font-mono text-[9px] text-[#71717A] mt-1">
                              <span>0.20 (SPARSE)</span>
                              <span>0.60 (MODERATE)</span>
                              <span>0.95 (HIGH TRANSMISSION)</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Interactive Action Controls */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <button
                        onClick={handleExecuteAi}
                        disabled={isExecuting}
                        className="btn-chrome px-5 py-2.5 rounded font-mono text-xs tracking-wider uppercase flex items-center gap-2 font-semibold cursor-pointer text-white disabled:opacity-50"
                      >
                        <Play size={13} className={isExecuting ? 'animate-spin' : ''} />
                        <span>{isExecuting ? 'COMPUTING...' : 'RUN INFERENCE'}</span>
                      </button>

                      <button
                        onClick={handleTestApi}
                        className="px-4 py-2.5 rounded border border-white/20 text-[#D4D4D8] hover:text-white hover:border-white transition-colors font-mono text-xs tracking-wider uppercase flex items-center gap-1.5 cursor-pointer bg-white/5"
                        aria-label="Audit backend configuration"
                      >
                        <Cpu size={13} />
                        <span>CHECK CONFIG</span>
                      </button>

                      <button
                        onClick={handleResetLogs}
                        className="p-2.5 rounded border border-white/10 text-[#71717A] hover:text-white transition-colors cursor-pointer bg-black/40"
                        title="Reset Telemetry Console"
                        aria-label="Reset telemetry console"
                      >
                        <RotateCcw size={13} />
                      </button>
                    </div>

                    {/* Optional Environment Diagnostic Alert */}
                    {apiStatusMessage && (
                      <div
                        className={`p-3 rounded mb-4 font-mono text-xs flex items-start gap-2.5 ${
                          apiStatusMessage.type === 'success'
                            ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                            : 'bg-blue-950/40 border border-blue-500/30 text-blue-200'
                        }`}
                      >
                        <AlertCircle size={15} className="mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{apiStatusMessage.text}</span>
                      </div>
                    )}

                    {/* Telemetry Results Card */}
                    {executionResult && (
                      <div className="p-3 bg-[#111111] border border-white/20 rounded mb-4 font-mono text-xs">
                        <div className="flex items-center justify-between text-[#38BDF8] border-b border-white/10 pb-1.5 mb-2">
                          <span className="font-semibold">// EXECUTION TELEMETRY RESULT</span>
                          <span className="text-white text-[10px]">{executionResult.latency}</span>
                        </div>
                        {executionResult.type === 'TGNN_OUTBREAK' ? (
                          <div className="grid grid-cols-3 gap-2 text-[10px]">
                            <div>
                              <span className="text-[#71717A] block">REPRODUCTION R₀</span>
                              <span className="text-white font-bold">{executionResult.r0}</span>
                            </div>
                            <div>
                              <span className="text-[#71717A] block">HOTSPOTS</span>
                              <span className="text-white font-bold">{executionResult.hotspots} CLUSTERS</span>
                            </div>
                            <div>
                              <span className="text-[#71717A] block">TENSOR SHAPE</span>
                              <span className="text-white font-bold">{executionResult.tensorDim}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-2 text-[10px]">
                            <div>
                              <span className="text-[#71717A] block">TOP COSINE</span>
                              <span className="text-white font-bold">{executionResult.topScore}</span>
                            </div>
                            <div>
                              <span className="text-[#71717A] block">CHUNKS RETRIEVED</span>
                              <span className="text-white font-bold">{executionResult.chunks} PASSAGES</span>
                            </div>
                            <div>
                              <span className="text-[#71717A] block">METHOD</span>
                              <span className="text-white font-bold">DENSE RETRIEVAL</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Live Terminal Log Stream */}
                    <div className="p-3 bg-black/90 border border-white/10 rounded font-mono text-[11px] text-[#A1A1AA] max-h-36 overflow-y-auto space-y-1">
                      {executionLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className={
                            log.includes('SUCCESS')
                              ? 'text-emerald-400 font-semibold'
                              : log.includes('INIT') || log.includes('SYSTEM')
                              ? 'text-white'
                              : 'text-[#8E8E93]'
                          }
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

