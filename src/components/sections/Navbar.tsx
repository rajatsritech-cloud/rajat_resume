"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLightSection, setIsLightSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect if navbar is over a light or dark section
            const navHeight = 80;
            const checkPoint = navHeight / 2;
            const el = document.elementFromPoint(window.innerWidth / 2, checkPoint);
            if (el) {
                const section = el.closest('section, header, footer');
                if (section) {
                    const bg = getComputedStyle(section).backgroundColor;
                    // Parse RGB and check luminance — light sections have high luminance
                    const match = bg.match(/\d+/g);
                    if (match && match.length >= 3) {
                        const [r, g, b] = match.map(Number);
                        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                        setIsLightSection(luminance > 0.6);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
                scrolled
                    ? isLightSection
                        ? "bg-white/95 backdrop-blur-2xl shadow-lg py-4 border-b border-stone-200/60"
                        : "bg-stone-950/98 backdrop-blur-2xl shadow-2xl py-4 border-b border-white/5"
                    : "bg-transparent py-8"
            )}>
                <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
                    <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative w-12 h-12 group-hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                            <Image
                                src="/rajat_avatar.webp"
                                alt="Rajat Srivastava"
                                fill
                                className={cn(
                                    "object-cover rounded-2xl transition-all rotate-3 group-hover:rotate-0",
                                    scrolled && isLightSection
                                        ? "border border-stone-200/60 group-hover:border-nobel-gold/50"
                                        : "border border-white/10 group-hover:border-nobel-gold/50"
                                )}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "font-sans font-semibold text-base tracking-tight leading-none mb-1 uppercase transition-colors duration-500",
                                scrolled && isLightSection ? "text-stone-950" : "text-white"
                            )}>
                                RAJAT <span className={cn(
                                    "font-light transition-colors duration-500",
                                    scrolled && isLightSection ? "text-stone-400" : "text-stone-500"
                                )}>SRIVASTAVA</span>
                            </span>
                            <span className="text-[8px] font-black tracking-[0.4em] uppercase text-nobel-gold">Architecting Intelligence</span>
                        </div>
                    </div>

                    <div className={cn(
                        "hidden lg:flex items-center gap-12 text-[10px] font-black tracking-[0.35em] uppercase transition-colors duration-500",
                        scrolled && isLightSection ? "text-stone-500" : "text-stone-400"
                    )}>
                        {['profile', 'expertise', 'experience', 'impact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={scrollToSection(item)}
                                className={cn(
                                    "transition-all cursor-pointer relative overflow-hidden group py-1",
                                    scrolled && isLightSection ? "hover:text-stone-950" : "hover:text-white"
                                )}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-nobel-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </a>
                        ))}
                        <a
                            href="mailto:rajat.sri.tech@gmail.com"
                            className={cn(
                                "ml-8 px-8 py-3.5 rounded-full transition-all shadow-lg cursor-pointer hover:-translate-y-1 active:scale-95 font-bold tracking-[0.2em] text-[10px]",
                                scrolled && isLightSection
                                    ? "bg-stone-950 text-white hover:bg-nobel-gold"
                                    : "bg-white text-stone-950 hover:bg-nobel-gold hover:text-white"
                            )}
                        >
                            CONTACT RAJAT
                        </a>
                    </div>

                    <button
                        className={cn(
                            "lg:hidden p-3 rounded-2xl border transition-colors duration-500",
                            scrolled && isLightSection
                                ? "text-stone-950 bg-stone-100 border-stone-200/60"
                                : "text-white bg-white/5 border-white/10"
                        )}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-stone-950 flex flex-col p-12 text-white"
                    >
                        <div className="flex justify-end mb-16">
                            <button onClick={() => setMenuOpen(false)} className="p-5 bg-white/5 rounded-full border border-white/10"><X size={32} /></button>
                        </div>
                        <div className="flex flex-col gap-10 text-3xl font-sans font-semibold">
                            {['profile', 'expertise', 'experience', 'impact'].map(item => (
                                <a key={item} href={`#${item}`} onClick={scrollToSection(item)} className="hover:text-nobel-gold transition-colors uppercase tracking-tighter">{item}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
