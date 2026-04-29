"use client";

import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden" style={{ background: '#050505' }}>
            <div className="section-divider" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-6">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-4 block"
                        >05 / QUALIFICATIONS</motion.span>
                        <h2 className="mb-7 text-white font-semibold leading-[1.08] tracking-tighter uppercase">Education & <span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Credentials.</span></h2>

                        <motion.div
                            whileHover={{ y: -3 }}
                            className="p-8 glass-card relative group overflow-hidden cursor-pointer"
                        >
                            <h3 className="text-lg text-white font-semibold mb-2 uppercase leading-tight">B.Tech (Computer Science)</h3>
                            <p className="text-nobel-gold font-semibold text-[13px] uppercase tracking-[0.2em] mb-4">Rajasthan Technical University (RTU)</p>
                            <p className="text-white/40 text-[17px] font-light leading-relaxed mb-5 relative z-10">Specialized in Distributed Systems, Computer Science, and Software Engineering architectures.</p>
                            <div className="pt-5 flex justify-between items-center relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                                <span className="text-[11px] font-mono font-medium text-white/20 tracking-tight uppercase">APR 2014 — JUL 2018</span>
                                <span className="px-3.5 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-widest accent-glow"
                                    style={{ background: 'linear-gradient(135deg, #D4A853, #E8C872)', color: '#050505' }}>
                                    Distinction
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <ul className="grid grid-cols-1 gap-3.5">
                            {[
                                "Microsoft Azure Fundamentals (AZ-900)",
                                "Generative AI & Advanced Prompt Engineering",
                                "React & TypeScript - The Practical Guide",
                                "Programming for Everybody – Python"
                            ].map((c, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 p-5 glass-card transition-all group cursor-pointer"
                                >
                                    <div className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all duration-400"
                                        style={{ background: 'rgba(212,168,83,0.08)' }}>
                                        <Award size={18} />
                                    </div>
                                    <span className="font-medium text-[16px] text-white/80 uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{c}</span>
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
