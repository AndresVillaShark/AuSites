import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { CONTACT_EMAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAILS[0], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          package: formData.package,
          message: formData.message,
          _subject: `AuSites Project Inquiry from ${formData.name}`,
          _cc: CONTACT_EMAILS[1]
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', package: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to start?</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        Fill out the form to get your project moving at incredible speeds. We respond to all inquiries within 24 hours.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email Us</h4>
                                <p className="text-gray-500 text-sm">Direct support for both our lead developers</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Global Service</h4>
                                <p className="text-gray-500 text-sm">Serving clients worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="package" className="block text-sm font-medium text-gray-400 mb-2">Interested Package</label>
                            <select
                                id="package"
                                name="package"
                                value={formData.package}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors appearance-none"
                            >
                                <option value="" disabled>Select a package</option>
                                <option value="Landing Page ($200)">Landing Page ($200)</option>
                                <option value="Business ($500)">Business ($500)</option>
                                <option value="Professional ($1,000)">Professional ($1,000)</option>
                                <option value="Custom Quote">Custom Quote</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                            <textarea 
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                                placeholder="Tell us about your goals..."
                            ></textarea>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
                                Message sent successfully! We'll get back to you within 24 hours.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                                Failed to send message. Please try again or email us directly.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gold-400 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
