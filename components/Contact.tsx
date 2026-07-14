'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's build something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                >
                  <option value="" className="bg-background">Select a project type</option>
                  <option value="web" className="bg-background">Web Development</option>
                  <option value="mobile" className="bg-background">Mobile App</option>
                  <option value="ai" className="bg-background">AI Integration</option>
                  <option value="api" className="bg-background">API Development</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
              >
                <option value="" className="bg-background">Select budget range</option>
                <option value="5k-10k" className="bg-background">$5,000 - $10,000</option>
                <option value="10k-25k" className="bg-background">$10,000 - $25,000</option>
                <option value="25k-50k" className="bg-background">$25,000 - $50,000</option>
                <option value="50k+" className="bg-background">$50,000+</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1">
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>
              <Button variant="secondary" className="flex-1">
                <Calendar className="mr-2 w-4 h-4" />
                Schedule a Meeting
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
