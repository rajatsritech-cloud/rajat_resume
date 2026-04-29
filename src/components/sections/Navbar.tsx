"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
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
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
                background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
                boxShadow: scrolled ? '0 1px 0 0 rgba(255,255,255,0.04), 0 8px 32px -8px rgba(0,0,0,0.4)' : 'none',
            }}
        >
            <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-[68px]">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 group cursor-pointer"
                >
                    <div className="relative w-8 h-8 overflow-hidden rounded-lg shrink-0"
                        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}>
                        <Image src="/rajat_avatar.webp" alt="RS" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-baseline gap-1 leading-none">
                            <span className="text-white font-semibold text-base tracking-tight">RAJAT</span>
                            <span className="text-white/30 font-light text-base tracking-tight">SRIVASTAVA</span>
                        </div>
                        <span className="text-nobel-gold font-mono text-[10px] font-medium tracking-[0.15em] uppercase opacity-60 group-hover:opacity-100 transition-opacity leading-none mt-0.5">Architecting Intelligence</span>
                    </div>
                </a>

                <div className="hidden lg:flex items-center">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={scrollToSection(item.toLowerCase())}
                            className="relative px-4 py-2 text-[13px] font-medium tracking-[0.12em] uppercase text-white/35 hover:text-white transition-all duration-300 group"
                        >
                            {item}
                            <span className="absolute bottom-0.5 left-4 right-4 h-[1.5px] bg-gradient-to-r from-nobel-gold/70 to-nobel-gold/30 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                        </a>
                    ))}
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white/40 hover:text-white p-2 rounded-lg transition-all">
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden"
                        style={{
                            background: 'rgba(5,5,5,0.97)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.04)',
                        }}
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navItems.map(item => (
                                <a key={item} href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())}
                                    className="block px-4 py-3 text-[14px] font-medium tracking-[0.2em] uppercase text-white/45 hover:text-white hover:bg-white/[0.03] rounded-xl transition-all">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
