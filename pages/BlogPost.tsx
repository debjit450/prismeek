import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-p-ink dark:text-p-cream mb-4">Article Not Found</h1>
          <p className="text-p-ink/60 dark:text-p-cream/60 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/journal" className="text-violet-400 hover:underline">
            ← Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <SEOHead 
        title={`${post.title} | Prismeek Journal`}
        description={post.excerpt}
        keywords={[...post.tags, "luxury digital insights", "web design blog", "digital agency insights india"]}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `https://prismeek.com/journal/${post.slug}`,
          "headline": post.title,
          "description": post.excerpt,
          "image": post.featuredImage,
          "datePublished": post.publishedAt,
          "dateModified": post.publishedAt,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "image": post.author.avatar,
            "worksFor": { "@id": "https://prismeek.com/#organization" }
          },
          "publisher": { "@id": "https://prismeek.com/#organization" },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://prismeek.com/journal/${post.slug}`
          },
          "articleSection": post.category,
          "keywords": post.tags.join(', '),
          "wordCount": post.content.split(/\s+/).length,
          "timeRequired": `PT${post.readTime.match(/\d+/)?.[0] || '5'}M`,
          "inLanguage": "en-IN",
          "isAccessibleForFree": true
        }}
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/journal')}
            className="flex items-center gap-2 text-p-ink/60 dark:text-p-cream/60 hover:text-violet-400 transition-colors mb-12 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </button>

          <span className="text-violet-400 text-xs tracking-widest uppercase mb-4 block">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-p-ink dark:text-p-cream leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-12 pb-12 border-b border-p-ink/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-p-ink dark:text-p-cream font-medium">{post.author.name}</p>
                <p className="text-p-ink/50 dark:text-p-cream/50 text-sm">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-p-ink/50 dark:text-p-cream/50 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          <div 
            className="
              text-p-ink/80 dark:text-p-cream/80 
              leading-relaxed 
              [&>h2]:text-3xl [&>h2]:font-serif [&>h2]:text-p-ink dark:[&>h2]:text-p-cream [&>h2]:mt-16 [&>h2]:mb-6
              [&>h3]:text-xl [&>h3]:font-serif [&>h3]:text-p-ink dark:[&>h3]:text-p-cream [&>h3]:mt-12 [&>h3]:mb-4
              [&>p]:mb-6 [&>p]:text-lg
              [&>blockquote]:border-l-4 [&>blockquote]:border-violet-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-2xl [&>blockquote]:font-serif [&>blockquote]:my-12 [&>blockquote]:text-p-ink dark:[&>blockquote]:text-p-cream
              [&>ul]:list-none [&>ul]:pl-0 [&>ul]:my-8
              [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:mb-3
              [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-3 [&>ul>li]:before:w-2 [&>ul>li]:before:h-px [&>ul>li]:before:bg-violet-500
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-8
              [&>ol>li]:mb-3 [&>ol>li]:marker:text-violet-500
              [&>strong]:text-p-ink dark:[&>strong]:text-p-cream [&>strong]:font-semibold
              [&>hr]:border-p-ink/10 dark:[&>hr]:border-white/10 [&>hr]:my-12
            "
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                .replace(/^\*\*(.*)\*\*$/gm, '<strong>$1</strong>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^> "(.*)"$/gm, '<blockquote>"$1"</blockquote>')
                .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
                .replace(/^---$/gm, '<hr />')
                .replace(/^\*(.*)$/gm, '<p><em>$1</em></p>')
                .replace(/^(\d+)\. \*\*(.*)\*\*: (.*)$/gm, '<p><strong>$2</strong>: $3</p>')
                .replace(/^- (.*$)/gm, '<li>$1</li>')
                .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(?!<[hpbulo])/gm, '<p>')
                .replace(/(?<![>\n])$/gm, '</p>')
                .replace(/<p><\/p>/g, '')
                .replace(/<p>(<[hpbulo])/g, '$1')
                .replace(/(<\/[hpbulo][^>]*>)<\/p>/g, '$1')
            }}
          />
        </motion.div>

        <div className="flex flex-wrap items-center gap-3 mb-12 pb-12 border-b border-p-ink/10 dark:border-white/10">
          <span className="text-p-ink/40 dark:text-p-cream/40 text-sm mr-4">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 text-xs uppercase tracking-wider border border-p-ink/10 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-20">
          <span className="text-p-ink/60 dark:text-p-cream/60 text-sm">Share this article</span>
          <div className="flex items-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-p-ink/10 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60 hover:border-violet-500 hover:text-violet-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-p-ink/10 dark:border-white/10 text-p-ink/60 dark:text-p-cream/60 hover:border-violet-500 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-p-ink dark:text-p-cream mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/journal/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative overflow-hidden aspect-[16/9] mb-4">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-violet-400 text-[10px] tracking-widest uppercase mb-2 block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-serif text-p-ink dark:text-p-cream group-hover:text-violet-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
