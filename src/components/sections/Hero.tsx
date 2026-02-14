"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { HeroScene } from "@/components/visualizations/QuantumScene";

const Hero = () => {
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
        <header className="relative min-h-[90vh] flex flex-col justify-center bg-stone-950 overflow-hidden pt-32 pb-16">
            <div className="absolute inset-0 z-0 opacity-50">
                <HeroScene />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-stone-950 via-stone-950/10 to-stone-950" />

            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-20">

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-4 mb-10 px-8 py-3 border border-white/10 text-nobel-gold text-[11px] font-black tracking-[0.6em] uppercase rounded-full backdrop-blur-3xl bg-white/5 shadow-2xl cursor-pointer"
                    >
                        <Zap size={16} className="text-nobel-gold animate-pulse" />
                        Senior Full-Stack Architect
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center lg:items-end gap-12 mb-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 shadow-3xl group"
                        >
                            <div className="absolute inset-0 bg-nobel-gold/15 rounded-[3rem] blur-3xl group-hover:bg-nobel-gold/25 transition-all duration-1000"></div>
                            <Image
                                src="/rajat_avatar.webp"
                                alt="Rajat Srivastava"
                                fill
                                className="object-cover rounded-[3rem] border border-white/10 group-hover:border-nobel-gold/40 transition-all duration-700 rotate-2 group-hover:rotate-0"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-0 text-white tracking-tighter text-center md:text-left"
                        >
                            Rajat <br />
                            <span className="text-stone-500 italic font-normal text-4xl md:text-6xl lg:text-7xl">Srivastava</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-10 items-center"
                    >
                        <a href="#experience" onClick={scrollToSection('experience')} className="px-14 py-7 bg-nobel-gold text-white rounded-full font-black text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-stone-950 transition-all shadow-[0_30px_60px_-10px_rgba(197,160,89,0.4)] hover:-translate-y-2 flex items-center gap-4">
                            VIEW WORK <ChevronRight size={18} />
                        </a>
                        <div className="flex gap-8">
                            <a href="#" className="text-stone-500 hover:text-white transition-all transform hover:scale-125"><Linkedin size={28} /></a>
                            <a href="#" className="text-stone-500 hover:text-white transition-all transform hover:scale-125"><Github size={28} /></a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="w-full lg:w-[38%] max-w-xl cursor-pointer"
                >
                    <div className="p-12 lg:p-16 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] border border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-56 h-56 bg-nobel-gold/10 rounded-full blur-[90px] -mr-28 -mt-28 group-hover:scale-150 transition-transform duration-[2000ms]"></div>

                        <h3 className="font-serif text-3xl text-white mb-10 flex items-center gap-6">
                            <div className="w-14 h-[1px] bg-nobel-gold"></div>
                            Profile Summary
                        </h3>

                        <div className="space-y-10 text-stone-400 font-light leading-relaxed text-xl">
                            <p>
                                <span className="text-white font-bold">7+ Years</span> experience building large-scale, distributed systems and high-performance Generative AI integrations.
                            </p>
                            <p>
                                Specialized in <span className="text-nobel-gold italic font-medium">React, Python, and Azure</span>, driving 80%+ automation for critical enterprise workflows.
                            </p>

                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
