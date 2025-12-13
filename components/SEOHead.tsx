import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONSTANTS } from '../services/seoService';
import { PORTFOLIO_ITEMS } from '../constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  canonicalPath,
  structuredData,
  noIndex = false
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title 
      ? `${title}${SEO_CONSTANTS.DEFAULT_TITLE_SUFFIX}`
      : document.title;
    
    document.title = fullTitle;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, true);
      updateMeta('twitter:description', description);
    }

    if (keywords.length > 0) {
      updateMeta('keywords', keywords.join(', '));
    }

    updateMeta('og:title', title || 'Prismeek', true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage || SEO_CONSTANTS.DEFAULT_OG_IMAGE, true);
    updateMeta('og:url', `${SEO_CONSTANTS.SITE_URL}${location.pathname}`, true);

    updateMeta('twitter:title', title || 'Prismeek');
    updateMeta('twitter:image', ogImage || SEO_CONSTANTS.DEFAULT_OG_IMAGE);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const canonicalUrl = `${SEO_CONSTANTS.SITE_URL}${canonicalPath || location.pathname}`;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    }

    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-dynamic="true"]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-dynamic', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const dynamicScript = document.querySelector('script[data-seo-dynamic="true"]');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonicalPath, structuredData, noIndex, location.pathname]);

  return null;
};

export const generateCaseStudySEO = (slug: string) => {
  const project = PORTFOLIO_ITEMS.find(p => p.slug === slug);
  if (!project) return {};

  const internationalKeywords = [
    `${project.category.toLowerCase()} web design india`,
    `${project.category.toLowerCase()} website development bangalore`,
    `${project.category.toLowerCase()} app development mumbai`,
    `${project.category.toLowerCase()} digital agency delhi`,
    `${project.category.toLowerCase()} software company hyderabad`,
    `${project.category.toLowerCase()} web design dubai`,
    `${project.category.toLowerCase()} website usa`,
    `${project.category.toLowerCase()} digital agency uk`,
    `${project.category.toLowerCase()} development canada`,
    `${project.category.toLowerCase()} web design australia`,
    `best ${project.category.toLowerCase()} website design`,
    `top ${project.category.toLowerCase()} app developer`,
  ];

  return {
    title: `${project.client} - ${project.category} Case Study | Award-Winning Design`,
    description: `${project.description} See how Prismeek delivered world-class ${project.category.toLowerCase()} solutions. Expert ${project.category.toLowerCase()} web design & app development. Serving India, USA, UK, UAE & worldwide.`,
    keywords: [
      project.client.toLowerCase(),
      project.category.toLowerCase(),
      'case study',
      'portfolio',
      'prismeek',
      'web design case study',
      'app development portfolio',
      'ui ux design example',
      'successful website project',
      ...(project.details?.stack || []).map(s => s.toLowerCase()),
      ...internationalKeywords
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `https://prismeek.com/work/${project.slug}`,
      "headline": `${project.client} - ${project.category} Case Study`,
      "name": project.client,
      "description": project.description,
      "url": `https://prismeek.com/work/${project.slug}`,
      "datePublished": project.year,
      "dateModified": "2025-01-13",
      "image": project.image,
      "author": { "@id": "https://prismeek.com/#founder" },
      "publisher": { "@id": "https://prismeek.com/#organization" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://prismeek.com/work/${project.slug}`
      },
      "articleSection": project.category,
      "keywords": project.details?.stack?.join(', '),
      "about": {
        "@type": "Thing",
        "name": project.category,
        "description": `${project.category} digital solutions and web development`
      },
      "mentions": project.details?.stack?.map(tech => ({
        "@type": "Thing",
        "name": tech
      })),
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "provider": {
        "@id": "https://prismeek.com/#organization",
        "areaServed": ["India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Germany", "Singapore", "Worldwide"]
      }
    }
  };
};

export const generateServiceSEO = (serviceName: string, serviceDescription: string) => ({
  title: `${serviceName} Services India | Best ${serviceName} Company 2025`,
  description: `Professional ${serviceName.toLowerCase()} services in India. Prismeek offers expert ${serviceDescription.toLowerCase()}. Affordable pricing, world-class quality. Serving Bangalore, Mumbai, Delhi, Dubai, USA, UK & globally.`,
  keywords: [
    `${serviceName.toLowerCase()} india`,
    `${serviceName.toLowerCase()} company bangalore`,
    `${serviceName.toLowerCase()} services mumbai`,
    `best ${serviceName.toLowerCase()} company india`,
    `${serviceName.toLowerCase()} agency delhi`,
    `affordable ${serviceName.toLowerCase()}`,
    `${serviceName.toLowerCase()} for startups`,
    `enterprise ${serviceName.toLowerCase()}`,
    `${serviceName.toLowerCase()} dubai`,
    `${serviceName.toLowerCase()} usa`,
    `${serviceName.toLowerCase()} uk`,
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": { "@id": "https://prismeek.com/#organization" },
    "areaServed": ["India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Worldwide"],
    "serviceType": serviceName
  }
});

