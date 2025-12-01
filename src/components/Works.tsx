
import { motion } from 'framer-motion';

const Works = () => {
  const projects = [
    {
      title: 'Steel Arena',
      category: 'Structural Monitoring',
      image: '/images/steel-arena.jpg',
      description: 'Long-term structural health monitoring system.'
    },
    {
      title: 'Bojnicka Bridge',
      category: 'Dynamic Analysis',
      image: '/images/bojnicka-bridge.jpg',
      description: 'Vibration analysis and load testing.'
    },
    {
      title: 'Hydrostatic Nivelation',
      category: 'Precision Measurement',
      image: '/images/hydrostatic-nivelation.jpg',
      description: 'High-precision liquid leveling systems.'
    }
  ];

  return (
    <section id="works" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fuchsia-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4"
          >
            OUR <span className="text-cyan-400">WORK</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection from our projects showcasing our expertise in monitoring and measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-black/50"
            >
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-cyan-400 text-sm font-medium mb-2 uppercase tracking-wider font-orbitron">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2 font-orbitron group-hover:text-fuchsia-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
