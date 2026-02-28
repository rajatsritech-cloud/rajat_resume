"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Phone, ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';
import { CloudSystemScene } from "@/components/visualizations/QuantumScene";
import EmailModal from "@/components/ui/EmailModal";
import VideoBackground from "@/components/presentation/VideoBackground";

const VIDEO_SRC = 'https://videos.pexels.com/video-files/27607570/12184333_1920_1080_24fps.mp4';

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

            {/* CTA Section with Video */}
            <div className="relative pt-32 pb-24">
                {/* Video BG */}
                <div className="absolute inset-0 z-0">
                    <VideoBackground src={VIDEO_SRC} />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
                </div>

                {/* 3D Scene overlay */}
                <div className="absolute inset-0 z-[1] opacity-50 pointer-events-none">
                    <CloudSystemScene />
                </div>

                <div className="text-center relative z-20 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-10 block">AVAILABLE FOR LEADERSHIP</span>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-[1.1] tracking-tight text-white uppercase">Architecting <br />the Enterprise <br /><span className="text-white/30 font-light">Era.</span></h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                            <button onClick={() => setIsModalOpen(true)}
                                className="px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all flex items-center gap-4 group relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
                                    color: '#0a0a0a',
                                    boxShadow: '0 16px 40px -8px rgba(255,255,255,0.2)',
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-4">INITIATE HIRE <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                                <div className="absolute inset-0 bg-nobel-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                            <a href="/rajatsrivastava_resume_2026.pdf" download
                                className="px-8 py-5 glass-card rounded-full font-bold text-[11px] tracking-[0.3em] uppercase text-white hover:border-nobel-gold/50 transition-all"
                            >
                                DOWNLOAD RESUME
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="py-16 relative z-20" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16">
                        <div className="md:col-span-6">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="relative w-16 h-16 shadow-2xl">
                                    <Image
                                        src="/rajat_avatar.webp"
                                        alt="Rajat Srivastava"
                                        fill
                                        className="object-cover rounded-2xl border border-white/10"
                                    />
                                </div>
                                <span className="font-semibold text-xl tracking-tight text-white uppercase leading-none">RAJAT <br /><span className="text-white/40 font-light">SRIVASTAVA</span></span>
                            </div>
                            <p className="text-[17px] font-light leading-relaxed max-w-xl mb-10 text-white/50">
                                &quot;Dedicated to driving technical excellence, mentoring world-class teams, and architecting scalable AI-first solutions.&quot;
                            </p>
                            <div className="flex gap-8">
                                <a href="https://www.linkedin.com/in/rajat-srivastava-dev/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Linkedin size={22} /></a>
                                <a href="https://github.com/rajatsritech-cloud" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Github size={22} /></a>
                                <a href="http://statementextract.com/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Globe size={22} /></a>
                                <button onClick={() => setIsModalOpen(true)} className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Mail size={22} /></button>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-white/60 mb-6">Directory</h5>
                            <ul className="space-y-5 text-[12px] font-black uppercase tracking-[0.3em]">
                                {['Profile', 'Expertise', 'Experience', 'Impact'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="text-white/40 hover:text-nobel-gold transition-colors block w-fit">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-white/60 mb-6">Connections</h5>
                            <div className="space-y-6 text-[17px] font-light text-white/50">
                                <p className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white mb-0"><MapPin size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> Bengaluru, India</p>
                                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white text-white/50 font-light text-[17px]"><Mail size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> rajat.sri.tech@gmail.com</button>
                                <p className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white mb-0"><Phone size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> +91 9664258497</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[9px] tracking-[0.6em] uppercase opacity-30 font-black text-white mb-0">
                            © {new Date().getFullYear()} RAJAT SRIVASTAVA • ENGINEERED FOR FUTURE SCALE
                        </p>
                        <div className="flex gap-6 items-center glass-card px-6 py-3 rounded-full">
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse"></div>
                            <span className="text-[9px] font-black tracking-[0.4em] text-white/60 uppercase leading-none">Available for Lead Engineering Roles</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
