import React, { useState } from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { personalInfo } from '@/data/personal';
import { Send, Linkedin, Github, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerMailtoFallback = () => {
    setStatus('success');
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    const isKeyConfigured = 
      personalInfo.web3FormsKey && 
      personalInfo.web3FormsKey !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

    if (isKeyConfigured) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: personalInfo.web3FormsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact from ${formData.name}`,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.message || 'API submission failed');
        }
      } catch (err) {
        console.error('Web3Forms Error:', err);
        triggerMailtoFallback();
      }
    } else {
      triggerMailtoFallback();
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-themeNeutral-900 bg-themeNeutral-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Contact Info / Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionReveal>
                <p className="section-label">06 // Connection</p>
                <h2 className="section-heading mb-6">Get in Touch</h2>
                <p className="text-themeNeutral-300 font-light leading-relaxed mb-8">
                  Whether you're looking to hire for an engineering position, have questions about my projects, or just want to connect, feel free to reach out. I try to reply within 24 hours.
                </p>
              </SectionReveal>

              {/* Direct links */}
              <SectionReveal delay={0.1}>
                <div className="space-y-6">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 text-themeNeutral-300 hover:text-accent-400 transition-colors group"
                  >
                    <span className="p-3 rounded-lg bg-themeNeutral-900 border border-themeNeutral-800 text-themeNeutral-400 group-hover:text-accent-400 group-hover:border-accent-800 transition-colors">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-mono text-themeNeutral-500 uppercase">Email</p>
                      <p className="text-sm font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 text-themeNeutral-300 hover:text-accent-400 transition-colors group"
                  >
                    <span className="p-3 rounded-lg bg-themeNeutral-900 border border-themeNeutral-800 text-themeNeutral-400 group-hover:text-accent-400 group-hover:border-accent-800 transition-colors">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-mono text-themeNeutral-500 uppercase">Phone</p>
                      <p className="text-sm font-medium">{personalInfo.phone}</p>
                    </div>
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Social handles list */}
            <SectionReveal delay={0.2} className="mt-12 lg:mt-0">
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-themeNeutral-900 border border-themeNeutral-800 text-themeNeutral-400 hover:text-accent-400 hover:border-accent-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-themeNeutral-900 border border-themeNeutral-800 text-themeNeutral-400 hover:text-accent-400 hover:border-accent-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <div className="bg-themeNeutral-900/40 border border-themeNeutral-800 rounded-2xl p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-themeNeutral-400 uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-themeNeutral-950 border border-themeNeutral-800 rounded-xl text-themeNeutral-100 placeholder-themeNeutral-500 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-themeNeutral-400 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-themeNeutral-950 border border-themeNeutral-800 rounded-xl text-themeNeutral-100 placeholder-themeNeutral-500 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-themeNeutral-400 uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your project or request..."
                      className="w-full px-4 py-3 bg-themeNeutral-950 border border-themeNeutral-800 rounded-xl text-themeNeutral-100 placeholder-themeNeutral-500 focus:outline-none focus:border-accent-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Actions & Status Feedback */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full sm:w-auto"
                    >
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      <Send size={14} />
                    </button>

                    {/* Status notifications */}
                    {status === 'success' && (
                      <span className="flex items-center gap-2 text-xs text-green-400 font-mono">
                        <CheckCircle2 size={14} />
                        Message processed successfully!
                      </span>
                    )}

                    {status === 'error' && (
                      <span className="flex items-center gap-2 text-xs text-red-400 font-mono">
                        <AlertCircle size={14} />
                        Please fill in all fields.
                      </span>
                    )}
                  </div>

                </form>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
