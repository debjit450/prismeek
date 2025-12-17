import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0A0A0F] flex items-center justify-center overflow-hidden px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.8, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Floating orb 1 - top */}
        <motion.div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(244,63,94,0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
        
        {/* Floating orb 2 - bottom left */}
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
        
        {/* Floating orb 3 - bottom right */}
        <motion.div
          className="absolute bottom-[25%] right-[10%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />
      </div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-md mx-auto">
        
        {/* Animated logo ring */}
        <motion.div
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 sm:mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            
            {/* Outer ring - animated stroke */}
            <motion.circle
              cx="50" cy="50" r="45"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 270 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ transformOrigin: 'center' }}
            />
            
            {/* Inner ring */}
            <motion.circle
              cx="50" cy="50" r="32"
              fill="none"
              stroke="rgba(139,92,246,0.3)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            
            {/* Center dot */}
            <motion.circle
              cx="50" cy="50" r="8"
              fill="url(#ringGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, delay: 1 }}
            />
            
            {/* Orbiting accent dot */}
            <motion.circle
              cx="50" cy="5" r="4"
              fill="url(#dotGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
          </svg>
          
          {/* Pulsing glow behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
              filter: 'blur(15px)',
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Brand name */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Prismeek
            </span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-[10px] sm:text-[11px] md:text-xs text-white/50 uppercase tracking-[0.3em] sm:tracking-[0.4em] mt-2 sm:mt-3 font-medium px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Web Design Agency
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          {/* Progress track */}
          <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6, #A78BFA, #8B5CF6)',
                backgroundSize: '200% 100%',
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: `${progress}%`,
                backgroundPosition: ['0% 0%', '100% 0%']
              }}
              transition={{ 
                width: { duration: 0.1 },
                backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>
          
          {/* Progress text */}
          <motion.div
            className="flex justify-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="text-[10px] sm:text-[11px] text-violet-400/70 font-mono tabular-nums">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner elements - hidden on very small screens */}
      <div className="hidden sm:block">
        <motion.div
          className="absolute top-4 left-4 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500/40 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-violet-500/40 to-transparent" />
        </motion.div>
        
        <motion.div
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-violet-500/40 to-transparent" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-violet-500/40 to-transparent" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-violet-500/40 to-transparent" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-violet-500/40 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-violet-500/40 to-transparent" />
        </motion.div>
      </div>

      {/* Bottom branding - visible on all screens */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-violet-500/30" />
        <span className="text-[8px] sm:text-[9px] text-white/30 uppercase tracking-[0.2em] font-mono">India</span>
        <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-violet-500/30" />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
