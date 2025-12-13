import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 md:py-32 px-6 bg-p-charcoal dark:bg-p-charcoal text-p-cream relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-20" />
         
         <div className="absolute inset-0 bg-gradient-to-b from-p-emerald/15 via-transparent to-p-amethyst/10 pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="inline-flex items-center gap-3 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    <span className="text-violet-400 text-[10px] tracking-[0.4em] uppercase font-mono">Industries</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-p-cream">
                    Who We <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">Work With</span>
                </h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {INDUSTRIES.map((industry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="px-6 md:px-8 py-3 md:py-4 glass rounded-full group cursor-default transition-all duration-500 hover:bg-violet-500/10 hover:border-violet-500/30"
                    >
                        <span className="text-base md:text-xl font-serif italic text-white/80 group-hover:text-violet-400 transition-colors">{industry}</span>
                    </motion.div>
                ))}
            </div>
         </div>
    </section>
  );
};

export default Industries;
