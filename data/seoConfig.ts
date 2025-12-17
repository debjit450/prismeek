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
    title: "Best Web Design Company India | Website Developer Bangalore Mumbai Delhi",
    description: "Prismeek builds websites, mobile apps, and AI chatbots for businesses. Affordable web design starting Rs 60000. Serving Bangalore, Mumbai, Delhi, Dubai, USA, UK. Get free quote today.",
    keywords: [
      "web design india",
      "website design bangalore",
      "mobile app developer india",
      "ai chatbot",
      "website design cost",
      "ecommerce website",
      "web design mumbai",
      "web design delhi"
    ],
    ogType: 'website'
  },
  about: {
    title: "About Us - Web Design Agency Bangalore India | Meet Our Team",
    description: "Prismeek is a web design company in Bangalore India. We create websites and apps for businesses worldwide. Founder Debjit Dey personally works on every project.",
    keywords: [
      "about prismeek",
      "web design agency bangalore",
      "website company india",
      "who makes websites",
      "web designer team",
      "debjit dey",
      "bangalore web agency",
      "india web company"
    ],
    ogType: 'website'
  },
  services: {
    title: "Website Design Services India | Mobile Apps | AI Chatbots | Logo Design",
    description: "We offer website design, mobile app development, AI chatbot creation, logo design, SEO services. Serving businesses in India, Dubai, USA, UK. Affordable prices.",
    keywords: [
      "website design services",
      "mobile app development india",
      "ai chatbot development",
      "logo design india",
      "seo services india",
      "ecommerce website",
      "wordpress website",
      "react website",
      "business website",
      "company website design",
      "landing page design",
      "web app development"
    ],
    ogType: 'website'
  },
  work: {
    title: "Our Work - Website Design Portfolio | App Development Projects India",
    description: "See websites and apps we built for hotels, travel companies, fintech startups, and businesses. Real projects with real results. View our portfolio.",
    keywords: [
      "web design portfolio",
      "website examples",
      "app development projects",
      "hotel website example",
      "travel website design",
      "fintech app",
      "ecommerce website example",
      "before after website"
    ],
    ogType: 'website'
  },
  blog: {
    title: "Web Design Tips & Guides | How to Build Website | Digital Marketing Blog",
    description: "Learn about website design, app development, SEO tips, and digital marketing. Free guides and tutorials for business owners and entrepreneurs.",
    keywords: [
      "web design tips",
      "how to build website",
      "website design guide",
      "seo tips",
      "digital marketing blog",
      "website cost guide",
      "app development guide"
    ],
    ogType: 'blog'
  },
  privacy: {
    title: "Privacy Policy - Prismeek",
    description: "Read our privacy policy. We protect your data and respect your privacy. Prismeek website privacy terms.",
    keywords: ["privacy policy", "data protection", "prismeek privacy"],
    ogType: 'website'
  },
  terms: {
    title: "Terms of Service - Prismeek",
    description: "Terms and conditions for using Prismeek web design services. Read before working with us.",
    keywords: ["terms of service", "terms and conditions", "prismeek terms"],
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
    "https://instagram.com/prismeek.studio",
    "https://linkedin.com/company/prismeek-agency",
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
  "timeRequired": `PT${post.readTime.match(/\d+/)?.[0] || '5'}M`,
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
