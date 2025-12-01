import Background from './components/Background';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden">
      <Background />
      <Hero />
      
      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-metro-accent transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-metro-accent">Monitoring</h3>
            <p className="text-slate-300">24/7 continuous data collection and real-time risk assessment for critical infrastructure.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-metro-accent transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-metro-accent">Measuring</h3>
            <p className="text-slate-300">High-precision sensors for inclination, pressure, and displacement measurements.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-metro-accent transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-metro-accent">R&D</h3>
            <p className="text-slate-300">Custom IoT solutions and sensor development tailored to unique engineering challenges.</p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} METROTECH s.r.o.
      </footer>
    </div>
  );
}

export default App;