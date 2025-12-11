import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 px-6 bg-p-black text-p-cream border-t border-white/5 overflow-hidden relative">
         {/* Background Gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-p-emerald/10 to-transparent pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-12">Realms of Expertise</span>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {INDUSTRIES.map((industry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-8 py-4 border border-white/10 rounded-full hover:border-p-gold/50 hover:bg-white/5 transition-all duration-500 cursor-default"
                    >
                        <span className="text-lg md:text-2xl font-serif italic text-white/80 hover:text-p-gold transition-colors">{industry}</span>
                    </motion.div>
                ))}
            </div>
         </div>
    </section>
  );
};

export default Industries;