import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NAV_LINKS = [
  { en: 'Solutions',  km: 'ដំណោះស្រាយ', href: '/#services'  },
  { en: 'Website Templates',  km: 'គេហវិដ្ល',       href: '/website-solutions' },
  { en: 'Portfolio',  km: 'ស្នាដៃ',       href: '/#portfolio' },
  { en: 'About',      km: 'អំពីយើង',      href: '/#story'    },
  // { en: 'Contact',    km: 'ទាក់ទង',       href: '/#contact'   },
];

const BurgerIcon = ({ open }) => (
  <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
    <span className="block h-[2px] rounded-full transition-all duration-300 origin-left bg-current"
      style={{ transform: open ? 'rotate(45deg) translateY(-1px)' : 'none' }} />
    <span className="block h-[2px] rounded-full transition-all duration-300 bg-current"
      style={{ opacity: open ? 0 : 1 }} />
    <span className="block h-[2px] rounded-full transition-all duration-300 origin-left bg-current"
      style={{ transform: open ? 'rotate(-45deg) translateY(1px)' : 'none', width: open ? '100%' : '75%' }} />
  </div>
);

const Navigation = () => {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const barBg     = scrolled
    ? 'bg-white/70 backdrop-blur-[20px] border-b border-[#D4AF37]/20 shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled ? 'text-[#1F4E79]' : 'text-[#F5F5F5]';
  const logoText  = scrolled ? 'text-[#1F4E79]' : 'text-[#F5F5F5]';
  const linkHover = 'hover:text-[#D4AF37]';
  const py        = scrolled ? 'py-3' : 'py-5';

  return (
    <>
      {/* ── Fixed nav bar ───────────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${barBg} ${py}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" onClick={close}>
            {/* Desktop Logo */}
            <img 
              src={scrolled ? "/final-logo-A.png" : "/Ariya-logo-white-remove.png"} 
              alt="Ariya Logo" 
              className="hidden lg:block w-35 h-20 rounded-lg flex-shrink-0 object-contain"
            />
            {/* Mobile Logo */}
            <img 
              src={scrolled ? "/final-logo-screen.png" : "/Ariya-icon-logo-removebg.png"} 
              alt="Ariya Logo" 
              className="lg:hidden w-16 h-20 rounded-lg flex-shrink-0 object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l.en}
                href={l.href}
                className={`font-semibold text-sm tracking-widest uppercase transition-colors duration-300 ${textColor} ${linkHover}`}
              >
                {l.en}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#c49b28] text-[#1F4E79] font-bold text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transform"
            >
              Start Journey
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 z-[60] transition-colors duration-300 ${textColor}`}
          >
            <BurgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* ── Full-screen overlay menu ──────────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500"
        style={{
          opacity:              menuOpen ? 1 : 0,
          pointerEvents:        menuOpen ? 'auto' : 'none',
          background:           'linear-gradient(135deg, rgba(31,78,121,0.97) 0%, rgba(212,175,55,0.15) 100%)',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <button
          onClick={close}
          className={`absolute top-6 right-6 text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-all duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Close menu"
        >
          {/* <X size={32} /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg> */}
        </button>

        <div className="w-12 h-[2px] bg-[#D4AF37] mb-12 rounded-full" />

        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.en}
              href={l.href}
              onClick={close}
              className="group flex flex-col items-center gap-1"
              style={{
                transform:       menuOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity:         menuOpen ? 1 : 0,
                transition:      'transform 0.4s ease, opacity 0.4s ease',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-widest group-hover:text-[#D4AF37] transition-colors uppercase">
                {l.en}
              </span>
              <span className="text-xs font-semibold text-[#D4AF37]/60 tracking-widest group-hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
                {l.km}
              </span>
            </a>
          ))}
        </nav>

        <div className="w-12 h-[2px] bg-[#D4AF37] mt-12 rounded-full" />
        <p className="mt-8 text-[#F5F5F5]/25 text-[11px] tracking-widest uppercase">
          Ariya Software Solutions · Phnom Penh
        </p>
      </div>
    </>
  );
};

export default Navigation;
