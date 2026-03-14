import React from 'react';
import { Mail, Linkedin, Shield } from 'lucide-react';

/* ── Telegram SVG ── */
const TelegramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* ── Faint SVG ribbon pattern (5% opacity) for visual unity with Hero ── */
const RibbonOverlay = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {[0.15, 0.28, 0.42, 0.58, 0.72, 0.86].map((yPct, i) => {
      const freq   = [1.2, 0.9, 1.5, 1.0, 0.7, 1.8][i];
      const phase  = i * 1.1;
      const amp    = [8, 12, 7, 10, 9, 6][i];
      // Build a path across 0→100% width with sine wave
      const pts = Array.from({ length: 60 }, (_, j) => {
        const x = (j / 59) * 100;
        const y = yPct * 100 + Math.sin((j / 59) * Math.PI * 2 * freq + phase) * amp / 10;
        return `${j === 0 ? 'M' : 'L'}${x},${y}`;
      });
      return (
        <path
          key={i}
          d={pts.join(' ')}
          fill="none"
          stroke="#D4AF37"
          strokeWidth={[0.6, 0.9, 0.5, 0.8, 0.7, 0.4][i]}
          strokeOpacity="0.18"
          vectorEffect="non-scaling-stroke"
        />
      );
    })}
  </svg>
);

/* ── Column heading ── */
const ColHead = ({ children }) => (
  <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#D4AF37] mb-5">
    {children}
  </h3>
);

/* ── Nav link ── */
const FLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-[#F5F5F5]/65 hover:text-[#D4AF37] transition-colors text-sm mb-3 last:mb-0"
  >
    {children}
  </a>
);

/* ── Social pill ── */
const Social = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2E5C4C] transition-all hover:scale-110"
  >
    {children}
  </a>
);

/* ════════════════════════════════════════════════════════ */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#2E5C4C] overflow-hidden">

      {/* 2px gold top border */}
      <div className="h-[2px] w-full bg-[#D4AF37]" />

      {/* Faint ribbon overlay — 5% for visual unity with Hero */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <RibbonOverlay />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#D4AF37]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/4 blur-3xl" />
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Identity */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-[#2E5C4C] font-extrabold text-xl leading-none">A</span>
              </div>
              <span className="text-[#F5F5F5] font-extrabold text-xl tracking-tight">Ariya</span>
            </div>
            <p className="text-[#F5F5F5]/60 text-sm leading-relaxed mb-6">
              Senior-Led Digital Excellence in Cambodia. We build the tools that
              power the next generation of Cambodian business.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/25">
              <Shield size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-semibold tracking-wide">Senior-Led Studio</span>
            </div>
          </div>

          {/* Col 2 — Sitemap */}
          <div>
            <ColHead>Sitemap</ColHead>
            <FLink href="#services">Solutions</FLink>
            <FLink href="#portfolio">Portfolio</FLink>
            <FLink href="#labs">Labs</FLink>
            <FLink href="#careers">Careers</FLink>
          </div>

          {/* Col 3 — Solutions */}
          <div>
            <ColHead>Solutions</ColHead>
            <FLink href="#services">Business Automation</FLink>
            <FLink href="#services">POS SaaS</FLink>
            <FLink href="#services">Web &amp; Mobile</FLink>
            <FLink href="#services">Cloud Infrastructure</FLink>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <ColHead>Get in Touch</ColHead>

            {/* Primary Telegram CTA */}
            <a
              href="https://t.me/ariyasolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full px-5 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c49b28] text-[#2E5C4C] font-extrabold text-sm transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 transform mb-4"
            >
              <TelegramIcon size={18} />
              Discuss on Telegram
            </a>

            {/* Email */}
            <a
              href="mailto:hello@ariyasolutions.com"
              className="flex items-center gap-2 text-[#F5F5F5]/55 hover:text-[#D4AF37] transition-colors text-sm mb-5 group"
            >
              <Mail size={14} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors flex-shrink-0" />
              hello@ariyasolutions.com
            </a>

            {/* Trust note */}
            <div className="flex items-start gap-2 p-3 rounded-xl bg-white/6 border border-white/10">
              <Shield size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="text-[#F5F5F5]/55 text-xs leading-snug">
                Directly supervised by our{' '}
                <span className="text-[#D4AF37] font-semibold">Senior Lead</span>{' '}
                — 10+ years of industry experience.
              </p>
            </div>
          </div>
        </div>

        {/* ── Sub-footer ── */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <Social href="https://t.me/ariyasolutions" label="Telegram">
              <TelegramIcon size={16} />
            </Social>
            <Social href="https://linkedin.com/company/ariyasolutions" label="LinkedIn">
              <Linkedin size={16} />
            </Social>
            <Social href="https://facebook.com/ariyasolutions" label="Facebook">
              <FacebookIcon size={16} />
            </Social>
          </div>

          {/* Copyright */}
          <p className="text-[#F5F5F5]/35 text-xs text-center sm:text-right">
            © {year}{' '}
            <span className="text-[#F5F5F5]/55 font-medium">Ariya Software Solutions.</span>
            {' '}All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
