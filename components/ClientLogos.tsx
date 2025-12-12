import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  {
    name: "OJAS",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
        <text x="0" y="28" fontFamily="serif" fontSize="24" fontWeight="bold">OJAS</text>
        <circle cx="75" cy="18" r="4" className="opacity-80" />
      </svg>
    )
  },
  {
    name: "VANYA",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
        <text x="10" y="28" fontFamily="sans-serif" fontSize="20" letterSpacing="4" fontWeight="300">VANYA</text>
        <rect x="0" y="10" width="2" height="20" />
      </svg>
    )
  },
  {
    name: "AETHEL",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
        <path d="M10 25 L20 10 L30 25" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="38" y="28" fontFamily="sans-serif" fontSize="20" fontWeight="600" letterSpacing="1">AETHEL</text>
      </svg>
    )
  },
  {
    name: "KROMA",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
         <circle cx="15" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
         <text x="35" y="28" fontFamily="sans-serif" fontSize="22" fontWeight="800" letterSpacing="-1">KROMA</text>
      </svg>
    )
  },
  {
    name: "ZENITH",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
        <text x="5" y="27" fontFamily="serif" fontSize="20" letterSpacing="3" fontStyle="italic">ZENITH</text>
        <line x1="0" y1="32" x2="90" y2="32" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    name: "NEXUS",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
        <rect x="0" y="15" width="10" height="10" />
        <rect x="12" y="15" width="10" height="10" className="opacity-50" />
        <text x="32" y="28" fontFamily="sans-serif" fontSize="20" letterSpacing="2" fontWeight="bold">NEXUS</text>
      </svg>
    )
  },
  {
    name: "AURA",
    art: (
      <svg viewBox="0 0 120 40" className="w-full h-10 fill-current">
         <text x="0" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="300">Aura.</text>
      </svg>
    )
  }
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-p-paper dark:bg-p-black border-y border-p-ink/5 dark:border-white/5 overflow-hidden relative transition-colors duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[10px] text-p-ink/40 dark:text-p-cream/40 uppercase tracking-[0.3em] font-mono mb-10"
        >
            Trusted by Visionary Brands
        </motion.p>
        
        <div className="flex w-[300%] animate-scroll">
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                <div 
                    key={i} 
                    className="flex-1 flex items-center justify-center min-w-[160px] md:min-w-[200px] opacity-30 dark:opacity-20 hover:opacity-100 hover:text-p-gold transition-all duration-500 group"
                >
                    <div className="w-28 text-p-ink dark:text-p-cream group-hover:scale-110 transition-transform duration-300">
                        {logo.art}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-p-paper dark:from-p-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-p-paper dark:from-p-black to-transparent z-10" />
    </section>
  );
};

export default ClientLogos;
