'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  navigation: ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'],
  services: [
    'Web Development',
    'Mobile Apps',
    'AI Integration',
    'API Development',
    'CRM Systems',
    'E-Commerce',
  ],
  technologies: [
    'React',
    'Laravel',
    'Node.js',
    'Flutter',
    'Python',
    'MongoDB',
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">Agency</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building modern web, AI & mobile solutions for startups and businesses worldwide.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary-blue transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              {footerLinks.technologies.map((tech) => (
                <li key={tech}>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-primary-blue transition-colors"
                  >
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Agency. All rights reserved. Built with Next.js, React, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
