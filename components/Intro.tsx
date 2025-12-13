import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-p-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.5, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,170,110,0.15) 0%, transparent 70%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-p-gold/10"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-p-gold/20"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: -360 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="relative w-56 h-56 md:w-72 md:h-72 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8D4A8" />
                <stop offset="50%" stopColor="#C8AA6E" />
                <stop offset="100%" stopColor="#8C7548" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <motion.path
              d="M50 8 L92 88 L8 88 Z"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.8"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            />
            
            <motion.path
              d="M50 8 L50 88"
              stroke="#C8AA6E"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            />
            <motion.path
              d="M50 48 L92 88"
              stroke="#C8AA6E"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
            />
            <motion.path
              d="M50 48 L8 88"
              stroke="#C8AA6E"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
            />

            <motion.circle 
              cx="50" cy="48" r="3" 
              fill="url(#goldGradient)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6, type: "spring", stiffness: 200 }}
            />
            
            <motion.circle 
              cx="50" cy="48" r="8" 
              fill="none"
              stroke="#C8AA6E"
              strokeWidth="0.2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
            />
          </svg>
        </div>
        
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-p-cream font-logo text-5xl md:text-7xl tracking-wide">
              <span className="bg-gradient-to-r from-p-gold-light via-p-gold to-p-gold-dim bg-clip-text text-transparent">
                Prismeek
              </span>
            </h1>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 3.3, duration: 1 }}
          className="mt-6 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-p-gold/50" />
          <span className="text-[10px] text-p-gold uppercase tracking-[0.5em] font-mono">
            Digital Atelier
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-p-gold/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[8px] text-p-cream/30 uppercase tracking-[0.3em] font-mono">Entering</span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-p-gold/50 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
