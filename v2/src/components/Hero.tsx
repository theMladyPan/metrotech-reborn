import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
      >
        METRO<span className="text-metro-accent">TECH</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-slate-300 max-w-2xl"
      >
        Advanced structural monitoring and precision measurement solutions for a safer world.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-10"
      >
        <button className="bg-transparent border-2 border-metro-accent text-metro-accent hover:bg-metro-accent/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
          Explore Our Solutions
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
