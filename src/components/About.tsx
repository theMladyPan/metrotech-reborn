
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron">
              ABOUT <span className="text-fuchsia-500">US</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Creating online monitoring solutions since 2016. Our vision is to bring 21st-century IoT technology to structural health monitoring and industrial measurement.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We have installed over 173 sensors across 7 major locations, ensuring safety and data integrity for critical infrastructure.
            </p>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="font-bold text-white font-orbitron">Honest Work</h4>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Zap className="w-8 h-8 text-fuchsia-500 mx-auto mb-2" />
                <h4 className="font-bold text-white font-orbitron">Synergy</h4>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-bold text-white font-orbitron">Impact</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron text-center">
                System Overview
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-slate-900 rounded border border-slate-700">
                    <span className="text-cyan-400 font-mono">Sensors</span>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-4 relative overflow-hidden">
                       <div className="absolute inset-0 bg-cyan-500/50 animate-pulse"></div>
                    </div>
                    <span className="text-white font-mono">Data Logger</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-slate-900 rounded border border-slate-700">
                    <span className="text-white font-mono">Data Logger</span>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-4 relative overflow-hidden">
                       <div className="absolute inset-0 bg-fuchsia-500/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <span className="text-fuchsia-400 font-mono">Cloud Server</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-slate-900 rounded border border-slate-700">
                    <span className="text-fuchsia-400 font-mono">Cloud Server</span>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-4 relative overflow-hidden">
                       <div className="absolute inset-0 bg-purple-500/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <span className="text-white font-mono">Client Dashboard</span>
                 </div>
              </div>
              <p className="mt-6 text-center text-sm text-gray-400">
                Modular system paired with scalable cloud data access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
