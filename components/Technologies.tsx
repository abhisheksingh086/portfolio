'use client';

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'HTML', color: 'from-orange-500 to-orange-600' },
  { name: 'CSS', color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
  { name: 'React', color: 'from-cyan-400 to-cyan-500' },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-500' },
  { name: 'PHP', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Laravel', color: 'from-red-500 to-red-600' },
  { name: 'Node.js', color: 'from-green-500 to-green-600' },
  { name: 'Express.js', color: 'from-gray-500 to-gray-600' },
  { name: 'MySQL', color: 'from-blue-600 to-blue-700' },
  { name: 'MongoDB', color: 'from-green-600 to-green-700' },
  { name: 'Python', color: 'from-yellow-500 to-yellow-600' },
  { name: 'FastAPI', color: 'from-teal-500 to-teal-600' },
  { name: 'Flutter', color: 'from-blue-400 to-blue-500' },
  { name: 'Firebase', color: 'from-orange-400 to-orange-500' },
  { name: 'Git', color: 'from-red-600 to-red-700' },
  { name: 'GitHub', color: 'from-gray-600 to-gray-700' },
  { name: 'Docker', color: 'from-blue-500 to-blue-600' },
  { name: 'Postman', color: 'from-orange-500 to-orange-600' },
];

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technologies we use to build exceptional solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card rounded-xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {tech.name.charAt(0)}
              </motion.div>
              <h3 className="text-white font-medium text-sm">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
