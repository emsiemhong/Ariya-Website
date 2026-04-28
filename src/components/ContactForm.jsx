import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Debug: Check if environment variables are loaded
      console.log('Environment Variables Check:');
      console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log('User ID:', import.meta.env.VITE_EMAILJS_USER_ID);
      console.log('Contact Email:', import.meta.env.VITE_CONTACT_EMAIL);

      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL
      };

      console.log('Email Data:', emailData);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('EmailJS returned non-200 status:', result);
      }
    } catch (error) {
      console.error('Email send error - Full details:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgba(31,78,121,0.08)] border border-gray-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-3xl font-bold text-[#1F4E79] mb-4">Get in Touch</h3>
          <p className="text-gray-600 text-lg">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all duration-200 text-gray-900 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all duration-200 text-gray-900 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                placeholder="Tell us about your project and how we can help..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1F4E79] hover:bg-[#1a3d61] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </form>

        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
            <p className="text-green-800 font-medium text-center">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <p className="text-red-800 font-medium text-center">
              Sorry, something went wrong. Please try again or contact us directly at ariyateam.dev@gmail.com
            </p>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Or reach us directly at{' '}
            <a 
              href="mailto:ariyateam.dev@gmail.com" 
              className="text-[#1F4E79] font-medium hover:text-[#D4AF37] transition-colors"
            >
              ariyateam.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