export const generateContactSEO = () => ({
  title: "Contact Prismeek - Get Free Quote for Your Project",
  description: "Contact Prismeek for web design, mobile app development, AI integration & more. Free consultation available. Serving India (Bangalore, Mumbai, Delhi), USA, UK, UAE, Dubai, Canada, Australia & worldwide. Quick response guaranteed!",
  keywords: [
    "contact web design company india",
    "get website quote bangalore",
    "hire web developer mumbai",
    "website development inquiry delhi",
    "digital agency contact india",
    "free website consultation",
    "web design quote online",
    "hire app developer india",
    "ai chatbot development quote",
    "saas development inquiry",
    "startup website quote",
    "ecommerce website cost",
    "hire react developer india",
    "hire next.js developer",
    "custom software quote",
    "web design quote dubai",
    "hire developer usa",
    "web agency contact uk"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Prismeek",
    "description": "Get in touch with Prismeek for your digital project",
    "url": "https://prismeek.com/#contact",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://prismeek.com/#organization",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917439749872",
        "email": "prismeek@yahoo.com",
        "contactType": "sales",
        "areaServed": ["IN", "US", "GB", "CA", "AU", "AE", "SG", "DE", "FR"],
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      }
    }
  }
});

export const PAGE_SEO_CONFIG = {
  home: {
    title: "Best Web Design Company India 2025 | Website Developer Bangalore Mumbai Delhi",
    description: "Award-winning web design company India. Prismeek creates stunning websites, mobile apps, AI chatbots & SaaS products. Affordable pricing from ₹60,000. Expert developers in Bangalore, Mumbai, Delhi, Hyderabad, Chennai. Serving Dubai, USA, UK, Canada, Australia. Book free consultation!",
    keywords: [
      "best web design company india 2025",
      "website design bangalore",
      "website developer mumbai",
      "mobile app development india",
      "ai chatbot development company",
      "website design cost india",
      "ecommerce website development",
      "web design mumbai",
      "web design delhi",
      "website developer near me",
      "react developer india",
      "next.js development company",
      "node.js developer bangalore",
      "ui ux design agency india",
      "saas development company",
      "startup website design",
      "fintech app development",
      "three.js developer india",
      "luxury web design",
      "premium digital agency",
      "web development hyderabad",
      "website design chennai",
      "web developer pune",
      "software development company india",
      "it company bangalore",
      "digital transformation agency",
      "custom software development",
      "progressive web app development",
      "shopify developer india",
      "wordpress developer india",
      "responsive web design",
      "seo company india"
    ]
  },
  about: {
    title: "About Prismeek | Top Web Design Agency India - Our Story",
    description: "Learn about Prismeek, India's leading web design & development agency. Founded by Debjit Dey, we create stunning websites, apps & AI solutions. Based in Bangalore, serving clients worldwide.",
    keywords: [
      "about prismeek",
      "web design agency india",
      "digital agency bangalore",
      "best web designers india",
      "debjit dey developer",
      "indian web design company",
      "software company bangalore",
      "tech startup india",
      "creative agency mumbai"
    ]
  },
  services: {
    title: "Web Design & Development Services India | App Development | AI Integration",
    description: "Professional web design, mobile app development, AI chatbot integration, UI/UX design & SaaS development services. Affordable pricing for startups & enterprises. Expert team in Bangalore, Mumbai, Delhi.",
    keywords: [
      "web design services india",
      "mobile app development services",
      "ai chatbot development",
      "ui ux design services",
      "saas development services",
      "ecommerce development india",
      "react development services",
      "node.js development",
      "three.js development",
      "custom software development",
      "digital marketing services",
      "seo services india",
      "branding services india"
    ]
  },
  work: {
    title: "Our Portfolio | Best Web Design Projects India | Case Studies",
    description: "View Prismeek's portfolio of stunning websites, mobile apps & digital products. See our work for clients in fintech, hospitality, ecommerce, SaaS & more. Award-winning designs.",
    keywords: [
      "web design portfolio india",
      "best website designs",
      "mobile app portfolio",
      "ui ux design examples",
      "case studies web design",
      "fintech website design",
      "hospitality website examples",
      "ecommerce website portfolio",
      "saas landing page examples",
      "award winning websites india"
    ]
  },
  blog: {
    title: "Web Design & Development Blog | Tips, Trends & Insights | Prismeek Journal",
    description: "Read the latest web design tips, development trends, AI insights & digital marketing strategies. Expert articles from Prismeek's team of designers and developers.",
    keywords: [
      "web design blog",
      "web development tips",
      "ui ux design trends",
      "ai development insights",
      "digital marketing blog",
      "startup tips india",
      "tech blog india",
      "design inspiration"
    ]
  },
  privacy: {
    title: "Privacy Policy - Prismeek | Data Protection",
    description: "Read Prismeek's privacy policy. We protect your data and respect your privacy. Learn how we handle your information.",
    keywords: ["privacy policy", "data protection", "prismeek privacy", "gdpr compliance"]
  },
  terms: {
    title: "Terms of Service - Prismeek | Web Design Terms",
    description: "Terms and conditions for using Prismeek web design, app development and digital services. Read before engaging our services.",
    keywords: ["terms of service", "terms and conditions", "prismeek terms", "web design contract"]
  }
};

export default SEOHead;
