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
            <div className="text-center relative z-20 pb-48 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <CloudSystemScene />
                    </div>

                    <span className="text-nobel-gold font-black text-[12px] tracking-[1.2em] uppercase mb-12 block">AVAILABLE FOR LEADERSHIP</span>
                    <h2 className="font-serif text-5xl md:text-8xl mb-20 leading-[1] tracking-tighter text-white uppercase">Architecting <br />the Enterprise <br /><span className="text-stone-500 italic font-light">Era.</span></h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <a href="mailto:rajat.sri.tech@gmail.com" className="px-12 py-6 bg-white text-stone-950 rounded-full font-black text-[11px] tracking-[0.4em] uppercase hover:bg-nobel-gold hover:text-white transition-all shadow-xl flex items-center gap-5 group">
                            INITIATE HIRE <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#" className="px-10 py-6 border border-white/20 hover:border-nobel-gold/50 rounded-full font-black text-[11px] tracking-[0.4em] uppercase transition-all backdrop-blur-3xl text-white">
                            DOWNLOAD DOSSIER
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="bg-stone-950 text-stone-500 py-32 border-t border-white/5 relative z-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-32">
                        <div className="md:col-span-6">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="relative w-16 h-16 shadow-2xl">
                                    <Image
                                        src="/rajat_avatar.webp"
                                        alt="Rajat Srivastava"
                                        fill
                                        className="object-cover rounded-2xl border border-white/10"
                                    />
                                </div>
                                <span className="font-serif font-bold text-2xl tracking-tight text-white uppercase leading-none">RAJAT <br /><span className="text-stone-500 font-normal">SRIVASTAVA</span></span>
                            </div>
                            <p className="text-2xl font-light leading-relaxed max-w-xl mb-12 text-stone-400 italic font-serif">
                                "Dedicated to driving technical excellence, mentoring world-class teams, and architecting scalable AI-first solutions."
                            </p>
                            <div className="flex gap-10">
                                <a href="#" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                                <a href="#" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Github size={24} /></a>
                                <a href="mailto:rajat.sri.tech@gmail.com" className="text-stone-600 hover:text-white transition-all transform hover:scale-110"><Mail size={24} /></a>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-stone-200 mb-10">Directory</h5>
                            <ul className="space-y-8 text-[12px] font-black uppercase tracking-[0.3em]">
                                {['Profile', 'Expertise', 'Experience', 'Impact'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase()}`} onClick={scrollToSection(item.toLowerCase())} className="hover:text-nobel-gold transition-colors block w-fit">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h5 className="text-[11px] font-black tracking-[0.6em] uppercase text-stone-200 mb-10">Connections</h5>
                            <div className="space-y-8 text-xl font-light text-stone-300">
                                <p className="flex items-center gap-6 group cursor-pointer transition-all hover:text-white"><MapPin size={22} className="text-nobel-gold group-hover:scale-110 transition-transform" /> Bengaluru, India</p>
                                <p className="flex items-center gap-6 group cursor-pointer transition-all hover:text-white"><Mail size={22} className="text-nobel-gold group-hover:scale-110 transition-transform" /> rajat.sri.tech@gmail.com</p>
                                <p className="flex items-center gap-6 group cursor-pointer transition-all hover:text-white"><Phone size={22} className="text-nobel-gold group-hover:scale-110 transition-transform" /> +91 9664258497</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
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
        </footer>
    );
};

export default Footer;
