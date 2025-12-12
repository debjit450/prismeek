import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section id="philosophy" ref={containerRef} className="py-32 md:py-48 px-6 bg-p-stone/50 dark:bg-p-charcoal relative overflow-hidden transition-colors duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none"
        >
            <h1 className="text-[20vw] md:text-[25vw] leading-none font-display font-bold text-p-ink/[0.03] dark:text-p-cream/[0.02] whitespace-nowrap">PURITY</h1>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-p-gold/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <div className="flex flex-col items-center mb-16">
                     <motion.div
                        className="w-[1px] h-16 bg-gradient-to-b from-transparent via-p-gold to-transparent mb-6"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                     />
                     <span className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full">
                        <Sparkles className="w-3 h-3 text-p-gold" />
                        <span className="text-p-gold text-[10px] tracking-[0.4em] uppercase font-mono">The Philosophy</span>
                     </span>
                </div>
                
                <motion.h2 
                    style={{ opacity }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-p-ink dark:text-p-cream leading-[1.2] mb-20 transition-colors duration-500"
                >
                    <span className="opacity-40">Luxury is the </span>
                    <span className="bg-gradient-to-r from-p-gold-light via-p-gold to-p-gold-dim bg-clip-text text-transparent italic">absence</span>
                    <span className="opacity-40"> of the unnecessary. We craft digital silence in a world of </span>
                    <span className="text-p-ink dark:text-white font-medium">noise</span>
                    <span className="opacity-40">.</span>
                </motion.h2>

                <motion.div 
                    style={{ y: y2 }} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 glass rounded-2xl group hover:bg-p-gold/5 transition-all duration-500"
                    >
                        <h3 className="text-xl font-display font-semibold text-p-ink dark:text-p-cream mb-4 flex items-center gap-3 group-hover:text-p-gold transition-colors">
                            <span className="w-2 h-2 bg-p-gold rounded-full" />
                            Bespoke Only
                        </h3>
                        <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm">
                            We reject the industrialization of design. Every pixel, every line of code is hand-crafted for the specific needs of our clientele. We do not use templates; we build legacies from the ground up.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-8 glass rounded-2xl group hover:bg-p-gold/5 transition-all duration-500"
                    >
                        <h3 className="text-xl font-display font-semibold text-p-ink dark:text-p-cream mb-4 flex items-center gap-3 group-hover:text-p-gold transition-colors">
                            <span className="w-2 h-2 bg-p-gold rounded-full" />
                            Timelessness
                        </h3>
                        <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm">
                            Trends fade. Style endures. Our aesthetic is rooted in classical proportions and modern typography, ensuring your digital presence remains relevant for decades, not days.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
};

export default Manifesto;
