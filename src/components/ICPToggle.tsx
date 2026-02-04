import React from 'react';
import { motion } from 'framer-motion';
import { useICP } from '../context/ICPContext';
import { siteData } from '../data/siteData';

export const ICPToggle: React.FC = () => {
    const { icp, setIcp } = useICP();

    return (
        <div className="flex justify-center mb-8">
            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-lg inline-flex relative border border-slate-300 dark:border-slate-700 shadow-lg">
                {siteData.icp_logic.toggle_options.map((option) => {
                    const isActive = icp === option.id;
                    return (
                        <button
                            key={option.id}
                            onClick={() => setIcp(option.id as any)}
                            className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors duration-200 ${isActive ? 'text-opti-black' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-md shadow-sm"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
