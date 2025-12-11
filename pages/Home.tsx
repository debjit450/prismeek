// pages/Home.tsx  (or wherever your component lives)
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Loader2, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../constants';
import Intro from '../components/Intro';
import Manifesto from '../components/Manifesto';
import About from '../components/About';
import Work from '../components/Work';
import Services from '../components/Services';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import Packages from '../components/Packages';

const FORMCARRY_URL = "https://formcarry.com/s/6phPvCLSNPL";

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Form State
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', company: '', email: '', details: '' });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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

            // parse JSON (formcarry responds with JSON body)
            const json = await res.json().catch(() => null);

            // formcarry convention used in provided demo: json.code === 200, 422 etc.
            if (json && json.code === 200) {
                setFormStatus('success');
                setFormData({ name: '', company: '', email: '', details: '' });

                // optionally reset success message after a short duration (you already had this)
                setTimeout(() => setFormStatus('idle'), 5000);
            } else if (json && json.code === 422) {
                // validation failed
                setFormStatus('error');
                setErrorMessage(typeof json.message === 'string' ? json.message : "Validation error. Please check your inputs.");
            } else if (json && json.message) {
                // other formcarry-provided error
                setFormStatus('error');
                setErrorMessage(json.message);
            } else {
                // fallback for unexpected non-JSON or status codes
                setFormStatus('error');
                setErrorMessage(`Submission failed${res.status ? ` (HTTP ${res.status})` : ''}. Please try again.`);
            }
        } catch (err: any) {
            // network / request error
            setFormStatus('error');
            setErrorMessage(err?.message ?? String(err) ?? 'Unknown error occurred.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div ref={containerRef}>
            {/* HERO SECTION */}
            <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden mt-20">
                <motion.div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-p-stone/20 to-p-paper dark:from-p-charcoal/30 dark:to-p-black transition-colors duration-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Animated Geometry Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none">
                    <motion.div
                        className="w-[50vw] h-[50vw] border border-p-gold/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-[35vw] h-[35vw] border border-p-gold/10 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center"
                >
                    <div className="overflow-hidden mb-8">
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-p-gold text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans"
                        >
                            Est. MMXIV — Global
                        </motion.p>
                    </div>

                    <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-serif text-p-ink dark:text-p-cream leading-[0.85] tracking-tight mb-8 transition-colors duration-500">
                        <motion.span
                            initial={{ opacity: 0, y: 100, rotate: 3 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                            className="block"
                        >
                            Digital
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 100, rotate: -3 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
                            className="block italic text-p-gold-dim font-light"
                        >
                            Atelier
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-p-ink/60 dark:text-p-cream/60 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed mt-8 transition-colors duration-500"
                    >
                        Crafting bespoke digital estates for brands that command heritage status.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 1, ease: "circOut" }}
                        className="w-px h-24 bg-gradient-to-b from-p-gold to-transparent mt-12"
                    />
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

            {/* QUOTE SECTION */}
            <section className="py-40 bg-p-stone/20 dark:bg-p-sage/5 flex items-center justify-center relative overflow-hidden transition-colors duration-700">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="max-w-4xl px-6 text-center relative z-10">
                    <Star className="w-6 h-6 text-p-gold mx-auto mb-10 animate-pulse" />
                    <p className="text-3xl md:text-5xl font-serif text-p-ink dark:text-p-cream leading-tight italic transition-colors duration-500">
                        "Simplicity is the ultimate sophistication."
                    </p>
                    <p className="mt-8 text-xs uppercase tracking-[0.2em] text-p-gold/70 font-sans">— Leonardo da Vinci</p>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-32 md:py-48 px-6 bg-p-paper dark:bg-p-black border-t border-p-ink/10 dark:border-white/5 relative transition-colors duration-700">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
                    <div className="lg:w-5/12">
                        <span className="text-p-gold text-xs tracking-[0.4em] uppercase block mb-6">Inquiries</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-p-ink dark:text-p-cream mb-10 transition-colors duration-500">
                            Begin <br /> <span className="text-p-gold italic">Legacy</span>
                        </h2>
                        <p className="text-p-ink/60 dark:text-p-cream/60 text-lg font-light mb-16 max-w-sm transition-colors duration-500 leading-relaxed">
                            We accept a limited number of commissions per year to maintain our standards of excellence.
                        </p>

                        <div className="space-y-10">
                            <div className="group">
                                <p className="text-[10px] text-p-gold/80 uppercase tracking-widest mb-2">Private Line / WhatsApp</p>
                                <a href={AGENCY_INFO.whatsappLink} className="text-2xl font-serif text-p-ink dark:text-p-cream hover:text-p-gold transition-colors block relative w-fit">
                                    {AGENCY_INFO.phoneDisplay}
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-p-gold transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>
                            <div className="group">
                                <p className="text-[10px] text-p-gold/80 uppercase tracking-widest mb-2">Electronic Mail</p>
                                <a href={`mailto:${AGENCY_INFO.email}`} className="text-2xl font-serif text-p-ink dark:text-p-cream hover:text-p-gold transition-colors block relative w-fit">
                                    {AGENCY_INFO.email}
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-p-gold transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 bg-white/50 dark:bg-white/[0.02] p-10 md:p-14 border border-p-ink/5 dark:border-white/5 backdrop-blur-md transition-colors duration-500">
                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <CheckCircle2 className="w-16 h-16 text-p-gold mb-6" />
                                <h3 className="text-2xl font-serif text-p-ink dark:text-p-cream mb-4">Inquiry Received</h3>
                                <p className="text-p-ink/60 dark:text-p-cream/60 max-w-xs mx-auto mb-8">
                                    Thank you for your interest. Our team will review your requirements and respond within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setFormStatus('idle'); setErrorMessage(null); }}
                                    className="text-p-gold text-xs uppercase tracking-widest hover:text-p-ink dark:hover:text-white transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            className="peer w-full bg-transparent border-b border-p-ink/20 dark:border-white/10 py-3 text-p-ink dark:text-p-cream focus:outline-none focus:border-p-gold transition-colors placeholder-transparent"
                                        />
                                        <label className="absolute left-0 top-3 text-xs text-p-ink/40 dark:text-p-cream/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-p-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] pointer-events-none">Name</label>
                                    </div>
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            className="peer w-full bg-transparent border-b border-p-ink/20 dark:border-white/10 py-3 text-p-ink dark:text-p-cream focus:outline-none focus:border-p-gold transition-colors placeholder-transparent"
                                        />
                                        <label className="absolute left-0 top-3 text-xs text-p-ink/40 dark:text-p-cream/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-p-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] pointer-events-none">Company</label>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b border-p-ink/20 dark:border-white/10 py-3 text-p-ink dark:text-p-cream focus:outline-none focus:border-p-gold transition-colors placeholder-transparent"
                                    />
                                    <label className="absolute left-0 top-3 text-xs text-p-ink/40 dark:text-p-cream/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-p-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] pointer-events-none">Email Address</label>
                                </div>
                                <div className="group relative">
                                    <textarea
                                        rows={4}
                                        name="details"
                                        required
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b border-p-ink/20 dark:border-white/10 py-3 text-p-ink dark:text-p-cream focus:outline-none focus:border-p-gold transition-colors resize-none placeholder-transparent"
                                    ></textarea>
                                    <label className="absolute left-0 top-3 text-xs text-p-ink/40 dark:text-p-cream/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-p-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] pointer-events-none">Project Details</label>
                                </div>

                                {/* Inline error message */}
                                {formStatus === 'error' && errorMessage && (
                                    <div className="text-sm text-red-600 dark:text-red-400">
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className="w-full py-5 bg-p-gold text-p-black text-xs uppercase tracking-[0.2em] hover:bg-p-ink dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-500 font-medium disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2"
                                >
                                    {formStatus === 'loading' ? (
                                        <>
                                            <Loader2 className="animate-spin w-4 h-4" /> Sending...
                                        </>
                                    ) : 'Submit Inquiry'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
