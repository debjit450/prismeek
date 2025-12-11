import React from 'react';
import { PACKAGES } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Packages: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden border-t border-p-ink/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-4">The Engagement</span>
                        <h2 className="text-5xl font-serif text-p-ink dark:text-p-cream">Tiers of <span className="italic text-p-gold">Excellence</span></h2>
                    </div>
                    <p className="text-p-ink/50 dark:text-p-cream/50 text-sm max-w-sm mt-6 md:mt-0 text-right">
                        Transparent, value-driven partnerships designed to scale with your ambition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PACKAGES.map((pkg, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-10 border ${i === 1 ? 'border-p-gold/50 bg-p-gold/5 dark:bg-p-gold/[0.05]' : 'border-p-ink/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]'} backdrop-blur-sm flex flex-col justify-between relative transition-all duration-500`}
                        >
                            {i === 1 && <span className="absolute top-0 right-0 bg-p-gold text-p-black text-[10px] uppercase tracking-widest px-3 py-1">Most Desired</span>}

                            <div>
                                <h3 className="text-3xl font-serif text-p-ink dark:text-p-cream mb-2">{pkg.name}</h3>
                                <p className="text-p-gold font-sans text-sm font-medium mb-6">{pkg.price}</p>
                                <p className="text-p-ink/60 dark:text-p-cream/60 text-sm leading-relaxed mb-8">{pkg.description}</p>

                                <ul className="space-y-4">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs text-p-ink/80 dark:text-p-cream/80 uppercase tracking-wide">
                                            <Check size={14} className="text-p-gold" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="/#contact">
                                <button className="mt-12 w-full py-4 border border-p-ink/10 dark:border-white/10 hover:bg-p-gold hover:border-p-gold hover:text-p-black transition-all duration-500 text-xs uppercase tracking-[0.2em] text-p-ink dark:text-p-cream">
                                    Inquire Now
                                </button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;