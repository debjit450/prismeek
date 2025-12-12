import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-p-stone/30 dark:bg-p-charcoal/50 relative overflow-hidden transition-colors duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-p-amethyst/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <span className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full mb-6">
                    <Sparkles className="w-3 h-3 text-p-gold" />
                    <span className="text-p-gold text-[10px] tracking-[0.4em] uppercase font-mono">The Patrons</span>
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-p-ink dark:text-p-cream">
                    Voices of <span className="bg-gradient-to-r from-p-gold-light via-p-gold to-p-gold-dim bg-clip-text text-transparent">Trust</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="p-8 md:p-10 glass rounded-2xl relative group hover:shadow-xl hover:shadow-p-gold/5 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-p-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        
                        <div className="relative z-10">
                            <Quote className="text-p-gold/30 w-10 h-10 mb-6 group-hover:text-p-gold/60 transition-colors" />
                            
                            <p className="text-p-ink/80 dark:text-p-cream/80 font-light leading-relaxed mb-8 text-sm md:text-base">
                                "{t.text}"
                            </p>
                            
                            <div className="flex items-center gap-4 pt-6 border-t border-p-ink/5 dark:border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-p-gold/20 to-p-gold/5 flex items-center justify-center">
                                    <span className="text-p-gold font-display font-bold text-lg">{t.author.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-p-ink dark:text-p-cream font-display font-semibold">{t.author}</p>
                                    <p className="text-p-gold/80 text-[10px] uppercase tracking-[0.15em] font-mono">{t.role}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-1 mt-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-3 h-3 text-p-gold fill-p-gold" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
