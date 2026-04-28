import React from 'react';
import { MonitorSmartphone, GitMerge, Smartphone } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    iconColor: '#1F4E79',
    title: 'Web Presence',
    titleKm: 'វត្តមានលើអ៊ីនធឺណិត',
    description: 'Professional sites designed to elevate your brand awareness and build trust with your customers.',
  },
  {
    icon: GitMerge,
    iconColor: '#D4AF37',
    title: 'Workflow Automation',
    titleKm: 'ការងារធ្វើដោយស្វ័យប្រវត្តិ',
    description: 'Streamlining your internal business processes to save time, reduce errors, and increase efficiency.',
  },
  {
    icon: Smartphone,
    iconColor: '#1F4E79',
    title: 'Mobile Innovation',
    titleKm: 'គំនិតថ្មីៗលើទូរស័ព្ទ',
    description: 'Custom, high-performance mobile applications built with Flutter to engage users on the go.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#F5F5F5]">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31,78,121,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(31,78,121,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-56 rounded-full bg-[#1F4E79]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
              What We Build
            </span>
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79] mb-5 tracking-tight">
            Our Solutions
          </h2>
          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Tailored technology services designed specifically for the unique
            challenges of modern Cambodian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="
                  group relative bg-white rounded-[2rem] p-10
                  border border-gray-100
                  shadow-[0_4px_24px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_8px_40px_rgba(31,78,121,0.12)]
                  hover:border-[#D4AF37]
                  hover:-translate-y-2
                  transition-all duration-300
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.6), 0 0 24px rgba(212,175,55,0.12)' }} />

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300 mx-auto"
                >
                  <Icon 
                    className="w-12 h-12 text-[#1F4E79] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-[#1F4E79] transition-colors mb-1 text-center">
                  {service.title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold tracking-widest mb-4 text-center"
                  style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
                  {service.titleKm}
                </p>
                <p className="text-gray-500 leading-relaxed text-center">
                  {service.description}
                </p>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl group-hover:scale-150 group-hover:bg-[#D4AF37]/10 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
