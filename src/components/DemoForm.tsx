import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';

export const DemoForm: React.FC = () => {
    const { demo_form } = siteData;
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        businessModel: demo_form.business_models[0],
        asinRange: demo_form.asin_ranges[0],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 500);
    };

    return (
        <section id="demo" className="py-24 bg-slate-50 dark:bg-opti-darkGray border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-opti-green/10 border border-green-100 dark:border-opti-green/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-opti-green mb-6">
                    Early Access — Launching {siteData.config.launch_date}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Schedule Operational Demo</h2>
                    <p className="text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
                        Sign up today to be first in line for the {siteData.config.launch_date} release. We calibrate every demo to your specific operational volume.
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-green-50 dark:bg-opti-green/10 border border-green-200 dark:border-opti-green/20 rounded-lg"
                    >
                        <h3 className="text-xl font-bold text-opti-green mb-2">Request Received</h3>
                        <p className="text-slate-600 dark:text-gray-300">{demo_form.success_message}</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-opti-black p-8 rounded-lg border border-slate-200 dark:border-white/10 text-left space-y-6 shadow-xl transition-colors">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Work Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-opti-green focus:border-transparent outline-none transition-all shadow-inner"
                                    placeholder="simon@fba-logistics.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Business Model</label>
                                    <select
                                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-opti-green outline-none shadow-inner"
                                        value={formData.businessModel}
                                        onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                                    >
                                        {demo_form.business_models.map(m => (
                                            <option key={m} value={m} className="bg-white dark:bg-opti-black">{m}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Active ASIN Count</label>
                                    <select
                                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-opti-green outline-none shadow-inner"
                                        value={formData.asinRange}
                                        onChange={(e) => setFormData({ ...formData, asinRange: e.target.value })}
                                    >
                                        {demo_form.asin_ranges.map(r => (
                                            <option key={r} value={r} className="bg-white dark:bg-opti-black">{r}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-opti-green text-opti-black font-bold py-4 rounded-lg hover:bg-green-400 transition-colors mt-4 shadow-md hover:shadow-lg">
                                Book Qualification Call
                            </button>
                        </form>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
