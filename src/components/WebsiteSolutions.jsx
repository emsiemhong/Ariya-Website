import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Globe, Users, Zap, TrendingUp, MessageCircle, ShoppingCart, CreditCard, Palette, Crown, Phone, Mail, Shield, Heart } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactForm from './ContactForm';

const WebsiteSolutions = () => {
  const [activeDemo, setActiveDemo] = useState('educational');
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
                  $150 - $250
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
                  $350 - $550
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
                  $700 - $1200
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

      {/* Section 5: Sample Websites */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F4E79] mb-4">Sample Websites</h2>
            <p className="text-xl text-gray-600">See what we can build for your business</p>
          </div>
          
          {/* Demo Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveDemo('educational')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeDemo === 'educational'
                    ? 'bg-[#C9A84C] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#1F4E79]'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-2" />
                Educational
              </button>
              <button
                onClick={() => setActiveDemo('ecommerce')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeDemo === 'ecommerce'
                    ? 'bg-[#C9A84C] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#C9A84C]'
                }`}
              >
                <ShoppingCart className="w-4 h-4 inline mr-2" />
                E-commerce
              </button>
              <button
                onClick={() => setActiveDemo('medical')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeDemo === 'medical'
                    ? 'bg-[#C9A84C] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#C9A84C]'
                }`}
              >
                <Heart className="w-4 h-4 inline mr-2" />
                Medical
              </button>
            </div>
          </div>
          
          {/* Educational Demo */}
          {activeDemo === 'educational' && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid md:grid-cols-2">
                {/* Website Preview with Screenshots */}
                <div className="bg-gradient-to-br from-[#1F4E79]/10 to-[#D4AF37]/10 p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#1F4E79] mb-2">Ariya Academy</h3>
                    <p className="text-sm text-gray-600">Professional School Website</p>
                  </div>
                  
                  {/* Screenshot Gallery */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="space-y-3">
                      <img 
                        src="/s-home.png" 
                        alt="Home Page - Professional Hero Section" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://future-steps-demo-pi.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-program.png" 
                        alt="Programs Page - Course Listings" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://future-steps-demo-pi.vercel.app/", "_blank")}
                      />
                    </div>
                    <div className="space-y-3">
                      <img 
                        src="/s-feature.png" 
                        alt="Features Page - Key Highlights" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://future-steps-demo-pi.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-register.png" 
                        alt="Registration Page - Student Enrollment" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://future-steps-demo-pi.vercel.app/", "_blank")}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="https://future-steps-demo-pi.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                      <ArrowRight className="w-5 h-5" />
                      View Live Demo
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Click any screenshot to visit</p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 text-white font-bold text-sm rounded-full mb-4">
                      <Star className="w-4 h-4" />
                      Premium Package - $700 - $1,200
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Ariya Academy Website</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Premium-tier educational website showcasing advanced React development capabilities and modern web standards.
                    </p>
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 text-white p-4 rounded-2xl mb-6 text-center">
                      <p className="text-sm font-bold mb-2">Premium Educational Websites</p>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <p className="text-3xl font-bold">$700</p>
                        <span className="text-white/80">-</span>
                        <p className="text-3xl font-bold">$1,200</p>
                      </div>
                      <p className="text-sm text-white/90">Same quality as $5,000+ agency websites</p>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="space-y-4 mb-6">
                    <h5 className="font-bold text-gray-900 mb-3">Complete Solution (8 Pages):</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Home (Hero + CTAs)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">About Us</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Admissions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Academics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Campus Life</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">News & Events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Contact</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Benefits */}
                  <div className="border-t pt-4">
                    <h5 className="font-bold text-gray-900 mb-3">Business Benefits:</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Attract More Students</p>
                          <p className="text-xs text-gray-600">Professional website builds trust with parents</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">24/7 Online Presence</p>
                          <p className="text-xs text-gray-600">Show your programs anytime, anywhere</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Stand Out from Competition</p>
                          <p className="text-xs text-gray-600">Modern design makes you look established</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Ready to Launch Badge */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Ready to Launch in 2-4 Weeks</span>
                      </div>
                      <p className="text-xs text-green-700 mt-1">Complete website with fast delivery and ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* E-commerce Demo */}
          {activeDemo === 'ecommerce' && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid md:grid-cols-2">
                {/* E-commerce Preview with Screenshots */}
                <div className="bg-gradient-to-br from-[#C9A84C]/10 to-[#0D0D0D]/10 p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Ariya Fashion</h3>
                    <p className="text-sm text-gray-600">Luxury E-commerce Platform</p>
                  </div>
                  
                  {/* Fashion Screenshot Gallery */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="space-y-3">
                      <img 
                        src="/s-home-f.png" 
                        alt="Fashion Home Page - Luxury Hero" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://ariya-s-luxury-showcase.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-shop-f.png" 
                        alt="Shop Page - Product Catalog" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://ariya-s-luxury-showcase.vercel.app/", "_blank")}
                      />
                    </div>
                    <div className="space-y-3">
                      <img 
                        src="/s-pro-de-f.png" 
                        alt="Product Detail Page - Luxury Item" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://ariya-s-luxury-showcase.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-m-menu-f.png" 
                        alt="Mobile Menu - Responsive Design" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://ariya-s-luxury-showcase.vercel.app/", "_blank")}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="https://ariya-s-luxury-showcase.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                      <ArrowRight className="w-5 h-5" />
                      View Luxury Store
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Click any screenshot to visit</p>
                  </div>
                </div>
                
                {/* E-commerce Project Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/80 text-white font-bold text-sm rounded-full mb-4">
                      <Star className="w-4 h-4" />
                      Luxury Package - $1,800 - $2,500
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Ariya Fashion E-commerce</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      World-class luxury fashion e-commerce platform with advanced features and Cambodia market specialization.
                    </p>
                    <div className="bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/80 text-white p-4 rounded-2xl mb-6 text-center">
                      <p className="text-sm font-bold mb-2">Luxury E-commerce Platforms</p>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <p className="text-3xl font-bold">$1,800</p>
                        <span className="text-white/80">-</span>
                        <p className="text-3xl font-bold">$2,500</p>
                      </div>
                      <p className="text-sm text-white/90">Same quality as $5,000+ agency stores</p>
                    </div>
                  </div>
                  
                  {/* Advanced Features */}
                  <div className="space-y-4 mb-6">
                    <h5 className="font-bold text-gray-900 mb-3">Advanced E-commerce Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">12 Complete Pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Telegram Bot Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">4 Bank QR Payments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Admin Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">User Authentication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Dark Mode Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">SEO Optimized</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Blog System</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Benefits */}
                  <div className="border-t pt-4">
                    <h5 className="font-bold text-gray-900 mb-3">Business Benefits:</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Sell Online 24/7</p>
                          <p className="text-xs text-gray-600">Complete e-commerce platform for sales</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Cambodia Payment Ready</p>
                          <p className="text-xs text-gray-600">Local payment methods customers trust</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Crown className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Luxury Brand Image</p>
                          <p className="text-xs text-gray-600">Premium design that builds trust</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Production Ready Badge */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Production Ready E-commerce</span>
                      </div>
                      <p className="text-xs text-green-700 mt-1">Complete online store with admin panel and payment processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Medical Demo */}
          {activeDemo === 'medical' && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid md:grid-cols-2">
                {/* Medical Preview with Screenshots */}
                <div className="bg-gradient-to-br from-[#C9A84C]/10 to-[#0D0D0D]/10 p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Ariya Medical</h3>
                    <p className="text-sm text-gray-600">Clinic Management System</p>
                  </div>
                  
                  {/* Medical Screenshot Gallery */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="space-y-3">
                      <img 
                        src="/s-hero.png" 
                        alt="Medical Home Page - Professional Hero" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://cliniclink-pro.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-dashboard.png" 
                        alt="Dashboard Page - Patient Portal" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://cliniclink-pro.vercel.app/", "_blank")}
                      />
                    </div>
                    <div className="space-y-3">
                      <img 
                        src="/s-d-menu-c.png" 
                        alt="Desktop Menu - Professional Navigation" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://cliniclink-pro.vercel.app/", "_blank")}
                      />
                      <img 
                        src="/s-m-menu-c.png" 
                        alt="Mobile Menu - Responsive Medical Design" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => window.open("https://cliniclink-pro.vercel.app/", "_blank")}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="https://cliniclink-pro.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                      <ArrowRight className="w-5 h-5" />
                      View Medical System
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Click any screenshot to visit</p>
                  </div>
                </div>
                
                {/* Medical Project Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/80 text-white font-bold text-sm rounded-full mb-4">
                      <Star className="w-4 h-4" />
                      Healthcare Package - $1,800 - $2,500
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Ariya Medical Clinic System</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Comprehensive medical clinic management platform showcasing advanced React development with healthcare industry specialization.
                    </p>
                    <div className="bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/80 text-white p-4 rounded-2xl mb-6 text-center">
                      <p className="text-sm font-bold mb-2">Healthcare Management Platforms</p>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <p className="text-3xl font-bold">$1,800</p>
                        <span className="text-white/80">-</span>
                        <p className="text-3xl font-bold">$2,500</p>
                      </div>
                      <p className="text-sm text-white/90">Same quality as $5,000+ healthcare systems</p>
                    </div>
                  </div>
                  
                  {/* Advanced Medical Features */}
                  <div className="space-y-4 mb-6">
                    <h5 className="font-bold text-gray-900 mb-3">Comprehensive Medical Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">18 Complete Pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Patient Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Doctor Profiles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Appointment Booking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Medical Records</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Emergency Contact</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Blog & Resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Insurance & Payment</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Healthcare Business Benefits */}
                  <div className="border-t pt-4">
                    <h5 className="font-bold text-gray-900 mb-3">Healthcare Business Benefits:</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Streamline Patient Management</p>
                          <p className="text-xs text-gray-600">Complete digital workflow for clinic operations</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Professional Healthcare Image</p>
                          <p className="text-xs text-gray-600">Modern medical UI builds patient trust</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Complete Patient Journey</p>
                          <p className="text-xs text-gray-600">From booking to follow-up care</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Production Ready Badge */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Production Ready Healthcare System</span>
                      </div>
                      <p className="text-xs text-green-700 mt-1">Complete clinic management with 50+ components and professional medical UI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want a similar website for your school, business, or clinic?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C49A2F] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Get Your Custom Quote
            </a>
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
