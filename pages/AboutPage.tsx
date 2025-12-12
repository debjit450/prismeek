import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BackgroundScene3D } from '../components/Scene3D';

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Creative Director",
    bio: "15 years shaping digital experiences for luxury brands across three continents.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Brand Strategist",
    bio: "Former creative lead at Ogilvy, specializing in heritage brand transformation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Vikram Desai",
    role: "Technical Director",
    bio: "Full-stack architect with a passion for WebGL and immersive experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Anjali Rao",
    role: "UX Director",
    bio: "Human-centered design advocate with expertise in luxury e-commerce.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

const stats = [
  { number: "10+", label: "Years of Excellence", icon: Award },
  { number: "150+", label: "Projects Delivered", icon: Sparkles },
  { number: "40+", label: "Global Clients", icon: Globe },
  { number: "12", label: "Artisan Team", icon: Users }
];

const values = [
  {
    title: "Craftsmanship Over Speed",
    description: "We don't rush. Every project receives the attention it deserves, because excellence cannot be expedited."
  },
  {
    title: "Partnership, Not Service",
    description: "We don't take clients—we form partnerships. Your success is our success, measured in years, not invoices."
  },
  {
    title: "Invisible Excellence",
    description: "The best design is felt, not noticed. We create experiences so seamless they feel inevitable."
  },
  {
    title: "Timeless Over Trendy",
    description: "Trends fade. We build digital assets that appreciate over time, not depreciate with fashion."
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <SEOHead 
        title="About Prismeek | Digital Atelier"
        description="Learn about Prismeek, a bespoke digital atelier crafting premium web experiences for luxury brands worldwide."
        keywords={["about prismeek", "digital agency", "luxury web design", "creative team"]}
      />
      
      <BackgroundScene3D />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream mb-8">
            The <span className="text-p-gold italic">Atelier</span>
          </h1>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Born from a belief that digital experiences deserve the same care as haute couture, 
            Prismeek is where technology meets artistry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-8 bg-white/50 dark:bg-white/[0.02] border border-p-ink/5 dark:border-white/5 backdrop-blur-sm"
            >
              <stat.icon className="w-6 h-6 text-p-gold mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-serif text-p-ink dark:text-p-cream mb-2">{stat.number}</p>
              <p className="text-p-ink/50 dark:text-p-cream/50 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif text-p-ink dark:text-p-cream mb-8">
                Digital Estates,<br /><span className="text-p-gold italic">Not Websites</span>
              </h2>
              <div className="space-y-6 text-p-ink/70 dark:text-p-cream/70 text-lg leading-relaxed">
                <p>
                  In an era of templates and quick fixes, we choose the path of the artisan. 
                  Each project in our atelier is treated as a commission—unique, considered, and crafted to endure.
                </p>
                <p>
                  We believe that digital presence is not merely a business necessity but an expression of 
                  brand identity. Like a bespoke suit or a heritage timepiece, a digital estate should 
                  reflect the soul of its owner.
                </p>
                <p>
                  Our clients don't come to us for websites. They come to us to build legacies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                  alt="Prismeek Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-p-gold/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6 text-center">Values</span>
          <h2 className="text-4xl md:text-6xl font-serif text-p-ink dark:text-p-cream mb-16 text-center">
            What We <span className="text-p-gold italic">Believe</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-10 bg-white/50 dark:bg-white/[0.02] border border-p-ink/5 dark:border-white/5 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-serif text-p-ink dark:text-p-cream mb-4">{value.title}</h3>
                <p className="text-p-ink/60 dark:text-p-cream/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6 text-center">The Artisans</span>
          <h2 className="text-4xl md:text-6xl font-serif text-p-ink dark:text-p-cream mb-16 text-center">
            Our <span className="text-p-gold italic">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-square mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-p-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-serif text-p-ink dark:text-p-cream mb-1">{member.name}</h3>
                <p className="text-p-gold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-p-ink/50 dark:text-p-cream/50 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
