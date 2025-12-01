
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4"
          >
            GET IN <span className="text-cyan-400">TOUCH</span>
          </motion.h2>
          <p className="text-gray-400">
            Ready to start monitoring? Contact us for a quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 p-8 rounded-xl border border-slate-800 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 font-orbitron"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg font-orbitron mb-1">Visit Us</h4>
                <p className="text-gray-400">
                  METROTECH s.r.o.<br />
                  Slovakia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <Phone className="w-6 h-6 text-fuchsia-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg font-orbitron mb-1">Call Us</h4>
                <p className="text-gray-400 hover:text-white transition-colors">
                  +421 9XX XXX XXX
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg font-orbitron mb-1">Email Us</h4>
                <p className="text-gray-400 hover:text-white transition-colors">
                  info@metrotech.sk
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
