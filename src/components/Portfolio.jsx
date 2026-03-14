import React from 'react';
import { ExternalLink, Layers, Monitor, GraduationCap, LayoutDashboard, Building2, Code2 } from 'lucide-react';

const Portfolio = () => {
  const templates = [
    {
      title: "SME POS System (Internal Prototype)",
      icon: LayoutDashboard,
      stack: "Built with React & Node.js",
      status: "Work in Progress"
    },
    {
      title: "Property Rental Engine",
      icon: Building2,
      stack: "Built with Next.js & PostgreSQL",
      status: "Coming Soon"
    },
    {
      title: "E-Learning Framework",
      icon: GraduationCap,
      stack: "Built with Java Spring Boot & Angular",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">

      {/* Faint 2% grid BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31,78,121,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(31,78,121,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Proven Results</span>
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79] mb-5 tracking-tight">Our Work</h2>
          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Real solutions delivering measurable results for Cambodian businesses.
          </p>
        </div>

        {/* Section A: Featured Client */}
        <div className="mb-24">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(31,78,121,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden relative group shadow-lg">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-7 border-b border-gray-200 flex items-center px-4 gap-1.5 bg-gray-100 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 h-4 rounded bg-white/80 border border-gray-200 text-[8px] text-gray-400 flex items-center px-2">
                      cita.edu.kh/dashboard
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/cita-dashboard.png"
                      alt="CITA Institute Academy Dashboard"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium text-sm">
                Featured Client
              </div>
              <h3 className="text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">CITA Institute</h3>
              
              <div className="space-y-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">P</span>
                    The Problem
                  </h4>
                  <p className="text-gray-600">Reliance on manual processes and fragmented systems leading to administrative bottlenecks and a disjointed student experience.</p>
                </div>
                
                <div className="bg-[var(--color-primary)]/5 p-6 rounded-2xl border border-[var(--color-primary)]/10">
                  <h4 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center text-xs">S</span>
                    Our Solution
                  </h4>
                  <p className="text-gray-700">A unified Modern Web Platform that automates onboarding, consolidates data, and delivers a seamless, high-performance portal for staff and students.</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-[var(--color-primary)] font-bold hover:gap-3 transition-all pt-2">
                View Case Study <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Section B: Ariya Labs (The Templates) */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ariya Labs: Standardized Solutions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Foundational engines built with enterprise architecture, ready to be customized for your specific business needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, idx) => (
               <div 
                 key={idx} 
                 className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
               >
                 <div className="absolute top-6 right-6 z-10">
                   <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-bold rounded-full shadow-sm">
                     {template.status}
                   </span>
                 </div>
                 
                 <div className="relative z-10 flex-1">
                   {/* Icon Wrapper */}
                   <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                     <template.icon 
                       className="w-10 h-10 text-[#1F4E79] stroke-[1.5] group-hover:scale-110 transition-transform duration-300"
                     />
                   </div>
                   
                   <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1F4E79] transition-colors pr-16">{template.title}</h4>
                   
                   {/* Hover reveal block */}
                   <div className="mt-8 pt-6 border-t border-gray-100 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                     <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                       <Code2 size={16} className="text-[var(--color-accent)]" /> 
                       {template.stack}
                     </div>
                   </div>
                 </div>
                 
                 {/* Decorative background shape */}
                 <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
