import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="work" className="py-24 md:py-40 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700" ref={containerRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-p-gold/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 pb-10 border-b border-p-ink/10 dark:border-white/10 gap-8"
        >
            <div>
                <span className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full mb-6">
                    <Sparkles className="w-3 h-3 text-p-gold" />
                    <span className="text-p-gold text-[10px] tracking-[0.4em] uppercase font-mono">Our Legacy</span>
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-p-ink dark:text-p-cream transition-colors duration-500">
                    Selected <span className="text-p-ink/30 dark:text-white/30">Works</span>
                </h2>
            </div>
            <div className="text-p-ink/50 dark:text-p-cream/50 text-sm max-w-xs font-light transition-colors duration-500 lg:text-right">
                Defining the next era of digital luxury through curation and code.
            </div>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
            ))}
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
        >
             <Link 
                to="/work"
                className="group inline-flex items-center gap-3 px-10 py-4 glass-gold text-p-gold text-[10px] uppercase tracking-[0.2em] font-mono rounded-full hover:bg-p-gold hover:text-p-black transition-all duration-500"
             >
                View Full Archive
                <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
             </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  item: typeof PORTFOLIO_ITEMS[number];
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });
    
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
    
    return (
        <motion.div 
            ref={itemRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
        >
            <motion.div 
                style={{ y: imageY }}
                className="w-full lg:w-3/5 relative"
            >
                <Link to={`/work/${item.slug}`} className="block relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-p-gold/20 to-p-amethyst/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full aspect-[16/10] overflow-hidden"
                    >
                        <img 
                            src={item.image} 
                            alt={item.client} 
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" 
                        />
                    </motion.div>
                    
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-6 py-3 glass text-p-cream text-[10px] tracking-[0.2em] uppercase font-mono rounded-full backdrop-blur-md">
                            View Case Study
                        </span>
                    </div>
                </Link>
                
                {item.link && (
                    <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-6 right-6 z-30 w-12 h-12 rounded-full glass flex items-center justify-center text-p-cream hover:bg-p-gold hover:text-p-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                    >
                        <ExternalLink size={18} />
                    </a>
                )}
            </motion.div>

            <motion.div 
                style={{ y: contentY }}
                className="w-full lg:w-2/5 relative"
            >
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-p-gold text-[10px] font-mono px-3 py-1 glass-gold rounded-full">0{index + 1}</span>
                    <span className="h-px w-12 bg-gradient-to-r from-p-gold/50 to-transparent"></span>
                    <span className="text-p-gold/60 text-[10px] font-mono">{item.year}</span>
                 </div>
                 
                 <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-p-ink dark:text-p-cream mb-4 transition-colors duration-500 group-hover:text-p-gold">
                    {item.client}
                 </h3>
                 <p className="text-[10px] text-p-gold uppercase tracking-[0.3em] mb-8 font-mono">{item.category}</p>
                 <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed mb-10 pl-6 border-l-2 border-p-gold/30 transition-colors duration-500 text-sm">
                    {item.description}
                 </p>
                 <Link to={`/work/${item.slug}`} className="group/btn inline-flex items-center gap-3 text-p-ink dark:text-p-cream hover:text-p-gold transition-colors text-[10px] uppercase tracking-[0.2em] font-mono">
                    <span>Explore Project</span>
                    <ArrowUpRight size={14} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
            </motion.div>
        </motion.div>
    );
}

export default Work;
