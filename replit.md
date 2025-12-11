# PRISMEEK - Bespoke Digital Atelier

## Overview
Prismeek is a luxury digital agency website built with React, Vite, and TypeScript. It features a modern dark theme with elegant animations using Framer Motion.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (via CDN)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **AI Integration**: Google Generative AI (Gemini)

## Project Structure
- `/components/` - React components (Navigation, About, Services, etc.)
- `/pages/` - Page components (Home, CaseStudy, Privacy, Terms)
- `/services/` - API services (aiService for Gemini integration)
- `/public/` - Static assets

## Development
- Run `npm run dev` to start the development server on port 5000
- The app uses Vite for fast hot module replacement

## Deployment
- Build: `npm run build`
- Output: `dist/` directory (static deployment)

## Environment Variables
- `GEMINI_API_KEY` - Required for AI concierge feature
