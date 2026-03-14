import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-background)] rounded-[3rem] p-12 text-center max-w-4xl mx-auto shadow-sm border border-gray-100 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 relative z-10">Ready to transform your business?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
            Join the growing number of Cambodian SMEs leveraging digital tools to streamline their workflows and increase revenue.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-[#2AABEE] hover:bg-[#229ED9] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-10"
          >
            <MessageCircle size={24} />
            Chat with us on Telegram
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-2xl leading-none">A</span>
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">Ariya</span>
          </div>
          <p className="text-base">© {new Date().getFullYear()} Ariya Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
