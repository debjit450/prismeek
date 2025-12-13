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
  pageType: 'home' | 'service' | 'portfolio' | 'about' | 'contact' | 'case-study' | 'legal' | 'blog';
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
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://prismeek.com/#website"
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
          "provider": {"@id": "https://prismeek.com/#organization"},
          "areaServed": ["India", "United States", "United Kingdom", "Canada", "Australia", "UAE", "Worldwide"]
        };
      case 'blog':
        return {
          ...baseData,
          "@type": "Blog",
          "blogPost": []
        };
      default:
        return baseData;
    }
  }

  private getDefaultMetadata(pageContent: PageContent): SEOMetadata {
    const defaults: Record<string, Partial<SEOMetadata>> = {
      home: {
        title: "Best Web Design Company India 2025 | Prismeek - Website Developer Bangalore Mumbai Delhi",
        description: "Award-winning web design company India. Stunning websites, mobile apps, AI chatbots. Affordable pricing from ₹60,000. Expert developers in Bangalore, Mumbai, Delhi. Serving Dubai, USA, UK globally.",
        keywords: ["best web design company india", "website design bangalore", "mobile app developer mumbai", "ai chatbot development", "web design delhi"]
      },
      service: {
        title: `${pageContent.pageName} Services India | Best ${pageContent.pageName} Company`,
        description: `Professional ${pageContent.pageName.toLowerCase()} services in India. Prismeek delivers world-class solutions for startups & enterprises. Bangalore, Mumbai, Delhi & worldwide.`,
        keywords: [pageContent.pageName.toLowerCase(), "india", "bangalore", "mumbai", "services"]
      },
      'case-study': {
        title: `${pageContent.pageName} Case Study | Award-Winning Web Design Portfolio`,
        description: `Discover how Prismeek transformed ${pageContent.pageName} with bespoke digital solutions. View our premium portfolio.`,
        keywords: ["case study", pageContent.pageName.toLowerCase(), "portfolio", "success story"]
      },
      about: {
        title: "About Prismeek | Top Web Design Agency India",
        description: "Learn about Prismeek, India's leading web design & development agency. Founded by Debjit Dey, we create stunning websites, apps & AI solutions.",
        keywords: ["about prismeek", "web design agency india", "digital agency bangalore"]
      },
      blog: {
        title: "Web Design & Development Blog | Prismeek Journal",
        description: "Read the latest web design tips, development trends, AI insights & digital marketing strategies from Prismeek's expert team.",
        keywords: ["web design blog", "development tips", "tech blog india"]
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
        "best web design company india 2025",
        "website design bangalore",
        "website developer mumbai",
        "web design delhi",
        "mobile app development india",
        "ai chatbot development company"
      ],
      services: [
        "react development india",
        "next.js development company",
        "node.js developer bangalore",
        "three.js website india",
        "ui ux design agency",
        "saas development company",
        "ecommerce website development",
        "progressive web app development",
        "custom software development"
      ],
      industry: [
        `${industry} website design india`,
        `${industry} app development`,
        `${industry} digital solutions`,
        `${industry} software company`,
        `best ${industry} website`
      ],
      location: [
        "web design company bangalore",
        "website developer mumbai",
        "digital agency delhi",
        "software company hyderabad",
        "web design chennai",
        "web developer pune",
        "it company kolkata",
        "tech startup india"
      ],
      international: [
        "web design company dubai",
        "website developer usa",
        "digital agency uk",
        "web design canada",
        "website development australia",
        "hire indian developer",
        "outsource web development india"
      ],
      longTail: [
        "best web design company for startups india",
        "affordable website design bangalore",
        "ecommerce website development mumbai cost",
        "ai chatbot development for business india",
        "react native app development company bangalore",
        "fintech website design india",
        "luxury hotel website design",
        "real estate website development india",
        "saas landing page design company",
        "startup mvp development india"
      ],
      technology: [
        "react developer india",
        "next.js development",
        "node.js backend development",
        "three.js 3d website",
        "webgl developer india",
        "typescript developer",
        "tailwind css developer",
        "framer motion website",
        "gsap animation website"
      ],
      comparison: [
        "prismeek vs other agencies",
        "best web design company vs freelancer",
        "agency vs in-house developer",
        "indian web design vs international"
      ]
    };
  }
}

export const seoService = new SEOService();

