"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
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
                scrolled ? "bg-stone-950/98 backdrop-blur-2xl shadow-2xl py-4 border-b border-white/5" : "bg-transparent py-8"
            )}>
                <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
                    <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative w-12 h-12 group-hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                            <Image
                                src="/rajat_avatar.webp"
                                alt="Rajat Srivastava"
                                fill
                                className="object-cover rounded-2xl border border-white/10 group-hover:border-nobel-gold/50 transition-all rotate-3 group-hover:rotate-0"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-semibold text-base tracking-tight text-white leading-none mb-1 uppercase">RAJAT <span className="text-stone-500 font-light">SRIVASTAVA</span></span>
                            <span className="text-[8px] font-black tracking-[0.4em] uppercase text-nobel-gold">Architecting Intelligence</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-12 text-[10px] font-black tracking-[0.35em] text-stone-400 uppercase">
                        {['profile', 'expertise', 'experience', 'impact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={scrollToSection(item)}
                                className="hover:text-white transition-all cursor-pointer relative overflow-hidden group py-1"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-nobel-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </a>
                        ))}
                        <a
                            href="mailto:rajat.sri.tech@gmail.com"
                            className="ml-8 px-8 py-3.5 bg-white text-stone-950 rounded-full hover:bg-nobel-gold hover:text-white transition-all shadow-lg cursor-pointer hover:-translate-y-1 active:scale-95 font-bold tracking-[0.2em] text-[10px]"
                        >
                            CONTACT RAJAT
                        </a>
                    </div>

                    <button className="lg:hidden text-white p-3 bg-white/5 rounded-2xl border border-white/10" onClick={() => setMenuOpen(!menuOpen)}>
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
