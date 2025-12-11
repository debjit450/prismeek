interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  structuredData: object;
}

interface PageContent {
  pageName: string;
  pageType: 'home' | 'service' | 'portfolio' | 'about' | 'contact' | 'case-study' | 'legal';
  content: string;
  industry?: string;
  targetAudience?: string;
}

interface SEOSuggestion {
  type: 'title' | 'description' | 'content' | 'keyword' | 'schema';
  current: string;
  suggested: string;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

export class SEOService {
  generateOptimizedMetadata(pageContent: PageContent): SEOMetadata {
    return this.getDefaultMetadata(pageContent);
  }

  analyzeSEOPerformance(_content: string): SEOSuggestion[] {
    return [];
  }

  generateContentBrief(_topic: string, _targetKeywords: string[]): string {
    return '';
  }

  generateKeywordClusters(industry: string): Record<string, string[]> {
    return this.getDefaultKeywordClusters(industry);
  }

  private generateStructuredData(pageContent: PageContent): object {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageContent.pageName,
      "description": pageContent.content.substring(0, 200),
      "publisher": {
        "@type": "Organization",
        "@id": "https://prismeek.com/#organization"
      }
    };

    switch (pageContent.pageType) {
      case 'case-study':
        return {
          ...baseData,
          "@type": "CreativeWork",
          "genre": pageContent.industry,
          "creator": {"@id": "https://prismeek.com/#organization"}
        };
      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          "provider": {"@id": "https://prismeek.com/#organization"}
        };
      default:
        return baseData;
    }
  }

  private getDefaultMetadata(pageContent: PageContent): SEOMetadata {
    const defaults: Record<string, Partial<SEOMetadata>> = {
      home: {
        title: "PRISMEEK | India's Premier Luxury Digital Agency & AI Solutions",
        description: "Bespoke digital atelier in India specializing in luxury web design, AI integration, and premium branding for forward-thinking enterprises.",
        keywords: ["luxury web design india", "premium digital agency", "ai development india", "bespoke website design"]
      },
      service: {
        title: `${pageContent.pageName} | Prismeek Premium Services`,
        description: `Expert ${pageContent.pageName.toLowerCase()} services for luxury brands. Prismeek delivers world-class digital solutions.`,
        keywords: [pageContent.pageName.toLowerCase(), "luxury agency", "premium services", "india"]
      },
      'case-study': {
        title: `${pageContent.pageName} Case Study | Prismeek Portfolio`,
        description: `Discover how Prismeek transformed ${pageContent.pageName} with bespoke digital solutions. View our premium portfolio.`,
        keywords: ["case study", pageContent.pageName.toLowerCase(), "portfolio", "success story"]
      }
    };

    const defaultData = defaults[pageContent.pageType] || defaults.home;

    return {
      title: defaultData.title || pageContent.pageName,
      description: defaultData.description || pageContent.content.substring(0, 160),
      keywords: defaultData.keywords || [],
      ogTitle: defaultData.title || pageContent.pageName,
      ogDescription: defaultData.description || pageContent.content.substring(0, 200),
      twitterTitle: defaultData.title || pageContent.pageName,
      twitterDescription: defaultData.description || pageContent.content.substring(0, 200),
      structuredData: this.generateStructuredData(pageContent)
    };
  }

  private getDefaultKeywordClusters(industry: string): Record<string, string[]> {
    return {
      primary: [
        "luxury web design india",
        "premium digital agency mumbai",
        "bespoke website development",
        "high-end branding agency"
      ],
      services: [
        "ai chatbot development",
        "react native app development",
        "three.js website india",
        "fintech ui ux design"
      ],
      industry: [
        `${industry} website design`,
        `${industry} digital solutions`,
        `${industry} app development`,
        `${industry} branding agency`
      ],
      location: [
        "web design agency mumbai",
        "digital agency bangalore",
        "software development india",
        "tech agency new delhi"
      ],
      longTail: [
        "best luxury digital agency for hotels in india",
        "premium e-commerce website development mumbai",
        "ai integration for fintech startups india",
        "bespoke mobile app for luxury brands"
      ]
    };
  }
}

export const seoService = new SEOService();

export const SEO_CONSTANTS = {
  SITE_NAME: "Prismeek",
  SITE_URL: "https://prismeek.com",
  DEFAULT_TITLE_SUFFIX: " | Prismeek Digital Atelier",
  DEFAULT_OG_IMAGE: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  
  INDUSTRY_KEYWORDS: {
    hospitality: ["luxury hotel website", "resort web design", "hospitality tech", "hotel booking platform"],
    fintech: ["fintech ui design", "wealth management dashboard", "banking app development", "investment platform"],
    ecommerce: ["luxury e-commerce", "premium online store", "fashion website design", "jewelry e-commerce"],
    saas: ["saas landing page", "b2b software design", "enterprise application", "startup website"],
    realestate: ["real estate website", "property showcase", "virtual tours", "luxury property marketing"],
    art: ["gallery website", "artist portfolio", "museum digital", "cultural platform"]
  },

  META_TEMPLATES: {
    caseStudy: (client: string, industry: string) => ({
      title: `${client} - ${industry} Success Story | Prismeek Case Study`,
      description: `See how Prismeek helped ${client} achieve remarkable results with our bespoke ${industry.toLowerCase()} digital solutions. Premium web design and development.`
    }),
    service: (serviceName: string) => ({
      title: `${serviceName} Services | Prismeek Luxury Digital Agency India`,
      description: `World-class ${serviceName.toLowerCase()} for luxury brands. Prismeek delivers bespoke digital solutions with Swiss-watch precision.`
    })
  }
};