export const SEO_CONSTANTS = {
  SITE_NAME: "Prismeek",
  SITE_URL: "https://prismeek.com",
  DEFAULT_TITLE_SUFFIX: " | Prismeek - Web Design Company India",
  DEFAULT_OG_IMAGE: "https://prismeek.com/og-image.jpg",
  
  INDUSTRY_KEYWORDS: {
    hospitality: [
      "luxury hotel website design india",
      "resort website development",
      "hospitality tech solutions",
      "hotel booking platform development",
      "travel website design",
      "restaurant website india"
    ],
    fintech: [
      "fintech website design india",
      "banking app development",
      "wealth management dashboard",
      "investment platform development",
      "payment gateway integration",
      "crypto website design"
    ],
    ecommerce: [
      "ecommerce website india",
      "shopify development india",
      "online store design",
      "fashion ecommerce website",
      "jewelry ecommerce development",
      "d2c brand website"
    ],
    saas: [
      "saas landing page design",
      "b2b software website",
      "enterprise application design",
      "startup website india",
      "product website design",
      "software company website"
    ],
    realestate: [
      "real estate website india",
      "property listing website",
      "virtual tour development",
      "luxury property marketing",
      "real estate crm development",
      "builder website design"
    ],
    healthcare: [
      "healthcare website design india",
      "hospital website development",
      "telemedicine app development",
      "medical practice website",
      "pharmacy website design",
      "healthtech solutions"
    ],
    education: [
      "edtech website design india",
      "online course platform",
      "lms development india",
      "school website design",
      "university website development",
      "e-learning app development"
    ]
  },

  META_TEMPLATES: {
    caseStudy: (client: string, industry: string) => ({
      title: `${client} - ${industry} Case Study | Award-Winning Design | Prismeek`,
      description: `See how Prismeek helped ${client} achieve remarkable results with our bespoke ${industry.toLowerCase()} digital solutions. Premium web design and development case study.`
    }),
    service: (serviceName: string) => ({
      title: `${serviceName} Services India | Best ${serviceName} Company 2025 | Prismeek`,
      description: `Professional ${serviceName.toLowerCase()} services for businesses in India. Prismeek delivers world-class solutions. Bangalore, Mumbai, Delhi & worldwide.`
    }),
    location: (city: string) => ({
      title: `Best Web Design Company ${city} | Website Developer ${city} | Prismeek`,
      description: `Top-rated web design company in ${city}. Prismeek creates stunning websites, mobile apps & AI solutions. Affordable pricing, world-class quality.`
    })
  },

  SOCIAL_PROOF: {
    rating: "4.9",
    reviewCount: "47",
    clientCount: "50+",
    projectCount: "100+",
    experienceYears: "5+"
  }
};

export const LOCATION_PAGES_SEO = {
  bangalore: {
    title: "Best Web Design Company Bangalore | Website Developer Bangalore | Prismeek",
    description: "Top-rated web design company in Bangalore. Prismeek creates stunning websites, mobile apps, AI chatbots. Located near Koramangala, HSR, Indiranagar. Get free quote!",
    keywords: ["web design bangalore", "website developer bangalore", "best web design company bangalore", "digital agency bangalore", "app developer bangalore", "it company bangalore", "software company bangalore", "startup bangalore"]
  },
  mumbai: {
    title: "Best Web Design Company Mumbai | Website Developer Mumbai | Prismeek",
    description: "Premier web design company in Mumbai. Stunning websites, apps & AI solutions. Serving Andheri, Bandra, Lower Parel & all Mumbai. Affordable pricing. Free consultation!",
    keywords: ["web design mumbai", "website developer mumbai", "best web design company mumbai", "digital agency mumbai", "app developer mumbai", "it company mumbai"]
  },
  delhi: {
    title: "Best Web Design Company Delhi NCR | Website Developer Delhi | Prismeek",
    description: "Award-winning web design company Delhi NCR. Websites, mobile apps, AI chatbots. Serving Delhi, Gurgaon, Noida, Faridabad. Competitive pricing. Get started today!",
    keywords: ["web design delhi", "website developer delhi", "web design gurgaon", "web design noida", "digital agency delhi ncr", "app developer delhi"]
  },
  hyderabad: {
    title: "Best Web Design Company Hyderabad | Website Developer Hyderabad | Prismeek",
    description: "Leading web design company in Hyderabad. Expert website development, mobile apps, AI solutions. Serving HITEC City, Gachibowli & all Hyderabad. Free quote!",
    keywords: ["web design hyderabad", "website developer hyderabad", "digital agency hyderabad", "app developer hyderabad", "software company hyderabad"]
  },
  chennai: {
    title: "Best Web Design Company Chennai | Website Developer Chennai | Prismeek",
    description: "Top web design company in Chennai. Beautiful websites, apps & digital solutions. Serving OMR, T Nagar, Anna Nagar & all Chennai. Affordable pricing!",
    keywords: ["web design chennai", "website developer chennai", "digital agency chennai", "app developer chennai", "it company chennai"]
  },
  pune: {
    title: "Best Web Design Company Pune | Website Developer Pune | Prismeek",
    description: "Expert web design company in Pune. Stunning websites, mobile apps, AI chatbots. Serving Hinjewadi, Kharadi, Baner & all Pune. Get free consultation!",
    keywords: ["web design pune", "website developer pune", "digital agency pune", "app developer pune", "software company pune"]
  }
};
