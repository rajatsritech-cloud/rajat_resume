"use client";

import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-16 bg-stone-50 border-b border-stone-100 relative overflow-hidden">
            {/* Liquid Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-40 -z-10"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-6">
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block">05 / QUALIFICATIONS</span>
                        <h3 className="font-sans text-2xl md:text-3xl mb-8 text-stone-950 font-semibold leading-tight tracking-tight uppercase whitespace-nowrap">Education & <span className="font-light text-stone-400">Credentials.</span></h3>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white/70 backdrop-blur-2xl rounded-2xl border border-stone-200/60 shadow-lg relative group overflow-hidden cursor-pointer"
                        >
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-nobel-gold/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                            <h4 className="font-sans text-xl text-stone-950 font-semibold mb-3 uppercase leading-tight">B.Tech (Computer Science)</h4>
                            <p className="text-nobel-gold font-bold text-xs uppercase tracking-[0.3em] mb-5">Rajasthan Technical University (RTU)</p>
                            <p className="text-stone-500 text-base font-light leading-relaxed mb-6 relative z-10">Specialized in Distributed Systems, Computer Science, and Software Engineering architectures.</p>
                            <div className="pt-6 border-t border-stone-200/60 flex justify-between items-center relative z-10">
                                <span className="text-[11px] font-mono font-bold text-stone-400 tracking-tighter uppercase">APR 2014 — JUL 2018</span>
                                <span className="px-5 py-2 bg-stone-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Distinction</span>
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
                                    className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-xl rounded-xl border border-stone-200/60 shadow-md hover:shadow-lg hover:border-nobel-gold/30 transition-all group cursor-pointer"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-stone-200/40 shadow-inner flex items-center justify-center text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all">
                                        <Award size={22} />
                                    </div>
                                    <span className="font-bold text-base text-stone-950 uppercase tracking-tight leading-tight">{c}</span>
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
