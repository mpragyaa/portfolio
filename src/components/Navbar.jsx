import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection = 'hero' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.3s ease',
        }}
        className="smoked-glass px-6 py-4 md:px-12 md:py-5 flex items-center justify-between"
      >
        {/* Left: Compact PM / Pragya Mehta Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 text-left group bg-transparent border-none cursor-pointer p-0"
            aria-label="Scroll to top Pragya Mehta"
          >
            <div className="w-2 h-2 rounded-full bg-white transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_#ffffff]" />
            <span className="font-headline font-bold text-xs sm:text-sm tracking-wider text-[#F5F5F5] uppercase group-hover:text-white transition-colors">
              PRAGYA MEHTA.
            </span>
          </button>
        </div>

        {/* Right: Desktop Navigation Links (About, Work, Capabilities, Contact) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase" aria-label="Main Navigation">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'work', label: 'WORK' },
            { id: 'capabilities', label: 'CAPABILITIES' },
            { id: 'contact', label: 'CONTACT' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-mono text-xs ${
                activeSection === item.id
                  ? 'text-white font-medium border-b border-white pb-0.5'
                  : 'text-[#8E8E93] hover:text-[#E4E4E7]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#E4E4E7] hover:text-white bg-transparent border border-[rgba(255,255,255,0.1)] rounded-md cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            paddingTop: '5rem',
          }}
          className="elevated-glass md:hidden flex flex-col justify-between p-8"
        >
          <div className="flex flex-col gap-6 font-headline text-2xl tracking-tight text-[#E4E4E7]">
            {[
              { id: 'hero', label: 'INTRO' },
              { id: 'about', label: 'ABOUT' },
              { id: 'work', label: 'WORK' },
              { id: 'capabilities', label: 'CAPABILITIES' },
              { id: 'contact', label: 'CONTACT' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left bg-transparent border-none cursor-pointer text-[#D4D4D8] hover:text-white py-2 border-b border-[rgba(255,255,255,0.06)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
            <span>PRAGYA MEHTA</span>
          </div>
        </div>
      )}
    </>
  );
}
