import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-p-stone/30 dark:bg-p-charcoal/30 relative overflow-hidden">
        {/* Background Color Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-p-amethyst/5 dark:bg-p-amethyst/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">The Patrons</span>
                <h2 className="text-4xl md:text-6xl font-serif text-p-ink dark:text-p-cream">Voices of <span className="italic font-light text-p-gold">Trust</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-10 border border-p-ink/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm relative group hover:border-p-gold/30 transition-colors duration-500"
                    >
                        <Quote className="text-p-gold/20 w-12 h-12 mb-6 group-hover:text-p-gold/50 transition-colors" />
                        <p className="text-p-ink/80 dark:text-p-cream/80 font-light leading-relaxed mb-8 italic">"{t.text}"</p>
                        
                        <div>
                            <p className="text-p-ink dark:text-p-cream font-serif text-lg">{t.author}</p>
                            <p className="text-p-gold text-xs uppercase tracking-widest mt-1">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;