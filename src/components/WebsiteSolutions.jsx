import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Phone, MessageCircle, Globe, Users, TrendingUp, Zap, Shield, ArrowRight, Mail } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactForm from './ContactForm';

const WebsiteSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Section 1: Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium text-sm mb-6">
            <Globe className="w-4 h-4" />
            Website Solutions for Cambodia
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F4E79] mb-6 leading-tight">
            Professional Websites
            <br />
            <span className="text-[#D4AF37]">That Grow Your Business</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We help schools and businesses in Cambodia build professional websites to grow their brand and reach more customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#packages" 
              className="inline-flex items-center gap-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              View Packages
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-[#1F4E79] hover:bg-[#1a3d61] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Packages */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">Website Packages</h2>
            <p className="text-xl text-gray-600">Simple, transparent pricing for Cambodian businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Basic Package */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Package</h3>
                <div className="text-4xl font-bold text-[#1F4E79] mb-1">
                  $100 - $150
                </div>
                <p className="text-gray-600">Small business / new school</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Home page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">About page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Contact page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Mobile responsive</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Simple design</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-full transition-all cursor-pointer hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>

            {/* Standard Package (Popular) */}
            <div className="bg-gradient-to-br from-[#1F4E79] to-[#2E5C4C] border-2 border-[#D4AF37] rounded-3xl p-8 text-white relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-full font-bold text-sm">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">
                  $200 - $300
                </div>
                <p className="text-white/80">Growing business</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Home page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>About page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Services / Programs page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Team page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Contact page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Image gallery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Professional UI design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span>Better layout and user experience</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#D4AF37] hover:bg-[#c49b28] text-[#1F4E79] font-bold py-3 px-6 rounded-full transition-all shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Choose Standard
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Package</h3>
                <div className="text-4xl font-bold text-[#1F4E79] mb-1">
                  $400 - $600
                </div>
                <p className="text-gray-600">Advanced business</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">All standard pages</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Registration form</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Blog / News section</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Admin panel</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">SEO basic</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Advanced UI/UX</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-full transition-all cursor-pointer hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>
            
          </div>
          
          {/* Important Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              "Price may vary depending on requirements"
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Cambodia Market Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium text-sm mb-6">
              🇰🇭 Cambodia Focus
            </div>
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">Solutions for Cambodia Businesses</h2>
            <p className="text-xl text-gray-600">Building digital presence for local growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F4E79] mb-6">
                The Digital Challenge in Cambodia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In Cambodia, many schools and small businesses are growing fast, but lack an online presence. 
                Customers now search online before making decisions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Build Trust</h4>
                    <p className="text-gray-600">Professional website shows customers you're serious about your business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Show Services</h4>
                    <p className="text-gray-600">Display your courses, products, or services 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Get More Customers</h4>
                    <p className="text-gray-600">Reach people searching online for businesses like yours</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1F4E79] text-white p-6 rounded-2xl">
                <p className="text-lg font-medium">
                  "Ariya helps you build a professional website to attract more customers and improve your brand."
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1F4E79] mb-6">Why Choose Ariya?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-700">Fast delivery (2-4 weeks)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-700">Local support in Cambodia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-700">Senior-led development team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-700">Understanding local market needs</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Perfect For:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Private schools and universities</li>
                  <li>• Small businesses and shops</li>
                  <li>• Service providers</li>
                  <li>• NGOs and organizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sample Websites (Placeholder) */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">Sample Websites</h2>
            <p className="text-xl text-gray-600">See what we can build for your business</p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 border-2 border-dashed border-gray-300 text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're preparing sample websites to show you what's possible with each package.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49b28] text-white px-6 py-3 rounded-full font-bold transition-all">
              <MessageCircle className="w-5 h-5" />
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Professional Contact Form Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#1F4E79]/10 to-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">
              Start Your Website Project
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to grow your business with a professional website? Let's discuss your needs and create the perfect solution for you.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <span>Call us: +855 81495716</span>
              <span className="mx-2">•</span>
              <Mail className="w-5 h-5 text-[#D4AF37]" />
              <span>Email: ariyateam.dev@gmail.com</span>
            </div>
          </div>
          
          <ContactForm />
          
          {/* Additional Contact Channels */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/+gzynnIuduBw3ZWY1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0088cc] hover:bg-[#006699] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Join Telegram Channel
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebsiteSolutions;
