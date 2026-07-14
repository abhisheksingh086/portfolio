'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cpu, Layers, Users, Bot, Cloud, ShoppingCart, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Website Development',
    description: 'Building bespoke websites tailored to your business needs with modern technologies',
  },
  {
    icon: Database,
    title: 'Laravel Development',
    description: 'Robust backend solutions using Laravel framework for scalable applications',
  },
  {
    icon: Layers,
    title: 'MERN Stack Development',
    description: 'Full-stack applications using MongoDB, Express, React, and Node.js',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
  },
  {
    icon: Cpu,
    title: 'REST API Development',
    description: 'Scalable and secure RESTful APIs for web and mobile applications',
  },
  {
    icon: Users,
    title: 'CRM & HRM Systems',
    description: 'Custom customer relationship and human resource management solutions',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Integrating AI-powered features to automate and enhance business processes',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Building Software as a Service platforms with subscription models',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description: 'Online stores with secure payment gateways and inventory management',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and optimization for existing websites',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-xl p-6 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-purple mb-4"
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
