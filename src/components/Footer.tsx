import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold font-orbitron text-white">
            METROTECH
          </span>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} METROTECH s.r.o. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
