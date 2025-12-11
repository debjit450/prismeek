import React from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-p-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Abstract Prism Logo Art */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
           {/* Animated Gradient Background Glow */}
           <motion.div 
             className="absolute inset-0 bg-p-gold/20 blur-[60px] rounded-full"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1.5, opacity: 0.5 }}
             transition={{ duration: 2, ease: "easeInOut" }}
           />

           <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Outer Triangle Frame */}
              <motion.path
                d="M50 10 L90 85 L10 85 Z"
                fill="none"
                stroke="#C8AA6E"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Inner Refraction Lines */}
              <motion.path
                d="M50 10 L50 85"
                stroke="#EAEAEA"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
              />
              <motion.path
                d="M50 45 L90 85"
                stroke="#C8AA6E"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
              <motion.path
                d="M50 45 L10 85"
                stroke="#C8AA6E"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              />

              {/* Central Core */}
              <motion.circle 
                cx="50" cy="55" r="2" 
                fill="#C8AA6E"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
              />
           </svg>
        </div>
        
        {/* Text Reveal with New Font */}
        <motion.div 
            className="overflow-hidden p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
        >
            <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-p-cream font-cursive text-5xl md:text-7xl tracking-wide"
            >
                Prismeek
            </motion.h1>
        </motion.div>
        
        <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.5 }}
             transition={{ delay: 3, duration: 1 }}
             className="text-[10px] text-p-gold uppercase tracking-[0.5em] font-sans"
        >
            Atelier
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;