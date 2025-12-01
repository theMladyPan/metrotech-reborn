import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'What We Do', href: '#services' },
    { name: 'Our Work', href: '#works' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-fuchsia-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <Activity className="h-8 w-8 text-fuchsia-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="text-white text-xl font-bold tracking-wider font-orbitron group-hover:text-shadow-neon transition-all duration-300">
                METROTECH
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 hover:shadow-cyan-glow px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 font-orbitron"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(192,38,211,0.5)] hover:shadow-[0_0_25px_rgba(192,38,211,0.8)] font-orbitron">
                GET QUOTE!
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-fuchsia-500/30 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium font-orbitron"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-white bg-fuchsia-600 block px-3 py-2 rounded-md text-base font-medium font-orbitron mt-4 text-center shadow-[0_0_10px_rgba(192,38,211,0.5)]"
              >
                GET QUOTE!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
