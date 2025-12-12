import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Quote } from 'lucide-react';

const debjit = '/debjit.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-p-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl relative group">
                <img 
                  src={debjit}
                  alt="Debjit Dey - Founder & Principal"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-p-black/80 via-p-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Debjit Dey</h3>
                  <p className="text-p-gold text-xs font-mono uppercase tracking-[0.2em]">Founder & CEO</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-p-gold/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-p-gold/10 rounded-2xl" />
              
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-p-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-p-amethyst/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
             <span className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full mb-8">
                <Sparkles className="w-3 h-3 text-p-gold" />
                <span className="text-p-gold text-[10px] tracking-[0.4em] uppercase font-mono">The Principal</span>
             </span>

             <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-p-ink dark:text-p-cream mb-2 transition-colors duration-500">
                Debjit <span className="bg-gradient-to-r from-p-gold-light via-p-gold to-p-gold-dim bg-clip-text text-transparent">Dey</span>
             </h2>
             <p className="text-sm font-mono uppercase tracking-[0.2em] text-p-ink/40 dark:text-p-cream/40 mb-12">Founder & Creative Director</p>
             
             <div className="space-y-6 text-p-ink/70 dark:text-p-cream/70 font-light leading-relaxed text-base max-w-xl">
                <p>
                  Prismeek is not an agency of thousands. It is the singular vision of Debjit Dey. As a private digital atelier, there are no account managers, no middlemen, and no layers of management to dilute the vision.
                </p>
                
                <div className="relative pl-8 py-4 border-l-2 border-p-gold/30">
                  <Quote className="absolute -left-3 -top-1 w-6 h-6 text-p-gold/50" />
                  <p className="italic text-p-ink/80 dark:text-p-cream/80">
                    "I believe that true luxury lies in the direct connection between the craftsman and the client. When you commission Prismeek, you are engaging me directly. I personally architect, design, and oversee every aspect of your digital estate."
                  </p>
                </div>
                
                <p className="text-xs text-p-gold/60 font-mono uppercase tracking-wider">
                   *Currently accepting limited commissions for Q2 2025
                </p>
             </div>

             <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-p-gold text-p-black text-xs uppercase tracking-[0.15em] font-mono rounded-full hover:bg-p-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-p-gold/20"
                >
                    Contact Debjit
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="font-cursive text-4xl text-p-ink/20 dark:text-p-cream/15 transform -rotate-6 select-none">
                    Debjit Dey
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
