"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Phone, ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';
import EmailModal from "@/components/ui/EmailModal";
import { GridMatrixBackground } from "@/components/visualizations/AnimatedBackgrounds";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <footer className="relative overflow-hidden">
            <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* CTA Section */}
            <div className="relative pt-28 pb-24">
                <div className="section-divider" />

                {/* Mesh BG */}
                <GridMatrixBackground />

                <div className="text-center relative z-20 px-6 pt-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-8 block">AVAILABLE FOR LEADERSHIP</span>
                        <h2 className="font-semibold mb-10 leading-[1.08] tracking-tighter text-white uppercase">Architecting <br />the Enterprise <br /><span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Era.</span></h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <button onClick={() => setIsModalOpen(true)}
                                className="group relative px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-3 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
                                    color: '#050505',
                                    boxShadow: '0 8px 24px -4px rgba(255,255,255,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-3">INITIATE HIRE <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></span>
                                <div className="absolute inset-0 bg-nobel-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                            <a href="/rajatsrivastava_resume_2026.pdf" download
                                className="px-7 py-3.5 glass-card rounded-full text-[13px] font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-all">
                                DOWNLOAD RESUME
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="py-14 relative z-20" style={{ background: '#050505' }}>
                <div className="section-divider mb-14" />
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-14">
                        <div className="md:col-span-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-12 h-12" style={{ boxShadow: '0 8px 24px -6px rgba(0,0,0,0.5)' }}>
                                    <Image src="/rajat_avatar.webp" alt="Rajat Srivastava" fill
                                        className="object-cover rounded-xl" />
                                </div>
                                <span className="font-semibold text-base tracking-tight text-white uppercase leading-none">RAJAT <br /><span className="text-white/30 font-light">SRIVASTAVA</span></span>
                            </div>
                            <p className="text-[17px] font-light leading-relaxed max-w-xl mb-7 text-white/40">
                                &quot;Dedicated to driving technical excellence, mentoring world-class teams, and architecting scalable AI-first solutions.&quot;
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { href: "https://www.linkedin.com/in/rajat-srivastava-dev/", icon: <Linkedin size={18} /> },
                                    { href: "https://github.com/rajatsritech-cloud", icon: <Github size={18} /> },
                                    { href: "http://statementextract.com/", icon: <Globe size={18} /> },
                                ].map((s, i) => (
                                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300">
                                        {s.icon}
                                    </a>
                                ))}
                                <button onClick={() => setIsModalOpen(true)}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300">
                                    <Mail size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[12px] font-medium tracking-[0.4em] uppercase text-white/30 mb-5">Directory</h5>
                            <ul className="space-y-3.5 text-[14px] font-medium uppercase tracking-[0.2em]">
                                {['Profile', 'Expertise', 'Experience', 'Impact'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="text-white/30 hover:text-nobel-gold transition-colors block w-fit">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h5 className="text-[12px] font-medium tracking-[0.4em] uppercase text-white/30 mb-5">Connections</h5>
                            <div className="space-y-4 text-[17px] font-light text-white/40">
                                <p className="flex items-center gap-4 group cursor-pointer transition-all hover:text-white mb-0"><MapPin size={15} className="text-nobel-gold group-hover:scale-110 transition-transform" /> Bengaluru, India</p>
                                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-4 group cursor-pointer transition-all hover:text-white text-white/40 font-light text-[17px]"><Mail size={15} className="text-nobel-gold group-hover:scale-110 transition-transform" /> rajat.sri.tech@gmail.com</button>
                                <p className="flex items-center gap-4 group cursor-pointer transition-all hover:text-white mb-0"><Phone size={15} className="text-nobel-gold group-hover:scale-110 transition-transform" /> +91 9664258497</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                        <p className="text-[10px] tracking-[0.4em] uppercase text-white/15 font-medium mb-0">
                            © {new Date().getFullYear()} RAJAT SRIVASTAVA • ENGINEERED FOR FUTURE SCALE
                        </p>
                        <div className="flex gap-4 items-center px-4 py-2 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.02)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)] animate-pulse"></div>
                            <span className="text-[11px] font-medium tracking-[0.3em] text-white/40 uppercase leading-none">Available for Lead Engineering Roles</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
