import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="philosophy" ref={containerRef} className="py-40 px-6 bg-p-stone dark:bg-p-charcoal relative overflow-hidden transition-colors duration-700">
        
        {/* Parallax Background Text */}
        <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
            <h1 className="text-[25vw] leading-none font-serif text-p-ink dark:text-p-cream whitespace-nowrap">PURITY</h1>
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2 }}
                className="text-center"
            >
                <div className="flex flex-col items-center mb-12">
                     <span className="h-16 w-[1px] bg-p-gold/50 mb-6"></span>
                     <span className="text-p-gold text-xs tracking-[0.4em] uppercase">The Philosophy</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-p-ink dark:text-p-cream leading-[1.15] mb-16 transition-colors duration-500">
                    <span className="opacity-40">Luxury is the </span>
                    <span className="text-p-gold italic">absence</span>
                    <span className="opacity-40"> of the unnecessary. We craft digital silence in a world of </span>
                    <span className="text-p-ink dark:text-white font-medium">noise</span>
                    <span className="opacity-40">.</span>
                </h2>

                <motion.div style={{ y: y2 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto mt-20">
                    <div>
                        <h3 className="text-lg font-serif text-p-ink dark:text-p-cream mb-4 border-b border-p-gold/30 pb-4 inline-block">Bespoke Only</h3>
                        <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm">
                            We reject the industrialization of design. Every pixel, every line of code is hand-crafted for the specific needs of our clientele. We do not use templates; we build legacies from the ground up.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-serif text-p-ink dark:text-p-cream mb-4 border-b border-p-gold/30 pb-4 inline-block">Timelessness</h3>
                        <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm">
                            Trends fade. Style endures. Our aesthetic is rooted in classical proportions and modern typography, ensuring your digital presence remains relevant for decades, not days.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
};

export default Manifesto;