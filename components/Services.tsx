import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Gem, TrendingUp, Cpu, ArrowRight, Sparkles } from 'lucide-react';

const SERVICE_CATALOG = [
  {
    id: "01",
    title: "Web Platforms",
    icon: <Monitor size={28} strokeWidth={1.5} />,
    description: "Architecting digital estates. We build high-performance websites that serve as the foundation of your brand's digital existence.",
    capabilities: ["Corporate Flagships", "E-Commerce Ateliers", "Immersive WebGL", "Headless CMS"],
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "02",
    title: "Software Engineering",
    icon: <Database size={28} strokeWidth={1.5} />,
    description: "Precision tools for enterprise. Scalable, secure, and custom-built systems that operate with Swiss-watch reliability.",
    capabilities: ["SaaS Architecture", "Cloud Infrastructure", "Custom API Integrations", "Business Logic"],
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: "03",
    title: "Mobile Ecosystems",
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    description: "Intimate touchpoints. Native and cross-platform applications designed to feel like an extension of the user's intent.",
    capabilities: ["iOS & Android", "React Native", "App Store Strategy", "UI/UX Design"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "04",
    title: "Brand Identity",
    icon: <Gem size={28} strokeWidth={1.5} />,
    description: "Visual alchemy. We distill your essence into a visual language that communicates authority, rarity, and trust.",
    capabilities: ["Visual Systems", "Rebranding", "Art Direction", "Motion Graphics"],
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "05",
    title: "Growth Strategy",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    description: "Visibility for the elite. Data-driven marketing strategies that ensure your brand is revered in the right circles.",
    capabilities: ["Search Authority (SEO)", "Content Curation", "Performance Analytics", "Market Positioning"],
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: "06",
    title: "AI Concierge",
    icon: <Cpu size={28} strokeWidth={1.5} />,
    description: "The future of service. Integrating intelligent agents to automate luxury client interactions and personalize experiences.",
    capabilities: ["LLM Integration", "Workflow Automation", "Predictive Data", "AI Consulting"],
    gradient: "from-p-gold/20 to-yellow-500/20"
  }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-40 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-p-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-radial from-p-amethyst/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-10 border-b border-p-ink/10 dark:border-white/10"
            >
                <div>
                    <span className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full mb-6">
                        <Sparkles className="w-3 h-3 text-p-gold" />
                        <span className="text-p-gold text-[10px] tracking-[0.4em] uppercase font-mono">The Atelier</span>
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-p-ink dark:text-p-cream transition-colors duration-500">
                        Bespoke <br className="hidden md:block"/><span className="text-p-ink/30 dark:text-white/30">Capabilities</span>
                    </h2>
                </div>
                <div className="max-w-md lg:text-right">
                    <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm transition-colors duration-500">
                        A holistic suite of digital craftsmanship. From the first line of code to the final pixel, we ensure absolute excellence.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICE_CATALOG.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative p-8 glass rounded-2xl transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-p-gold/5 hover:-translate-y-2"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <motion.div 
                                className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full"
                                animate={hoveredIndex === index ? { scale: 2, opacity: 0.5 } : { scale: 1, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <span className="text-p-gold/60 font-mono text-[10px] tracking-widest px-3 py-1 glass-gold rounded-full">
                                {service.id}
                            </span>
                            <div className="text-p-ink/40 dark:text-p-cream/40 group-hover:text-p-gold transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                                {service.icon}
                            </div>
                        </div>

                        <div className="mb-8 relative z-10 flex-grow">
                            <h3 className="text-2xl font-display font-semibold text-p-ink dark:text-p-cream mb-4 group-hover:text-p-gold transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-p-ink/50 dark:text-p-cream/50 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-p-ink/5 dark:border-white/5 group-hover:border-p-gold/20 transition-colors duration-500">
                             <ul className="space-y-3">
                                {service.capabilities.map((cap, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-p-ink/40 dark:text-p-cream/40 group-hover:text-p-ink/70 dark:group-hover:text-p-cream/70 transition-colors font-mono">
                                        <span className="w-1.5 h-1.5 bg-p-gold rounded-full" />
                                        {cap}
                                    </li>
                                ))}
                             </ul>
                        </div>
                        
                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-p-gold flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                             <ArrowRight className="text-p-black" size={18} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                 <p className="text-p-ink/40 dark:text-p-cream/40 text-sm mb-8 font-light">
                    Have a unique requirement?
                 </p>
                 <a 
                    href="#contact" 
                    className="group inline-flex items-center gap-3 px-10 py-4 glass-gold text-p-gold text-[10px] uppercase tracking-[0.2em] font-mono rounded-full hover:bg-p-gold hover:text-p-black transition-all duration-500"
                 >
                    <Sparkles size={14} />
                    Request Private Consultation
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </a>
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
