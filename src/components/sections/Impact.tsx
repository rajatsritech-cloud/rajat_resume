"use client";

import React from 'react';
import { EngineeringImpactDiagram } from "@/components/visualizations/Diagrams";
import { motion } from 'framer-motion';

const Impact = () => {
    return (
        <section id="impact" className="py-24 bg-stone-50 border-b border-stone-100 relative overflow-hidden">
            {/* Liquid Background Orb */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-12 xl:col-span-5">
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-12 block">03 / PERFORMANCE GAINS</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-stone-950 mb-10 leading-[1] tracking-tighter uppercase">Measurable <br /><span className="italic font-normal text-stone-400">Impact.</span></h2>
                        <p className="text-xl text-stone-600 font-light leading-relaxed mb-16 max-w-md">
                            Architecting the transition from legacy bottlenecks to high-velocity delivery within the <span className="text-nobel-gold italic font-medium">PwC Technical Ecosystem.</span>
                        </p>
                        <div className="space-y-16">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="p-16 bg-white/60 backdrop-blur-2xl rounded-[4rem] border border-stone-200/60 shadow-xl hover:shadow-2xl hover:border-nobel-gold/30 transition-all pointer-events-auto cursor-pointer"
                            >
                                <span className="text-9xl font-serif text-stone-950 block leading-none mb-8 tracking-tighter">80%</span>
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-[2px] bg-nobel-gold"></div>
                                    <p className="text-[12px] text-stone-500 uppercase tracking-[0.6em] font-black">Automation Achieved</p>
                                </div>
                            </motion.div>
                            <div className="flex items-center gap-14 group pl-10 cursor-pointer">
                                <div className="flex flex-col">
                                    <span className="text-6xl font-serif text-stone-300 line-through decoration-stone-200">40m</span>
                                    <span className="text-[10px] font-black text-stone-400 tracking-[0.4em] uppercase mt-4">Legacy</span>
                                </div>
                                <div className="w-32 h-[1px] bg-stone-300 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-white border border-stone-200 rounded-full text-[9px] font-black text-nobel-gold tracking-widest uppercase shadow-sm">Process</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-8xl font-serif text-stone-950 group-hover:text-nobel-gold transition-colors duration-500">3m</span>
                                    <span className="text-[10px] font-black text-nobel-gold tracking-[0.4em] uppercase mt-4">Optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="p-8 bg-white/60 backdrop-blur-xl rounded-[5rem] border border-stone-200/60 shadow-2xl">
                            <EngineeringImpactDiagram dark={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
