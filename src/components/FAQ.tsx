import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 dark:bg-opti-darkGray transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Common Questions</h2>

                <div className="space-y-4">
                    {siteData.faq.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="border border-slate-200 dark:border-white/10 rounded-lg bg-white dark:bg-opti-black overflow-hidden transition-colors shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 dark:text-white">{item.q}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-slate-500 dark:text-gray-400" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-500 dark:text-gray-400" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="p-6 pt-0 text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-200 dark:border-white/5 mt-2">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
