"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    const navItems = ['Profile', 'Experience', 'Impact', 'Expertise', 'Education'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
                background: scrolled
                    ? 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.75) 100%)'
                    : 'transparent',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
            }}
        >
            <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-4 group cursor-pointer"
                >
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-nobel-gold/40 transition-all shrink-0">
                        <Image src="/rajat_avatar.webp" alt="RS" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <div className="flex items-baseline gap-1 leading-none">
                            <span className="text-white font-bold text-[17px] tracking-tight">RAJAT</span>
                            <span className="text-white/40 font-light text-[17px] tracking-tight">SRIVASTAVA</span>
                        </div>
                        <span className="text-nobel-gold font-mono text-[9px] font-black tracking-[0.25em] uppercase opacity-80 group-hover:opacity-100 transition-opacity leading-none">Architecting Intelligence</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={scrollToSection(item.toLowerCase())}
                            className="relative px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all duration-300 group"
                        >
                            {item}
                            <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-nobel-gold/70 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.98) 100%)',
                            backdropFilter: 'blur(24px) saturate(1.4)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        <div className="px-6 py-6 space-y-2">
                            {navItems.map(item => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={scrollToSection(item.toLowerCase())}
                                    className="block px-4 py-3 text-[12px] font-bold tracking-[0.3em] uppercase text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
