
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Synthwave Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b0764,transparent)]"></div>
      
      {/* Animated Sun/Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-fuchsia-900/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 font-orbitron drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        >
          STAY INFORMED<br />
          <span className="text-fuchsia-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.6)]">STAY SAFE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-cyan-100 font-light tracking-wide max-w-3xl mx-auto"
        >
          Online measuring and monitoring solutions for the 21st century
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_35px_rgba(192,38,211,0.8)] border border-fuchsia-400/50 font-orbitron"
          >
            GET A QUOTE
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent hover:bg-cyan-900/30 text-cyan-400 hover:text-cyan-300 rounded font-bold text-lg transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] font-orbitron"
          >
            LEARN MORE
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-cyan-500/70 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
