import React from 'react';
import { BookOpen, MonitorSmartphone, MapPin, Award } from 'lucide-react';

const AriyaStory = () => {
  return (
    <section id="story" className="py-24 text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium text-sm mb-8">
              <span>Built on Expertise, Driven by Innovation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--color-primary)]">
              A Different Kind of <br />
              <span className="text-[var(--color-accent)]">Tech Partner.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              Expertise meets the next generation of Cambodian talent.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ariya was born from a simple observation: Cambodian SMEs need digital tools that actually work, built by people who truly care about the local market.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded by a Senior Web & Mobile Development Trainer with over 10 years of experience in full-stack engineering and agile delivery, Ariya operates on a unique model. We aren't just a software house; we are a specialized team where veteran expertise meets the country's most promising developers.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Why trust us with your business?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <BookOpen className="text-[#1F4E79] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#1F4E79] transition-colors">Academic Precision</h4>
                  <p className="text-gray-600">Every line of code is reviewed by a Senior Trainer certified in project-based pedagogy.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <MonitorSmartphone className="text-[#1F4E79] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#1F4E79] transition-colors">Modern Tech Stack</h4>
                  <p className="text-gray-600">We don’t use outdated tools. We build for the future using Java Spring Boot, Angular, and Flutter.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <MapPin className="text-[#1F4E79] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#1F4E79] transition-colors">Rooted in Cambodia</h4>
                  <p className="text-gray-600">We understand the local workflow. From Telegram integrations to SME-specific automation, we build for the way Cambodia does business.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group bg-white p-8 flex flex-col items-center justify-center border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5" />
              <Award className="w-32 h-32 text-[var(--color-accent)] mb-6 relative z-10 drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-extrabold text-[var(--color-primary)] mb-2">10+ Years</h3>
                <p className="text-gray-600 font-medium text-lg">Industry Experience & Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AriyaStory;
