import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ArrowRight } from 'lucide-react';
import GlassMonolith from './GlassMonolith';

/* ── Animated gold line that grows in on mount ── */
const GoldLine = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 120);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="relative h-[1px] my-8 overflow-hidden" style={{ maxWidth: '28rem' }}>
      <div
        className="absolute inset-y-0 left-0 bg-[#D4AF37] transition-all ease-out"
        style={{ width: `${width}%`, transitionDuration: '1.6s' }}
      />
      {/* ghost track */}
      <div className="absolute inset-0 bg-[#F5F5F5]/10" />
    </div>
  );
};

/* ── Main Hero ────────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Canvas – right half ──────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <GlassMonolith />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Left content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 w-full pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="w-full lg:w-[50%] xl:w-[46%]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex h-[1px] w-10 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.22em] uppercase">
              Senior-Led Studio · Cambodia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold text-[#F5F5F5] leading-none tracking-tight mb-0"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Digital
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: '1.5px #F5F5F5',
                letterSpacing: '0.04em',
              }}
            >
              Sovereignty.
            </span>
          </h1>

          {/* Growing gold line */}
          <GoldLine />

          {/* Subtext */}
          <p
            className="text-[#F5F5F5]/65 leading-relaxed mb-10 font-light"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', maxWidth: '30rem' }}
          >
            Engineering the foundations of Cambodian progress — bespoke platforms
            built with clarity, security, and velocity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#c49b28] text-[#1F4E79] font-extrabold text-sm tracking-widest uppercase transition-all shadow-[0_4px_24px_rgba(212,175,55,0.45)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transform"
            >
              Start Your Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#F5F5F5]/20 text-[#F5F5F5]/75 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 font-semibold text-sm tracking-widest uppercase transition-all"
            >
              View Our Work
              <ArrowRight size={14} className="opacity-60" />
            </a>
          </div>

          {/* Hover hint */}
          <p className="mt-8 text-[#F5F5F5]/25 text-[11px] tracking-widest uppercase">
            Hover the cube →
          </p>
        </div>
      </div>

      {/* ── Noise texture overlay for premium feel ───────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
    </section>
  );
};

export default Hero;
