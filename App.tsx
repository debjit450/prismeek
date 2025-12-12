import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Concierge from './components/Concierge';
import Intro from './components/Intro';
import { AGENCY_INFO } from './constants';
import { Loader2, Check } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"

import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';

const ScrollToAnchor = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);
    return null;
}

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

function App() {
    const [loading, setLoading] = useState(true);

    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
            document.documentElement.classList.toggle('light', savedTheme !== 'dark');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail) return;
        setNewsletterStatus('loading');

        setTimeout(() => {
            setNewsletterStatus('success');
            setNewsletterEmail('');
            setTimeout(() => setNewsletterStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <Router>
            <ScrollToAnchor />
            <ScrollToTop />
            <div className="bg-p-paper dark:bg-p-black min-h-screen relative selection:bg-p-gold selection:text-p-black transition-colors duration-700 overflow-x-hidden">
                {loading && <Intro onComplete={() => setLoading(false)} />}

                {!loading && (
                    <>
                        <CustomCursor />
                        <Navigation theme={theme} toggleTheme={toggleTheme} />

                        <div className="bg-noise"></div>

                        <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-p-emerald/10 dark:bg-p-emerald/20 rounded-full blur-[180px] pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-50 z-0"></div>
                        <div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-p-rose/10 dark:bg-p-amethyst/20 rounded-full blur-[180px] pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-50 z-0"></div>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/work" element={<WorkPage />} />
                            <Route path="/work/:slug" element={<CaseStudy />} />
                            <Route path="/journal" element={<Blog />} />
                            <Route path="/journal/:slug" element={<BlogPost />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />
                        </Routes>

                        <footer className="bg-p-paper dark:bg-p-black py-20 border-t border-p-ink/10 dark:border-white/5 relative z-10 transition-colors duration-700">
                            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">

                                <div className="max-w-xs">
                                    <div className="flex items-center gap-3 relative z-50 mb-4">
                                        <Link to="/" className="flex items-center gap-2 group">
                                            <img src="/logo.png" className="w-12 h-12 object-contain" alt="" />
                                            <span className="text-5xl font-cursive text-p-ink dark:text-p-cream tracking-wide transition-colors duration-500 mt-1 drop-shadow-sm group-hover:text-p-gold">
                                                {AGENCY_INFO.name}<span className="text-p-gold font-sans text-sm">.</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text-p-ink/40 dark:text-p-cream/40 text-[10px] tracking-widest uppercase leading-relaxed transition-colors duration-500">
                                        &copy; 2024 Prismeek Digital Atelier. <br />
                                        Crafted with precision. Available Worldwide.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-16 md:gap-24">
                                    <div>
                                        <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-serif transition-colors duration-500">Navigate</h4>
                                        <div className="flex flex-col gap-4">
                                            <Link to="/about" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">About</Link>
                                            <Link to="/services" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">Services</Link>
                                            <Link to="/work" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">Work</Link>
                                            <Link to="/journal" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">Journal</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-serif transition-colors duration-500">Socials</h4>
                                        <div className="flex flex-col gap-4">
                                            {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                                                <a key={social} href="#" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">
                                                    {social}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-serif transition-colors duration-500">Legal</h4>
                                        <div className="flex flex-col gap-4">
                                            <Link to="/privacy" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
                                            <Link to="/terms" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto min-w-[300px]">
                                    <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-serif transition-colors duration-500">The Journal</h4>
                                    <form onSubmit={handleNewsletterSubmit} className="flex border-b border-p-ink/10 dark:border-white/10 pb-3 relative">
                                        <input
                                            type="email"
                                            required
                                            value={newsletterEmail}
                                            onChange={(e) => setNewsletterEmail(e.target.value)}
                                            placeholder="YOUR EMAIL ADDRESS"
                                            className="bg-transparent text-p-ink dark:text-p-cream text-[10px] uppercase tracking-widest w-full focus:outline-none placeholder:text-p-ink/20 dark:placeholder:text-white/20"
                                        />
                                        <button
                                            type="submit"
                                            disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                                            className="text-p-gold hover:text-p-ink dark:hover:text-white transition-colors text-[10px] uppercase tracking-widest absolute right-0 bottom-3"
                                        >
                                            {newsletterStatus === 'loading' ? (
                                                <Loader2 className="animate-spin w-3 h-3" />
                                            ) : newsletterStatus === 'success' ? (
                                                <Check className="w-3 h-3" />
                                            ) : (
                                                'Subscribe'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </footer>

                        <Concierge />
                    </>
                )}
            </div>
            <Analytics />
        </Router>
    );
}

export default App;
