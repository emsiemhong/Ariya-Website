import React from 'react';
import { MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#F8F9FA]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31,78,121,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(31,78,121,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-56 rounded-full bg-[#D4AF37]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Get Started</span>
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79] mb-5 tracking-tight">Let's Work Together</h2>
          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(31,78,121,0.08)] border border-gray-100 max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1F4E79]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <ContactForm />
          
          {/* Alternative Contact */}
          <div className="mt-12 relative z-10 text-center">
            <p className="text-gray-600 mb-6">Or reach out through our social channels</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:ariyateam.dev@gmail.com" 
                className="flex items-center gap-3 bg-[#1F4E79] hover:bg-[#1a3d61] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Email Us
              </a>
              <a 
                href="https://t.me/ariyasolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#2AABEE] hover:bg-[#229ED9] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Telegram
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
