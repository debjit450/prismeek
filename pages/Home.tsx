import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, Loader2, CheckCircle2, ArrowDown, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../constants';
import Manifesto from '../components/Manifesto';
import About from '../components/About';
import Work from '../components/Work';
import Services from '../components/Services';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import Packages from '../components/Packages';
import SEOHead, { PAGE_SEO_CONFIG } from '../components/SEOHead';
import { HeroScene3D } from '../components/Scene3D';

const FORMCARRY_URL = "https://formcarry.com/s/6phPvCLSNPL";

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: heroScrollProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', company: '', email: '', details: '' });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.95]);
    const smoothHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);
        setFormStatus('loading');

        try {
            const payload = {
                name: formData.name,
                company: formData.company,
                email: formData.email,
                details: formData.details
            };

            const res = await fetch(FORMCARRY_URL, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const json = await res.json().catch(() => null);

            if (json && json.code === 200) {
                setFormStatus('success');
                setFormData({ name: '', company: '', email: '', details: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else if (json && json.code === 422) {
                setFormStatus('error');
                setErrorMessage(typeof json.message === 'string' ? json.message : "Validation error. Please check your inputs.");
            } else if (json && json.message) {
                setFormStatus('error');
                setErrorMessage(json.message);
            } else {
                setFormStatus('error');
                setErrorMessage(`Submission failed${res.status ? ` (HTTP ${res.status})` : ''}. Please try again.`);
            }
        } catch (err: any) {
            setFormStatus('error');
            setErrorMessage(err?.message ?? String(err) ?? 'Unknown error occurred.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div ref={containerRef}>
            <SEOHead
                title={PAGE_SEO_CONFIG.home.title}
                description={PAGE_SEO_CONFIG.home.description}
                keywords={PAGE_SEO_CONFIG.home.keywords}
            />

            <section ref={heroRef} id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />

                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-p-paper via-p-paper to-p-stone/50 dark:from-p-black dark:via-p-charcoal dark:to-p-black transition-colors duration-700" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent" />
                </motion.div>

                <HeroScene3D />

                <motion.div
                    style={{ y: smoothHeroY, opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm rounded-full"
                    >
                        <Sparkles className="w-3 h-3 text-violet-400" />
                        <span className="text-violet-400 text-[10px] md:text-xs tracking-[0.4em] uppercase font-mono">
                            Dgital Agency · India
                        </span>
                        <Sparkles className="w-3 h-3 text-violet-400" />
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-display font-bold text-p-ink dark:text-p-cream leading-[0.9] tracking-tight mb-6 transition-colors duration-500">
                        <motion.span
                            initial={{ opacity: 0, y: 80, rotateX: -30 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            We Build
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 80, rotateX: -30 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="block bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent"
                        >
                            Great Websites
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-p-ink/60 dark:text-p-cream/60 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mt-4 transition-colors duration-500"
                    >
                        Websites, apps, and AI solutions that help your business <span className="text-violet-400">grow online</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-12"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:from-violet-400 hover:to-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20 hover:-translate-y-1"
                        >
                            <Sparkles size={14} />
                            Get Free Quote
                        </a>
                        <a
                            href="#work"
                            className="group inline-flex items-center gap-3 px-8 py-4 glass border border-violet-500/20 text-p-ink dark:text-p-cream text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-violet-500/10 transition-all duration-300"
                        >
                            See Our Work
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                    >
                        <span className="text-[8px] text-p-ink/30 dark:text-p-cream/30 uppercase tracking-[0.3em] font-mono">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-4 h-4 text-violet-400/50" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <ClientLogos />

            <Manifesto />

            <About />

            <Services />

            <Work />

            <Industries />

            <Packages />

            <Testimonials />

            <section className="py-32 md:py-48 bg-p-stone/20 dark:bg-p-charcoal/50 relative overflow-hidden transition-colors duration-700">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Star className="w-8 h-8 text-violet-400 mx-auto mb-10 animate-pulse" />
                        <blockquote className="text-2xl sm:text-3xl md:text-5xl font-serif text-p-ink dark:text-p-cream leading-tight italic transition-colors duration-500">
                            "Simplicity is the ultimate sophistication."
                        </blockquote>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-violet-500/50" />
                            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-mono">Leonardo da Vinci</p>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-violet-500/50" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contact" className="py-24 md:py-40 px-6 bg-p-paper dark:bg-p-black relative overflow-hidden transition-colors duration-700">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-3 px-5 py-2 bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm rounded-full mb-6">
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            <span className="text-violet-400 text-[10px] tracking-[0.4em] uppercase font-mono">Contact Us</span>
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-p-ink dark:text-p-cream transition-colors duration-500">
                            Let's <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">Talk</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-5/12"
                        >
                            <p className="text-p-ink/60 dark:text-p-cream/60 text-lg font-light mb-12 leading-relaxed transition-colors duration-500">
                                Ready to start your project? Get in touch and we'll get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="group p-6 glass rounded-2xl hover:bg-violet-500/5 transition-all duration-300">
                                    <p className="text-[10px] text-violet-400 uppercase tracking-[0.3em] mb-3 font-mono">Call or WhatsApp</p>
                                    <a href={AGENCY_INFO.whatsappLink} className="text-xl md:text-2xl font-display font-semibold text-p-ink dark:text-p-cream hover:text-violet-400 transition-colors">
                                        {AGENCY_INFO.phoneDisplay}
                                    </a>
                                </div>
                                <div className="group p-6 glass rounded-2xl hover:bg-violet-500/5 transition-all duration-300">
                                    <p className="text-[10px] text-violet-400 uppercase tracking-[0.3em] mb-3 font-mono">Email</p>
                                    <a href={`mailto:${AGENCY_INFO.email}`} className="text-xl md:text-2xl font-display font-semibold text-p-ink dark:text-p-cream hover:text-violet-400 transition-colors break-all">
                                        {AGENCY_INFO.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:w-7/12"
                        >
                            <div className="glass rounded-3xl p-8 md:p-12 border-gradient">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-16"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-violet-400" />
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-p-ink dark:text-p-cream mb-4">Message Sent!</h3>
                                        <p className="text-p-ink/60 dark:text-p-cream/60 max-w-xs mx-auto mb-8">
                                            Thanks for reaching out! We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => { setFormStatus('idle'); setErrorMessage(null); }}
                                            className="text-violet-400 text-xs uppercase tracking-[0.15em] hover:text-p-ink dark:hover:text-white transition-colors font-mono"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label className="text-[10px] text-violet-400 uppercase tracking-[0.2em] mb-3 block font-mono">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 dark:bg-white/[0.02] border border-p-ink/10 dark:border-white/10 rounded-xl px-5 py-4 text-p-ink dark:text-p-cream focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-p-ink/30 dark:placeholder:text-p-cream/30"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="text-[10px] text-violet-400 uppercase tracking-[0.2em] mb-3 block font-mono">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 dark:bg-white/[0.02] border border-p-ink/10 dark:border-white/10 rounded-xl px-5 py-4 text-p-ink dark:text-p-cream focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-p-ink/30 dark:placeholder:text-p-cream/30"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label className="text-[10px] text-violet-400 uppercase tracking-[0.2em] mb-3 block font-mono">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/5 dark:bg-white/[0.02] border border-p-ink/10 dark:border-white/10 rounded-xl px-5 py-4 text-p-ink dark:text-p-cream focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-p-ink/30 dark:placeholder:text-p-cream/30"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="text-[10px] text-violet-400 uppercase tracking-[0.2em] mb-3 block font-mono">Project Details *</label>
                                            <textarea
                                                rows={4}
                                                name="details"
                                                required
                                                value={formData.details}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/5 dark:bg-white/[0.02] border border-p-ink/10 dark:border-white/10 rounded-xl px-5 py-4 text-p-ink dark:text-p-cream focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none placeholder:text-p-ink/30 dark:placeholder:text-p-cream/30"
                                                placeholder="Tell us about your vision..."
                                            ></textarea>
                                        </div>

                                        {formStatus === 'error' && errorMessage && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                                                {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'loading'}
                                            className="w-full py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xl hover:from-violet-400 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-violet-500/20"
                                        >
                                            {formStatus === 'loading' ? (
                                                <>
                                                    <Loader2 className="animate-spin w-4 h-4" /> Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles size={14} />
                                                    Submit Inquiry
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
