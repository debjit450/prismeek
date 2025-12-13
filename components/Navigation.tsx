import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, AGENCY_INFO } from '../constants';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const menuVariants = {
        closed: { height: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
        open: { height: "100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } }
    };

    const linkVariants = {
        closed: { y: "100%", opacity: 0 },
        open: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: { delay: 0.4 + (i * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
        })
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            if (isHome) {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-700 ${
                    scrolled && !isOpen
                        ? 'py-4'
                        : 'py-6'
                }`}
            >
                <div className={`absolute inset-0 transition-all duration-500 ${
                    scrolled && !isOpen
                        ? 'bg-p-paper/70 dark:bg-p-black/70 backdrop-blur-2xl border-b border-p-ink/5 dark:border-white/5'
                        : 'bg-transparent'
                }`} />
                
                <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <img src="/logo.png" className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10" alt="" />
                                <div className="absolute inset-0 bg-p-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-logo text-p-ink dark:text-p-cream tracking-wider transition-colors duration-500 group-hover:text-p-gold">
                                    {AGENCY_INFO.name}
                                </span>
                                <span className="text-[8px] font-mono text-p-gold/60 uppercase tracking-[0.3em] -mt-1 hidden md:block">
                                    Digital Atelier
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-1 items-center glass-gold px-2 py-1 rounded-full">
                            {NAV_LINKS.map((link, index) => (
                                <React.Fragment key={link.name}>
                                    {link.href.startsWith('/#') ? (
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="text-[11px] uppercase tracking-[0.15em] font-medium text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold dark:hover:text-p-gold transition-all duration-300 px-4 py-2 rounded-full hover:bg-p-gold/10 cursor-pointer"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="text-[11px] uppercase tracking-[0.15em] font-medium text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold dark:hover:text-p-gold transition-all duration-300 px-4 py-2 rounded-full hover:bg-p-gold/10"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </motion.button>
                            
                            <Link to="/#contact" className="hidden xl:flex items-center gap-2 px-5 py-2.5 bg-p-gold text-p-black text-[10px] uppercase tracking-[0.15em] font-medium rounded-full hover:bg-p-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-p-gold/20">
                                <Sparkles size={12} />
                                Start Project
                            </Link>
                        </div>
                    </div>

                    <div className="flex lg:hidden gap-4 items-center z-50">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 left-0 w-full bg-p-paper dark:bg-p-black z-40 overflow-hidden flex flex-col justify-center items-center"
                    >
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[60vw] h-[60vw] rounded-full border border-p-gold/5 animate-spin-slower" />
                            <div className="absolute w-[40vw] h-[40vw] rounded-full border border-p-gold/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                        </div>

                        <div className="flex flex-col gap-6 text-center relative z-10">
                            {NAV_LINKS.map((link, i) => (
                                <div key={link.name} className="overflow-hidden">
                                    {link.href.startsWith('/#') ? (
                                        <motion.a
                                            custom={i}
                                            variants={linkVariants}
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="block text-4xl md:text-6xl font-display font-bold text-p-ink dark:text-p-cream hover:text-p-gold transition-colors duration-300 cursor-pointer"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ) : (
                                        <Link to={link.href} onClick={() => setIsOpen(false)}>
                                            <motion.span
                                                custom={i}
                                                variants={linkVariants}
                                                className="block text-4xl md:text-6xl font-display font-bold text-p-ink dark:text-p-cream hover:text-p-gold transition-colors duration-300"
                                            >
                                                {link.name}
                                            </motion.span>
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 flex flex-col items-center gap-6"
                            >
                                <Link 
                                    to="/#contact" 
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-p-gold text-p-black text-sm uppercase tracking-[0.15em] font-medium rounded-full hover:bg-p-gold-light transition-all"
                                >
                                    <Sparkles size={16} />
                                    Start Your Project
                                </Link>
                                
                                <div className="flex gap-6 mt-4">
                                    <Link to="/privacy" onClick={() => setIsOpen(false)} className="text-xs text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold font-mono uppercase tracking-wider">Privacy</Link>
                                    <Link to="/terms" onClick={() => setIsOpen(false)} className="text-xs text-p-ink/40 dark:text-p-cream/40 hover:text-p-gold font-mono uppercase tracking-wider">Terms</Link>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 flex flex-col items-center gap-4"
                        >
                            <p className="text-p-gold/60 text-[10px] tracking-[0.3em] uppercase font-mono">Est. MMXXV</p>
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-p-gold/30 to-transparent" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
