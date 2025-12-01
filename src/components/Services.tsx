import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Ruler, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Monitoring',
      icon: <Activity className="w-12 h-12 text-cyan-400" />,
      description: '24/7 data collection, evaluation, and risk assessment. We keep an eye on your structures so you don\'t have to.',
      items: ['Continuous Data Collection', 'Real-time Alerts', 'Risk Assessment']
    },
    {
      title: 'Measuring',
      icon: <Ruler className="w-12 h-12 text-fuchsia-500" />,
      description: 'Precise measurement using advanced sensors for inclination, pressure, distance, and strain.',
      items: ['Inclination & Tilt', 'Pressure & Strain', 'Distance & Displacement']
    },
    {
      title: 'R&D',
      icon: <Cpu className="w-12 h-12 text-purple-400" />,
      description: 'Custom sensor building and innovative solutions tailored to your specific engineering challenges.',
      items: ['Custom Sensors', 'IoT Integration', 'Prototyping']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4"
          >
            WHAT WE <span className="text-fuchsia-500">DO</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group"
            >
              <div className="mb-6 p-4 bg-slate-900/50 rounded-full inline-block group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
