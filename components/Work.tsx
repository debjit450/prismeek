import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="work" className="py-32 md:py-48 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-p-ink/10 dark:border-white/10 pb-10"
        >
            <div>
                <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Our Legacy</span>
                <h2 className="text-5xl md:text-7xl font-serif text-p-ink dark:text-p-cream transition-colors duration-500">Selected <span className="italic text-p-ink/30 dark:text-white/30">Works</span></h2>
            </div>
            <div className="text-p-ink/50 dark:text-p-cream/50 text-sm max-w-xs mt-8 md:mt-0 font-light transition-colors duration-500 text-right">
                Defining the next era of digital luxury through curation and code.
            </div>
        </motion.div>

        <div className="space-y-40">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
            ))}
        </div>
        
        <div className="mt-40 text-center">
             <a href="#contact" className="inline-flex items-center gap-3 text-p-gold text-xs uppercase tracking-[0.2em] hover:text-p-ink dark:hover:text-white transition-colors group border border-p-gold/30 px-8 py-3 rounded-full hover:bg-p-gold/5">
                <span>View Full Archive</span>
                <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
             </a>
        </div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  item: typeof PORTFOLIO_ITEMS[number];
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-center group`}
        >
            {/* Image */}
            <div className="w-full md:w-3/5 relative cursor-none overflow-hidden">
                <div className="absolute inset-0 bg-p-black/10 dark:bg-p-gold/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-700 pointer-events-none"></div>
                <Link to={`/work/${item.slug}`}>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full aspect-[16/10] overflow-hidden"
                    >
                        <img 
                            src={item.image} 
                            alt={item.client} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform scale-100 group-hover:scale-105" 
                        />
                    </motion.div>
                </Link>
                <div className="hidden md:flex absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <Link to={`/work/${item.slug}`} className="px-6 py-3 bg-p-paper/90 dark:bg-p-black/90 backdrop-blur text-p-ink dark:text-p-cream text-[10px] tracking-[0.2em] uppercase rounded-full border border-p-ink/10 dark:border-white/10 hover:bg-p-gold hover:text-p-black transition-colors">
                        View Case Study
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/5 relative">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-p-gold text-[10px] font-mono">0{index + 1}</span>
                    <span className="h-px w-12 bg-p-gold/30"></span>
                    <span className="text-p-gold text-[10px] font-mono">{item.year}</span>
                 </div>
                 
                 <h3 className="text-5xl md:text-6xl font-serif text-p-ink dark:text-p-cream mb-6 transition-colors duration-500">{item.client}</h3>
                 <p className="text-[10px] text-p-gold/80 uppercase tracking-[0.3em] mb-8">{item.category}</p>
                 <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed mb-10 border-l border-p-gold/30 pl-6 transition-colors duration-500 text-sm">
                    {item.description}
                 </p>
                 <Link to={`/work/${item.slug}`} className="text-p-ink dark:text-p-cream hover:text-p-gold transition-colors flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] group/btn">
                    <span>Explore Project</span>
                    <ArrowUpRight size={14} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
            </div>
        </motion.div>
    );
}

export default Work;