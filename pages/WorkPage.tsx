import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS, INDUSTRIES } from '../constants';
import SEOHead from '../components/SEOHead';
import { BackgroundScene3D } from '../components/Scene3D';

const categories = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <SEOHead 
        title="Our Work | Prismeek - Digital Atelier"
        description="Explore our portfolio of bespoke digital experiences crafted for luxury brands, hospitality, fintech, and more."
        keywords={["portfolio", "case studies", "luxury websites", "web design examples", "digital experiences"]}
      />
      
      <BackgroundScene3D />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream mb-8">
            Our <span className="text-p-gold italic">Legacy</span>
          </h1>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-xl max-w-3xl mx-auto">
            Each project is a testament to our commitment to excellence. 
            Explore the digital estates we've crafted for visionary brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-p-gold text-p-black border-p-gold'
                  : 'border-p-ink/20 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60 hover:border-p-gold hover:text-p-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={`/work/${item.slug}`} className="block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={item.image}
                      alt={item.client}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredItem === item.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-p-black/90 via-p-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredItem === item.id ? 1 : 0,
                        y: hoveredItem === item.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white/70 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center gap-2 text-p-gold text-xs uppercase tracking-widest">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-p-gold text-[10px] tracking-widest uppercase">{item.category}</span>
                      <span className="text-p-ink/30 dark:text-p-cream/30 text-xs">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-p-ink dark:text-p-cream group-hover:text-p-gold transition-colors">
                      {item.client}
                    </h3>
                  </div>
                </Link>
                
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-p-gold hover:text-p-black"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6 text-center">Industries</span>
          <h2 className="text-3xl md:text-5xl font-serif text-p-ink dark:text-p-cream mb-12 text-center">
            Expertise Across <span className="text-p-gold italic">Sectors</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 border border-p-ink/10 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60 text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 bg-white/50 dark:bg-white/[0.02] border border-p-ink/5 dark:border-white/5 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-p-ink dark:text-p-cream mb-6">
            Your Vision, <span className="text-p-gold italic">Our Craft</span>
          </h2>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-lg max-w-2xl mx-auto mb-10">
            Every great project begins with a conversation. 
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-p-gold text-p-black text-xs uppercase tracking-widest hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
          >
            Begin Your Commission
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
