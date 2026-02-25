"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Target, Star } from 'lucide-react';
import EmailModal from "@/components/ui/EmailModal";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            id="profile"
            className="relative z-10 overflow-hidden"
            style={{
                padding: '6rem 0',
                background: '#0a0a0a',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Atmospheric glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-72 -mt-72 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -ml-48 -mb-48 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.04) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column */}
                    <div className="lg:w-[35%]">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block"
                        >
                            01 / ARCHITECTURE
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.15 }}
                            className="text-4xl md:text-5xl font-semibold mb-8 leading-[1.1] tracking-tight uppercase"
                            style={{ color: '#ffffff' }}
                        >
                            Engineered <br /><span className="font-light text-white/30">Excellence.</span>
                        </motion.h2>

                        <div className="space-y-6 w-full max-w-lg" style={{ perspective: '900px' }}>
                            {[
                                { icon: <MapPin size={24} />, label: "Base", value: "Bengaluru, India" },
                                { icon: <Mail size={24} />, label: "Direct", value: <button onClick={() => setIsModalOpen(true)} className="hover:text-nobel-gold transition-colors text-left">rajat.sri.tech@gmail.com</button> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, rotateX: 8 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    className="flex items-center gap-5 p-6 glass-card cursor-pointer group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #C5A059 0%, #D4B06A 100%)',
                                            color: '#fff',
                                            boxShadow: '0 6px 16px -4px rgba(197,160,89,0.35)',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</span>
                                        <span className="text-white font-semibold text-[17px]">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-[65%]">
                        <div className="space-y-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-2xl md:text-3xl text-white font-medium leading-[1.4] tracking-tight max-w-3xl"
                            >
                                Senior Full-Stack Software Engineer specializing in <span className="text-nobel-gold font-semibold">large-scale systems</span> and enterprise AI modernization.
                            </motion.p>

                            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.2), rgba(255,255,255,0.08), rgba(197,160,89,0.2), transparent)' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
                                {[
                                    { icon: <Target size={24} />, title: "Tech Lead Vision", desc: "Seeking to drive technical excellence and architect scalable solutions leveraging distributed systems and cloud-native AI." },
                                    { icon: <Star size={24} />, title: "Modernization Lead", desc: "Leading enterprise modernization via intelligent automation and AI enablement. Driving cloud-native architectures to enhance operational efficiency and business agility." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40, rotateX: 6 }}
                                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: 0.4 + i * 0.2 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="group p-10 glass-card h-full cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-nobel-gold group-hover:text-white transition-all duration-500"
                                                style={{
                                                    background: 'rgba(197,160,89,0.15)',
                                                    border: '1px solid rgba(197,160,89,0.25)',
                                                    color: '#C5A059',
                                                }}
                                            >
                                                {feature.icon}
                                            </div>
                                            <h4 className="text-xl text-white font-semibold tracking-tight leading-snug">{feature.title}</h4>
                                        </div>
                                        <p className="text-white/60 text-[17px] leading-relaxed font-light">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
