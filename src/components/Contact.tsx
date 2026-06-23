import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import GlobeScene from './3d/GlobeScene';

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden box-border z-10"
    >
      {/* 3D Globe Background */}
      <GlobeScene />

      {/* Background neon blur */}
      <div className="absolute top-1/2 left-[80%] w-[300px] h-[300px] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          GET IN <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">TOUCH</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
      </motion.div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-stretch">
        {/* Left Side: Contact info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between text-left space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">Let's build something epic!</h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Have a project in mind, looking to hire a full stack engineer, or just want to chat about competitive programming? Feel free to drop a message in the form or reach out through my socials. I'm always open to discussing new opportunities.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-4">
            <a
              href="mailto:imhariom25@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-mono text-white/40 uppercase">Email Me</span>
                <span className="text-sm font-semibold text-white">imhariom25@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-neon-purple">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-mono text-white/40 uppercase">Location</span>
                <span className="text-sm font-semibold text-white">Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-3">
            <span className="block text-xs font-mono text-white/40 uppercase">Find me on</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/HariomYadav-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 text-white/80 hover:text-white transition-all duration-300 text-xs font-semibold font-mono"
              >
                <GithubIcon />
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/40 hover:bg-neon-purple/5 text-white/80 hover:text-white transition-all duration-300 text-xs font-semibold font-mono"
              >
                <LinkedinIcon />
                LINKEDIN
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card hover:glass-card-hover rounded-2xl p-8 border border-white/5 relative h-full flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Form header */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 border-b border-white/5 pb-4">
                <MessageSquare className="w-4 h-4 text-neon-cyan" />
                <span>SECURE TRANSMISSION PROTOCOL</span>
              </div>

              {/* Name & Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-xs font-semibold font-mono text-white/60">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#030014]/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-xs font-semibold font-mono text-white/60">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#030014]/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2 text-left">
                <label htmlFor="subject" className="text-xs font-semibold font-mono text-white/60">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration details"
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-xs font-semibold font-mono text-white/60">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-bold font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 rounded-lg"
                >
                  ✓ MESSAGE TRANSMITTED SUCCESSFULLY!
                </motion.div>
              ) : (
                <div className="text-[10px] text-white/30 font-mono">
                  * Fields are required to initialize secure routing.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold rounded-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
