"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Target, Star } from 'lucide-react';
import EmailModal from "@/components/ui/EmailModal";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="profile" className="relative z-10 overflow-hidden py-24" style={{ background: '#050505' }}>
            <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column */}
                    <div className="lg:w-[35%]">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-4 block"
                        >01 / ARCHITECTURE</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="font-semibold mb-8 leading-[1.08] tracking-tighter uppercase text-white"
                        >
                            Engineered <br /><span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Excellence.</span>
                        </motion.h2>

                        <div className="space-y-4 w-full max-w-lg">
                            {[
                                { icon: <MapPin size={20} />, label: "Base", value: "Bengaluru, India" },
                                { icon: <Mail size={20} />, label: "Direct", value: <button onClick={() => setIsModalOpen(true)} className="hover:text-nobel-gold transition-colors text-left">rajat.sri.tech@gmail.com</button> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.25 + i * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className="flex items-center gap-4 p-5 glass-card cursor-pointer group"
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 accent-glow"
                                        style={{ background: 'linear-gradient(135deg, #D4A853 0%, #E8C872 100%)', color: '#050505' }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white/30 text-[12px] font-medium uppercase tracking-[0.2em] mb-0.5">{item.label}</span>
                                        <span className="text-white font-medium text-[17px]">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-[65%]">
                        <div className="space-y-10">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="text-[1.85rem] md:text-[2rem] text-white font-medium leading-[1.4] tracking-tight max-w-3xl"
                            >
                                Senior Full-Stack Software Engineer specializing in <span className="text-nobel-gold">large-scale systems</span> and enterprise AI modernization.
                            </motion.p>

                            <div className="section-divider" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: <Target size={20} />, title: "Tech Lead Vision", desc: "Seeking to drive technical excellence and architect scalable solutions leveraging distributed systems and cloud-native AI." },
                                    { icon: <Star size={20} />, title: "Modernization Lead", desc: "Leading enterprise modernization via intelligent automation and AI enablement. Driving cloud-native architectures to enhance operational efficiency and business agility." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                                        whileHover={{ y: -4 }}
                                        className="group p-8 glass-card h-full cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3.5 mb-4">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all duration-500"
                                                style={{ background: 'rgba(212,168,83,0.08)' }}>
                                                {feature.icon}
                                            </div>
                                            <h4 className="text-[19px] text-white font-semibold tracking-tight leading-snug">{feature.title}</h4>
                                        </div>
                                        <p className="text-white/45 text-[17px] leading-relaxed font-light">{feature.desc}</p>
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
