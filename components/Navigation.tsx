import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, AGENCY_INFO } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png'
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
        closed: { height: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        open: { height: "100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    const linkVariants = {
        closed: { y: "100%", opacity: 0 },
        open: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: { delay: 0.4 + (i * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        })
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);

        // If it's a hash link
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');

            if (isHome) {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // If not home, the Link component handles navigation to /#hash
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-700 flex justify-between items-center ${scrolled && !isOpen
                    ? 'bg-p-paper/80 dark:bg-p-black/80 backdrop-blur-xl border-b border-p-ink/5 dark:border-white/5 py-4'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center gap-3 relative z-50">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} className="w-12 h-12 object-contain" alt="" />
                        <span className="text-4xl font-cursive text-p-ink dark:text-p-cream tracking-wide transition-colors duration-500 mt-1 drop-shadow-sm group-hover:text-p-gold">
                            {AGENCY_INFO.name}<span className="text-p-gold font-sans text-sm">.</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex gap-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <div key={link.name}>
                                {link.href.startsWith('/#') ? (
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-[11px] uppercase tracking-[0.2em] font-medium text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold dark:hover:text-p-gold transition-colors duration-300 relative group cursor-pointer"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-p-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-[11px] uppercase tracking-[0.2em] font-medium text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold dark:hover:text-p-gold transition-colors duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-p-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-[1px] h-4 bg-p-ink/10 dark:bg-white/10"></div>

                    <button
                        onClick={toggleTheme}
                        className="text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden gap-6 items-center z-50">
                    <button
                        onClick={toggleTheme}
                        className="text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="text-p-ink dark:text-p-cream hover:text-p-gold transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 left-0 w-full bg-p-paper dark:bg-p-black z-40 overflow-hidden flex flex-col justify-center items-center"
                    >
                        {/* Background Art */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                            <span className="text-[40vw] font-cursive text-p-ink dark:text-p-cream opacity-10">P</span>
                        </div>

                        <div className="flex flex-col gap-8 text-center relative z-10">
                            {NAV_LINKS.map((link, i) => (
                                <div key={link.name} className="overflow-hidden">
                                    {link.href.startsWith('/#') ? (
                                        <motion.a
                                            custom={i}
                                            variants={linkVariants}
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="block text-5xl font-serif text-p-ink dark:text-p-cream hover:text-p-gold italic transition-colors duration-500 cursor-pointer"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ) : (
                                        <Link to={link.href} onClick={() => setIsOpen(false)}>
                                            <motion.span
                                                custom={i}
                                                variants={linkVariants}
                                                className="block text-5xl font-serif text-p-ink dark:text-p-cream hover:text-p-gold italic transition-colors duration-500"
                                            >
                                                {link.name}
                                            </motion.span>
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Legal Links in Menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex gap-6"
                            >
                                <Link to="/privacy" onClick={() => setIsOpen(false)} className="text-sm text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold">Privacy</Link>
                                <Link to="/terms" onClick={() => setIsOpen(false)} className="text-sm text-p-ink/60 dark:text-p-cream/60 hover:text-p-gold">Terms</Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 flex flex-col items-center gap-4"
                        >
                            <p className="text-p-gold text-xs tracking-widest uppercase">Est. MMXIV — Mumbai</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;