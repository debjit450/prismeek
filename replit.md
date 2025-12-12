# Prismeek - Bespoke Digital Atelier

## Overview
Prismeek is a luxury digital agency website built with React, TypeScript, and Vite. The site features a premium dark/light theme, smooth animations with Framer Motion, and comprehensive SEO optimization for maximum visibility on search engines and AI chatbots.

## Project Structure
```
├── components/           # React components
│   ├── SEOHead.tsx       # Dynamic SEO meta tags component
│   ├── About.tsx         # About/Team section
│   ├── Services.tsx      # Services listing
│   ├── Work.tsx          # Portfolio section
│   ├── Industries.tsx    # Industries served
│   └── ...
├── pages/                # Page components
│   ├── Home.tsx          # Main homepage
│   ├── CaseStudy.tsx     # Individual project pages
│   ├── Privacy.tsx       # Privacy policy
│   └── Terms.tsx         # Terms of service
├── services/             # Service modules
│   ├── aiService.ts      # AI concierge (Gemini integration)
│   └── seoService.ts     # AI-powered SEO optimization
├── public/               # Static assets & SEO files
│   ├── robots.txt        # Search engine & AI bot directives
│   ├── sitemap.xml       # XML sitemap
│   ├── llms.txt          # LLM-readable site info
│   ├── llms-full.txt     # Complete knowledge base for AI
│   ├── knowledge-base.json  # Structured data for AI systems
│   ├── manifest.json     # Web app manifest
│   └── .well-known/      # AI plugin & security files
├── constants.ts          # Site data (portfolio, testimonials)
├── index.html            # Main HTML with comprehensive JSON-LD
└── vite.config.ts        # Vite configuration (port 5000)
```

## SEO Implementation

### Structured Data (JSON-LD)
The site includes comprehensive Schema.org structured data:
- Organization schema with full business details
- WebSite schema with search action
- ProfessionalService schema with service catalog
- FAQ schema with common questions
- Review and AggregateRating schemas
- CreativeWork schemas for portfolio items
- Person schema for founder
- Speakable schema for voice assistants
- BreadcrumbList and HowTo schemas

### AI Chatbot Visibility
Files for AI chatbot discoverability:
- `/robots.txt` - Allows all major AI crawlers (GPTBot, Claude, Perplexity, etc.)
- `/llms.txt` - Summary information for LLMs
- `/llms-full.txt` - Comprehensive knowledge base
- `/knowledge-base.json` - Structured JSON data
- `/.well-known/ai-plugin.json` - OpenAI plugin format

### Meta Tags
- Geographic targeting (India/Mumbai)
- Dublin Core metadata
- Open Graph and Twitter cards
- AI training permissions
- Mobile optimization tags

### Dynamic SEO
- SEOHead component for per-page meta management
- Dynamic structured data injection
- Case study specific SEO generation
- AI-powered SEO suggestions (via Gemini)

## Technologies
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build**: Vite 6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI**: Google Gemini API (@google/genai)
- **Routing**: React Router DOM

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
```

## Environment Variables
- `GEMINI_API_KEY` - Google Gemini API key for AI features

## Recent Changes
- December 2024: Comprehensive UI/UX Overhaul
  - Enhanced typography with premium fonts (Orbitron for display, Space Grotesk for body, Playfair Display for cursive/serif)
  - Upgraded 3D Scene with holographic materials, particle effects, and complex geometries
  - Enhanced Navigation with glassmorphism effects, gradient backgrounds, and improved animations
  - Improved Hero section with parallax effects, gradient overlays, and smooth animations
  - Enhanced Services cards with hover effects, gradient backgrounds, and micro-interactions
  - Improved Work/Portfolio section with parallax scrolling and enhanced card designs
  - Upgraded About section with better layout and visual hierarchy
  - Enhanced Manifesto section with parallax text and glass cards
  - Improved ClientLogos with smooth infinite scroll
  - Enhanced Testimonials with star ratings and premium card designs
  - Upgraded Packages section with featured tier highlighting
  - Enhanced Industries section with pill-style tags
  - Improved footer with newsletter subscription and system status
  - Enhanced custom cursor with smooth animations and hover states
  - Added scroll-to-top button with gold accent

- December 2024: Implemented comprehensive advanced SEO
  - Added 10+ JSON-LD schemas
  - Created AI chatbot visibility files (llms.txt, ai-plugin.json)
  - Built dynamic SEO component system
  - Added AI-powered SEO service with Gemini
  - Enhanced meta tags with geographic and Dublin Core data

## Design System
- **Colors**: Gold (#C8AA6E) as primary accent, deep blacks and warm creams
- **Typography**: Orbitron (display/headings), Space Grotesk (body), Playfair Display (elegant/cursive), JetBrains Mono (code)
- **Effects**: Glass morphism, gradient overlays, parallax scrolling, subtle animations
- **Patterns**: Grid backgrounds, dot patterns, radial gradients
- **Animations**: Framer Motion for page transitions and scroll-triggered reveals

## User Preferences
- Dark theme preferred
- Luxury/premium design aesthetic with techie elements
- Focus on SEO and AI visibility
- Immersive 3D experiences
