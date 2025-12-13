import { AGENCY_INFO, PACKAGES, PORTFOLIO_ITEMS, INDUSTRIES } from '../constants';
import { BLOG_POSTS } from './blogPosts';

export const SITE_CONFIG = {
  name: 'Prismeek',
  url: 'https://prismeek.com',
  titleSuffix: ' | Prismeek Digital Atelier',
  defaultOgImage: 'https://prismeek.com/og-image.jpg',
  logo: 'https://prismeek.com/logo.png',
  foundingDate: '2023',
  priceRange: '₹₹₹₹',
};

export const PAGE_SEO = {
  home: {
    title: "India's Premier Luxury Digital Agency & AI Solutions",
    description: "Prismeek is a bespoke digital atelier based in Bengaluru, India specializing in luxury web design, AI integration, mobile app development, and premium branding for forward-thinking enterprises worldwide.",
    keywords: [
      "luxury web design india",
      "premium digital agency bangalore",
      "ai development india",
      "bespoke website design",
      "high-end branding agency",
      "software development bengaluru",
      "chatgpt integration india",
      "claude ai development",
      "fintech ui/ux india",
      "hospitality web design",
      "react development india",
      "mobile app development bangalore",
      "three.js development india",
      "luxury e-commerce india",
      "saas development bangalore"
    ],
    ogType: 'website'
  },
  about: {
    title: "About Prismeek - Luxury Digital Craftsmanship",
    description: "Meet the artisans behind Prismeek. A boutique digital atelier in Bengaluru, India, dedicated to creating bespoke digital experiences for luxury brands worldwide.",
    keywords: [
      "about prismeek",
      "digital agency team",
      "luxury web designers india",
      "boutique agency bangalore",
      "founder debjit dey",
      "premium design studio"
    ],
    ogType: 'website'
  },
  services: {
    title: "Premium Digital Services - Web, Mobile, AI & Branding",
    description: "Explore Prismeek's comprehensive suite of luxury digital services: bespoke web development, AI integration, mobile apps, brand identity, and growth strategy for discerning brands.",
    keywords: [
      "luxury web design services",
      "ai chatbot development india",
      "mobile app development services",
      "brand identity design india",
      "software engineering bangalore",
      "premium digital services",
      "three.js development services",
      "react native development india"
    ],
    ogType: 'website'
  },
  work: {
    title: "Portfolio - Case Studies & Digital Masterpieces",
    description: "Explore Prismeek's portfolio of luxury digital projects. From AI-powered platforms to immersive 3D experiences, see how we transform brands into digital legacies.",
    keywords: [
      "digital agency portfolio",
      "luxury website examples",
      "case studies india",
      "web design portfolio",
      "ai project examples",
      "fintech case study",
      "hospitality website examples"
    ],
    ogType: 'website'
  },
  blog: {
    title: "The Journal - Insights on Luxury Digital Design & AI",
    description: "Read Prismeek's journal for insights on luxury digital design, brand strategy, AI integration, and the future of premium web experiences.",
    keywords: [
      "digital design blog",
      "luxury branding insights",
      "web design articles",
      "ai development blog",
      "ux design insights",
      "brand strategy articles"
    ],
    ogType: 'blog'
  },
  privacy: {
    title: "Privacy Policy",
    description: "Learn about how Prismeek protects your privacy and handles your personal data. Our commitment to data security and transparency.",
    keywords: ["privacy policy", "data protection", "prismeek privacy", "gdpr compliance"],
    ogType: 'website'
  },
  terms: {
    title: "Terms of Service",
    description: "Read Prismeek's terms of service and conditions for using our luxury digital agency services.",
    keywords: ["terms of service", "terms and conditions", "prismeek terms", "service agreement"],
    ogType: 'website'
  }
};

