import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Concierge from './components/Concierge';
import Intro from './components/Intro';
import { AGENCY_INFO } from './constants';
import { Loader2, Check, Sparkles, ArrowUp } from 'lucide-react';
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

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full glass-gold flex items-center justify-center text-p-gold hover:bg-p-gold hover:text-p-black transition-all duration-300 hover:shadow-lg hover:shadow-p-gold/20"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </motion.button>
            )}
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
            <div className="bg-p-paper dark:bg-p-black min-h-screen relative selection:bg-p-gold/30 selection:text-p-ink dark:selection:text-p-cream transition-colors duration-700 overflow-x-hidden">
                {loading && <Intro onComplete={() => setLoading(false)} />}

                {!loading && (
                    <>
                        <CustomCursor />
                        <Navigation theme={theme} toggleTheme={toggleTheme} />

                        <div className="noise-overlay" />

                        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                            <div className="absolute top-[-30%] left-[-20%] w-[800px] h-[800px] bg-gradient-radial from-p-emerald/10 dark:from-p-emerald/20 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-glow" />
                            <div className="absolute bottom-[-30%] right-[-20%] w-[900px] h-[900px] bg-gradient-radial from-p-amethyst/10 dark:from-p-amethyst/15 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-glow" style={{ animationDelay: '2s' }} />
                            <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-gradient-radial from-p-gold/5 to-transparent rounded-full blur-2xl opacity-40" />
                        </div>

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

                        <footer className="bg-p-paper dark:bg-p-black py-20 border-t border-p-ink/5 dark:border-white/5 relative z-10 transition-colors duration-700">
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            
                            <div className="max-w-7xl mx-auto px-6 relative z-10">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
                                    <div className="max-w-sm">
                                        <Link to="/" className="flex items-center gap-3 group mb-6">
                                            <img src="/logo.png" className="w-10 h-10 object-contain" alt="" />
                                            <span className="text-4xl font-cursive text-p-ink dark:text-p-cream tracking-wide transition-colors duration-500 group-hover:text-p-gold">
                                                {AGENCY_INFO.name}
                                            </span>
                                        </Link>
                                        <p className="text-p-ink/40 dark:text-p-cream/40 text-xs font-mono uppercase tracking-wider leading-relaxed transition-colors duration-500">
                                            &copy; 2024 Prismeek Digital Atelier. <br />
                                            Crafted with precision. Available Worldwide.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-16 lg:gap-24">
                                        <div>
                                            <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-display font-semibold transition-colors duration-500">Navigate</h4>
                                            <div className="flex flex-col gap-4">
                                                {['About', 'Services', 'Work', 'Journal'].map(item => (
                                                    <Link key={item} to={`/${item.toLowerCase()}`} className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-[0.15em] transition-colors font-mono">
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-display font-semibold transition-colors duration-500">Connect</h4>
                                            <div className="flex flex-col gap-4">
                                                {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                                                    <a key={social} href="#" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-[0.15em] transition-colors font-mono">
                                                        {social}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-display font-semibold transition-colors duration-500">Legal</h4>
                                            <div className="flex flex-col gap-4">
                                                <Link to="/privacy" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-[0.15em] transition-colors font-mono">Privacy Policy</Link>
                                                <Link to="/terms" className="text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold text-[10px] uppercase tracking-[0.15em] transition-colors font-mono">Terms of Service</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-auto min-w-[280px]">
                                        <h4 className="text-p-ink dark:text-p-cream text-sm mb-6 font-display font-semibold transition-colors duration-500">The Journal</h4>
                                        <form onSubmit={handleNewsletterSubmit} className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={newsletterEmail}
                                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                                placeholder="YOUR EMAIL ADDRESS"
                                                className="w-full bg-white/5 dark:bg-white/[0.02] border border-p-ink/10 dark:border-white/10 rounded-full px-5 py-3 text-p-ink dark:text-p-cream text-[10px] uppercase tracking-[0.15em] font-mono focus:outline-none focus:border-p-gold pr-28"
                                            />
                                            <button
                                                type="submit"
                                                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-p-gold text-p-black text-[10px] uppercase tracking-[0.1em] font-mono rounded-full hover:bg-p-gold-light transition-colors disabled:opacity-50"
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

                                <div className="mt-16 pt-8 border-t border-p-ink/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-p-ink/40 dark:text-p-cream/40 font-mono uppercase tracking-wider">All Systems Operational</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Sparkles className="w-3 h-3 text-p-gold/50" />
                                        <span className="text-[10px] text-p-ink/40 dark:text-p-cream/40 font-mono uppercase tracking-wider">Built with Precision</span>
                                    </div>
                                </div>
                            </div>
                        </footer>

                        <ScrollToTopButton />
                        <Concierge />
                    </>
                )}
            </div>
            <Analytics />
        </Router>
    );
}

export default App;
