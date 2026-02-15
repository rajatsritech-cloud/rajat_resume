"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Copy, X, Check } from 'lucide-react';

interface EmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    email?: string;
    subject?: string;
}

const EmailModal = ({ isOpen, onClose, email = "rajat.sri.tech@gmail.com", subject = "Opportunity" }: EmailModalProps) => {
    const [copied, setCopied] = React.useState(false);

    // Reset copied state when modal opens/closes
    React.useEffect(() => {
        if (isOpen) setCopied(false);
    }, [isOpen]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleGmail = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
        window.open(gmailUrl, '_blank');
        onClose();
    };

    const handleDefault = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[210] p-6 rounded-3xl bg-stone-900/95 border border-white/10 shadow-2xl backdrop-blur-2xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-sans text-lg font-semibold tracking-tight">Contact Options</h3>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Gmail Option */}
                            <button
                                onClick={handleGmail}
                                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-nobel-gold/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm">Open in Gmail</div>
                                        <div className="text-stone-500 text-[11px]">Best for browser users</div>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-stone-600 group-hover:text-nobel-gold transition-colors" />
                            </button>

                            {/* Default App Option */}
                            <button
                                onClick={handleDefault}
                                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-nobel-gold/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm">Open Default App</div>
                                        <div className="text-stone-500 text-[11px]">Best for native apps (Outlook, Mail)</div>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-stone-600 group-hover:text-nobel-gold transition-colors" />
                            </button>

                            {/* Copy Option */}
                            <button
                                onClick={handleCopy}
                                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-nobel-gold/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-500/20 flex items-center justify-center text-stone-400 group-hover:scale-110 transition-transform">
                                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm">{copied ? "Copied!" : "Copy Email"}</div>
                                        <div className="text-stone-500 text-[11px]">{email}</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EmailModal;
