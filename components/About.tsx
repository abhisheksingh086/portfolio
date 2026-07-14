'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building modern, scalable web applications with cutting-edge technologies',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Integrating AI-powered solutions to automate and enhance business processes',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Creating native and cross-platform mobile apps with exceptional user experience',
  },
  {
    icon: Globe,
    title: 'Backend Systems',
    description: 'Developing robust APIs and backend architectures for seamless performance',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Our Agency</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate developers dedicated to building exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our agency specializes in delivering comprehensive software solutions that drive business growth. With expertise spanning web development, backend systems, AI integration, APIs, and mobile applications, we transform ideas into reality.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We combine technical excellence with creative problem-solving to build products that not only meet but exceed expectations. Our team stays at the forefront of technology, ensuring our clients benefit from the latest innovations in software development.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you're a startup looking to build your first product or an established business seeking to modernize your digital presence, we have the expertise and passion to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple mb-4 mx-auto"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
