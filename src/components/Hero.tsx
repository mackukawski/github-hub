import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useICP } from '../context/ICPContext';
import { siteData } from '../data/siteData';
import { ICPToggle } from './ICPToggle';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    const { icp } = useICP();
    const content = siteData.hero[icp];
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Raw scroll-mapped values
    const rawOpacity = useTransform(scrollY, [0, 150, 300], [0, 0, 1]);
    const rawScale = useTransform(scrollY, [0, 150, 400], [0.9, 0.9, 1]);
    const rawY = useTransform(scrollY, [0, 150, 400], [100, 100, 0]);

    // Smoothed spring versions for "languid" high-end feel
    const springConfig = { damping: 20, stiffness: 60, mass: 1, restDelta: 0.001 };
    const opacity = useSpring(rawOpacity, springConfig);
    const scale = useSpring(rawScale, springConfig);
    const y = useSpring(rawY, springConfig);


    return (
        <section ref={containerRef} className="relative pt-4 pb-16 md:pt-6 md:pb-24 overflow-hidden bg-white dark:bg-opti-black transition-colors duration-300">
            {/* Header / Logo */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-8 md:mb-12">
                <nav className="flex justify-start">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-opti-green/30 shadow-lg shadow-opti-green/20 transition-transform group-hover:scale-105">
                            <img
                                src="/favicon.png"
                                alt="Opti360 Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-opti-green transition-colors">
                            Opti360
                        </span>
                    </div>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Content Container */}
                <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-700 border border-slate-700 dark:border-slate-600 px-4 py-2 rounded-full text-xs font-bold text-white mb-6 shadow-md"
                    >
                        <Clock className="w-3.5 h-3.5 text-opti-green" />
                        Official Launch: {siteData.config.launch_date} — Join Private Demo
                    </motion.div>

                    <div className="mb-6 flex justify-center">
                        <ICPToggle />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={icp}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.05]">
                                {content.headline}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                                {content.subheadline}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                                <a href="#demo" className="w-full sm:w-auto bg-opti-green text-opti-black px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-400 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-xl shadow-green-500/25">
                                    {content.cta}
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <Link to="/docs" className="w-full sm:w-auto bg-slate-800 dark:bg-slate-800 text-white px-10 py-5 font-bold text-lg transition-all border-2 border-slate-700 dark:border-slate-700 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-700 text-center shadow-lg hover:shadow-xl active:scale-95">
                                    View Documentation
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-opti-green">
                                {content.highlighted_modules.map((mod, i) => (
                                    <span key={i} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border-2 border-green-500 dark:border-opti-green text-opti-black dark:text-opti-green font-bold shadow-md">
                                        <CheckCircle2 className="w-4 h-4 text-opti-green" />
                                        {mod}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop Showcase Frame */}
                <motion.div
                    style={{ opacity, scale, y }}
                    className="relative max-w-6xl mx-auto mt-24"
                >
                    {/* Background Glows */}
                    <div className="absolute -inset-10 bg-opti-green/10 dark:bg-opti-green/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
                    <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

                    {/* Perspective Container */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent dark:from-opti-green/20 dark:to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                        {/* The "Showcase" Image */}
                        <div className="relative rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_120px_-20px_rgba(0,255,100,0.15)] overflow-hidden bg-white dark:bg-opti-black transition-transform duration-700 group-hover:scale-[1.01]">
                            <img
                                src="/hero.png"
                                alt="Opti360 Dashboard Preview"
                                className="w-full h-auto opacity-95 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                    </div>
                </motion.div>
            </div>

        </section>
    );
};
