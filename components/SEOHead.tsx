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
    `${project.category.toLowerCase()} web design dubai`,
    `${project.category.toLowerCase()} website development uae`,
    `${project.category.toLowerCase()} digital agency usa`,
    `${project.category.toLowerCase()} web design uk`,
    `${project.category.toLowerCase()} website canada`,
    `${project.category.toLowerCase()} digital solutions australia`,
    `${project.category.toLowerCase()} web development qatar`,
    `${project.category.toLowerCase()} digital agency europe`
  ];

  return {
    title: `${project.client} - ${project.category} Case Study | Premium Web Design`,
    description: `${project.description} See how Prismeek delivered world-class ${project.category.toLowerCase()} solutions. Serving clients in USA, UK, UAE, Dubai, Canada, Australia & worldwide.`,
    keywords: [
      project.client.toLowerCase(),
      project.category.toLowerCase(),
      'case study',
      'portfolio',
      'prismeek',
      'luxury web design',
      'premium digital agency',
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
      "dateModified": project.year,
      "image": project.image,
      "author": { "@id": "https://prismeek.com/#organization" },
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
        "areaServed": ["India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Qatar", "Germany", "France", "Singapore", "Worldwide"]
      }
    }
  };
};

export const generateContactSEO = () => ({
  title: "Contact Prismeek - Get a Quote for Your Digital Project",
  description: "Contact Prismeek for luxury web design, AI integration, and mobile app development. Serving clients in USA, UK, UAE, Dubai, Canada, Australia, Qatar, Europe & worldwide. Get a free consultation.",
  keywords: [
    "contact digital agency",
    "web design quote dubai",
    "website development inquiry uae",
    "hire web developer usa",
    "digital agency contact uk",
    "web design consultation canada",
    "luxury website quote australia",
    "digital agency qatar",
    "european web design agency contact",
    "hire ai developer india",
    "mobile app development quote",
    "get website quote",
    "free consultation web design"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Prismeek",
    "description": "Get in touch with Prismeek for your luxury digital project",
    "url": "https://prismeek.com/#contact",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://prismeek.com/#organization",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917439749872",
        "email": "prismeek@yahoo.com",
        "contactType": "sales",
        "areaServed": ["IN", "US", "GB", "CA", "AU", "AE", "QA", "SG", "DE", "FR", "NL", "CH"],
        "availableLanguage": ["English", "Hindi"]
      }
    }
  }
});

export const PAGE_SEO_CONFIG = {
  home: {
    title: "India's Premier Luxury Digital Agency & AI Solutions",
    description: "Prismeek is a bespoke digital atelier specializing in luxury web design, AI integration, and premium branding for forward-thinking enterprises worldwide.",
    keywords: [
      "luxury web design india",
      "premium digital agency",
      "ai development india",
      "bespoke website design",
      "high-end branding",
      "software development india",
      "chatgpt integration",
      "claude ai development",
      "fintech ui/ux",
      "hospitality web design",
      "react development india",
      "mobile app development india"
    ]
  },
  privacy: {
    title: "Privacy Policy",
    description: "Learn about how Prismeek protects your privacy and handles your personal data. Our commitment to data security and transparency.",
    keywords: ["privacy policy", "data protection", "prismeek privacy"]
  },
  terms: {
    title: "Terms of Service",
    description: "Read Prismeek's terms of service and conditions for using our luxury digital agency services.",
    keywords: ["terms of service", "terms and conditions", "prismeek terms"]
  }
};

export default SEOHead;
