import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import IntroSequence from './components/IntroSequence';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import AboutScene from './components/AboutScene';
import WorkScene from './components/WorkScene';
import CapabilitiesScene from './components/CapabilitiesScene';
import ExperienceScene from './components/ExperienceScene';
import OutroScene from './components/OutroScene';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [introCompleted, setIntroCompleted] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntroCompleted(true);
    }
  }, []);

  // Manage scroll lock during intro
  useEffect(() => {
    if (!introCompleted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [introCompleted]);

  // Track global scroll progression
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
          setScrollProgress(Math.min(1, Math.max(0, currentProgress)));

          // Calculate active section in viewport
          const sections = ['hero', 'about', 'work', 'capabilities', 'experience', 'contact'];
          const scrollPos = window.scrollY + window.innerHeight * 0.35;

          for (const secId of sections) {
            const el = document.getElementById(secId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(secId);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white selection:text-black">
      {/* Signature Movexa Iridescent Orb Intro (Plays once, skippable) */}
      {!introCompleted && (
        <IntroSequence onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Analog Grain & Vignette */}
      <div className="film-grain" />
      <div className="vignette" />

      {/* Persistent 3D WebGL Background Canvas (Sparse 3-depth-layer white-dot parallax) */}
      <ThreeCanvas scrollProgress={scrollProgress} activeSection={activeSection} />

      {/* Persistent Navigation Header (Contains strictly PM Wordmark + 4 Nav Links) */}
      <div
        className={`transition-opacity duration-1000 ${
          introCompleted ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Navbar activeSection={activeSection} />
      </div>

      {/* Main Connected Scene Sequence with Spatial CSS 3D Depth */}
      <main
        className={`relative z-10 w-full perspective-2000 transition-opacity duration-1000 ${
          introCompleted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeroScene scrollProgress={scrollProgress} />
        <AboutScene scrollProgress={scrollProgress} />
        <WorkScene
          scrollProgress={scrollProgress}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <CapabilitiesScene scrollProgress={scrollProgress} />
        <ExperienceScene scrollProgress={scrollProgress} />
        <OutroScene scrollProgress={scrollProgress} />
      </main>

      {/* Expanded Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
