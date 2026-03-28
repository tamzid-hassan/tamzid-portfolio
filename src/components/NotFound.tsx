import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { ArrowLeft, MonitorX } from 'lucide-react';

export function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center p-6 relative z-10">
            <div className="max-w-xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassCard className="p-10 md:p-16 flex flex-col items-center">
                        <MonitorX size={64} className="text-gray-500 mb-6" />
                        <h1 className="text-6xl font-bold tracking-tighter mb-4 text-white">404</h1>
                        <h2 className="text-2xl font-medium text-gray-300 mb-4">Lost in cyberspace?</h2>
                        <p className="text-gray-400 mb-8">
                            The page you are looking for doesn't exist, has been moved, or is currently under construction.
                        </p>
                        <a
                            href="/"
                            className="bg-white text-black font-bold rounded-full px-8 py-3 flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            <ArrowLeft size={18} /> Back to Portfolio
                        </a>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}