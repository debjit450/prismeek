export const AGENCY_INFO = {
  name: "Prismeek",
  tagline: "We Build Websites That Work",
  email: "prismeek@yahoo.com",
  phone: "+91 7439749872",
  phoneDisplay: "+91 7439 749 872",
  whatsappLink: "https://wa.me/917439749872",
  address: "Wework Galaxy, 43, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka 560025",
  addressShort: "Bengaluru · Worldwide",
  streetAddress: "Wework Galaxy, 43, Residency Rd",
  locality: "Richmond Town",
  region: "Karnataka",
  postalCode: "560025",
  country: "IN",
  geo: {
    latitude: "12.9716",
    longitude: "77.5946"
  }
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/journal" },
  { name: "Contact", href: "/#contact" },
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
      solution: "We built an AI that runs quietly in the background. It listens to your meeting and automatically notes down tasks and key points.",
      outcome: "User retention went up by 300% and it was voted 'Product of the Month' on Product Hunt.",
      stack: ["React", "Python", "OpenAI", "WebSockets"],
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
    category: "Travel & Transport",
    year: "2023",
    image: "https://images.unsplash.com/photo-1695309342594-9ea5e3dae2cd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A complete ride-booking platform with apps for customers, drivers, and admins.",
    details: {
      challenge: "Octa needed three apps that work together seamlessly: one for riders to book, one for drivers to navigate, and one for the team to manage operations.",
      solution: "We created a simple design system. The rider app is calm and easy. The driver app is bold and clear for safety. The admin panel shows all the data clearly.",
      outcome: "Booking became 2.5 seconds faster and the app has a 4.8-star rating on the App Store.",
      stack: ["React Native", "Node.js", "Google Maps", "AWS"],
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
    category: "Finance",
    year: "2024",
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A beautiful dashboard for tracking investments and managing wealth.",
    details: {
      challenge: "Wealthy clients need to see their money clearly. Standard charts looked messy and confusing.",
      solution: "We designed charts that are beautiful and easy to read. Smooth animations make the data feel alive. Clean fonts make everything look professional.",
      outcome: "Now used by 3 major wealth management firms in Mumbai and Singapore.",
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
    category: "Hotels & Travel",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A 3D website with virtual tours for a luxury hotel in Rajasthan.",
    details: {
      challenge: "Vanya Heritage is a 400-year-old fort turned hotel. A normal website couldn't show how amazing it feels to be there.",
      solution: "We built 3D virtual tours so guests can explore rooms before booking. We added real sounds like wind and peacocks to make it feel real.",
      outcome: "Direct bookings increased by 85%, so the hotel pays less to booking sites.",
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
    text: "Prismeek truly understood our brand. They balanced our traditional values with a modern look. The website is exactly what we needed.",
    author: "Rohan Khanna",
    role: "Founder, Ojas Wellness"
  },
  {
    text: "The Octa platform works perfectly. They built something that feels like it came from Silicon Valley, but with the warmth we wanted.",
    author: "Aditi Singh",
    role: "CEO, Octa Cabs"
  },
  {
    text: "We needed a team that gets real estate. Prismeek delivered a website that looks amazing and actually brings in leads.",
    author: "Vikram Oberoi",
    role: "Director, Zenith Estates"
  }
];

export const PACKAGES = [
  {
    name: "Starter",
    price: "From ₹60,000",
    description: "Perfect for new businesses who need a professional website.",
    features: ["Logo & Brand Design", "5-Page Website", "Mobile-Friendly", "Basic SEO Setup"]
  },
  {
    name: "Growth",
    price: "From ₹1,50,000",
    description: "For businesses ready to grow online with more features.",
    features: ["Brand Strategy", "Custom Web App", "Admin Dashboard", "Content Writing", "Marketing Setup"]
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Full-service solution for established businesses.",
    features: ["Complete Branding", "AI Features", "Mobile Apps", "3D & Animations", "Priority Support"]
  }
];

export const INDUSTRIES = [
  "Online Stores",
  "Hotels & Travel",
  "Finance & Banking",
  "Real Estate",
  "Software & Tech",
  "Healthcare"
];
