'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Abhishek Singh',
    role: 'Co-Founder | Full Stack PHP Laravel Developer',
    bio: 'Specializes in Laravel, PHP, backend architecture, REST APIs, authentication, CRM/HRM systems, and scalable business applications. Has foundational knowledge of Python, FastAPI, and AI integration.',
    skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST APIs', 'Git', 'GitHub', 'Basic Python', 'Basic FastAPI', 'Basic AI Integration'],
    avatar: 'AS',
  },
  {
    name: 'Rishi Rana',
    role: 'Co-Founder | Full Stack Developer',
    bio: 'Builds modern React and Next.js applications and scalable backend systems using the MERN stack with clean UI and optimized performance.',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub'],
    avatar: 'RS',
  },
  {
    name: 'Rahul',
    role: 'Co-Founder | Mobile App Developer',
    bio: 'Develops Android and cross-platform mobile applications with modern UI, Firebase integration, and optimized performance.',
    skills: ['Flutter', 'Dart', 'Android', 'Kotlin', 'Java', 'Firebase', 'SQLite', 'REST APIs', 'Git', 'GitHub'],
    avatar: 'RH',
  },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developers committed to building exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-blue via-primary-purple to-primary-cyan flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-primary-blue/30"
                >
                  {member.avatar}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-primary-cyan text-sm mb-4 text-center">{member.role}</p>

                <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-400 hover:text-primary-blue" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
