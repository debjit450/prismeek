import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const debjit = '/debjit.jpg';
const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden border-t border-p-ink/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 bg-p-stone dark:bg-p-charcoal">
               {/* Elegant Placeholder for CEO */}
               <img 
                 src={debjit}
                 alt="Debjit Dey - Founder & Principal"
                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
               />
               
               {/* Frame Border */}
               <div className="absolute inset-0 border border-p-gold/30 m-6 pointer-events-none"></div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-p-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
             <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-p-gold"></span>
                <span className="text-p-gold text-xs tracking-[0.4em] uppercase">The Principal</span>
             </div>

             <h2 className="text-5xl md:text-7xl font-serif text-p-ink dark:text-p-cream mb-4">
                Debjit <span className="text-p-gold italic">Dey</span>
             </h2>
             <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-p-ink/60 dark:text-p-cream/60 mb-12">Founder & CEO</h3>
             
             <div className="space-y-8 text-p-ink/70 dark:text-p-cream/70 font-light leading-loose text-sm md:text-base max-w-xl">
                <p>
                  Prismeek is not an agency of thousands. It is the singular vision of Debjit Dey. As a private digital atelier, there are no account managers, no middlemen, and no layers of management to dilute the vision.
                </p>
                <p>
                  "I believe that true luxury lies in the direct connection between the craftsman and the client. When you commission Prismeek, you are engaging me directly. I personally architect, design, and oversee every aspect of your digital estate."
                </p>
                <p className="italic text-p-ink/40 dark:text-p-cream/40 text-xs">
                   *Currently accepting a limited number of personal commissions for Q2 2024.
                </p>
             </div>

             <div className="mt-16 flex items-center gap-8">
                <a href="#contact" className="group inline-flex items-center gap-4 text-p-gold text-xs uppercase tracking-[0.2em] border-b border-p-gold/30 pb-2 hover:border-p-gold transition-all">
                    Contact Debjit Directly
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                {/* Visual Signature representation */}
                <div className="font-cursive text-3xl text-p-ink/20 dark:text-p-cream/20 transform -rotate-6 select-none">
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