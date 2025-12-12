import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Megaphone, Smartphone, Box, LineChart, ArrowRight, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BackgroundScene3D } from '../components/Scene3D';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Brand Identity",
    tagline: "The Foundation of Distinction",
    description: "We craft visual identities that transcend trends. From logo systems to brand guidelines, we create the foundation upon which digital legacies are built.",
    features: [
      "Strategic brand positioning",
      "Logo design & visual systems",
      "Typography & color palettes",
      "Brand guidelines & standards",
      "Verbal identity & tone of voice"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    id: "development",
    icon: Code,
    title: "Web Development",
    tagline: "Engineering Excellence",
    description: "Performance meets beauty. We build digital experiences that load instantly, scale infinitely, and age gracefully. Every line of code is crafted with intention.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "Content management systems",
      "API development & integration",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  },
  {
    id: "immersive",
    icon: Box,
    title: "3D & Immersive",
    tagline: "Beyond the Flat Screen",
    description: "Step into the third dimension. We create WebGL experiences, virtual showrooms, and interactive 3D content that transforms how users engage with your brand.",
    features: [
      "WebGL & Three.js development",
      "Virtual product showrooms",
      "Interactive 3D experiences",
      "AR/VR prototyping",
      "Real-time visualizations"
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    tagline: "Premium in Your Pocket",
    description: "Native and cross-platform applications that feel as refined as they function. We extend your brand experience seamlessly to every device.",
    features: [
      "iOS & Android development",
      "React Native applications",
      "Progressive web apps",
      "App Store optimization",
      "Continuous maintenance"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Visibility with Elegance",
    description: "Strategic visibility that respects your brand's sophistication. We attract the right audience through refined campaigns and thoughtful content.",
    features: [
      "SEO & content strategy",
      "Paid media campaigns",
      "Social media management",
      "Email marketing",
      "Analytics & reporting"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: "strategy",
    icon: LineChart,
    title: "Digital Strategy",
    tagline: "The Blueprint for Success",
    description: "Before a single pixel is placed, we understand your vision. Our strategic process ensures every decision serves your long-term goals.",
    features: [
      "Digital transformation",
      "User research & testing",
      "Competitive analysis",
      "Technology consulting",
      "Growth roadmapping"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  }
];

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <SEOHead 
        title="Services | Prismeek - Digital Atelier"
        description="Explore our bespoke digital services: brand identity, web development, 3D experiences, mobile apps, and strategic consulting for luxury brands."
        keywords={["web development", "brand identity", "3D web design", "mobile apps", "digital marketing", "luxury services"]}
      />
      
      <BackgroundScene3D />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Our Expertise</span>
          <h1 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream mb-8">
            The <span className="text-p-gold italic">Atelier</span>
          </h1>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-xl max-w-3xl mx-auto">
            Each discipline, mastered. Each service, tailored. We bring together the finest digital crafts 
            to create experiences that command attention.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                activeService === service.id
                  ? 'bg-p-gold text-p-black border-p-gold'
                  : 'border-p-ink/20 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60 hover:border-p-gold hover:text-p-gold'
              }`}
            >
              <service.icon className="w-4 h-4" />
              {service.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <currentService.icon className="w-8 h-8 text-p-gold" />
                <span className="text-p-gold text-xs tracking-widest uppercase">{currentService.tagline}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-p-ink dark:text-p-cream mb-8">
                {currentService.title}
              </h2>
              
              <p className="text-p-ink/70 dark:text-p-cream/70 text-lg leading-relaxed mb-10">
                {currentService.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {currentService.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-p-ink/60 dark:text-p-cream/60"
                  >
                    <Check className="w-4 h-4 text-p-gold flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-p-gold text-p-black text-xs uppercase tracking-widest hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-p-gold/10 blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 bg-white/50 dark:bg-white/[0.02] border border-p-ink/5 dark:border-white/5 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-p-ink dark:text-p-cream mb-6">
            Ready to Begin Your <span className="text-p-gold italic">Legacy?</span>
          </h2>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-lg max-w-2xl mx-auto mb-10">
            We accept a limited number of commissions per year to maintain our standards of excellence. 
            Let's discuss how we can elevate your brand.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-p-gold text-p-black text-xs uppercase tracking-widest hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
          >
            Start the Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
