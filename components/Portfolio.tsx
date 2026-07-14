'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CRM-HRM Management System',
    description: 'Comprehensive customer relationship and human resource management platform with advanced analytics',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: 'CRM',
  },
  {
    title: 'AI Learning Assistant',
    description: 'Intelligent learning platform powered by AI for personalized education experiences',
    technologies: ['Python', 'FastAPI', 'React', 'AI'],
    image: 'AI',
  },
  {
    title: 'AI Chatbot',
    description: 'Advanced conversational AI chatbot for customer support and engagement',
    technologies: ['Python', 'NLP', 'React', 'FastAPI'],
    image: 'CHAT',
  },
  {
    title: 'Restaurant Management System',
    description: 'Complete restaurant management solution with ordering, inventory, and analytics',
    technologies: ['MERN', 'Node.js', 'MongoDB', 'React'],
    image: 'REST',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory management',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Stripe'],
    image: 'ECOM',
  },
  {
    title: 'Business Dashboard',
    description: 'Real-time business analytics dashboard with data visualization and reporting',
    technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    image: 'DASH',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations and responsive design',
    technologies: ['Next.js', 'React', 'Tailwind', 'Framer'],
    image: 'PORT',
  },
  {
    title: 'Mobile Business App',
    description: 'Cross-platform mobile application for business management on the go',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST'],
    image: 'MOB',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl font-bold gradient-text opacity-50"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary-blue/20 text-primary-blue border border-primary-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-blue to-primary-purple text-white text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/20 hover:bg-white/20"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
