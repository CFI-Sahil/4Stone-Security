import React from 'react';
import heroImage from '../assets/hero-character.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import CountUp from './CountUp';

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: custom, ease: [0.21, 0.45, 0.32, 0.9] }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 50, scale: isMobile ? 0.9 : 1 },
    visible: { 
      opacity: isMobile ? 0.1 : 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 1.2, delay: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Image for Mobile overlay */}
      <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src={heroImage}
          alt="4Stone Character Mobile BG"
          className="w-full h-full object-cover object-center translate-y-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6"
            >
              <CheckCircle2 size={12} />
              ISO 9001:2015 CERTIFIED
            </motion.div>
            
            <motion.h1 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="heading-xl mb-6 text-slate-900"
            >
              Professional Security <br className="hidden sm:block" />
              & Facility Management
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-xl"
            >
              Trusted manpower, advanced security surveillance, and reliable facility solutions across India. Protecting your assets with precision and integrity.
            </motion.p>
            
            <div className="flex flex-row gap-3 w-full max-w-xs lg:max-w-md lg:mx-0 mx-auto">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.8}
                className="w-1/2 lg:w-44"
              >
                <Link to="/services" className="bg-primary text-white h-11 lg:h-14 w-full rounded-xl font-bold flex items-center justify-center gap-1.5 lg:gap-2 group hover:shadow-xl hover:shadow-primary/20 transition-all text-xs lg:text-base leading-none">
                  Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform hidden lg:block" />
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform lg:hidden" />
                </Link>
              </motion.div>
              
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.9}
                className="w-1/2 lg:w-44"
              >
                <Link to="/contact" className="border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 h-11 lg:h-14 w-full rounded-xl font-bold flex items-center justify-center hover:bg-white transition-all text-xs lg:text-base leading-none">
                  Contact
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 lg:mt-12 flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark tracking-tight">
                  <CountUp end={5} suffix="+" duration={2} />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium whitespace-nowrap">Years Experience</span>
              </div>
              <div className="w-px h-8 lg:h-10 bg-slate-200" />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark tracking-tight">
                  <CountUp end={500} suffix="+" duration={2} />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium whitespace-nowrap">Expert Staff</span>
              </div>
            </div>
          </div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex w-1/2 justify-end relative"
          >
            <div className="relative w-full max-w-xl aspect-square flex items-center justify-end">
              <img
                src={heroImage}
                alt="4Stone Character Desktop"
                className="w-full h-full object-contain object-right"
              />
              
              {/* Status Card Overlay - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary-dark leading-tight whitespace-nowrap">24x7 Reliable</div>
                    <div className="text-xs text-slate-500 font-medium">Security Response</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements - Desktop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
