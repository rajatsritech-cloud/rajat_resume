"use client";

import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-20 relative overflow-hidden" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Atmospheric glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 -z-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.1) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-6">
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block">05 / QUALIFICATIONS</span>
                        <h3 className="text-3xl md:text-4xl mb-8 text-white font-semibold leading-tight tracking-tight uppercase whitespace-nowrap">Education & <span className="font-light text-white/30">Credentials.</span></h3>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-10 glass-card relative group overflow-hidden cursor-pointer"
                        >
                            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"
                                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 70%)' }} />
                            <h4 className="text-2xl text-white font-semibold mb-3 uppercase leading-tight">B.Tech (Computer Science)</h4>
                            <p className="text-nobel-gold font-bold text-xs uppercase tracking-[0.3em] mb-5">Rajasthan Technical University (RTU)</p>
                            <p className="text-white/50 text-[17px] font-light leading-relaxed mb-6 relative z-10">Specialized in Distributed Systems, Computer Science, and Software Engineering architectures.</p>
                            <div className="pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                                <span className="text-[11px] font-mono font-bold text-white/30 tracking-tighter uppercase">APR 2014 — JUL 2018</span>
                                <span className="px-5 py-2 bg-white text-[#0a0a0a] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Distinction</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <ul className="grid grid-cols-1 gap-5">
                            {[
                                "Microsoft Azure Fundamentals (AZ-900)",
                                "Generative AI & Advanced Prompt Engineering",
                                "React & TypeScript - The Practical Guide",
                                "Programming for Everybody – Python"
                            ].map((c, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="flex items-center gap-5 p-6 glass-card hover:border-nobel-gold/30 transition-all group cursor-pointer"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all"
                                        style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid rgba(197,160,89,0.2)' }}
                                    >
                                        <Award size={22} />
                                    </div>
                                    <span className="font-bold text-base text-white uppercase tracking-tight leading-tight">{c}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
