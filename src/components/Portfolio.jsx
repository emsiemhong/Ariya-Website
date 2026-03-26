import React from 'react';
import { ExternalLink, Layers, Monitor, GraduationCap, LayoutDashboard, Building2, Code2, Users } from 'lucide-react';
import ImageSlider from './ImageSlider';

const Portfolio = () => {
  const templates = [
    {
      title: "Ariya Mart Management System (SaaS POS)",
      icon: LayoutDashboard,
      stack: "Angular, TypeScript, Java (Spring Boot), PostgreSQL",
      status: "In Development",
      description: "A modern multi-tenant POS system designed for small and medium businesses to manage sales, inventory, staff, and reports in one platform.",
      highlights: [
        "Multi-tenant SaaS architecture",
        "Real-time POS with barcode scanning",
        "Inventory & stock tracking",
        "Customer & loyalty management",
        "Promotion & discount system",
        "Analytics & business reports"
      ]
    },
    
    {
      title: "WMAD Community Platform",
      icon: Users,
      stack: "React, TypeScript, Node.js, Express, PostgreSQL, TailwindCSS",
      status: "Coming Soon",
      description: "A comprehensive community platform for WMAD students to showcase portfolios, share testimonials, connect with peers, and build their professional network.",
      highlights: [
        "Student portfolio showcase with voting system",
        "Event management system",
        "Testimonial and review platform",
        "Mentorship connections",
        "Mobile-responsive design",
        "Student profiles",
        "Admin dashboard for content management",
      ]
    },
    
    // {
    //   title: "Property Rental Engine",
    //   icon: Building2,
    //   stack: "Built with Next.js & PostgreSQL",
    //   status: "Coming Soon"
    // },
    // {
    //   title: "E-Learning Framework",
    //   icon: GraduationCap,
    //   stack: "Built with Java Spring Boot & Angular",
    //   status: "Coming Soon"
    // }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">

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
                      nhchkh.org
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <ImageSlider 
                      images={[
                        {
                          src: "/nhch.png",
                          alt: "nhch ngo"
                        },
                        {
                          src: "/nhch1.png", 
                          alt: "New Hope Children's Homes Platform"
                        }
                      ]}
                      autoPlay={true}
                      interval={4000}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium text-sm">
                Featured Client
              </div>
              <h3 className="text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">New Hope Children's Homes</h3>
              
              <div className="space-y-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">P</span>
                    The Problem
                  </h4>
                  <p className="text-gray-600">The organization had an outdated website that was hard to update, not mobile-friendly, and lacked tools for communication and content management.</p>
                </div>
                
                <div className="bg-[var(--color-primary)]/5 p-6 rounded-2xl border border-[var(--color-primary)]/10">
                  <h4 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center text-xs">S</span>
                    Our Solution
                  </h4>
                  <p className="text-gray-700">Built a modern web platform with a CMS, admin dashboard, and responsive design to simplify content updates, improve communication, and reduce maintenance costs.</p>
                </div>

              </div>
               {/* <button className="flex items-center gap-2 text-[var(--color-primary)] font-bold hover:gap-3 transition-all pt-2">
                View Case Study <ExternalLink size={18} />
              </button> */}
            </div>
          </div>
        </div>

        {/* Second Featured Client */}
        {/* <div className="mb-24">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(31,78,121,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden relative group shadow-lg">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-7 border-b border-gray-200 flex items-center px-4 gap-1.5 bg-gray-100 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 h-4 rounded bg-white/80 border border-gray-200 text-[8px] text-gray-400 flex items-center px-2">
                      mekongbank.com.kh
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/nhch.png"
                      alt="Mekong Bank Digital Platform"
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
              <h3 className="text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">Mekong Rural Bank</h3>
              
              <div className="space-y-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">P</span>
                    The Problem
                  </h4>
                  <p className="text-gray-600">The bank relied on legacy systems with poor mobile access, manual loan processing, and limited customer service tools that couldn't support rural customers' needs.</p>
                </div>
                
                <div className="bg-[var(--color-primary)]/5 p-6 rounded-2xl border border-[var(--color-primary)]/10">
                  <h4 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center text-xs">S</span>
                    Our Solution
                  </h4>
                  <p className="text-gray-700">Developed a comprehensive digital banking platform with mobile app, online loan management, and customer portal to serve rural communities across Cambodia.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
                   
                   {/* Description */}
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
                     {template.description}
                   </p>
                   
                   {/* Highlights */}
                   <div className="space-y-2 mb-6">
                     {template.highlights?.map((highlight, index) => (
                       <div key={index} className="flex items-start gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                         <span className="text-gray-600 text-sm">{highlight}</span>
                       </div>
                     ))}
                   </div>
                   
                   {/* Tech Stack */}
                   <div className="mt-auto pt-4 border-t border-gray-100">
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
