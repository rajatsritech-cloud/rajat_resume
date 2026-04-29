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

    const OptionButton = ({ onClick, icon, iconBg, label, sublabel }: { onClick: () => void, icon: React.ReactNode, iconBg: string, label: string, sublabel: string }) => (
        <button onClick={onClick}
            className="w-full flex items-center justify-between p-4 rounded-xl transition-all group"
            style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
        >
            <div className="flex items-center gap-3.5">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${iconBg}`}>
                    {icon}
                </div>
                <div className="text-left">
                    <div className="text-white font-medium text-sm">{label}</div>
                    <div className="text-white/30 text-[11px]">{sublabel}</div>
                </div>
            </div>
            <ArrowRight size={14} className="text-white/15 group-hover:text-nobel-gold transition-colors" />
        </button>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200]"
                        style={{ background: 'rgba(5,5,5,0.75)', backdropFilter: 'blur(4px)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[210] p-5 rounded-2xl"
                        style={{
                            background: 'linear-gradient(145deg, rgba(15,15,15,0.97) 0%, rgba(10,10,10,0.98) 100%)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px -12px rgba(0,0,0,0.8)',
                        }}
                    >
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-white text-base font-semibold tracking-tight">Contact Options</h3>
                            <button onClick={onClose} className="p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors text-white/25 hover:text-white">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-2.5">
                            <OptionButton
                                onClick={handleGmail}
                                icon={<Mail size={18} />}
                                iconBg="bg-red-500/15 text-red-400"
                                label="Open in Gmail"
                                sublabel="Best for browser users"
                            />
                            <OptionButton
                                onClick={handleDefault}
                                icon={<Mail size={18} />}
                                iconBg="bg-blue-500/15 text-blue-400"
                                label="Open Default App"
                                sublabel="Best for native apps (Outlook, Mail)"
                            />
                            <button onClick={handleCopy}
                                className="w-full flex items-center justify-between p-4 rounded-xl transition-all group"
                                style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] text-white/30 group-hover:scale-110 transition-transform">
                                        {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm">{copied ? "Copied!" : "Copy Email"}</div>
                                        <div className="text-white/30 text-[11px]">{email}</div>
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
