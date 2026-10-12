import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(5, 5, 5, 0.88)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        style={{
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0C0C0C',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
        }}
        className="p-6 sm:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-[#A1A1AA] hover:text-white hover:border-white transition-colors cursor-pointer bg-black/60"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Top Header Track */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#71717A] mb-4">
          <span>// PROJECT SPECIFICATION</span>
          <span>•</span>
          <span className="text-white">{project.num}</span>
          <span>•</span>
          <span className="text-[#A1A1AA] uppercase tracking-wider">{project.category}</span>
        </div>

        {/* Project Title */}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline font-bold text-3xl sm:text-4xl text-white hover:text-[#38BDF8] uppercase tracking-tight mb-2 inline-flex items-center gap-3 transition-colors no-underline group"
            aria-label={`Visit ${project.title} website`}
          >
            <span>{project.title}</span>
            <ExternalLink size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        ) : (
          <h2 id="modal-title" className="font-headline font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
            {project.title}
          </h2>
        )}
        <p className="font-mono text-sm text-[#A1A1AA] mb-8">
          {project.tagline}
        </p>

        {/* Project Cover Frame */}
        {project.coverImage && (
          project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-video max-h-72 mb-8 overflow-hidden rounded border border-white/15 hover:border-white/50 bg-black/60 transition-colors cursor-pointer group"
              aria-label={`Visit ${project.title} website`}
            >
              <img
                src={project.coverImage}
                alt={`${project.title} Cover`}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
            </a>
          ) : (
            <div className="w-full aspect-video max-h-72 mb-8 overflow-hidden rounded border border-white/15 bg-black/60">
              <img
                src={project.coverImage}
                alt={`${project.title} Cover`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )
        )}

        {/* Core Description */}
        <div className="p-6 bg-[#121212] border border-white/10 mb-8">
          <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider block mb-2">
            PROJECT OVERVIEW
          </span>
          <p className="text-base text-[#E4E4E7] font-body leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Role & Contribution */}
        <div className="mb-8">
          <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-2">
            MY ROLE &amp; SCOPE
          </span>
          <p className="font-body text-base text-white font-medium">
            {project.role}
          </p>
        </div>

        {/* Architecture & Engineering Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-8">
            <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-3">
              TECHNICAL ARCHITECTURE &amp; METHODOLOGY
            </span>
            <div className="space-y-3">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-black/40 border border-white/5">
                  <span className="font-mono text-xs text-white/50 mt-0.5">0{idx + 1}</span>
                  <span className="text-sm text-[#D4D4D8] font-body leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-10">
            <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-3">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links & Repository Verification */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chrome px-5 py-2.5 rounded text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline text-white font-semibold"
              >
                <GithubIcon size={14} />
                <span>VIEW REPOSITORY</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            ) : (
              <div className="flex items-center gap-2 font-mono text-xs text-[#71717A] bg-black/50 px-3 py-2 border border-white/5">
                <AlertCircle size={13} />
                <span>REPOSITORY: RESTRICTED / PRIVATE INTERNSHIP WORK</span>
              </div>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded border border-white/20 text-white hover:bg-white/10 transition-colors text-xs font-mono tracking-wider uppercase flex items-center gap-2 no-underline"
              >
                <span>{project.demoLabel ? project.demoLabel.toUpperCase() : 'VISIT SITE'}</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="font-mono text-xs text-[#52525B]">
                {project.githubUrl ? '[DEMO: LOCAL RUNTIME / VERIFIED REPOSITORY]' : '[NO EXTERNAL HOSTED DEMO]'}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/10 text-xs font-mono text-[#A1A1AA] hover:text-white bg-transparent cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
