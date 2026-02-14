"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { CloudSystemScene } from "@/components/visualizations/QuantumScene";

const Footer = () => {
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
        <footer className="relative bg-stone-950 pt-32 overflow-hidden">
            {/* CTA Section Integrated into Footer Top */}
            <div className="text-center relative z-20 pb-24 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <CloudSystemScene />
                    </div>

                    <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-10 block">AVAILABLE FOR LEADERSHIP</span>
                    <h2 className="font-sans text-3xl md:text-4xl font-semibold mb-12 leading-[1.1] tracking-tight text-white uppercase">Architecting <br />the Enterprise <br /><span className="text-stone-500 font-light">Era.</span></h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <a href="mailto:rajat.sri.tech@gmail.com" className="px-10 py-5 bg-white text-stone-950 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-nobel-gold hover:text-white transition-all shadow-lg flex items-center gap-4 group">
                            INITIATE HIRE <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#" className="px-8 py-5 border border-white/20 hover:border-nobel-gold/50 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all backdrop-blur-3xl text-white">
                            DOWNLOAD DOSSIER
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="bg-stone-950 text-stone-500 py-16 border-t border-white/5 relative z-20">
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
                                <span className="font-sans font-semibold text-lg tracking-tight text-white uppercase leading-none">RAJAT <br /><span className="text-stone-500 font-light">SRIVASTAVA</span></span>
                            </div>
                            <p className="text-base font-light leading-relaxed max-w-xl mb-10 text-stone-400 font-sans">
                                &quot;Dedicated to driving technical excellence, mentoring world-class teams, and architecting scalable AI-first solutions.&quot;
                            </p>
                            <div className="flex gap-8">
                                <a href="#" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                                <a href="#" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Github size={20} /></a>
                                <a href="mailto:rajat.sri.tech@gmail.com" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Mail size={20} /></a>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-stone-200 mb-6">Directory</h5>
                            <ul className="space-y-5 text-[12px] font-black uppercase tracking-[0.3em]">
                                {['Profile', 'Expertise', 'Experience', 'Impact'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="hover:text-nobel-gold transition-colors block w-fit">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-stone-200 mb-6">Connections</h5>
                            <div className="space-y-6 text-base font-light text-stone-300">
                                <p className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white"><MapPin size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> Bengaluru, India</p>
                                <p className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white"><Mail size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> rajat.sri.tech@gmail.com</p>
                                <p className="flex items-center gap-5 group cursor-pointer transition-all hover:text-white"><Phone size={18} className="text-nobel-gold group-hover:scale-110 transition-transform" /> +91 9664258497</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[9px] tracking-[0.6em] uppercase opacity-30 font-black">
                            © {new Date().getFullYear()} RAJAT SRIVASTAVA • ENGINEERED FOR FUTURE SCALE
                        </p>
                        <div className="flex gap-6 items-center bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-3xl">
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse"></div>
                            <span className="text-[9px] font-black tracking-[0.4em] text-stone-300 uppercase leading-none">Available for Lead Engineering Roles</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
