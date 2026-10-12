import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function OutroScene({ scrollProgress = 0 }) {
  const [copied, setCopied] = useState(false);
  const email = 'pragyamehta119@gmail.com';

  const pullbackZ = scrollProgress > 0.88 ? (scrollProgress - 0.88) * -250 : 0;

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch (e) {
      // fallback silent
    }
  };

  const copyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem 4rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
        transform: `translate3d(0, 0, ${pullbackZ}px)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="md:px-12 lg:px-20 flex flex-col justify-between preserve-3d"
    >
      {/* Top Header Track */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">[ 05 // THE OUTRO ]</span>
          <span className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            Collaboration &amp; Connect
          </span>
        </div>
        <div className="font-mono text-xs text-[#71717A] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/60" />
          <span>OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>

      {/* Main Closing Typographic Statement */}
      <div className="my-auto py-12">
        <p className="font-mono text-xs sm:text-sm text-[#A1A1AA] uppercase tracking-[0.25em] mb-4">
          END OF SCENE SEQUENCE // NEXT HORIZON
        </p>

        <h2 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase chrome-text">
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          INTERESTING.
        </h2>

        <p className="mt-8 text-xl sm:text-2xl text-[#A1A1AA] font-body max-w-xl font-light">
          Have an idea worth exploring? Let&apos;s connect.
        </p>

        {/* Primary Functional Contact Actions */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {/* Direct Email Link */}
          <a
            href={`mailto:${email}`}
            className="btn-chrome px-8 py-4 rounded-full font-mono text-xs tracking-wider uppercase flex items-center gap-3 text-white no-underline font-semibold"
          >
            <Mail size={16} />
            <span>{email}</span>
            <ArrowUpRight size={14} className="opacity-70" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="px-5 py-4 rounded-full border border-[rgba(255,255,255,0.15)] bg-[#0C0C0C] text-[#D4D4D8] hover:text-white hover:border-white/40 transition-all font-mono text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
            aria-label="Copy email address"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY'}</span>
          </button>
        </div>

        {/* External Social Links */}
        <div className="mt-12 flex flex-wrap items-center gap-8 font-mono text-xs text-[#A1A1AA]">
          <a
            href="https://github.com/mpragyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D4D4D8] hover:text-white transition-colors no-underline group"
          >
            <GithubIcon size={15} />
            <span className="tracking-widest uppercase">GITHUB</span>
            <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://www.linkedin.com/in/pragya-mehta-a8253a324/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D4D4D8] hover:text-white transition-colors no-underline group"
          >
            <LinkedinIcon size={15} />
            <span className="tracking-widest uppercase">LINKEDIN</span>
            <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-[#52525B] hidden sm:inline">•</span>

          <span className="text-[#71717A] tracking-wider">
            DELHI / NCR, INDIA
          </span>
        </div>
      </div>

      {/* Colophon & Return to Summit */}
      <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-6 font-mono text-[11px] text-[#71717A]">
        <div>
          <span>© 2026 PRAGYA MEHTA. ALL RIGHTS RESERVED.</span>
          <span className="mx-2 hidden sm:inline">|</span>
          <span className="hidden sm:inline">ENGINEERED WITH REACT, THREE.JS &amp; GSAP</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#D4D4D8] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
        >
          <span className="tracking-widest uppercase">RETURN TO SUMMIT</span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
            <ArrowUp size={12} />
          </div>
        </button>
      </div>
    </footer>
  );
}
