import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesPage from './components/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';

// Home component
const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Organizations Choose Us</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We combine modern technology with disciplined manpower to deliver excellence across all protection and facility services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { title: '24×7 Service', desc: 'Round the clock monitoring and support at your disposal.' },
              { title: 'Trained Professionals', desc: 'Rigorous training programs for all our deployment staff.' },
              { title: 'Quick Response', desc: 'Immediate action force for any emergencies or breaches.' },
              { title: 'Govt. Certified', desc: 'Fully compliant with all labor and security regulations.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-dark tracking-tight">Need reliable manpower or security?</h2>
              <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Talk to our experts today for a customized plan. We provide solutions that fit your specific business needs with absolute precision.
              </p>
              <button 
                onClick={() => window.location.href='/contact'} 
                className="bg-primary text-white h-14 px-12 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[60]"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <Navbar />
        <main className="flex-grow pt-0">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
