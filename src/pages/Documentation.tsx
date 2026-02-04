import React from 'react';
import { motion } from 'framer-motion';

export const Documentation: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-opti-black text-slate-900 dark:text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6">Documentation</h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
                        Detailed guides on integrating and operating Opti360.
                    </p>

                    <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-lg border border-slate-200 dark:border-white/10 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                            <p className="mb-4">
                                Opti360 connects directly to your Amazon Seller Central account via SP-API.
                                Follow the steps below to authorize the application.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Log in to Opti360 Dashboard</li>
                                <li>Navigate to Settings `{'>'}` Integrations</li>
                                <li>Click "Connect Amazon SP-API"</li>
                                <li>Approve permissions on the Amazon consent screen</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-lg border border-slate-200 dark:border-white/10">
                            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                For programmatic access, please request an API key from your account manager.
                                Our REST API documentation is available at <code>api.opti360.com/docs</code>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a href="/" className="text-opti-green hover:underline">
                            ← Back to Home
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
