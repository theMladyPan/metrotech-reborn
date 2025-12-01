
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;