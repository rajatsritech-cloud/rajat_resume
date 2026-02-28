"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronRight, Linkedin, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import VideoBackground from "@/components/presentation/VideoBackground";

const VIDEO_SRC = 'https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4';

const Hero = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // Fallback: If video takes longer than 2.5s to trigger events or fails, unlock UI anyway
        const failsafeTimeout = setTimeout(() => {
            if (!isVideoLoaded) setIsVideoLoaded(true);
        }, 2500);

        if (!isVideoLoaded) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            clearTimeout(failsafeTimeout);
            document.body.style.overflow = '';
        };
    }, [isVideoLoaded]);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <header className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Preloader Overlay */}
            <AnimatePresence>
                {!isVideoLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center gap-6"
                    >
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
                            <div className="absolute inset-0 border-2 border-nobel-gold rounded-full border-t-transparent animate-[spin_1s_ease-in-out_infinite]"></div>
                        </div>
                        <span className="text-[10px] text-nobel-gold font-black tracking-[0.4em] uppercase animate-pulse">Initializing Cinematic UI</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Layer 0: Video Background */}
            <div className="absolute inset-0 z-0">
                <VideoBackground src={VIDEO_SRC} onLoadedData={() => setIsVideoLoaded(true)} />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Layer 2: Gradient overlays for depth */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/90 pointer-events-none" />
            <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none" />

            {/* Layer 3: Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-14 pt-32 pb-16">

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-4 mb-8 px-7 py-3 glass-card text-nobel-gold cursor-pointer"
                        style={{ fontSize: 'clamp(9px, 0.8vw, 11px)', fontWeight: 900, letterSpacing: '0.5em', textTransform: 'uppercase' as const }}
                    >
                        <Zap size={16} className="text-nobel-gold animate-pulse" />
                        Senior Full-Stack Engineer
                    </motion.div>

                    {/* Name + Avatar */}
                    <div className="flex flex-col md:flex-row items-center lg:items-end gap-10 mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 group"
                        >
                            <div className="absolute inset-0 rounded-2xl blur-2xl transition-all duration-1000"
                                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.25) 0%, transparent 70%)' }} />
                            <Image
                                src="/rajat_avatar.webp"
                                alt="Rajat Srivastava"
                                fill
                                className="object-cover rounded-2xl border border-white/15 group-hover:border-nobel-gold/50 transition-all duration-700 rotate-2 group-hover:rotate-0"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="font-semibold leading-[0.9] mb-0 text-white tracking-tight text-center md:text-left"
                            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
                        >
                            Rajat <br />
                            <span className="text-white/40 font-light" style={{ fontSize: 'clamp(2rem, 3.2vw, 3.2rem)' }}>Srivastava</span>
                        </motion.h1>
                    </div>

                    {/* CTA + Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-8 items-center"
                    >
                        <a href="#experience" onClick={scrollToSection('experience')}
                            className="px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all flex items-center gap-3 group relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #C5A059, #D4B878)',
                                color: '#0a0a0a',
                                boxShadow: '0 16px 40px -8px rgba(197,160,89,0.4)',
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-3">VIEW WORK <ChevronRight size={18} /></span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <div className="flex gap-8">
                            <a href="https://www.linkedin.com/in/rajat-srivastava-dev/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110"><Linkedin size={22} /></a>
                            <a href="https://github.com/rajatsritech-cloud" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110"><Github size={22} /></a>
                            <a href="http://statementextract.com/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110"><Globe size={22} /></a>
                        </div>
                    </motion.div>
                </div>

                {/* Profile Summary Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="w-full lg:w-[38%] max-w-xl cursor-pointer"
                >
                    <div className="glass-card p-10 lg:p-12 relative overflow-hidden group"
                        style={{ boxShadow: '0 32px 80px -16px rgba(0,0,0,0.6)' }}
                    >
                        <div className="absolute top-0 right-0 w-56 h-56 rounded-full -mr-28 -mt-28 group-hover:scale-150 transition-transform duration-[2000ms]"
                            style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 70%)' }} />

                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-4">
                            <div className="w-10 h-[1px] bg-nobel-gold"></div>
                            Profile Summary
                        </h3>

                        <div className="space-y-6 text-white/60 font-light leading-relaxed text-[17px]">
                            <p className="mb-0">
                                <span className="text-white font-semibold">7+ Years</span> experience building large-scale, distributed systems and high-performance Generative AI integrations.
                            </p>
                            <p className="mb-0">
                                Specialized in <span className="text-nobel-gold font-semibold">React, Node, Python, and Azure</span>, driving 80%+ automation for critical enterprise workflows.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-pointer z-10" onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
