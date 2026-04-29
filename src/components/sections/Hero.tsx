"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight, Linkedin, Github, Globe } from 'lucide-react';
import Image from 'next/image';


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
        <header className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: '#050505' }}>
            {/* Image Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-ink-bg.png" /* Please place your image in the public folder and name it 'hero-ink-bg.png' (or update this path) */
                    alt="Background"
                    fill
                    priority
                    className="object-cover opacity-100 mix-blend-screen animate-image-breathe"
                />
                {/* Fade out to blend into the dark background below */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/10" /> {/* Extremely light overlay for max brightness */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 pt-32 pb-16">

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full cursor-pointer"
                        style={{
                            background: 'rgba(212,168,83,0.08)',
                            boxShadow: 'inset 0 1px 0 rgba(212,168,83,0.15), 0 0 0 1px rgba(212,168,83,0.1)',
                            fontSize: 'clamp(11px, 1vw, 13px)',
                            fontWeight: 600,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase' as const,
                            color: '#D4A853',
                        }}
                    >
                        <Zap size={13} className="text-nobel-gold" />
                        Senior Full-Stack Engineer
                    </div>

                    {/* Name + Avatar */}
                    <div className="flex flex-col md:flex-row items-center lg:items-end gap-10 mb-10">
                        <div
                            className="relative w-44 h-44 md:w-52 md:h-52 shrink-0 group"
                        >
                            <Image
                                src="/rajat_avatar.webp"
                                alt="Rajat Srivastava"
                                fill
                                priority
                                className="object-cover rounded-2xl transition-all duration-700 rotate-2 group-hover:rotate-0"
                                style={{ boxShadow: '0 24px 48px -12px rgba(0,0,0,0.6)' }}
                            />
                        </div>

                        <h1
                            className="font-bold leading-[0.9] mb-0 text-white tracking-tighter text-center md:text-left"
                            style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)' }}
                        >
                            Rajat <br />
                            <span className="font-extralight tracking-tight" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)' }}>Srivastava</span>
                        </h1>
                    </div>

                    {/* CTA + Social */}
                    <div
                        className="flex flex-wrap justify-center lg:justify-start gap-8 items-center"
                    >
                        <a href="#experience" onClick={scrollToSection('experience')}
                            className="group relative px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2.5 overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #D4A853, #E8C872)',
                                color: '#050505',
                                boxShadow: '0 8px 24px -4px rgba(212,168,83,0.4), 0 0 0 1px rgba(212,168,83,0.3)',
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2.5">VIEW WORK <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <div className="flex gap-5">
                            {[
                                { href: "https://www.linkedin.com/in/rajat-srivastava-dev/", icon: <Linkedin size={19} /> },
                                { href: "https://github.com/rajatsritech-cloud", icon: <Github size={19} /> },
                                { href: "http://statementextract.com/", icon: <Globe size={19} /> },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Profile Summary Card */}
                <div
                    className="w-full lg:w-[38%] max-w-xl cursor-pointer"
                >
                    <div className="glass-card p-9 lg:p-10 relative group">

                        <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                            <div className="w-7 h-[2px] bg-nobel-gold rounded-full"></div>
                            Profile Summary
                        </h3>

                        <div className="space-y-4 text-white/50 font-light leading-relaxed text-[17px]">
                            <p className="mb-0">
                                <span className="text-white font-medium">7+ Years</span> experience building large-scale, distributed systems and high-performance Generative AI integrations.
                            </p>
                            <p className="mb-0">
                                Specialized in <span className="text-nobel-gold font-medium">React, Node, Python, and Azure</span>, driving 80%+ automation for critical enterprise workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-20 hover:opacity-70 transition-opacity cursor-pointer z-10"
                onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-white/80">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-nobel-gold/50 to-transparent"></div>
            </motion.div>
        </header>
    );
};

export default Hero;
