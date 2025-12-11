import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Layers, Trophy } from 'lucide-react';
import SEOHead, { generateCaseStudySEO } from '../components/SEOHead';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PORTFOLIO_ITEMS.find(p => p.slug === slug);
  const seoData = slug ? generateCaseStudySEO(slug) : {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-p-paper dark:bg-p-black text-p-ink dark:text-p-cream">
            <div className="text-center">
                <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
                <Link to="/" className="text-p-gold hover:underline">Return Home</Link>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-p-paper dark:bg-p-black min-h-screen pt-32 pb-20 px-6">
        <SEOHead 
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          ogImage={project?.image}
          ogType="article"
          structuredData={seoData.structuredData}
        />
        <div className="max-w-7xl mx-auto">
            <Link to="/#work" className="inline-flex items-center gap-2 text-p-ink/50 dark:text-p-cream/50 hover:text-p-gold transition-colors mb-12 text-xs uppercase tracking-widest">
                <ArrowLeft size={14} /> Back to Archive
            </Link>

            {/* Hero Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-20"
            >
                <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-b border-p-ink/10 dark:border-white/10 pb-12">
                    <div className="max-w-3xl">
                        <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">{project.category} — {project.year}</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream leading-[0.9] mb-8">{project.client}</h1>
                        <p className="text-xl md:text-2xl text-p-ink/70 dark:text-p-cream/70 font-light leading-relaxed max-w-2xl">
                            {project.description}
                        </p>
                    </div>
                    <a href={project.link} className="flex flex-col gap-4 min-w-[200px]">
                         <button className="px-8 py-4 bg-p-gold text-p-black text-xs uppercase tracking-[0.2em] hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 font-medium">
                            Live Preview
                         </button>
                    </a>
                </div>
            </motion.div>

            {/* Main Hero Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1.2 }}
                className="w-full h-[60vh] md:h-[80vh] overflow-hidden mb-24 relative"
            >
                 <img src={project.image} alt={project.client} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                <div className="lg:col-span-4 space-y-12">
                     <div>
                        <h3 className="text-lg font-serif text-p-ink dark:text-p-cream mb-4 border-b border-p-gold/30 pb-2 inline-block">The Challenge</h3>
                        <p className="text-p-ink/70 dark:text-p-cream/70 text-sm leading-relaxed font-light">
                            {project.details?.challenge}
                        </p>
                     </div>
                     <div>
                        <h3 className="text-lg font-serif text-p-ink dark:text-p-cream mb-4 border-b border-p-gold/30 pb-2 inline-block">Our Approach</h3>
                        <p className="text-p-ink/70 dark:text-p-cream/70 text-sm leading-relaxed font-light">
                            {project.details?.solution}
                        </p>
                     </div>
                     
                     <div className="pt-8 border-t border-p-ink/10 dark:border-white/10">
                         <h4 className="text-xs uppercase tracking-widest text-p-ink/40 dark:text-p-cream/40 mb-6">Tech Stack</h4>
                         <div className="flex flex-wrap gap-3">
                             {project.details?.stack?.map(tech => (
                                 <span key={tech} className="px-3 py-1 border border-p-ink/10 dark:border-white/10 text-[10px] uppercase tracking-wider text-p-ink/60 dark:text-p-cream/60">
                                     {tech}
                                 </span>
                             ))}
                         </div>
                     </div>
                </div>

                <div className="lg:col-span-8">
                     <div className="grid grid-cols-1 gap-12">
                         {project.details?.gallery?.map((img, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full aspect-video overflow-hidden"
                             >
                                 <img src={img} alt="Detail view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                             </motion.div>
                         ))}
                     </div>
                     
                     <div className="mt-20 p-12 bg-p-stone/30 dark:bg-white/5 border border-p-ink/5 dark:border-white/5 backdrop-blur-sm">
                         <div className="flex items-start gap-6">
                            <Trophy className="text-p-gold w-12 h-12 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-serif text-p-ink dark:text-p-cream mb-4">The Outcome</h3>
                                <p className="text-p-ink/80 dark:text-p-cream/80 font-light leading-relaxed">
                                    {project.details?.outcome}
                                </p>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
            
            <div className="text-center pt-20 border-t border-p-ink/10 dark:border-white/10">
                 <h2 className="text-3xl font-serif text-p-ink dark:text-p-cream mb-8">Ready to build your legacy?</h2>
                 <Link to="/#contact" className="inline-block px-12 py-4 bg-p-gold text-p-black text-xs uppercase tracking-[0.2em] hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500">
                    Start a Project
                 </Link>
            </div>
        </div>
    </div>
  );
};

export default CaseStudy;