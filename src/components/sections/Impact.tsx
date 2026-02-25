"use client";

import React from 'react';
import { EngineeringImpactDiagram } from "@/components/visualizations/Diagrams";
import { motion } from 'framer-motion';

const Impact = () => {
    return (
        <section id="impact" className="py-20 relative overflow-hidden" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Atmospheric glow */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.06) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-12 xl:col-span-5">
                        <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block">03 / PERFORMANCE GAINS</span>
                        <h2 className="text-4xl md:text-5xl text-white font-semibold mb-8 leading-[1.1] tracking-tight uppercase">Measurable <br /><span className="font-light text-white/30">Impact.</span></h2>
                        <p className="text-[17px] text-white/60 font-light leading-relaxed mb-8 max-w-md">
                            Architecting the transition from legacy bottlenecks to high-velocity delivery within the <span className="text-nobel-gold font-semibold">PwC Technical Ecosystem.</span>
                        </p>
                        <div className="space-y-10">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="p-10 glass-card cursor-pointer"
                            >
                                <span className="text-6xl text-white font-semibold block leading-none mb-4 tracking-tight">80%</span>
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-[2px] bg-nobel-gold"></div>
                                    <p className="text-[12px] text-white/40 uppercase tracking-[0.6em] font-black mb-0">Automation Achieved</p>
                                </div>
                            </motion.div>
                            <div className="flex items-center gap-8 group pl-6 cursor-pointer">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-semibold text-white/20 line-through decoration-white/10">40m</span>
                                    <span className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase mt-2">Legacy</span>
                                </div>
                                <div className="w-24 h-[1px] bg-white/10 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 glass-card text-[9px] font-black text-nobel-gold tracking-widest uppercase">Process</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-6xl font-semibold text-white group-hover:text-nobel-gold transition-colors duration-500">3m</span>
                                    <span className="text-[10px] font-black text-nobel-gold tracking-[0.4em] uppercase mt-2">Optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="p-6 glass-card rounded-3xl">
                            <EngineeringImpactDiagram dark={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
