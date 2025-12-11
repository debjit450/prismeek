import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Gem, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const SERVICE_CATALOG = [
  {
    id: "01",
    title: "Web Platforms",
    icon: <Monitor size={24} strokeWidth={1} />,
    description: "Architecting digital estates. We build high-performance websites that serve as the foundation of your brand's digital existence.",
    capabilities: ["Corporate Flagships", "E-Commerce Ateliers", "Immersive WebGL", "Headless CMS"]
  },
  {
    id: "02",
    title: "Software Engineering",
    icon: <Database size={24} strokeWidth={1} />,
    description: "Precision tools for enterprise. Scalable, secure, and custom-built systems that operate with Swiss-watch reliability.",
    capabilities: ["SaaS Architecture", "Cloud Infrastructure", "Custom API Integrations", "Business Logic"]
  },
  {
    id: "03",
    title: "Mobile Ecosystems",
    icon: <Smartphone size={24} strokeWidth={1} />,
    description: "Intimate touchpoints. Native and cross-platform applications designed to feel like an extension of the user's intent.",
    capabilities: ["iOS & Android", "React Native", "App Store Strategy", "UI/UX Design"]
  },
  {
    id: "04",
    title: "Brand Identity",
    icon: <Gem size={24} strokeWidth={1} />,
    description: "Visual alchemy. We distill your essence into a visual language that communicates authority, rarity, and trust.",
    capabilities: ["Visual Systems", "Rebranding", "Art Direction", "Motion Graphics"]
  },
  {
    id: "05",
    title: "Growth Strategy",
    icon: <TrendingUp size={24} strokeWidth={1} />,
    description: "Visibility for the elite. Data-driven marketing strategies that ensure your brand is revered in the right circles.",
    capabilities: ["Search Authority (SEO)", "Content Curation", "Performance Analytics", "Market Positioning"]
  },
  {
    id: "06",
    title: "AI Concierge",
    icon: <Cpu size={24} strokeWidth={1} />,
    description: "The future of service. Integrating intelligent agents to automate luxury client interactions and personalize experiences.",
    capabilities: ["LLM Integration", "Workflow Automation", "Predictive Data", "AI Consulting"]
  }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-48 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700">
        
        {/* Ambient Gradients */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-p-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-p-sage/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-p-ink/10 dark:border-white/10 pb-10"
            >
                <div>
                    <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-4">The Atelier</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-p-ink dark:text-p-cream transition-colors duration-500">
                        Bespoke <br/> <span className="italic text-p-ink/40 dark:text-white/30">Capabilities</span>
                    </h2>
                </div>
                <div className="max-w-sm mt-8 md:mt-0 text-right">
                    <p className="text-p-ink/60 dark:text-p-cream/60 font-light leading-relaxed text-sm transition-colors duration-500">
                        A holistic suite of digital craftsmanship. From the first line of code to the final pixel, we ensure absolute excellence.
                    </p>
                </div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICE_CATALOG.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative p-8 md:p-10 border border-p-ink/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-700 overflow-hidden flex flex-col h-full hover:border-p-gold/30"
                    >
                        {/* Hover Gradient Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-p-gold/0 via-p-gold/5 to-p-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* ID & Icon */}
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <span className="text-p-gold/50 font-mono text-[10px] tracking-widest border border-p-gold/20 px-2 py-1 rounded-full">
                                {service.id}
                            </span>
                            <div className="text-p-ink/40 dark:text-p-cream/40 group-hover:text-p-gold transition-colors duration-500 transform group-hover:scale-110">
                                {service.icon}
                            </div>
                        </div>

                        {/* Title & Desc */}
                        <div className="mb-10 relative z-10 flex-grow">
                            <h3 className="text-2xl font-serif text-p-ink dark:text-p-cream mb-4 group-hover:text-p-gold dark:group-hover:text-p-gold transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-p-ink/60 dark:text-p-cream/50 text-sm leading-relaxed font-light transition-colors">
                                {service.description}
                            </p>
                        </div>

                        {/* Capabilities List */}
                        <div className="relative z-10 pt-6 border-t border-p-ink/5 dark:border-white/5 group-hover:border-p-gold/20 transition-colors duration-500">
                             <ul className="space-y-3">
                                {service.capabilities.map((cap, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-p-ink/40 dark:text-p-cream/40 group-hover:text-p-ink/70 dark:group-hover:text-p-cream/70 transition-colors">
                                        <span className="w-1 h-1 bg-p-gold rounded-full opacity-50"></span>
                                        {cap}
                                    </li>
                                ))}
                             </ul>
                        </div>
                        
                        {/* Interactive Corner */}
                        <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 bg-p-gold">
                             <ArrowRight className="text-p-black -ml-1 -mt-1" size={16} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 text-center">
                 <p className="text-p-ink/40 dark:text-p-cream/40 text-sm mb-6 font-light">
                    Have a unique requirement?
                 </p>
                 <a 
                    href="#contact" 
                    className="inline-block px-12 py-4 border border-p-gold/30 text-p-gold uppercase tracking-[0.2em] text-[10px] hover:bg-p-gold hover:text-p-black transition-all duration-500"
                 >
                    Request Private Consultation
                 </a>
            </div>
        </div>
    </section>
  );
};

export default Services;