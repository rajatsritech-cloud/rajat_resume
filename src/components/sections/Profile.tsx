"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Target, Star } from 'lucide-react';

const Profile = () => {
    return (
        <section id="profile" className="py-24 bg-stone-50 relative z-10 border-b border-stone-100 overflow-hidden">
            {/* Liquid Background Pulse */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nobel-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-28 items-start">
                    <div className="lg:w-[35%] lg:sticky lg:top-48">
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-10 block">01 / ARCHITECTURE</span>
                        <h2 className="font-serif text-5xl md:text-6xl mb-10 text-stone-950 leading-[1] tracking-tighter uppercase">Engineered <br /><span className="italic font-normal text-stone-400">Excellence.</span></h2>
                        <div className="space-y-6 w-full max-w-lg">
                            {[
                                { icon: <MapPin size={24} />, label: "Base", value: "Bengaluru, India" },
                                { icon: <Mail size={24} />, label: "Direct", value: "rajat.sri.tech@gmail.com" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="flex items-center gap-8 p-8 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-stone-200/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:border-nobel-gold/30 hover:shadow-2xl group cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-stone-950 text-white flex items-center justify-center group-hover:bg-nobel-gold transition-all shadow-lg shrink-0">{item.icon}</div>
                                    <div className="flex flex-col">
                                        <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</span>
                                        <span className="text-stone-950 font-bold text-lg">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-[65%]">
                        <div className="space-y-20">
                            <p className="text-2xl md:text-4xl text-stone-950 font-serif leading-[1.3] tracking-tight max-w-3xl">
                                Senior Full-Stack Software Engineer specializing in <span className="text-nobel-gold italic">large-scale systems</span> and enterprise AI modernization.
                            </p>

                            <div className="h-px w-full bg-stone-200/50"></div>

                            {/* Restored Horizontal Layout (grid-cols-2) while maintaining wide presence */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[
                                    { icon: <Target size={24} />, title: "Tech Lead Vision", desc: "Seeking to drive technical excellence and architect scalable solutions leveraging distributed systems and cloud-native AI." },
                                    { icon: <Star size={24} />, title: "PwC Leadership", desc: "Leading critical modernization initiatives from legacy COBOL to modern Java stacks using Agentic AI workflows." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="group p-10 bg-white/40 backdrop-blur-lg border border-stone-200/40 rounded-[3rem] hover:border-nobel-gold/30 transition-all hover:shadow-xl h-full cursor-pointer"
                                    >
                                        <div className="flex items-center gap-5 mb-8">
                                            <div className="w-12 h-12 bg-white border border-stone-200/60 rounded-2xl flex items-center justify-center text-stone-950 group-hover:bg-nobel-gold group-hover:text-white transition-all shadow-sm shrink-0">{feature.icon}</div>
                                            <h4 className="font-serif text-3xl text-stone-950 font-bold tracking-tight leading-none">{feature.title}</h4>
                                        </div>
                                        <p className="text-stone-600 text-[18px] leading-relaxed font-light">{feature.desc}</p>
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
