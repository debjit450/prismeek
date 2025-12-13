import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';
import { BackgroundScene3D } from '../components/Scene3D';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <SEOHead 
        title="The Journal - Insights on Luxury Digital Design & AI | Prismeek"
        description="Read Prismeek's journal for insights on luxury digital design, brand strategy, AI integration, and the future of premium web experiences. Expert perspectives from India's leading digital atelier."
        keywords={[
          "digital design blog", "luxury branding insights", "web development articles", 
          "UX design blog", "creative agency blog india", "ai development insights",
          "luxury web design tips", "digital strategy articles", "brand design blog"
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "The Prismeek Journal",
          "description": "Insights on luxury digital design, brand strategy, and AI integration",
          "url": "https://prismeek.com/journal",
          "publisher": { "@id": "https://prismeek.com/#organization" },
          "blogPost": BLOG_POSTS.map(post => ({
            "@type": "BlogPosting",
            "@id": `https://prismeek.com/journal/${post.slug}`,
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.publishedAt,
            "author": {
              "@type": "Person",
              "name": post.author.name
            }
          }))
        }}
      />
      
      <BackgroundScene3D />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">The Journal</span>
          <h1 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream mb-8">
            Insights & <span className="text-p-gold italic">Perspectives</span>
          </h1>
          <p className="text-p-ink/60 dark:text-p-cream/60 text-lg max-w-2xl mx-auto">
            Explorations in digital craftsmanship, luxury branding, and the art of creating exceptional experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {BLOG_CATEGORIES.map((category) => (
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

        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <Link to={`/journal/${filteredPosts[0].slug}`} className="group block">
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] mb-8">
                <img
                  src={filteredPosts[0].featuredImage}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-p-black/80 via-p-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-p-gold text-xs tracking-widest uppercase mb-4 block">
                    Featured — {filteredPosts[0].category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 group-hover:text-p-gold transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-white/70 text-lg max-w-2xl mb-6 hidden md:block">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-white/50 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(filteredPosts[0].publishedAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link to={`/journal/${post.slug}`}>
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-p-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <span className="text-p-gold text-[10px] tracking-widest uppercase mb-3 block">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-serif text-p-ink dark:text-p-cream mb-3 group-hover:text-p-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-p-ink/50 dark:text-p-cream/50 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-p-ink/40 dark:text-p-cream/40 text-xs">
                  <span>{post.readTime}</span>
                  <span className="flex items-center gap-2 text-p-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
