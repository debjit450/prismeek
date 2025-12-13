import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Sparkles, ArrowRight, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Packages: React.FC = () => {
    return (
        <section className="py-24 md:py-40 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8"
                >
                    <div>
                        <span className="inline-flex items-center gap-3 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            <span className="text-violet-400 text-[10px] tracking-[0.4em] uppercase font-mono">Pricing</span>
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-p-ink dark:text-p-cream">
                            Simple <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">Pricing</span>
                        </h2>
                    </div>
                    <p className="text-p-ink/50 dark:text-p-cream/50 text-sm max-w-sm lg:text-right font-light">
                        Clear pricing with no hidden fees. Pick the plan that fits your needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PACKAGES.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                            className={`relative p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-all duration-500 group ${
                                i === 1 
                                    ? 'bg-violet-500/10 border-2 border-violet-500/30 shadow-xl shadow-violet-500/10' 
                                    : 'glass hover:border-violet-500/20'
                            }`}
                        >
                            {i === 1 && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-full font-mono">
                                    <Crown size={12} />
                                    Most Popular
                                </div>
                            )}

                            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${
                                i === 0 ? 'from-cyan-500/5 to-blue-500/5' :
                                i === 1 ? 'from-violet-500/10 to-purple-500/5' :
                                'from-violet-500/5 to-purple-500/5'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-p-ink dark:text-p-cream mb-2">{pkg.name}</h3>
                                <p className="text-violet-400 font-mono text-sm font-medium mb-6">{pkg.price}</p>
                                <p className="text-p-ink/60 dark:text-p-cream/60 text-sm leading-relaxed mb-8 font-light">{pkg.description}</p>

                                <ul className="space-y-4">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[11px] text-p-ink/70 dark:text-p-cream/70 font-mono uppercase tracking-wider">
                                            <div className="w-5 h-5 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-violet-400" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="/#contact" className="relative z-10">
                                <button className={`mt-10 w-full py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-mono transition-all duration-500 flex items-center justify-center gap-2 ${
                                    i === 1 
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 hover:shadow-lg hover:shadow-violet-500/20' 
                                        : 'glass border border-p-ink/10 dark:border-white/10 text-p-ink dark:text-p-cream hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:border-transparent hover:text-white'
                                }`}>
                                    Get Started
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
