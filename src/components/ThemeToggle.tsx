import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 text-white transition-all shadow-xl active:scale-95 flex items-center justify-center"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-white" />
                ) : (
                    <Moon className="w-5 h-5 text-slate-800" />
                )}
            </motion.div>
        </button>
    );
};
