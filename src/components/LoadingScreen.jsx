import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-primary-dark flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Pulsing Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent rounded-full blur-2xl"
        />
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <img 
            src={logo} 
            alt="4 Stone Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain brightness-0 invert" 
          />
        </motion.div>
      </div>

      {/* Progress Bar Container */}
      <div className="mt-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-white/40 text-xs font-bold tracking-[0.2em] uppercase"
      >
        Initializing Security
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
