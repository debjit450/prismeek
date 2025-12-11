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

  return {
    title: `${project.client} - ${project.category} Case Study`,
    description: project.description,
    keywords: [
      project.client.toLowerCase(),
      project.category.toLowerCase(),
      'case study',
      'portfolio',
      'prismeek',
      ...(project.details?.stack || []).map(s => s.toLowerCase())
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.client,
      "description": project.description,
      "url": `https://prismeek.com/work/${project.slug}`,
      "datePublished": project.year,
      "creator": {"@id": "https://prismeek.com/#organization"},
      "genre": project.category,
      "image": project.image,
      "keywords": project.details?.stack?.join(', ')
    }
  };
};

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
