import { link } from "fs";

export const AGENCY_INFO = {
  name: "Prismeek",
  tagline: "Elevating Brands to Heritage Status",
  email: "prismeek@yahoo.com",
  phone: "+91 7439749872",
  phoneDisplay: "+91 7439 749 872",
  whatsappLink: "https://wa.me/917439749872",
  address: "Mumbai · Bangalore · Worldwide",
};

export const NAV_LINKS = [
  { name: "Maison", href: "/#hero" },
  { name: "Vision", href: "/#about" },
  { name: "Atelier", href: "/#services" },
  { name: "Legacy", href: "/#work" },
  { name: "Expertise", href: "/#industries" },
  { name: "Engage", href: "/#contact" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    slug: "collabtalent",
    client: "Collabtalent",
    category: "AI Productivity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200&auto=format&fit=crop",
    description: "An AI tool that records meetings and turns them into notes and tasks automatically.",
    details: {
      challenge: "People often forget what was discussed in meetings or lose track of action items. Collabtalent needed a clean, simple way to capture this information without being distracting.",
      solution: "We built an 'Invisible' AI interface. It runs quietly in the background, listening to voice patterns. When it hears a task being assigned, it automatically notes it down.",
      outcome: "User retention went up by 300% and it was voted 'Product of the Month' on Product Hunt.",
      stack: ["React", "Python (FastAPI)", "OpenAI Whisper", "WebSockets"],
      gallery: [
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200",
        "https://images.unsplash.com/photo-1761311984112-ce2c5db45984?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    link: "https://collabtalent.ai"
  },
  {
    id: 2,
    slug: "octa",
    client: "Octa",
    category: "Travel Tech Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1695309342594-9ea5e3dae2cd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A complete travel platform with apps for customers, drivers, and a dashboard for admins.",
    details: {
      challenge: "Octa needed three different apps to work together perfectly: one for travelers to book rides, one for drivers to navigate, and one for the company to manage everything.",
      solution: "We created a unified design system. The Customer app is calm and easy to use. The Driver app is bold and clear for safety while driving. The Admin panel is detailed for managing data.",
      outcome: "Booking speed improved by 2.5 seconds and the app maintains a 4.8-star rating on the App Store.",
      stack: ["React Native", "Node.js", "Google Maps API", "AWS"],
      gallery: [
        "https://plus.unsplash.com/premium_photo-1729018715433-c7c062af36ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1602604953727-254e9efb7348?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    link: "https://octacabs.com"
  },
  {
    id: 3,
    slug: "project-ledger",
    client: "Project Ledger",
    category: "Fintech Interface",
    year: "2024",
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A premium financial dashboard for tracking investments and wealth growth.",
    details: {
      challenge: "High-net-worth clients need to see complex financial data clearly. Standard charts looked too messy and confusing.",
      solution: "We designed a 'Data-as-Art' interface. The charts move smoothly like fluids. We used clear, elegant fonts to make the financial data look authoritative and easy to read.",
      outcome: "Now used by 3 major wealth management firms in Mumbai and Singapore for their premium clients.",
      stack: ["Next.js", "D3.js", "WebGL", "PostgreSQL"],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "https://images.unsplash.com/photo-1733195296321-b99d129b09cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
  },
  {
    id: 4,
    slug: "vanya-heritage",
    client: "Vanya Heritage",
    category: "Luxury Hospitality",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A 3D website and booking engine for a boutique luxury hotel in Rajasthan.",
    details: {
      challenge: "Vanya Heritage is a 400-year-old fort. A standard hotel website couldn't capture the feeling of actually being there.",
      solution: "We used 3D technology to let users explore the hotel suites virtually. We also added real ambient sounds from the location, like wind and peacocks, to make it immersive.",
      outcome: "Direct bookings increased by 85%, meaning the hotel paid fewer commissions to booking sites.",
      stack: ["Three.js", "React", "Sanity CMS", "Stripe"],
      gallery: [
        "https://images.unsplash.com/photo-1669040186487-ad7a6d6d0004?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1668342081575-effb6636e69b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    link: "https://vanyaheritage.com"
  }
];

export const TESTIMONIALS = [
  {
    text: "Prismeek understood that as an Indian luxury brand, we needed to balance tradition with modernity. The result is nothing short of a digital masterpiece.",
    author: "Rohan Khanna",
    role: "Founder, Ojas Wellness"
  },
  {
    text: "The technical prowess behind the Octa platform is exceptional. They delivered a Silicon Valley standard product with the soul of Indian hospitality.",
    author: "Aditi Singh",
    role: "CEO, Octa Cabs"
  },
  {
    text: "We needed an agency that understood the nuances of the high-end real estate market. Prismeek delivered elegance and performance in equal measure.",
    author: "Vikram Oberoi",
    role: "Director, Zenith Estates"
  }
];

export const PACKAGES = [
  {
    name: "The Essential",
    price: "From ₹60,000",
    description: "For emerging brands seeking a solid foundation.",
    features: ["Visual Identity System", "Custom Web Development", "Mobile Optimization", "Basic SEO Framework"]
  },
  {
    name: "The Signature",
    price: "From ₹1,50,000",
    description: "A complete digital transformation for scaling businesses.",
    features: ["Brand Strategy", "Full-Stack Web App", "Content Management System", "Content Writing", "Marketing Setup"]
  },
  {
    name: "The Heritage",
    price: "Custom Pricing",
    description: "The ultimate package for industry leaders. Fully custom.",
    features: ["Global Brand Architecture", "AI Integration", "3D & Immersive Design", "App Development", "24/7 Support"]
  }
];

export const INDUSTRIES = [
  "E-Commerce & Retail",
  "Hospitality & Travel",
  "Fintech & Banking",
  "Real Estate",
  "SaaS & Tech",
  "Art & Culture"
];
