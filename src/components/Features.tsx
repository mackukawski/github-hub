import React from 'react';
import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';
import {
    BarChart4,
    Warehouse,
    FileText,
    AlertTriangle,
    Zap,
    ShieldCheck,
    Clock,
    ScanBarcode,
    TrendingUp,
    Layers
} from 'lucide-react';

const iconMap: Record<string, any> = {
    purchase_planning: TrendingUp,
    warehouse_execution: Warehouse,
    invoice_matching: FileText,
    claims_manager: AlertTriangle,
    diff_1: BarChart4,
    diff_2: Zap,
    diff_3: Clock,
    diff_4: ScanBarcode,
    diff_5: ShieldCheck,
    diff_6: Layers,
    default: Layers
};

export const Features: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-opti-black border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Operational Control</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Flagship capabilities designed to replace complex spreadsheet workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteData.flagship_features.map((feature, idx) => {
                        const Icon = iconMap[feature.id] || iconMap.default;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 1.0, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="dashboard-card group hover:border-opti-green/50 dark:hover:border-opti-green/50 transition-colors shadow-lg"
                            >
                                <div className="mb-4 text-opti-green group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                                    {feature.outcome}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Differentiators Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {siteData.differentiators.slice(0, 6).map((diff, idx) => (
                        <motion.div
                            key={diff.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 1.0, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                            className="p-6 rounded-lg bg-slate-50 dark:bg-opti-black border border-slate-100 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors shadow-sm"
                        >
                            <div className="text-opti-green font-mono text-xs mb-2 uppercase tracking-wider">
                                {diff.label}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-gray-300">
                                {diff.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#pricing" className="text-opti-green hover:text-green-700 dark:hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-2">
                        See full feature comparison <span className="text-lg">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