export const FAQ_DATA = [
  {
    question: "What services does Prismeek offer?",
    answer: "Prismeek offers comprehensive luxury digital services including bespoke web design and development, mobile app development (iOS & Android), AI integration (ChatGPT, Claude, Gemini), brand identity design, software engineering, e-commerce platforms, 3D/WebGL experiences, and digital growth strategy for premium brands worldwide."
  },
  {
    question: "What industries does Prismeek serve?",
    answer: `Prismeek specializes in serving luxury and premium brands across ${INDUSTRIES.join(', ')}. We understand the unique requirements of high-end markets and create digital experiences that match the sophistication of your brand.`
  },
  {
    question: "What is Prismeek's pricing?",
    answer: `Prismeek offers three engagement tiers: ${PACKAGES.map(p => `${p.name} (${p.price})`).join(', ')}. Each package is customized based on project scope, complexity, and specific requirements. Contact us for a detailed proposal.`
  },
  {
    question: "Where is Prismeek located?",
    answer: `Prismeek is headquartered at ${AGENCY_INFO.address}. We serve clients globally through seamless remote collaboration, with experience working across time zones with clients in India, USA, UK, Singapore, UAE, and beyond.`
  },
  {
    question: "Does Prismeek develop AI chatbots and integrations?",
    answer: "Yes, Prismeek's AI Concierge service specializes in integrating advanced AI capabilities including ChatGPT, Claude, Gemini, and custom LLM solutions. We build intelligent automation, AI-powered customer service, predictive analytics, and personalized user experiences."
  },
  {
    question: "What makes Prismeek different from other agencies?",
    answer: "Prismeek operates as a boutique digital atelier with direct founder involvement. Unlike large agencies, you work directly with our principal designer, Debjit Dey, who personally architects and oversees every project. This ensures luxury-grade quality, attention to detail, and no agency bureaucracy."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A premium landing page typically takes 2-4 weeks, while comprehensive web applications or AI integrations may require 8-16 weeks. We provide detailed timelines in our proposals and maintain transparent communication throughout."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, Prismeek offers comprehensive post-launch support including hosting management, security updates, performance optimization, content updates, and feature enhancements. Our Heritage tier clients receive priority 24/7 support."
  },
  {
    question: "Can Prismeek work with international clients?",
    answer: "Absolutely. Prismeek serves clients worldwide with experience across multiple time zones. We use modern collaboration tools and maintain regular communication to ensure seamless project delivery regardless of geography."
  },
  {
    question: "What technologies does Prismeek use?",
    answer: "We use cutting-edge technologies including React, Next.js, Node.js, Python, Three.js/WebGL for 3D experiences, React Native for mobile apps, and various AI/ML frameworks. Our technology choices are always aligned with project requirements and long-term maintainability."
  },
  {
    question: "How do I start a project with Prismeek?",
    answer: "Begin by contacting us through our website form, email, or WhatsApp. We'll schedule an initial consultation to understand your vision and requirements. Following this, we provide a detailed proposal with timeline, deliverables, and investment. Once approved, we commence with our proven design and development process."
  },
  {
    question: "Does Prismeek provide SEO services?",
    answer: "Yes, SEO is integral to our digital strategy. Our Growth Strategy service includes comprehensive technical SEO, on-page optimization, content strategy, local SEO for businesses, and ongoing performance monitoring. We build websites with SEO best practices from the ground up."
  }
];

export const generateOfferSchema = () => {
  return PACKAGES.map((pkg, index) => ({
    "@type": "Offer",
    "@id": `https://prismeek.com/#offer-${index + 1}`,
    "name": pkg.name,
    "description": pkg.description,
    "price": pkg.price.includes('₹') ? pkg.price.replace(/[^0-9]/g, '') : undefined,
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": pkg.price,
      "priceCurrency": "INR",
      "valueAddedTaxIncluded": true
    },
    "itemOffered": {
      "@type": "Service",
      "name": pkg.name,
      "description": pkg.description,
      "provider": { "@id": "https://prismeek.com/#organization" },
      "serviceType": "Digital Agency Services",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${pkg.name} Features`,
        "itemListElement": pkg.features.map(feature => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        }))
      }
    },
    "availability": "https://schema.org/InStock",
    "seller": { "@id": "https://prismeek.com/#organization" }
  }));
};

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://prismeek.com/#localbusiness",
  "name": "Prismeek Digital Agency",
  "alternateName": ["Prismeek", "Prismeek Digital Atelier"],
  "description": "India's premier luxury digital agency specializing in bespoke web design, AI integration, mobile app development, and premium branding for forward-thinking enterprises.",
  "url": "https://prismeek.com",
  "telephone": AGENCY_INFO.phone,
  "email": AGENCY_INFO.email,
  "priceRange": "₹₹₹₹",
  "image": "https://prismeek.com/logo.png",
  "logo": "https://prismeek.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": AGENCY_INFO.streetAddress,
    "addressLocality": "Bengaluru",
    "addressRegion": AGENCY_INFO.region,
    "postalCode": AGENCY_INFO.postalCode,
    "addressCountry": AGENCY_INFO.country,
    "name": "Wework Galaxy"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": AGENCY_INFO.geo.latitude,
    "longitude": AGENCY_INFO.geo.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Canada" },
    "Worldwide"
  ],
  "sameAs": [
    "https://instagram.com/prismeek",
    "https://linkedin.com/company/prismeek",
    "https://twitter.com/prismeek"
  ],
  "founder": { "@id": "https://prismeek.com/#founder" },
  "foundingDate": "2023",
  "knowsAbout": [
    "Luxury Web Design",
    "AI Development",
    "Mobile App Development",
    "Brand Identity Design",
    "E-Commerce Development",
    "Three.js Development",
    "React Development",
    "ChatGPT Integration",
    "Claude AI Integration",
    "Fintech UI/UX",
    "SaaS Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": generateOfferSchema()
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47",
    "reviewCount": "23"
  }
});

export const generateBlogPostSchema = (post: typeof BLOG_POSTS[0]) => ({
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
  "timeRequired": post.readTime,
  "inLanguage": "en-IN",
  "isAccessibleForFree": true
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateServiceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": { "@id": "https://prismeek.com/#organization" },
  "areaServed": "Worldwide",
  "serviceType": serviceName
});

export const generateCaseStudySchema = (project: typeof PORTFOLIO_ITEMS[0]) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `https://prismeek.com/work/${project.slug}`,
  "name": `${project.client} - ${project.category} Case Study`,
  "description": project.description,
  "url": `https://prismeek.com/work/${project.slug}`,
  "image": project.image,
  "datePublished": project.year,
  "creator": { "@id": "https://prismeek.com/#organization" },
  "genre": project.category,
  "keywords": project.details?.stack?.join(', '),
  "about": {
    "@type": "Thing",
    "name": project.category
  }
});
