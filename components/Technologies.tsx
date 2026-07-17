'use client';

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'HTML', color: 'from-orange-500 to-orange-600', icon: 'H', borderColor: 'group-hover:border-orange-500/30' },
  { name: 'CSS', color: 'from-blue-500 to-blue-600', icon: 'C', borderColor: 'group-hover:border-blue-500/30' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', icon: 'JS', borderColor: 'group-hover:border-yellow-500/30' },
  { name: 'React', color: 'from-cyan-400 to-cyan-500', icon: 'R', borderColor: 'group-hover:border-cyan-500/30' },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-500', icon: 'T', borderColor: 'group-hover:border-teal-500/30' },
  { name: 'PHP', color: 'from-indigo-500 to-indigo-600', icon: 'P', borderColor: 'group-hover:border-indigo-500/30' },
  { name: 'Laravel', color: 'from-red-500 to-red-600', icon: 'L', borderColor: 'group-hover:border-red-500/30' },
  { name: 'Node.js', color: 'from-green-500 to-green-600', icon: 'N', borderColor: 'group-hover:border-green-500/30' },
  { name: 'Express.js', color: 'from-gray-500 to-gray-600', icon: 'E', borderColor: 'group-hover:border-gray-500/30' },
  { name: 'MySQL', color: 'from-blue-600 to-blue-700', icon: 'M', borderColor: 'group-hover:border-blue-600/30' },
  { name: 'MongoDB', color: 'from-green-600 to-green-700', icon: 'M', borderColor: 'group-hover:border-green-600/30' },
  { name: 'Python', color: 'from-yellow-500 to-yellow-600', icon: 'Py', borderColor: 'group-hover:border-yellow-600/30' },
  { name: 'FastAPI', color: 'from-teal-500 to-teal-600', icon: 'F', borderColor: 'group-hover:border-teal-600/30' },
  { name: 'Flutter', color: 'from-blue-400 to-blue-500', icon: 'Fl', borderColor: 'group-hover:border-blue-400/30' },
  { name: 'Firebase', color: 'from-orange-400 to-orange-500', icon: 'Fi', borderColor: 'group-hover:border-orange-400/30' },
  { name: 'Git', color: 'from-red-600 to-red-700', icon: 'G', borderColor: 'group-hover:border-red-600/30' },
  { name: 'GitHub', color: 'from-gray-600 to-gray-700', icon: 'GH', borderColor: 'group-hover:border-gray-600/30' },
  { name: 'Docker', color: 'from-blue-500 to-blue-600', icon: 'D', borderColor: 'group-hover:border-blue-500/30' },
  { name: 'Postman', color: 'from-orange-500 to-orange-600', icon: 'P', borderColor: 'group-hover:border-orange-500/30' },
];

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.15,
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon container */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl shadow-xl`}
              >
                {tech.icon}
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <h3 className="text-white font-semibold text-base group-hover:text-primary-cyan transition-colors">
                {tech.name}
              </h3>

              {/* Subtle border glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent ${tech.borderColor} transition-colors duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
