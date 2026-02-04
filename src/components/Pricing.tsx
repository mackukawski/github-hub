import React, { useState } from 'react';
import { useICP } from '../context/ICPContext';
import { siteData } from '../data/siteData';
import { Check, ChevronDown, ChevronUp, X } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export const Pricing: React.FC = () => {
    const { icp } = useICP();
    const { plans, common_note } = siteData.pricing;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-slate-50 dark:bg-opti-darkGray relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Pricing Plans</h2>
                    <p className="text-slate-600 dark:text-gray-400">{common_note}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, idx) => {
                        const isRecommended = plan.recommended_for.includes(icp);
                        const isDimmed = !isRecommended && plan.id !== 'free';

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 1.0, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={clsx(
                                    "dashboard-card relative flex flex-col transition-all duration-300",
                                    isRecommended
                                        ? "border-opti-green ring-1 ring-opti-green bg-white dark:bg-opti-black order-first lg:order-none scale-105 z-10 shadow-2xl"
                                        : "bg-white dark:bg-opti-black border border-slate-200 dark:border-white/10",
                                    isDimmed && "opacity-100",
                                    !isDimmed && !isRecommended && "opacity-100",
                                    "lg:opacity-100"
                                )}
                            >
                                {isRecommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opti-green text-opti-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Recommended
                                    </div>
                                )}

                                {plan.badge && (
                                    <div className="absolute top-4 right-4 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white text-[10px] px-2 py-0.5 rounded border border-slate-200 dark:border-white/20 uppercase">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="text-sm text-slate-500 dark:text-gray-400 mb-4 h-10">{plan.best_for}</div>
                                    <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white mb-1">
                                        {plan.price === '0' ? 'Free' : plan.price}
                                    </div>
                                    {plan.price !== '0' && <div className="text-xs text-slate-500 dark:text-gray-500">per month</div>}
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-300">
                                            <Check className="w-5 h-5 text-opti-green shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#demo"
                                    className={clsx(
                                        "w-full py-3 rounded-lg font-bold text-sm transition-colors text-center",
                                        isRecommended
                                            ? "bg-opti-green text-opti-black hover:bg-green-400"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm"
                                    )}
                                >
                                    {plan.id === 'free' ? 'Start Testing' : 'Request Access'}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Feature Matrix Toggle */}
                <div className="text-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 text-opti-green font-semibold hover:underline"
                    >
                        {isExpanded ? (
                            <>Hide detailed comparison <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>View full feature comparison <ChevronDown className="w-4 h-4" /></>
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-12 overflow-hidden bg-white dark:bg-opti-black border border-slate-200 dark:border-white/10 rounded-xl shadow-xl"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-200 dark:border-white/10">
                                            <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Feature</th>
                                            <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Test / Validation</th>
                                            <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Reseller – Master</th>
                                            <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Prep Partner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                        {siteData.feature_matrix.map((group, gIdx) => (
                                            <React.Fragment key={gIdx}>
                                                <tr className="bg-slate-100 dark:bg-white/5">
                                                    <td colSpan={4} className="py-2 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                                                        {group.group}
                                                    </td>
                                                </tr>
                                                {group.features.map((feature, fIdx) => (
                                                    <tr key={fIdx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                                        <td className="py-4 px-6 text-sm text-slate-700 dark:text-gray-300">{feature.name}</td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-gray-400">
                                                            <MatrixValue value={feature.free} />
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-gray-400">
                                                            <MatrixValue value={feature.reseller_master} />
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-gray-400">
                                                            <MatrixValue value={feature.prep_partner} />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const MatrixValue: React.FC<{ value: any }> = ({ value }) => {
    if (typeof value === 'boolean') {
        return value ? <Check className="w-5 h-5 text-opti-green" /> : <X className="w-5 h-5 text-red-500" />;
    }
    return <span className="text-slate-900 dark:text-white font-medium">{value}</span>;
};
